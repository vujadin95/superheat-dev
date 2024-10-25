import { ButtonType } from "./button.types";
const Button = ({ children, styleClass, handleClick }: ButtonType) => {
  return (
    <button onClick={handleClick} className={`${styleClass}`}>
      {children}
    </button>
  );
};
export default Button;
