import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  margin:0;
  padding:0;
  border:0;
  box-sizing: border-box;
}
ol li,
ul li{
  list-style:none;
}
a, a:visited{
  text-decoration:none;
}
a:hover{
  text-decoration:none;
}
h1,
h2,
h3,
h4,
h5,
h6{
  font-weight:inherit;
  font-size:inherit;
}
img{
  vertical-align:top;
}
html,
body {
  height:100%;
  font-size:14px;
  line-height:1;
  margin: 0;
  font-family: system-ui;
  background: ${(props) => props.theme.bg_colors.primary};
}
input,
button,
textarea{
  font-family:inherit;
}
input[typy="text"],
input[typy="email"],
input[typy="tel"],
textarea{
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
}
button{
  background:none;
}
`;
