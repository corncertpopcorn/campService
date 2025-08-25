import css from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.menuWrapper}>
        <div className={css.menuDetailWrapper}>
          <div className={css.menu}>예약하기</div>
          <div className={css.menu2}>이용안내</div>
          <div className={css.menu2}>
            <div className={css.menuText}>공지사항</div>
          </div>
          <div className={css.menu2}>
            <div className={css.menuText}>자주하는 문의</div>
          </div>
        </div>
      </div>
      <div className={css.contentWrapper}>
        <div className={css.logoWrapper}>
          <div className={css.logoImage}></div>
          <div className={css.logoText}>두랭이오토해변캠핑장</div>
        </div>
        <div className={css.contentTextWrapper}>
          <div className={css.address}>전남 여수시 율촌면 두언길 106-51</div>
          <div className={css.contentNumberWrapper}>
            <div className={css.text}>사업자등록번호 : 388-21-01700</div>
            <div className={css.text}>관광사업등록번호 : 제 2023-00001호</div>
          </div>
        </div>
      </div>
    </div>
  );
};
