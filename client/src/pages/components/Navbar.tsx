import React, { useState } from "react";
import styled from "styled-components";
import SBKLogo from "/logo.png";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <Title>
        <StyledLink to="/">S. B. KASHIF</StyledLink>
      </Title>
      <Nav>
        <DesktopNav>
          <NavItem>
            <StyledLink to="/services">Services</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/support">Support</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about">About</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contribute">Contribute</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contact">Contact</StyledLink>
          </NavItem>
        </DesktopNav>
        <MobileMenuButton onClick={toggleSidebar}>
          <span>&#9776;</span>
        </MobileMenuButton>
      </Nav>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <SidebarNav>
          <NavItem>
            <StyledLink to="/services">SERVICES</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/support">SUPPORT</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about">ABOUT</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contribute">CONTRIBUTE</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </NavItem>
        </SidebarNav>
      </Sidebar>
      <Logo src={SBKLogo} alt="SBK Logo" />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 6vh;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fafafa;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const DesktopNav = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  background-color: rgba(
    51,
    51,
    51,
    0.9
  ); /* Adjust alpha value for transparency */
  padding-top: 6vh;
  transition: right 0.3s ease;
  backdrop-filter: blur(
    10px
  ); /* Apply backdrop-filter for glassmorphism effect */

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.div`
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const NavItem = styled.div`
  margin: 2px 15px;
  padding: 2px 6px;
`;

const Logo = styled.img`
  height: 5vh;
`;
