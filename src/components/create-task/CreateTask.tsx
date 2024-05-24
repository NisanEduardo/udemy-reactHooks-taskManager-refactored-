import { useEffect, useState } from "react";

import { useShallow } from "zustand/react/shallow";

import { TaskModel } from "../../models/taskModel.model";

import { useTaskStore } from "../../store/taskStore";
import { ActionButtom } from "../../Atoms/ActionButtom";
import { TaskStatusModal } from "../../Molecules/TaskStatusModal";
import { TasksHeading } from "../../Molecules/TasksHeading";

export const CreateTask = () => {
  const [taskName, setTaskName] = useState<String | any>("");
  const [showModal, setShowModal] = useState(false);

  const { task, tasksStoraged, setTask, setTasksStoraged, setClearTasks } =
    useTaskStore(
      useShallow((state) => ({
        task: state.task,
        setTask: state.setTask,
        tasksStoraged: state.tasksStoraged,
        setTasksStoraged: state.setTasksStoraged,
        setClearTasks: state.setClearTasks,
      }))
    );

  const taskModel = new TaskModel(new Date(), taskName, false);

  function handleTaskInput(event: React.FormEvent<HTMLInputElement>) {
    setTaskName(event.currentTarget.value);
  }

  function createTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTask(taskModel.create());
    setShowModal(true);
    setTaskName("");
  }

  // useEffect(() => {
  //   setTasksStoraged(task);
  // }, [task]);

  // useEffect(() => {
  //   console.log("tasks storaged", tasksStoraged);
  // }, [tasksStoraged]);

  return (
    <div className="">
      <header className="p-5">
        <TasksHeading text="Cadastrar Tarefa" />
      </header>
      <section className="bg-gray-100 px-5 py-10">
        <form action="" className="flex justify-between" onSubmit={createTask}>
          <label
            className="flex items-center text-gray-700 font-semibold uppercase tracking-wider"
            htmlFor="tarefa"
          >
            Tarefa
          </label>
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
      <TaskStatusModal showModal={showModal} />
    </div>
  );
};
