import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side />

        <MobileNav>
          <UnstyledButton>
            <Icon id='search' strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='shopping-bag' strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' strokeWidth={1} />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media (${QUERIES.phoneAndDown}) {
    padding-right: 16px;
    padding-left: 16px;
    border-top: 5px solid var(--color-gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(16px, 6vw - 2rem, 48px);
  margin: 0px 48px;
  overflow-x: auto;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndDown}) {
    display: flex;
    gap: 16px;
  }
`;

export default Header;
