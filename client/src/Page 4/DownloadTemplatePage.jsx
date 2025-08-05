import React  from "react";
import "./DownloadTemplatePage.css";
import Page1 from "../Page1";


const DownloadTemplatePage = () => {

    const returnToPage1 = () => {
        window.location.href = "/"; 
    }
    
  return (
    <div>
      <div className="container">
        <h1 className="title">Template berhasil dibuat! <br />Silakan mendownload template dengan menekan tombol “Download” di bawah</h1>

        <div className="proker-details">
            <div className="proker-img">
                <img src="assets/img-loading.png" alt="" srcset="" />
            </div>
            <p>namaproker.xls</p>
        </div>

        <div className="buttons">
            <button className="make-again-button" onClick={returnToPage1}>Buat Lagi</button>
            <button className="download-button">Download</button>
        </div>
      </div>
    </div>
  );
}

export default DownloadTemplatePage;