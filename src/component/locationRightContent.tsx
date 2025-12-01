import { AreaData } from "../page/main";
import css from "./locationRightContent.module.scss";
import { TwoByThreeText } from "./twoByThreeText";

export const LocationRightContent = ({
  name,
  imgSrc,
  description,
  subData,
}: AreaData) => {
  const parsedData = JSON.parse(subData);
  return (
    <div className={css.locationRightContentWrapper}>
      <div className={css.rightImage}>
        <img src={imgSrc} className={css.rightImageDetail}></img>
      </div>
      <div className={css.rightContentWrapper}>
        <div className={css.title1}>
          <span className={css.title1Detail}>{name}</span>
        </div>
        <div className={css.title2}>{description}</div>
        <div className={css.detailContentWrapper}>
          <div className={css.detailContentTitle}>주요정보</div>
          <TwoByThreeText
            text1={parsedData.address}
            text2={parsedData.driveTimeMinutes}
            text3={parsedData.food}
          />
        </div>
      </div>
    </div>
  );
};
