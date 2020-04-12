import React, { Component } from "react";

//import { FaHome } from "react-icons/fa";

import {
  Container,
  Clock,
  Content,
  Ponto,
  Information,
  InformationTitle,
  InformationDate,
  InformationHours,
} from "./styled";
import { Button } from "../../assets/styled/global";

import HomeMenu from "../../components/Header";

import api from "../../service/api";
import { getToken } from "../../auth";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      user_id: localStorage.getItem("user_id"),
      idPonto: localStorage.getItem("newPonto"),
      data: {},
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get(
        `bps/${localStorage.getItem("newPonto")}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return this.setState({ data: response.data });
    } catch (err) {
      return err;
    }
  }

  componentWillUnmount() {}

  async handleNewPonto(e) {
    e.preventDefault();
    try {
      if (!localStorage.getItem("newPonto")) {
        const response = await api.post(
          `bps`,
          {
            user_id: localStorage.getItem("user_id"),
          },
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );

        localStorage.setItem("newPonto", response.data.id);

        return;
      }
    } catch (err) {
      return console.log(err);
    }
  }

  async handleFinalyPonto(e) {
    e.preventDefault();

    await api.put(
      `bps/${this.state.idPonto}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    localStorage.removeItem("newPonto");
    return this.setState({ data: "" });
  }

  render() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);

    const { date, hours } = this.state.data;

    return (
      <Container>
        <HomeMenu />
        <Clock>
          <span>{this.state.date.toLocaleDateString()}</span>
          <span>{this.state.date.toLocaleTimeString()}</span>
        </Clock>

        <Content>
          <Button
            style={{
              height: "80px",
              lineHeight: "80px",
              background: "#0055AA",
            }}
            type="button"
            onClick={(e) => this.handleNewPonto(e)}
          >
            Novo Ponto
          </Button>
          <Ponto>
            {this.state.data ? (
              <Information>
                <InformationTitle>Ponto em Aberto</InformationTitle>

                <InformationDate>Data de Entrada: {date}</InformationDate>
                <InformationHours>Horário de Entrada: {hours}</InformationHours>

                <Button
                  style={{
                    maxWidth: "200px",
                  }}
                  onClick={(e) => this.handleFinalyPonto(e)}
                  type="submit"
                >
                  Finalizar Ponto
                </Button>
              </Information>
            ) : (
              <Information>
                <InformationTitle>Nenhum Ponto Iniciado</InformationTitle>
              </Information>
            )}
          </Ponto>
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
