import { render, screen } from "@testing-library/react";
import { Headline } from "./Headline";
test("has correct Title text", () => {
  const Title = render(<Headline>Hi i am Muslim</Headline>);
  expect(screen.getByRole("heading")).toHaveTextContent("Hi i am Muslim");
});
