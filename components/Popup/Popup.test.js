import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../ui/Button";
import { usePostDeletePopup } from "../../zustand/store";
import Popup from "./Popup";

jest.mock("../../zustand/store", () => ({
  usePostDeletePopup: jest.fn(),
}));

describe("Popup", () => {
  test("renders popup message", () => {
    usePostDeletePopup.mockReturnValue({
      isPopupOpening: true,
      setIsPopupOpening: jest.fn(),
    });
    render(<Popup onDeletePost={jest.fn()} />);
    expect(
      screen.getByText("Wollen Sie wirklich den Beitrag löschen?")
    ).toBeInTheDocument();
  });

  test('clicking on "Nein" button closes the popup', async () => {
    const setIsPopupOpeningMock = jest.fn();
    usePostDeletePopup.mockReturnValue({
      isPopupOpening: true,
      setIsPopupOpening: setIsPopupOpeningMock,
    });
    render(<Popup onDeletePost={jest.fn()} />);
    const buttonNein = screen.getByText("Nein");
    await fireEvent.click(buttonNein);
    expect(setIsPopupOpeningMock).toHaveBeenCalledWith(false);
  });

  test('clicking on "Ja" button calls onDeletePost and closes the popup', async () => {
    const setIsPopupOpeningMock = jest.fn();
    const onDeletePostMock = jest.fn();
    usePostDeletePopup.mockReturnValue({
      isPopupOpening: true,
      setIsPopupOpening: setIsPopupOpeningMock,
    });
    render(<Popup onDeletePost={onDeletePostMock} />);
    const buttonJa = screen.getByText("Ja");
    await fireEvent.click(buttonJa);
    expect(onDeletePostMock).toHaveBeenCalledTimes(1);
    expect(setIsPopupOpeningMock).toHaveBeenCalledWith(false);
  });
});
