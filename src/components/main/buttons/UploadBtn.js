import React, { useState, useEffect } from 'react';
import { UploadIcon } from "../../../assets/main";
import "./UploadBtn.css";

function UploadBtn({ accessToken, setHasGradCard }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsUploading(true);
  };

  useEffect(() => {
    if (selectedFile) {
      fetch('http://13.214.147.170:8080/api/v1/grade_card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          gradeCard: selectedFile,
        })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHasGradCard(true);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    else {
      console.log('파일을 선택해주세요.');
    }
  }, [selectedFile]);

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