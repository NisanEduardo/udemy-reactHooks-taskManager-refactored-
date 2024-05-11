interface IActionButton {
  classes: string;
  text: string;
  type?: "button" | "reset" | "submit" | undefined;
  fn?: () => void;
}

export const ActionButtom = ({
  classes,
  text,
  type = "button",
  fn,
}: IActionButton) => {
  return (
    <button
      type={`${type && type}`}
      className={`text-white rounded py-2 px-4 border transition-all ${classes}`}
      onClick={fn}
    >
      {text}
    </button>
  );
};
