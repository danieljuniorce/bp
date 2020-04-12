import React from "react";

import {
  Header,
  InfoLogo,
  Logo,
  A,
  Menu,
  Identification,
  Name,
} from "../../assets/styled/global";

import logo from "../../assets/img/logo.png";

import { logout } from "../../auth";

const HeaderMenu = () => (
  <Header>
    <InfoLogo>
      <Logo src={logo} alt="logo" />
    </InfoLogo>

    <Menu>
      <A to="/dashboard">Página Inicial</A>
      <A to="/pontos">Meus Pontos</A>
    </Menu>

    <Identification>
      <Name>{localStorage.getItem("name")} </Name>
      <A onClick={logout} to="/">
        Sair
      </A>
    </Identification>
  </Header>
);

export default HeaderMenu;
