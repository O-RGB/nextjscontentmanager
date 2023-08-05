import { Drawer, FormInstance } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import DrawerContent from "./drawer-content/drawerContent";
import FormSelected from "./node-children/form-selected";
import { E1, E2, E3, E4, E5, E6, E7 } from "./drawer-content/drawerTemplate";
import { useEffect, useState } from "react";
import React from "react";

interface ImageLeftImageRightProps {
  imageName: string;
  index: number;
  onSet: (indexActive: number, image?: string, text?: ContentText) => void;
  iniImage1?: string;
  iniImage2?: string;
}

interface ContentListProps {
  form?: FormInstance<any>;
  onChange?: (output: ContectForSend[]) => void;
  setForm?: ContectForSend[];
  disabled?: boolean;
}

const ContentList: React.FC<ContentListProps> = ({
  form,
  onChange,
  setForm,
  disabled,
}) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ContentSelect[] | undefined>([]);
  const [contentForSend, setContentForSend] = useState<
    ContectForSend[] | undefined
  >([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createObjForSend = (temp: ContentSelect[]) => {
    console.log("real data = ", temp);
    let contentForSend: ContectForSend[] = [];
    temp?.map((x, index) => {
      if (x.image && x.text && x.isRemove == false) {
        let checkText = x.text;

        let checkTextTemp: ContentText[] = [];
        checkText.map((contextTitle) => {
          //0 - 1
          let nodeTemp: NodeSelectOutput[] = [];
          contextTitle.detail?.map((node) => {
            if (node.isRemove == false) {
              nodeTemp.push(node);
            }
          });
          checkTextTemp.push({
            title: contextTitle.title,
            detail: nodeTemp,
          });
        });

        contentForSend.push({
          formId: x.formId,
          index: index,
          image: x.image,
          text: checkTextTemp,
          prosition: x.prosition,
        });
        console.log(contentForSend);
      }
    });
    setContentForSend(contentForSend);
    onChange?.(contentForSend);

    let conventToString = JSON.stringify(contentForSend);
    setTimeout(() => {
      form?.setFieldValue("content", conventToString);
    }, 100);
  };

  useEffect(() => {
    let contentTemplate = [E1(), E2(), E3(), E4(), E5(), E6(), E7()];
    let reverseToContentSelect: ContentSelect[] = [];
    if (setForm) {
      setForm.map((data, index) => {
        let node = undefined;
        if (data.formId == "E1-Image-Image") {
          node = contentTemplate[0].contentNode;
        } else if (data.formId == "E2-TitleDetail-Image") {
          node = contentTemplate[1].contentNode;
        } else if (data.formId == "E3-Image-TitleDetail") {
          node = contentTemplate[2].contentNode;
        } else if (data.formId == "E4-TitleDetail-TitleDetail") {
          node = contentTemplate[3].contentNode;
        } else if (data.formId == "E5-TitleDetail") {
          node = contentTemplate[4].contentNode;
        } else if (data.formId == "E6-HtmlDetail") {
          node = contentTemplate[5].contentNode;
        } else if (data.formId == "E7-ImageDetail") {
          node = contentTemplate[6].contentNode;
        }

        if (node && (data.image || data.text)) {
          reverseToContentSelect.push({
            formId: data.formId,
            isRemove: false,
            node: node,
            prosition: {
              left: "IMAGE",
              right: "IMAGE",
            },
            image: data.image,
            text: data.text,
          });
        }
      });
    }

    setContent(reverseToContentSelect);
  }, [setForm]);

  return (
    <>
      <Drawer
        // width={170}
        title="Content"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <DrawerContent
          onClick={(contentSelect) => {
            onClose();
            let cloneObj = content;
            cloneObj?.push(contentSelect);
            setContent(cloneObj);
          }}
        ></DrawerContent>
      </Drawer>

      <div className="flex flex-col gap-5 w-full">
        {content?.map((data, index) => {
          return (
            <React.Fragment key={`content-selected-i-${index}`}>
              {form && (
                <FormSelected
                  disabled={disabled}
                  form={form}
                  className="px-8 py-8 border border-solid rounded-md shadow-sm bg-gray-50 "
                  contentState={content}
                  index={index}
                  image={data.image}
                  text={data.text}
                  onRemove={() => {
                    let cloneObj = content;
                    cloneObj[index].isRemove = true;
                    setContent(cloneObj);
                    createObjForSend(cloneObj);
                  }}
                  onChange={(cloneObj) => {
                    console.log(cloneObj);
                    setContent(cloneObj);
                    createObjForSend(cloneObj);
                  }}
                  Content={data.node}
                ></FormSelected>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="py-3"></div>
      {!disabled && (
        <div
          onClick={showDrawer}
          className=" w-full h-32  rounded-md border-gray-500  border-2 border-dashed hover:opacity-60 duration-300 cursor-pointer"
        >
          <div className="flex items-center justify-center h-full">
            <AiOutlinePlus className="text-5xl text-gray-500"></AiOutlinePlus>
          </div>
        </div>
      )}
      <div className="py-3"></div>
    </>
  );
};

export default ContentList;
