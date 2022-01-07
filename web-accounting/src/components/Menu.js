import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab, far);
const Menu = () => {
	return (		
		<div className="container">				
		<header className="menu">
			<div className="menu-top"><FontAwesomeIcon icon={["fas","phone-square-alt"]} size="lg" style={{color:"white"}}/>&nbsp;&nbsp;&nbsp;โทร. 02-9313100-2&nbsp;&nbsp;&nbsp;
			<FontAwesomeIcon icon={['fab','line']} size="lg" style={{color:"white"}}/>&nbsp;&nbsp;&nbsp;LINE @accounting</div>
			<nav>
				<ul className="ul-menu">					
					<li><Link to="/">หน้าหลัก</Link></li>
					<li className="underbar1"><Link to="/services">บริการ</Link></li>
					<li className="underbar2"><Link to="">ถาม-ตอบ</Link></li>
					<li className="underbar3"><Link to="/aboutus">เกี่ยวกับเรา</Link></li>

					<div className="underbar"></div>
				</ul>
			</nav>
		</header>
		</div>		
	);
}

export default Menu;