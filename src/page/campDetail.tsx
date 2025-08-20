import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./campDetail.module.scss";

export const CampDetail = () => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.contentWrapper}>
        <div className={css.contentDetailWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 정보</div>
            <div className={css.title2}>A-1 사이트 / 파쇄석</div>
          </div>
          <div className={css.reserveListComponentWrapper}>
            <div className={css.imageWrapper}>
              <div className={css.leftImage}></div>
              <div className={css.rightImage}></div>
            </div>
            <div className={css.textWrapper}>
              <div className={css.textDetailWrapper}>
                <div className={css.titleWrapper}>
                  <div className={css.titleDetailWrapper}>
                    <div className={css.title}>A-1 사이트 / 파쇄석</div>
                    <div className={css.canReserve}>
                      <div className={css.canReserveText}>예약가능</div>
                    </div>
                  </div>
                  <div className={css.titleDetailText}>
                    두랭이오토캠핑장은 바다와 함께 즐기는 완벽한 휴식공간입니다.
                  </div>
                  <div className={css.titleDetailText}>
                    해안가에 자리잡은 캠핑장에서는 시원한 바람과 탁 트인 파도
                    소리를 들으며 마음의 평화를 찾을 수 있습니다.
                  </div>
                </div>
                <div className={css.contentWrapper}>
                  <div className={css.contentDetail}>사이트 상세정보</div>
                  <div className={css.contentTextWrapper}>
                    <div className={css.contentTextWrapper2}>
                      <div className={css.contentTextDetailWrapper}>
                        <div className={css.text1}>사이트 크기 </div>
                        <div className={css.text2}>8x8.5M</div>
                      </div>
                      <div className={css.contentTextDetailWrapper}>
                        <div className={css.text1}>부대시설</div>
                        <div className={css.text2}>개별화장실 및 샤워실</div>
                      </div>
                      <div className={css.contentTextDetailWrapper}>
                        <div className={css.text1}>허용 인원</div>
                        <div className={css.text2}>4인 ~ 6인</div>
                      </div>
                      <div className={css.contentTextDetailWrapper}>
                        <div className={css.text1}>인원 추가 금액</div>
                        <div className={css.text2}>
                          유아 2,000원 / 소인 4,000원 / 대인 12,000원
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.priceWrapper}>
                  <div className={css.priceTitle}>이용 요금</div>
                  <div className={css.priceDetailWrapper}>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>평일</div>
                      <div className={css.priceNumberWrapper}>
                        <div className={css.priceNumber}>50,000원</div>
                        <div className={css.priceEtc}>성인 2인 기준</div>
                      </div>
                    </div>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>주말</div>
                      <div className={css.priceNumberWrapper}>
                        <div className={css.priceNumber}>60,000원</div>
                        <div className={css.priceEtc}>성인 2인 기준</div>
                      </div>
                    </div>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>특별가</div>
                      <div className={css.priceNumberWrapper}>
                        <div className={css.priceNumber}>60,000원</div>
                        <div className={css.priceEtc}>
                          오늘만 이 가격으로 예약 가능!
                        </div>
                      </div>
                    </div>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>연박 할인</div>
                      <div className={css.priceNumberWrapper}>
                        <div className={css.priceNumber}>1박 당 5,000원</div>
                        <div className={css.priceEtc}>2일 이상 연박 시</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.buttonWrapper}>
              <div className={css.buttonText}>예약하기</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
