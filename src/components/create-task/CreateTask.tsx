import { useEffect, useState } from "react";

import { TaskModel } from "../../models/taskModel.model";

import { useTaskStore } from "../../store/taskStore";
import { ActionButtom } from "../../Atoms/ActionButtom";

export const CreateTask = () => {
  const [taskName, setTaskName] = useState<String | any>("");

  const { task, tasksStoraged, setTask, setTasksStoraged, setClearTasks } =
    useTaskStore();

  const taskModel = new TaskModel(new Date(), taskName, false);

  function handleTaskInput(event: React.FormEvent<HTMLInputElement>) {
    setTaskName(event.currentTarget.value);
  }

  function createTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTask(taskModel.create());
  }

  useEffect(() => {
    setTasksStoraged(task);

    setTaskName("");
  }, [task]);

  useEffect(() => {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
  }, [tasksStoraged]);

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
          <ActionButtom
            type="submit"
            classes="bg-green-600 border-green-700 hover:bg-green-700"
            text="Cadastrar"
          />
        </form>
      </section>
      <footer className="p-5 text-right">
        <ActionButtom
          classes="hover:bg-red-600 bg-red-500 border-red-600"
          fn={setClearTasks}
          text="Limpar lista de tarefas"
        />
      </footer>
      {/* <TaskStatusModal showModal={showModal} /> */}
    </div>
  );
};
