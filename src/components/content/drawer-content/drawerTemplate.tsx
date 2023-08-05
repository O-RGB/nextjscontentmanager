import ImageRightTitleLeft from "../post-content/ImgaeRightTItleLeft";
import ContentHTMLOnly from "../post-content/htmlOnly";
import ImageLeftImageRight from "../post-content/imageLeftImageRight";
import ContentImageOnly from "../post-content/imageOnly";
import ContentTitleLeftImageRight from "../post-content/titleLeftImageRight";
import ContentTitleLeftTitleRight from "../post-content/titleLefttitleRight";
import ContentTitleOnly from "../post-content/titleOnly";

const imageColor = "bg-gray-400";
const titleColot = "bg-gray-400";
const pColor = "bg-gray-300";
const bgColor = "bg-gray-200";

export const E1 = (): ContentPrositionNode => {
  return {
    formId: "E1-Image-Image",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 w-full h-full justify-center items-center">
          {/* <div className="w-full flex flex-col gap-0.5 items-end">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div> */}
          <div className={`w-full h-full rounded-md ${imageColor}`}></div>
          <div className={`w-full h-full rounded-md ${imageColor}`}></div>
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ImageLeftImageRight
        onSet={input.onSet}
        imageName={input.formName}
        index={input.index}
        edit={input.editMode}
        iniImage1={input.imageInit ? input.imageInit[0]?.imageUrl : undefined}
        iniImage2={input.imageInit ? input.imageInit[1]?.imageUrl : undefined}
        form={input.form}
        disabled={input.disabled}
        iniAlt1={input.imageInit ? input.imageInit[0]?.imageAlt : undefined}
        iniAlt2={input.imageInit ? input.imageInit[1]?.imageAlt : undefined}
      />
    ),

    prosition: {
      left: "IMAGE",
      right: "IMAGE",
    },
  };
};
export const E2 = (): ContentPrositionNode => {
  return {
    formId: "E2-TitleDetail-Image",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 flex-row-reverse w-full h-full justify-center items-center">
          <div className={`w-full h-full  rounded-md ${imageColor}`}></div>
          <div className="w-full flex flex-col gap-0.5 items-start">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div>
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ContentTitleLeftImageRight
        onSet={input.onSet}
        imageName={input.formName}
        index={input.index}
        form={input.form}
        disabled={input.disabled}
        iniAlt={input.imageInit ? input.imageInit[1]?.imageAlt : undefined}
        iniImage={
          input.imageInit
            ? input.imageInit[1]
              ? input.imageInit[1]?.imageUrl
              : undefined
            : undefined
        }
        initDetail={
          input.textInit
            ? input.textInit[0]
              ? input.textInit[0]?.detail
              : undefined
            : undefined
        }
        initText={
          input.textInit
            ? input.textInit[0]
              ? input.textInit[0]?.title
              : undefined
            : undefined
        }
      ></ContentTitleLeftImageRight>
    ),
    prosition: {
      left: "TEXT",
      right: "IMAGE",
    },
  };
};
export const E3 = (): ContentPrositionNode => {
  return {
    formId: "E3-Image-TitleDetail",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 flex-row-reverse w-full h-full justify-center items-center">
          <div className="w-full flex flex-col gap-0.5 items-start">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div>
          <div className={`w-full h-full  rounded-md ${imageColor}`}></div>
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ImageRightTitleLeft
        iniAlt={input.imageInit ? input.imageInit[0]?.imageAlt : undefined}
        iniImage={
          input.imageInit
            ? input.imageInit[0]
              ? input.imageInit[0]?.imageUrl
              : undefined
            : undefined
        }
        initDetail={
          input.textInit
            ? input.textInit[1]
              ? input.textInit[1]?.detail
              : undefined
            : undefined
        }
        initText={
          input.textInit
            ? input.textInit[1]
              ? input.textInit[1]?.title
              : undefined
            : undefined
        }
        edit={input.editMode}
        onSet={input.onSet}
        imageName={input.formName}
        index={input.index}
        form={input.form}
        disabled={input.disabled}
      ></ImageRightTitleLeft>
    ),
    prosition: {
      left: "IMAGE",
      right: "TEXT",
    },
  };
};
export const E4 = (): ContentPrositionNode => {
  return {
    formId: "E4-TitleDetail-TitleDetail",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 flex-row-reverse w-full h-full justify-center items-center">
          <div className="w-full flex flex-col gap-0.5 items-start">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div>
          <div className="w-full flex flex-col gap-0.5 items-start">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div>
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ContentTitleLeftTitleRight
        initDetail2={input.textInit ? input.textInit[1]?.detail : undefined}
        initText2={input.textInit ? input.textInit[1]?.title : undefined}
        initDetail1={input.textInit ? input.textInit[0]?.detail : undefined}
        initText1={input.textInit ? input.textInit[0]?.title : undefined}
        onSet={input.onSet}
        imageName={input.formName}
        index={input.index}
        form={input.form}
        disabled={input.disabled}
      ></ContentTitleLeftTitleRight>
    ),
    prosition: {
      left: "IMAGE",
      right: "TEXT",
    },
  };
};

export const E5 = (): ContentPrositionNode => {
  return {
    formId: "E5-TitleDetail",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 flex-row-reverse w-full h-full justify-center items-center">
          <div className="w-full flex flex-col gap-0.5 items-start">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div>
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ContentTitleOnly
        initDetail={
          input.textInit
            ? input.textInit[0]
              ? input.textInit[0]?.detail
              : undefined
            : undefined
        }
        initText={
          input.textInit
            ? input.textInit[0]
              ? input.textInit[0]?.title
              : undefined
            : undefined
        }
        onSet={input.onSet}
        imageName={input.formName}
        index={input.index}
        edit={input.editMode}
        form={input.form}
        disabled={input.disabled}
      ></ContentTitleOnly>
    ),
    prosition: {
      left: "TEXT",
      right: "TEXT",
    },
  };
};
export const E6 = (): ContentPrositionNode => {
  return {
    formId: "E6-HtmlDetail",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 flex-row-reverse w-full h-full justify-center items-center">
          {/* <div className="w-full flex flex-col gap-0.5 items-start">
            <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
            <div
              className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
            ></div>
          </div> */}
          {"<HTML/>"}
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ContentHTMLOnly
        initDetail={
          input.textInit
            ? input.textInit[0]
              ? input.textInit[0]?.detail
              : undefined
            : undefined
        }
        initText={
          input.textInit
            ? input.textInit[0]
              ? input.textInit[0]?.title
              : undefined
            : undefined
        }
        onSet={input.onSet}
        imageName={input.formName}
        index={input.index}
        edit={input.editMode}
        form={input.form}
        disabled={input.disabled}
      ></ContentHTMLOnly>
    ),
    prosition: {
      left: "TEXT",
      right: "TEXT",
    },
  };
};
export const E7 = (): ContentPrositionNode => {
  return {
    formId: "E7-ImageDetail",
    templateNode: (
      <div
        className={`w-32 h-20  rounded-md p-3 hover:opacity-75 cursor-pointer duration-300 ${bgColor}`}
      >
        <div className="flex gap-3 w-full h-full justify-center items-center">
          {/* <div className="w-full flex flex-col gap-0.5 items-end">
          <div className={`w-10 h-2 rounded-md ${titleColot}`}></div>
          <div
            className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
          ></div>
          <div
            className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
          ></div>
          <div
            className={`w-full h-1.5 rounded-md bg-gray-400 ${pColor}`}
          ></div>
        </div> */}
          {/* <div className={`w-full h-full rounded-md ${imageColor}`}></div> */}
          <div className={`w-full h-full rounded-md ${imageColor}`}></div>
        </div>
      </div>
    ),
    contentNode: (input: CreateContectSelect) => (
      <ContentImageOnly
        iniAlt={input.imageInit ? input.imageInit[0]?.imageAlt : undefined}
        onSet={input.onSet}
        imageName={input.formName}
        iniImage={
          input.imageInit
            ? input.imageInit[0]
              ? input.imageInit[0]?.imageUrl
              : undefined
            : undefined
        }
        index={input.index}
        edit={input.editMode}
        form={input.form}
        disabled={input.disabled}
      ></ContentImageOnly>
    ),
    prosition: {
      left: "TEXT",
      right: "TEXT",
    },
  };
};
