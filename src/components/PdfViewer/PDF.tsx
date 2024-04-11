import { useCallback, useMemo, useState } from "react"
import { useResizeObserver } from "@wojtekmaj/react-hooks"
import { pdfjs, Document, Page } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import React from "react"

// import './Sample.css';

pdfjs.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js"

const resizeObserverOptions = {}

const maxWidth = 800

type PDFFile = string | File | null

const PDF = () => {
  const [file, setFile] = useState<PDFFile>(
    "https://pdftron.s3.amazonaws.com/downloads/pl/Chart_.Vector.pdf"
  )
  const [numPages, setNumPages] = useState<number>()
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>()

  const options = useMemo(
    () => ({
      cMapUrl: "/cmaps/",
      standardFontDataUrl: "/standard_fonts/",
    }),
    []
  )

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target

    if (files && files[0]) {
      setFile(files[0] || null)
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }: unknown): void {
    setNumPages(nextNumPages)
  }

  return (
    <div id="Pdf_viewer">
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document" ref={setContainerRef}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                height={10}
                width={
                  containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
                }
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}
export default React.memo(PDF)
