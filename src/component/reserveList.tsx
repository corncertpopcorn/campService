import css from "./reserveList.module.scss";
import { TwoByFourText } from "./twoByFourText";

export const ReserveList = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <div className={css.leftImage}></div>
        <div className={css.rightImage}></div>
      </div>
      <div className={css.imageWrapper}>
        <div className={css.leftImage}></div>
        <div className={css.rightImage}></div>
      </div>
      <div className={css.titleWrapper}>
        <span className={css.title}>A-1 사이트 / 파쇄석</span>
        <span className={css.canReserve}>예약가능</span>
      </div>
      <div className={css.contentWrapper}>
        <TwoByFourText />
      </div>

      <div className={css.reserveWrapper}>
        <div className={css.reserveLeftWrapper}>
          <div className={css.reserveText1}>55,000원 ~ 65,000원</div>
          <div className={css.reserveText2}>1박 요금</div>
        </div>
        <div className={css.reserveRightWrapper}>
          <button className={css.reserveButton1}>예약현황</button>
          <button className={css.reserveButton2}>예약하기</button>
        </div>
      </div>
    </div>
  );
};
