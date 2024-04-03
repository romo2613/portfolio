import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet: {
      src: string;
      width: number;
      height: number;
  }[];
};

type Slides = Photo[];

interface GalleryProps {
  slides: Slides;
}

export default function Gallery({slides}: GalleryProps ) {

  const [index, setIndex] = useState(-1);
  
  return (
    <>
      <div className="w-full md:w-1/3 mt-5 ">
        <PhotoAlbum
            layout="rows"
            photos={slides}
            targetRowHeight={10}
            onClick={({ index: current }) => setIndex(current)}
          />
      </div>
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
    )
}