import React, { useState } from "react";
import ChildrenContentTitle from "./children-content/detail/title";
import ChlidrenContentImage from "./children-content/image";
import { FormInstance } from "antd";
const formType: ContectFormId = "E4-TitleDetail-TitleDetail";

interface ContentTitleLeftImageTitleProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  initText1?: string;
  initDetail1?: NodeSelectOutput[];
  initText2?: string;
  initDetail2?: NodeSelectOutput[];

  edit?: boolean;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ContentTitleLeftTitleRight: React.FC<ContentTitleLeftImageTitleProps> = ({
  imageName,
  index,
  onSet,
  initDetail1,
  initText1,
  initDetail2,
  initText2,
  form,
  disabled,
}) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-7 h-full justify-center items-start">
        <div className="w-full">
          <ChildrenContentTitle
            disabled={disabled}
            form={form}
            initDetail={initDetail1}
            initText={initText1}
            indexActive={0}
            onSet={onSet}
            imageName={imageName + formType + "left" + index}
          ></ChildrenContentTitle>
        </div>
        <div className="w-full">
          <ChildrenContentTitle
            disabled={disabled}
            form={form}
            initDetail={initDetail2}
            initText={initText2}
            indexActive={1}
            onSet={onSet}
            imageName={imageName + formType + "right" + index}
          ></ChildrenContentTitle>
        </div>
      </div>
    </>
  );
};

export default ContentTitleLeftTitleRight;
