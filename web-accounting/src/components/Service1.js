import React from "react";
// import { IconContext } from "react-icons";
// import {  FaDiceOne}  from "react-icons/fa";

import HeaderBar from "./HeaderBar";
// import Footer from "./Footer";
import CopyRight2 from "./CopyRight2";

import { Link, useHistory, useLocation, useParams } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignCenter, fas } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faCentercode,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, far);

function Service1() {
  // window.location = "#top";

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  // console.log(query.get('state'));

  return (
    <div className="container-full">
      <HeaderBar />
      <div className="service1-6">
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
          <li>
            จัดทำสมุดรายวันที่เกี่ยวข้อง
            <ul>
              <li>สมุดรายวันทั่วไป</li>
              <li>สมุดรายวันซื้อ</li>
              <li>สมุดรายวันขาย</li>
              <li>สมุดรายวันรับเงิน</li>
              <li>สมุดรายวันจ่ายเงิน</li>
            </ul>
          </li>
          <li>จัดทำรายละเอียด ประกอบงบการเงิน</li>
          <li>ตรวจสอบความถูกต้องของงานด้านบัญชี และภาษี</li>
          <li>ปิดบัญชีสิ้นปี จัดทำรายงานทางการเงิน</li>
          <li>งบแสดงฐานะการเงิน</li>
          <li>งบกำไรขาดทุน</li>
          <li>งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น</li>
          <li>หมายเหตุประกอบงบการเงิน</li>
        </ul>
        <hr />
        <br />
        <p>ด้านการยื่นแบบภาษี</p>
        <p>ประจำเดือน</p>
        <ul>
          <li>จัดทำและยื่นภาษีเงินได้พนักงานภาษีหัก ณ ที่จ่าย <span style={{color: 'orange'}}>(แบบยื่นภาษี ภงด.1)</span></li>
          <li>จัดทำ และยื่นภาษีเงินได้บุคคลธรรมดาภาษีหัก ณ ที่จ่าย <span style={{color: 'orange'}}>(แบบยื่นภาษี ภงด.3)</span></li>
          <li>จัดทำและยื่นภาษีเงินได้นิติบุคคลภาษีหัก ณ ที่จ่าย <span style={{color: 'orange'}}>(แบบยื่นภาษี ภงด.53)</span></li>
          <li>จัดทำและยื่นภาษีมูลค่าเพิ่ม - VAT <span style={{color: 'orange'}}>(ภพ.30)</span></li>
          <li>จัดทำและยื่นภาษีธุรกิจเฉพาะ - <span style={{color: 'orange'}}>(ภธ.40)</span></li>
          <li>ตรวจสอบรายงานภาษีซื้อ และรายงานภาษีขายประจำเดือน ให้คำแนะนำลูกค้า จัดทำรายงานภาษีซื้อ และรายงานภาษีขาย เพื่อเป็นการสอบยืนยันรายการระหว่างสำนักงาน และลูกค้าว่ารายการครบถ้วน ถูกต้อง ตรงกัน</li>
        </ul>
        <p>ประจำปี</p>
        <ul>
          <li>
            จัดทำและยื่นภาษีเงินได้นิติบุคคลกลางปี
            <span style={{color: 'orange'}}> (ภงด.51)</span> และภาษีเงินได้นิติบุคคลสิ้นปี <span style={{color: 'orange'}}>(ภงด.50)</span>
          </li>
          <li>
            จัดทำและยื่นภาษีเงินได้บุคคธรรมดากลางปี <span style={{color: 'orange'}}>(ภงด.94) </span>
            และภาษีเงินได้บุคคลธรรมดาสิ้นปี <span style={{color: 'orange'}}> (ภงด.90, 91)</span>
          </li>
          <li>จัดทำและยื่นแบบนำส่งงบการเงินต่อกระทรวงพาณิชย์ <span style={{color: 'orange'}}>(สบช.3)</span></li>
          <li>จัดทำและยื่นภาษีหัก ณ ที่จ่ายพนักงานประจำปี <span style={{color: 'orange'}}>(ภงด.1ก)</span></li>
          <li>ขึ้นทะเบียนเป็นผู้ทำบัญชีให้แก่ธุรกิจของท่าน</li>
          <li>
            ทำการปิดบัญชีเพื่อจัดทำงบแสดงฐานะทางการเงิน งบแสดงผลการดำเนินงาน
            เมื่อสิ้นงวดบัญชีพร้อมทั้งนำส่งงบการเงินให้ทันตามเวลาที่กฎหมายกำหนดไว้
          </li>
          <li>
            จัดหาผู้สอบบัญชีรับอนุญาตที่มีคุณภาพ
            เพื่อตรวจสอบให้ตรงตามมาตรฐานการสอบบัญชีทั่วไป
          </li>
        </ul>
        <hr />
        <br />
        <p>บุคคลธรรมดา</p>
        <ul>
          <li>
            จัดทำ และยื่นแบบภาษีเงินได้บุคคลธรรมดา กลางปี <span style={{color: 'orange'}}>(แบบยื่นภาษี ภงด.94)</span>
          </li>
          <li>
            จัดทำ และยื่นแบบภาษีเงินได้บุคคลธรรมดา สิ้นปี <span style={{color: 'orange'}}>(แบบยื่นภาษี ภงด.90)</span>
          </li>
        </ul>
        <hr />
        <br />

        <div className="table-fix-head">
					<p>รายละเอียดของงานแต่ละแบบ</p>
        <table className="table table-hover table-font table-responsive-sm table-bordered">				
          <thead>
            <tr>
              <th style={{ width: "0.5%" }} className="text-center">
                ลำดับ
              </th>
              <th style={{ width: "59.5%" }} className="text-center">รายละเอียดงาน</th>
              <th style={{ width: "10%"}} className="text-center bg-success">
                P1
              </th>
              <th style={{ width: "10%" }} className="text-center bg-secondary">
                P2
              </th>
              <th style={{ width: "10%"}} className="text-center bg-primary">
                P3
              </th>
              <th style={{ width: "10%"}} className="text-center bg-info">
                P4
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="headerColor pl-2">
                ตรวจสอบและจัดเตรียมเอกสารประกอบการลงบัญชี
              </td>
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
              <td className="text-center">2</td>
              <td className="headerColor pl-2">
                ลงบันทึกบัญชีตามเอกสาร หลักฐานการบัญชี และปิดบัญชีเป็นรายเดือน
              </td>
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
              <td className="text-center">3</td>
              <td className="headerColor pl-2">
                จัดทำรายงานภาษี พร้อมทั้งนำส่งแบบภาษีต่อกรมสรรพากร
              </td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
            </tr>

            <tr>
              <td></td>
              <td className="pl-2">ภาษีเงินได้หัก ณ ที่จ่าย</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
              <td className="bg-primary"></td>
              <td className="bg-info"></td>
            </tr>

            <tr>
              <td></td>
              <td className="pl-2">ภงด 1 - สำหรับพนักงาน</td>
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
              <td></td>
              <td className="pl-2">ภงด 3 - สำหรับบุคคลธรรมดา</td>
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
              <td></td>
              <td className="pl-2">ภงด 53 - สำหรับนิติบุคคล</td>
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
              <td></td>
              <td className="pl-2">ภงด 54 - สำหรับการจ่ายเงินไปต่างประเทศ</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
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
              <td></td>
              <td className="pl-2">ภาษีมูลค่าเพิ่ม</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
              <td className="bg-primary"></td>
              <td className="bg-info"></td>
            </tr>

            <tr>
              <td></td>
              <td className="pl-2">ภพ 30 - ภาษีมูลค่าเพิ่มประจำเดือน</td>
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
              <td></td>
              <td className="pl-2">ภพ 36 - สำหรับการจ่ายเงินไปต่างประเทศ</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
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
              <td className="text-center">4</td>
              <td className="headerColor pl-2">จัดทำทะเบียนทรัพย์สิน</td>
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
              <td className="text-center">5</td>
              <td className="headerColor pl-2">
                จัดทำสมุดรายวันขั้นต้นทุกเล่มที่เกี่ยวข้องกับกิจการ
              </td>
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
              <td className="text-center">6</td>
              <td className="headerColor pl-2">จัดทำบัญชีแยกประเภททุกประเภทบัญชี</td>
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
              <td className="text-center">7</td>
              <td className="headerColor pl-2">ดูแลระบบเงินเดือนของพนักงาน</td>
              <td className="text-center bg-danger"></td>
              <td className="text-center bg-danger"></td>
              <td className="text-center bg-danger"></td>
              <td className="text-center bg-danger"></td>
            </tr>

            <tr>
              <td className="text-center"></td>
              <td className="pl-2">
                คำนวณเงินเดือนพร้อมภาษีเงินได้บุคคลธรรมดาหัก ณ
                ที่จ่ายและประกันสังคม
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
              <td className="text-center"></td>
              <td className="pl-2">
                จัดทำใบแจ้งเงินเดือนสรุป เงินได้
                เงินหักสำหรับพนักงานแต่ละคนประจำเดือน (Payroll Slip)
              </td>
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
              <td className="text-center"></td>
              <td className="pl-2">
                จัดทำหนังสือรับรองสรุป เงินได้
                เงินหักสำหรับพนักงานแต่ละคนประจำปี (50 ทวิ)
              </td>
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
              <td className="text-center">8</td>
              <td className="headerColor pl-2">
                จัดทำรายงานภาษี
                พร้อมทั้งนำส่งแบบภาษีเงินได้บุคคลธรรมดาต่อกรมสรรพากร
              </td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
            </tr>

            <tr>
              <td className="text-center pl-2"></td>
              <td className="pl-2">ภงด 90, 91 - ภาษีเงินได้บุคคลธรรมดาประจำปี</td>
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
              <td className="text-center pl-2"></td>
              <td className="pl-2">ภงด 94 - ภาษีเงินได้บุคคลธรรมดากลางปี</td>
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
              <td className="text-center">9</td>
              <td className="headerColor pl-2">
                จัดทำ และเตรียมแบบ พร้อมนำส่งสำนักงานประกันสังคม
              </td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
            </tr>

            <tr>
              <td className="text-center"></td>
              <td className="pl-2">สปส 1-10 - แบบประกันสังคมประจำเดือน</td>
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
              <td className="text-center"></td>
              <td className="pl-2">สปส 1-03, 1-03/1 - แบบแจ้งพนักงานเข้างานใหม</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
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
              <td className="text-center"></td>
              <td className="pl-2">สปส 6-09 - แบบแจ้งพนักงานลาออก</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
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
              <td className="text-center"></td>
              <td className="pl-2">สปส 1-01 - แบบขึ้นทะเบียนผู้ประกันตน</td>
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
              <td className="text-center"></td>
              <td className="pl-2">กท. 26 ก - แบบประเมินเงินสมทบกองทุนเงินทดแทนประจำปี</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
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
              <td className="text-center"></td>
              <td className="pl-2">กท. 20 ก - แบบแสดงเงินค่าจ้างประจำปี</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
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
              <td className="text-center">10</td>
              <td className="headerColor pl-2">ให้คำปรึกษาและวางแผนด้านภาษีอากร</td>
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
              <td className="text-center">11</td>
              <td className="headerColor pl-2">
                บริการปิดบัญชี นำส่งงบการเงิน และภาษีประจำปี
              </td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
              <td className="bg-danger"></td>
            </tr>

            <tr>
              <td className="text-center"></td>
              <td className="pl-2">ปิดบัญชีและนำส่งงบการเงินประจำปี</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
              <td className="bg-primary"></td>
              <td className="bg-info"></td>
            </tr>

            <tr>
              <td className="text-center"></td>
              <td className="pl-2">สบช 3 - แบบนำส่งงบการเงิน</td>
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
              <td className="text-center"></td>
              <td className="pl-2">บอจ 5 - บัญชีรายชื่อผู้ถือหุ้น</td>
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
              <td className="text-center"></td>
              <td className="pl-2">ยื่นแบบภาษีประจำปี</td>
              <td className="bg-success"></td>
              <td className="bg-secondary"></td>
              <td className="bg-primary"></td>
              <td className="bg-info"></td>
            </tr>
            <tr>
              <td className="text-center"></td>
              <td className="pl-2">ภงด -50 - ภาษีเงินได้นิติบุคคลประจำปี</td>
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
              <td className="text-center"></td>
              <td className="pl-2">ภงด 51 - ภาษีเงินได้นิติบุคคลครึ่งปี</td>
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
              <td className="text-center"></td>
              <td className="pl-2">ภงด 1 ก - สรุปภาษีเงินได้หัก ณ ที่จ่ายประจำปี</td>
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
          </tbody>
        </table>
				</div>

				<br />
        <span style={{ color: "red" }}>
          <Link to="/files/accounting.zip" target="_blank" download>
            Download คู่มือการจัดทำบัญชีเบื้องต้น
          </Link>
        </span>
        
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
        <span className="previous">
          <Link to="/servicegroup">ย้อนกลับ ดูบริการอื่น</Link>
        </span>
      </div>
      <CopyRight2 />
    </div>
  );
}

export default Service1;
