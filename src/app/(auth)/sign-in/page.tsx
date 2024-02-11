import SignInForm from "@/components/forms/signin-form/index";
import AuthNavigation from "@/components/site/navigation/auth-nav";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-full">
      <div className="md:col-span-7 bg-accent hidden md:flex flex-col">
        <AuthNavigation />
        <div className="flex items-center justify-center flex-grow px-20 lg:px-40 xl:px-72">
          <h1 className="text-4xl font-bold text-secondary">
            Make Custom AI Chatbots with NoCodeBot.ai. Try now for Free.
          </h1>
        </div>
      </div>
      <div className="col-span-1 md:col-span-5">
        <AuthNavigation className="md:hidden" />
        <SignInForm />
      </div>
    </div>
  );
}
