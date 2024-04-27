import { PageNames } from "@/constants";
import { IRootLayoutProps, LeftPanelLayout } from "@/layouts";
import { IWithParams } from "@/types";

export default (props: IRootLayoutProps) => <LeftPanelLayout {...props} params={{page: PageNames.ABOUT_ME}}/>; // TODO подумать как сделать лучше