import { CantReserveList } from "../component/cantReserveList";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { ReserveList } from "../component/reserveList";
import css from "./campList.module.scss";

export const CampList = () => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.campWrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.titleName1}>캠핑장 정보 및 예약 현황</div>
            <div className={css.titleName2}>캠핑장 목록</div>
          </div>
          <div className={css.contentDetailWrapper}>
            <div className={css.searchWrapper}>
              <div className={css.dateWrapper}>
                <div className={css.dateTextWrapper}>
                  <div className={css.dateText}>기간</div>
                </div>
                <div className={css.dateDetailWrapper}>
                  <div className={css.startDateWrapper}>
                    <div className={css.startTextWrapper}>
                      <div className={css.startText}>시작일</div>
                      <div className={css.startDate}>2025-09-09</div>
                    </div>
                  </div>
                  <div className={css.endDateWrapper}>
                    <div className={css.endTextWrapper}>
                      <div className={css.endText}>종료일</div>
                      <div className={css.endDate}>2025-09-12</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.reserveButtonWrapper}>
                <div className={css.leftButton}>
                  <div className={css.leftText}>검색 초기화</div>
                </div>
                <div className={css.rightButton}>
                  <div className={css.rightText}>예약 가능 캠핑장 검색</div>
                </div>
              </div>
            </div>
            <div className={css.campDetailWrapper}>
              <div className={css.reserveCampWrapper}>
                <ReserveList />
                <ReserveList />
              </div>
              <div className={css.cantReserveWrapper}>
                <CantReserveList />
                <CantReserveList />
              </div>
            </div>
          </div>
        </div>
        <div className={css.Wrapper}></div>
      </div>
      <Footer />
    </div>
  );
};
