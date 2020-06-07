import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Pane, Select } from "evergreen-ui";

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
      path: "/signin",
      ifUserLogged: false,
    },
    {
      title: "Sign up",
      path: "/signup",
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
      <div>
        <MenuItems />
        <Select>
          <option value="Eng" defaultValue="Eng">
            Eng
          </option>
          <option value="Rus">Rus</option>
        </Select>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  height: 80px;
  border: 1px solid red;
`;

export default Header;
