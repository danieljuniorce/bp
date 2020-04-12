import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import {
  Container,
  Section,
  LogoImg,
  FundoImg,
  Title,
  Form,
  Content,
  Header,
} from "./styled";
import { Input, Button } from "../../assets/styled/global";

import { login } from "../../auth";
import api from "../../service/api";

import logo from "../../assets/img/logo.png";
import fundo from "../../assets/img/fundo.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputs(e) {
    const state = Object.assign({}, this.state);
    const campos = e.target.name;
    state[campos] = e.target.value;

    return this.setState(state);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      const response = await api.post("/sessions", { email, password });

      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("idInGame", response.data.user.idInGame);
      localStorage.setItem("user_id", response.data.user.id);

      login(response.data.token);

      const bp = await api.get(`bps/personalite/${response.data.user.id}`, {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      localStorage.setItem("newPonto", bp.data);

      return this.props.history.push({ pathname: "/dashboard" });
    } catch (err) {
      return console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <Section>
          <Content>
            <Header>
              <LogoImg src={logo} alt="logo" />
              <Title>Portal</Title>
            </Header>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleInputs(e)}
                placeholder="E-mail"
              />

              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleInputs(e)}
                placeholder="Senha"
              />

              <Button type="submit">Entrar</Button>
            </Form>

            <Link
              to="/register"
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
              <FaArrowRight
                size={20}
                color="#C4211A"
                style={{ marginRight: "8px" }}
              />
              Não sou registrado
            </Link>

            <p>Não é endosado pela Policia do Estado de Minas Gerais.</p>
          </Content>
          <FundoImg src={fundo} alt="plano de fundo" />
        </Section>
      </Container>
    );
  }
}

export default Login;
