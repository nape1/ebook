import { EbookReader } from "@components/EbookReader"
import FileUploader from "@components/FileUploader"
import HelloWorld from "@components/HelloWorld"
import useBase64File from "./hooks/useBase64File"
import { useState } from "react"
import PdfViewer from "@components/PdfViewer/PdfViewer"

import Sample from "@components/PdfViewer/Sample"

function App() {
  const [file, setFile] = useState("")
  const data = useBase64File(file, "application/epub+zip")
  if (data) {
    console.log(data)
  }

  return (
    <>
      <h1>📚 Ebook Readers ...</h1>
      <HelloWorld />
      <Sample/>
      <PdfViewer file="https://pdftron.s3.amazonaws.com/downloads/pl/Chart_.Vector.pdf" />
      {/* <FileUploader fileSelectHandler={setFile} /> */}
      {/* <EbookReader /> */}
      {/* <PdfViewer /> */}
    </>
  )
}

export default App
