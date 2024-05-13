'use client' // TODO: Пересмотреть
import type { Metadata } from "next";
import { LeftPanel } from "@/components/widgets/left-panel";
import { IWithChildren } from "@/types";
import './layout.scss'
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: IWithChildren) {
  const route = usePathname()
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const handleBtnClick = () => setIsOpened(prev => !prev);

  return (
    <div className="container">
      <LeftPanel
        isOpened={isOpened}
        route={route}
        setIsOpened={setIsOpened}
      />
      <div className={`container__wrapper ${!isOpened && '--hidden'}`} onClick={handleBtnClick}/>
      <div className='container__content'>
        {children}
      </div>
    </div>
  );
}
