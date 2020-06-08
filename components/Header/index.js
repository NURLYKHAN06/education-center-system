import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Pane, Select } from "evergreen-ui";
import { WidthWrap } from "../../styles/GlobalStyles";

// UserContext
let user = false;

const MenuItems = () => {
  const router = useRouter();
  const menuData = [
    {
      title: "Main",
      path: "/",
      ifUserLogged: true,
    },
    {
      title: "Sign in",
      path: "/sign-in",
      ifUserLogged: false,
    },
    {
      title: "Sign up",
      path: "/sign-up",
      ifUserLogged: false,
    },
    {
      title: "Schools",
      path: "/schools",
      ifUserLogged: true,
    },
    {
      title: "About us",
      path: "/about",
      ifUserLogged: true,
    },
  ];

  return menuData.map((menu) => {
    const { path, title, ifUserLogged } = menu;
    // Check user context
    if (!!user && !ifUserLogged) return null;
    return (
      <Link href={path} key={path}>
        <a className={router.pathname === path ? "non-active" : ""}>{title}</a>
      </Link>
    );
  });
};

const Header = (props) => {
  return (
    <HeaderWrap>
      <WidthWrap>
        <Logo />
        <MenuItems />
        <Select>
          <option value="Eng" defaultValue="Eng">
            Eng
          </option>
          <option value="Rus">Rus</option>
        </Select>
      </WidthWrap>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  border: 1px solid red;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: red;
`;

export default Header;
