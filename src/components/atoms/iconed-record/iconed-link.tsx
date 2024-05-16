import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import './iconed-link.scss';
import '~styles/typography.scss';

export interface IIconedRecordProps {
  iconSrc?: string;
  href?: string;
  text: string;
  bold?: boolean;
}

export const IconedRecord = ({ href, iconSrc, text, bold = false }: IIconedRecordProps) => {
  const iconedRecordClasses = classNames('iconed-record', {
    '--blue': true, // Always apply the blue color class
    '--bold': bold // Apply the bold class conditionally based on the prop
  });

  const Content = () => (
    <div className={iconedRecordClasses}>
      <div className='iconed-record__icon'>
        {iconSrc && <Image src={iconSrc} alt={text} height={50} width={50} />}
      </div>
      <div className='iconed-record__text'>
        <h2 className={bold ? '--bold' : ''}>{text}</h2>
      </div>
    </div>
  );

  return (
    <>
      {href ? (
        <Link href={href} target='_blank'>
          <Content />
        </Link>
      ) : (
        <Content />
      )}
    </>
  );
};
