import css from "./main.module.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ReserveList } from "../component/reserveList";
import { CantReserveList } from "../component/cantReserveList";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { TwoByThreeText } from "../component/twoByThreeText";
import { LocationRightContent } from "../component/locationRightContent";
import { ThreeTitle } from "../component/threeTitle";
import { AdPicture } from "../component/adPicture";

import adImage from "../image/16054745c9456b1175aa0ccd6c14397e576c6b66.jpg";

export const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // 기본 화살표 숨김

    beforeChange: (current: number, next: number) => setCurrentSlide(next),

    initialSlide: 0, // 명시적으로 설정
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const sliderRef = useRef<Slider>(null);

  const getPrevSlide = () => (currentSlide === 0 ? 2 : currentSlide - 1);
  const getNextSlide = () => (currentSlide === 2 ? 0 : currentSlide + 1);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // 반대로 변경
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // 반대로 변경
    }
  };

  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <div className={css.slideWrapper1}>
            <div className={css.slideWrapper2}>
              <div className={css.slideWrapper3}>
                <button className={css.leftButton}></button>
                <div className={css.slideWrapper4}>
                  <div className={css.slideWrapper5}>
                    <div className={css.slideWrapper6}></div>
                  </div>
                </div>
                <button className={css.rightButton}></button>
              </div>
            </div>
          </div>
          <div className={css.adWrapper}>
            <ThreeTitle
              title1="바다와 함께 즐기는 완벽한 휴식공간"
              title2="여수 순천 최고 캠핑장,"
              title21=" 두랭이해변오토캠핑장"
              title3={`두랭이해변오토캠핑장은 바다와 함께 즐기는 완벽한 휴식공간입니다.
        해안가에 자리잡은 캠핑장에서는 시원한 바람과 탁 트인 파도 소리를 들으며 마음의 평화를 찾을 수 있습니다.
        `}
            />
            <div className={css.adPictureWrapper}>
              <AdPicture
                background_image={adImage}
                title="개별 화장실"
                content="넓고 깨끗한 화장실과 샤워실을 개별로 이용하실 수 있습니다."
              />
              <AdPicture
                background_image={adImage}
                title="캠핑장 안내도"
                content="캠핑장의 모든 시설이 편리한 동선으로 배치되어 있습니다."
              />
              <AdPicture
                background_image={adImage}
                title="매점"
                content="장작 / 얼음 및 가벼운 간식을 캠핑장에서 직접 운영 하는
                    매점에서 판매중입니다."
              />
              <AdPicture
                background_image={adImage}
                title="최적의 지리적 위치"
                content="여수 순천 보성 여행동선을 짤 수 있는 최적의 위치에 캠핑장이
                    있습니다."
              />
            </div>
          </div>
          <div className={css.reserveWrapper}>
            <ThreeTitle
              title1="캠핑장 목록"
              title2="캠핑장 정보 및 예약 현황"
            />
            <div className={css.reserveContentWrapper}>
              <ReserveList />
              <ReserveList />
            </div>
            <button className={css.reserveButton}>캠핑장 전체보기</button>
          </div>
          <div className={css.locationWrapper}>
            <ThreeTitle
              title1="여행지 정보"
              title20="두랭이오토해변캠핑장"
              title2="과 행복한 여행"
              title3={`두랭이오토해변캠핑장의 위치와 가까운 여수 추천 여행지를 소개합니다.
          즐거운 캠핑과 함께 주변 주요 관광지를 둘러보세요.
          `}
            />
            <div className={css.locationContentWrapper}>
              <div className={css.locationLeftWrapper}>
                <div className={css.leftTitleWrapper}>
                  <div className={css.leftTitle}>순천</div>
                  <div className={css.leftTitle}>여수</div>
                  <div className={css.leftTitle}>보성</div>
                </div>
                <div className={css.leftImageWrapper}></div>
              </div>
              <div className={css.locationRightWrapper}>
                <LocationRightContent />
                <hr className={css.locationBar}></hr>
                <LocationRightContent />
                <hr className={css.locationBar}></hr>
                <LocationRightContent />
                <button className={css.moreButton}>더보기</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
