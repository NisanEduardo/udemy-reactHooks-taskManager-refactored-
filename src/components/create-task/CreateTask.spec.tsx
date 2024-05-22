import { fireEvent, render, screen } from "@testing-library/react";

import { CreateTask } from "./index";

describe("create task component tests", () => {
  it("should render component without errors", () => {
    render(<CreateTask />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should test if modal is displayed after cretae task", () => {
    render(<CreateTask />);
    const btnCreate = screen.getByText("Cadastrar");

    fireEvent.click(btnCreate);

    expect(screen.getByTestId("feedbackModal")).toHaveClass("flex");
  });
});
