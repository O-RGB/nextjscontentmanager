import { FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BulletNodeInput from "./bulletInput";
import SelectCommon from "../../../../../../components/common/select/select";
const formType: NodeFormId = "T2-Bullet";
interface BulletNodeProps {
  name: string;
  disabled?: boolean;
  index: number;
  onSet?: (description: NodeSelectOutput) => void;
  form?: FormInstance<any>;
  initValue?: NodeTempBullet[];
}

const BulletNode: React.FC<BulletNodeProps> = ({
  name,
  index,
  onSet,
  form,
  initValue,
  disabled = false,
}) => {
  const [indexBullet, setIndexBullet] = useState<NodeTempBullet[]>();
  const [bulletType, setBulletType] = useState<string>("1");
  const [bullet, setBullet] = useState<NodeTempBullet[] | undefined>([
    {
      header: "number",
      isRemoveBullet: false,
      title: "",
      indexHeader: 1,
    },
  ]);

  const onChange = (element: NodeTempBullet[]) => {
    let removeDelete: NodeTempBullet[] = [];
    element?.map((x) => {
      if (x.isRemoveBullet == false) {
        removeDelete.push(x);
      }
    });
    onSet?.({
      formId: formType,
      index: index,
      bullet: removeDelete,
    });
  };

  const onAddBullet = () => {
    let clone = bullet;
    if (clone) {
      setTimeout(() => {
        if (clone) {
          clone?.push({
            header: "number",
            isRemoveBullet: false,
            title: "",
            indexHeader: clone.length + 1,
          });
          setBullet(clone);
          onChange(clone);
          let getNotRemove = clone?.filter((x) => x.isRemoveBullet == false);
          setIndexBullet(getNotRemove);
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (initValue) {
      setBullet(initValue);
      onChange(initValue);
      setIndexBullet(initValue);
    }
  }, [initValue]);

  return (
    <>
      <label htmlFor="">Bullet</label>
      <div className="py-6 px-2">
        <div className="flex items-end justify-end w-full  ">
          <div className="w-full lg:w-1/3">
            <SelectCommon
              onChange={(e) => {
                setBulletType(e);
              }}
              size="middle"
              defaultValue="1"
              label={"Type"}
              option={[
                { label: "1, 2, 3...", value: "1" },
                { label: "•, •, •...", value: "2" },
              ]}
            ></SelectCommon>
          </div>
        </div>

        <div className="  flex flex-col justify-center items-center w-full gap-3">
          {bullet?.map((data, index) => {
            return (
              <BulletNodeInput
                form={form}
                init={data}
                onChange={(title, detail) => {
                  let clone = bullet;
                  clone[index].title = title;
                  clone[index].detail = detail == "" ? undefined : detail;
                  setBullet(clone);
                  onChange(clone);
                }}
                bulletType={bulletType}
                bullet={indexBullet}
                index={data.indexHeader}
                onRemove={() => {
                  let clone = bullet;
                  setBullet(undefined);
                  if (clone) {
                    clone[index].isRemoveBullet = true;
                    let getNotRemove = clone?.filter(
                      (x) => x.isRemoveBullet == false
                    );
                    setIndexBullet(getNotRemove);
                    setBullet(clone);
                    onChange(clone);
                  }
                }}
                key={name + "-" + index}
                name={name + "-" + index + "-"}
              ></BulletNodeInput>
            );
          })}

          <div className="flex flex-col justify-center items-center w-full  ">
            <div
              onClick={onAddBullet}
              className=" w-full h-10  rounded-md border-gray-500  border-2 border-dashed hover:opacity-60 duration-300 cursor-pointer"
            >
              <div className="flex gap-2 items-center justify-center h-full">
                <div>
                  <AiOutlinePlus className="text-2xl text-gray-500"></AiOutlinePlus>
                </div>
                <div>Add bullet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletNode;
