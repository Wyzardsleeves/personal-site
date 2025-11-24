import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Optional: for annotations
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Optional: for text layer

interface PdfViewerProps {
    pdfUrl: string;
}

interface DocumentLoadSuccess {
    numPages: number;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: DocumentLoadSuccess): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
            Page {pageNumber} of {numPages}
            </p>
            {numPages && (
            <div>
                <button onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}>Previous</button>
                <button onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}>Next</button>
            </div>
            )}
        </div>
    );
}

export default PdfViewer;
