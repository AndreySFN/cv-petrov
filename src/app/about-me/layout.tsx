import { PageNames } from "@/constants";
import { ILeftPanelLayoutProps, LeftPanelLayout } from "@/layouts";
import { IWithParams } from "@/types";

export default (props: ILeftPanelLayoutProps) => <LeftPanelLayout {...props} params={{page: PageNames.ABOUT_ME}}/>; // TODO подумать как сделать лучше