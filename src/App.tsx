import { EbookReader } from "@components/EbookReader"
import FileUploader from "@components/FileUploader"
import HelloWorld from "@components/HelloWorld"
import useBase64File from "./hooks/useBase64File"
import { useState } from "react"
import PdfViewer from "@components/PdfViewer"

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
      <FileUploader fileSelectHandler={setFile} />
      <EbookReader />
      <PdfViewer/>
    </>
  )
}

export default App
