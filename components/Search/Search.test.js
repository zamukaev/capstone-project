import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./Search";

test("renders search input and icon", () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText(/Search.../i);
  const iconElement = screen.queryByTestId("search-icon");
  expect(inputElement).toBeInTheDocument();
  expect(iconElement).not.toBeInTheDocument();
});

test("renders search icon when search value is present", () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText(/Search.../i);
  const iconElement = screen.queryByTestId("search-icon");
  expect(iconElement).not.toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "test" } });

  expect(iconElement).toBeInTheDocument();
});

test("clears search value when search icon is clicked", async () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText(/Search.../i);
  const iconElement = screen.queryByTestId("search-icon");
  expect(iconElement).not.toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "test" } });

  expect(iconElement).toBeInTheDocument();

  fireEvent.click(iconElement);

  expect(iconElement).not.toBeInTheDocument();

  await waitFor(() => {
    expect(inputElement.value).toBe("");
  });
});
