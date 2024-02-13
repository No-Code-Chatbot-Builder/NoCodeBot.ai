"use client";

import { components, formFields } from "@/lib/authUtils";
import { Authenticator } from "@aws-amplify/ui-react";

export default function Page() {
  return (
    <Authenticator
      // socialProviders={["google"]}
      components={components}
      variation="modal"
      loginMechanisms={["email"]}
      formFields={formFields}
    >
      <div className="flex justify-center items-center h-screen">
        Dashboard Page
      </div>
    </Authenticator>
  );
}
