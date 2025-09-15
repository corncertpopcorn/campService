import css from "./locationRightContent.module.scss";
import { TwoByThreeText } from "./twoByThreeText";

export const LocationRightContent = () => {
  return (
    <div className={css.locationRightContentWrapper}>
      <div className={css.rightImage}>
        <div className={css.rightImageDetail}></div>
      </div>
      <div className={css.rightContentWrapper}>
        <div className={css.title1}>
          <span className={css.title1Detail}>오동도</span>
        </div>
        <div className={css.title2}>
          전남 여수에 위치한 두랭이오토해변캠핑장은 여수의 주요 여행지와 가까운
          거리에 있는 최고 시설 캠핑장입니다. 캠핑장에 방문 후 즐거운 여수
          여행을 시작하세요.
        </div>
        <div className={css.detailContentWrapper}>
          <div className={css.detailContentTitle}>주요정보</div>
          <TwoByThreeText />
        </div>
      </div>
    </div>
  );
};
