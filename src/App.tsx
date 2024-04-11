import FileUploader from "@components/FileUploader"
import PDF from "@components/PdfViewer/PDF"

function App() {
  return (
    <>
      <h1>📚 Ebook Readers</h1>
      <div>
        <FileUploader />
        <PDF />
      </div>
    </>
  )
}

export default App
