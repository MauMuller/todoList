"use client";

import { useTasks } from "@/contexts/Tasks";
import { Task } from "@/components/(TodoList)/ListTasks/Task";
import { v4 as uuid } from "uuid";

export function ListTasks() {
  const tasks = useTasks(({ tasks }) => tasks);

  return (
    <ul className="flex w-full flex-wrap items-center justify-center gap-2">
      {tasks.map((task) => (
        <Task key={uuid()} {...task} />
      ))}
    </ul>
  );
}
