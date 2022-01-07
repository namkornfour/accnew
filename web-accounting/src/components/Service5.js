import React from 'react'
//import { IconContext } from "react-icons";
//import {  FaDiceFive}  from "react-icons/fa";
import HeaderBar from './HeaderBar';
//import Footer from './Footer';
import CopyRight2 from './CopyRight2';

import { Link, useLocation } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlignCenter, fas } from '@fortawesome/free-solid-svg-icons';
import { fab, faCentercode } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab, far);

function Service5() {
	const useQuery = () => {
	return new URLSearchParams(useLocation().search);	
}
const query = useQuery();
	return (
		<div className="container-full" id="top">
			<HeaderBar/>
			<div className="service1-6">				
			<p>
				{/* <FontAwesomeIcon icon={['fas','calculator']} size="4x" color="orange"/> */}
				
			{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceFive />
              </IconContext.Provider> */}
							<img src="../images/service5.jpg" alt="" className="img-service-lg" />
							</p>
				<p>รับบริการยื่นประกันสังคม</p>
				<ul>
							<li>บริการจัดทำแจ้งพนักงานเข้า และออก ประกันสังคม</li>
							<li>บริการจัดทำ และยื่นแบบ การนำส่งเงินสมทบประกันสังคมรายเดือน และกองทุนเงินทดแทนที่กระทรวงแรงงาน และสวัสดิการสังคม</li>
							<li>ให้คำปรึกษาด้านประกันสังคมที่เกี่ยวข้องกับกิจการ</li>
							<li>บริการจัดทำแบบคำนวณค่าจ้าง เพื่อประกอกการรายงานค่าจ้างตามแบบ กท.20 ประจำปี และยื่นต่อสำนักงาน</li>
							<li>ให้บริการแจ้งแก้ไข และเปลี่ยนแปลงการเข้า-ออกของพนักงาน</li>			
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

export default Service5
