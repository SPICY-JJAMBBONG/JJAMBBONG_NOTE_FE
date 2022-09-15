import React from "react";

function PageTitle() {
  return (
    <div className="py-3 text-left text-3xl space-x-2">
      <span role={"img"} aria-label="emoji">
        😇
      </span>
      <span className="text-gray-500">페이지 타이틀</span>
    </div>
  );
}

export default PageTitle;
