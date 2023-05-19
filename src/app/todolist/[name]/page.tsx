"use client";

import { FormEvent } from "react";

import { Header } from "@/components/(TodoList)/Header";
import { TaskTypes, useTasks } from "@/contexts/Tasks";
import { noSpecialChars } from "@/functions/noSpecialChars";

interface Props {
  params: { name: string };
}

export default function Task({ params: { name } }: Props) {
  const [tasks, updateSomeTask] = useTasks(({ tasks, updateSomeTask }) => [
    tasks,
    updateSomeTask,
  ]);

  const currentTask = tasks.find(
    (task) => noSpecialChars(task.name) === noSpecialChars(name)
  ) as TaskTypes;

  console.log(currentTask);

  const changeColor = ({ currentTarget }: FormEvent<HTMLInputElement>) =>
    updateSomeTask({ ...currentTask, color: `${currentTarget.value}` });

  return (
    <div
      className={`flex h-full w-full flex-col gap-[3rem] rounded-2xl`}
      style={{ background: currentTask?.color }}
    >
      <Header
        typeHeader="task"
        taskObject={currentTask}
        handleChangeTodolistColor={changeColor}
      />

      {currentTask.detalhedTasks && <div className="flex "></div>}

      <div className="flex flex-row items-center justify-center gap-[0.5rem]">
        <div className="flex flex-row items-center px-2 py-1 text-black bg-white border border-gray-700 rounded-lg shadow-md shadow-gray-800">
          <span className="text-lg">+</span>
          <input
            type="text"
            className="w-full h-full px-2 py-1 outline-none rounded-xl"
          />
        </div>

        <button className="p-2 text-black bg-white rounded-lg shadow-md hover:bg-p shadow-gray-800 hover:bg-purple-800 hover:text-white">
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}
