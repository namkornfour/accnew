import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

import "../App.css";

import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, far);

const Main = () => {
  return (
    <div className="grid-fluid">
      <div className="grid-container">
        <div className="grid-scope">
          <div className="service-p">
            <p>
              {/* <FontAwesomeIcon
                icon={["fas", "chart-line"]}
                size="4x"
                color="orange"
              /> */}
              {/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceOne />
              </IconContext.Provider> */}
							<img src="../images/service1.jpg" alt="" className="img-service-lg" />
            </p>
            <p>รับทำบัญชี และยื่นแบบภาษี</p>
          </div>
          <ul>
            <li>
              ให้คำแนะนำการจัดทำเอกสาร
              และการจัดเก็บเอกสารขั้นพื้นฐานในการบันทึกบัญชี
              รวมถึงเอกสารด้านบัญชีอื่นๆ ที่เกี่ยวข้องกับธุรกิจ
            </li>
            <li>วิเคราะห์ข้อมูลในการติดตามผลการดำเนินงาน</li>
            <li>
              รายงานงบการเงินที่ถูกต้อง รวดเร็ว
              เพื่อให้การบริหารผลการดำเนินงานเป็นไปตามเป้าหมายที่กำหนด
              อย่างมีประสิทธิภาพ
            </li>
            <li>
              บริการจัดการด้านภาษีอากร การยื่นภาษีต่างๆ ผ่านระบบออนไลน์
              เพื่อความถูกต้องและตรงต่อเวลา ลดความเสี่ยงในข้อผิดพลาดเรื่องกฎหมาย
              และกฏระเบียบต่างๆ
            </li>
          </ul>
          <Link to="/service1">
            <span className="link-button">อ่านต่อ...</span>
          </Link>
        </div>

        <div className="grid-scope">
          <div className="service-p">
            <p>
              {/* <FontAwesomeIcon
                icon={["fas", "building"]}
                size="4x"
                color="orange"
              /> */}
              {/* <IconContext.Provider value={{ className: "image-icon-md" }}>							
                <FaDiceTwo />
              </IconContext.Provider> */}
							<img src="../images/service2.jpg" alt="" className="img-service-lg" />
            </p>
            <p>รับจดทะเบียนจัดตั้งบริษัท ห้างฯ และทะเบียนพาณิชย์</p>
            {/* <img className="img-content" src="../images/matheus-negrao.jpg"></img> */}
          </div>
          <ul>
						<li>จดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วนจำกัด จดทะเบียนพาณิชย์</li>            
            <li>ให้คำปรึกษาการจดทะเบียนบริษัท ห้างหุ้นส่วนจำกัด ทะเบียนพาณิชย์</li>
            <li>ขอเลขประจำตัวผู้เสียภาษีอากร และขึ้นทะเบียนประกันสังคม</li>
            <li>
              ดำเนินการคัดเอกสารทั้งจากกรมพัฒนาธุรกิจการค้า
              พร้อมจัดส่งให้ลูกค้าภายหลังจดทะเบียนเสร็จสิ้น
            </li>
            <li>
              ให้ความสะดวกไม่ต้องเดินทาง รับ-ส่ง เอกสารให้ถึงที่ทุกขั้นตอน
            </li>
            <li>รวดเร็ว ทันเวลา และมีคุณภาพ</li>
            <li>บริการเสริมพิเศษ</li>
          </ul>

          <Link to="/service2">
            <span className="link-button">อ่านต่อ...</span>
          </Link>
        </div>

        <div className="grid-scope">
          <div className="service-p">
            <p>
              {/* <FontAwesomeIcon
                icon={["fas", "table"]}
                size="4x"
                color="orange"
              /> */}
              {/* <IconContext.Provider value={{ className: "image-icon-md" }}>							
                <FaDiceThree />								
              </IconContext.Provider> */}
							<img src="../images/service3.jpg" alt="" className="img-service-lg" />
            </p>
            <p>รับตรวจสอบบัญชี</p>
          </div>
          {/* <img className="img-content" src="../images/maya-maceka.jpg"></img> */}
          <div>
            รับตรวจสอบบัญชี โดยผู้สอบบัญชีรับอนุญาต (CPA)
            พร้อมทีมงานที่มีความรู้ ความสามารถ เน้นถึงคุณภาพของงานตรวจสอบ
            และความตรงต่อเวลา
          </div>
          <ul>
            <li>รับตรวจสอบ และแสดงความเห็นต่องบการเงินประจำปี</li>
            <li>ตรวจสอบบัญชีตามมาตราฐานการสอบบัญชีที่รับรองทั่วไป</li>
            <li>ให้บริการแก่ท่านในราคาที่เหมาะสม รวดเร็ว ทันเวลา</li>
          </ul>

          <Link to="/service3">
            <span className="link-button">อ่านต่อ...</span>
          </Link>
        </div>

        <div className="grid-scope">
          <div className="service-p">
            <p>
              {/* <FontAwesomeIcon
                icon={["fas", "tasks"]}
                size="4x"
                color="orange"
              /> */}
              {/* <IconContext.Provider value={{ className: "image-icon-md" }}>							
                <FaDiceFour />
              </IconContext.Provider> */}
							<img src="../images/service4.jpg" alt="" className="img-service-lg" />
            </p>
            <p>ปรึกษาบัญชี และภาษี</p>
          </div>
          {/* <img className="img-content" src="../images/nathan-oakley.jpg"></img> */}
          <ul>
            <li>
              ให้คำปรึกษาการจัดทำบัญชี ตามหลักการควบคุมภายในที่ดี
              เพื่อการบริหารงานที่มีประสิทธิภาพ
            </li>
            <li>
              ให้คำแนะนำวิธีการ เพื่อผลประโยชน์ด้านภาษีอากรที่ถูกต้องตามกฎหมาย
              และประหยัด
            </li>
            <li>
              ให้คำแนะนำระบบบัญชี ผังทางเดินเอกสาร
              รวมถึงเอกสารเบื้องต้นที่จำเป็นในการบันทึกบัญชี
            </li>
          </ul>

          <Link to="/service4">
            <span className="link-button">อ่านต่อ...</span>
          </Link>
        </div>

        <div className="grid-scope">
          <div className="service-p">
            <p>
              {/* <FontAwesomeIcon
                icon={["fas", "calculator"]}
                size="4x"
                color="orange"
              /> */}
              {/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceFive />
              </IconContext.Provider> */}
							<img src="../images/service5.jpg" alt="" className="img-service-lg" />
            </p>
            <p>รับบริการยื่นประกันสังคม</p>
          </div>
          {/* <img className="img-content" src="../images/munbaik-cycling.jpg"></img> */}
          <ul>
            <li>บริการขึ้นทะเบียนนายจ้างตามกฎหมายประกันสังคม</li>
            <li>
              ให้คำปรึกษา เรื่องการนำส่งเงินสมทบกองทุนประกันสังคม
              ที่เหมาะสมกับแต่ละประเภทธุรกิจ
            </li>
            <li>บริการยื่นแบบแสดงรายการเข้าออกของพนักงาน</li>
            <li>
              บริการจัดทำ และนำส่งเงินสมทบประกันสังคมรายเดือน
              และกองทุนเงินทดแทนที่กระทรวงแรงงาน และสวัสดิการสังคม
            </li>
          </ul>

          <Link to="/service5">
            <span className="link-button">อ่านต่อ...</span>
          </Link>
        </div>

        <div className="grid-scope">
          <div className="service-p">
            <p>             
              {/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceSix />
              </IconContext.Provider> */}
							<img src="../images/acctax.jpg" alt="" className="acctax-logo zoom" />
            </p>
            <p>บริการเสริมพิเศษ</p>
          </div>
          {/* <img className="img-content" src="../images/magnet-me.jpg"></img> */}
          <div>
						<ul>
							<li>บริษัทฯ มีบริการเสริมพิเศษต่างๆ ให้กับลูกค้า รับสิทธิพิเศษ ส่วนลด และอื่นๆ</li>
							<li><span style={{color: 'orange'}}>ฟรี</span> โปรแกรม AccTax</li>
						</ul>
          </div>
					<br />
          <Link to="/service6">
            <span className="link-button">อ่านต่อ...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
