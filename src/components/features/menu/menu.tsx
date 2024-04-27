import { PageNames, PageUrlsDictionary, PagesIconSrcDictionary } from "@/constants";
import { MenuOption } from "../../atoms/menu-option";
import './menu.scss';

export interface IMenuProps {
    page: string;
    isSmall?: boolean;
}

export const Menu = ({page, isSmall}: IMenuProps) => {
    return (
        <div className='menu'>
            {
                Object.values(PageNames).map((name) =>
                    <MenuOption
                        key={name}
                        title={name}
                        isSmall={isSmall}
                        smallTitle={PagesIconSrcDictionary[name]}
                        href={PageUrlsDictionary[name]}
                        isActive={name === page}
                    />)
            }
        </div>
    );
}