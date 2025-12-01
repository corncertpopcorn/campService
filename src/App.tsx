import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./page/main";
import { CampList } from "./page/campList";
import { CampDetail } from "./page/campDetail";
import { CampReserve } from "./page/campReserve";
import { Guide } from "./page/guide";
import { Notice } from "./page/notice";
import { ReserveEnd } from "./page/reserveEnd";
import { NoticeDetail } from "./page/noticeDetail";
import { MainSlider } from "./component/mainSlider";
import { CustomCalendar } from "./component/customCalendar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<CampList />} />
          <Route path="/detail/:id" element={<CampDetail />} />
          <Route path="/reserve" element={<CampReserve />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/reserve-end" element={<ReserveEnd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
