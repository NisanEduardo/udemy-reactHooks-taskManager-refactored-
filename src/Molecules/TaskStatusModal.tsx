import { useTaskStore } from "../store/taskStore";
interface ITaskStatusModal {
  showModal: boolean;
}

export const TaskStatusModal = ({ showModal }: ITaskStatusModal) => {
  const { task } = useTaskStore();

  return (
    <div
      className={`${showModal ? "flex" : "hidden"}`}
      id="successModal"
      data-testid="feedbackModal"
    >
      <header>Status da tarefa criada!</header>
      <h2>{task?.name}</h2>
      Tarefa adicionada com sucesso!
    </div>
  );
};
