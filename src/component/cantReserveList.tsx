import css from "./cantReserveList.module.scss";
import { TwoByFourText } from "./twoByFourText";

export const CantReserveList = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <div className={css.leftImage}></div>
        <div className={css.rightImage}></div>
      </div>
      <div className={css.titleWrapper}>
        <div className={css.title}>D-5 프리미엄 (오픈예정)</div>
        <div className={css.canReserve}>예약불가</div>
      </div>
      <div className={css.contentWrapper}>
        <TwoByFourText />
      </div>

      <div className={css.reserveWrapper}>
        <div className={css.reserveLeftWrapper}>
          <div className={css.reserveText1}>60,000 ~ 75,000원</div>
          <div className={css.reserveText2}>1박 요금</div>
        </div>
        <div className={css.reserveRightWrapper}>
          <button className={css.reserveButton}>추후 공지 예정</button>
        </div>
      </div>
    </div>
  );
};
