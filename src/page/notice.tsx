import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import css from "./notice.module.scss";

export const Notice = () => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.contentWrapper}>
        <div className={css.contentDetailWrapper}>
          <div className={css.titleWrapper}>
            <div className={css.title1}>두랭이해변오토캠핑장</div>
            <div className={css.title2}>공지사항</div>
          </div>
          <div className={css.tableWrapper}>
            <div className={css.tableDetailWrapper}>
              <div className={css.tableDetailWrapper2}>
                <div className={css.tableDetailWrapper3}>
                  <div className={css.columnWrapper1}>
                    <div className={css.columnDetailWrapper11}>
                      <div className={css.column11}>번호</div>
                    </div>
                    <div className={css.columnDetailWrapper12}>
                      <div className={css.column12}>1</div>
                    </div>
                    <div className={css.columnDetailWrapper12}>
                      <div className={css.column12}>2</div>
                    </div>
                    <div className={css.columnDetailWrapper12}>
                      <div className={css.column12}>3</div>
                    </div>
                  </div>
                  <div className={css.columnWrapper2}>
                    <div className={css.columnDetailWrapper21}>
                      <div className={css.column21}>날짜</div>
                    </div>
                    <div className={css.columnDetailWrapper22}>
                      <div className={css.column22}>2024-09-20 10:00</div>
                    </div>
                    <div className={css.columnDetailWrapper22}>
                      <div className={css.column22}>2024-09-20 10:00</div>
                    </div>
                    <div className={css.columnDetailWrapper22}>
                      <div className={css.column22}>2024-09-20 10:00</div>
                    </div>
                  </div>
                  <div className={css.columnWrapper3}>
                    <div className={css.columnDetailWrapper31}>
                      <div className={css.column31}>제목</div>
                    </div>
                    <div className={css.columnDetailWrapper32}>
                      <div className={css.column32}>공지사항입니다.</div>
                    </div>
                    <div className={css.columnDetailWrapper32}>
                      <div className={css.column32}>공지사항입니다.</div>
                    </div>
                    <div className={css.columnDetailWrapper32}>
                      <div className={css.column32}>공지사항입니다.</div>
                    </div>
                  </div>
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
