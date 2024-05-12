import { ActivePagesDictionary, PageNames, PageUrlsDictionary, PagesIconSrcDictionary } from "@/constants";
import { MenuOption } from "../../atoms/menu-option";
import './menu.scss';
import { TStateSetter } from "@/types";

export interface IMenuProps {
    route: string;
    isSmall?: boolean;
    setIsClosed: TStateSetter<boolean>;
}

export const Menu = ({route: page, isSmall, setIsClosed}: IMenuProps) => {
    return (
        <div className={`menu ${isSmall && '--short'}`}>
            {
                Object.values(PageNames).map((name) =>
                    <MenuOption
                        isDisabled={!ActivePagesDictionary.has(name)}
                        key={name}
                        title={name}
                        isSmall={isSmall}
                        smallTitle={PagesIconSrcDictionary[name]}
                        href={PageUrlsDictionary[name]}
                        onClick={() => setIsClosed(true)}
                        isActive={page === PageUrlsDictionary[name]}
                    />)
            }
        </div>
    );
}