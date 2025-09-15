import css from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={css.navWrapper}>
      <div className={css.logo}>
        <div className={css.logoImage}></div>
      </div>
      <div className={css.menuWrapper}>
        <div className={css.menu1}>메인</div>
        <div className={css.menu}>캠핑장</div>
        <div className={css.menu}>이용안내</div>
        <div className={css.menu}>공지사항</div>
      </div>
      <div className={css.buttonWrapper}>캠핑장목록 바로가기</div>
    </div>
  );
};
