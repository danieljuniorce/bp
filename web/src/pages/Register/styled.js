import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Section = styled.section`
  padding: 25px;
  width: 100%;
  max-width: 990px;
  height: 70vh;
  background: white;
  margin: auto;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  background: white;
  height: 120px;
  line-height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 85px;
  height: 85px;
  margin-right: 20px;
`;

const TitleHeader = styled.h1``;

const Form = styled.form`
  width: 100%;
  max-width: 550px;
`;

export { Container, Section, Header, Logo, TitleHeader, Form };
