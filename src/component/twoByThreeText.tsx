import css from "./twoByThreeText.module.scss";

interface TextList {
  text1?: string;
  text2?: string;
  text3?: string;
}

export const TwoByThreeText = ({ text1, text2, text3 }: TextList) => {
  return (
    <div className={css.twoByThreeTextWrapper}>
      <div className={css.textDetailWrapper1}>
        <div className={css.leftText1}>주소</div>
        <div className={css.rightText1}>{text1}</div>
      </div>
      <div className={css.textDetailWrapper2}>
        <div className={css.leftText2}>이동시간</div>
        <div className={css.rightText2}>{text2}</div>
      </div>
      <div className={css.textDetailWrapper3}>
        <div className={css.leftText3}>즐길거리</div>
        <div className={css.rightText3}>{text3}</div>
      </div>
    </div>
  );
};
