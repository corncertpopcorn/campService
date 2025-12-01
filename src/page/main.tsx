import css from "./main.module.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ReserveList } from "../component/reserveList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LocationRightContent } from "../component/locationRightContent";
import { ThreeTitle } from "../component/threeTitle";
import { AdPicture } from "../component/adPicture";

import adImage from "../image/16054745c9456b1175aa0ccd6c14397e576c6b66.jpg";
import { MainSlider } from "../component/mainSlider";
import { useEffect, useState } from "react";
import axios from "axios";
import { admin } from "../util/serverSetting";
import { url } from "inspector";
import apiService from "../util/apiService";
import { useNavigate } from "react-router-dom";

//TODO:: todo작성 -> 필요한 주소 등의 데이터 참고 -> 데이터 기반 interface나 type 작성 -> axios 요청 -> 요청값 기반으로 다듬기 -> 다듬어진 데이터 기반으로 컴포넌트를 수정
// -> ma
// 요청때려보고 -> 퍼블리싱 된 내 코드에 맞게 interface 구성

export interface MainData {
  idx: number;
  site_name: string;
  site_idx: number;
  start_price: number;
  end_price: number;
  title: string;
  content: string;
  img_1: string;
  img_2: string;
  img_3: string;
  img_4: string;
  info: string;
}

interface SectionData {
  title: string;
  subTitle: string;
  description: string;
}

interface GuideAdData {
  title: string;
  imgSrc: string;
  content: string;
}

interface SlideData {
  content: string;
}

export interface AreaData {
  name: string;
  imgSrc: string;
  description: string;
  subData: string;
}

interface MapData {
  mapImgData: string;
  name: string;
}

export const Main = () => {
  const [mainData, setMainData] = useState<MainData[] | null>(null);
  const [sectionData, setSectionData] = useState<SectionData[] | null>(null);
  const [guideAdData, setGuideAdData] = useState<GuideAdData[] | null>(null);
  const [slideImg, setSlideImg] = useState<SlideData[] | null>(null);
  const [areaData, setAreaData] = useState<AreaData[] | null>(null);
  const [areaCount, SetAreaCount] = useState<number>(3);
  const [mapData, setMapData] = useState<MapData[] | null>(null);
  const [mapNumber, setMapNumber] = useState<number>(0);
  const [upNotice, setUpNotice] = useState<string | null>(null);
  const [downNotice, setDownNotice] = useState<string | null>(null);
  const [popupState, setPopupState] = useState<number>(1);

  const navigate = useNavigate();

  useEffect(() => {
    // o /admin/camp/listAll -> 캠프장 리스트
    // o /admin/home/list/section/text -> 위/아래 3줄 제목
    // o /admin/home/list/travel/item -> 맨아래 지도옆
    // o /admin/home/list/section -> 상단 4개짜리 안내
    // o /admin/home/list/travel -> 맨아래 지도
    // o /admin/home/list/slide -> 맨위 슬라이드 이미지
    // o /admin/popup/list -> 메인 팝업 윗쪽
    // o /admin/notice/view-pop -> 메인 팝업 아랫쪽

    const fetchAllData = async () => {
      const fetchMainData = async () => {
        try {
          const res = await apiService.get<MainData[]>("/camp/listAll");
          setMainData(res.data);
        } catch (error) {
          console.error("캠핑장 데이터 로딩 실패:", error);
        }
      };

      const fetchSectionData = async () => {
        try {
          const res = await apiService.get<SectionData[]>(
            "/home/list/section/text"
          );
          setSectionData(res.data);
        } catch (error) {
          console.error("섹션 데이터 로딩 실패:", error);
        }
      };

      const fetchGuideAdData = async () => {
        try {
          const res = await apiService.get<GuideAdData[]>("/home/list/section");
          setGuideAdData(res.data);
        } catch (error) {
          console.error("가이드 광고 데이터 로딩 실패:", error);
        }
      };

      const fetchSlideData = async () => {
        try {
          const res = await apiService.get<SlideData[]>("/home/list/slide");
          setSlideImg(res.data);
        } catch (error) {
          console.error("슬라이드 데이터 로딩 실패:", error);
        }
      };

      const fetchAreaData = async () => {
        try {
          const res = await apiService.get<AreaData[]>(
            "/home/list/travel/item"
          );
          setAreaData(res.data);
        } catch (error) {
          console.error("지역 데이터 로딩 실패:", error);
        }
      };

      const fetchMapData = async () => {
        try {
          const res = await apiService.get<MapData[]>("/home/list/travel");
          setMapData(res.data);
        } catch (error) {
          console.error("맵 데이터 로딩 실패:", error);
        }
      };

      const fetchUpNoticeData = async () => {
        try {
          const res = await apiService.get<any[]>("/popup/list");
          setUpNotice(res.data[0].message);
        } catch (error) {
          console.error("상단 공지사항 로딩 실패:", error);
        }
      };

      const fetchDownNoticeData = async () => {
        try {
          const res = await apiService.get<{ content: string }>(
            "/notice/view-pop"
          );
          setDownNotice(res.data.content);
        } catch (error) {
          console.error("하단 공지사항 로딩 실패:", error);
        }
      };

      fetchMainData();
      fetchSectionData();
      fetchGuideAdData();
      fetchSlideData();
      fetchAreaData();
      fetchMapData();
      fetchUpNoticeData();
      fetchDownNoticeData();
    };
    fetchAllData();
  }, []);

  const handleAreaCount = () => {
    if (areaData && areaData.length <= areaCount) {
      return;
    }
    SetAreaCount(areaCount + 1);
  };

  const handleCampList = () => {
    navigate("/list");
  };

  return (
    <>
      <Navbar />
      <div className={css.wrapper}>
        <div className={css.contentWrapper}>
          <MainSlider
            img1={slideImg?.[0]?.content || ""}
            img2={slideImg?.[1]?.content || ""}
            img3={slideImg?.[2]?.content || ""}
          />
          <div className={css.adWrapper}>
            <ThreeTitle
              title1={sectionData ? sectionData[0].subTitle : ""}
              title2={sectionData ? sectionData[0].title : ""}
              title3={sectionData ? sectionData[0].description : ""}
            />
            <div className={css.adPictureWrapper}>
              <AdPicture
                background_image={guideAdData ? guideAdData[0].imgSrc : adImage}
                title={guideAdData ? guideAdData[0].title : ""}
                content={guideAdData ? guideAdData[0].content : ""}
              />
              <AdPicture
                background_image={guideAdData ? guideAdData[1].imgSrc : adImage}
                title={guideAdData ? guideAdData[1].title : ""}
                content={guideAdData ? guideAdData[1].content : ""}
              />
              <AdPicture
                background_image={guideAdData ? guideAdData[2].imgSrc : adImage}
                title={guideAdData ? guideAdData[2].title : ""}
                content={guideAdData ? guideAdData[2].content : ""}
              />
              <AdPicture
                background_image={guideAdData ? guideAdData[3].imgSrc : adImage}
                title={guideAdData ? guideAdData[3].title : ""}
                content={guideAdData ? guideAdData[3].content : ""}
              />
            </div>
          </div>
          <div className={css.reserveWrapper}>
            <ThreeTitle
              title1="캠핑장 목록"
              title2="캠핑장 정보 및 예약 현황"
            />
            <div className={css.reserveContentWrapper}>
              {mainData?.slice(1, 3).map((item) => {
                return (
                  <ReserveList
                    idx={item.idx}
                    site_name={item.site_name}
                    site_idx={item.site_idx}
                    start_price={item.start_price}
                    end_price={item.end_price}
                    title={item.title}
                    content={item.content}
                    img_1={item.img_1}
                    img_2={item.img_2}
                    img_3={item.img_3}
                    img_4={item.img_4}
                    info={item.info}
                  />
                );
              })}
            </div>
            <button className={css.reserveButton} onClick={handleCampList}>
              캠핑장 전체보기
            </button>
          </div>
          <div className={css.locationWrapper}>
            <ThreeTitle
              title1={sectionData ? sectionData[1].subTitle : ""}
              title2={sectionData ? sectionData[1].title : ""}
              title3={sectionData ? sectionData[1].description : ""}
            />
            <div className={css.locationContentWrapper}>
              <div className={css.locationLeftWrapper}>
                <div className={css.leftTitleWrapper}>
                  <div
                    className={`${css.leftTitle} ${
                      mapNumber === 0 ? css.active : ""
                    }`}
                    onClick={() => setMapNumber(0)}
                  >
                    {mapData?.[0].name ?? ""}
                  </div>
                  <div
                    className={`${css.leftTitle} ${
                      mapNumber === 1 ? css.active : ""
                    }`}
                    onClick={() => setMapNumber(1)}
                  >
                    {mapData?.[1]?.name ?? ""}
                  </div>
                  <div
                    className={`${css.leftTitle} ${
                      mapNumber === 2 ? css.active : ""
                    }`}
                    onClick={() => setMapNumber(2)}
                  >
                    {mapData?.[2]?.name ?? ""}
                  </div>
                </div>
                <div
                  className={css.leftImageWrapper}
                  style={{
                    backgroundImage: `url(${
                      mapData?.[mapNumber]?.mapImgData ?? adImage
                    })`,
                  }}
                ></div>
              </div>
              <div className={css.locationRightWrapper}>
                {areaData?.slice(0, areaCount).map((item) => (
                  <>
                    <LocationRightContent
                      name={item.name}
                      imgSrc={item.imgSrc}
                      description={item.description}
                      subData={item.subData}
                    />
                    <hr className={css.locationBar}></hr>
                  </>
                ))}
                <button className={css.moreButton} onClick={handleAreaCount}>
                  더보기
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {popupState && (
          <div className={css.popupWrapper} onClick={() => setPopupState(0)}>
            <div className={css.popupDetailWrapper}>
              <div className={css.popupTitleWrapper}>
                <span className={css.popupTitle}>공지사항</span>
                <div className={css.popupTitleButton}></div>
              </div>
              <div className={css.popupContentWrapper}>
                <>
                  <div className={css.inputWrapper}>
                    <label className={css.label}>예약 공지사항</label>
                    <div className={css.labelWrapper}>
                      <div className={css.labelDetailWrapper}>
                        <textarea
                          className={css.labelText}
                          value={upNotice ?? ""}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <hr className={css.inputBar}></hr>
                  <div className={css.inputWrapper}>
                    <label className={css.label}>메인 공지사항</label>
                    <div className={css.labelWrapper}>
                      <div className={css.labelDetailWrapper}>
                        <textarea
                          className={css.labelText}
                          value={downNotice ?? ""}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </>
                <button
                  className={css.popupClose}
                  onClick={() => setPopupState(0)}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
