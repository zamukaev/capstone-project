import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 440px;
  background: ${({ theme }) => theme?.bg_colors?.secondary};
  box-shadow: ${({ shadow }) => shadow || "0px 15px 25px rgba(0, 0, 0, 0.35)"};
`;
export const StyledInput = styled.input`
  @media${({ theme }) => theme?.media?.tablet} {
    width: 400px;
  }
  padding: ${({ padding }) => padding || "10px"};
  margin-bottom: ${({ margin }) => margin || "20px"};
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  border-radius: ${({ radius }) => radius || "5px"};
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 20px;
  resize: none;
  color: ${({ theme }) => theme?.colors?.white};
  padding: 10px;
  background: ${({ theme }) => theme?.bg_colors?.primary};
  border-radius: 5px;
`;
