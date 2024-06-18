import { useEffect, useState } from "react";
import { UploadIcon } from "../../../assets/main";
import './EditBtn.css';

function EditBtn({ accessToken }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  useEffect(() => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log(selectedFile);

      fetch('http://47.128.3.240:8080/api/v1/grade_card', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
    }
    else {
      console.log('파일을 선택해주세요.');
    }
  }, [selectedFile]);

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