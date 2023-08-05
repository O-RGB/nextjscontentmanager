type NodeFormId = "T1-Text" | "T2-Image" | "T2-Bullet";

interface ContentNodeTitle {
  formId: NodeFormId;
  isRemove: boolean;
  index: number;
  init?: NodeSelectOutput;
  contentNode: (input: NodeArgument) => React.ReactNode;
}

interface NodeArgument {
  index: number;
  name: string;
  onChange?: (value: string) => void;
  onSet?: (NodeSelectOutput: NodeSelectOutput) => void;
  disabled: boolean;
  init: NodeSelectOutput;
}

interface NodeSelectOutput {
  index: number;
  isRemove?: boolean;
  description?: string;
  bullet?: NodeTempBullet[];
  imageUrl?: ContentImage;
  formId: NodeFormId;
}

type BulletStyle = "number";
interface NodeTempBullet {
  header: BulletStyle;
  title: string;
  detail?: string;
  isRemoveBullet: boolean;
  indexHeader: number;
}
