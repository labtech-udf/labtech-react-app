import React, { ReactNode, createContext, useState } from "react";
import { httpClient } from "@services/HttpClient";

import { AxiosResponse } from "axios";

interface SignInDTO {
  Email: string;
  Senha: string;
}

type AuthContextProps = {
  authenticate: (signInDTO: SignInDTO) => void;
  signOut: () => void;
  token: string;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

interface SignInResponse {
  accessToken: string;
}

export const authContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  async function authenticate({ Email, Senha }: SignInDTO) {
    setIsAuthenticated(true); // Remover

    //  modificar o que for necessário quando o endpoint de autenticação estiver funcionando
    try {
      const { data }: AxiosResponse<SignInResponse> = await httpClient.post(
        "auth/signin",
        {
          Email,
          Senha,
        },
      );

      if (data) {
        setToken(data.accessToken);
        setIsAuthenticated(true);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  }

  function signOut() {
    setToken("");
    setIsAuthenticated(false);
  }
  return (
    <authContext.Provider
      value={{ authenticate, signOut, token, isAuthenticated }}
    >
      {children}
    </authContext.Provider>
  );
}
