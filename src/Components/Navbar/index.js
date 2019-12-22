import React from 'react';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js';

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <UlList>
          <ListItem>
            <Anchor to="/">Home</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="/contact">Contact</Anchor>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
