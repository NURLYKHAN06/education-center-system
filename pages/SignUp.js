import React from "react";
import Head from "next/head";

import { Card } from "@fluentui/react/cards";

import Header from "../components/header/Header";

function Login() {
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>

      <Card />

      <Header />
    </>
  );
}

export default Login;
