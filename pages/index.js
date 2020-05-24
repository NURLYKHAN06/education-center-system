import React from "react";
import styled from "styled-components";

import Head from "next/head";
import Link from "next/link";

import { DefaultButton, Link as A } from "office-ui-fabric-react";
import Header from "../components/header/Header";

const Start = () => {
  return (
    <>
      <Head>
        <title>Образовательный центр</title>
      </Head>

      <Header />
      <CenteredSection>
        <h1>Добро пожаловать!</h1>

        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
          ducimus, aspernatur odio sequi ab aliquam optio est sit dolores? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vel magni ducimus,
          aspernatur odio sequi ab aliquam optio est sit dolores? Вы можете
          подробнее прочитать{" "}
          <Link href="/about">
            <A>об этом проекте.</A>
          </Link>
        </P>

        <ButtonsWrap>
          <Link href="/login">
            <DefaultButton text="Войти" />
          </Link>
          <Link href="/register">
            <DefaultButton primary text="Регистрация" />
          </Link>
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
