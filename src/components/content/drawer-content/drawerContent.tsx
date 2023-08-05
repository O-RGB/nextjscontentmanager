import React, { useEffect, useState } from "react";

import ImageRightTitleLeft from "../post-content/ImgaeRightTItleLeft";
import ContentTitleLeftImageRight from "../post-content/titleLeftImageRight";
import ImageLeftImageRight from "../post-content/imageLeftImageRight";
import { E1, E2, E3, E4, E5, E6, E7 } from "./drawerTemplate";

interface titleContentPrositionNode {
  title: string;
  node: ContentPrositionNode[];
}

interface DrawerContentProps {
  onClick: (ContentSelect: ContentSelect) => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ onClick }) => {
  const [getContentTemplate, setContectTemplate] = useState<
    titleContentPrositionNode[]
  >([]);

  useEffect(() => {
    let contentTemplate: titleContentPrositionNode[] = [
      {
        title: "Image",
        node: [E1(), E2(), E3(), E7()],
      },
      {
        title: "Text",
        node: [E4(), E5(), E6()],
      },
    ];
    setContectTemplate(contentTemplate);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {getContentTemplate.map((ContentProsition, index) => {
          return (
            <div
              key={`prosition-key-darwer-${index}`}
              className="flex flex-col gap-3"
            >
              <div>{ContentProsition.title}</div>
              <div className="flex flex-col gap-3">
                {ContentProsition.node?.map((data, jndex) => (
                  <div
                    key={`content-dawer-${jndex}`}
                    onClick={() =>
                      onClick({
                        formId: data.formId,
                        isRemove: false,
                        node: data.contentNode,
                        prosition: data.prosition,
                        image: [],
                        text: [],
                      })
                    }
                  >
                    {data.templateNode}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DrawerContent;
