import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import { Link as LinkUI } from "office-ui-fabric-react/lib/Link";
import { Link } from "react-router-dom";

import { DefaultButton } from "office-ui-fabric-react";

const Start = () => {
  return (
    <>
      <Header />
      <CenteredSection>
        <h1>Добро пожаловать!</h1>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
          ducimus, aspernatur odio sequi ab aliquam optio est sit dolores? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vel magni ducimus,
          aspernatur odio sequi ab aliquam optio est sit dolores? Вы можете
          подробнее прочитать{" "}
          <LinkUI as={Link} to="/about">
            об этом проекте.
          </LinkUI>
        </P>

        <ButtonsWrap>
          <DefaultButton text="Войти" />
          <DefaultButton primary text="Регистрация" />
        </ButtonsWrap>
      </CenteredSection>

      <Footer> developed by Nurlykhan, 2020</Footer>
    </>
  );
};

const CenteredSection = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const P = styled.p`
  max-width: 600px;
  text-align: center;
  padding: 15px 0;
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 215px;
`;

const Footer = styled.footer`
  text-align: center;
`;

export default Start;
