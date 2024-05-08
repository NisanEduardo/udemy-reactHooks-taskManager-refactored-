import { useEffect, useState } from "react";

import { useTaskStore } from "../../store/taskStore";

export const CreateTask = () => {
  const [taskName, setTaskName] = useState<String | any>("");

  const { task, setTask } = useTaskStore();

  function handleTaskInput(event: React.FormEvent<HTMLInputElement>) {
    setTaskName(event.currentTarget.value);
  }

  function createTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTask({
      id: new Date(),
      name: taskName,
      completed: false,
    });
  }

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <div className="">
      <header className="p-5">
        <h1 className="text-[30px] font-bold">Cadastrar Tarefa</h1>
      </header>
      <section className="bg-gray-100 px-5 py-10">
        <form action="" className="flex justify-between" onSubmit={createTask}>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            className="border b-gray-400 rounded-lg p-2 min-w-[500px]"
            type="text"
            name="tarefa"
            id="tarefa"
            minLength={5}
            maxLength={100}
            placeholder="Digite o nome da tarefa"
            value={taskName}
            onChange={handleTaskInput}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>

        {/* <button onClick={handleClearTasks}>Limpar Tarefas</button> */}
      </section>
      {/* <TaskStatusModal showModal={showModal} /> */}
    </div>
  );
};
