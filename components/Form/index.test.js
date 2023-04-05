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

  const titleInput = screen.getByPlaceholderText("Überschrift");
  expect(titleInput).toBeInTheDocument();

  const descriptionTextArea = screen.getByPlaceholderText("Kurze Beschreibung");
  expect(descriptionTextArea).toBeInTheDocument();

  const fullDescriptionTextArea = screen.getByPlaceholderText(
    "Vollständige Beschreibung"
  );
  expect(fullDescriptionTextArea).toBeInTheDocument();

  const submitButton = screen.getByRole("button", {
    name: "posten",
  });
  expect(submitButton).toBeInTheDocument();
});
