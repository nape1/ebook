import { useEffect, useState } from "react"


function useBase64File(url: string, type: string) {
  const [file, setFile] = useState<File | null>(null)
  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type })
          setFile(file)
        })
    }
  }, [url])

  return file
}

export default useBase64File
