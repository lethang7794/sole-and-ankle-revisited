/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onDismiss}>
      <Wrapper aria-label='Hamburger Menu'>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id='close' strokeWidth='1px' />
        </CloseButton>
        <Side />
        <Nav>
          <NavLink active href='/sale'>
            Sale
          </NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <BottomSide>
          <Footer>
            <FooterLink href='/terms'>Terms and Conditions</FooterLink>
            <FooterLink href='/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/contact'>Contact Us</FooterLink>
          </Footer>
        </BottomSide>
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.overlay};
`;

const Wrapper = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding: 32px;
  background-color: ${COLORS.white};

  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${18 / 16}rem;
  line-height: ${21.13 / 16}rem;
  color: ${(props) => (props.active === true ? COLORS.secondary : COLORS.gray[900])};
`;

const FooterLink = styled(NavLink)`
  text-transform: none;
  font-size: ${14 / 16}rem;
  line-height: ${16.44 / 16}rem;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

const Side = styled.div`
  flex: 1;
`;

const BottomSide = styled(Side)`
  display: flex;
  align-items: flex-end;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default MobileMenu;
