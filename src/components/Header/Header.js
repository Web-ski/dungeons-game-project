import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #111111;
`;

const StyledLink = styled(NavLink)`
  color: violet;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: white;
  }
`;

const Header = () => {

  return (
    <Section className="header">
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Section>
  );
};

export default Header;
