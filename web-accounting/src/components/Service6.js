import React from "react";
//import { IconContext } from "react-icons";
//import {FaDiceSix}  from "react-icons/fa";

import HeaderBar from "./HeaderBar";
//import Footer from './Footer';
import CopyRight2 from "./CopyRight2";

import { Link, useLocation } from 'react-router-dom';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faAlignCenter, fas } from '@fortawesome/free-solid-svg-icons';
//import { fab, faCentercode } from '@fortawesome/free-brands-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//library.add(fas, fab, far);

function Service6() {
	const useQuery = () => {
	return new URLSearchParams(useLocation().search);	
}
const query = useQuery();

	return (
		<div className="container-full" id="top">
			<HeaderBar/>			
				<div className="service1-6">
        <p>
          {/* <FontAwesomeIcon icon={["fas", "globe"]} size="4x" color="orange" /> */}
					{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceSix />
              </IconContext.Provider> */}
							<img src="../images/acctax.jpg" alt="" className="acctax-logo zoom" />
        </p>
        <p>บริการเสริมพิเศษ</p>
        <div>
          <ol type="1">
						<li>ฟรีโปรแกรมบัญชี AccTax</li>
						<li>บริการขอ ภ.อ.01 ยื่นแบบชำระภาษีทาง Internet</li>
						<li>จดภาษีมูลค่าเพิ่มทางอินเตอร์เน็ต</li>
						<li>ขอรหัสยื่นงบในระบบ e-filing</li>
						<li>จัดทำรายงานการประชุม สำหรับเปิดบัญชีธนาคาร</li>
						<li>คู่มือข้อควรปฎิบัติเบื้องต้น ภายหลังจากการจดทะเบียนแล้ว</li>
						<li>รับสิทธิพิเศษ จะได้รับส่วนลดค่าทำบัญชีฟรี 2 เดือน เมื่อรับบริการจดทะเบียนจัดตั้งบริษัท</li>						
					</ol>
        </div>
        <br />
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

export default Service6