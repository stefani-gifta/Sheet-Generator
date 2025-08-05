import React  from "react";
import "./MakeTemplatePage.css";
import Page4 from "../Page 4/DownloadTemplatePage";


const MakeTemplatePage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Template sedang diproses, mohon tunggu...</h1>

        <div className="loading-bar">
            <img src="assets/img-loading.png" alt="" srcset="" />
            <div class="gray-overlay"></div>

        </div>
      </div>
    </div>
  );
}

export default MakeTemplatePage;