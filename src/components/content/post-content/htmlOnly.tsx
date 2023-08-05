import React, { useEffect, useState } from "react";
import ChildrenContentTitle from "./children-content/detail/title";
import ChlidrenContentImage from "./children-content/image";
import { FormInstance } from "antd";
import ChlidrenContentHtml from "./children-content/html";
const formType: ContectFormId = "E6-HtmlDetail";

interface ContentHTMLOnlyProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  initText?: string;
  initDetail?: NodeSelectOutput[];
  edit?: boolean;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ContentHTMLOnly: React.FC<ContentHTMLOnlyProps> = ({
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
      <div className="flex h-full justify-center items-center">
        <div className="w-full relative">
          {/* {edit ? ( */}
          <div className={`${edit ? "" : "opacity-0"}`}>
            <ChlidrenContentHtml
              disabled={disabled}
              iniHtml={
                initDetail
                  ? initDetail.length > 0
                    ? initDetail[0].description
                    : undefined
                  : undefined
              }
              form={form}
              indexActive={0}
              onSet={(e) => {
                // setPreview(e);
                onSet?.(e);
              }}
              imageName={imageName + formType + "left" + index}
            ></ChlidrenContentHtml>
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

export default ContentHTMLOnly;
