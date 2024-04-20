import { IWithChildren } from "@/types";

export interface ISectionProps extends IWithChildren {
    title: string;
}

export const Section = ({ children, title }: ISectionProps) => {
    return (
        <div className="section">
            <div className="header">
                {title.toUpperCase()}
            </div>
            {children}
        </div>
    );
}