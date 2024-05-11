import { create } from "zustand";

type TaskProps = {
  id: Date;
  name: string;
  completed: boolean;
};

type States = {
  task: TaskProps;
  tasksStoraged: TaskProps[] | never[]
};

type Actions = {
  setTask: (task: TaskProps) => void;
  setTasksStoraged: (task: TaskProps) => void
  setClearTasks: () => void
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
  tasksStoraged: [],
  setTasksStoraged: (task: TaskProps) =>
    set((state) => ({
      tasksStoraged: [
        ...state.tasksStoraged,
        task
      ]
    })),
  setClearTasks: () => set(() => (
    {
      tasksStoraged: []
    }
  ))
}));
