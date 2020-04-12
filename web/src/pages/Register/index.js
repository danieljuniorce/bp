import React, { Component } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container, Section, Header, Logo, TitleHeader, Form } from "./styled";
import { Input, Button } from "../../assets/styled/global";

import api from "../../service/api";

import { login } from "../../auth";

import logo from "../../assets/img/logo.png";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      idInGame: "",
      password: "",
    };
  }

  handleInputs(e) {
    const state = Object.assign({}, this.state);
    const campos = e.target.name;
    state[campos] = e.target.value;

    this.setState(state);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { name, idInGame, email, password } = this.state;

    const data = {
      name,
      idInGame,
      email,
      password,
    };

    try {
      const register = await api.post("/users", data);

      localStorage.setItem("email", register.data.email);
      localStorage.setItem("name", register.data.name);
      localStorage.setItem("idInGame", register.data.idInGame);
      localStorage.setItem("user_id", register.data.user.id);

      const response = await api.post("/sessions", { email, password });

      login(response.data.token);

      this.props.history.push({ pathname: "/dashboard" });
    } catch (err) {}
  }

  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <TitleHeader>Página de Registro</TitleHeader>
        </Header>
        <Section>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Input
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleInputs(e)}
              placeholder="Nome"
            />
            <Input
              name="idInGame"
              value={this.state.idInGame}
              type="number"
              onChange={(e) => this.handleInputs(e)}
              placeholder="ID in Game"
            />
            <Input
              name="email"
              value={this.state.email}
              type="email"
              onChange={(e) => this.handleInputs(e)}
              placeholder="E-mail"
            />
            <Input
              name="password"
              value={this.state.password}
              type="password"
              onChange={(e) => this.handleInputs(e)}
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                textDecoration: "none",
                color: "#333",
                marginBottom: "6px",
              }}
            >
              <FaArrowLeft
                size={20}
                color="#C4211A"
                style={{ marginRight: "8px" }}
              />
              Já sou registrado
            </Link>
            <p style={{ textAlign: "center" }}>
              Não é endosado pela Policia do Estado de Minas Gerais.
            </p>
          </Form>
        </Section>
      </Container>
    );
  }
}

export default Register;
