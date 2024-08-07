import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constant";

import { SignUpForm } from "./signup-form";

export const metadata: Metadata = {
  title: `Sign In - ${APP_NAME}`,
};

export default async function SignUpPage() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/icons/logo.png"
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Select a method to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}

/* const SignUpPage = () => {
  return (
    <div className="wrapper">
      <div className="max-w-sm mx-auto">
        <h1>SignUp form</h1>
        <SignUpForm />
      </div>
    </div>
  );
}; */ /* 

export default SignUpPage; */
