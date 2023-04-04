import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from ".";

it("renders all input fields and a submit button", () => {
  const handleSubmit = jest.fn();
  const register = jest.fn();
  const errors = {};
  render(
    <Form handleSubmit={handleSubmit} register={register} errors={errors} />
  );

  const altInput = screen.getByPlaceholderText("alt");
  expect(altInput).toBeInTheDocument();

  const titleInput = screen.getByPlaceholderText("Überschrift");
  expect(titleInput).toBeInTheDocument();

  const descriptionTextArea = screen.getByPlaceholderText("Kurze Beitragstext");
  expect(descriptionTextArea).toBeInTheDocument();

  const fullDescriptionTextArea = screen.getByPlaceholderText("Beitragstext");
  expect(fullDescriptionTextArea).toBeInTheDocument();

  const submitButton = screen.getByRole("button", {
    name: "Beitrag beginnen",
  });
  expect(submitButton).toBeInTheDocument();
});
