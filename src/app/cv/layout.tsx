import type { Metadata } from "next";
import { LeftPanel } from "@/components/widgets/left-panel";
import { IWithChildren } from "@/types";
import './layout.scss'

export const metadata: Metadata = {
  title: "A.V. Petrov CV",
  description: "MIDDLE+/SENIOR FULLSTACK",
};

export default function RootLayout({ children }: IWithChildren) {
  return (
    <div className="container">
      <LeftPanel />
      <div className='container__content'>
        {children}
      </div>
    </div>
  );
}
