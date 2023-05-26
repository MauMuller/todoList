"use client";

import { getNotUndefinedValuesFromObject } from "@/functions/getNotUndefinedValuesFromObject";
import { create } from "zustand";

export interface DetalhedTask {
  name: string;
  activityID: string;
  date?: string;
  message?: string;
  marked?: boolean;
}

export interface TaskTypes {
  id: string;
  name: string;
  detalhedTasks?: DetalhedTask[];
  color?: string;
}

interface UpdateSomeActivityTypes
  extends Pick<DetalhedTask, "activityID">,
    Partial<Omit<DetalhedTask, "activityID">> {
  idTask: TaskTypes["id"];
}
interface Props {
  tasks: TaskTypes[];
  addNewTask: (task: TaskTypes) => void;
  updateSomeTask: (task: TaskTypes) => void;
  updateSomeActivity: (activity: UpdateSomeActivityTypes) => void;
  deleteSomeTasks: (ids: string[]) => void;
}

export const useTasks = create<Props>((set) => ({
  tasks: [],

  addNewTask: (task: TaskTypes) =>
    set(({ tasks }) => ({ tasks: [...tasks, task] })),

  updateSomeTask: ({ id, name, detalhedTasks, color }: TaskTypes) =>
    set(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, name, detalhedTasks, color } : task
      ),
    })),

  updateSomeActivity: (objectToUpdate: UpdateSomeActivityTypes) =>
    set(({ tasks }) => ({
      tasks: tasks.map((task) => {
        const getNotUndefinedValues =
          getNotUndefinedValuesFromObject<DetalhedTask>(objectToUpdate);

        return objectToUpdate.idTask === task.id
          ? {
              ...task,
              detalhedTasks: task.detalhedTasks?.map((task) =>
                objectToUpdate.activityID === task.activityID
                  ? getNotUndefinedValues
                  : task
              ),
            }
          : task;
      }),
    })),

  deleteSomeTasks: (ids: string[]) =>
    set(({ tasks }) => ({
      tasks: tasks.filter((task) => !ids.includes(task.id)),
    })),
}));
