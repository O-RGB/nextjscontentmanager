import React, { useEffect, useState } from "react";
import { FormInstance, Modal } from "antd";
import ButtonCommon from "../../../common/button/button";
import GalleryUpload from "../../../common/gallery";
import InputCommon from "../../../common/input/input";
import OImage from "../../../image-optimization /OImage";

interface ChlidrenContentImageProps {
  imageName: string;
  indexActive: number;
  iniImage?: string;
  iniAlt?: string;
  onSet: (output: onSetArgument) => void;
  form: FormInstance<any>;
  disabled?: boolean;
}

const ChlidrenContentImage: React.FC<ChlidrenContentImageProps> = ({
  onSet,
  indexActive,
  iniImage,
  iniAlt,
  imageName,
  form,
  disabled,
}) => {
  const [image, setImage] = useState<string>();
  const [alt, setAlt] = useState<string>();

  useEffect(() => {
    if (iniImage) {
      setImage(iniImage);

      if (iniAlt) {
        setAlt(iniAlt);
      }

      onSet({
        indexActive: indexActive,
        image: { imageUrl: image ?? iniImage, imageAlt: iniAlt },
      });

      setTimeout(() => {
        form.setFieldValue(imageName + `-${indexActive}-` + "i1", iniImage);
        if (iniAlt) {
          form.setFieldValue(imageName + "i1-alt", iniAlt);
        }
      }, 0);
    }
  }, [iniImage, iniAlt]);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    form.setFieldValue(imageName + `-${indexActive}-` + "i1", undefined);

    setTimeout(() => {
      setImage(imageUrl);
      form.setFieldValue(imageName + `-${indexActive}-` + "i1", imageUrl);
      onSet({
        indexActive: indexActive,
        image: { imageUrl: imageUrl, imageAlt: iniAlt },
      });
      handleOk();
    }, 100);
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
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <div className="bg-gray-300 w-full h-96 md:h-96 flex rounded-lg overflow-hidden">
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
                          name: imageName + `-${indexActive}-` + "i1",
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
                              onSet({
                                indexActive: indexActive,
                                image: {
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
        <div className="py-3 px-7  w-full  bg-gray-100 rounded-lg">
          <InputCommon
            FormItemProps={{
              name: imageName + "i1-alt",
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
                  onSet({
                    indexActive: indexActive,
                    image: { imageUrl: image, imageAlt: e.target.value },
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

export default ChlidrenContentImage;
