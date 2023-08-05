import React, { useState } from "react";
import ChildrenContentTitle from "./children-content/detail/title";
import ChlidrenContentImage from "./children-content/image";
import { FormInstance } from "antd";
const formType: ContectFormId = "E2-TitleDetail-Image";

interface ContentTitleLeftImageRightProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  initText?: string;
  initDetail?: NodeSelectOutput[];
  iniImage?: string;
  iniAlt?: string;
  edit?: boolean;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ContentTitleLeftImageRight: React.FC<ContentTitleLeftImageRightProps> = ({
  imageName,
  onSet,
  index,
  form,
  disabled,
  iniAlt,
  initText,
  initDetail,
  iniImage,
}) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-7 h-full justify-center items-center">
        <ChildrenContentTitle
          initText={initText}
          initDetail={initDetail}
          disabled={disabled}
          form={form}
          indexActive={0}
          onSet={onSet}
          imageName={imageName + formType + "left" + index}
        ></ChildrenContentTitle>
        <ChlidrenContentImage
          iniImage={iniImage}
          iniAlt={iniAlt}
          disabled={disabled}
          form={form}
          indexActive={1}
          onSet={onSet}
          imageName={imageName + formType + "right" + index}
        ></ChlidrenContentImage>
      </div>
    </>
  );
};

export default ContentTitleLeftImageRight;
