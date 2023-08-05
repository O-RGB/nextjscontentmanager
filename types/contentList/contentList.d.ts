type ContentType = "IMAGE" | "TEXT";
type ContectFormId =
  | "E1-Image-Image"
  | "E2-TitleDetail-Image"
  | "E3-Image-TitleDetail"
  | "E4-TitleDetail-TitleDetail"
  | "E5-TitleDetail"
  | "E6-HtmlDetail"
  | "E7-ImageDetail";

interface ContentImage {
  imageUrl?: string;
  imageAlt?: string;
  ImageUpload?: File;
}

interface ContentTextStyle {
  bold: boolean;
  italic: boolean;
}

interface ContentText {
  title?: string;
  detail?: NodeSelectOutput[];
  style?: ContentTextStyle;
}

interface ContentProsition {
  left: ContentType;
  right: ContentType;
}

interface ContentSelect {
  formId: ContectFormId;
  image?: ContentImage[];
  text?: ContentText[];

  prosition: ContentProsition;
  isRemove: boolean;
  node: (input: CreateContectSelect) => React.ReactNode;
}

interface onSetArgument {
  indexActive: number;
  image?: ContentImage;
  text?: ContentText;
}

interface CreateContectSelect {
  index: number;
  formName: string;
  imageInit?: ContentImage[];
  textInit?: ContentText[];
  editMode: boolean;
  onSet: (output: onSetArgument) => void;
  form: any;
  disabled: boolean;
}

interface ContentPrositionNode {
  prosition: ContentProsition;
  formId: ContectFormId;
  templateNode: JSX.Element;
  contentNode: (input: CreateContectSelect) => React.ReactNode;
}

///////////
interface ContectForSend {
  formId: ContectFormId;
  index: number;
  image: ContentImage[];
  text: ContentText[];
  prosition: ContentProsition;
}
