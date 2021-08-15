import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './Sample.less';

import samplePDF from './sample.pdf';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
    <div className="Example__container__document">
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
