"use client";

import React, { createContext, ReactNode, useState } from "react";

type MouseContextProps = {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
};

export const MouseContext = createContext<MouseContextProps>({
  cursorType: "",
  cursorChangeHandler: () => {},
});

interface MouseContextProviderProps {
  children: ReactNode;
}

export default function MouseContextProvider({
  children,
}: MouseContextProviderProps) {
  const [cursorType, setCursorType] = useState<string>("");

  const cursorChangeHandler = (newCursorType: string) => {
    setCursorType(newCursorType);
  };

  const contextValue: MouseContextProps = {
    cursorType: cursorType,
    cursorChangeHandler: cursorChangeHandler,
  };

  return (
    <MouseContext.Provider value={contextValue}>
      {children}
    </MouseContext.Provider>
  );
}
