import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TodoslistLayout({ children }: Props) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-[70vh] w-[80vw] flex-wrap items-start justify-center rounded-2xl border border-gray-600 bg-gray-400 p-3 shadow-md shadow-gray-600">
        {children}
      </div>
    </div>
  );
}
