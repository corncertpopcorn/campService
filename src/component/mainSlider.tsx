import image1 from "../image/main1.jpg";
import image2 from "../image/main2.jpg";
import image3 from "../image/main3.jpg";
import image4 from "../image/Expand_left.svg";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./mainSlider.module.scss";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface Img {
  img1: string | null;
  img2: string | null;
  img3: string | null;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}

export const MainSlider = ({ img1, img2, img3 }: Img) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
  };

  return (
    <div className={css.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img src={img1 ? img1 : image1} alt="slide 1" className={css.img1} />
        </div>
        <div>
          <img src={img2 ? img2 : image2} alt="slide 2" className={css.img1} />
        </div>
        <div>
          <img src={img3 ? img3 : image3} alt="slide 3" className={css.img1} />
        </div>
        <div>
          <img src={img1 ? img1 : image1} alt="slide 4" className={css.img1} />
        </div>
        <div>
          <img src={img2 ? img2 : image2} alt="slide 5" className={css.img1} />
        </div>
        <div>
          <img src={img3 ? img3 : image3} alt="slide 6" className={css.img1} />
        </div>
      </Slider>
    </div>
  );
};
