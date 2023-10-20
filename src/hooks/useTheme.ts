import { useContext } from "react"


import { PrimeReactContext } from "primereact/api";

export function useTheme() {
  return useContext(PrimeReactContext);
}