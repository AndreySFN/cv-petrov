import Link from 'next/link'
import Image from 'next/image'
import './iconed-link.scss'
import '../../../styles/typography.scss'

export interface IIconedRecordProps {
    iconSrc?: string;
    href?: string;
    text: string;
    bold?: boolean
}

export const IconedRecord = ({ href, iconSrc, text, bold = false }: IIconedRecordProps) => {

    const Content = () => <div className='iconed-record'>
        <div className='iconed-record__icon'>
            {iconSrc && <Image src={iconSrc} alt={text} height={50} width={50} />}
        </div>
        <div className='iconed-record__text'>
            <h2 className={`--blue ${bold && '--bold'}`}>{text}</h2>
        </div>
    </div>

    return <>
        {
            href ? <Link href={href}>
                <Content/>
            </Link> :
            <Content/>
        }
    </>
}