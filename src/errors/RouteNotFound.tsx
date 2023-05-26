interface Props {
  title: string;
  message: string;
}

export function RouteNotFound({ message, title }: Props) {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className="w-[40rem] gap-2 rounded-xl border border-gray-700 bg-purple-900 p-[2rem] font-bold shadow-md shadow-black ">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </section>
  );
}
