import { create } from "zustand";

type TaskProps = {
  id: Date;
  name: string;
  completed: boolean;
};

type States = {
  task: TaskProps;
};

type Actions = {
  setTask: (task: TaskProps) => void;
};

export const useTaskStore = create<States & Actions>((set) => ({
  task: {
    id: new Date(),
    name: "",
    completed: false,
  },
  setTask: (task: TaskProps) =>
    set(() => ({
      task: task,
    })),
}));
