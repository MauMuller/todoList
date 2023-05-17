import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex max-w-lg flex-col gap-2 rounded-xl ">
        <h1 className="text-2xl">
          Welcome to{" "}
          <span className="font-bold text-purple-500 underline decoration-purple-700">
            Todolist
          </span>
          , here you can write everything you want!
        </h1>

        <Link
          href={"./todolist"}
          className="cursor-pointer underline decoration-purple-700 hover:text-purple-950"
        >
          Let`s go to bro!
        </Link>
      </div>
    </main>
  );
}
