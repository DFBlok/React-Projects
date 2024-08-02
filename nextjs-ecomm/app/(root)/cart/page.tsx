import { getMyCart } from "@/lib/action/cart.action";
import CartForm from "./cart-form";
import { Cart } from "@prisma/client";
import { CartItem } from "@/lib/types";
import { APP_NAME } from "@/lib/constant";

export const metadata = {
  title: `Shopping Cart - ${APP_NAME}`,
};

type CartType = Omit<Cart, "items"> & { items: CartItem[] };

const CartPage = async () => {
  const cart = await getMyCart();
  if (!cart) {
    throw new Error("Cart not found");
  }

  const parsedCart: CartType = {
    ...cart,
    items: cart.items,
  };
  return <CartForm cart={parsedCart} />;
};

export default CartPage;
