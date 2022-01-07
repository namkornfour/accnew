import React from 'react';
import '../App.css';

import HeaderBar from './HeaderBar';
import ServiceAll from './ServiceAll';
import CopyRight from './CopyRight';

const Services = () => {
	return (
		<div>
			<HeaderBar/>			
			<ServiceAll/>			
			<CopyRight/>
		</div>
	);
}

export default Services;