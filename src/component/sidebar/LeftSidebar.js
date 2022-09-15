import React from "react";
import PageList from "../pagelist/PageList";
import Profile from "../porfile/Porfile";

function LeftSidebar() {
  return (
    <div className="w-1/6 h-full bg-skyblue space-y-4">
      <Profile></Profile>
      <PageList></PageList>
    </div>
  );
}

export default LeftSidebar;
