import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";
import { FaCreativeCommonsShare,FaMoneyCheckAlt,FaRegShareSquare,FaCommentDollar } from "react-icons/fa";

import { Link } from "react-router-dom";

const Introserv = () => {
  return (
    <div className="intro-container">
      <div className="intro-item">
        <div>ประสบการณ์บัญชี ภาษี</div>
        <Link to = "/intro1"><img className="img-content" src="../images/accounting2.jpg"></img></Link>
        {/* <Link to="/intro1">
          <IconContext.Provider value={{ className: "image-icon-lg" }}>
            <FaCreativeCommonsShare />
          </IconContext.Provider>
        </Link> */}
      </div>

      <div className="intro-item">
        <div>ผู้เชี่ยวชาญบัญชี และภาษี</div>
        <div>
          <Link to = "/intro2"><img className="img-content" src="../images/tax.jpg"></img></Link>
					{/* <Link to="/intro2">
          <IconContext.Provider value={{ className: "image-icon-lg" }}>
            <FaMoneyCheckAlt />
          </IconContext.Provider>
        </Link> */}
        </div>
      </div>

      <div className="intro-item">
        <div>รวดเร็ว และมีประสิทธิภาพ</div>
        <div>
          <Link to = "/intro3"><img className="img-content" src="../images/fast.jpg"></img></Link>
					{/* <Link to="/intro3">
          <IconContext.Provider value={{ className: "image-icon-lg" }}>
            <FaRegShareSquare />
          </IconContext.Provider>
        </Link> */}
        </div>
      </div>

      <div className="intro-item">
        <div>ค่าบริการที่เหมาะสม คุ้มค่า</div>
        <div>
          <Link to = "/intro4"><img className="img-content" src="../images/saving.jpg"></img></Link>
					{/* <Link to="/intro4">
          <IconContext.Provider value={{ className: "image-icon-lg" }}>
            <FaCommentDollar />
          </IconContext.Provider>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Introserv;
