import React from 'react'
import { IconContext } from "react-icons";
import { FaCommentDollar } from "react-icons/fa";

import HeaderBar from "./HeaderBar";
import CopyRight2 from "./CopyRight2";

import { Link } from "react-router-dom";

function Intro4() {
	return (
		<div className="container-full" id="top">
			<HeaderBar />
			<div className="intro-container-details">
				<div>ค่าบริการที่เหมาะสม คุ้มค่า</div>				
				<div>
						<p>
							{/* <img className="img-detail" src="../images/nathan-oakley.jpg"></img>						 */}
							<IconContext.Provider value={{ className: "image-icon-md" }}>
            <FaCommentDollar />
          </IconContext.Provider>
						&nbsp;ค่าบริการ ในราคาที่เหมาะสม คุ้มค่า</p>
				</div>				
        <span className="previous-intro">
          <Link to="/">ย้อนกลับ</Link>
        </span>
			</div>
			
				<CopyRight2 />
		</div>
	)
}

export default Intro4
