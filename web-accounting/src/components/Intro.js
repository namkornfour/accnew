import React from 'react';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab, far);

const Intro = () => {
	return (
		<div className="intro">							
					บริการประทับใจ รวดเร็ว ทันเวลา ราคาเหมาะสม ยินดีให้คำปรึกษาฟรี
		</div>
	);	
}

export default Intro;