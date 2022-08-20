import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { sectionOne as data } from "data/data";
import Button from "components/Button/Button";
import { motion, useAnimation } from "framer-motion";
import { useIntersect } from "lib/hooks/use-intersect";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 120px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
    min-height: unset;
    padding-bottom: 40px;
  }
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Badge = styled.h1`
  margin: 0px 0px 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
`;
const H2 = styled.h2`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
`;
const H3 = styled.h3`
  color: var(--slate);
  line-height: 0.9;
  margin: 0px;
  margin-top: 10px;
  font-size: clamp(40px, 8vw, 80px);
`;
const Desc = styled.p`
  margin: 20px 0px 0px;
  max-width: 540px;
`;
const StyledButton = styled(Button)`
  margin-top: 50px;
`;
const containerVariants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1 },
};
const TopSection = () => {
  const [ref, inView] = useIntersect<HTMLDivElement>(0.45);
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <Container ref={ref}>
      <ContentContainer
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        transition={{
          duration: 0.4,
        }}
      >
        <Badge>{data.badge}</Badge>
        <H2>{data.name}</H2>
        <H3>{data.slogan}</H3>
        <Desc>{data.desc}</Desc>
        <StyledButton size="xl">
          <a href={data.button.target} target="_blank" rel="noreferrer">
            {data.button.text}
          </a>
        </StyledButton>
      </ContentContainer>
    </Container>
  );
};

export default TopSection;
