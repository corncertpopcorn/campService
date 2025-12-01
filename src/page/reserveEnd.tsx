import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./reserveEnd.module.scss";

export const ReserveEnd = () => {
  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 예약</div>
            <div className={css.title2}>A-1 사이트 / 파쇄석 예약</div>
            <div className={css.title3}>
              <br />
            </div>
          </div>
          <div className={css.reserveListComponentWrapper1}>
            <div className={css.reserveListDetailWrapper}>
              <div className={css.imageWrapper}>
                <div className={css.imageDetailWrapper}>
                  <div className={css.leftImage}></div>
                  <div className={css.rightImage}></div>
                </div>
              </div>
              <div className={css.textWrapper}>
                <div className={css.titleDetailWrapper}>
                  <div className={css.title}>A-1 사이트 / 파쇄석</div>
                  <div className={css.canReserve}>예약가능</div>
                </div>
                <ul>
                  <li className={css.titleDetailText}>
                    두랭이오토캠핑장은 바다와 함께 즐기는 완벽한 휴식공간입니다.
                  </li>
                  <li className={css.titleDetailText}>
                    해안가에 자리잡은 캠핑장에서는 시원한 바람과 탁 트인 파도
                    소리를 들으며 마음의 평화를 찾을 수 있습니다.
                  </li>
                </ul>
                <div className={css.underContentWrapper}>
                  <div className={css.contentDetail}>예약정보</div>
                  <div className={css.contentTextDetailWrapper}>
                    <div className={css.text1}>사이트 크기 </div>
                    <div className={css.text2}>8Mx8.5M</div>
                  </div>
                  <div className={css.contentTextDetailWrapper}>
                    <div className={css.text1}>부대시설</div>
                    <div className={css.text2}>개별화장실 및 샤워실</div>
                  </div>
                  <div className={css.contentTextDetailWrapper}>
                    <div className={css.text1}>허용 인원</div>
                    <div className={css.text2}>2인/최대 4인 (방문객 포함)</div>
                  </div>
                  <div className={css.contentTextDetailWrapper}>
                    <div className={css.text1}>인원 추가 금액</div>
                    <div className={css.text2}>
                      [초등생 이하] 5,000원 / [대인] 10,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.reserveListComponentWrapper2}>
            <h3>예약자 정보</h3>
            <div className={css.reserveListComponentWrapper3}>
              <div className={css.reserverWrapper}>
                <h4>입력정보</h4>
                <div className={css.reserverDetailWrapper}>
                  <span className={css.reserverLeft}>예약자명</span>
                  <span className={css.reserverRight}>a</span>
                </div>
                <div className={css.reserverDetailWrapper}>
                  <span className={css.reserverLeft}>연락처</span>
                  <span className={css.reserverRight}>1</span>
                </div>
                <div className={css.reserverDetailWrapper}>
                  <span className={css.reserverLeft}>차량번호</span>
                  <span className={css.reserverRight}>1</span>
                </div>
                <div className={css.reserverDetailWrapper}>
                  <span className={css.reserverLeft}>인원수</span>
                  <span className={css.reserverRight}>
                    성인 0명, 어린이 0명
                  </span>
                </div>
                <div className={css.reserverDetailWrapper}>
                  <span className={css.reserverLeft}>기간</span>
                  <span className={css.reserverRight}>
                    2025-09-24~2025-09-25 [1박 2일]
                  </span>
                </div>
              </div>
              <div className={css.priceWrapper}>
                <div className={css.priceTitle}>결제금액</div>
                <div className={css.priceDetailWrapper}>
                  <div className={css.realPriceWrapper}>
                    <div className={css.realPriceTitle}>기본가</div>
                    <div className={css.priceNumber1}>55,000원</div>
                    <div className={css.priceEtc}>할인 미적용</div>
                  </div>
                  <div className={css.realPriceWrapper}>
                    <div className={css.realPriceTitle}>추가금액</div>
                    <div className={css.priceNumber1}>0원</div>
                    <div className={css.priceEtc}>없음</div>
                  </div>
                  <div className={css.realPriceWrapper}>
                    <div className={css.realPriceTitle}>할인금액</div>
                    <div className={css.priceNumber}>0원</div>
                    <div className={css.priceEtc}>1일 연박 할인</div>
                  </div>
                  <div className={css.realPriceWrapper}>
                    <div className={css.realPriceTitle}>결제예정금액</div>
                    <div className={css.priceNumber}>55,000원</div>
                    <div className={css.priceEtc}>0원 할인</div>
                  </div>
                </div>
              </div>
              <div className={css.noticeWrapper}>
                <span className={css.notice}>
                  예약 완료 시 예약 확인 문자가 발송됩니다. 문자를 확인해주세요!
                </span>
              </div>
              <div className={css.buttonWrapper}>
                <button className={css.lastButton}>예약완료</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
