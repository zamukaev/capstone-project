import { Button } from "../ui/Button";

import { usePostDeletePopup } from "../../zustand/store";

import {
  StyledPopupWrapper,
  StyledPopUp,
  StyledH2,
  StyledButtonsContainer,
} from "./Popup.styled";

const Popup = ({ onDeletePost }) => {
  const { isPopupOpening, setIsPopupOpening } = usePostDeletePopup(
    (state) => state
  );
  const hadlerPostDontDelete = () => {
    setIsPopupOpening(false);
  };
  const handlerPostDelete = () => {
    setIsPopupOpening(false);
    onDeletePost();
  };

  return (
    <StyledPopupWrapper isPopupOpening={isPopupOpening}>
      <StyledPopUp>
        <StyledH2>Wollen Sie wirklich den Beitrag löschen?</StyledH2>
        <StyledButtonsContainer>
          <Button
            padding="5px 10px"
            radius="5px"
            bgcolor={({ theme }) => theme?.bg_colors?.btn_secondary_color}
            onClick={hadlerPostDontDelete}
          >
            Nein
          </Button>
          <Button
            padding="5px 10px"
            margin="0px 0px 0px 30px"
            radius="5px"
            onClick={handlerPostDelete}
          >
            Ja
          </Button>
        </StyledButtonsContainer>
      </StyledPopUp>
    </StyledPopupWrapper>
  );
};
export default Popup;
