import styled from "styled-components";

export const StyledFormSection = styled.section`
max-width: ${({ width }) => width};
display: grid;
justify-content: center;
grid-template-rows: auto 1fr};
grid-template-columns: 1fr};
background: ${({ theme, bg }) => bg || theme?.bg_colors?.secondary};
box-shadow: ${({ shadow }) => shadow || "0px 15px 25px rgba(0, 0, 0, 0.35)"};
border-radius: 5px;
padding: 25px};
margin: ${(props) => props.margin || "0px"};
gap: 15px;

@media${({ theme }) => theme.media.tablet}{
    grid-template-columns: 50%};
}
`;
