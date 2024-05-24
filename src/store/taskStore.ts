import { create } from "zustand";

export type TaskProps = {
  id: Date;
  name: string;
  completed: boolean;
};

type States = {
  task: TaskProps | null;
  tasksStoraged: TaskProps[] | never[];
};

type Actions = {
  setTask: (task: TaskProps) => void;
  setTasksStoraged: (task: TaskProps) => void;
  setClearTasks: () => void;
};

export const useTaskStore = create<States & Actions>((set) => ({
  task: null,
  setTask: (task: TaskProps) =>
    set(() => ({
      task: task,
    })),
  tasksStoraged: [],
  setTasksStoraged: (task: TaskProps) =>
    set((state) => ({
      tasksStoraged: [...state.tasksStoraged, task],
    })),
  setClearTasks: () =>
    set(() => ({
      tasksStoraged: [],
    })),
}));
