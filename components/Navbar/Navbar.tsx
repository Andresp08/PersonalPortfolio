import styled from "@emotion/styled";
import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { navBar as data } from "data/data";
import Button from "components/Button/Button";
import { FaListUl, FaAngleRight, FaRegCircle } from "react-icons/fa";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

type ContainerType = {
  navIsScroll: boolean;
  navInTop: boolean;
};

const Container = styled.div<ContainerType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: ${(props) => (props.navIsScroll ? 0 : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: ${(props) =>
    props.navInTop
      ? props.theme.space.navHeight
      : props.theme.space.navHeightScroll};
  background-color: rgba(10, 25, 47, 0.85);
  box-shadow: ${(props) =>
    !props.navInTop && "0 10px 30px -10px var(--navy-shadow)"};
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 768px) {
    background-color: rgba(21, 43, 75, 0.65);
    height: 50px;
    top: 0;
  }
`;

const Left = styled.div`
  color: ${(props) => props.theme.color.green};
  width: 42px;
  height: 41px;
  background-color: transparent;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-right: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
type NavItemType = {
  onClick?: MouseEventHandler<HTMLElement>;
};
const NavItem = styled.a<NavItemType>`
  margin-right: 8px;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 500;
  padding: 10px;
  counter-increment: item;
  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
  &::before {
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: var(--green);
    font-size: var(--fz-xxs);
    text-align: right;
  }
`;

type MenuControlType = {
  onClick: MouseEventHandler<SVGElement>;
};
const OpenMenu = styled(FaListUl)<MenuControlType>`
  font-size: var(--fz-xxl);
  color: var(--white);
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const CloseMenu = styled(FaAngleRight)<MenuControlType>`
  font-size: 30px;
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  padding: inherit;
  z-index: 1000;
  width: max-content;
  height: max-content;
`;

const DrawerMenu = styled(motion.div)`
  width: 300px;
  max-width: 90vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: var(--light-navy);
  display: none;
  z-index: 10;
  @media (max-width: 768px) {
    display: flex;
  }
`;
type OverlayType = {
  onClick: MouseEventHandler<HTMLElement>;
};
const Overlay = styled(motion.div)<OverlayType>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Logo = styled(FaRegCircle)`
  font-size: var(--fz-xxl);
  height: 100%;
`;
const MenuButton = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`;
let lastScroll = 0;

const drawerVariants = {
  visible: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};
const overlayVariants = {
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Navbar = () => {
  const [openDraw, setOpenDraw] = useState<boolean>(false);
  const [navIsScroll, setNavIsScroll] = useState<boolean>(true);
  const [navInTop, setNavInTop] = useState<boolean>(true);
  const controlAnimate = useAnimation();

  useEffect(() => {
    const checkIfScrolled = (e: Event) => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY) >= 100) {
        setNavInTop(false);
        if (scrollY > lastScroll) {
          // scrolling down
          setNavIsScroll(false);
        } else {
          // scrolling top
          setNavIsScroll(true);
        }
        lastScroll = Number(scrollY);
      } else {
        setNavInTop(true);
      }
    };
    document.addEventListener("scroll", checkIfScrolled);
    return () => {
      document.removeEventListener("scroll", checkIfScrolled);
    };
  }, []);
  const handleDrawerMenu = (e: MouseEvent<SVGElement | HTMLElement>) => {
    if (openDraw) {
      controlAnimate.start("exit");
    } else {
      controlAnimate.start("visible");
    }
    setOpenDraw((prev) => !prev);
  };
  return (
    <React.Fragment>
      {!openDraw && (
        <Container navIsScroll={navIsScroll} navInTop={navInTop}>
          <Left>
            <Logo />
          </Left>
          <Right>
            <NavList>
              {data.items.map((item, i) => {
                return (
                  <NavItem href={item.target} key={item.text}>
                    {item.text}
                  </NavItem>
                );
              })}
            </NavList>
            <MenuButton size="sm">
              {" "}
              <a href={data.button.target} target="_blank" rel="noreferrer">
                {data.button.text}{" "}
              </a>
            </MenuButton>
            <OpenMenu onClick={handleDrawerMenu} />
          </Right>
        </Container>
      )}
      <AnimatePresence exitBeforeEnter>
        {openDraw && (
          <React.Fragment>
            <DrawerMenu
              variants={drawerVariants}
              animate={"visible"}
              initial="exit"
              exit="exit"
              transition={{ ease: "linear", duration: 0.2, damping: 20 }}
            >
              <CloseMenu onClick={handleDrawerMenu} />
              {data.items.map((item, i) => {
                return (
                  <NavItem
                    href={item.target}
                    key={item.text}
                    onClick={handleDrawerMenu}
                  >
                    {item.text}
                  </NavItem>
                );
              })}
            </DrawerMenu>
            <Overlay
              onClick={handleDrawerMenu}
              variants={overlayVariants}
              animate={"visible"}
              initial="exit"
              exit="exit"
            />
          </React.Fragment>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Navbar;
