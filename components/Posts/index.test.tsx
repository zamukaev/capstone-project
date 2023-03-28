import { render, screen } from "@testing-library/react";
import Posts from "./index";
import { IPosts } from "./PostsType";
const posts: IPosts[] = [
  {
    _id: "123456",
    title: "Web dev",
    content: "hi hi hi",
    alt: "photo of post",
    image: "",
  },
];

test("correct rendering the post component", () => {
  render(<Posts posts={posts} />);
  expect(screen.getByText(/Web dev/i));
  expect(screen.getByText(/hi hi hi/i));
  expect(screen.getByAltText(/photo of post/i));
});
