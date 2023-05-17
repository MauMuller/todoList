import { TaskTypes } from "@/contexts/Tasks";
import { v4 as uuid } from "uuid";

export function Task({ name, tasksNames }: TaskTypes) {
  return (
    <li className="flex flex-col gap-2">
      <div className="flex h-[15rem] w-[15rem] flex-col items-center justify-center gap-2 rounded-sm bg-gray-500 text-xs">
        {tasksNames?.map((taskName) => (
          <span key={uuid()} className="text-gray-600">
            {taskName}
          </span>
        )) || "Not found"}
      </div>
      <p>{name}</p>
    </li>
  );
}
