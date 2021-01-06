import styled from "styled-components";
import { GAME_NAME } from "../../../constants/constants";

const PageTitle = styled.h1`
  color: #F9D870;
  font-size: 30px;
  margin: 30px 0;
`;

const Title = () => (
  <PageTitle>{GAME_NAME}</PageTitle>
);

export default Title;
