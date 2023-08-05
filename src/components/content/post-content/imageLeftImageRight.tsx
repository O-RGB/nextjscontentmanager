import React from "react";
import ChildrenContentTitle from "./children-content/detail/title";
import ChlidrenContentImage from "./children-content/image";

const formType: ContectFormId = "E1-Image-Image";

const ImageLeftImageRight: React.FC<ImageLeftImageRightProps> = ({
  imageName,
  index,
  onSet,
  iniImage1,
  iniImage2,
  iniAlt1,
  iniAlt2,
  edit,
  form,
  disabled,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-7 h-full justify-center items-center">
      {edit ? (
        <>
          <ChlidrenContentImage
            iniAlt={iniAlt1}
            disabled={disabled}
            form={form}
            iniImage={iniImage1}
            indexActive={0}
            onSet={onSet}
            imageName={imageName + formType + "left" + index}
          ></ChlidrenContentImage>
          <ChlidrenContentImage
            iniAlt={iniAlt2}
            disabled={disabled}
            form={form}
            iniImage={iniImage2}
            indexActive={1}
            onSet={onSet}
            imageName={imageName + formType + "right" + index}
          ></ChlidrenContentImage>{" "}
        </>
      ) : (
        <>
          <div className="bg-gray-300  w-56 md:w-full h-40 md:h-96 flex rounded-lg  overflow-hidden "></div>
          <div className="bg-gray-300  w-56 md:w-full h-40 md:h-96 flex rounded-lg  overflow-hidden "></div>
        </>
      )}
    </div>
  );
};

export default ImageLeftImageRight;
