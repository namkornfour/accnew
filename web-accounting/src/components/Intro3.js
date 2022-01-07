import React from 'react'
import { IconContext } from "react-icons";
import { FaRegShareSquare } from "react-icons/fa";

import HeaderBar from "./HeaderBar";
import CopyRight2 from "./CopyRight2";

import { Link } from "react-router-dom";

function Intro3() {
	return (
		<div className="container-full" id="top">
			<HeaderBar />
			<div className="intro-container-details">
				<div>รวดเร็ว และมีประสิทธิภาพ</div>
				<div>
					<p>
						{/* <img src="../images/maya-maceka.jpg" className="img-detail"></img>					 */}
						<IconContext.Provider value={{ className: "image-icon-md" }}>
            <FaRegShareSquare />
          </IconContext.Provider>
						&nbsp;ให้บริการ และให้ข้อมูลแก่ผู้ประกอบการได้อย่างรวดเร็ว และถูกต้อง ใช้ในการตัดสินใจด้วยความชำนาญในวิชาชีพบัญชี
					</p>						
				</div>				
        <span className="previous-intro">
          <Link to="/">ย้อนกลับ</Link>
        </span>
			</div>
			
				<CopyRight2 />
		</div>
	)
}

export default Intro3
