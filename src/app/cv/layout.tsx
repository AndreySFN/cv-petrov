'use client' // TODO: Пересмотреть
import type { Metadata } from "next";
import { LeftPanel } from "@/components/widgets/left-panel";
import { IWithChildren } from "@/types";
import './layout.scss'
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: IWithChildren) {
  const route = usePathname()
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const handleBtnClick = () => setIsClosed(prev => !prev);

  return (
    <div className="container">
      <LeftPanel
        isClosed={isClosed}
        route={route}
        setClosed={setIsClosed}
      />
      <div className={`container__wrapper ${isClosed && '--hidden'}`} onClick={handleBtnClick}/>
      <div className='container__content'>
        {children}
      </div>
    </div>
  );
}
