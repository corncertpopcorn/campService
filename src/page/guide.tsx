import { useEffect, useState } from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./guide.module.scss";
import axios from "axios";
import apiService from "../util/apiService";

interface GuideData {
  title: string;
  content: string;
}

export const Guide = () => {
  const [guideData, setGuideData] = useState<GuideData[] | null>(null);

  useEffect(() => {
    try {
      //  /admin/use/list
      const fetchGuideData = async () => {
        const res = await apiService.get<any>(`/use/list`);
        setGuideData(res.data);
      };
      fetchGuideData();
    } catch (error) {
      console.error(" 데이터 로딩 실패:", error);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>캠핑장 이용 전 필독</div>
            <div className={css.title2}>이용안내</div>
            <div className={css.title3}>
              <br />
            </div>
          </div>
          {guideData?.map((item) => (
            <div className={css.upBoxWrapper}>
              <div className={css.upTitle}>{item.title}</div>
              <div className={css.upContentWrapper}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
