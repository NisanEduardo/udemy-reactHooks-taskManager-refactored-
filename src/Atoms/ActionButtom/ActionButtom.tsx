import { ReactElement, ReactNode } from "react";

interface IActionButton {
  classes: string;
  text: string;
  type?: "button" | "reset" | "submit" | undefined;
  children?: ReactNode;
  fn?: () => void;
}

export const ActionButtom = ({
  classes,
  text,
  type = "button",
  children,
  fn,
}: IActionButton) => {
  return (
    <button
      type={`${type && type}`}
      className={`text-white rounded py-2 px-4 border transition-all ${classes}`}
      onClick={fn}
    >
      {children ? children : text}
    </button>
  );
};
