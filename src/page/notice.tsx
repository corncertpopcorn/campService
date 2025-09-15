import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./notice.module.scss";

export const Notice = () => {
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
              <tbody>
                <tr>
                  <td className={css.noticeTitle1}>24</td>
                  <td className={css.noticeTitle2}>2023-04-17</td>
                  <td className={css.noticeTitle3}>홈페이지 예약하기 안내</td>
                  <td className={css.noticeTitle4}>3611</td>
                </tr>
                <tr>
                  <td className={css.noticeTitle1}>39</td>
                  <td className={css.noticeTitle2}>2025-09-13</td>
                  <td className={css.noticeTitle3}>이용약관 및 환불규정</td>
                  <td className={css.noticeTitle4}>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
