"use client";

import React, { createContext, useContext, useState } from "react";

type EczodexContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light";

type EczodexContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const EczodexContext = createContext<EczodexContext | null>(null);

export default function EczodexContextProvider({
  children,
}: EczodexContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");


  return (
    <EczodexContext.Provider value={{ theme, setTheme }}>
      {children}
    </EczodexContext.Provider>
  );
}

export function useEczodexContext() {
  const context = useContext(EczodexContext);

  if (!context) {
    throw new Error(
      "useEczodexContext should be used within EczodexContextProvider"
    );
  }

  return context;
}
