import React from 'react'
/*import { IconContext } from "react-icons";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
	FaDiceFive,
	FaDiceSix
} from "react-icons/fa";*/

import HeaderBar from './HeaderBar';
// import Footer from './Footer';
import CopyRight2 from './CopyRight2';

import { Link } from 'react-router-dom';

/*import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, far);*/

function Servicegroup() {
	// window.location = "#top";
	//service-group-full
	return (
		<div className="container-full">
			<HeaderBar/>			
			<div className="service-group">
					<div className="service-group-item">
						{/* <Link to="/service1?state=1">	 */}
						<Link to="/service1">	
						<p>						
							{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceOne />
              </IconContext.Provider> */}
							<img src="../images/service1.jpg" alt="" className="img-service-md" />
							</p>
						<p>รับทำบัญชี ปิดงบการเงิน</p>					
						</Link>
					</div>

					<div className="service-group-item">
						<Link to="/service2">
							<p>
								{/* <FontAwesomeIcon icon={['fas','building']} size="4x" color="orange"/> */}
								{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceTwo />
              </IconContext.Provider> */}
							<img src="../images/service2.jpg" alt="" className="img-service-md" />
								</p>
						<p>รับจดทะเบียนจัดตั้งบริษัท ห้างฯ และทะเบียนพาณิชย์</p>
						</Link>		
					</div>

					<div className="service-group-item">
						<Link to="/service3">
						<p>
							{/* <FontAwesomeIcon icon={['fas','table']} size="4x" color="orange"/> */}
							{/* <IconContext.Provider value={{ className: "image-icon-md" }}>							
                <FaDiceThree />
              </IconContext.Provider> */}
							<img src="../images/service3.jpg" alt="" className="img-service-md" />
							</p>
						<p>รับตรวจสอบบัญชี</p>
						</Link>				
					</div>

					<div className="service-group-item">
						<Link to="/service4">
						<p>
							{/* <FontAwesomeIcon icon={['fas','tasks']} size="4x" color="orange"/> */}
							{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceFour />
              </IconContext.Provider> */}
							<img src="../images/service4.jpg" alt="" className="img-service-md" />
							</p>
						<p>ปรึกษาบัญชี และภาษี</p>
						</Link>			
					</div>

					<div className="service-group-item">		
						<Link to = "/service5">
						<p>
							{/* <FontAwesomeIcon icon={['fas','calculator']} size="4x" color="orange"/> */}
							{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceFive />
              </IconContext.Provider> */}
							<img src="../images/service5.jpg" alt="" className="img-service-md" />
							</p>
						<p>รับบริการยื่นประกันสังคม</p>
						</Link>										
					</div>

					<div className="service-group-item">		
						<Link to = "/service6">
						<p>							
							{/* <IconContext.Provider value={{ className: "image-icon-md" }}>
                <FaDiceSix />
              </IconContext.Provider> */}
							<img src="../images/acctax.jpg" alt="" className="acctax-logo" />
							</p>
						<p>บริการเสริมพิเศษ</p>
						</Link>										
					</div>					
			</div>	
			<CopyRight2/>
		</div>
	)
}

export default Servicegroup
