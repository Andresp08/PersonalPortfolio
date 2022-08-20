export type NavBar = {
  button: {
    text: string;
    target: string;
  };
  items: {
    text: string;
    target: string;
  }[];
};
export type SectionOne = {
  id: string;
  badge: string;
  name: string;
  slogan: string;
  desc: string;
  button: {
    text: string;
    target: string;
  };
};
export type Social = {
  github: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  codepen: string;
};
export type SectionAboutMe = {
  show: boolean;
  id: string;
  title: string;
  desc: string;
  list: string[];
  picture: string;
};
export type SectionWork = {
  show: boolean;
  title: string;
  id: string;
  tabs: {
    tabName: string;
    content: {
      title: string;
      company: { name: string; link: string };
      date: string;
      contentList: string[];
    };
  }[];
};
export type SectionProjects = {
  show: boolean;
  id: string;
  title: string;
  projects: {
    image: string;
    badge: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    direction: "rtl" | "ltr";
  }[];
};
export type SectionMoreProjects = {
  show: boolean;
  id: string;
  title: string;
  projects: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
  }[];
};
export type SectionCodingActivity = {
  title: string;
  id: string;
  number: number;
  src: string[];
};
export type SectionContact = {
  show: boolean;
  id: string;
  badge: string;
  title: string;
  description: string;
  buttons: { text: string; target: string }[];
};
export type DataType = {
  navBar: NavBar;
  sectionOne: SectionOne;
  social: Social;
  email: string;
  sectionAboutMe: SectionAboutMe;
  sectionWork: SectionWork;
  sectionProjects: SectionProjects;
  sectionMoreProjects: SectionMoreProjects;
  sectionCodingActivity: SectionCodingActivity;
  sectionContact: SectionContact;
};
