import { useEffect, useState } from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./notice.module.scss";
import axios from "axios";
import apiService from "../util/apiService";

interface NoticeData {
  id: number;
  date: string;
  title: string;
  content: string;
  view: number;
}

export const Notice = () => {
  const [noticeData, setNoticeData] = useState<NoticeData[] | null>(null);

  useEffect(() => {
    try {
      // /admin/notice/list?page=0&view=40
      const fetchNoticeData = async () => {
        const res = await apiService.get<any>(`/notice/list?page=0&view=40`);
        setNoticeData(res.data);
      };
      fetchNoticeData();
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
            <div className={css.title1}>캠핑장 공지사항</div>
            <div className={css.title2}>공지사항</div>
            <div className={css.title3}>
              <br />
            </div>
          </div>
          <div className={css.tableWrapper}>
            <table className={css.tableDetailWrapper}>
              <thead>
                <tr>
                  <th className={css.theadTitle1}>번호</th>
                  <th className={css.theadTitle2}>작성일</th>
                  <th className={css.theadTitle3}>제목</th>
                  <th className={css.theadTitle4}>조회수</th>
                </tr>
              </thead>
              {noticeData?.map((item) => (
                <tbody>
                  <tr>
                    <td className={css.noticeTitle1}>{item.id}</td>
                    <td className={css.noticeTitle2}>
                      {item.date.split("T")[0]}
                    </td>
                    <td className={css.noticeTitle3}>{item.title}</td>
                    <td className={css.noticeTitle4}>{item.view}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
