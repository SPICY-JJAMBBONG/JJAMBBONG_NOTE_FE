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

// const testdata = ["하이하이", "데이터", "왜안들어가"];

function TextArea() {
  return (
    <div className="w-4/6 bg-gray-50 border-2 border-red p-6">
      <PageTitle></PageTitle>
      {/* <>
        {testdata.map((data, index) => (
          <TextBox key={index} data={data}></TextBox>
        ))}
      </> */}
    </div>
  );
}

export default TextArea;
