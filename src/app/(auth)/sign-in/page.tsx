import SignInForm from "@/components/forms/signin-form/index";
import AuthNavigation from "@/components/site/navigation/auth-nav";

export default function Page() {
  return (
    <div className="flex h-full">
      <div className="hidden md:block md:w-7/12 bg-accent">
        <AuthNavigation />
        <div className="flex items-center justify-center h-[100vh] px-20 lg:px-40 xl:px-72">
          <h1 className="text-4xl font-bold text-secondary">
            Make Custom AI Chatbots with NoCodeBot.ai. Try now for Free.
          </h1>
        </div>
      </div>
      <div className="w-full md:w-5/12">
        <AuthNavigation className="block md:hidden" />
        <SignInForm />
      </div>
    </div>
  );
}
