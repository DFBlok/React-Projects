import { cartItemSchema, shippingAddressSchema } from "../validation/validator";
import { z } from "zod";

//CART
//return types objects
export type CartItem = z.infer<typeof cartItemSchema>;

// shipping address type
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
