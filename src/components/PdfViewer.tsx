import React, { useState } from 'react';

const PdfViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please select a PDF file.');
    }
  };

  const openPdfInNewTab = () => {
    if (pdfFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const pdfData = reader.result;
        const blob = new Blob([pdfData], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      };
      reader.readAsArrayBuffer(pdfFile);
    } else {
      alert('No PDF file selected.');
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={openPdfInNewTab}>Open PDF</button>
    </div>
  );
};

export default PdfViewer;
