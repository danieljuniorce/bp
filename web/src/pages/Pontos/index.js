import React, { Component } from "react";

import { FaHourglassStart, FaHourglassEnd } from "react-icons/fa";

import {
  Container,
  Content,
  StructPontos,
  Ponto,
  NumberIdentification,
  InicioPonto,
  InicioText,
  InicioDate,
  InicioHours,
  EndPonto,
  EndText,
  EndDate,
  EndHours,
  StatusPonto,
} from "./styled";
import HeaderMenu from "../../components/Header";

class Pontos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderMenu />

        <Content>
          <StructPontos>
            <Ponto>
              <NumberIdentification>
                NÚMERO DE IDENTIFICAÇÃO <span>1</span>
              </NumberIdentification>
              <InicioPonto>
                <InicioText>
                  <FaHourglassStart color="#E42325" />
                  Entrada
                </InicioText>
                <InicioDate>
                  <span>Data:</span> 10/10/2020
                </InicioDate>
                <InicioHours>
                  <span>Horário:</span> 10:10:10
                </InicioHours>
              </InicioPonto>

              <EndPonto>
                <EndText>
                  <FaHourglassEnd color="#E42325" />
                  Saída
                </EndText>
                <EndDate>
                  <span>Data:</span> 10/10/2020
                </EndDate>
                <EndHours>
                  <span>Horário:</span> 10:59:59
                </EndHours>
              </EndPonto>

              <StatusPonto>Status: Aceito</StatusPonto>
            </Ponto>

            <Ponto>
              <NumberIdentification>
                NÚMERO DE IDENTIFICAÇÃO <span>1</span>
              </NumberIdentification>
              <InicioPonto>
                <InicioText>
                  <FaHourglassStart color="#E42325" />
                  Entrada
                </InicioText>
                <InicioDate>
                  <span>Data:</span> 10/10/2020
                </InicioDate>
                <InicioHours>
                  <span>Horário:</span> 10:10:10
                </InicioHours>
              </InicioPonto>

              <EndPonto>
                <EndText>
                  <FaHourglassEnd color="#E42325" />
                  Saída
                </EndText>
                <EndDate>
                  <span>Data:</span> 10/10/2020
                </EndDate>
                <EndHours>
                  <span>Horário:</span> 10:59:59
                </EndHours>
              </EndPonto>

              <StatusPonto>Status: Aceito</StatusPonto>
            </Ponto>

            <Ponto>
              <NumberIdentification>
                NÚMERO DE IDENTIFICAÇÃO <span>1</span>
              </NumberIdentification>
              <InicioPonto>
                <InicioText>
                  <FaHourglassStart color="#E42325" />
                  Entrada
                </InicioText>
                <InicioDate>
                  <span>Data:</span> 10/10/2020
                </InicioDate>
                <InicioHours>
                  <span>Horário:</span> 10:10:10
                </InicioHours>
              </InicioPonto>

              <EndPonto>
                <EndText>
                  <FaHourglassEnd color="#E42325" />
                  Saída
                </EndText>
                <EndDate>
                  <span>Data:</span> 10/10/2020
                </EndDate>
                <EndHours>
                  <span>Horário:</span> 10:59:59
                </EndHours>
              </EndPonto>

              <StatusPonto>Status: Aceito</StatusPonto>
            </Ponto>

            <Ponto>
              <NumberIdentification>
                NÚMERO DE IDENTIFICAÇÃO <span>1</span>
              </NumberIdentification>
              <InicioPonto>
                <InicioText>
                  <FaHourglassStart color="#E42325" />
                  Entrada
                </InicioText>
                <InicioDate>
                  <span>Data:</span> 10/10/2020
                </InicioDate>
                <InicioHours>
                  <span>Horário:</span> 10:10:10
                </InicioHours>
              </InicioPonto>

              <EndPonto>
                <EndText>
                  <FaHourglassEnd color="#E42325" />
                  Saída
                </EndText>
                <EndDate>
                  <span>Data:</span> 10/10/2020
                </EndDate>
                <EndHours>
                  <span>Horário:</span> 10:59:59
                </EndHours>
              </EndPonto>

              <StatusPonto>Status: Aceito</StatusPonto>
            </Ponto>
          </StructPontos>
        </Content>
      </Container>
    );
  }
}

export default Pontos;
