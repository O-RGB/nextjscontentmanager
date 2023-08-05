import React from "react";
import ChildrenContentTitle from "./children-content/detail/title";
import ChlidrenContentImage from "./children-content/image";

const formType: ContectFormId = "E7-ImageDetail";

interface ContentImageOnlyProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  iniImage?: string;
  iniAlt?: string;
  edit?: boolean;
  form?: any;
  disabled?: boolean;
}

const ContentImageOnly: React.FC<ContentImageOnlyProps> = ({
  imageName,
  index,
  onSet,
  iniImage,
  iniAlt,
  edit,
  form,
  disabled,
}) => {
  return (
    <div className="flex flex-row gap-7 h-full justify-center items-center">
      {/* {edit ? (
        <> */}
      <ChlidrenContentImage
        iniAlt={iniAlt}
        disabled={disabled}
        form={form}
        iniImage={iniImage}
        indexActive={0}
        onSet={onSet}
        imageName={imageName + formType + "left" + index}
      ></ChlidrenContentImage>
      {/* </>
      ) : (
        <>
          <div className="bg-gray-300  w-56 md:w-full h-40 md:h-96 flex rounded-lg  overflow-hidden "></div>
          <div className="bg-gray-300  w-56 md:w-full h-40 md:h-96 flex rounded-lg  overflow-hidden "></div>
        </>
      )} */}
    </div>
  );
};

export default ContentImageOnly;
