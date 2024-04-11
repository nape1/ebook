import React, { useEffect, useState } from "react"

const FileUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [base64String, setBase64String] = useState<string | null>(null)
  const [fileURL, setFileURL] = useState<string | null>(null)
  

    useEffect(() => {
        base64String && localStorage.setItem(`${file?.name}-base64`, base64String);
        fileURL && localStorage.setItem(`${file?.name}-blob`, fileURL);
    
      return () => {
        console.log('unmount');
      }
    }, [base64String, fileURL, file])
    


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setFile(file)
      const reader = new FileReader()
      reader.onloadend = async () => {
        if (reader.result) {
          const base64 = reader.result.toString().split(",")[1]

          setFileURL(URL.createObjectURL(file))
          setBase64String(base64)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <input
        type="file"
        accept=".txt, .pdf, .epub"
        onChange={handleFileChange}
      />
      {base64String && (
        <div>
          <h2>Base64 Encoded Content:</h2>
          <textarea
            readOnly
            value={base64String}
            style={{ width: "100%", minHeight: "100px" }}
          />
        </div>
      )}
      {fileURL && (
        <div>
          <h2>fileURL:</h2>
          <textarea
            readOnly
            value={fileURL}
            style={{ width: "100%", minHeight: "100px" }}
          />
          <a href={fileURL} target="_blank" rel="noopener noreferrer">Download File</a>
        </div>
      )}
    </div>
  )
}

export default FileUploader
