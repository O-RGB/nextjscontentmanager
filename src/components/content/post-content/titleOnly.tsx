import React, { useState } from "react";
import ChildrenContentTitle from "./children-content/detail/title";
import ChlidrenContentImage from "./children-content/image";
import { FormInstance } from "antd";
const formType: ContectFormId = "E4-TitleDetail-TitleDetail";

interface ContentTitleOnlyProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  initText?: string;
  initDetail?: NodeSelectOutput[];
  edit?: boolean;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ContentTitleOnly: React.FC<ContentTitleOnlyProps> = ({
  imageName,
  index,
  onSet,
  edit,
  form,
  initDetail,
  initText,
  disabled,
}) => {
  // const [preview, setPreview] = useState<onSetArgument>();
  return (
    <>
      <div className="flex   h-full justify-center items-center">
        <div className="w-full relative">
          {/* {edit ? ( */}
          <div className={`${edit ? "" : "opacity-0"}`}>
            <ChildrenContentTitle
              disabled={disabled}
              initDetail={initDetail}
              initText={initText}
              form={form}
              indexActive={0}
              onSet={(e) => {
                // setPreview(e);
                onSet?.(e);
              }}
              imageName={imageName + formType + "left" + index}
            ></ChildrenContentTitle>
          </div>
          {/* ) : ( */}
          <div className="absolute top-0">
            {/* <div className="">{preview?.text?.title}</div>
            <div className="">{preview?.text?.detail}</div> */}
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default ContentTitleOnly;
