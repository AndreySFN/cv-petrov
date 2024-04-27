import { PageNames } from "@/constants";
import { IRootLayoutProps, LeftPanelLayout } from "@/layouts";
import { IWithParams } from "@/types";

export default (props: IRootLayoutProps) => <LeftPanelLayout {...props} params={{page: PageNames.WORK_EXPIRIENCE}}/>;