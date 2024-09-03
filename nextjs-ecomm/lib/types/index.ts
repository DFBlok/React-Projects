import { cartItemSchema, shippingAddressSchema } from "../validation/validator";
import { z } from "zod";
import { Order as PrismaOrder } from "@prisma/client";
import { OrderItem } from "@prisma/client";
import { paymentResultSchema } from "../validation/validator";

//CART
//return types objects
export type CartItem = z.infer<typeof cartItemSchema>;

export type PaymentResult = z.infer<typeof paymentResultSchema>;

// shipping address type
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
// Type for Order with nested relations
export type Order = PrismaOrder & {
  orderItems: OrderItem[];
  user: { name: string | null; email: string | null };
  shippingAddress: ShippingAddress;
};
