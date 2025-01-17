import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

const Nav = styled.nav<{ scrollNav: boolean }>`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${({ scrollNav }) => scrollNav ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)'};
  transition: 0.3s all ease;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 999;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgba(0, 0, 0, 0.9);
    padding-top: 2rem;
  }
`;

const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 1rem 0;
    width: 100%;
  }
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 25px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #4169e1;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover {
    color: #4169e1;
    
    &:after {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    display: table;
    
    &:after {
      display: none;
    }
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #4169e1;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(65, 105, 225, 0.2);

  &:hover {
    transition: all 0.3s ease-in-out;
    background: transparent;
    color: #4169e1;
    border: 2px solid #4169e1;
    box-shadow: 0 4px 20px rgba(65, 105, 225, 0.4);
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}>
              IWIE DRONES
            </NavLogo>
            <MobileIcon onClick={toggleMenu}>
              <FaBars />
            </MobileIcon>
            <NavMenu isOpen={isOpen}>
              <NavItem>
                <NavLinks 
                  href="#drones" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('drones');
                  }}
                >
                  Nuestros Drones
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('services');
                  }}
                >
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('contact');
                  }}
                >
                  Contáctanos
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
