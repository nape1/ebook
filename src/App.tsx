import FileSelector from "@components/FileSelector/FileSelector"
import PDF from "@components/PdfViewer/PDF"
import { useState } from "react"

function App() {
    const [setselectedFile, setSetselectedFile] = useState<File | null>(null)
  return (
    <>
      <h1>📚 Ebook Readers</h1>
      <div>
        <FileSelector onFileSelect={setSetselectedFile}/>
        <PDF file={setselectedFile}/>
      </div>
    </>
  )
}

export default App
