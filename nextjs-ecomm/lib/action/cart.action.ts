"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { cookies } from "next/headers";
import { CartItem } from "../types";

export async function getMyCart() {
  const sessionCartId = cookies().get("sessionCartId")?.value;
  const session = await auth();
  const userId = session?.user?.id as string | undefined;

  if (!sessionCartId) return null;

  const cart = await prisma.cart.findFirst({
    where: {
      OR: [{ userId }, { sessionCartId }],
    },
  });

  if (!cart) return null;

  return {
    ...cart,
    items: cart.items as CartItem[], // Type assertion to specify items as CartItem[]
  };
}
