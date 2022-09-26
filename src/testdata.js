const page = {
  block_id: "page_0001",
  type: "page",
  block_list: [
    "text_0001",
    "text_0002",
    "text_0003",
    "text_0004",
    "page_0002",
    "page_0003",
  ],
  order: 1,
  title: "첫 페이지",
  last_modified_time: "2022-08-20 15:27:00",
};

export const block_list = [
  {
    block_id: "text_0001",
    type: "text",
    content: "첫 번째 줄",
    last_modified_time: "2022-08-20 16:01:00",
    order: 1,
  },
  {
    block_id: "text_0002",
    type: "text",
    content: "두 번째 줄",
    style: "bold",
    last_modified_time: "2022-08-20 16:01:00",
    order: 2,
  },
  {
    block_id: "text_0003",
    type: "text",
    content: "세 번째 줄",
    style: "bold, italic",
    last_modified_time: "2022-08-20 16:01:00",
    order: 3,
  },
  {
    block_id: "text_0004",
    type: "text",
    content: "네 번째 줄입니당",
    style: "bold, italic",
    last_modified_time: "2022-08-20 16:01:00",
    order: 4,
  },
  {
    block_id: "page_0002",
    type: "page",
    block_list: ["text_0001", "text_0002"],
    title: "두번째 페이지",
    order: 3.5,
    last_modified_time: "2022-08-20 16:27:00",
  },
  {
    block_id: "page_0003",
    type: "page",
    block_list: ["text_0001", "text_0002"],
    title: "세번째 페이지",
    order: 5,
    last_modified_time: "2022-08-20 16:27:00",
  },
];

const blcock_1 = {
  block_id: "text_0001",
  type: "text",
  content: "첫 번째 줄",
  last_modified_time: "2022-08-20 16:01:00",
  order: 1,
};

const blcock_2 = {
  block_id: "text_0002",
  type: "text",
  content: "두 번째 줄",
  style: "bold",
  last_modified_time: "2022-08-20 16:01:00",
  order: 2,
};

const blcock_3 = {
  block_id: "text_0003",
  type: "text",
  content: "세 번째 줄",
  style: "bold, italic",
  last_modified_time: "2022-08-20 16:01:00",
  order: 3,
};

const blcock_4 = {
  block_id: "text_0004",
  type: "text",
  content: "네 번째 줄",
  order: "4",
  indent: "1",
  style: "bold, underline",
  last_modified_time: "2022-08-20 16:01:00",
};

const page_0002 = {
  block_id: "page_0002",
  type: "text",
  content: "네 번째 줄",
  order: "4",
  indent: "1",
  style: "bold, underline",
  last_modified_time: "2022-08-20 16:01:00",
};
const page_0003 = {
  block_id: "page_0003",
  type: "text",
  content: "네 번째 줄",
  order: "4",
  indent: "1",
  style: "bold, underline",
  last_modified_time: "2022-08-20 16:01:00",
};
const page_0004 = {
  block_id: "page_0004",
  type: "text",
  content: "네 번째 줄",
  order: "4",
  indent: "1",
  style: "bold, underline",
  last_modified_time: "2022-08-20 16:01:00",
};
