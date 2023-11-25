import React, { ReactNode, createContext, useState } from "react";
import { httpClient } from "@services/HttpClient";

import { AxiosResponse } from "axios";

type AuthContextProps = {
  login: (signInDTO: SignInDTO) => void;
  logout: () => void;
  token: string;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

interface SignInDTO {
  Email: string;
  Senha: string;
}

interface SignInResponse {
  accessToken: string;
}

export const authContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  async function login({ Email, Senha }: SignInDTO) {
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

  function logout() {
    setToken("");
    setIsAuthenticated(false);
  }
  return (
    <authContext.Provider value={{ login, logout, token, isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
}
