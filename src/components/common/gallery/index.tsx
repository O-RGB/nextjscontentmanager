import React, { useState } from "react";
import UploadCommon from "../upload/upload";
import OImage from "../../image-optimization /OImage";

interface GalleryUploadProps {
  onClickImage: (imageUrl: string) => void;
}

const GalleryUpload: React.FC<GalleryUploadProps> = ({ onClickImage }) => {
  const [onUpload, setupload] = useState<string[] | undefined>([
    "UPLOAD",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1003",
    "https://picsum.photos/1004/1003",
    "https://picsum.photos/1004/1008",
    "https://picsum.photos/1004/1004",
    "https://picsum.photos/1008/1004",
    "https://picsum.photos/1033/1004",
    "https://picsum.photos/1033/1404",
    "https://picsum.photos/1033/1054",
    "https://picsum.photos/1233/1054",
    "https://picsum.photos/1293/1054",
    "https://picsum.photos/1293/1554",
    "https://picsum.photos/1293/1550",
    "https://picsum.photos/1290/1550",
    "https://picsum.photos/1200/1550",
    "https://picsum.photos/1200/1250",
  ]);

  const onUploadImage = () => {
    if (onUpload) {
      setupload(undefined);
      setTimeout(() => {
        let clone = onUpload;
        clone.push(
          `https://picsum.photos/203/30${
            onUpload ? onUpload.length + onUpload.length : "0"
          }`
        );
        setupload(clone);
      }, 100);
    }
  };

  if (!onUpload) {
    return <></>;
  }

  return (
    <>
      <div className="min-w-56 h-[70vh] grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 overflow-y-auto">
        {onUpload?.map((data,index) => {
          if (data == "UPLOAD") {
            return (
              <div
              key={`upload-image-kry-${index}`}
                className=" h-full aspect-square w-full rounded-md  flex justify-center items-center "
                onClick={onUploadImage}
              >
                <UploadCommon></UploadCommon>
              </div>
            );
          } else {
            return (
              <>
                <div
                  className="rounded-md hover:opacity-80 duration-300 cursor-pointer"
                  onClick={() => {
                    onClickImage?.(data);
                  }}
                >
                  <OImage
                    url={data}
                    imageClip=""
                    imageClassName="h-40 aspect-square w-full h-full"
                  ></OImage>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default GalleryUpload;
