import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import io from "socket.io-client";
import moment from "moment";

import { useLocation } from "react-router-dom";

import HeaderBar from "./HeaderBar";

import { IconContext } from "react-icons";
import {
  FaRegGrinAlt,
  FaRegGrinBeamSweat,
  FaRegGrinBeam,
  FaRegGrinSquint,
  FaRegGrinStars,
  FaRegGrinWink,
} from "react-icons/fa";

// const username = prompt("What is your name?");
let username = "";

const PORT = process.env.PORT || 443;

// const socket = io("http://localhost:" + PORT, {
//   transports: ["websocket", "polling"],
// });

// const socket = io("http://www.accnew.com", {
//   transports: ["websocket", "polling"],
// });

let socket = null;
let images = [];
images[0] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegGrinAlt />
  </IconContext.Provider>
);
images[1] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegGrinBeamSweat />
  </IconContext.Provider>
);
images[2] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegGrinBeam />
  </IconContext.Provider>
);
images[3] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegGrinSquint />
  </IconContext.Provider>
);
images[4] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegGrinStars />
  </IconContext.Provider>
);
images[5] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegGrinWink />
  </IconContext.Provider>
);

let index2 = Math.floor(Math.random() * images.length);
let index3 = Math.floor(Math.random() * images.length);
/*let min = 0;
let max = 3;
let index2 = Math.floor(Math.random() * (max - min) + min)*/

function Chat2({}) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const search = useLocation().search;
  username = new URLSearchParams(search).get("name");

  useEffect(() => {
    socket = io("http://localhost:" + PORT, {
      transports: ["websocket", "polling"]
    });

    //  const socket = io("https://api.accnew.com:" + PORT, {
    // 	transports: ["websocket", "polling"]
    // });

    // const socket = io("https://api.accnew.com", {
    //   withCredentials: true,
    //   extraHeaders: {
    //     "my-custom-header": "abcd",
    //   },
    // });

    // io.set('transports',['xhr-polling']);

    socket.on("connect", () => {
      socket.emit("username", username);
    });

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      var objDiv = document.getElementById("chatarea");
      objDiv.scrollTop = objDiv.scrollHeight;
    });

    socket.on("connected", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("disconnected", (id) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== id);
      });
    });

    socket.on("onconnected", () => {
      window.location.reload();
    });
  }, []);

  //Load only one time
  // useEffect(() => {
  //   if (window.localStorage) {
  //     if (!localStorage.getItem("firstLoad")) {
  //       localStorage["firstLoad"] = true;
  //       window.location.reload();
  //     } else localStorage.removeItem("firstLoad");
  //   }
  // }, []);

  const submit = (event) => {
    event.preventDefault();
    socket.emit("send", message);
    setMessage("");
  };

  return (
    <div className="container-full">
      <HeaderBar />
      <div className="chat-grid">
        <div className="chat-grid-top">
          ยินดีต้อนรับ คุณ &nbsp;
          <span style={{ color: "orange" }}>{username}</span>
        </div>
        <div className="chat-grid-content">
          <div className="chat-grid-content-left" id="chatarea">
            <div id="messages">
              {messages.map(({ user, date, text }, index) => (
                <div key={index}>
                  <div>
                    {/* {images[index3]}&nbsp;&nbsp; */}
                    {username === user.name ? images[index3] : images[index2]}
                    &nbsp;&nbsp;
                    {username === user.name ? (
                      <span style={{ color: "orange" }}>{user.name}</span>
                    ) : (
                      <span style={{ color: "blue" }}>{user.name}</span>
                    )}
                    &nbsp;&nbsp;
                    <span className="chat-message indent">{text}</span>
                    <div className="chat-message-bottom">
                      {/* {moment(date).format("h:mm:ss a")} */}
                      {moment(date).format("LLLL")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-grid-content-right">
            <ul id="users">
              {users.map(({ name, id }) => (
                // <li key={id}>{name}</li>
                <li key={id}>
                  {username === name ? images[index3] : images[index2]}&nbsp;
                  {username === name ? (
                    <span style={{ color: "orange" }}>{name}</span>
                  ) : (
                    <span style={{ color: "blue" }}>{name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chat-grid-bottom">
          <form action="" onSubmit={submit} id="form">
            <div className="input-group">
              <div>
                <input
                  type="text"
                  className="input-chat"
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  value={message}
                  id="text"
                  placeholder="พิมพ์ข้อความ"
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <button
                  id="submit"
                  type="submit"
                  className="btn btn-primary btn-chat"
                >
                  ส่ง
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat2;
