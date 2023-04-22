import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;
export const StyledInput = styled.input`
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
