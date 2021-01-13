import styled from "styled-components";
import { GAME_NAME } from "../../../constants/constants";

const PageTitle = styled.h1`
  color: #65ECBB;
  font-size: 40px;
  margin: 30px 0;
`;

const Title = () => (
  <PageTitle>{GAME_NAME}</PageTitle>
);

export default Title;
