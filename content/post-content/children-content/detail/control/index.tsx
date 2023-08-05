import React, { useEffect, useState } from "react";
import { MinusOutlined } from "@ant-design/icons";
import ButtonIconRoundCommon from "../../../../../components/common/button-icon-round";

interface ControlNodeSelectedProps {
  //   children: JSX.Element;
  onRemove?: () => void;
  remove: boolean;
  contentNode: (input: NodeArgument) => React.ReactNode;
  name: string;
  onSet?: ((NodeSelectOutput: NodeSelectOutput) => void) | undefined;
  init?: NodeSelectOutput;
  index: number;
  key?: string;
}

const ControlNodeSelected: React.FC<ControlNodeSelectedProps> = ({
  //   children,
  onRemove,
  remove,
  name,
  contentNode,
  onSet,
  init,
  index,
  key,
}) => {
  const [isRemove, setRemove] = useState<boolean>(false);
  useEffect(() => {
    setRemove(remove);
    // content.props.string = "eijgei";
  }, []);

  if (isRemove) {
    return <></>;
  }

  return (
    <div
      key={key}
      className="relative px-3 border border-solid rounded-xl shadow-sm bg-white"
    >
      <div
        className="absolute right-3 md:right-3 top-5 z-40"
        onClick={() => {
          setRemove(true);
          onRemove?.();
        }}
      >
        <ButtonIconRoundCommon
          type="button"
          width={"w-6 h-6"}
          bg={" bg-orange"}
        >
          <MinusOutlined
            className={"m-auto text-white text-md font-bold"}
          ></MinusOutlined>
        </ButtonIconRoundCommon>
      </div>
      <div className="p-4">
        {contentNode?.({
          name: name,
          init: init,
          index: index,
          onSet: onSet,
        } as NodeArgument)}
      </div>
    </div>
  );
};

export default ControlNodeSelected;
