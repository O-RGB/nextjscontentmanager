import React, { useEffect, useState } from "react";
import { FormInstance } from "antd";
import HtmlEditorCommon from "../../../components/common/html-editor";

interface ChlidrenContentHtmlProps {
  imageName: string;
  indexActive: number;
  iniHtml?: string;
  onSet: (output: onSetArgument) => void;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ChlidrenContentHtml: React.FC<ChlidrenContentHtmlProps> = ({
  onSet,
  indexActive,
  iniHtml,
  imageName,
  form,
  disabled,
}) => {
  const [Input, setInpu] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (iniHtml) {
      setTimeout(() => {
        setInpu(iniHtml);
        form.setFieldValue(imageName + "h1", iniHtml);
      }, 0);
    }
  }, [iniHtml]);
  return (
    <>
      <HtmlEditorCommon
        form={form}
        name={imageName + "h1"}
        initialValue={Input}
        rules={[{ required: true, message: "Missing Title" }]}
        onChange={(e) => {
          onSet({
            indexActive: 0,
            image: undefined,
            text: {
              detail: [
                {
                  description: e,
                  index: 0,
                  formId: "T1-Text",
                  isRemove: false,
                },
              ],
              style: { bold: false, italic: false },
              title: e,
            },
          });
        }}
      ></HtmlEditorCommon>
    </>
  );
};

export default ChlidrenContentHtml;
