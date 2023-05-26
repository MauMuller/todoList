"use client";

import Link from "next/link";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { TaskTypes } from "@/contexts/Tasks";
import { ModalToCreateTask } from "@/components/ModalToCreateTask";

interface Props {
  typeHeader: "index" | "task";
  taskObject?: TaskTypes;
  handleChangeTodolistColor?: (evt: FormEvent<HTMLInputElement>) => void;
}

export function Header({
  typeHeader,
  taskObject,
  handleChangeTodolistColor,
}: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalToIncrementTasks = () => setIsModalVisible(!isModalVisible);

  if (typeHeader === "index")
    return (
      <aside className="sticky top-0 flex w-full flex-row gap-[1rem] rounded-t-2xl bg-gray-600 px-[0.8rem] py-2">
        <Button onClickFuntion={showModalToIncrementTasks}>New Task</Button>
        {!isModalVisible || (
          <ModalToCreateTask stateModal={[isModalVisible, setIsModalVisible]} />
        )}
      </aside>
    );

  if (taskObject) {
    const { name, color } = taskObject;

    return (
      <aside className="sticky top-0 flex w-full flex-row items-center justify-between gap-[1rem] rounded-t-2xl bg-gray-600 px-[0.8rem] py-2 font-bold capitalize">
        <Link
          href={"./todolist"}
          className="relative rounded-md bg-white px-[2rem] py-2 text-black shadow-md shadow-gray-700 hover:bg-purple-400 hover:text-white disabled:pointer-events-none disabled:opacity-10"
        >
          {"<-"}
        </Link>

        <p>{name}</p>
        <input
          type="color"
          onInput={handleChangeTodolistColor}
          value={`${color}`}
        />
      </aside>
    );
  }

  return (
    <h1 className="text-xl font-black text-purple-900">RECARREGUE A PÁGINA!</h1>
  );
}
