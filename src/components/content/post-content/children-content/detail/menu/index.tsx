import { MenuProps } from "antd";
import { BsCardText, BsImage, BsListOl } from "react-icons/bs";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Description",
    icon: <BsCardText />,
    disabled: false,
  },
  {
    key: "2",
    label: "Image",
    icon: <BsImage />,
    disabled: false,
  },
  {
    key: "3",
    label: "Bullet",
    icon: <BsListOl />,
    disabled: false,
  },
];
