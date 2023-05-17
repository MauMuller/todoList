"use client";

import { MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClickFuntion: (
    evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

export function Button({ children, onClickFuntion, disabled = false }: Props) {
  return (
    <button
      onClick={onClickFuntion}
      disabled={disabled}
      className="relative rounded-md bg-white px-[2rem] py-2 text-black shadow-md shadow-gray-700 hover:bg-purple-400 hover:text-white disabled:pointer-events-none disabled:opacity-10"
    >
      {children}
    </button>
  );
}
