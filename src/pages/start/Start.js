import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import { Link as LinkUI } from "office-ui-fabric-react/lib/Link";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <Header />
      <CenteredSection>
        <h1>Добро пожаловать!</h1>
        <p>
          Вы можете подробнее прочитать{" "}
          <LinkUI as={Link} to="/about">
            об этом проекте.
          </LinkUI>
        </p>
      </CenteredSection>
    </div>
  );
};

const CenteredSection = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Start;
