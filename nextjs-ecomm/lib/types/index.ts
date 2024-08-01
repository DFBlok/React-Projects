import { cartItemSchema } from "../validation/validator";
import { z } from "zod";

//CART
//return types objects
export type CartItem = z.infer<typeof cartItemSchema>;
