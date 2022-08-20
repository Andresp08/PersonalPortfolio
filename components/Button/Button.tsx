import styled from "@emotion/styled";
import React, {
  MouseEventHandler,
  ReactNode,
  HTMLAttributes,
  Ref,
  forwardRef,
  RefObject,
  MutableRefObject,
} from "react";

interface ButtonI extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "lg" | "xl";
  onClick: MouseEventHandler<HTMLButtonElement>;
  ref: any;
}
type ButtonType = Partial<ButtonI>;

const Btn = styled.button<ButtonType>`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  width: max-content;

  ${({ size }) => {
    if (size === "sm")
      return `
            padding: 0.75rem 1rem; 
            font-size: var(--fz-xs);
         `;
    else if (size === "xl")
      return `
            padding: 1.25rem 1.75rem;
            font-size: var(--fz-sm);
            `;
    else if (size === "lg")
      return `
            padding: 1.25rem 1.75rem;
            font-size: var(--fz-xs);
            `;
  }}
  position: relative;
  & a {
    position: unset;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    background-color: var(--green-tint);
    outline: none;
  }
`;

const Button = (props: ButtonType) => {
  const { children, size = "sm", ref, ...other } = props;
  return (
    <Btn size={size} ref={ref} {...other}>
      {children}
    </Btn>
  );
};

export default Button;
