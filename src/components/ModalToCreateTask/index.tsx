import { Dispatch, FormEvent, SetStateAction, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/Button";
import { useTasks } from "@/contexts/Tasks";
import { noSpecialChars } from "@/functions/noSpecialChars";
interface Props {
  stateModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export function ModalToCreateTask({ stateModal }: Props) {
  const [_, setIsModalVisible] = stateModal;
  const [isAddTaskButtonDisabled, setIsAddTaskButtonDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const addNewTask = useTasks(({ addNewTask }) => addNewTask);

  const cancelTask = () => setIsModalVisible(false);
  const addTask = () => {
    const inputValue = inputRef.current?.value ?? "newTask";
    const formatedValue = noSpecialChars(inputValue);

    addNewTask({
      name: formatedValue,
      id: uuid(),
      tasksNames: [],
      color: "#b7b7b7",
    });

    setIsModalVisible(false);
  };

  const inputVisibility = (evt: FormEvent<HTMLInputElement>) =>
    setIsAddTaskButtonDisabled(!Boolean(evt.currentTarget.value));

  return (
    <div className="before:text-grat-600 absolute top-[4rem] flex flex-col gap-3  bg-gray-700 px-[2rem] py-[2rem] before:absolute before:-top-[1.35rem] before:left-[0rem] before:text-[2rem] before:text-gray-600 before:content-['^']">
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2">Talk name:</legend>
        <input
          type="text"
          ref={inputRef}
          onInput={inputVisibility}
          className="px-3 py-2 text-black"
        />
      </fieldset>

      <div className="flex flex-row gap-3">
        <Button onClickFuntion={cancelTask}>Cancel</Button>
        <Button onClickFuntion={addTask} disabled={isAddTaskButtonDisabled}>
          Add task
        </Button>
      </div>
    </div>
  );
}
