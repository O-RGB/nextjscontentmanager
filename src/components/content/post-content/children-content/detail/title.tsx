import React, { useEffect, useState } from "react";
import { Dropdown, FormInstance, MenuProps } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { items } from "./menu";
import ControlNodeSelected from "./control";
import { NodeSelectIndex } from "./node";
import InputCommon from "../../../../common/input/input";

interface ChildrenContentTitleProps {
  imageName: string;
  indexActive: number;
  initText?: string;
  initDetail?: NodeSelectOutput[];
  onSet: (output: onSetArgument) => void;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ChildrenContentTitle: React.FC<ChildrenContentTitleProps> = ({
  imageName,
  onSet,
  indexActive,
  initText,
  initDetail,
  form,
  disabled,
}) => {
  const [checkInitData, setInitData] = useState<boolean>(false);
  const [Input, setInpu] = useState<string | undefined>(undefined);
  // const [TextArea, setTextArea] = useState<string[] | undefined>([""]);
  const [nodeSelect, setNodeSelect] = useState<ContentNodeTitle[] | undefined>(
    undefined
  );
  const [nodeSelectOutput, setNodeSelectOutput] = useState<NodeSelectOutput[]>(
    []
  );

  const onClick: MenuProps["onClick"] = ({ key }) => {
    let cloneNode = nodeSelect;
    // setNodeSelect(undefined);
    setTimeout(() => {
      if (cloneNode) {
        let index = cloneNode.length;
        let check = NodeSelectIndex(key, index, form);
        if (check) {
          cloneNode?.push(check);
          let cloneOutput = nodeSelectOutput;
          cloneOutput.push({
            formId: check.formId,
            index: index,
            description: undefined,
            imageUrl: undefined,
            bullet: undefined,
            isRemove: false,
          });
          setNodeSelect(cloneNode);
          setNodeSelectOutput(cloneOutput);
          nodeOnChange(cloneNode, cloneOutput);
        }
      }
    }, 10);
  };

  const onChange = (output: onSetArgument) => {
    onSet({
      indexActive: indexActive,
      image: undefined,
      text: {
        detail: output.text?.detail,
        title: output.text?.title,
        style: { bold: false, italic: false },
      },
    });
  };

  const nodeOnChange = (
    checkRemoveIndex: ContentNodeTitle[],
    ouput?: NodeSelectOutput[]
  ) => {
    let tempOutPut: NodeSelectOutput[] = [];
    checkRemoveIndex.map((data, index) => {
      if (ouput && data.isRemove == false) {
        tempOutPut.push(ouput[index]);
      }
    });
    onChange({
      indexActive: indexActive,
      image: undefined,
      text: {
        detail: tempOutPut,
        style: undefined,
        title: Input,
      },
    });
  };

  useEffect(() => {
    if (initText) {
      setTimeout(() => {
        setInpu(initText);
        form.setFieldValue(imageName + `-${indexActive}-` + "e1", initText);
      }, 0);
    } else {
      setInpu("");
      onChange({
        indexActive: 0,
        image: undefined,
        text: {
          detail: nodeSelectOutput,
          style: undefined,
          title: "",
        },
      });
    }
    if (initDetail && !nodeSelect) {
      setTimeout(() => {
        let setNodeTitle: ContentNodeTitle[] = [];
        let setNodeOutput: NodeSelectOutput[] = [];
        initDetail.map((data, index) => {
          let node = NodeSelectIndex(data.formId, index, form, data.isRemove);
          if (node) {
            setNodeTitle.push({
              isRemove: data.isRemove ?? false,
              index: index,
              formId: data.formId,
              contentNode: node.contentNode,
              init: {
                description: data.description,
                bullet: data.bullet,
                imageUrl: data.imageUrl,
                formId: data.formId,
                index: index,
                isRemove: data.isRemove,
              },
            });
            setNodeOutput.push({
              formId: data.formId,
              index: index,
              description: data.description,
              imageUrl: data.imageUrl,
              bullet: data.bullet,
              isRemove: data.isRemove,
            });
          }
        });
        setNodeSelect(setNodeTitle);
        setNodeSelectOutput(setNodeOutput);
        setInitData(true);
      }, 0);
    }
  }, [initText, initDetail]);
  return (
    <>
      <div className="w-full" key={imageName + `-${indexActive}-` + "e1"}>
        <InputCommon
          FormItemProps={{
            name: imageName + `-${indexActive}-` + "e1",
            label: "Title",
            initialValue: Input,
            rules: [{ required: true, message: "Missing Title" }],
          }}
          InputProps={{
            placeholder: "Insert Title",
            disabled: disabled,
            value: Input,
            onChange: (e) => {
              setInpu(e.target.value);
              onChange({
                indexActive: 0,
                image: undefined,
                text: {
                  detail: nodeSelectOutput,
                  style: undefined,
                  title: e.target.value,
                },
              });
            },
          }}
        ></InputCommon>

        <div className="flex flex-col gap-3">
          {nodeSelect?.map((data, index) => {
            return (
              <ControlNodeSelected
                key={`${imageName}-${indexActive}-main-control-node-selected-${index}`}
                name={
                  imageName +
                  data.formId +
                  `-${indexActive}-` +
                  "e0" +
                  "-array-" +
                  `${index}`
                }
                onSet={(e) => {
                  let cloneOnSet = e;
                  cloneOnSet.isRemove = data.isRemove;
                  let cloneOutput = nodeSelectOutput;
                  if (cloneOutput[index] !== undefined) {
                    cloneOutput[index] = cloneOnSet;
                  } else {
                    cloneOutput.push(cloneOnSet);
                    setNodeSelectOutput(cloneOutput);
                  }
                  nodeOnChange(nodeSelect, cloneOutput);
                }}
                remove={data.isRemove}
                contentNode={data.contentNode}
                onRemove={() => {
                  let clone = nodeSelect;
                  clone[index].isRemove = true;
                  let tempOutPut: NodeSelectOutput[] = nodeSelectOutput;
                  tempOutPut[index].isRemove = true;
                  setNodeSelect(clone);
                  setNodeSelectOutput(tempOutPut);
                  nodeOnChange(clone, tempOutPut);
                }}
                init={data.init}
                index={index}
              ></ControlNodeSelected>
            );
          })}
        </div>

        <div className="flex  justify-center items-center pt-7">
          <Dropdown
            menu={{ items: items, onClick }}
            trigger={["click"]}
            placement="top"
          >
            <div className=" w-1/3 h-20  rounded-md border-gray-500  border-2 border-dashed hover:opacity-60 duration-300 cursor-pointer">
              <div className="flex gap-2 items-center justify-center h-full">
                <AiOutlinePlus className="text-2xl text-gray-500"></AiOutlinePlus>
                <div>Add children</div>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default ChildrenContentTitle;
