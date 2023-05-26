import { FocusEvent, useState } from "react";
import { CaretCircleDown, CaretCircleUp } from "@phosphor-icons/react";

import { DetalhedTask, useTasks } from "@/contexts/Tasks";

interface Props {
  activityDetais: DetalhedTask;
  taskID: string;
}

export function Activity({ activityDetais, taskID }: Props) {
  const { name, date, marked, message, activityID } = activityDetais;
  const [isExtendedActivity, setIsExtendedActivity] = useState(false);

  const updateSomeActivity = useTasks(
    ({ updateSomeActivity }) => updateSomeActivity
  );

  const handleClickExtend = () => setIsExtendedActivity(!isExtendedActivity);

  const handleBlurInput = ({
    currentTarget,
  }: FocusEvent<HTMLInputElement, Element>) => {
    const { value } = currentTarget;

    if (value === "") {
      currentTarget.focus();
      currentTarget.title = "Você precisa preencher com algum valor";
      return;
    }

    updateSomeActivity({
      activityID,
      idTask: taskID,
      name: value,
    });
  };

  console.log(`Está ativo: ${JSON.stringify(Boolean(isExtendedActivity))}`);

  return (
    <li
      className={`z-10 flex flex-col items-center justify-between gap-2 rounded-md border border-gray-800 bg-gray-800 p-2 shadow-md shadow-gray-600 ${
        isExtendedActivity && "h-[20rem]"
      }`}
    >
      <section className="flex w-full flex-row items-center justify-between gap-2">
        <div className="flex flex-row gap-2">
          <input type="checkbox" defaultChecked={marked} />

          <input
            type="text"
            defaultValue={name}
            onBlur={handleBlurInput}
            className={`z-20 rounded-lg border border-gray-400 bg-transparent px-3 py-1 ${
              !marked || "line-through"
            }`}
          />
        </div>

        <div>
          <p className="font-thin">{date}</p>

          {isExtendedActivity ? (
            <CaretCircleUp
              className="flex w-auto cursor-pointer rounded-full bg-gray-500 p-1 text-[2rem]"
              onClick={handleClickExtend}
            />
          ) : (
            <CaretCircleDown
              className="flex w-auto cursor-pointer rounded-full bg-gray-500 p-1 text-[2rem]"
              onClick={handleClickExtend}
            />
          )}
        </div>
      </section>

      {isExtendedActivity && <section>bah</section>}
    </li>
  );
}
