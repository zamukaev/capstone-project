import styled from "styled-components";

export const StyledForm = styled.form`
justify-self:{
  center;
}
  display: flex;
  flex-direction: column;
`;
export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  border-radius: 5px;
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 20px;
  resize: none;
  color: ${({ theme }) => theme?.colors?.white};
  padding: 10px;
  background: ${({ theme }) => theme?.bg_colors?.primary};
  border-radius: 5px;
`;
