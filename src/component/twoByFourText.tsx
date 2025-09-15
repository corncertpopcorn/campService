import css from "./twoByFourText.module.scss";

export const TwoByFourText = () => {
  return (
    <div className={css.twoByFourTextWrapper}>
      <div className={css.contentTextWrapper}>
        <div className={css.text1}>사이트 크기 </div>
        <div className={css.text2}>8x8.5M</div>
      </div>
      <div className={css.contentTextWrapper}>
        <div className={css.text1}>부대시설</div>
        <div className={css.text2}>개별화장실 및 샤워실</div>
      </div>
      <div className={css.contentTextWrapper}>
        <div className={css.text1}>허용 인원</div>
        <div className={css.text2}>2인/최대 4인 (방문객 포함)</div>
      </div>
      <div className={css.contentTextWrapper}>
        <div className={css.text1}>인원 추가 금액</div>
        <div className={css.text2}>[초등생 이하] 5,000원 / [대인] 10,000원</div>
      </div>
    </div>
  );
};
