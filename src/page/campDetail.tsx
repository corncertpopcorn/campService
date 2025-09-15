import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./campDetail.module.scss";

export const CampDetail = () => {
  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 정보</div>
            <div className={css.title2}>A-1 사이트 / 파쇄석</div>
            <div className={css.title3}>
              <br />
            </div>
          </div>
          <div className={css.reserveListComponentWrapper}>
            <div className={css.reserveListDetailWrapper}>
              <div className={css.imageWrapper}>
                <div className={css.imageDetailWrapper}>
                  <div className={css.leftImage}></div>
                  <div className={css.rightImage}></div>
                </div>
              </div>
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
                    두랭이해변캠핑장은 지친 일상을 벗어나 힐링하는 공간을
                    추구합니다.
                  </li>
                  <li className={css.titleDetailText}>
                    성숙한 캠핑매너로 바다와 노을을 벗삼아 일상의 피로를
                    풀어보세요.
                  </li>
                  <li className={css.titleDetailText}>
                    <br />
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
                <div className={css.priceWrapper}>
                  <div className={css.priceTitle}>이용요금</div>
                  <div className={css.priceDetailWrapper}>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>평일가</div>
                      <div className={css.priceNumber1}>55,000원</div>
                      <div className={css.priceEtc}>2인기준</div>
                    </div>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>휴일가</div>
                      <div className={css.priceNumber1}>65,000원</div>
                      <div className={css.priceEtc}>2인기준</div>
                    </div>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>이벤트</div>
                      <div className={css.priceNumber2}>0원</div>
                      <div className={css.priceEtc}>이벤트없음</div>
                    </div>
                    <div className={css.realPriceWrapper}>
                      <div className={css.realPriceTitle}>연박 할인</div>
                      <div className={css.priceNumber}>5,000원</div>
                      <div className={css.priceEtc}>연박 할인</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.buttonWrapper}>
                <div className={css.leftButton}>예약현황</div>
                <div className={css.rightButton}>예약하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
