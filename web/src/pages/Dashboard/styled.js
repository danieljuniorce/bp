import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  background: #202020;
  max-width: 980px;
  padding: 25px;
  margin: auto;
  border-radius: 6px;
  margin: auto;
`;

const Ponto = styled.div`
  background: white;
  width: 100%;
  max-width: 700px;
  margin: auto;
  margin-top: 30px;
  padding: 25px;
  border-radius: 8px;
`;

const Information = styled.div`
  text-align: center;
`;

const InformationTitle = styled.h1`
  margin-bottom: 20px;
`;

const Clock = styled.div`
  width: 100%;
  height: 120px;

  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 34pt;
`;

const InformationHours = styled.p`
  font-size: 14pt;
`;
const InformationDate = styled.p`
  font-size: 14pt;
  margin-bottom: 15px;
`;

export {
  Container,
  Content,
  Ponto,
  Information,
  InformationTitle,
  InformationHours,
  InformationDate,
  Clock,
};
