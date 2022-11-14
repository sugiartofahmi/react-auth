import { FC, ReactElement } from "react";

type ButtonProps = {
  text: string;
  style: string;
};

const Button: FC<ButtonProps> = ({ text, style }): ReactElement => {
  return <button className={style}>{text}</button>;
};

export default Button;
