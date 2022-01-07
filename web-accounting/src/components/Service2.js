import React from "react";
import { IconContext } from "react-icons";
import {  FaDiceTwo}  from "react-icons/fa";

import HeaderBar from "./HeaderBar";
import Footer from "./Footer";
import CopyRight2 from "./CopyRight2";

import { Link, useLocation } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignCenter, fas } from "@fortawesome/free-solid-svg-icons";
import { fab, faCentercode } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, far);

function Service2() {
  // window.location = "#top";

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();

  return (
    <div className="container-full">
      <HeaderBar />      
        <div className="service1-6">
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
          <ul>
            <li>จดทะเบียนจัดตั้งบริษัท</li>
            <li>จดทะเบียนจัดตั้งห้างหุ้นส่วนจำกัด</li>
            <li>จดทะเบียนพาณิชย์</li>
            <li>บริการขอเลขประจำตัวผู้เสียภาษี และขึ้นทะเบียนประกันสังคม</li>
            <li>
              ดำเนินการคัดเอกสารทั้งจากกรมพัฒนาธุรกิจการค้า
              พร้อมจัดส่งให้ลูกค้าภายหลังจดทะเบียนเสร็จ
            </li>
            <li>ให้ความสะดวกไม่ต้องเดินทาง รับ-ส่งเอกสารให้ถึงที่ทุกขั้นตอน</li>
            <li>รวดเร็ว ทันเวลา และมีคุณภาพา ราคาเหมาะสม</li>
          </ul>
					<p>จดทะเบียนเปลี่ยนแปลงข้อมูลบริษัทจำกัด และห้างหุ้นส่วนจำกัด</p>
					<ul>						
            <li>จดทะเบียนเปลี่ยนแปลงที่ตั้งสำนักงาน</li>
            <li>จดทะเบียนเพิ่มทุน และลดทุน</li>
            <li>จดทะเบียนแก้ไข และเพิ่มวัตถุประสงค์</li>
            <li>จดทะเบียนเพิ่มสาขา</li>
            <li>จดทะเบียนแก้ไขกรรมการ และอำนาจกรรมการ</li>
            <li>จดทะเบียนเลิกกิจการ และชำระบัญชี</li>
					</ul>
          <br />

					<div className="table-fix-head">
						<p>ขั้นตอนการทำงาน และรายละเอียดงาน</p>
          <table class="table table-hover table-font table-responsive-sm table-bordered">
            <thead>
              <tr>
                <th style={{width: "60%"}} className="text-center">ค่าบริการ</th>
                <th style={{width: "10%"}} className="text-center bg-success">บริการ1</th>
                <th style={{width: "10%"}} className="text-center bg-secondary">บริการ2</th>
                <th style={{width: "10%"}} className="text-center bg-primary">บริการ3</th>
                <th style={{width: "10%"}} className="text-center bg-info">บริการ4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-2">จองชื่อบริษัท</td>
                <td className="text-center bg-success">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">จัดพิมพ์ชุดเอกสารจดทะเบียน</td>
                <td className="text-center bg-success">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">ตราประทับ (ตรวจสอบตราประทับ)</td>
                <td className="bg-success"></td>
                <td className="bg-secondary"></td>
                <td className="bg-primary"></td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">จดทะเบียนบริษัท</td>
                <td className="text-center service-font2 bg-success"><span style={{color: 'white'}}>ลูกค้าจดเอง</span></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">ขอเลขประจำตัวผู้เสียภาษีอากร</td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">จดทะเบียนภาษีมูลค่าเพิ่ม (VAT)</td>
                <td className="bg-success"></td>
                <td className="bg-secondary"></td>
                <td className="text-center service-font2 bg-primary"><span style={{color: 'white'}}>จดออนไลน์</span></td>
                <td className="text-center service-font2 bg-info"><span style={{color: 'white'}}>จดที่กรมสรรพากร</span></td>
              </tr>

              <tr>
                <td className="pl-2">ขอรหัส E-Filling จาก DBD (ในกรณีที่ทำบัญชีกับทางบริษัท)</td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">
                  ขอ Username และ Password กรมสรรพากร
                  (ในกรณีที่ทำบัญชีกับทางบริษัท)
                </td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">คู่มือปฎิบัติเบื้องต้น ภายหลังจากจดทะเบียนแล้ว</td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">
                  รับสิทธิพิเศษส่วนลดค่าทำบัญชี และบริการขอ ภอ.01
                  (ในกรณีที่ทำบัญชีกับทางบริษัท)
                </td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">โปรแกรมบัญชีฟรี (ในกรณีที่ทำบัญชีกับทางบริษัท)</td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">
                  รายงานการประชุมสำหรับเปิดบัญชีธนาคาร
                  (ในกรณีที่ทำบัญชีกับทางบริษัท)
                </td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">
                  คู่มือการจัดทำเอกสารการบันทึกบัญชีเบื้องต้น
                  (ในกรณีที่ทำบัญชีกับทางบริษัท)
                </td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <tr>
                <td className="pl-2">แฟ้มเก็บเอกสารจดทะเบียน</td>
                <td className="bg-success"></td>
                <td className="text-center bg-secondary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-primary">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
                <td className="text-center bg-info">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    size="lg"
                    color="orange"
                  ></FontAwesomeIcon>
                </td>
              </tr>

              <br />
              <br />

              <tr>
                <td className="pl-2">ค่าบริการ</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
              </tr>

              <tr>
                <td className="pl-2">ค่าธรรมเนียม (ทุนจดทะเบียนไม่เกิน 5 ล้าน)</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
              </tr>

              <tr>
                <td className="pl-2">ราคารวมภาษีมูลค่าเพิ่ม</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
                <td className="text-right">บาท</td>
              </tr>
            </tbody>
          </table>
					</div>
                    
          {/* {query.get("state") == 1 ? (
          <span className="previous"            
          >						
            <Link to="/servicegroup">ย้อนกลับ</Link>
          </span>
        ) : (
          <span className="previous"            
          >						
            <Link to="/">ย้อนกลับ</Link>
          </span>
        )} */}							
				<br />
				<span className="previous">
          <Link to="/servicegroup">ย้อนกลับ ดูบริการอื่น</Link>
        </span>
        </div>
      
      <CopyRight2 />
    </div>
  );
}

export default Service2;
