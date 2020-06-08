import React from "react";
import styled from "styled-components";

import Head from "next/head";
import Link from "next/link";

// import { Pane } from "evergreen-ui";
import { Button } from "evergreen-ui";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Start = () => {
  return (
    <>
      <Header />
      <h2>Start words</h2>
      <p>Some description</p>
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
      <Link href="sign-up">
        <Button appearance="primary">Sign up</Button>
      </Link>

      <Footer />
    </>
  );
};

export default Start;
