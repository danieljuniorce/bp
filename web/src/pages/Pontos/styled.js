import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  margin: auto;

  justify-content: space-between;
  align-items: center;
`;

const StructPontos = styled.ul`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
  position: relative;
`;

const Ponto = styled.li`
  width: 450px;
  height: 350px;
  background: white;
  padding: 25px;
  border-radius: 9px;
`;

const NumberIdentification = styled.p`
  font-size: 14pt;
  color: #333;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-weight: bold;
  }
`;

const InicioPonto = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 12pt;
  text-align: center;
`;
const InicioText = styled.p`
  font-size: 14pt;
  margin-bottom: 5px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const InicioDate = styled.p`
  span {
    font-weight: bold;
  }
`;

const InicioHours = styled.p`
  span {
    font-weight: bold;
  }
`;

const EndPonto = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 12pt;
  text-align: center;
`;

const EndText = styled.p`
  font-weight: 700;
  font-size: 14pt;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EndDate = styled.p`
  span {
    font-weight: bold;
  }
`;

const EndHours = styled.p`
  span {
    font-weight: bold;
  }
`;

const StatusPonto = styled.p`
  font-size: 16pt;
  text-align: center;
  color: #333;
`;

export {
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
};
