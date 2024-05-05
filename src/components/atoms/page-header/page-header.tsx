import './page-header.scss';
import '../../../styles/typography.scss'

export interface IPageHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: IPageHeaderProps) => {
    return <div className="page-header">
        <div className="page-header__title">
            <h1>{title}</h1>
        </div>
        <div className="page-header__subtitle">
            <h2>{subtitle}</h2>
        </div>
    </div>
}