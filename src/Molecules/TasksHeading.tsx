type TTasksHeading = {
  text: string;
};

export const TasksHeading = ({ text }: TTasksHeading) => {
  return (
    <h1 className="text-center text-gray-700 text-[30px] font-bold">{text}</h1>
  );
};
