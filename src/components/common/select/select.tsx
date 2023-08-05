import { Form, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/es/form";
import React from "react";

interface SelectCommonProps {
  label: string;
  name?: string;
  option?: any[];
  defaultValue?: string;
  rules?: Rule[] | undefined;
  required?: boolean;
  disable?: boolean;
  size?: SizeType;
  onChange?: (value: string, real: any) => void;
}

const SelectCommon: React.FC<SelectCommonProps> = ({
  label,
  name,
  option,
  defaultValue,
  rules,
  required,
  disable,
  size = "large",
  onChange,
}) => {
  return (
    <>
      <Form.Item label={label} name={name} required={required} rules={rules}>
        <Select
          onChange={onChange}
          disabled={disable}
          size={size}
          defaultValue={defaultValue}
          style={{ width: "100%" }}
          allowClear
          options={option}
        />
      </Form.Item>
    </>
  );
};

export default SelectCommon;
