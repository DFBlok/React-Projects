"use client";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types";
import { removeItemFromCart, addItemToCart } from "@/lib/action/cart.action";
import { Cart } from "@prisma/client";
import { Loader, Minus, Plus, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

export default function CartForm({ cart }: { cart?: Cart }) {
  const router = useRouter();

  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const cartItems = cart?.items as CartItem[];

  return (
    <>
      <h1 className="py-4 h2-bold">Shopping Cart</h1>

      {!cart || cartItems?.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item: CartItem) => (
                  <TableRow key={item.slug}>
                    <TableCell>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell className="flex-center gap-2">
                      <Button
                        disabled={isPending}
                        variant="outline"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await removeItemFromCart(
                              item.productId
                            );
                            if (!res.success) {
                              toast({
                                variant: "destructive",
                                description: res.message,
                              });
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4  animate-spin" />
                        ) : (
                          <Minus className="w-4 h-4" />
                        )}
                      </Button>
                      <span>{item.qty}</span>
                      <Button
                        disabled={isPending}
                        variant="outline"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await addItemToCart(item);
                            if (!res?.success) {
                              toast({
                                variant: "destructive",
                                description: res?.message,
                              });
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4  animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <Card>
              <CardContent className="p-4   gap-4">
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}):
                  {formatCurrency(cart.itemsPrice)}
                </div>
                <Button
                  onClick={() => startTransition(() => router.push("/signin"))}
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader className="animate-spin w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
