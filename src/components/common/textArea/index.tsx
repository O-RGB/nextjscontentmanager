import React from "react";
import { Form, FormItemProps, Input } from "antd";
import { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;
interface TextAreaCommonProps extends FormItemProps {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  TextAreaProps?: TextAreaProps;
}

const TextAreaCommon: React.FC<TextAreaCommonProps> = ({
  onChange,
  TextAreaProps,
  ...props
}) => {
  return (
    <>
      <Form.Item {...props}>
        <TextArea
          {...TextAreaProps}
          showCount
          maxLength={500}
          style={
            TextAreaProps
              ? TextAreaProps.style
                ? TextAreaProps.style
                : { height: 150, marginBottom: 24 }
              : undefined
          }
          onChange={onChange}
        />
      </Form.Item>
    </>
  );
};

export default TextAreaCommon;
