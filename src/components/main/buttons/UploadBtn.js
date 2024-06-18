import React, { useState, useEffect } from 'react';
import { UploadIcon } from "../../../assets/main";
import Modal from '../../header/Modal';
import "./UploadBtn.css";

function UploadBtn({ accessToken, setHasGradCard }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsUploading(true);
  };

  useEffect(() => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log(selectedFile);
      
      fetch('http://47.128.3.240:8080/api/v1/grade_card', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHasGradCard(true);
      })
      .catch((error) => {
        console.error(error);
      });
      setIsOpen(true);
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

      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen} 
        modalContent={"upload"} />
    </div>
  );
}

export default UploadBtn;