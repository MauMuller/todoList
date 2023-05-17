"use client";

import { MouseEvent, useState } from "react";
import { Button } from "@/components/Button";
import { ModalToCreateTask } from "@/components/ModalToCreateTask";

interface Props {
  typeHeader: "index" | "task";
}

export function Header({ typeHeader }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalToIncrementTasks = () => setIsModalVisible(!isModalVisible);

  if (typeHeader === "index")
    return (
      <aside className="sticky top-0 flex w-full flex-row gap-[1rem] bg-gray-600 px-[0.8rem] py-2">
        <Button onClickFuntion={showModalToIncrementTasks}>New Task</Button>
        {!isModalVisible || (
          <ModalToCreateTask stateModal={[isModalVisible, setIsModalVisible]} />
        )}
      </aside>
    );

  return <aside className="flex w-full flex-row gap-[1rem] py-5"></aside>;
}
