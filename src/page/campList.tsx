import { CantReserveList } from "../component/cantReserveList";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { ReserveList } from "../component/reserveList";
import css from "./campList.module.scss";

export const CampList = () => {
  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.titleName1}>캠핑장 목록</div>
            <div className={css.titleName2}>캠핑장 정보 및 예약 현황</div>
            <div>
              <br />
            </div>
          </div>
          <div className={css.reserveCampWrapper}>
            <ReserveList />
            <ReserveList />
          </div>
          <div className={css.reserveCampWrapper}>
            <ReserveList />
            <ReserveList />
          </div>
          <div className={css.reserveCampWrapper}>
            <ReserveList />
            <ReserveList />
          </div>
          <div className={css.reserveCampWrapper}>
            <ReserveList />
            <ReserveList />
          </div>
          <div className={css.reserveCampWrapper}>
            <ReserveList />
            <ReserveList />
          </div>
          <div className={css.reserveCampWrapper}>
            <ReserveList />
            <ReserveList />
          </div>
          <div className={css.cantReserveWrapper}>
            <CantReserveList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
