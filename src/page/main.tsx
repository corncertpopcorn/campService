import css from "./main.module.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Main = () => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.contentWrapper}>
        <div className={css.slideWrapper}>
          <div className={css.leftSlideWrapper}>
            <div className={css.arrow}></div>
          </div>
          <div className={css.middleSlideWrapper}></div>
          <div className={css.rightSlideWrapper}>
            <div className={css.arrow}></div>
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
          <div className={css.reserveWrapper}>
            <div className={css.reserveWrapper}></div>
            <div className={css.reserveWrapper}></div>
            <div className={css.reserveWrapper}></div>
          </div>
          <div className={css.reserveWrapper}>
            <div className={css.reserveWrapper}>
              <div className={css.reserveWrapper}>
                <div className={css.reserveWrapper}>
                  <div className={css.reserveWrapper}></div>
                  <div className={css.reserveWrapper}></div>
                </div>
                <div className={css.reserveWrapper}></div>
                <div className={css.reserveWrapper}></div>
              </div>
              <div className={css.reserveWrapper}></div>
            </div>
            <div className={css.reserveWrapper}></div>
          </div>
        </div>
        <div className={css.locationWrapper}></div>
        <Footer />
      </div>
    </div>
  );
};
