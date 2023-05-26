"use client";

import { FormEvent, MouseEvent, useRef, useState } from "react";

import { DetalhedTask } from "@/components/(TodoList)/DetalhedTask";
import { Header } from "@/components/(TodoList)/Header";
import { TaskTypes, useTasks } from "@/contexts/Tasks";
import { noSpecialChars } from "@/functions/noSpecialChars";
import { RouteNotFound } from "@/errors/RouteNotFound";
import { v4 as uuid } from "uuid";
interface Props {
  params: { name: string };
}

export default function Task({ params: { name } }: Props) {
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [nameAlreadyExist, setNameAlreadyExist] = useState(true);

  const inputReference = useRef<HTMLInputElement>(null);

  const [tasks, updateSomeTask] = useTasks(({ tasks, updateSomeTask }) => [
    tasks,
    updateSomeTask,
  ]);

  const currentTask = tasks.find(
    (task) => noSpecialChars(task.name) === noSpecialChars(name)
  ) as TaskTypes;

  const createNotesForTask = (evt: MouseEvent<HTMLButtonElement>) => {
    const formatedName = noSpecialChars(inputReference.current?.value ?? "");
    if (!formatedName) return setIsInputEmpty(true);

    updateSomeTask({
      ...currentTask,
      detalhedTasks: [
        ...(currentTask?.detalhedTasks ?? []),
        { name: formatedName, activityID: uuid() },
      ],
    });
  };

  const changeColor = ({ currentTarget }: FormEvent<HTMLInputElement>) =>
    updateSomeTask({
      ...currentTask,
      color: `${currentTarget.value}`,
    });

  const handleInput = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const isEmpty = !Boolean(currentTarget.value);
    if (isEmpty != isInputEmpty) setIsInputEmpty(isEmpty);
  };

  if (!currentTask)
    return (
      <RouteNotFound
        title={typeof window != "undefined" ? window.location.href : ""}
        message="Rota não existente!"
      />
    );

  return (
    <div
      className={`flex h-full w-full flex-col gap-[1rem] rounded-2xl`}
      style={{ background: currentTask?.color }}
    >
      <Header
        typeHeader="task"
        taskObject={currentTask}
        handleChangeTodolistColor={changeColor}
      />

      <div className="flex h-full flex-col overflow-scroll">
        <DetalhedTask currentTask={currentTask} />

        <div className=" flex flex-row items-center justify-center gap-[0.5rem] rounded-b-xl  py-2">
          <div className="flex flex-row items-center rounded-lg border border-gray-700 bg-white px-2 py-1 text-black shadow-md shadow-gray-800">
            <span className="select-none text-lg">+</span>
            <input
              type="text"
              className={`after:content-['O nome já existe, não é possivel utilizar'] relative h-full w-full rounded-xl px-2 py-1 outline-none after:absolute after:top-0 after:w-auto after:text-red-500`}
              ref={inputReference}
              onInput={handleInput}
            />
          </div>

          <button
            onClick={createNotesForTask}
            disabled={isInputEmpty}
            className="hover:bg-p select-none rounded-lg bg-white p-2 text-black shadow-md shadow-gray-800 hover:bg-purple-800 hover:text-white disabled:pointer-events-none disabled:opacity-60 disabled:grayscale"
          >
            Adicionar tarefa
          </button>
        </div>
      </div>
    </div>
  );
}
