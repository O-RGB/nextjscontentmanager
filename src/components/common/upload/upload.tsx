import { Form, FormItemProps, Upload } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadListType } from "antd/es/upload/interface";
import OImage from "@/components/image-optimization /OImage";

interface UploadCommonProps {
  FormItemProps?: FormItemProps;
  setImage?: string;
  children?: React.ReactNode;
  listType?: UploadListType | undefined;
  beforeUpload?: (file: RcFile) => void;
  handleChange?:
    | ((info: UploadChangeParam<UploadFile<any>>, imageBlob?: string) => void)
    | undefined;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const UploadCommon: React.FC<UploadCommonProps> = ({
  beforeUpload,
  handleChange,
  FormItemProps,
  listType,
  setImage,
  children,
}) => {
  const [fileList, setFileList] = useState<UploadFile<RcFile>[] | undefined>(
    undefined
  );

  const handleChangeImage = (info: UploadChangeParam<UploadFile<any>>) => {
    return new Promise<string>((reslove) => {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
        reslove(url);
      });
    });
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const uploadButton = (
    <div className="">
      {loading ? <LoadingOutlined></LoadingOutlined> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    if (setImage) {
      setLoading(false);
      setImageUrl(setImage);
    }
  }, [setImage]);

  return (
    <>
      <Form.Item {...FormItemProps}>
        <Upload
          name="avatar"
          fileList={fileList}
          style={{ width: "100%" }}
          listType={listType ?? "picture-card"}
          className="avatar-uploader post-container"
          showUploadList={false}
          action={undefined}
          beforeUpload={(e) => {
            setFileList(undefined);
            setFileList([e]);
            beforeUpload?.(e);
          }}
          onChange={(info) => {
            handleChangeImage(info).then((data) => {
              handleChange?.call("", info, data);
            });
          }}
        >
          {children ? (
            children
          ) : (
            <>
              {imageUrl ? (
                <OImage url={imageUrl}></OImage>
              ) : (
                // <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                uploadButton
              )}
            </>
          )}
        </Upload>
      </Form.Item>
    </>
  );
};

export default UploadCommon;
