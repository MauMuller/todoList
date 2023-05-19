"use client";

import { create } from "zustand";

export interface DetalhedTask {
  name: string;
  date: string;
  message: string;
}

export interface TaskTypes {
  id: string;
  name: string;
  detalhedTasks?: DetalhedTask[];
  color?: string;
}

interface Props {
  tasks: TaskTypes[];
  addNewTask: (task: TaskTypes) => void;
  updateSomeTask: (task: TaskTypes) => void;
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

  deleteSomeTasks: (ids: string[]) =>
    set(({ tasks }) => ({
      tasks: tasks.filter((task) => !ids.includes(task.id)),
    })),
}));
