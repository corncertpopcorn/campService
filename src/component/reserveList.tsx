import { MainData } from "../page/main";
import css from "./reserveList.module.scss";
import { TwoByFourText } from "./twoByFourText";

import adImage from "../image/16054745c9456b1175aa0ccd6c14397e576c6b66.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { CustomCalendar } from "./customCalendar";
import { useNavigate } from "react-router-dom";
import apiService from "../util/apiService";

export const ReserveList = (reserveData: MainData) => {
  const [isReserve, setIsReserve] = useState<boolean>(false);
  const [reservedData, setReservedData] = useState<any[]>([]);
  const navigate = useNavigate();

  // /admin/reservation/list?idx=1
  const fetchReserveData = async () => {
    try {
      const res = await apiService.get<any>(
        `/reservation/list?idx=${reserveData.idx}`
      );
      setReservedData(res.data);
    } catch (error) {
      console.error("데이터 로딩 실패:", error);
    }
  };

  const pressReserve = () => {
    fetchReserveData();
    setIsReserve(true);
  };

  const closePopup = () => {
    setIsReserve(false);
  };

  const handleReserve = () => {
    navigate(`/reserve?idx=${reserveData.idx}`);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <div
          className={css.leftImage}
          style={{ backgroundImage: `url(${reserveData.img_1 ?? adImage})` }}
        ></div>
        <div
          className={css.rightImage}
          style={{ backgroundImage: `url(${reserveData.img_2 ?? adImage})` }}
        ></div>
      </div>
      <div className={css.imageWrapper}>
        <div
          className={css.leftImage}
          style={{ backgroundImage: `url(${reserveData.img_3 ?? adImage})` }}
        ></div>
        <div
          className={css.rightImage}
          style={{ backgroundImage: `url(${reserveData.img_4 ?? adImage})` }}
        ></div>
      </div>
      <div className={css.titleWrapper}>
        <span className={css.title}>{reserveData.site_name}</span>
        <span className={css.canReserve}>예약가능</span>
      </div>

      <TwoByFourText />

      <div className={css.reserveWrapper}>
        <div className={css.reserveLeftWrapper}>
          <div
            className={css.reserveText1}
          >{`${reserveData.start_price}원 ~ ${reserveData.end_price}원`}</div>
          <div className={css.reserveText2}>1박 요금</div>
        </div>
        <div className={css.reserveRightWrapper}>
          <button className={css.reserveButton1} onClick={pressReserve}>
            예약현황
          </button>
          <button className={css.reserveButton2} onClick={handleReserve}>
            예약하기
          </button>
        </div>
      </div>
      {isReserve && (
        <div
          className={css.popupBackWrapper}
          onClick={() => setIsReserve(false)}
        >
          <div className={css.popupWrapper}>
            <div className={css.popupTitleWrapper}>
              <span className={css.popupTitleText}></span>
              <div className={css.popupXButton}></div>
            </div>
            <div className={css.popupContentWrapper}>
              <CustomCalendar reserve_data={reservedData} />
              <button className={css.popupCloseButton} onClick={closePopup}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
