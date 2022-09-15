import React from "react";

function ProfileImg() {
  return <div className="w-10 h-10 bg-yellow rounded-full"></div>;
}

function Profile() {
  const username = "USER";

  return (
    <div className="w-full flex flex-row justify-center items-center p-4 py-6 space-x-2">
      <ProfileImg></ProfileImg>
      <div className="w-4/6 flex flex-col justify-start items-start">
        <p className="text-sm">안녕하세요</p>
        <div>
          <span className="text-2xl font-semibold text-blue">{username}</span>
          <span className="text-2xl font-semibold">님</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
