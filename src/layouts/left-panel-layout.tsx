import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import './left-panel-layout.scss';
import { ILeftPanelProps, LeftPanel } from "@/components/widgets/left-panel";
import { IMenuProps } from "@/components/features/menu/menu";
import { IWithParams } from "@/types";
import { PageNames } from "@/constants";

// TODO: Move margins to left panel

export interface ILeftPanelLayoutProps extends IWithParams<ILeftPanelProps> { }

export const LeftPanelLayout = ({ children, params }: ILeftPanelLayoutProps) => {
  return (
    <>
      <LeftPanel page={params.page} /> {/* TODO Слишком длинный спуск? */}
      <div className="content">
        {children}
      </div>
    </>
  );
}
