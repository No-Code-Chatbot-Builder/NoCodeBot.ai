import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../../global/mode-toggle";
import { Button } from "@/components/ui/button";

type Props = {
  user?: null;
};

const Navigation = (props: Props) => {
  return (
    <div className="py-6 px-10 flex items-center justify-between sticky top-0 z-20 bg-background">
      <aside className="flex items-center gap-2">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src={"./assets/ncbai.svg"}
              width={40}
              height={40}
              alt="NoCodeBot.ai logo"
            />
            <span className="text-xl font-bold">NoCodeBot.ai</span>
          </div>
        </Link>
      </aside>

      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"} className="hover:underline">
            Pricing
          </Link>
          <Link href={"#"} className="hover:underline">
            About
          </Link>
          <Link href={"#"} className="hover:underline">
            Browse
          </Link>
          <Link href={"#"} className="hover:underline">
            Features
          </Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/sign-in"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 transition"
        >
          Sign In
        </Link>

        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
