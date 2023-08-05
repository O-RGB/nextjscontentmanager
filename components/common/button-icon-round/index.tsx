import React from "react";

interface ButtonIconRoundCommonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children?: React.ReactNode;
  bg?: string;
  className?: string;
  width?: string;
}

const ButtonIconRoundCommon: React.FC<ButtonIconRoundCommonProps> = ({
  onClick,
  children,
  className,
  width = "w-5 h-5",
  bg = "bg-danger",
  ...props
}) => {
  return (
    <>
      <button
        style={{
          backgroundColor: bg,
        }}
        {...props}
        className={` 
          rounded-full ${
            props.disabled ? "bg-opacity-60" : "bg-opacity-100"
          }  hover:bg-opacity-60 
          duration-300 cursor-pointer ${width} ${bg} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonIconRoundCommon;
