import React from "react";

function TextBox(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      <span>{data}</span>
    </div>
  );
}

export default TextBox;
