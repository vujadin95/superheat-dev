export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleClass?: string;
  children: React.ReactNode;
  handleClick: () => void;
}
