"use client";

import React, { createContext, ReactNode, useState } from "react";

type CursorType = {
  type: "default" | "hover" | "hidden" | "figure" | "link";
  text?: string;
  figure?: string;
};

type MouseContextProps = {
  cursorType: CursorType;
  cursorChangeHandler: (cursorType: CursorType) => void;
};

export const MouseContext = createContext<MouseContextProps>({
  cursorType: {
    type: "default",
    text: "",
    figure: "",
  },
  cursorChangeHandler: () => {},
});

interface MouseContextProviderProps {
  children: ReactNode;
}

export default function MouseContextProvider({
  children,
}: MouseContextProviderProps) {
  const [cursorType, setCursorType] = useState<CursorType>({
    type: "default",
    text: "",
    figure: "",
  });

  const cursorChangeHandler = (newCursorType: CursorType) => {
    setCursorType(newCursorType);
    // console.log("cursorChangeHandler", newCursorType);
  };

  const contextValue: MouseContextProps = {
    cursorType,
    cursorChangeHandler,
  };

  return (
    <MouseContext.Provider value={contextValue}>
      {children}
    </MouseContext.Provider>
  );
}
