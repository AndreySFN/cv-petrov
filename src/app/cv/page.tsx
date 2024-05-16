import { redirect } from 'next/navigation';

import { PageNames, PageUrlsDictionary } from '~src/constants';

export default function Page(){
  redirect(PageUrlsDictionary[PageNames.OVERVIEW]);
}