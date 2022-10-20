import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { VscGithubInverted } from "react-icons/vsc";

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);

  return (
    <Container>
      <img src="/images/logo.svg" alt="" />
      <Menu>
        <li>Model S</li>
        <li>Model Y</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
      </Menu>
      <RightMenu>
        <li>shop</li>
        <li>Account</li>
        <GiHamburgerMenu
          className="hamburger-menu"
          onClick={() => setburgerStatus(true)}
        />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <GrClose onClick={() => setburgerStatus(false)} className="close" />
        <li>Existing Invetory</li>
        <li>Used Invetory</li>
        <li>Trade In</li>
        <li>Test Drive</li>
        <li>Insurance</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Charger</li>
        <li>Find us</li>
        <li>Support</li>
        <li className="footer">By Anwar Sadhik</li>
        <div className="icon">
          <a target="_blank" href="https://github.com/AnwarSadhik">
            <VscGithubInverted />
          </a>
        </div>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: nowrap;
  margin: 0 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    margin-left: 100px;

    .hamburger-menu {
      position: fixed;
      right: 1rem;
    }
  }

  .hamburger-menu {
    cursor: pointer;
    font-size: 1.2rem;

    @media (max-width: 800px) {
      position: fixed;
      right: 5px;
      font-size: 1.3rem;
    }
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: white;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 0 2px -5px rgb(0, 0/25%);

  li {
    text-align: center;
    padding: 20px 0;
    /* border-bottom: 1px solid #000; */
  }
  li:hover {
  }
  .footer {
    text-transform: uppercase;
    border-bottom: none;
  }
  .close {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 1.4rem;
    cursor: "pointer";
  }
  .icon {
    text-align: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;
