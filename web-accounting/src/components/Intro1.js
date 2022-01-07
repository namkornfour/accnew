import React from 'react'
import { IconContext } from "react-icons";
import { FaCreativeCommonsShare} from "react-icons/fa";

import HeaderBar from "./HeaderBar";
import CopyRight2 from "./CopyRight2";

import { Link } from "react-router-dom";

function Intro1() {
	return (
		<div className="container-full" id="top">
			<HeaderBar />
			<div className="intro-container-details">
				<div>ประสบการณ์บัญชี ภาษี</div>
				<div>
						<p>
							{/* <img src="../images/estee-janssens.jpg" className="img-detail"></img> */}
							<IconContext.Provider value={{ className: "image-icon-md" }}>							
            <FaCreativeCommonsShare />
          </IconContext.Provider>
								&nbsp;ประสบการณ์ การให้บริการด้านวิชาชีพ มีความเชี่ยวชาญในการแก้ปัญหา และให้คำแนะนำ วิธีปฎิบัติที่ถูกต้อง และประสบความสำเร็จ</p>
				</div>
        <span className="previous-intro"
            // style={{
            //   display: "block",
            //   float: "right",
            //   fontSize: "16px",
            //   letterSpacing: "1px",
            // }}
          >						
            <Link to="/">ย้อนกลับ</Link>
          </span>
			</div>			
				<CopyRight2 />
		</div>
	)
}

export default Intro1
