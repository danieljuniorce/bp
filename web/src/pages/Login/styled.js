import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  width: 100%;
  padding: 96px;
  background: white;
  box-shadow: 0 0 100px rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 105px;
`;

const FundoImg = styled.img`
  width: 440px;
  height: 320px;
  margin-left: 15px;
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 40px;
  margin-left: 20px;
`;

const Form = styled.form``;

export { Container, Section, LogoImg, FundoImg, Title, Form, Content, Header };
