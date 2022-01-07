import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, far);

function HeaderBar() {
	const [count, setCount] = useState(0);
	const [ip, setIp] = useState(0);	

  /*const fetchData = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/counter/count")
      .then((res) => {
				setCount(res.data);				
      })
      .catch((err) => setCount(-1));
  };	

  useEffect(() => {
		fetchData();		
		checkIp();
	}, [count]);

	const addData = () => {			
		axios.post(process.env.REACT_APP_API_URL + '/api/counter/add')
		.then((resp) => console.log('response: ',resp))
		.catch((err) => console.log(err));		
	}

	const checkIp = () => {
		axios.get(process.env.REACT_APP_API_URL + '/api/counter/ip')
		.then((res) => {
			setIp(res.data);				
		})
		.catch(err => console.log(err));
	}*/

  return (
    <div>
      <div className="header-bar">        
        <div className="header-bar-left">
          <img className="logo-com" src="../images/logo.jpg"></img>
        </div>

        <div className="header-bar-right">
          <div className="header-bar-right-top">
            <div>
              <Link to="/files/AccTax 1.1.zip" target="_blank" download>
                <span style={{ color: "white" }}>Download โปรแกรม ฟรี</span>&nbsp;
								{/* <span className="badge badge-warning" style={{fontSize: '1.1rem', color: 'green'}}>{count}</span> */}
              </Link>
            </div>
            <div>
              <FontAwesomeIcon
                icon={["fab", "line"]}
                size="lg"
                style={{ color: "green" }}
              />
              &nbsp;LINE @204cczdz
            </div>
          </div>

          <div className="header-bar-right-bottom">
            <div>
              <Link to="/">หน้าหลัก</Link>
            </div>
            <div>
              <Link to="/servicegroup">บริการ</Link>
            </div>
            <div>							
              <a href="http://line.me/ti/p/~accscan">Add Line</a>
							{/* <Link to="/chatlog">ถาม-ตอบ</Link> */}
							{/* <Link to="/chat">ถาม-ตอบ</Link> */}
            </div>
            <div>
              <Link to="/aboutus">เกี่ยวกับเรา</Link>
							{/* <Link to="/user">เกี่ยวกับเรา</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderBar;
