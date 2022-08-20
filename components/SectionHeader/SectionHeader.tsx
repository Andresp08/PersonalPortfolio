import styled from "@emotion/styled";
import React, { FC } from "react";
type SectionHeaderType = {
  children: string;
  number?: number;
};
const Header = styled.h2<SectionHeaderType>`
  height: min-content;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: pre-wrap;
  max-width: 100vw;

  &::before {
    position: relative;
    bottom: 4px;
    counter-increment: section ${(props) => props.number};
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  }
  @media (max-width: 768px) {
    font-size: clamp(26px, 5vw, var(--fz-xl));
    &::after {
      position: absolute;
      left: 0;
      bottom: -20%;
      top: unset;
      width: 200px;
    }
  }
`;

const SectionHeader: FC<SectionHeaderType> = ({ children, number = 1 }) => {
  return <Header number={number}>{children}</Header>;
};

export default SectionHeader;
