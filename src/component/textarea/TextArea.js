import React from "react";
import PageTitle from "./PageTitle";
import TextBox from "./TextBox";

// const testdata = [
//   {
//     text: "하이하이하이 이건 텍스트 1번이에여",
//   },
//   {
//     text: "이건 텍스트 2번이구요",
//   },
//   {
//     text: "이건 텍스트 3번이랍니다 테스트 데이터 끝!!",
//   },
// ];

const testdata = [
  { test: "하이하이" },
  { test: "데이터" },
  { test: "입력하는건 좀 나중에 만들게요....." },
];

function TextArea() {
  return (
    <div className="w-4/6 bg-gray-50 border-2 border-red p-6 divide-y-2">
      <PageTitle></PageTitle>
      <div className="py-3 space-y-1">
        {testdata.map((testtest, index) => (
          <TextBox testtest={testtest.test} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TextArea;
