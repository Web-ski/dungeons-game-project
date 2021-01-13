import styled from "styled-components";

const SectionTitle = styled.h2`
  color: #65ecbb;
  font-size: 40px;
  margin: 30px 0;
`;

const Subtitle = ({ text }) => <SectionTitle>{text}</SectionTitle>;

export default Subtitle;
