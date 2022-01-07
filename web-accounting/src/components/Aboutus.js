import React from 'react';
import '../App';

import HeaderBar from './HeaderBar';
import CopyRight2 from './CopyRight2';

const Aboutus = () => {
	return (
		<div className="container-full">
			<HeaderBar/>
			<div className="aboutus">
				<div>
					<span className="aboutus-header">บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด</span> <br />
					เลขทะเบียนนิติบุคคล&nbsp;&nbsp;<span style={{color: 'orange'}}>0105545090036</span> <br />
					เลขประจำตัวผู้เสียภาษีอากร&nbsp;&nbsp;<span style={{color: 'orange'}}>0105545090036</span> <br />
					ทุนจดทะเบียน <span style={{color: 'blue'}}>1,000,000</span> บาท
					<br/>
					<br />
					บริษัทของเราได้รับความเชื่อถือ และไว้วางใจจากลูกค้ามากว่า <span style={{color: 'blue'}}>20</span> ปี บริหารงานโดยผู้มีประสบการณ์ และผู้เชี่ยวชาญด้านบัญชี  และภาษีโดยตรง เราจึงรู้จริง รักษาผลประโยชน์ของลูกค้าได้
					และยังมุ่งเน้นการบริการที่มีคุณภาพ ให้แก่ธุรกิจทุกขนาดในหลากหลายประเภท โดยให้บริการด้านบัญชีและภาษีอากรครบวงจร รวมถึงเป็นที่ปรึกษาปัญหาต่างๆ และยังช่วยท่านแก้ปัญหาจากองค์กรของภาครัฐ
				</div>				
				<br/>				
				<hr/>

				<div>
					<span className="aboutus-header">ที่อยู่</span> <br />
					313 ซอยลาดพร้าว87 (จันทราสุข) ถนนลาดพร้าว <br />
					แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กทม.10310 <br />
					<br />
					<hr/>					
				</div>

				<div>
					<span className="aboutus-header">ที่ติดต่อ</span> <br />
					โทรศัพท์ 02-9313100-2 <br />
					โทรสาร 02-9313103-4 <br />
					Email: accsystemthai2002@gmail.com <br />
				</div>
			</div>			
			<CopyRight2/>
		</div>
	);
}

export default Aboutus;