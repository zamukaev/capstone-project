import { getByRole, render, screen } from "@testing-library/react";
import Posts from "./index";

const posts = [
  {
    title: "Web dev1",
    desc: "hi world1",
    alt: "photo of post1",
    image: "",
  },
  {
    title: "Web dev2",
    desc: "hi hi world2",
    alt: "photo of post2",
    image: "",
  },
  {
    title: "Web dev3",
    desc: "hi hi hi world3",
    alt: "photo of post3",
    image: "",
  },
];

test("correct rendering the post component", () => {
  render(<Posts posts={posts} />);
  const headline1 = screen.getByRole("heading", {
    name: "Web dev1",
  });
  expect(headline1).toBeInTheDocument();

  const headline2 = screen.getByRole("heading", {
    name: "Web dev2",
  });
  expect(headline2).toBeInTheDocument();
  const headline3 = screen.getByRole("heading", {
    name: "Web dev3",
  });
  expect(headline3).toBeInTheDocument();

  const picture1 = screen.getByRole("img", {
    name: "photo of post1",
  });
  expect(picture1).toBeInTheDocument();

  const picture2 = screen.getByRole("img", {
    name: "photo of post2",
  });
  expect(picture2).toBeInTheDocument();

  const picture3 = screen.getByRole("img", {
    name: "photo of post3",
  });
  expect(picture3).toBeInTheDocument();

  const paragraph1 = screen.getByText(/hi world1/i);
  expect(paragraph1).toBeInTheDocument();

  const paragraph2 = screen.getByText(/hi hi world2/i);
  expect(paragraph2).toBeInTheDocument();

  const paragraph3 = screen.getByText(/hi hi hi world3/i);
  expect(paragraph3).toBeInTheDocument();
});
