import { render, screen } from "@testing-library/react";
import Posts from "./index";

const posts = [
  {
    title: "Web dev1",
    description: "hi world1",
    alt: "photo of post1",
    image: "",
  },
  {
    title: "Web dev2",
    description: "hi hi world2",
    alt: "photo of post2",
    image: "",
  },
  {
    title: "Web dev3",
    description: "hi hi hi world3",
    alt: "photo of post3",
    image: "",
  },
];

test("correct rendering the post component", () => {
  render(<Posts posts={posts} />);

  const headlines = screen.getAllByRole("heading");
  expect(headlines).toHaveLength(3);

  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(3);

  const paragraph1 = screen.getByText(/hi world1/i);
  expect(paragraph1).toBeInTheDocument();

  const paragraph2 = screen.getByText(/hi hi world2/i);
  expect(paragraph2).toBeInTheDocument();

  const paragraph3 = screen.getByText(/hi hi hi world3/i);
  expect(paragraph3).toBeInTheDocument();
});
