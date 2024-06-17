import { useState } from "react";
import { UploadIcon } from "../../../assets/main";
import './EditBtn.css';

function EditBtn() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div id="edit-btn-wrapper">
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        id="pdf-upload-input" 
      />
      <button
        id="edit-btn"
        onClick={() => document.getElementById('pdf-upload-input').click()}
      >
        <div id="edit-btn-contents">
          <UploadIcon id="edit-btn-icon" />
          <div id="edit-btn-title">성적표 수정</div>
        </div>
      </button>
    </div>
    
  );
}

export default EditBtn;