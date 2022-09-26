import React, { useRef } from "react";
import { ItemTypes } from "./ItemTypes";
import { useDrag, useDrop } from "react-dnd";
import styled from "daisyui/dist/styled";

function TextBox({ text, index, id, moveTextBox }) {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.TEXTBOX,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return null;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return null;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return null;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return null;
      }
      moveTextBox(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TEXTBOX,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      className="rounded-lg hover:bg-gray-100 p-1 px-2"
      ref={ref}
      style={{ ...styled, opacity }}
      data-handler-id={handlerId}
    >
      <span>{text}</span>
    </div>
  );
}

export default TextBox;
