import React from "react";
import OImage from "../../image-optimization /OImage";

interface ContentPreviewProps {
  contentForSend: ContectForSend[];
}

const Imgae = (url: string, alt?: string) => (
  <div className="relative w-full h-full ">
    <OImage
      relativeClass="flex flex-col justify-start items-center w-full "
      imageClassName="h-[300px] sm:h-[400px] w-full "
      imageClip=""
      url={url}
      objectType="object-cover "
    ></OImage>
    {alt && (
      <div className="text-center pt-2 px-5 text-xs text-gray-400">{alt}</div>
    )}
  </div>
);

const Text = (title?: string, nodeSelectOutput?: NodeSelectOutput[]) => (
  <div className="flex flex-col gap-2 w-full">
    <div className="text-3xl font-bold">{title}</div>
    <div className="text-lg flex flex-col gap-4 ">
      {Detail(nodeSelectOutput)}
    </div>
  </div>
);

const Detail = (nodeSelectOutput?: NodeSelectOutput[]) => {
  {
    return nodeSelectOutput?.map((data, index) => {
      if (data.formId == "T1-Text") {
        return (
          <div key={`ndoe-select-output-key-${index}`}>{data.description}</div>
        );
      } else if (data.formId == "T2-Image" && data.imageUrl?.imageUrl) {
        return (
          <div
            key={`ndoe-select-output-key-${index}`}
            className="relative w-full"
          >
            <>{Imgae(data.imageUrl?.imageUrl, data.imageUrl?.imageAlt)}</>
          </div>
        );
      } else if (data.formId == "T2-Bullet" && data.bullet) {
        return (
          <div
            key={`ndoe-select-output-key-${index}`}
            className="relative w-full"
          >
            <div className="text-xl">
              {data.bullet.map((bull, bindex) => {
                return (
                  <div
                    key={`bullet-key-element-${bindex}`}
                    className="flex gap-2"
                  >
                    {bull.header == "number" ? (
                      <div className="min-w-[10px] md:min-w-[40px] text-right whitespace-nowrap ">{`${
                        bindex + 1
                      }.`}</div>
                    ) : (
                      ""
                    )}
                    <div className="pr-[10px] md:pr-[40px]">
                      <div className="font-bold">{bull.title}</div>
                      <div className="text-lg">{bull.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    });
  }
};

const ContentPreview: React.FC<ContentPreviewProps> = ({ contentForSend }) => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-10  ">
        {contentForSend?.map((data, index) => {
          return (
            <div key={`contnet-for-send-${index}`}>
              {data.formId == "E1-Image-Image" ? (
                <>
                  {data.image.length > 1 && (
                    <div className="flex flex-col md:flex-row justify-center items-start gap-10 h-full w-full ">
                      {data.image[0].imageUrl && (
                        <>
                          {Imgae(
                            data.image[0].imageUrl,
                            data.image[0].imageAlt
                          )}
                        </>
                      )}
                      {data.image[1].imageUrl && (
                        <>
                          {Imgae(
                            data.image[1].imageUrl,
                            data.image[1].imageAlt
                          )}
                        </>
                      )}
                    </div>
                  )}
                </>
              ) : data.formId == "E3-Image-TitleDetail" ? (
                <>
                  {data.image.length > 1 && data.text.length > 1 && (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 h-full w-full ">
                      {data.image[0].imageUrl && (
                        <>
                          {Imgae(
                            data.image[0].imageUrl,
                            data.image[0].imageAlt
                          )}
                        </>
                      )}
                      {data.text[1] && (
                        <>{Text(data.text[1].title, data.text[1].detail)}</>
                      )}
                    </div>
                  )}
                </>
              ) : data.formId == "E2-TitleDetail-Image" ? (
                <>
                  {data.image.length > 1 && data.text.length > 1 && (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10   w-full ">
                      {data.text[0] && (
                        <>{Text(data.text[0].title, data.text[0].detail)}</>
                      )}
                      {data.image[1].imageUrl && (
                        <>
                          {Imgae(
                            data.image[1].imageUrl,
                            data.image[1].imageAlt
                          )}
                        </>
                      )}
                    </div>
                  )}
                </>
              ) : data.formId == "E4-TitleDetail-TitleDetail" ? (
                <>
                  {data.text.length > 1 && (
                    <div className="flex flex-col md:flex-row justify-center items-start gap-10   w-full ">
                      {data.text[0] && (
                        <>{Text(data.text[0].title, data.text[0].detail)}</>
                      )}
                      {data.text[1] && (
                        <>{Text(data.text[1].title, data.text[1].detail)}</>
                      )}
                    </div>
                  )}
                </>
              ) : data.formId == "E5-TitleDetail" ? (
                <>
                  {data.text.length > 0 && (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10   w-full ">
                      {data.text[0] && (
                        <>{Text(data.text[0].title, data.text[0].detail)}</>
                      )}
                    </div>
                  )}
                </>
              ) : data.formId == "E6-HtmlDetail" ? (
                <>
                  {data.text.length > 0 && (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10   w-full ">
                      {data.text[0] && (
                        <div className="flex flex-col gap-2 w-full ">
                          <div className="">
                            {data.text[0].title && (
                              <>
                                <div
                                  className="   break-words  border-solid"
                                  dangerouslySetInnerHTML={{
                                    __html: data.text[0].title,
                                  }}
                                ></div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : data.formId == "E7-ImageDetail" ? (
                <>
                  {data.image.length > 0 && (
                    <div className="flex flex-col md:flex-row justify-center items-start gap-10 h-full w-full ">
                      {data.image[0].imageUrl && (
                        <>
                          {Imgae(
                            data.image[0].imageUrl,
                            data.image[0].imageAlt
                          )}
                        </>
                      )}
                    </div>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentPreview;
