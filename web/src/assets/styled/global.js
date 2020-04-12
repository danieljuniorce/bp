import styled from "styled-components";
import { Link } from "react-router-dom";

const Input = styled.input`
  width: 100%;
  height: 50px;
  color: black;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #da251d;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  line-height: 40px;
  transition: filter 0.2s;
  text-align: center;

  &:hover {
    filter: brightness(90%);
  }
`;

const Header = styled.header`
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: white;
  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoLogo = styled.div`
  line-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 20px;
`;

const Name = styled.p`
  margin-right: 20px;
  font-size: 15pt;
`;

const Identification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Insignia = styled.img`
  height: 120px;
  width: 140px;
`;

const Menu = styled.div``;

const A = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 15pt;
  transition: 0.2s;
  margin-left: 10px;

  &:hover {
    filter: brightness(60%);
  }
`;

export {
  Input,
  Button,
  Header,
  Name,
  Identification,
  Insignia,
  Logo,
  InfoLogo,
  Menu,
  A,
};
