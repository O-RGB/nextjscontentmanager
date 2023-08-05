import { Form, Input, InputProps } from "antd";
import { FormItemProps, Rule } from "antd/es/form";
import React from "react";
const { Password } = Input;
interface InputCommonProps {
  // placeholder?: string;
  // label?: string;
  // name?: string;
  // className?: string;
  formClassName?: string;
  // addonBefore?: React.ReactNode;
  // rules?: Rule[] | undefined;
  passwordMode?: boolean;
  FormItemProps?: FormItemProps;
  InputProps?: InputProps;
}

const InputCommon: React.FC<InputCommonProps> = ({
  // placeholder,
  // label,
  // name,
  // className,
  // addonBefore,
  formClassName,
  passwordMode,
  FormItemProps,
  InputProps,
  // rules,
  // ...props
}) => {
  let PasswordProps = passwordMode ? Password : Input;

  return (
    <>
      <Form.Item {...FormItemProps} className={formClassName}>
        <PasswordProps size="large" {...InputProps} style={{ width: "100%" }} />
      </Form.Item>
    </>
  );
};

export default InputCommon;
