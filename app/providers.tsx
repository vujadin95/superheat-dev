"use client";
import { ThemeProvider } from "next-themes";

interface ProvidersType {
  children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: ProvidersType) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      enableColorScheme={true}
    >
      {children}
    </ThemeProvider>
  );
};
export default Providers;
