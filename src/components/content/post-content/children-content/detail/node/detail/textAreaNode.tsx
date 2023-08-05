import React, { useEffect } from "react";
import { FormInstance } from "antd";
import TextAreaCommon from "../../../../../../common/textArea";
const formType: NodeFormId = "T1-Text";
interface TextAreaNodeProps {
  name: string;
  disabled?: boolean;
  index: number;
  onChange?: (content: string) => void;
  onSet?: (description: NodeSelectOutput) => void;
  form?: FormInstance<any>;
  initValue?: string;
}

const TextAreaNode: React.FC<TextAreaNodeProps> = ({
  name,
  index,
  onChange,
  onSet,
  form,
  initValue,
  disabled = false,
}) => {
  useEffect(() => {
    if (form && initValue) {
      form.setFieldValue(name, initValue);
    }
  }, [initValue, form]);
  return (
    <div key={name + "node" + index} className="pt-6">
      <TextAreaCommon
        onChange={(e) => {
          //   let detailClone = TextArea;
          //   detailClone[index] = e.target.value;
          //   setTextArea(detailClone);
          //   onChange({
          //     indexActive: 0,
          //     image: undefined,
          //     text: {
          //       detail: detailClone,
          //       style: undefined,
          //       title: Input,
          //     },
          //   });
          onChange?.(e.target.value);
          onSet?.({
            description: e.target.value,
            // isRemove: false,
            index: index,
            formId: formType,
          });
        }}
        TextAreaProps={{
          placeholder: "Insert Detail",
          disabled: disabled,
        }}
        label="Detail"
        name={name}
        required
        rules={[{ required: true, message: "Missing Detail" }]}
      ></TextAreaCommon>
    </div>
  );
};

export default TextAreaNode;
