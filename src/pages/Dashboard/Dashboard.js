import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "src/component/common/Sidebar/Sidebar";
import * as SockJS from "sockjs-client";
import Stomp from "stompjs";

const Dashboard = () => {
  const [text, setText] = useState([]);

  let stompClient = null;
  let socket = new SockJS("http://localhost:8080/gs-guide-websocket");
  stompClient = Stomp.over(socket);
  stompClient.debug = () => {};

  const onChangeText = useCallback((e) => {
    setText((prev) => [...prev, e.target.value]);
    stompClient.send("/topic/send/test", {}, text);
  }, []);

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/receive/test", (data) => {
        const newMessage = JSON.parse(data.body);
        addMessage(newMessage);
      });
    });
  }, [text]);

  const addMessage = (message) => {
    setText((prev) => [...prev, message]);
  };

  // useEffect(() => {
  //   stompClient.connect({}, function (frame) {
  //     // /topic/receive/test에 구독 하고 있는 페이지들에 데이터 전송
  //     stompClient.subscribe("/topic/receive/test", function (document) {
  //       let data = JSON.parse(document.body).content;
  //       let content = JSON.parse(data).content;
  //       setText(content);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    stompClient.send("/topic/send/test", {}, text);
  }, [text]);

  return (
    <>
      <Sidebar />
      <div>
        <h1>Websocket Test</h1>
        <textarea
          id="test"
          name="test"
          value={text}
          onChange={onChangeText}
        ></textarea>
      </div>
    </>
  );
};

export default Dashboard;
