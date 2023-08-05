import React from "react";
import { Form } from "antd";
import { Rule } from "antd/es/form";
import { LoadingOutlined } from "@ant-design/icons";

type ButtonStyleType =
  | "primary"
  | "outline"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "orange"
  | "m";
type ButtonType = "submit" | "reset" | "button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  btnType?: ButtonStyleType;
  name?: string;
  width?: string;
  label?: string;
  required?: boolean;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactNode;
  rules?: Rule[] | undefined;
  outline?: boolean;
  mClass?: string;
  rounded?: string;
}

const ButtonCommon: React.FC<Props> = ({
  children,
  required,
  loading = false,
  name,
  label,
  onClick,
  btnType = "primary",
  rounded = "rounded-full",
  type,
  icon,
  rules,
  width = "min-w-[70px]  sm:min-w-[180px] ",
  outline = false,
  mClass,
  ...props
}) => {
  type = type ?? "button";
  const defaultClasses = `py-2 px-2 sm:px-5 ${width}
    font-semibold border-solid ${rounded}
    text-sm cursor-pointer  hover:shadow-md  
    hover:opacity-90 disabled:opacity-50 disabled:shadow-none 
    disabled:cursor-not-allowed`;
  let classes = "";

  switch (btnType) {
    case "primary":
      classes = `hover:shadow-primary/40 duration-300 `;

      if (outline) {
        classes += " text-primary border-primary border ";
      } else {
        classes += " text-white bg-primary ";
      }

      break;
    case "secondary":
      classes = `hover:shadow-secondary/40 duration-300 `;

      if (outline) {
        classes += " text-secondary border-secondary border ";
      } else {
        classes += " text-white bg-secondary ";
      }
      break;
    case "outline":
      classes = `hover:shadow-secondary/40 duration-300 `;

      if (outline) {
        classes += " text-secondary border-secondary border ";
      } else {
        classes += " text-white bg-secondary ";
      }
      break;
    case "info":
      classes = `hover:shadow-info/40 duration-300 `;

      if (outline) {
        classes += " text-info border-info border ";
      } else {
        classes += " text-white bg-info ";
      }
      break;
    case "success":
      classes = `hover:shadow-success/40 duration-300 `;

      if (outline) {
        classes += " text-success border-success border ";
      } else {
        classes += " text-white bg-success ";
      }
      break;
    case "danger":
      classes = `hover:shadow-danger/40 duration-300 `;

      if (outline) {
        classes += " text-danger border-danger border ";
      } else {
        classes += " text-white bg-danger ";
      }

      break;
    case "orange":
      classes = `hover:shadow-orange/40 duration-300 `;

      if (outline) {
        classes += " text-orange border-orange border ";
      } else {
        classes += " text-white bg-orange ";
      }

      break;
    case "m":
      classes = mClass ?? "";

      break;
    default:
      classes = "bg-primary border-primary text-white";
      break;
  }

  return (
    <Form.Item
      className="m-0 p-0"
      name={name ? name : ""}
      required={required}
      label={label}
      rules={rules}
    >
      <button
        onClick={onClick}
        {...props}
        className={[
          defaultClasses,
          classes,
          props.className,
          " overflow-hidden transition-all ease-in-out duration-300 ",
        ].join(" ")}
        type={type}
      >
        {children}
      </button>
    </Form.Item>
  );
};

export default ButtonCommon;
