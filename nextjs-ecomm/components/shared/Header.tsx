import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import UserButton from "./user-button";
import { ShoppingCart, User2Icon } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/">
            <Image
              src="/icons/logo.png"
              alt="ecommerce logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="space-x-2 flex gap-2 items-center">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          {/* <Button asChild>
            <Link href="/signin">
              <User2Icon />
              Sign In
            </Link>
          </Button> */}
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
