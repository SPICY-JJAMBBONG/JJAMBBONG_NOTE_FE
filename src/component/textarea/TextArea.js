import React, { useCallback, useState } from "react";
import PageTitle from "./PageTitle";
import TextBox from "./TextBox";

import update from "immutability-helper";
import { block_list } from "@src/testdata";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function TextArea() {
  const [textBoxs, setTextBoxs] = useState(block_list);

  const moveTextBox = useCallback((dragIndex, hoverIndex) => {
    setTextBoxs((prevBox) =>
      update(prevBox, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevBox[dragIndex]],
        ],
      })
    );
  }, []);

  const renderTextBox = useCallback((data, index) => {
    return (
      <TextBox
        key={data.block_id}
        index={index}
        id={data.block_id}
        text={data.content}
        moveTextBox={moveTextBox}
      />
    );
  }, []);

  return (
    <div className="w-4/6 bg-gray-50 border-2 border-red p-6 divide-y-2">
      <PageTitle></PageTitle>
      <DndProvider backend={HTML5Backend}>
        <div className="py-3 space-y-1">
          {textBoxs.map((data, index) => renderTextBox(data, index))}
        </div>
      </DndProvider>
    </div>
  );
}

export default TextArea;
