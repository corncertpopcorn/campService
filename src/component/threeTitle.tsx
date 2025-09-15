import css from "./threeTitle.module.scss";

type TitleList = {
  title1: string;
  title20?: string;
  title2: string;
  title21?: string;
  title3?: string;
};

export const ThreeTitle = ({
  title1,
  title20,
  title2,
  title21,
  title3,
}: TitleList) => {
  return (
    <div className={css.adTitleWrapper}>
      <div className={css.adMainText1}>{title1}</div>
      <div className={css.adMainText2}>
        <span className={css.adMainText20}>{title20}</span>
        {title2}
        <span className={css.adMainText21}>{title21}</span>
      </div>
      <div className={css.adMainText3}>{title3 ? title3 : <br />}</div>
    </div>
  );
};
