import { TaskProps } from "../../../store/taskStore";

interface ITasksListItems {
  tasksArray: TaskProps[];
}

export const TasksListItems = ({ tasksArray }: ITasksListItems) => {
  return <h1>Tese</h1>;
};
