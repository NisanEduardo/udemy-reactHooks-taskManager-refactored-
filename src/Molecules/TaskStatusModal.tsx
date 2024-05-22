interface ITaskStatusModal {
  showModal: boolean;
}

export const TaskStatusModal = ({ showModal }: ITaskStatusModal) => {
  return (
    <div
      className={`${showModal ? "flex" : "hidden"}`}
      id="successModal"
      data-testid="feedbackModal"
    >
      <header>Status da tarefa criada!</header>
      Tarefa adicionada com sucesso!
    </div>
  );
};
