import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Pane } from "evergreen-ui";

// UserContext
let user = false;

const menuData = [
  {
    title: "Главная",
    path: "/",
    ifUserLogged: true,
  },
  {
    title: "Войти",
    path: "/login",
    ifUserLogged: false,
  },
  {
    title: "Регистрация",
    path: "/register",
    ifUserLogged: false,
  },
  {
    title: "Школы",
    path: "/schools",
    ifUserLogged: true,
  },
  {
    title: "О проекте",
    path: "/about",
    ifUserLogged: true,
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <HeaderWrap>
      {menuData.map((menu) => {
        const { path, title, ifUserLogged } = menu;
        // Check user context
        if (!!user && !ifUserLogged) return null;
        return (
          <Link href={path} key={path}>
            <a className={router.pathname === path ? "non-active" : ""}>
              {title}
            </a>
          </Link>
        );
      })}
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  height: 80px;
  border: 1px solid red;
`;

export default Header;
