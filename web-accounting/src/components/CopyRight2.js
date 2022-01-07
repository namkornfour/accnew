import React from 'react';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab, far);

const CopyRight2 = () => {
	return (
		<div className="copyRight2">			
			Copyright&nbsp;<FontAwesomeIcon icon={["far","copyright"]} size="sm"/>&nbsp;2021&nbsp;All Rights Reserved			
		</div>
	);
}

export default CopyRight2;