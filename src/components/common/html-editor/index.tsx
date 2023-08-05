import { Form, FormInstance, FormItemProps, Input, Popover } from "antd";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ButtonCommon from "../button/button";
import UploadCommon from "../upload/upload";
import { BiImage } from "react-icons/bi";

const JoditEditorNonSSR = dynamic(() => import("jodit-react"), {
  ssr: false,
});
interface HtmlEditorCommonProps extends FormItemProps {
  onChange?: (html: string) => void;
  form?: FormInstance<any>;
  initHtml?: string;
  onUploadImage?: (file: File) => Promise<string | undefined>;
}
type ButtonConfit =
  | "bold"
  | "fontsize"
  | "italic"
  | "underline"
  | "ul"
  | "ol"
  | "paragraph"
  | "superscript"
  | "subscript"
  | "image"
  | "table"
  | "link"
  | "symbols"
  | "indent"
  | "outdent"
  | "left";

const HtmlEditorCommon: React.FC<HtmlEditorCommonProps> = ({
  onChange,
  onUploadImage,
  form,
  ...props
}) => {
  interface IUploaderData {
    messages?: string[];
    files: string[];
    isImages?: boolean[];
    path?: string;
    baseurl: string;
    newfilename?: string;
  }
  interface IUploaderAnswer {
    success: boolean;
    time: string;
    data: IUploaderData;
  }

  const [constTent, setContent] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (props.initialValue) {
      setContent(props.initialValue);
    }
  }, [props.initialValue]);

  if (!props.name) {
    return <></>;
  }

  return (
    <>
      <div className="relative">
        <label htmlFor="" className="flex gap-1">
          {props.required ? <div className="text-red-300">*</div> : ""}
          {props.label}
        </label>
        <div className="w-full flex justify-end">
          <Popover
            destroyTooltipOnHide
            content={
              <div className="w-full h-full flex justify-center items-center pt-4">
                <UploadCommon
                  beforeUpload={(e) => {
                    return onUploadImage?.(e).then((data) => {
                      if (data) {
                        let clone = constTent;
                        if (!clone) clone = "";
                        clone = clone + `<img src='${data}'></img>`;
                        setContent(clone);
                        onChange?.(clone);
                        if (props.name) {
                          form?.setFieldValue(props.name, clone);
                          setTimeout(() => {
                            if (props.name) {
                              form?.validateFields([props.name]);
                              hide();
                            }
                          }, 10);
                        }
                      }
                      return false;
                    });
                  }}
                ></UploadCommon>
              </div>
            }
            title="Upload Image"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <ButtonCommon className="flex gap-2 justify-center items-center px-4">
              <div>
                <BiImage className="text-lg"></BiImage>
              </div>
              <div>Upload Image</div>
            </ButtonCommon>
          </Popover>
        </div>
        <div className="relative z-20 pt-2">
          <JoditEditorNonSSR
            key={props.name + "k"}
            config={{
              // uploader: {
              //   url: {},
              //   process: (resp: IUploaderAnswer): IUploaderData => {
              //     let temp: IUploaderData = {
              //       baseurl: "",
              //       files: [],
              //       isImages: [true],
              //       messages: [""],
              //       newfilename: "test.jpg",
              //       path: "",
              //     };
              //     return temp;
              //   },
              //   getDisplayName: () => {
              //     return "TEST";
              //   },
              //   getMessage: (resp: IUploaderAnswer) => {
              //     return "";
              //   },

              //   isSuccess: (e: any, x: any) => {
              //     console.log(e, x);
              //     return true;
              //   },
              //   processFileName: (
              //     key: string,
              //     file: File,
              //     name: string
              //   ): [string, File, string] => {
              //     console.log(key, file, name);
              //     return [key, file, name];
              //   },
              // },
              className: "min-h-[500px]",
              buttons:
                "bold,italic,fontsize,underline,ul,ol,table,link,paste,image",
              controls: {},
            }}
            value={constTent ?? ""}
            onBlur={(newContent) => {
              if (props.name) {
                onChange?.(newContent);
                setContent(newContent);
                let cleanText = newContent.replace(/<[^>]*>/g, "");
                cleanText = cleanText.replace(/&nbsp;/g, "");
                if (cleanText.length > 0) {
                  // form?.resetFields([props.name]);
                  form?.setFieldValue(props.name, newContent);
                } else {
                  form?.setFieldValue(props.name, undefined);
                }
                setTimeout(() => {
                  if (props.name) {
                    form?.validateFields([props.name]);
                  }
                }, 10);
              }
            }}
          />
        </div>

        <Form.Item
          {...props}
          name={props.name}
          required={props.required}
          label={undefined}
          initialValue={constTent}
          className="z-10 -mt-7"
        >
          <Input className="h-0 w-0" value={constTent ?? ""}></Input>
        </Form.Item>
      </div>
    </>
  );
};

export default HtmlEditorCommon;
