import styles from './page-header.module.scss';
import '~styles/typography.module.scss';

export interface IPageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: IPageHeaderProps) => {
  return (
    <div className={styles['page-header']}>
      <div className={styles['page-header__title']}>
        <h1>{title}</h1>
      </div>
      {subtitle && (
        <div className={styles['page-header__subtitle']}>
          <h2>{subtitle}</h2>
        </div>
      )}
    </div>
  );
};
