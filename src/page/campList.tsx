import axios from "axios";
import { CantReserveList } from "../component/cantReserveList";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { ReserveList } from "../component/reserveList";
import css from "./campList.module.scss";
import { useEffect, useState } from "react";
import { MainData } from "./main";
import apiService from "../util/apiService";
import { chunkArray } from "../util/arrayUtils";

export const CampList = () => {
  const [mainData, setMainData] = useState<MainData[][] | null>(null);

  useEffect(() => {
    const fetchMainData = async () => {
      try {
        const res = await apiService.get<any>(`/camp/listAll`);
        setMainData(handleTransData(res.data));
      } catch (error) {
        console.error(" 데이터 로딩 실패:", error);
      }
    };

    fetchMainData();
  }, []);

  const handleTransData = (data: any[]) => {
    const slicedData = data.slice(1);
    const dataResult = chunkArray(slicedData, 2);
    return dataResult;
  };

  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.titleName1}>캠핑장 목록</div>
            <div className={css.titleName2}>캠핑장 정보 및 예약 현황</div>
            <div className={css.titleName3}>
              <br />
            </div>
          </div>
          {mainData?.map((row) => (
            <div className={css.reserveCampWrapper}>
              {row.map((item) => (
                <ReserveList
                  key={item.idx}
                  idx={item.idx}
                  site_name={item.site_name}
                  site_idx={item.site_idx}
                  start_price={item.start_price}
                  end_price={item.end_price}
                  title={item.title}
                  content={item.content}
                  img_1={item.img_1}
                  img_2={item.img_2}
                  img_3={item.img_3}
                  img_4={item.img_4}
                  info={item.info}
                />
              ))}
            </div>
          ))}

          <div className={css.cantReserveWrapper}>
            <CantReserveList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
