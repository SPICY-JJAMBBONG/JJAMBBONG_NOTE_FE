import React from "react";

function PageList() {
  const testdata = [
    { pagename: "이번주 아침 리스트" },
    { pagename: "오늘 점심식사 메뉴" },
    { pagename: "저녁 약속" },
  ];

  const layouttest = { pagename: "다음주 식사 메뉴" };
  return (
    <div className="w-full bg-yellow">
      <div className="py-3 flex flex-row justify-center items-center space-x-2">
        <span className="text-blue font-semibold text-2xl">NOTE LIST</span>
        <button className="w-4 h-4 rounded-full bg-red"></button>
      </div>
      <div className="pt-2 pb-4 space-y-1">
        {testdata.map((data, index) => (
          <div key={index} className="w-full px-3">
            <span>{data.pagename}</span>
          </div>
        ))}
        <div className="w-full px-3 bg-red">
          <span>{layouttest.pagename}</span>
        </div>
      </div>
    </div>
  );
}

export default PageList;
