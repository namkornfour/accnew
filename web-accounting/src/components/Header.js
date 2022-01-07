import React from 'react';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab, far);

function Header() {
	return (
		<div className="headerFull">
			<header>				
				<div className="headerFull-text">					
					<div>บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด</div>
						<div>
						  รับทำบัญชี ภาษี งบการเงิน ตรวจสอบบัญชี							
						</div>						
						<div>
							โดยทีมงานที่มีคุณภาพ ความเชี่ยวชาญ และประสบการณ์สูง
							ยินดีให้คำปรึกษาฟรี
						</div>
						
				</div>
			</header>
    </div>
	);
}

export default Header;