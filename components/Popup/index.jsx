import styled, { css } from "styled-components";
import { Button } from "../ui/Button";

import { usePostDeletePopup } from "../../zustand/store";

export const StyledPopupWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255, 0%);
  z-index: 100;
  transition: all 0.5s ease-out;
  ${({ isPopupOpenig }) => {
    return isPopupOpenig
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `;
  }}
`;

export const StyledPopUp = styled.div`
  justify-self: center;
  align-self: start;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 260px;
  padding: 15px;
  margin-top: 50px;
  border-radius: 5px;
  background: ${({ theme }) => theme.bg_colors.secondary};
  box-shadow: ${({ shadow }) => shadow || "0px 15px 25px rgba(0, 0, 0, 0.35)"};
`;
export const StyledH2 = styled.h2`
  color: red;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const StyledButtonsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50px 50px;
  justify-content: start;
`;

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
    <StyledPopupWrapper isPopupOpenig={isPopupOpening}>
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
