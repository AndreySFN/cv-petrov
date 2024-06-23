import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './iconed-link.module.scss';

export interface IIconedRecordProps {
  iconSrc?: string;
  href?: string;
  text: string;
  bold?: boolean;
}

export const IconedRecord = ({ href, iconSrc, text, bold = false }: IIconedRecordProps) => {
  const iconedRecordClasses = classNames(styles['iconed-record'], {
    [styles['iconed-record--blue']]: true,
    [styles['iconed-record__text--bold']]: bold
  });

  const Content = () => (
    <div className={iconedRecordClasses}>
      <div className={styles['iconed-record__icon']}>
        {iconSrc && <Image src={iconSrc} alt={text} height={50} width={50} />}
      </div>
      <div className={styles['iconed-record__text']}>
        <h2 className={bold ? styles['iconed-record__text--bold'] : ''}>{text}</h2>
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
