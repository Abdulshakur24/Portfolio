import { ButtonBack, ButtonFront } from "./index";

const Button = ({ children, ...props }) => (
  <ButtonBack {...props}>
    {children}
    <ButtonFront {...props}>{children}</ButtonFront>
  </ButtonBack>
);

export default Button;
