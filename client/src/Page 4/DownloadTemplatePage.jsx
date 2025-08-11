import React from "react";
import "./DownloadTemplatePage.css";
const DownloadTemplatePage = ({ onMakeAgain, programTitle }) => {
  return (
    <div>
      <div className="container">
        <h1 className="title">
          Template berhasil dibuat! <br /> Silakan periksa folder download Anda.
        </h1>

        <div className="proker-details">
          <div className="proker-img">
            <img src="/assets/img-loading.png" alt="File" />
          </div>
          <p>{programTitle || 'template'}.xlsx</p>
        </div>

        <div className="buttons">
          <button className="make-again-button" onClick={onMakeAgain}>
            Buat Lagi
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadTemplatePage;