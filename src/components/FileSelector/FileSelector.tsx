type Props = {
    onFileSelect:(file:File) => void
}

function FileSelector({onFileSelect}: Props) {
//   const [file, setFile] = useState<File | null>(null)
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target
    if (files && files[0]) {
    //   setFile(files[0] || null)
      onFileSelect(files[0])
    }
  }
  return (
    <div className="file_selector">
      <label htmlFor="file">Load from file:</label>{" "}
      <input onChange={onFileChange} type="file" />
    </div>
  )
}

export default FileSelector
