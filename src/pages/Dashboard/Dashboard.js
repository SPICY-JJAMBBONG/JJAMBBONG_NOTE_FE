import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "src/component/common/Sidebar/Sidebar";
import * as SockJS from "sockjs-client";
import Stomp from "stompjs";

const sampleData = [];

const Dashboard = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [stompClient, setStompClient] = useState(null);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if (text === "") return;
    stompClient.send("/topic/send/test", {}, text);
  }, [text]);

  useEffect(() => {
    let socket = SockJS("http://localhost:8080/gs-guide-websocket");
    const stompClient = Stomp.over(socket);
    socket.onopen = function () {
      console.log("open");
    };
    stompClient.connect({}, () => {
      stompClient.subscribe(
        "/topic/receive/test",
        (data) => {
          setMessage(JSON.parse(data.body).content);
        },
        onError
      );
    });
    setStompClient(stompClient);
  }, []);

  const onError = (error) => {
    console.log(
      "Could not connect you to the Chat Room Server. Please refresh this page and try again!"
    );
  };

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
          style={{ height: "200px", width: "70%" }}
        ></textarea>
        <h1>Websocket Test</h1>
        <textarea
          id="test"
          name="test"
          value={message}
          style={{ height: "200px", width: "70%" }}
        ></textarea>
      </div>
    </>
  );
};

export default Dashboard;
