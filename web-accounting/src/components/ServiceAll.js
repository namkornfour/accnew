import React from 'react';
import '../App.css';

import {HashLink as Link} from 'react-router-hash-link';
//import {LoremIpsum} from 'react-lorem-ipsum';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faAlignCenter, fas } from '@fortawesome/free-solid-svg-icons';
//import { fab, faCentercode } from '@fortawesome/free-brands-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//library.add(fas, fab, far);

// const styleSpan = {
// 	display: 'block',float:'right'
// }

const Services = () => {	
	return (		
				<div className="services">					
					<div id="service-content">
					<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="orange"/>&nbsp;&nbsp;<Link to="services#service-content1">รับทำบัญชี ปิดงบการเงิน</Link></p>
					<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="green"/>&nbsp;&nbsp;<Link to="services#service-content2">รับจดทะเบียนจัดตั้งบริษัท ห้างฯ และทะเบียนพาณิชย์</Link></p>
					<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="maroon"/>&nbsp;&nbsp;<Link to="services#service-content3">รับตรวจสอบบัญชี</Link></p>
					<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="blue"/>&nbsp;&nbsp;<Link to="services#service-content4">ปรึกษาบัญชี และภาษี</Link></p>
					<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="red"/>&nbsp;&nbsp;<Link to="services#service-content5">รับบริการยื่นประกันสังคม</Link></p>												
					<hr/>					
				</div>
				<br/>
					<div id="service-content1">
						<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="orange"/>&nbsp;&nbsp;รับทำบัญชี ปิดงบการเงิน</p>
						{/* <img className="img-content" src="../images/estee-janssens.jpg"></img> */}						
						<ul>
							<li>ให้คำแนะนำการจัดทำเอกสาร และการจัดเก็บเอกสารขั้นพื่นฐานในการบันทึกบัญชี รวมถึงเอกสารด้านบัญชีอื่นๆ ที่เกี่ยวข้องกับธุรกิจ</li>
							<li>ให้คำนแนะนำปรึกษาด้านบัญชี ภาษี และการแก้ไขปัญหาด้านบัญชี ที่เกิดขึ้นกับกิจการ</li>
							<li>วิเคราะห์รายการเอกสารเพื่อประกอบการบันทึกบัญชี และรายงานทางบัญชีต่างๆครบถ้วน ตามกฏหมายบัญชี และกรมสรรพากรกำหนด</li>		
							<li>จัดทำสมุดรายวันที่เกี่ยวข้อง
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
							<li>งบแสดงฐานการเงิน</li>
							<li>งบกำไรขาดทุน</li>
							<li>งบแสดงการเปลี่ยนแปลงส่วนของเจ้าของ</li>
							<li>หมายเหตุประกอบงบการเงิน</li>
						</ul>						
						<span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="services#service-content">กลับขึ้นด้านบน</Link></span>
					</div>					
					<hr/>
					<br/>
					
					<div id="service-content2">
						<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="green"/>&nbsp;&nbsp;รับจดทะเบียนจัดตั้งบริษัท ห้างฯ และทะเบียนพาณิชย์</p>
						{/* <img className="img-content" src="../images/matheus-negrao.jpg"></img> */}						
						<ul>
							<li>จองชื่อบริษัท</li>
							<li>ให้คำปรึกษาการจดทะเบียนบริษัท</li>
							<li>ขอเลขประจำตัวผู้เสียภาษีอากร</li>
							<li>ดำเนินการคัดเอกสารทั้งจากกรมพัฒนาธุรกิจการค้า พร้อมจัดส่งให้ลูกค้าภายหลังจดทะเบียนเสร็จสิ้น</li>
							<li>ให้ความสะดวกไม่ต้องเดินทาง รับ-สง เอกสารให้ถึงที่ทุกขั้นตอน</li>
							<li>รวดเร็ว ทันเวลา และมีคุณภาพ</li>
							<li>บริการเสริมพิเศษ</li>				
						</ul>
						<span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="services#service-content">กลับขึ้นด้านบน</Link></span>
					</div>
					<hr/>										
					<br/>

					<div id="service-content3">
						<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="maroon"/>&nbsp;&nbsp;รับตรวจสอบบัญชี</p>
						<p>รับตรวจสอบบัญชี โดยผู้สอบบัญชีรับอนุญาต (CPA) พร้อมทีมงานที่มีความรู้ ความสามารถ เน้นถึงคุณภาพของงานตรวจสอบ และความตรงต่อเวลา</p>						
						<ul>
							<li>รับตรวจสอบ และแสดงความเห็นต่องบการเงินประจำปี</li>
							<li>ตรวจสอบบัญชีตามมาตราฐานการสอบบัญชีที่รับรองทั่วไป</li>
							<li>ทดสอบหลักฐานประกอบรายการ</li>
							<li>ประเมินความเหมาะสมของหลักการบัญชี และประเมินการทางบัญชี</li>		
							<li>ประเมินความเหมาะสมของการเปิดเผยข้อมูล และการนำเสนองบการเงินโดยรวม</li>		
						</ul>
						<span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="services#service-content">กลับขึ้นด้านบน</Link></span>
					</div>
					<hr/>										
					
					<br/>
					<div id="service-content4">
						<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="blue"/>&nbsp;&nbsp;ปรึกษาบัญชี และภาษี</p>
						{/* <img className="img-content" src="../images/nathan-oakley.jpg"></img> */}						
						<ul>
							<li>ให้คำปรึกษาการจัดทำบัญชี ตามหลักการควบคุมภายในที่ดี เพื่อการบริหารงานที่มีประสิทธิภาพ</li>
							<li>ให้คำแนะนำวิธีการ เพื่อผลประโยชน์ด้านภาษีอากรที่ถูกต้องตามกฎหมาย และประหยัด</li>
							<li>ให้คำแนะนำระบบบัญชี ผังทางเดินเอกสาร รวมถึงเอกสารเบื้องต้นที่จำเป็นในการบันทึกบัญชี</li>	
							<li>วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม ภาษีโรงเรือน ให้ประหยัด และถูกต้อง</li>
							<li>เป็นตัวแทนในการพบเจ้าหน้าที่กรมสรรพากร กรมทะเบียนการค้า กระทรวงแรงงานในกรณีที่มีหนังสือเชิญพบ</li>		
						</ul>
						<span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="services#service-content">กลับขึ้นด้านบน</Link></span>
					</div>
					<hr/>					
					
					<br/>
					<div id="service-content5">
						<p><FontAwesomeIcon icon={['fas','chart-bar']} size="lg" color="red"/>&nbsp;&nbsp;รับบริการยื่นประกันสังคม</p>
						{/* <img className="img-content" src="../images/munbaik-cycling.jpg"></img> */}						
						<ul>
							<li>จัดทำแจ้งพนักงานเข้า และออก ประกันสังคม</li>
							<li>จัดทำ และยื่นแบบ การนำส่งเงินสมทบประกันสังคมรายเดือน และกองทุนเงินทดแทนที่กระทรวงแรงงาน และสวัสดิการสังคม</li>
							<li>ให้คำปรึกษาด้านประกันสังคมที่เกี่ยวข้องกับกิจการ</li>
							<li>แบบคำนวณค่าจ้าง เพื่อประกอกการรายงานค่าจ้างตามแบบ กท.20 ประจำปี และยื่นต่อสำนักงาน</li>				
						</ul>						
						<span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="services#service-content">กลับขึ้นด้านบน</Link></span>
					</div>
					<hr/>
					<br/>
			</div>			
	);
}

export default Services;