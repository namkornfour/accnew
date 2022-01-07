import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import HeaderBar from "./HeaderBar";

function ChatLog() {
  const [user, setUser] = useState("");

  let min = 1;
  let max = 100;
  const guest = "guest" + Math.floor(Math.random() * (max - min) + min);

  const handleInput = (e) => {
    setUser(e.target.value);    
  };

  let textInput = null;
  useEffect(() => {
    textInput.focus();
    textInput.select();

		if(!setUser)
		{
			setUser(guest);
		}		
  },[]);

  return (
    <div className="container-full">
			<HeaderBar/>
      {/* <form action=""> */}
      <div className="chatlog">
        <div className="form-group">
          <label htmlFor="name">พิมพ์ชื่อ เพื่อสอบถามข้อมูล</label>
          <input
            type="text"
            placeholder="พิมพ์ชื่อ"
            id="name"
            className="form-control"
            // value= {guest}
            onChange={handleInput}
            autoComplete="off"
            ref={(text) => {
              textInput = text;
            }}
          />
        </div>

        {/* <Link to={{ pathname: "/chat2", search: "?name=" + user }}>					
          <button className="btn btn-primary form-control form-group">
            ตกลง
          </button>
        </Link> */}

				<Link to={{ pathname: "/chat2", search: "?name=" + (user ? user : guest) }}>
          <button className="btn btn-primary form-control form-group">
            ตกลง
          </button>
        </Link>
				
        <Link to="/">
          <button className="btn btn-danger form-control form-group">
            ยกเลิก
          </button>
        </Link>
      </div>
      {/* </form> */}
    </div>
  );
}

export default ChatLog;
