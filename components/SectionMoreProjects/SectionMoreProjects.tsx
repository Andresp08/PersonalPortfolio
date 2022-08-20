import React, { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsFolder2 } from "react-icons/bs";
import { sectionMoreProjects as data } from "data/data";
import Button from "components/Button/Button";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;
const Header = styled.h2`
  align-self: center;
  font-size: var(--fz-heading);
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
  gap: 15px;
  align-content: center;
  justify-content: center;
`;

const Project = styled(motion.div)`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ProjectHeader = styled.header`
  width: 100%;
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Folder = styled.div`
  color: var(--green);
  font-size: 44px;
`;

const Links = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: -10px;
  color: var(--light-slate);
  font-size: var(--fz-xxl);
  position: relative;
  z-index: 2;
  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;
const Link = styled.a``;
const Github = styled.a``;

const Title = styled.h3`
  margin: 0px 0px 10px;
  color: var(--lightest-slate);
  font-size: var(--fz-xxl);
`;
const TitleLink = styled.a`
  position: unset;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 1;
  }
`;
const Description = styled.p`
  color: var(--light-slate);
  font-size: var(--fz-sm);
`;

const ProjectFooter = styled.footer``;

const FooterList = styled.ul`
  display: flex;
  align-items: flex-end;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: none;
`;
const FooterItem = styled.li`
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.75;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;
const ShowMoreButton = styled(Button)`
  width: "50px";
`;

const SectionMoreProjects = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleShowMore = (e: MouseEvent<HTMLButtonElement>) => {
    setShowMore((prev) => !prev);
  };
  return (
    <Container>
      <Header>Other Noteworthy Projects</Header>
      <ContentContainer>
        {data.projects
          .slice(0, !showMore ? 6 : data.projects.length)
          .map((project, i) => {
            return (
              <Project
                key={project.title}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
              >
                <ProjectHeader>
                  <ProjectTop>
                    <Folder>
                      <BsFolder2 />
                    </Folder>
                    <Links>
                      <Github href={project.github} target="_blank">
                        <FaGithub />
                      </Github>
                      <Link href={project.link} target="_blank">
                        <BiLinkExternal />
                      </Link>
                    </Links>
                  </ProjectTop>
                  <Title>
                    <TitleLink
                      href={project.link || project.github}
                      target="_blank"
                    >
                      {project.title}
                    </TitleLink>
                  </Title>
                  <Description>{project.description}</Description>
                </ProjectHeader>
                <ProjectFooter>
                  <FooterList>
                    {project.tags.map((tag) => (
                      <FooterItem key={tag}>{tag}</FooterItem>
                    ))}
                  </FooterList>
                </ProjectFooter>
              </Project>
            );
          })}
      </ContentContainer>
      {data.projects.length > 6 && (
        <ShowMoreButton onClick={handleShowMore} size="lg">
          {showMore ? "Show Less" : "Show More"}
        </ShowMoreButton>
      )}
    </Container>
  );
};

export default SectionMoreProjects;
