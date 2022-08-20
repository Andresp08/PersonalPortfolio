import React from "react";
import { sectionContact as data, social, Social, email } from "data";
import styled from "@emotion/styled";
import Button from "components/Button/Button";
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

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  position: relative;
`;
const Badge = styled.span`
  display: block;
  margin-bottom: 20px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;
`;
const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
`;

const Description = styled.p`
  text-align: center;
  width: 600px;
  margin-bottom: 50px;
  font-size: var(--fz-xl);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ContactButton = styled(Button)``;
const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: none;
  transform: translateX(-50%);
  padding-bottom: 30px;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Social = styled.a`
  padding: 10px;

  &:hover {
    color: var(--green);
    transform: translateY(-4px);
  }
`;
const Email = styled.a`
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: var(--fz-lg);
  letter-spacing: 0.1em;
  &:hover {
    transform: translateY(-3px);
  }
`;
const BUttonsContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  & > *:not(:last-child) {
    margin-right: 20px;
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

const SectionContact = () => {
  return (
    <Container id={data.id} style={ { marginTop: '-100px' } }>
      <Badge>{data.badge}</Badge>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <BUttonsContainer>
        {data.buttons.map((btn) => (
          <ContactButton size="lg" key={btn.text}>
            <a href={btn.target} target="_blank" rel="noreferrer">
              {btn.text}
            </a>
          </ContactButton>
        ))}
      </BUttonsContainer>

      <InfoContainer>
        <Socials>
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
        </Socials>
        <Email href={"mailto:" + email} target="_blank">
          {email}
        </Email>
      </InfoContainer>
    </Container>
  );
};

export default SectionContact;
