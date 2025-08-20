import React from "react";
import "./App.css";
import { Main } from "./page/main";
import { CampList } from "./page/campList";
import { CampDetail } from "./page/campDetail";
import { CampReserve } from "./page/campReserve";
import { Guide } from "./page/guide";
import { Notice } from "./page/notice";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
