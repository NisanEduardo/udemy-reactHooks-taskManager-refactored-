import { render, screen } from "@testing-library/react";

import { CreateTask } from "./index";

describe("create task component tests", () => {
  it("should render component without errors", () => {
    render(<CreateTask />);

    const initialText = screen.getByRole("heading");

    expect(initialText).toBeInTheDocument();
  });
});
