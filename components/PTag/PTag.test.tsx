import { render, screen } from "@testing-library/react";
import { PTag } from "./PTag";

test("has a correct rendering of p tag", () => {
  render(<PTag>i like this work</PTag>);
  expect(screen.getByText(/i like this work/i));
});
