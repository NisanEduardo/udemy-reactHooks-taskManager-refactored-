import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { ActionButtom } from "../../Atoms/ActionButtom";
import { TasksHeading } from "../../Molecules/TasksHeading";

import { useTaskStore } from "../../store/taskStore";
import { TasksListItems } from "./tasksList-items";

export const TasksList = () => {
  const data = useTaskStore.getState();

  console.log("task", data);

  return (
    <div>
      <header className="p-5">
        <TasksHeading text="Tarefas a fazer" />
      </header>

      <div className="bg-gray-100 px-5 py-10">
        <table className="w-full mt-10">
          <thead>
            <tr className="bg-gray-500">
              <th className="flex items-center font-semibold uppercase tracking-wider text-white text-xl">
                Tarefa
              </th>
              <th className="p-2">
                <ActionButtom
                  text="Nova tarefa"
                  classes="flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
                >
                  <a href="/create">
                    <FontAwesomeIcon icon={faPlus} />
                    Nova Tarefa
                  </a>
                </ActionButtom>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {/* <TasksListItems tasksArray={tasksStoraged} /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
