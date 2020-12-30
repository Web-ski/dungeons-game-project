import styled from "styled-components";
// const HERO = "/gameData/images/gnome.svg";
const HERO = "/gameData/images/chemist-svgrepo-com.svg";

const HeroElem = styled.div`
position: absolute;
width: 50px;
height: 50px;
border-radius: 50%;
top: ${({ top }) => top || "200px"};
left: ${({ left }) => left || "200px"};
background-color: transparent;
background-image: ${`url('${HERO}')`};
background-size: cover;
background-repeat: no-repeat;
`;

export default HeroElem;