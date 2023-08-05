// import { Skeleton } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface OImageProps {
  url: string;
  onLoad?: (e: any) => void;
  imageClassName?: string;
  imageClip?: string;
  relativeClass?: string;
  objectType?: string;
  widthLoading?: string;
  load?: boolean;
}

const OImage: React.FC<OImageProps> = ({
  url,
  onLoad,
  imageClassName,
  relativeClass,
  imageClip = "img-clip-outer",
  load,
  objectType,
  widthLoading = "80vh",
}) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const onLoadCallBack = (e: any) => {
    setIsImageReady(true);
    onLoad?.(e);
  };
  return (
    <>
      <div
        className={`relative overflow-hidden w-full h-full ${relativeClass}`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full z-30 ${imageClip} aspect-[4/3] ${
            isImageReady ? "opacity-0 delay-100" : ""
          } transition-all duration-300`}
        >
          <Skeleton
            baseColor="#000000"
            className="w-full h-full opacity-10 scale-110"
          ></Skeleton>
        </div>

        <div className={`${imageClassName} z-10`}>
          {!load ? (
            <Image
              loader={() => url}
              onLoad={onLoadCallBack}
              src={url}
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full h-full ${
                objectType ? objectType : "object-cover"
              } opacity-0 ${
                isImageReady ? "opacity-100 " : ""
              } delay-100 duration-200 `}
              alt={""}
            />
          ) : (
            <div className={`opacity-100 w-full h-full`}></div>
          )}
        </div>
      </div>
    </>
  );
};

export default OImage;
