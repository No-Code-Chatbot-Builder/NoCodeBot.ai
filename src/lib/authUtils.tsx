import {
  Authenticator,
  CheckboxField,
  useAuthenticator,
} from "@aws-amplify/ui-react";

export const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
      label: "Email",
      isRequired: true,
    },
  },
  signUp: {
    preferred_username: {
      label: "Username",
      placeholder: "Enter your username",
      isRequired: true,
      order: 1,
    },

    given_name: {
      placeholder: "Enter your First Name",
      label: "Full Name",
      isRequired: true,
      order: 2,
    },
    email: {
      placeholder: "Enter your business email",
      label: "Business Email",
      isRequired: true,
      order: 3,
    },
    birthdate: {
      placeholder: "Enter your Birthdate",
      label: "Birthdate",
      isRequired: true,
      order: 4,
    },

    address: {
      placeholder: "Enter your Address",
      label: "Address",
      isRequired: true,
      order: 5,
    },
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: true,
      order: 7,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 8,
    },
  },
};

export const components = {
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();

      return (
        <>
          {/* Re-use default `Authenticator.SignUp.FormFields` */}
          <Authenticator.SignUp.FormFields />
        </>
      );
    },
  },
};
