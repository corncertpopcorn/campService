import { useLocation, useNavigate } from "react-router-dom";
import css from "./navbar.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCssName = () => {
    if (location.pathname === "/") {
      return css.active1;
    } else if (location.pathname === "/list") {
      return css.active2;
    } else if (location.pathname === "/guide") {
      return css.active3;
    } else if (location.pathname === "/notice") {
      return css.active4;
    } else {
      return css.active1;
    }
  };

  const handleNavigate = (address: string) => {
    navigate(address);
  };

  return (
    <div className={css.navWrapper}>
      <div className={css.logo} onClick={() => handleNavigate("/")}>
        <div className={css.logoImage}></div>
      </div>
      <div className={css.menuWrapper}>
        <div
          className={`${css.menu1} ${handleCssName()}`}
          onClick={() => handleNavigate("/")}
        >
          메인
        </div>
        <div
          className={`${css.menu2} ${handleCssName()}`}
          onClick={() => handleNavigate("/list")}
        >
          캠핑장
        </div>
        <div
          className={`${css.menu3} ${handleCssName()}`}
          onClick={() => handleNavigate("/guide")}
        >
          이용안내
        </div>
        <div
          className={`${css.menu4} ${handleCssName()}`}
          onClick={() => handleNavigate("/notice")}
        >
          공지사항
        </div>
      </div>
      <div className={css.buttonWrapper}>캠핑장목록 바로가기</div>
    </div>
  );
};
