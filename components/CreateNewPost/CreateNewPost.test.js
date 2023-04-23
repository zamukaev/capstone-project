import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewPostForm from "./NewPostForm";

test("renders image upload button", () => {
  render(<NewPostForm />);

  const uploadButton = screen.getByRole("button", { name: "Hochladen" });

  expect(uploadButton).toBeInTheDocument();
});

test("renders delete image button when an image is uploaded", async () => {
  render(<NewPostForm />);

  const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" });
  const input = screen.getByRole("textbox");
  await userEvent.upload(input, file);

  const deleteButton = screen.getByRole("button", { name: "Löschen" });

  expect(deleteButton).toBeInTheDocument();
});
