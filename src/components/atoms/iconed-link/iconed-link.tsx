import Link from 'next/link'
import Image from 'next/image'
import './iconed-link.scss'

export interface IIconedLinkProps {
    iconSrc: string;
    href: string;
    text: string;
}

export const IconedLink = ({ href, iconSrc, text }: IIconedLinkProps) => {
    return <Link href={href}><div className='iconed-link'>
        <span className='iconed-link__icon'>
            <Image src={iconSrc} alt={text} height={50} width={50} />
        </span>
        <span className='iconed-link__text'>
            {text}
        </span>
    </div>
    </Link>
}