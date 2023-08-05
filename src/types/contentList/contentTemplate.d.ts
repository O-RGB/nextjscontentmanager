interface ImageLeftImageRightProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  iniImage1?: string;
  iniImage2?: string;
  iniAlt1?: string;
  iniAlt2?: string;
  edit?: boolean;
  form?: any;
  disabled?: boolean;
}

interface ImageRightTitleLeftProps {
  imageName: string;
  index: number;
  onSet: (output: onSetArgument) => void;
  initText?: string;
  initDetail?: NodeSelectOutput[];
  iniImage?: string;
  iniAlt?: string;
  edit?: boolean;
  form?: any;
  disabled?: boolean;
}
