import { url } from "inspector";
import css from "./adPicture.module.scss";

type AdList = {
  background_image: string;
  title: string;
  content: string;
};

export const AdPicture = ({ background_image, title, content }: AdList) => {
  return (
    <div className={css.adPictureDetailWrapper}>
      <div
        className={css.adPicture}
        style={{ backgroundImage: `url(${background_image})` }}
      ></div>
      <div className={css.adTextWrapper}>
        <div className={css.adText1}>{title}</div>
        <div className={css.adText2}>{content}</div>
      </div>
    </div>
  );
};
