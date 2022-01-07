import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import io from "socket.io-client";
import moment from "moment";

import { useLocation } from "react-router-dom";

import HeaderBar from "./HeaderBar";

import { IconContext } from "react-icons";
import {
  FaRegLaughBeam,
  FaRegLaughSquint,
  FaRegTired,
  FaRegSmile,
  FaRegMehRollingEyes,
  FaRegSurprise,
} from "react-icons/fa";

// const username = prompt("What is your name?");
let username = "";

// const socket = io("http://localhost:7000", {
//   transports: ["websocket", "polling"],
// });

const socket = io("http://localhost:3001");

let images = [];
images[0] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegLaughBeam />
  </IconContext.Provider>
);
images[1] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegLaughSquint />
  </IconContext.Provider>
);
images[2] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegTired />
  </IconContext.Provider>
);
images[3] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegSmile />
  </IconContext.Provider>
);
images[4] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegMehRollingEyes />
  </IconContext.Provider>
);
images[5] = (
  <IconContext.Provider value={{ className: "image-icon-sm" }}>
    <FaRegSurprise />
  </IconContext.Provider>
);

let index2 = Math.floor(Math.random() * images.length);
/*let min = 0;
let max = 3;
let index2 = Math.floor(Math.random() * (max - min) + min)*/

function Chat({}) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);	

  // const search = useLocation().search;
  // username = new URLSearchParams(search).get("name");

// window.onload = function() {
// 	if(!window.location.hash) {
// 		window.location = window.location + '#loaded';
// 		window.location.reload();
// 	}
// }

	username = "abcd";

  useEffect(() => {
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
  }, []);

  const submit = (event) => {
    event.preventDefault();
    socket.emit("send", message);
    setMessage("");		 
	};

	
  return (
    <div className="container-full">
      <HeaderBar />
      <div className="chat-grid">
        <div className="chat-grid-top">ยินดีต้อนรับ คุณ</div>
        {/* <div className="chat-grid-content2"> */}
        <div className="chat-grid-content-left" id="chatarea">
          <div id="messages">
            {messages.map(({ user, date, text }, index) => (
              <div key={index}>
                <div>
                  {images[index2]}&nbsp;&nbsp;
                  {/* {user.name}&nbsp;&nbsp; */}
                  {user.name}&nbsp;&nbsp;
                  <span className="chat-message indent">{text}</span>
                  <div className="chat-message-bottom">
                    {moment(date).format("h:mm:ss a")}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}

          {/* <div className="chat-grid-content-right">
            <ul id="users">														
              {users.map(({ name, id }) => (								
                <li key={id}>{name}</li>
              ))}							
            </ul>		
          </div>*/}
        </div>

        <div className="chat-grid-bottom">
          <form action="" onSubmit={submit} id="form" className="form-inline">
            <label htmlFor="nickname" className="mr-sm-2 ml-1">
                ชื่อ
              </label>
              <input
                type="text"
                id="nickname"
                required
                className="mr-sm-2  col-sm-2"								
              />
              <input
                type="text"
                className="mr-sm-2 col-sm-8"
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                id="text"
                required
              />
              <button id="submit" type="submit" className="btn btn-primary mr-sm-1 col-sm-1">
                ส่ง
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
