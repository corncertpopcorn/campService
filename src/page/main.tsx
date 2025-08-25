import css from "./main.module.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ReserveList } from "../component/reserveList";
import { CantReserveList } from "../component/cantReserveList";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

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
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.contentWrapper}>
        <div className={css.slideWrapper}>
          <div
            className={`${css.leftSlideWrapper} ${
              css[`slide${getPrevSlide()}`]
            }`}
          >
            <div className={css.arrow} onClick={handlePrevClick}></div>
          </div>

          <Slider {...settings} className={css.sliderContainer} ref={sliderRef}>
            <div className={css.slideItem}>
              <div className={`${css.middleSlideWrapper} ${css.slide0}`}></div>
            </div>
            <div className={css.slideItem}>
              <div className={`${css.middleSlideWrapper} ${css.slide1}`}></div>
            </div>
            <div className={css.slideItem}>
              <div className={`${css.middleSlideWrapper} ${css.slide2}`}></div>
            </div>
          </Slider>

          <div
            className={`${css.rightSlideWrapper} ${
              css[`slide${getNextSlide()}`]
            }`}
          >
            <div className={css.arrow} onClick={handleNextClick}></div>
          </div>
        </div>
        <div className={css.adWrapper}>
          <div className={css.adDetailWrapper}>
            <div className={css.adMainTextWrapper}>
              <div className={css.adMainText1}>
                바다와 함께 즐기는 완벽한 휴식공간
              </div>
              <div className={css.adMainText2}>
                전남 여수 최고 평점 캠핑장, 두랭이오토해변캠핑장
              </div>
              <div className={css.adMainText3}>
                두랭이오토캠핑장은 바다와 함께 즐기는 완벽한 휴식공간입니다.
              </div>
              <div className={css.adMainText4}>
                해안가에 자리잡은 캠핑장에서는 시원한 바람과 탁 트인 파도 소리를
                들으며 마음의 평화를 찾을 수 있습니다.
              </div>
            </div>
            <div className={css.adPictureWrapper}>
              <div className={css.adPictureDetailWrapper}>
                <div className={css.adPicture}></div>
                <div className={css.adTextWrapper}>
                  <div className={css.adText1}>개별 화장실</div>
                  <div className={css.adText2}>
                    넓고 깨끗한 화장실과 샤워실을 개별로 이용하실 수 있습니다.
                  </div>
                </div>
              </div>
              <div className={css.adPictureDetailWrapper}>
                <div className={css.adPicture}></div>
                <div className={css.adTextWrapper}>
                  <div className={css.adText1}>최적의 지리적 위치</div>
                  <div className={css.adText2}>
                    최적의 여수 여행 동선을 짤 수 있는 위치에 캠핑장이 있습니다.
                  </div>
                </div>
              </div>
              <div className={css.adPictureDetailWrapper}>
                <div className={css.adPicture}></div>
                <div className={css.adTextWrapper}>
                  <div className={css.adText1}>구급약 비치 및 소화기 구비</div>
                  <div className={css.adText2}>
                    안전한 캠핑장 이용을 위한 안전망을 구축해놓았습니다.
                  </div>
                </div>
              </div>
              <div className={css.adPictureDetailWrapper}>
                <div className={css.adPicture}></div>
                <div className={css.adTextWrapper}>
                  <div className={css.adText1}>매점</div>
                  <div className={css.adText2}>
                    가벼운 간식 및 생활용품을 캠핑장에서 직접 운영하는 매점에서
                    판매중입니다.
                  </div>
                </div>
              </div>
            </div>
            <div className={css.adButtonWrapper}>
              <div className={css.adButtonText}>캠핑장 둘러보기</div>
            </div>
          </div>
        </div>
        <div className={css.reserveWrapper}>
          <div className={css.reserveTitleWrapper}>
            <div className={css.reserveTitle1}>캠핑장 둘러보기</div>
            <div className={css.reserveTitle2}>캠핑장 정보 및 예약 현황</div>
            <div className={css.reserveTitle3}>
              두랭이해변오토캠핑장의 모든 캠핑장과 예약현황을 확인해보세요.
            </div>
          </div>
          <div className={css.reserveContentWrapper}>
            <div className={css.reserveDetailWrapper}>
              <ReserveList />
              <ReserveList />
            </div>
            <div className={css.reserveDetailWrapper}>
              <CantReserveList />
              <CantReserveList />
            </div>
          </div>
        </div>
        <div className={css.locationWrapper}>
          <div className={css.locationTitleWrapper}>
            <div className={css.titleText1}>두랭이오토해변캠핑장 위치 소개</div>
            <div className={css.titleText2}>
              두랭이오토해변캠핑장과 행복한 여행
            </div>
            <div className={css.titleText3}>
              두랭이오토해변캠핑장의 위치와 가까운 여수 추천 여행지를
              소개합니다. 즐거운 캠핑과 함께 주변 주요 관광지를 둘러보세요.
            </div>
          </div>
          <div className={css.locationContentWrapper}>
            <div className={css.locationContentDetailWrapper}>
              <div className={css.locationLeftWrapper}>
                <div className={css.leftTitleWrapper}>
                  <div className={css.leftTitle}>
                    <div className={css.titleText}>순천</div>
                  </div>
                  <div className={css.leftTitle}>
                    <div className={css.titleText}>여수</div>
                  </div>
                  <div className={css.leftTitle}>
                    <div className={css.titleText}>보성</div>
                  </div>
                </div>
                <div className={css.leftImageWrapper}>
                  <div className={css.leftImage}></div>
                </div>
              </div>
              <div className={css.locationRightWrapper}>
                <div className={css.locationRightContentWrapper}>
                  <div className={css.rightImage}></div>
                  <div className={css.rightContentWrapper}>
                    <div className={css.detailTitleWrapper}>
                      <div className={css.title1}>두랭이오토해변캠핑장</div>
                      <div className={css.title2}>
                        전남 여수에 위치한 두랭이오토해변캠핑장은 여수의 주요
                        여행지와 가까운 거리에 있는 최고 시설 캠핑장입니다.
                        캠핑장에 방문 후 즐거운 여수 여행을 시작하세요.
                      </div>
                    </div>
                    <div className={css.detailContentWrapper}>
                      <div className={css.detailContentTitle}>주요 정보</div>
                      <div className={css.detailContentTextWrapper}>
                        <div className={css.textDetailWrapper}>
                          <div className={css.leftText1}>주소</div>
                          <div className={css.rightText1}>
                            전남 여수시 율촌면 두언길 106-51
                          </div>
                        </div>
                        <div className={css.textDetailWrapper}>
                          <div className={css.leftText2}>즐길거리</div>
                          <div className={css.rightText2}>꼬막정식</div>
                        </div>
                        <div className={css.textDetailWrapper}>
                          <div className={css.leftText3}>캠핑장 거리</div>
                          <div className={css.rightText3}>40분</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.locationRightContentWrapper}>
                  <div className={css.rightImage}></div>
                  <div className={css.rightContentWrapper}>
                    <div className={css.detailTitleWrapper}>
                      <div className={css.title1}>두랭이오토해변캠핑장</div>
                      <div className={css.title2}>
                        전남 여수에 위치한 두랭이오토해변캠핑장은 여수의 주요
                        여행지와 가까운 거리에 있는 최고 시설 캠핑장입니다.
                        캠핑장에 방문 후 즐거운 여수 여행을 시작하세요.
                      </div>
                    </div>
                    <div className={css.detailContentWrapper}>
                      <div className={css.detailContentTitle}>주요 정보</div>
                      <div className={css.detailContentTextWrapper}>
                        <div className={css.textDetailWrapper}>
                          <div className={css.leftText1}>주소</div>
                          <div className={css.rightText1}>
                            전남 여수시 율촌면 두언길 106-51
                          </div>
                        </div>
                        <div className={css.textDetailWrapper}>
                          <div className={css.leftText2}>즐길거리</div>
                          <div className={css.rightText2}>꼬막정식</div>
                        </div>
                        <div className={css.textDetailWrapper}>
                          <div className={css.leftText3}>캠핑장 거리</div>
                          <div className={css.rightText3}>40분</div>
                        </div>
                      </div>
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
