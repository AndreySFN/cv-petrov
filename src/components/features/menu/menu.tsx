import { ActivePagesDictionary, PageNames, PageUrlsDictionary, PagesIconSrcDictionary } from "@/constants";
import { MenuOption } from "../../atoms/menu-option";
import './menu.scss';

export interface IMenuProps {
    route: string;
    isSmall?: boolean;
}

export const Menu = ({route: page, isSmall}: IMenuProps) => {
    return (
        <div className='menu'>
            {
                Object.values(PageNames).map((name) =>
                    <MenuOption
                        isDisabled={!ActivePagesDictionary.has(name)}
                        key={name}
                        title={name}
                        isSmall={isSmall}
                        smallTitle={PagesIconSrcDictionary[name]}
                        href={PageUrlsDictionary[name]}
                        isActive={page === PageUrlsDictionary[name]}
                    />)
            }
        </div>
    );
}