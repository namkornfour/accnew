import React from "react";
import { IconContext } from "react-icons";
import { FaMoneyCheckAlt } from "react-icons/fa";

import HeaderBar from "./HeaderBar";
import CopyRight2 from "./CopyRight2";

import { Link } from "react-router-dom";

function Intro2() {
  return (
    <div className="container-full">
      <HeaderBar />
      <div className="intro-container-details">
        <div>ผู้เชี่ยวชาญบัญชี และบัญชี</div>
        <div className="intro-detials">          
					<div>
					<IconContext.Provider value={{ className: "image-icon-md" }}>
            <FaMoneyCheckAlt />
          </IconContext.Provider>
					</div>

					<div>
						ให้คำปรึกษากับลูกค้าที่มีปัญหาด้านภาษีอากรให้เรื่องยากกลายเป็นเรื่องง่ายๆ เพื่อรักษาผลประโยชน์ของลูกค้าเป็นสำคัญ และยังมุ่งเน้นการบริการที่มีคุณภาพให้แก่ธุรกิจทุกขนาดในหลากหลายทุกประเภทกิจการ
					</div>
					
        </div>				
        <span className="previous-intro">
          <Link to="/">ย้อนกลับ</Link>
        </span>
      </div>

      <CopyRight2 />
    </div>
  );
}

export default Intro2;
