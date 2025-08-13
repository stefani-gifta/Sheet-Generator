import React from "react";
import "./MakeTemplatePage.css";
import loadingImg from '../../assets/img-loading.png';  

const MakeTemplatePage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Template sedang diproses, mohon tunggu...</h1>
        <div className="loading-bar">
          <img src={loadingImg} alt="Loading" />
          <div className="gray-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default MakeTemplatePage;