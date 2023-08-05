import React, { useEffect, useState } from "react"; 
import { MdRemoveCircleOutline } from "react-icons/md";
import { MinusOutlined } from "@ant-design/icons"; 
import { FormInstance } from "antd";
import ButtonIconRoundCommon from "../../../../../../common/button-icon-round";
import InputCommon from "../../../../../../common/input/input";
import TextAreaCommon from "../../../../../../common/textArea";

interface BulletNodeInputProps {
  name: string;
  key: string;
  onRemove: () => void;
  index: number;
  bullet: NodeTempBullet[] | undefined;
  bulletType: string;
  onChange?: (title: string, detail: string) => void;
  init?: NodeTempBullet;
  form?: FormInstance<any>;
}

const BulletNodeInput: React.FC<BulletNodeInputProps> = ({
  name,
  key,
  onRemove,
  index,
  bulletType,
  bullet,
  onChange,
  init,
  form,
}) => {
  const [isRemove, setIsRemove] = useState<boolean>(false);
  const [numberIndex, setNumberIndex] = useState<number>(0);

  const [title, setTitle] = useState<string>("");
  const [detial, setDetail] = useState<string>("");

  useEffect(() => {
    if (bullet) {
      let getNotRemove = bullet.filter((x) => x.isRemoveBullet == false);
      getNotRemove.map((data, i) => {
        if (data.indexHeader == index) {
          setNumberIndex(i + 1);
          console.log("on set");
        }
      });
    }
    if (init) {
      setTitle(init.title);
      form?.setFieldValue("bullet" + name, init.title);
      setDetail(init.detail ? init.detail : "");
      form?.setFieldValue("bullet-detail-" + name, init.detail);
    }
  }, [bullet]);

  if (isRemove) {
    return <></>;
  }
  return (
    <div
      key={key}
      className="pb-6 w-full px-5 p-4 border border-solid rounded-md"
    >
      <div className="flex gap-2 w-full">
        <div className="  h-20 flex justify-center items-center">
          {bulletType == "1" ? (
            <div className="text-base"> {numberIndex}.</div>
          ) : (
            <div className="text-2xl">•</div>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="">Title</label>
          <InputCommon
            FormItemProps={{
              name: "bullet" + name,

              required: true,
              rules: [
                {
                  required: true,
                  message: "Missing Bullet.",
                },
              ],
            }}
            InputProps={{
              placeholder: "Inset Bullet Title",
              onChange: (e) => {
                setTitle(e.target.value);
                onChange?.(e.target.value, detial);
              },
            }}
          />
          <label htmlFor="">Detail</label>
          <TextAreaCommon
            onChange={(e) => {
              setDetail(e.target.value);
              onChange?.(title, e.target.value);
            }}
            className="mt-1"
            name={"bullet-detail-" + name}
            required
            rules={[
              {
                required: true,
                message: "Missing Bullet children.",
              },
            ]}
            TextAreaProps={{
              autoSize: true,
              size: "large",
              placeholder: "Inset Bullet children",
              style: { height: 10, marginBottom: 0 },
            }}
          />
        </div>
        <div className="">
          <ButtonIconRoundCommon
            onClick={() => {
              setIsRemove(true);
              onRemove?.();
            }}
            type="button"
            width={"w-6 h-6"}
            bg={" bg-orange"}
          >
            <MinusOutlined
              className={"m-auto text-white text-md font-bold"}
            ></MinusOutlined>
          </ButtonIconRoundCommon>
          {/* <ButtonCommon
            onClick={() => {
              setIsRemove(true);
              onRemove?.();
            }}
            width=""
            className="flex justify-center items-center gap-2 px-4"
          >
            <div className="">
              <MdRemoveCircleOutline className="text-2xl"></MdRemoveCircleOutline>
            </div>
          </ButtonCommon> */}
        </div>
      </div>
      {/* <div className="flex w-full justify-center items-center">
        <div
          onClick={() => {}}
          className=" w-1/2 h-10  rounded-md border-gray-500  border-2 border-dashed hover:opacity-60 duration-300 cursor-pointer"
        >
          <div className="flex gap-2 items-center justify-center h-full">
            <div>
              <AiOutlinePlus className="text-1xl text-gray-500"></AiOutlinePlus>
            </div>
            <div>Bullet children</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BulletNodeInput;
