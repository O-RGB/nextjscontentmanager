import { FormInstance, Modal } from "antd";
import React, { useEffect, useState } from "react";
import ButtonCommon from "../../../../../../common/button/button";
import GalleryUpload from "../../../../../../common/gallery";
import InputCommon from "../../../../../../common/input/input";
import OImage from "../../../../../../image-optimization /OImage";
const formType: NodeFormId = "T2-Image";
interface ImageNodeProps {
  name: string;
  disabled?: boolean;
  index: number;
  //   onChange?: (content: string) => void;
  onSet?: (description: NodeSelectOutput) => void;
  form?: FormInstance<any>;
  initValue?: ContentImage;
}

const ImageNode: React.FC<ImageNodeProps> = ({
  name,
  index,
  //   onChange,
  onSet,
  form,
  initValue,
  disabled = false,
}) => {
  const [image, setImage] = useState<string>();
  const [alt, setAlt] = useState<string>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (form && initValue) {
      setImage(initValue.imageUrl);

      if (initValue.imageAlt) {
        setAlt(initValue.imageAlt);
      }

      onSet?.({
        formId: formType,
        index: index,
        // isRemove: false,
        imageUrl: {
          imageUrl: initValue.imageUrl,
          imageAlt: initValue.imageAlt,
        },
      });

      setTimeout(() => {
        form.setFieldValue(name, initValue.imageUrl);
        if (initValue.imageAlt) {
          form.setFieldValue(name + "i1-alt", initValue.imageAlt);
        }
      }, 0);
    }
  }, [initValue, form, index, name, onSet]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClickImageOnGallry = (imageUrl: string) => {
    if (form) {
      form.setFieldValue(name, undefined);

      setTimeout(() => {
        setImage(imageUrl);
        form.setFieldValue(name, imageUrl);

        onSet?.({
          formId: formType,
          //   isRemove: false,
          index: index,
          imageUrl: {
            imageUrl: imageUrl,
            imageAlt: initValue?.imageAlt,
          },
        });
        handleOk();
      }, 100);
    }
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        width={"90%"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <GalleryUpload onClickImage={onClickImageOnGallry}></GalleryUpload>
      </Modal>

      <div className="relative flex flex-col gap-2 w-full justify-center items-center py-6 ">
        <div
          className="bg-gray-100 w-56 md:w-full h-60 md:h-96 flex rounded-lg overflow-hidden" //p-10
        >
          <div className="w-full h-full flex justify-center items-center ">
            <div className="w-full relative h-full">
              {image && (
                <OImage
                  url={image}
                  imageClassName="h-full w-full opacity-50"
                  imageClip=""
                ></OImage>
              )}
              <div className="absolute z-40 top-0 w-full h-full flex flex-col justify-center items-center">
                <div className="w-full p-7">
                  <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center">
                    <div className="w-full">
                      <InputCommon
                        FormItemProps={{
                          name: name,
                          label: "image",
                          required: true,
                          rules: [
                            {
                              required: true,
                              message: "Missing Image URL.",
                            },
                          ],
                        }}
                        InputProps={{
                          placeholder: "Insert URL Image",
                          disabled: disabled,
                          onChange: (e) => {
                            setImage(undefined);
                            setTimeout(() => {
                              setImage(e.target.value);
                              onSet?.({
                                formId: formType,
                                index: index,
                                // isRemove: false,
                                imageUrl: {
                                  imageUrl: e.target.value,
                                  imageAlt: alt,
                                },
                              });
                            }, 100);
                          },
                        }}
                      ></InputCommon>
                    </div>
                    <div className="w-full md:w-20 mt-1">
                      <ButtonCommon
                        width="w-full md:w-auto"
                        onClick={showModal}
                      >
                        Gallery
                      </ButtonCommon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-7  w-96 md:w-full  bg-gray-100 rounded-lg">
          <InputCommon
            FormItemProps={{
              name: name + "i1-alt",
              label: "Image Caption",
              className: "p-0 m-0 ",
            }}
            InputProps={{
              placeholder: "Insert Caption",
              disabled: disabled,
              onChange: (e) => {
                setAlt(undefined);
                setTimeout(() => {
                  setAlt(e.target.value);
                  onSet?.({
                    formId: formType,
                    index: index,
                    // isRemove: false,
                    imageUrl: { imageUrl: image, imageAlt: e.target.value },
                  });
                }, 100);
              },
            }}
          ></InputCommon>
        </div>
      </div>
    </>
  );
};

export default ImageNode;
