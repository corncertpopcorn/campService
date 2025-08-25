import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./campReserve.module.scss";

export const CampReserve = () => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.contentWrapper}>
        <div className={css.contentDetailWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 예약</div>
            <div className={css.title2}>예약하기</div>
          </div>
          <div className={css.reserveWrapper}>
            <div className={css.reserveTitleWrapper}>
              <div className={css.reserveImageWrapper}>
                <div className={css.image1}></div>
                <div className={css.image2}></div>
              </div>
              <div className={css.reserveTextWrapper}>
                <div className={css.textTitleWrapper}>
                  <div className={css.textTitle}>A-1 사이트 / 파쇄석</div>
                  <div className={css.textButton}>
                    <div className={css.text}>예약가능</div>
                  </div>
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
                  <div className={css.infoDetailWrapper}>
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
            <div className={css.reserveDetailWrapper}>
              <div className={css.dateWrapper}>
                <div className={css.dateDetailWrapper}>
                  <div className={css.dateTitle}>기본정보 입력</div>
                  <div className={css.depositWrapper}>
                    <div className={css.depositDetailWrapper}>
                      <div className={css.depositTitleWrapper}>
                        <div className={css.title}>예약자 (입금자 명)</div>
                        <div className={css.lamp}>
                          <div className={css.lamptext}>필수</div>
                        </div>
                      </div>
                      <div className={css.depositNameWrapper}>
                        <div className={css.nameDetailWrapper}>
                          <div className={css.name}>홍길동</div>
                        </div>
                      </div>
                    </div>
                    <div className={css.explainWrapper}>
                      <div className={css.explain}>
                        예약자명과 무통장입금 입금자 명이 일치해야 합니다.
                      </div>
                    </div>
                  </div>
                  <div className={css.planWrapper}>
                    <div className={css.planTitleWrapper}>
                      <div className={css.title}>인원</div>
                      <div className={css.planButtonWrapper}>
                        <div className={css.button1}>
                          <div className={css.text1}>어린이 포함</div>
                        </div>
                        <div className={css.button2}>
                          <div className={css.text2}>중학생 포함</div>
                        </div>
                      </div>
                    </div>
                    <div className={css.planScreenWrapper}>
                      <div className={css.leftScreenWrapper}>
                        <div className={css.title}>성인</div>
                        <div className={css.countWrapper1}>
                          <div className={css.count1}>2</div>
                          <div className={css.unit1}>명</div>
                        </div>
                      </div>
                      <div className={css.middleScreenWrapper}>
                        <div className={css.title}>어린이</div>
                        <div className={css.countWrapper2}>
                          <div className={css.count2}>1</div>
                          <div className={css.unit2}>명</div>
                        </div>
                      </div>
                      <div className={css.rightScreenWrapper}>
                        <div className={css.title}>중학생</div>
                        <div className={css.countWrapper3}>
                          <div className={css.count3}>0</div>
                          <div className={css.unit3}>명</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={css.phoneWrapper}>
                    <div className={css.phoneTitleWrapper}>
                      <div className={css.title}>연락처</div>
                      <div className={css.button}>
                        <div className={css.buttonText}>필수</div>
                      </div>
                    </div>
                    <div className={css.phoneNumberWrapper}>
                      <div className={css.numberDetailWrapper}>
                        <div className={css.number}>010-1234-1234</div>
                      </div>
                    </div>
                  </div>
                  <div className={css.carWrapper}>
                    <div className={css.carTitleWrapper}>
                      <div className={css.title}>차량번호</div>
                    </div>
                    <div className={css.carNumberWrapper}>
                      <div className={css.numberDetailWrapper}>
                        <div className={css.number}>1234</div>
                      </div>
                    </div>
                    <div className={css.explainWrapper}>
                      <div className={css.explain}>
                        주차 가능 대수는 최대 1대 입니다. 주차를 원하실 경우,
                        차량번호를 필수로 입력해주세요.
                      </div>
                    </div>
                  </div>
                  <div className={css.dateWrapper2}>
                    <div className={css.title}>예약 기간</div>
                    <div className={css.dateDetailWrapper}>
                      <div className={css.dateDetailWrapper2}>
                        <div className={css.date}>2025-09-09 ~ 2025-09-12</div>
                        <div className={css.dateCount}>3박 4일 </div>
                      </div>
                      <div className={css.dateExplain}>
                        예약이 가능한 기간입니다.
                      </div>
                    </div>
                  </div>
                  <div className={css.priceWrapper}>
                    <div className={css.priceDetailWrapper}>
                      <div className={css.boxWrapper1}>
                        <div className={css.boxtitle1}>기본가</div>
                        <div className={css.boxExplainWrapper1}>
                          <div className={css.boxPrice1}>150,000원</div>
                          <div className={css.priceExplain1}>3박 4일</div>
                        </div>
                      </div>
                      <div className={css.boxWrapper2}>
                        <div className={css.boxtitle2}>할인</div>
                        <div className={css.boxExplainWrapper2}>
                          <div className={css.boxPrice2}>15,000원 -</div>
                          <div className={css.priceExplain2}>3일 연박 할인</div>
                        </div>
                      </div>
                      <div className={css.boxWrapper3}>
                        <div className={css.boxtitle3}>인원 추가</div>
                        <div className={css.boxExplainWrapper3}>
                          <div className={css.boxPrice3}>2,000원 +</div>
                          <div className={css.priceExplain3}>
                            어린이 1명 추가
                          </div>
                        </div>
                      </div>
                      <div className={css.boxWrapper4}>
                        <div className={css.boxtitle4}>결제 금액</div>
                        <div className={css.boxExplainWrapper4}>
                          <div className={css.boxPrice4}>137,000원</div>
                          <div className={css.priceExplain4}>
                            할인 + 인원 추가 반영
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.calendarWrapper}>
                  <div className={css.calendarTitle}>기간 선택</div>
                  <div className={css.calendarImage}></div>
                  <div className={css.calendarExplainWrapper}>
                    <div className={css.calendarExplain1}>
                      2025-09-09 ~ 2025-09-12
                    </div>
                    <div className={css.calendarExplain2}>3박 4일 선택됨</div>
                  </div>
                </div>
              </div>
              <div className={css.noticeWrapper}>
                <div className={css.notice1Wrapper}>
                  <div className={css.notice1Title}>이용약관 동의</div>
                  <div className={css.notice1ExplainWrapper}>
                    <div className={css.explain}>
                      캠핑장 이용 수칙을 지키지 않을 분들은 정중히 사양합니다.
                    </div>
                  </div>
                  <div className={css.notice1ContentWrapper}>
                    <div className={css.notice1Title}>이용약관</div>
                    <ul className={css.notice1DetailWrapper}>
                      <li className={css.content1}>
                        1.예약은 1인 1사이트(최대 인원 4인) 예약
                        가능합니다.(동일인 2개 사이트 예약 시 취소됨)
                      </li>
                      <li className={css.content1}>
                        2.입금자와 예약자가 일치해야 합니다.
                      </li>
                      <li className={css.content1}>
                        3.예약 확인 클릭하면 예약 접수가 되며, 예약 접수문자가
                        발송됩니다. 입금은 반드시 예약 대기 문자(예약 접수 문자
                        아님)받으신 후 입금바랍니다. 예약 접수 상태에서 입금 시
                        중복 예약으로 취소 될 수 있습니다.
                      </li>
                      <li className={css.content1}>
                        4.예약 접수 및 승인 후 다음 날 오전 10시까지 미 입금 시
                        자동 취소 됩니다.
                      </li>
                      <li className={css.content1}>
                        5.사용일 당일 및 전일 예약은 관리자 문의 후 진행되며
                        예약 후 취소 및 환불은 불가합니다.
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
                    <div className={css.agreeButton}></div>
                    <div className={css.agreeText}>이용약관에 동의합니다.</div>
                  </div>
                </div>
                <div className={css.notice2Wrapper}>
                  <div className={css.notice2Title}>환불규정 동의</div>
                  <div className={css.notice2ExplainWrapper}>
                    <div className={css.explain}>
                      문어발 식 예약 방지를 위해 취소 시 취소 수수료 10%
                      발생합니다. 신중한 예약부탁드립니다.
                    </div>
                  </div>
                  <div className={css.notice2ContentWrapper}>
                    <div className={css.notice2Title}>환불규정</div>
                    <ul className={css.notice2DetailWrapper}>
                      <li className={css.content2}>
                        예약 건 양도 절대불가합니다.
                      </li>
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
                    <div className={css.agreeButton}></div>
                    <div className={css.agreeText}>환불규정에 동의합니다.</div>
                  </div>
                </div>
              </div>
              <div className={css.previewWrapper}>
                <div className={css.previewDetailWrapper}>
                  <div className={css.title}>예약 미리보기</div>
                  <div className={css.contentWrapper}>
                    <div className={css.contentTitle}>예약자 정보</div>
                    <div className={css.contentDetailWrapper2}>
                      <div className={css.textWrapper1}>
                        <div className={css.text1}>사이트</div>
                        <div className={css.text2}>A-1 사이트 / 파쇄석</div>
                      </div>
                      <div className={css.textWrapper2}>
                        <div className={css.text1}>예약자</div>
                        <div className={css.text2}>홍길동</div>
                      </div>
                      <div className={css.textWrapper3}>
                        <div className={css.text1}>예약 인원</div>
                        <div className={css.text2}>
                          3인 [성인 2명 어린이 1명]
                        </div>
                      </div>
                      <div className={css.textWrapper4}>
                        <div className={css.text1}>예약 기간</div>
                        <div className={css.text2}>2025-09-09 ~ 2025-09-12</div>
                      </div>
                    </div>
                  </div>
                  <div className={css.priceWrapper}>
                    <div className={css.title}>결제 금액</div>
                    <div className={css.priceDetailWrapper}>
                      <div className={css.boxWrapper1}>
                        <div className={css.boxtitle1}>기본가</div>
                        <div className={css.boxExplainWrapper1}>
                          <div className={css.boxPrice1}>150,000원</div>
                          <div className={css.priceExplain1}>3박 4일</div>
                        </div>
                      </div>
                      <div className={css.boxWrapper2}>
                        <div className={css.boxtitle2}>할인</div>
                        <div className={css.boxExplainWrapper2}>
                          <div className={css.boxPrice2}>15,000원 -</div>
                          <div className={css.priceExplain2}>3일 연박 할인</div>
                        </div>
                      </div>
                      <div className={css.boxWrapper3}>
                        <div className={css.boxtitle3}>인원 추가</div>
                        <div className={css.boxExplainWrapper3}>
                          <div className={css.boxPrice3}>2,000원 +</div>
                          <div className={css.priceExplain3}>
                            어린이 1명 추가
                          </div>
                        </div>
                      </div>
                      <div className={css.boxWrapper4}>
                        <div className={css.boxtitle4}>결제 금액</div>
                        <div className={css.boxExplainWrapper4}>
                          <div className={css.boxPrice4}>137,000원</div>
                          <div className={css.priceExplain4}>
                            할인 + 인원 추가 반영
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.explainWrapper}>
                  <div className={css.explain}>
                    예약 완료 시 예약 확인 문자가 발송됩니다. 문자를
                    확인해주세요!
                  </div>
                </div>
                <div className={css.button}>
                  <div className={css.text}>예약완료</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
