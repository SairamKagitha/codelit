import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onine Compiler - CodeLit",
  description: "CodeLit - Online Compilers",
};

const CompilerLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CompilerLayout;
