import css from "./twoByThreeText.module.scss";

export const TwoByThreeText = () => {
  return (
    <div className={css.twoByThreeTextWrapper}>
      <div className={css.textDetailWrapper1}>
        <div className={css.leftText1}>주소</div>
        <div className={css.rightText1}>전남 여수시 율촌면 두언길 106-51</div>
      </div>
      <div className={css.textDetailWrapper2}>
        <div className={css.leftText2}>즐길거리</div>
        <div className={css.rightText2}>꼬막정식</div>
      </div>
      <div className={css.textDetailWrapper3}>
        <div className={css.leftText3}>즐길거리</div>
        <div className={css.rightText3}>-</div>
      </div>
    </div>
  );
};
