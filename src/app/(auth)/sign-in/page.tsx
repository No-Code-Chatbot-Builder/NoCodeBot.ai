import SignInForm from "@/components/forms/signin-form/page";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex h-full">
      <div className="hidden md:block md:w-7/12 bg-accent">
        <div className="pt-10 pl-10 flex items-center justify-between top-0">
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
        </div>
        <div className="flex items-center justify-center h-[100vh] px-20 lg:px-40 xl:px-72">
          <h1 className="text-4xl font-bold text-secondary">
            Make Custom AI Chatbots with NoCodeBot.ai. Try now for Free.
          </h1>
        </div>
      </div>
      <div className="w-full md:w-5/12">
        <div
          className="pt-10 pl-10 flex items-center justify-between top-0
        md:hidden
        "
        >
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
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
