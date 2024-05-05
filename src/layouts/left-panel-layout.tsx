'use client'
import "@/styles/globals.css";
import './left-panel-layout.scss';
import { ILeftPanelProps, LeftPanel } from "@/components/widgets/left-panel";
import { IMenuProps } from "@/components/features/menu/menu";
import { IWithParams } from "@/types";
import { PageNames } from "@/constants";
import { PageHeader } from "@/components/atoms";
import { getExperiencePeriod } from "@/utils";
import { useState } from "react";

// TODO: Move margins to left panel

export interface ILeftPanelLayoutProps extends IWithParams<ILeftPanelProps> { }

export const LeftPanelLayout = ({ children, params }: ILeftPanelLayoutProps) => {
  return (
    <div className='left-panel-layout'>
      <LeftPanel page={params.page} /> {/* TODO Слишком длинный спуск? */}
      <div className='left-panel-layout__content'>
        <PageHeader title={params.page} subtitle={getExperiencePeriod()} />
        {children}
      </div>
    </div>
  );
}
