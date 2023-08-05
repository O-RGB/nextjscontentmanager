import { Form, FormInstance, Popover } from "antd";
import menu from "antd/es/menu";
import React, { useEffect, useState } from "react";
import { StopOutlined } from "@ant-design/icons";
interface FixColorCommonProps {
  disabled?: boolean;
  color?: string;
  onClickColor?: (color: string) => void;
  name?: string;
  form?: FormInstance<any>;
}

const FixColorCommon: React.FC<FixColorCommonProps> = ({
  disabled,
  color,
  onClickColor,
  name,
  form,
}) => {
  const [openColor, setOpenColor] = useState(false);
  const [onCheckColor, setOnCkeckCOlor] = useState<boolean>(false);

  const hide = () => {
    setOpenColor(false);
  };

  const handleOpenColorChange = (newOpen: boolean) => {
    if (!disabled) {
      setOpenColor(newOpen);
    }
  };

  const ThemeColor = () => {
    let colorList: string[] = [
      "#f1fdfa",
      "#fef3f3",
      "#ffecd5",
      "#ecf6ff",
      "#ffe4e6",
      "#f5e8ff",
      "#e0e6ff",
      "#d0fafe",
      "#d1fae5",
      "#f5f5f4",
      "#fef3c7",
      "#ecfdcb",
    ];
    return (
      <div className="grid grid-cols-5 gap-1">
        {colorList.map((data, index) => {
          return (
            <React.Fragment key={`color-temp-${index}`}>
              <div
                onClick={() => {
                  onClickColor?.(data);
                  hide();
                }}
                style={{
                  backgroundColor: data,
                }}
                className={`w-6 h-6 rounded-full border ${
                  color == data ? "border-violet-500" : "border-gray-200"
                }
                 hover:border-violet-500 duration-200 cursor-pointer`}
              ></div>
            </React.Fragment>
          );
        })}
        <div
          onClick={() => {
            onClickColor?.("#ffffff");
            hide();
          }}
          className={`w-6 h-6 rounded-full  hover:border-violet-500 duration-200 border-2 cursor-pointer ${
            color == "#ffffff" ? "border-violet-500" : "border-gray-200"
          } flex justify-center items-center overflow-hidden`}
        >
          <StopOutlined className="text-2xl text-red-300" />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (color) {
      if (color == "#ffffff") {
        setOnCkeckCOlor(false);
      } else {
        setOnCkeckCOlor(true);
      }
    } else {
      setOnCkeckCOlor(false);
    }
  }, [color]);
  return (
    <>
      <Popover
        content={ThemeColor}
        title="THEME COLOR"
        trigger="click"
        open={openColor}
        onOpenChange={handleOpenColorChange}
      >
        <div
          className={`${"bg-gray-300 "}  duration-200 p-[0.05rem] rounded-[0.4rem] px-[0.09rem] ${
            disabled
              ? "opacity-60 cursor-not-allowed"
              : "cursor-pointer hover:bg-indigo-500 "
          } `}
        >
          <div className="w-[1.95rem] h-[1.95rem] rounded-md border-4 border-white shadow-sm bg-white">
            <div
              style={{
                backgroundColor: color,
              }}
              className={`w-[1.45rem] h-[1.45rem] rounded-[0.2rem]`}
            ></div>
          </div>
        </div>
      </Popover>
      <Form.Item
        className="m-0 p-0 h-0 opacity-0 w-0"
        name={name}
        required
        rules={[
          {
            required: color ? false : true,
            message: "color is required",
          },
        ]}
      ></Form.Item>
    </>
  );
};

export default FixColorCommon;
