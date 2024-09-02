"use server";
import { auth } from "@/auth";
import { getMyCart } from "@/lib/action/cart.action";
import { getUserById } from "@/lib/action/user.action";
import { redirect } from "next/navigation";
import { insertOrderSchema } from "../validation/validator";
import prisma from "@/prisma/client";
import { formatError } from "../utils";
import { isRedirectError } from "next/dist/client/components/redirect";

//GET
export async function getOrderById(orderId: string) {
  return await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

// CREATE
export const createOrder = async () => {
  try {
    const session = await auth();
    if (!session) throw new Error("User is not authenticated");
    const cart = await getMyCart();
    const user = await getUserById(session?.user?.id!);
    if (!cart || cart.items.length === 0) redirect("/cart");
    if (!user?.address) redirect("/shipping-address");
    if (!user.paymentMethod) redirect("/payment-method");

    const order = insertOrderSchema.parse({
      userId: user.id,
      shippingAddress: user.address[0],
      paymentMethod: user.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    });

    const insertedOrder = await prisma.$transaction(async (tx) => {
      const newOrder = await tx.order.create({
        data: order,
      });

      const orderItemsData = cart.items.map((item) => ({
        ...item,
        price: Number(item.price.toFixed(2)),
        orderId: newOrder.id,
      }));
      await tx.orderItem.createMany({
        data: orderItemsData,
      });

      await tx.cart.update({
        where: { id: cart.id },
        data: {
          items: [],
          totalPrice: 0,
          shippingPrice: 0,
          taxPrice: 0,
          itemsPrice: 0,
        },
      });

      return newOrder.id;
    });

    if (!insertedOrder) throw new Error("Order not created");
    redirect(`/order/${insertedOrder}`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: formatError(error) };
  }
};
