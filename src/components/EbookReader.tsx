import { useRef } from 'react'
import { ReactEpubViewer } from 'react-epub-viewer'

const EbookReader = () => {
  const viewerRef = useRef(null);
//   const epubUrl = url ?? 'https://github.com/IDPF/epub3-samples/releases/download/20230704/accessible_epub_3.epub'

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <ReactEpubViewer 
        url={'../ebboks/sample.epub'}
        ref={viewerRef}
      />
    </div>
  );
}

export default EbookReader