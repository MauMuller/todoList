import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TodoslistLayout({ children }: Props) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex h-[70vh] w-[80vw] flex-wrap items-start justify-center rounded-2xl border border-gray-600 bg-gray-400 shadow-md shadow-gray-600">
        {children}
      </div>
    </div>
  );
}
