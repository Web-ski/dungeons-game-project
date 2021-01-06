import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #0D4A28;
  color: #F9D870;
  padding: 15px 25px;
  margin: 20px;
  letter-spacing: 2px;
  font-size: 14px;
  width: ${({ width }) => width || "max-content"};
  height: 50px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 25px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e1d9ff;
      color: black;
    `}
`;

export default Button;
