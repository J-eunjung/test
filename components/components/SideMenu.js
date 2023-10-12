import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faUserGroup,
  faHeadset,
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

//CSS
const Navigationr = styled.div`
  height: 100%;
  width: 100px;
  background: #8cba51;
  padding: 6px 25px;
  transition: all 0.5s ease;
  float: left;
  min-height: 100%;
  position: relative;
`;
const Logo = styled.div`
  width: 98px;
  height: 98px;
  margin: -4px -24px;
  background-color: #fff;
`;
const Logolist = styled.div`
  position: absolute;
  top: 25%;

  svg {
    color: #fff;
    height: 40px;
    min-width: 50px;
    text-align: center;
    line-height: 25px;
  }
  li {
    position: relative;
    margin: 3em 0;
  }
  a {
    display: flex;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transition: all 0.7s ease;
  }
  :hover {
    background: #fff;
    svg {
      color: #8cba51;
    }
  }
`;
const Logout = styled.div`
  position: absolute;
  bottom: 5%;
  svg {
    color: #fff;
    height: 40px;
    min-width: 50px;
    text-align: center;
    line-height: 25px;
  }
  a {
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.6s ease;
  }
  :hover {
    background: #fff;
    svg {
      color: #8cba51;
    }
  }
`;

function SideMenu() {
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <Navigationr>
      {/* logo */}
      <div className="logoPlace">
        <Logo>
          <Link to="/"></Link>
        </Logo>
      </div>
      {/* 네비게이션 리스트 */}
      <Logolist>
        <li>
          <Link to="/todo">
            <FontAwesomeIcon icon={faPersonRunning} />
          </Link>
        </li>
        <li>
          <Link to="/community">
            <FontAwesomeIcon icon={faUserGroup} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHeadset} />
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
        </li>
      </Logolist>

      {/* 로그아웃 */}
      <Logout media>
        <Link to="/">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
      </Logout>
    </Navigationr>
  );
}

export default SideMenu;
