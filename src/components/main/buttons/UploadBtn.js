import React, { useState } from 'react';
import { UploadIcon } from "../../../assets/main";
import "./UploadBtn.css";

function UploadBtn() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsUploading(true);
  };

  return (
    <div>
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        id="pdf-upload-input" 
        disabled={isUploading}
      />
      <button 
        id="upload-btn" 
        onClick={() => document.getElementById('pdf-upload-input').click()}
        disabled={isUploading}
      >
        <div id="upload-btn-contents">
          <UploadIcon id="upload-btn-icon" />
          <div id="upload-btn-title">참고용 성적표 업로드</div>
        </div>
      </button>
    </div>
  );
}

export default UploadBtn;