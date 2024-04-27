import { PageNames, PageUrlsDictionary } from "@/constants";
import { redirect } from "next/navigation";

export default function Page(){
    redirect(PageUrlsDictionary[PageNames.OVERVIEW]);
    return (<div></div>);
}