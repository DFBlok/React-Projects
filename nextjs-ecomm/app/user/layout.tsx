import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constant";
import { MainNav } from "./main-nav";
import UserButton from "@/components/shared/user-button";
export default async function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/" className="w-36">
              <Image
                src="/icons/logo.png"
                width={80}
                height={80}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              <UserButton />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
      </div>
    </>
  );
}
