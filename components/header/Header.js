import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Link as A } from "office-ui-fabric-react";

// UserContext
let user = false;

const menuData = [
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
    <HeaderContainer>
      <p>Logo</p>
      <nav>
        {menuData.map((menu) => {
          const { path, title, ifUserLogged } = menu;
          // Check user context
          if (!!user && !ifUserLogged) return null;

          return (
            <Link href={path} key={path}>
              <A disabled={router.pathname === path}>{title}</A>
            </Link>
          );
        })}
      </nav>
    </HeaderContainer>
  );
};

// styles
const HeaderContainer = styled.header`
  border: 1px solid red;
  height: 80px;
`;

export default Header;
