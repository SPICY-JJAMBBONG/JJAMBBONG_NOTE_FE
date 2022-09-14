import React from "react";
import LeftSidebar from "@src/component/sidebar/LeftSidebar";
import RightSidebar from "@src/component/sidebar/RightSidebar";
import TextArea from "@src/component/textarea/TextArea";

function TextPage() {
  return (
    <div className="w-full h-screen min-h-screen flex flex-row">
      <LeftSidebar></LeftSidebar>
      <TextArea></TextArea>
      <RightSidebar></RightSidebar>
    </div>
  );
}

export default TextPage;
