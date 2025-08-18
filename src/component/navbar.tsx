import css from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logoWrapper}>
        <div className={css.logo}></div>
        <div className={css.logoText}>두랭이오토해변캠핑장</div>
      </div>
      <div className={css.menuWrapper}>
        <div className={css.menu}>메인</div>
        <div className={css.menu}>캠핑장</div>
        <div className={css.menu}>공지사항</div>
        <div className={css.menu}>이용안내</div>
        <div className={css.menu}>자주하는 문의</div>
      </div>
      <div className={css.buttonWrapper}>
        <div className={css.buttonText}>예약하기</div>
      </div>
    </div>
  );
};
