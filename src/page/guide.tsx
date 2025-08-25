import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./guide.module.scss";

export const Guide = () => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.contentWrapper}>
        <div className={css.contentDetailWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 이용 전 필독</div>
            <div className={css.title2}>이용안내</div>
          </div>
          <div className={css.contentBoxWrapper}>
            <div className={css.upBoxWrapper}>
              <div className={css.upTitleWrapper}>
                <div className={css.upTitleDetailWrapper}>
                  <div className={css.upTitle}>예약</div>
                </div>
              </div>
              <div className={css.upContentWrapper}>
                <ul className={css.upContentDetailWrapper}>
                  <li className={css.upContent}>
                    1인 1사이트(최대인원 방문객포함 4인) 예약 가능합니다.(동일인
                    2개 사이트 예약 시 취소됨)
                  </li>
                  <li className={css.upContent}>
                    2팀 이상 동반캠핑은 관리자 문의 후 예약 가능합니다.(관리자
                    문의 없이 예약 시 취소처리됩니다)
                  </li>
                  <li className={css.upContent}>
                    사용일 당일 및 전일 예약은 관리자 문의 후 진행되며 예약 후
                    취소 및 환불은 불가합니다.{" "}
                  </li>
                  <li className={css.upContent}>
                    방문객은 22시 전까지 퇴실하셔야 합니다.{" "}
                  </li>
                  <li className={css.upContent}>반려동물은 출입불가합니다. </li>
                  <li className={css.upContent}>
                    카라반, 텐트 트레일러 예약 불가합니다.{" "}
                  </li>
                  <li className={css.upContent}>
                    캠핑카 및 차박은 관리자에 문의 후 예약바랍니다.
                  </li>
                </ul>
                <div className={css.upNoticeWrapper}>
                  자세한 사항은 <span className={css.upNotice2}>공지사항</span>
                  을 참조하세요.
                </div>
              </div>
            </div>
            <div className={css.downBoxWrapper}>
              <div className={css.downTitleWrapper}>
                <div className={css.downTitleDetailWrapper}>
                  <div className={css.downTitle}>이용요금</div>
                </div>
              </div>
              <div className={css.downContentWrapper}>
                <ul className={css.downContentDetailWrapper}>
                  <li className={css.downContent}>주중 : 55,000원~65,000원</li>
                  <li className={css.downContent}>주말 : 65,000원~75,000원 </li>
                  <li className={css.downContent}>
                    주중 : 법정공휴일의 전일을 제외한 매주 일요일~목요일{" "}
                  </li>
                  <li className={css.downContent}>
                    주말 : 매주 금요일, 토요일, 법정공휴일의 전일{" "}
                  </li>
                  <li className={css.downContent}>연박시 1박당 5,000원 할인</li>
                </ul>
                <div className={css.downNoticeWrapper}>
                  자세한 사항은
                  <span className={css.downNotice2}> 캠핑장 예약 페이지</span>를
                  참조하세요.
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
