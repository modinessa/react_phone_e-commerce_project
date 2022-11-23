import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store logo"
          className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ms-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto">
          <ButtonContainer>
            <span className="me-2">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
          my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper =  styled.nav`
background: var(--mainBlue);
.nav-link{
  color: var(--mainWhite)!important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`


