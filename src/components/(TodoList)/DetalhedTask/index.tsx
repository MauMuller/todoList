import { TaskTypes } from "@/contexts/Tasks";
import { Activity } from "./Activity";
import { useState } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  currentTask?: TaskTypes;
}

export interface InicialActivityState {
  name: string;
  active: boolean;
}

export function DetalhedTask({ currentTask }: Props) {
  return (
    <>
      {currentTask?.detalhedTasks && (
        <ul className="flex flex-col gap-4 px-[2rem] py-[2rem]">
          {currentTask?.detalhedTasks.map((task) => {
            return (
              <Activity
                key={uuid()}
                activityDetais={task}
                taskID={currentTask.id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
