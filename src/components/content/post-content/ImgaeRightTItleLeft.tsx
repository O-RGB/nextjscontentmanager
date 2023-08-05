import React, { useEffect, useState } from "react";
import ChlidrenContentImage from "./children-content/image";
import ChildrenContentTitle from "./children-content/detail/title";
const formType: ContectFormId = "E3-Image-TitleDetail";

const ImageRightTitleLeft: React.FC<ImageRightTitleLeftProps> = ({
  imageName,
  index,
  onSet,
  iniImage,
  initDetail,
  initText,
  iniAlt,
  edit,
  form,
  disabled,
}) => {
  useEffect(() => {}, [iniImage, initText, initDetail]);
  return (
    <>
      <div className="flex flex-col md:flex-row  gap-7 h-full justify-center items-center">
        <ChlidrenContentImage
          iniAlt={iniAlt}
          disabled={disabled}
          form={form}
          iniImage={iniImage}
          indexActive={0}
          onSet={onSet}
          imageName={imageName + formType + "left" + index}
        ></ChlidrenContentImage>
        <ChildrenContentTitle
          disabled={disabled}
          form={form}
          initDetail={initDetail}
          initText={initText}
          indexActive={1}
          onSet={onSet}
          imageName={imageName + formType + "right" + index}
        ></ChildrenContentTitle>
      </div>
    </>
  );
};

export default ImageRightTitleLeft;
