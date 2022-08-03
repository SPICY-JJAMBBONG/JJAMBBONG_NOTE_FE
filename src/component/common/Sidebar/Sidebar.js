import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Side = styled.div`
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

// 메뉴명을 보여줄 div
export const SbTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  height: 32px;
  &:hover {
    background-color: #f6f6f2;
    cursor: pointer;
    border-right: solid 3px;
  }
`;

const Menu = styled.div`
  min-width: 100%;
  width: auto;
  height: auto;
  min-height: 80vh;
  font-size: 18px;
`;

const Sidebar = () => {
  const menus = [
    { name: "샘플1", path: "/" },
    { name: "샘플2", path: "/mylist" },
  ];
  return (
    <Side style={{ float: "left" }}>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{ color: "gray", textDecoration: "none" }}
              to={menu.path}
              key={index}
              activeStyle={{ color: "black" }}
            >
              <SbTitle>menu</SbTitle>
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
};

export default Sidebar;
