import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./noticeDetail.module.scss";

export const NoticeDetail = () => {
  const textAll = `예약 전 필독 부탁 드립니다
밀물, 썰물, 낙조를 벗 삼아 휴식 할 수 있는 공간을 추구합니다.
캠핑장 이용수칙을 준수하지 않을 분들은 정중히 사양합니다.
개별화장실 및 샤워실과 실내 실외 개수대가 설치되어 있습니다.
입실 최대 인원은 방문객 포함 4인입니다.
☆인원초과 절대불가☆
예약은 1인 1사이트 예약 가능합니다.
(동일인 2개 사이트 예약 시 취소됨)
차량은 예약 차량 1대만 입장 할 수 있습니다.
예약자와 입금자는 동일인 이여야 합니다.
다를 경우 입금과 상관없이 자동 취소됩니다.
주말(금요일,토요일)은 2박 이상 예약 가능합니다.
※주말(금.토) 1박 예약은 그 주 수요일부터 예약 가능합니다.
카라반, 트레일러 예약불가 / 캠핑가 및 차박 예약 가능(사전문의)
반려동물 동반 불가합니다.
1. 메인화면에 캠핑장 예약현황을 클릭합니다.
2. 사이트별 예약 가능한 일자를 확인 후
예약할 사이트를 클릭하면 사이트 예약창이 뜹니다.
※예약이 완료된 일자는 회색으로 표시됩니다.
3. 선택한 사이트 캘린더에서 입실 일자와 퇴실 일자를 선택하고 예약하기를 클릭 합니다.
※예약이 완료된 일자는 회색으로 표시됩니다.
4. 예약 창에 필수 입력 사항 입력하고 이용 약관과 환불 규정 확인 후 예약하기 누르시면 예약 완료됩니다.
※전화번호와 인원수는 숫자만 입력
5.예약 확인 클릭하면 예약 접수가 되며, 예약 접수문자가 발송됩니다. 입금은 반드시 예약 대기 문자(예약 접수 문자 아님)받으신 후 입금바랍니다. 예약 접수 상태에서 입금 시 중복 예약으로 취소 될 수 있습니다.
※예약 시 3번(예약접수, 예약대기, 예약승인)의 문자가 발송됩니다. 예약 클릭 후 문자 메시지 받지 못하거나 오류가 있으면 전화주세요.
6. 예약 후 다음날 10시 전까지 미 입금 시 예약은 자동 취소됩니다.
7. 예약 취소는 문자 메시지로 접수합니다.
☎ 예약 관련 문의 전화는 오후 2시부터 오후 6시까지 부탁드립니다. (010-4512-9312)`;
  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.titleWrapper}>
            <h3 className={css.title1}>캠핑장 공지사항</h3>
            <h2 className={css.title2}>공지사항</h2>
            <p className={css.title3}>
              <br />
            </p>
          </div>
          <div className={css.tableWrapper}>
            <table className={css.table}>
              <thead className={css.thead}>
                <tr className={css.tableRow1}>
                  <th>번호</th>
                  <td className={css.tableData1}>24</td>
                  <th>조회수</th>
                  <td className={css.tableData2}>3627</td>
                </tr>
                <tr className={css.tableRow2}>
                  <th>작성일</th>
                  <td className={css.tableData3}>2023-04-17</td>
                </tr>
                <tr className={css.tableRow3}>
                  <th>제목</th>
                  <td className={css.tableData4} colSpan={3}>
                    홈페이지 예약하기 안내
                  </td>
                </tr>
                <tr className={css.tableRow4}>
                  <th>내용</th>
                  <td className={css.tableData5} colSpan={3}>
                    {textAll}
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <a className={css.buttonWrapper}>목록으로</a>
        </div>
      </div>
      <Footer />
    </>
  );
};
