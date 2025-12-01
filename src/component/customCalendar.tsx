import { useState } from "react";
import Calendar, { TileDisabledFunc } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customCalendar.module.scss";
import css from "./customCalendar.module.scss";

// react-calendar 타입 정의
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// 관리자 수동 금지 넣지 않은 상태
export const CustomCalendar = ({ reserve_data }: { reserve_data: any[] }) => {
  const [value, setValue] = useState<Value>([null, null]);

  const parsedData = reserve_data.flatMap((item) => {
    const dates: Date[] = [];

    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);

    const current = new Date(startDate);
    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  });

  // 특정 날짜 비활성화 함수
  const tileDisabled = ({ date }: { date: Date }) => {
    return parsedData.some(
      (disabledDate) =>
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
    );
  };

  // 날짜 선택 핸들러 (최소 1일, 최대 5일 체크)
  const handleDateChange = (newValue: Value) => {
    if (Array.isArray(newValue)) {
      const [start, end] = newValue;

      if (start && end) {
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // 최대 5일 체크 (5일 = 4박 5일이므로 diffDays는 4까지)
        if (diffDays > 4) {
          alert("최대 5일까지만 선택 가능합니다.");
          return;
        }

        // 최소 1일 체크는 자동으로 보장됨 (같은 날 선택 시 diffDays = 0)
        setValue(newValue);
      } else {
        // 시작 날짜만 선택된 경우
        setValue(newValue);
      }
    }
  };

  const settings: any = {
    onChange: handleDateChange,
    value: value,
    selectRange: true, // 범위 선택 활성화
    minDate: new Date(), // 오늘 이전 날짜 선택 불가
    locale: "ko-KR", // 한국어 설정
    tileDisabled: tileDisabled, // 특정 날짜 비활성화
  };

  return <Calendar {...settings} />;
};
