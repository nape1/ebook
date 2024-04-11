import { useState } from 'react'
import { ReactReader } from 'react-reader'

export const EbookReader = ({fileUrl}:{fileUrl?: string}) => {
    const [location, setLocation] = useState<string | number>(0)
    const sampleUrl ="https://react-reader.metabits.no/files/alice.epub"
    console.log(fileUrl, 'in Ebookreader');
    
    return (
      <div style={{ height: '100vh' }}>
        <ReactReader
          url={fileUrl ?? sampleUrl}
          location={location}
          locationChanged={(epubcfi: string) => {
            console.log(epubcfi)
            setLocation(epubcfi)
          }}
        />
      </div>
    )
  }