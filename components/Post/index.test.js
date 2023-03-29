import { render, screen } from "@testing-library/react";
import Post from "./index";
test("correct rendering the post component", () => {
  render(<Post image="/jhj.png" alt="alt" title="hello" desc="description" />);
  const picture = screen.getByAltText(/alt/i);

  const title = screen.getByRole("heading", {
    name: /hello/i,
  });
  const paragraph = screen.getByText("description");

  expect(paragraph).toBeInTheDocument();
  expect(picture).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
