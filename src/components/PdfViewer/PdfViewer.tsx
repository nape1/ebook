// src/PdfViewer.tsx
import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

interface PdfViewerProps {
 file: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
 return (
    <div style={{ width: '100%', height: '100%' }}>
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
 );
};

export default PdfViewer;
