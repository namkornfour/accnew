import React from "react";
//import { IconContext } from "react-icons";
//import {  FaDiceThree}  from "react-icons/fa";

import HeaderBar from "./HeaderBar";
// import Footer from './Footer';
import CopyRight2 from "./CopyRight2";

import { Link, useLocation } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faAlignCenter, fas } from "@fortawesome/free-solid-svg-icons";
// import { fab, faCentercode } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// library.add(fas, fab, far);

function Service3() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();

  return (
    <div className="container-full" id="top">
      <HeaderBar />
      <div className="service1-6">
        <p>
          {/* <FontAwesomeIcon icon={["fas", "table"]} size="4x" color="orange" /> */}
					{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceThree />
              </IconContext.Provider> */}
							<img src="../images/service3.jpg" alt="" className="img-service-lg" />
        </p>
        <p>รับตรวจสอบบัญชี</p>
        <div>
          รับตรวจสอบบัญชี โดยผู้สอบบัญชีรับอนุญาต (CPA) พร้อมทีมงานที่มีความรู้
          ความสามารถ เน้นถึงคุณภาพของงานตรวจสอบ และความตรงต่อเวลา
        </div>
        <ul>
          <li>รับตรวจสอบ และแสดงความเห็นต่องบการเงินประจำปี</li>
          <li>ตรวจสอบบัญชีตามมาตราฐานการสอบบัญชีที่รับรองทั่วไป</li>
          <li>ทดสอบหลักฐานประกอบรายการ</li>
					<li>ประเมินความเหมาะสมของหลักการบัญชี และประเมินการทางบัญชี</li>
					<li>ประเมินความเหมาะสมของการเปิดเผยข้อมูล และการนำเสนองบการเงินโดยรวม</li>
					<li>ตรวจสอบ และรับรองบัญชีห้างหุ้นส่วน จดทะเบียนโดยผู้สอบบัญชีภาษีอากร โดยปฎิบัติงานตรวจสอบตามหลักการ วิธีการ และเงื่อนไขที่อธิบดีกรมสรรพากรกำหนด (TA)</li>
					<li>เสนอข้อสังเกตต่อผู้บริหาร เพื่อให้ทราบถึงจุดอ่อนของการควบคุมภายในทางบัญชีที่สำคัญ ข้อผิดพลาดทางบัญชี พร้อมข้อเสนอแนะ ทั้งนี้เพื่อให้งบการเงินแสดงข้อมูลที่ถูกต้องเหมาะสม ส่งผลให้การบริหารงานของกิจการ มีประสิทธิภาพมากยิ่งขึ้น</li>
        </ul>

        <br />
        {/* <span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="/">ย้อนกลับ</Link></span> */}
        {/* {query.get("state") == 1 ? (
          <span
            className="previous"
          >
            <Link to="/servicegroup">ย้อนกลับ</Link>
          </span>
        ) : (
          <span
            className="previous"
          >
            <Link to="/">ย้อนกลับ</Link>
          </span>
        )} */}
				<span className="previous">
          <Link to="/servicegroup">ย้อนกลับ ดูบริการอื่น</Link>
        </span>
      </div>			
      <CopyRight2 />
    </div>
  );
}

export default Service3;
