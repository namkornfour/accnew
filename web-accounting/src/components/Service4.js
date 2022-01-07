import React from 'react'
import { IconContext } from "react-icons";
import {  FaDiceFour}  from "react-icons/fa";

import HeaderBar from './HeaderBar';
import Footer from './Footer';
import CopyRight2 from './CopyRight2';

import { Link, useLocation } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlignCenter, fas } from '@fortawesome/free-solid-svg-icons';
import { fab, faCentercode } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab, far);

function Service4() {
	const useQuery = () => {
	return new URLSearchParams(useLocation().search);
}

const query = useQuery();
	return (
		<div className="container-full" id="top">
			<HeaderBar/>			
			<div className="service1-6">									
			<p>
				{/* <FontAwesomeIcon icon={['fas','tasks']} size="4x" color="orange"/> */}
				
			{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceFour />
              </IconContext.Provider> */}
							<img src="../images/service4.jpg" alt="" className="img-service-lg" />
							</p>
				<p>ปรึกษาบัญชี และภาษี</p>
				<ul>
							<li>ให้คำปรึกษาการจัดทำบัญชี ตามหลักการควบคุมภายในที่ดี เพื่อการบริหารงานที่มีประสิทธิภาพ</li>
							<li>ให้คำแนะนำวิธีการ เพื่อผลประโยชน์ด้านภาษีอากรที่ถูกต้องตามกฎหมาย และประหยัด</li>
							<li>ให้คำแนะนำระบบบัญชี ผังทางเดินเอกสาร รวมถึงเอกสารเบื้องต้นที่จำเป็นในการบันทึกบัญชี</li>	
							<li>วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม ภาษีโรงเรือน ให้ประหยัด และถูกต้อง</li>
							<li>เป็นตัวแทนในการพบเจ้าหน้าที่กรมสรรพากร กรมทะเบียนการค้า กระทรวงแรงงานในกรณีที่มีหนังสือเชิญพบ</li>		
						</ul>
						
						<br/>
						{/* <span style={{display: 'block',float:'right', fontSize: '16px', letterSpacing: '1px'}}><Link to="/">ย้อนกลับ</Link></span> */}
						{
	// query.get('state') == 1 ? <span className="previous"><Link to="/servicegroup">ย้อนกลับ</Link></span> : <span className="previous"><Link to="/">ย้อนกลับ</Link></span>
	<span className="previous">
          <Link to="/servicegroup">ย้อนกลับ ดูบริการอื่น</Link>
        </span>
}
			</div>			
			<CopyRight2/>
		</div>
	)
}

export default Service4
