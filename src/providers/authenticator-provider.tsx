import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";

interface AuthenticatorProviderProps {
    children: React.ReactNode;
}

const AutheicatorProvider: React.FC<AuthenticatorProviderProps> = ({ children }) => {
    return ( 
        <Authenticator.Provider>
            {children}
        </Authenticator.Provider>
     );
}
 
export default AutheicatorProvider;