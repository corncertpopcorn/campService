import css from "./reserveList.module.scss";

export const ReserveList = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <div className={css.leftImage}>
          <div className={css.leftImageDetail}></div>
        </div>
        <div className={css.rightImage}>
          <div className={css.rightImageDetail}></div>
        </div>
      </div>
      <div className={css.textWrapper}>
        <div className={css.titleWrapper}>
          <div className={css.title}>A-1 사이트 / 파쇄석</div>
          <div className={css.canReserve}>예약가능</div>
        </div>
        <div className={css.contentWrapper}>
          <div className={css.contentDetailWrapper}>
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
              <div className={css.text2}>4인 ~ 6인</div>
            </div>
            <div className={css.contentTextWrapper}>
              <div className={css.text1}>인원 추가 금액</div>
              <div className={css.text2}>
                유아 2,000원 / 소인 4,000원 / 대인 12,000원
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.reserveWrapper}>
        <div className={css.reserveLeftWrapper}>
          <div className={css.reserveText1}>45,000 ~ 75,000원</div>
          <div className={css.reserveText2}>4인 기준 1박 예약 시</div>
        </div>
        <div className={css.reserveRightWrapper}>
          <div className={css.reserveButton1}>
            <div className={css.reserveButtontext1}>예약현황</div>
          </div>
          <div className={css.reserveButton2}>
            <div className={css.reserveButtontext2}>예약하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
