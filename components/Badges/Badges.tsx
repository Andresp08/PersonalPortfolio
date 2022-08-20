import styled from "@emotion/styled";
import React from "react";
import { social, email, Social } from "data";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";
type SocialType = keyof Social;
type SocialIconsType = {
  [T in keyof Social]: JSX.Element;
};
const line = `
    &::after{
        content: "";
        width:2px;
        height:90px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--light-slate);
    }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0px;
  padding: inherit;
  padding-bottom: 110px;

  ${() => line}
`;

const Social = styled.a`
  padding: 10px;

  &:hover {
    color: var(--green);
    transform: translateY(-4px);
  }
`;

const Right = styled.div`
  position: fixed;
  bottom: 0;
  right: 0px;
  padding: inherit;
  padding-bottom: 90px;
  ${() => line}
`;
const Email = styled.a`
  margin: 20px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: var(--fz-lg);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: inherit;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Icons: SocialIconsType = {
  codepen: <FaCodepen />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  twitter: <FaTwitter />,
};
const renderSocialIcon = (name: SocialType): JSX.Element => {
  return Icons[name];
};
const Badges = () => {
  return (
    <Container>
      <Left>
        {Object.keys(social).map((s: string) => {
          const name = s as SocialType;
          const item = social[name];
          if (item.length > 1)
            return (
              <Social href={item} target="_blank" key={item}>
                {renderSocialIcon(name)}
              </Social>
            );
        })}
      </Left>
      <Right>
        <Email href={"http://mailto" + email} target="_blank">
          {email}
        </Email>
      </Right>
    </Container>
  );
};

export default Badges;
