import SignUpForm from "@/components/forms/signup-form/index";
import AuthNavigation from "@/components/site/navigation/auth-nav";

export default function Page() {
  return (
    <div className="flex h-full">
      <div className="hidden md:block md:w-7/12 bg-accent">
        <AuthNavigation />
        <div className="flex items-center justify-center h-[100vh] px-20 lg:px-40 xl:px-60">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-secondary">
              Welcome to NoCodeBot.ai.
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign Up Now to make customizable agents that can assist you.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-5/12">
        <AuthNavigation className="block md:hidden" />
        <SignUpForm />
      </div>
    </div>
  );
}
