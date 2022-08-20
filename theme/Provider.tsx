import { FC, ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

interface StyledProviderProps {
  children: ReactNode;
}

export const StyledProvider: FC<StyledProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledProvider;
