import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const Section = styled.section`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rosybrown;
  `;

  const StyledLink = styled(NavLink)`
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;

    &:hover {
      color: black;
    }
  `;

  return (
    <Section className="header">
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Section>
  );
};

export default Header;
