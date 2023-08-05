import BulletNode from "./bullet/bulletNode";
import ImageNode from "./image/imageNode";
import TextAreaNode from "./detail/textAreaNode";

export const NodeSelectIndex = (
  key: string,
  index: number,
  form?: any,
  isRemove?: boolean
): ContentNodeTitle | undefined => {
  if (key == "1" || key == "T1-Text") {
    return {
      index: index,
      isRemove: isRemove ?? false,
      formId: "T1-Text",
      contentNode: (input: NodeArgument) => (
        <TextAreaNode
          initValue={input.init?.description}
          form={form}
          index={input.index}
          name={input.name}
          onSet={input.onSet}
        />
      ),
    };
  } else if (key == "2" || key == "T2-Image") {
    return {
      index: index,
      isRemove: isRemove ?? false,
      formId: "T2-Image",
      contentNode: (input: NodeArgument) => (
        <ImageNode
          initValue={input.init?.imageUrl}
          form={form}
          index={input.index}
          name={input.name}
          onSet={input.onSet}
        />
      ),
    };
  } else if (key == "3" || key == "T2-Bullet") {
    return {
      index: index,
      isRemove: isRemove ?? false,
      formId: "T2-Bullet",
      contentNode: (input: NodeArgument) => (
        <BulletNode
          initValue={input.init?.bullet}
          form={form}
          index={input.index}
          name={input.name}
          onSet={input.onSet}
        />
      ),
    };
  } else {
    return undefined;
  }
};
