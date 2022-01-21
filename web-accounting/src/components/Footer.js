import React from "react";
import "../App.css";

// import {longdo, map, LongdoMap} from '../../src/LongdoMap';
import Mapacc from "./Mapacc";
import Googlemap from "./Googlemap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab, faWindows } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab, far);
//footer-container
const Footer = () => {
	const showInMapClicked = () => {
		// window.open("https://maps.google.com?q=13.792046,100.617899");
		window.open("https://maps.google.com?q=บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด");
	}

  return (
    <div className="footer-full">
      <div className="footer-item1">
        <p>
          <h5>ติดต่อเรา</h5>
        </p>
        <p>
          <span className="footer-item1-header">บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด</span> <br />
          313 ซอยลาดพร้าว87 (จันทราสุข) ถนนลาดพร้าว <br />
          แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กทม. 10310 <br />
          โทรศัพท์ 02-9313100-2 <br />
          โทรสาร  02-9313103-4 <br />
          Email: accsystemthai2002@gmail.com <br />
        </p>

        <p>
          <a href="http://line.me/ti/p/~accscan">
            <FontAwesomeIcon icon={["fab", "line"]} size="2x" color="white" /><span className="accs-line">&nbsp;@accscan</span>
          </a>
        </p>
      </div>      

      <div className="footer-item3">
        <p>
          <h5>แผนที่</h5>
        </p>
        <div className="footer-map" id="map" onClick={showInMapClicked}>
					<img src="../images/accs-map.png" alt="บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
