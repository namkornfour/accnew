import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
// import localIpUrl from "local-ip-url";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parse } from "ipaddr.js";

library.add(fas, fab, far);

const Acctax = () => {
  const [count, setCount] = useState(0);
	const [ip, setIp] = useState(0);
	
	//const apiUrl = process.env.NODE_ENV === 'production' ? 'https://example.com' : process.env.REACT_APP_DEV_API_URL;
  
	const fetchData = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/controller/counter/count")
			//.get('http://localhost:5000/controller/counter/count')
      .then((response) => {
				let iCount = 0;

				if(!isNaN(response.data[0].total))
				{
					iCount = Number(response.data[0].total);
				}
				else
				{
					iCount = 0;					
				}
				setCount(iCount);
      })
      .catch((err) => setCount(0));
  };

  useEffect(() => {
		fetchData();
		//checkIp();
	}, [count]);

	const addData = () => {
		axios.post(process.env.REACT_APP_API_URL + '/controller/counter/add')
		.then((resp) => console.log('response: ',resp))
		.catch((err) => console.log(err));
	}

	/*const checkIp = () => {
		axios.get(process.env.REACT_APP_API_URL + '/controller/counter/ip')
		.then((res) => {
			setIp(res.data);				
		})
		.catch(err => console.log(err));
	}*/

  return (
    <div className="accnew">
      <div className="accnew-item-header">
        <img src="../images/acctax.jpg" alt="" className="acctax-logo zoom" />
        &nbsp;&nbsp;โปรแกรมบัญชี AccTax
      </div>

      <div>บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด คิดค้น และพัฒนา</div>

      <div>
        โปรแกรมบัญชี ขนาดเล็ก สำหรับ บริษัท ห้าง หรือ บุคคล ให้ใช้งานได้ ฟรี
			</div>
			
      <div className="download">
        <div className="download-item">
          <br />
          	<button className="btn btn-lg bg-white" onClick={() => setCount(count+1)}>
            <FontAwesomeIcon icon={["fas", "download"]} color="blue" />
            &nbsp;
            <span className="download-button">
              <Link to="/files/AccTax 1.1.zip" target="_blank" download onClick={() => ip == 0 ? addData() : setCount(count+1)}>
                Download โปรแกรม&nbsp;
                <span className="badge badge-warning" style={{fontSize: '1.1rem', color: 'green'}}>{count}</span>
              </Link>
            </span>
          </button>
        </div>

        <div className="download-item">
          <br />
          <button className="btn btn-lg bg-white">
            <FontAwesomeIcon
              icon={["fas", "file-pdf"]}
              size="lg"
              color="orange"
            />
            &nbsp;
            <span className="download-button">
              <Link
                to="/files/ACCTAX-คู่มือโปรแกรม.pdf"
                target="_blank"
                download
              >
                Download คู่มือโปรแกรม
              </Link>
            </span>
          </button>
        </div>
      </div>

      <div>
        <br />
        มีปัญหาเกี่ยวกับการใช้โปรแกรม สามารถสอบถามได้ที่ Line Facebook Twitter
      </div>

      <div className="accnew-line-group">
        <div>
          <FontAwesomeIcon icon={["fab", "line"]} color="green" size="lg" />
          &nbsp;&nbsp;@204cczdz &nbsp;&nbsp;
          <a href="http://line.me/ti/p/@204cczdz">
            <span style={{ color: "dodgerblue" }}>เพิ่มเพื่อน</span>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.facebook.com/BJ RT/">
            <FontAwesomeIcon
              icon={["fab", "facebook-square"]}
              size="lg"
              color="dodgerblue"
            />
          </a>
        </div>

        <div>
          <FontAwesomeIcon icon={["fab", "line"]} color="green" size="lg" />
          &nbsp;&nbsp;@249ybgdf&nbsp;&nbsp;
          <a href="http://line.me/ti/p/@249ybgdf">
            <span style={{ color: "dodgerblue" }}>เพิ่มเพื่อน</span>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://twitter.com/BJRT54900792">
            <FontAwesomeIcon
              icon={["fab", "twitter-square"]}
              size="lg"
              color="dodgerblue"
            />
          </a>
       </div>
       
      </div>
    </div>
  );
};

export default Acctax;
