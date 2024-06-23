import { ReactNode } from 'react'
export interface IListProps {
    items: Array<ReactNode | string>
    isNumbered?: boolean
}

export const List = ({ items, isNumbered = false }: IListProps) => {
  const ListType = isNumbered ? 'ol' : 'ul'
  return (<ListType>
    {items.map((item) => <li key={item?.toString()}>{item}</li>)} {/* TODO: проверить корректность работы с ReactNode  */}
  </ListType>)
}