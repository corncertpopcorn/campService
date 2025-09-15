import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./campReserve.module.scss";

export const CampReserve = () => {
  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentDetailWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 예약</div>
            <div className={css.title2}>A-1 사이트 / 파쇄석 예약</div>
            <div className={css.title3}>
              <br />
            </div>
          </div>
          <div className={css.reserveTitleWrapper}>
            <div className={css.reserveTitleDetailWrapper}>
              <div className={css.reserveImageWrapper}>
                <div className={css.reserveImageWrapper2}>
                  <div className={css.image1}></div>
                  <div className={css.image2}></div>
                </div>
              </div>
              <div className={css.reserveTextWrapper}>
                <div className={css.textTitleWrapper}>
                  <div className={css.textTitle}>A-1 사이트 / 파쇄석</div>
                  <div className={css.textButton}>예약가능</div>
                </div>
                <ul>
                  <div className={css.textDetail}>
                    두랭이오토캠핑장은 바다와 함께 즐기는 완벽한 휴식공간입니다.
                  </div>
                  <div className={css.textDetail}>
                    해안가에 자리잡은 캠핑장에서는 시원한 바람과 탁 트인 파도
                    소리를 들으며 마음의 평화를 찾을 수 있습니다.
                  </div>
                </ul>
                <div className={css.infoWrapper}>
                  <div className={css.infoTitle}>예약정보</div>
                  <div className={css.info}>
                    <div className={css.infoText1}>사이트 크기 </div>
                    <div className={css.infoText2}>8Mx8.5M</div>
                  </div>
                  <div className={css.info}>
                    <div className={css.infoText1}>부대시설</div>
                    <div className={css.infoText2}>개별화장실 및 샤워실</div>
                  </div>
                  <div className={css.info}>
                    <div className={css.infoText1}>허용 인원</div>
                    <div className={css.infoText2}>4인 ~ 6인</div>
                  </div>
                  <div className={css.info}>
                    <div className={css.infoText1}>인원 추가 금액</div>
                    <div className={css.infoText2}>
                      유아 2,000원 / 소인 4,000원 / 대인 12,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.dateWrapper}>
            <div className={css.dateDetailWrapper1}>
              <div className={css.dateTitle}>예약자 정보</div>
              <div className={css.depositDetailWrapper}>
                <div className={css.depositTitle}>예약자(입금자)명</div>
                <div className={css.depositNameWrapper}>
                  <div className={css.nameDetailWrapper}>
                    <div className={css.name}>
                      입금자명과 예약자명이 일치해야 합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.explainWrapper1}>
                <div className={css.explain1}>
                  예약자명과 입금자명이 일치해야 합니다.
                </div>
              </div>
              <div className={css.planWrapper}>
                <div className={css.planTitleWrapper}>
                  인원수
                  <div className={css.planButtonWrapper}>
                    <div className={css.button1}>초등생 이하 추가</div>
                  </div>
                </div>
                <div className={css.planScreenWrapper}>
                  <div className={css.leftScreenWrapper}>
                    <div className={css.title}>성인</div>
                    <div className={css.count1}>2</div>
                    <div className={css.unit1}>명</div>
                  </div>
                  <div className={css.rightScreenWrapper}>
                    <div className={css.title}>초등생 이하</div>
                    <div className={css.count3}>0</div>
                    <div className={css.unit3}>명</div>
                  </div>
                </div>
                <div className={css.planResultWrapper}>
                  <div className={css.planResultDetailWrapper}>
                    <div className={css.planText}>성인 0명</div>
                  </div>
                </div>
              </div>
              <div className={css.phoneWrapper}>
                <div className={css.phoneTitle}>연락처</div>

                <div className={css.phoneNumberWrapper}>
                  <div className={css.numberDetailWrapper}>
                    <div className={css.number}>010-1234-1234</div>
                  </div>
                </div>
              </div>
              <div className={css.explainWrapper2}>
                <div className={css.explain2}>
                  해당 번호로 예약 완료 문자가 발송됩니다.
                </div>
              </div>
              <div className={css.carWrapper}>
                <div className={css.carTitle}>차량번호</div>

                <div className={css.carNumberWrapper}>
                  <div className={css.numberDetailWrapper}>
                    <div className={css.number}>차량번호를 입력하세요.</div>
                  </div>
                </div>
              </div>
              <div className={css.explainWrapper3}>
                <div className={css.explain3}>
                  주차 가능 대수는 최대 1대 입니다. 주차를 원하실 경우,
                  차량번호를 필수로 입력해주세요.
                </div>
              </div>
              <div className={css.dateWrapper2}>
                <div className={css.title}>예약기간</div>
                <div className={css.dateDetailWrapper2}>
                  <div className={css.dateDetailWrapper3}>
                    <div className={css.dateDetailWrapper4}>
                      <div className={css.dateDetailWrapper5}>
                        <div className={css.date}> ~</div>
                        <div className={css.dateCount}>0박 1일 </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.priceWrapper}>
                <div className={css.priceDetailWrapper}>
                  {" "}
                  <div className={css.priceDetailWrapper2}>
                    <div className={css.boxWrapper1}>
                      <div className={css.boxtitle1}>평일</div>
                      <div className={css.boxPrice1}>0원</div>
                      <div className={css.priceExplain1}>0박</div>
                    </div>
                    <div className={css.boxWrapper2}>
                      <div className={css.boxtitle2}>휴일</div>
                      <div className={css.boxPrice2}>0원</div>
                      <div className={css.priceExplain2}>0박</div>
                    </div>
                    <div className={css.boxWrapper3}>
                      <div className={css.boxtitle3}>할증일</div>
                      <div className={css.boxPrice3}>0원</div>
                      <div className={css.priceExplain3}>없음</div>
                    </div>
                    <div className={css.boxWrapper4}>
                      <div className={css.boxtitle4}>추가금액</div>
                      <div className={css.boxPrice4}>0원</div>
                      <div className={css.priceExplain4}>없음</div>
                    </div>
                    <div className={css.boxWrapper5}>
                      <div className={css.boxtitle5}>연박 할인</div>
                      <div className={css.boxPrice5}>0원</div>
                      <div className={css.priceExplain5}>1박 당</div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={css.calendarWrapper}>
              <div className={css.calendarTitle}>예약기간 선택</div>
              <div className={css.calendarImage}></div>
              <div className={css.calendarExplainWrapper}>
                <div className={css.calendarExplainDetailWrapper}>
                  <div className={css.calendarExplain1}>-</div>
                  <div className={css.calendarExplain2}>0박 1일</div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.notice1Wrapper}>
            <div className={css.notice1DetailWrapper}>
              <div className={css.notice1Title}>이용약관 동의</div>

              <div className={css.notice1ContentWrapper}>
                <div className={css.notice1Title}>이용약관</div>
                <ul>
                  <li className={css.content1}>
                    1.예약은 1인 1사이트(최대 인원 4인) 예약 가능합니다.(동일인
                    2개 사이트 예약 시 취소됨)
                  </li>
                  <li className={css.content1}>
                    2.입금자와 예약자가 일치해야 합니다.
                  </li>
                  <li className={css.content1}>
                    3.예약 확인 클릭하면 예약 접수가 되며, 예약 접수문자가
                    발송됩니다. 입금은 반드시 예약 대기 문자(예약 접수 문자
                    아님)받으신 후 입금바랍니다. 예약 접수 상태에서 입금 시 중복
                    예약으로 취소 될 수 있습니다.
                  </li>
                  <li className={css.content1}>
                    4.예약 접수 및 승인 후 다음 날 오전 10시까지 미 입금 시 자동
                    취소 됩니다.
                  </li>
                  <li className={css.content1}>
                    5.사용일 당일 및 전일 예약은 관리자 문의 후 진행되며 예약 후
                    취소 및 환불은 불가합니다.
                  </li>
                  <li className={css.content1}>
                    6.입실 시간은 오후 2시, 퇴실 시간은 오전 11시입니다.
                  </li>
                  <li className={css.content1}>
                    7.매너타임 밤 10시 부터 아침 07시 까지입니다.
                  </li>
                  <li className={css.content1}>
                    8.입실 시 관리동에서 체크 인 후 입실 가능합니다.
                  </li>
                  <li className={css.content1}>
                    9.14시 이전의 입실은 불가합니다. 오후 8시 이후의 입실은
                    사전에 반드시 연락 주시기 바랍니다.
                  </li>
                </ul>
              </div>
              <div className={css.agreeWrapper}>
                <div className={css.notice1ExplainWrapper}>
                  캠핑장 이용 수칙을 지키지 않을 분들은 정중히 사양합니다.
                </div>
                <div className={css.notice1ExplainBar}></div>
                <div className={css.agreeUnderWrapper}>
                  <input type="checkbox" className={css.agreeButton}></input>
                  <div className={css.agreeText}>
                    캠핑장 이용 수칙에 동의합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.notice2Wrapper}>
            <div className={css.notice2DetailWrapper}>
              <div className={css.notice2Title}>환불규정 동의</div>
              <div className={css.notice2ContentWrapper}>
                <div className={css.notice2Title}>환불규정</div>
                <ul>
                  <li className={css.content2}>예약 건 양도 절대불가합니다.</li>
                  <li className={css.content2}>
                    예약확정일 ~ 사용일 9일전(90%환불)-10%차감
                  </li>
                  <li className={css.content2}>8일전(80%환불)-20%차감</li>
                  <li className={css.content2}>7일전(70%환불)-30%차감</li>
                  <li className={css.content2}>6일전(60%환불)-40%차감</li>
                  <li className={css.content2}>5일전(50%환불)-50%차감</li>
                  <li className={css.content2}>4일전(40%환불)-60%차감</li>
                  <li className={css.content2}>3일전(30%환불)-70%차감</li>
                  <li className={css.content2}>2일전(20%환불)-80%차감</li>
                  <li className={css.content2}>
                    1일전( 0%환불)-100%차감 당일( 0%환불)-100%차감
                  </li>
                </ul>
              </div>
              <div className={css.agreeWrapper}>
                <div className={css.notice2ExplainWrapper}>
                  문어발 식 예약 방지를 위해 취소 시 취소 수수료 10% 발생합니다.
                  신중한 예약부탁드립니다.
                </div>
                <div className={css.notice2ExplainBar}></div>
                <div className={css.agreeUnderWrapper}>
                  <input type="checkbox" className={css.agreeButton}></input>
                  <div className={css.agreeText}>
                    캠핑장 환불규정에 동의합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.button}>다음단계</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
