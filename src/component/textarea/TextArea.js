import React from "react";
import PageTitle from "./PageTitle";
import TextBox from "./TextBox";

import { block_list } from "@src/testdata";

function TextArea() {
  return (
    <div className="w-4/6 bg-gray-50 border-2 border-red p-6 divide-y-2">
      <PageTitle></PageTitle>
      <div className="py-3 space-y-1">
        {block_list.map((data, index) => (
          <TextBox data={data.content} key={data.block_id} />
        ))}
      </div>
    </div>
  );
}

export default TextArea;
