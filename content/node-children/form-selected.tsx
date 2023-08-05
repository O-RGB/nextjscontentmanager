import React, { ReactElement, useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { BiEdit } from "react-icons/bi";
import { FormInstance } from "antd";
import ButtonIconRoundCommon from "../../components/common/button-icon-round";

interface FormSelectedProps {
  Content: (input: CreateContectSelect) => React.ReactNode;
  onChange?: (output: ContentSelect[]) => void;
  image?: ContentImage[];
  text?: ContentText[];
  index: number;
  key?: string;
  className?: string;
  contentState?: ContentSelect[];
  onRemove?: () => void;
  onEdit?: () => void;
  onMoveUp?: () => void;
  form: FormInstance<any>;
  disabled?: boolean;
}

const FormSelected: React.FC<FormSelectedProps> = ({
  Content,
  onChange,
  index,
  image = [],
  text = [],
  contentState = [],
  key,
  className,
  onRemove,
  onMoveUp,
  onEdit,
  form,
  disabled = false,
}) => {
  const [isRemove, setIsRemove] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    // content.props.string = "eijgei";
  }, []);

  if (isRemove) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div key={key} className={className}>
        <div className="relative">
          <div
            className="absolute -right-3 md:-right-3 -top-3 z-40"
            onClick={() => {
              setIsRemove(true);
              onRemove?.();
            }}
          >
            <ButtonIconRoundCommon
              type="button"
              width={"w-8 md:w-10 h-8 md:h-10"}
              bg={"bg-rose-600"}
            >
              <CloseOutlined
                className={"m-auto text-white text-md font-bold"}
              ></CloseOutlined>
            </ButtonIconRoundCommon>
          </div>
          {/* <div
       className="absolute -right-0 md:-right-3 top-9 z-40"
       onClick={() => {
         setIsEdit(!isEdit);
         onRemove?.();
       }}
     >
       <ButtonIconRoundCommon
         type="button"
         width={"w-10 h-10"}
         bg={"bg-orange"}
       >
         <BiEdit className={"m-auto text-white text-md font-bold"}></BiEdit>
       </ButtonIconRoundCommon>
     </div> */}
          {Content?.({
            form: form,
            formName: "content",
            index: index,
            disabled: disabled,

            onSet: ({ indexActive, image, text }) => {
              let cloneObj = contentState;
              if (image) {
                let left: ContentImage | undefined = undefined;
                let right: ContentImage | undefined = undefined;

                if (indexActive == 0) {
                  left = {
                    imageUrl: image.imageUrl,
                  };
                  if (image.imageAlt) {
                    left.imageAlt = image.imageAlt;
                  }
                } else if (indexActive == 1) {
                  right = {
                    imageUrl: image.imageUrl,
                  };
                  if (image.imageAlt) {
                    right.imageAlt = image.imageAlt;
                  }
                }

                let concat: ContentImage[] = [];

                if (left && right) {
                  concat = [left, right];
                } else if (left) {
                  concat = [left, {}];

                  if (cloneObj[index].image) {
                    if (cloneObj[index].image?.length == 2) {
                      if (cloneObj[index].image![1] != undefined) {
                        concat = [left, cloneObj[index].image![1]];
                      }
                    }
                  }
                } else if (right) {
                  concat = [{}, right];

                  if (cloneObj[index].image) {
                    if (cloneObj[index].image?.length == 2) {
                      if (cloneObj[index].image![1] != undefined) {
                        concat = [cloneObj[index].image![0], right];
                      }
                    }
                  }
                }

                cloneObj[index].image = concat;
              }
              if (text) {
                let left: ContentText | undefined = undefined;
                let right: ContentText | undefined = undefined;

                if (indexActive == 0) {
                  left = {
                    ...text,
                  };
                } else if (indexActive == 1) {
                  right = {
                    ...text,
                  };
                }

                let concat: ContentText[] = [];

                if (left && right) {
                  concat = [left, right];
                } else if (left) {
                  concat = [left, {}];

                  if (cloneObj[index].text) {
                    if (cloneObj[index].text?.length == 2) {
                      if (cloneObj[index].text![1] != undefined) {
                        concat = [left, cloneObj[index].text![1]];
                      }
                    }
                  }
                } else if (right) {
                  concat = [{}, right];
                  if (cloneObj[index].text) {
                    if (cloneObj[index].text?.length == 2) {
                      if (cloneObj[index].text![1] != undefined) {
                        concat = [cloneObj[index].text![0], right];
                      }
                    }
                  }
                }

                cloneObj[index].text = concat;
              }
              onChange?.(cloneObj);
            },
            imageInit: image,
            textInit: text,
            editMode: !isEdit,
          })}
        </div>
      </div>
      <div className="flex gap-4 text-3xl justify-center items-center select-none">
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  );
};

export default FormSelected;
