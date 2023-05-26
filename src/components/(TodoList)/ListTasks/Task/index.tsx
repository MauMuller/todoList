import { TaskTypes } from "@/contexts/Tasks";
import Link from "next/link";
import { v4 as uuid } from "uuid";

export function Task({ name, detalhedTasks, color }: TaskTypes) {
  return (
    <li className="flex flex-col gap-2 select-none group">
      <Link href={`./todolist/${name}`}>
        <div
          style={{ background: color }}
          className="flex h-[15rem] w-[15rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-black text-xs group-hover:border group-hover:border-purple-700 group-hover:shadow-xl group-hover:shadow-purple-500"
        >
          <span>
            {detalhedTasks?.map(({ name }) => <p key={uuid()}>{name}</p>) ||
              "Not found"}
          </span>
        </div>
        <p>{name}</p>
      </Link>
    </li>
  );
}
