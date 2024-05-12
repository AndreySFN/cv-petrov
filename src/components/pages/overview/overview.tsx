import './overview.scss'
import { IconedRecord, List, PageHeader, TitledBlock, WorkExpTitle } from '@/components/atoms'
import { LangCard, WorkExpCard } from '@/components/molecules'
import { CONTACTS, LANGUAGES, POSITION, TECH_AND_SKILLS, WORK_EXPERIENCE } from '@/constants'
import { IWithChildren } from '@/types'
import { getExperiencePeriod } from '@/utils'


const OverviewBlock = ({ children }: IWithChildren) => {
    return <div className='overview__block'>
        {children}
    </div>
}

export const Overview = () => {
    return <>
        <PageHeader title={POSITION} subtitle={getExperiencePeriod()} />
        <div className='overview'>
            <div className='overview__main'>
                <TitledBlock title='Main stack:'>
                    <OverviewBlock>
                        <IconedRecord iconSrc='/tech/typescript.png' text='TypeScript' bold />
                        <IconedRecord iconSrc='/tech/react.png' text='React.js' bold />
                        <IconedRecord iconSrc='/tech/redux.png' text='Redux.js' bold />
                        <IconedRecord iconSrc='/tech/next.png' text='Next.js' bold />
                        <IconedRecord iconSrc='/tech/node.png' text='Node.js' bold />
                    </OverviewBlock>
                </TitledBlock>
                <TitledBlock title='Work experience:'>
                    <OverviewBlock>
                        {WORK_EXPERIENCE.map(({ titleProps }) => <WorkExpCard key={titleProps.startDate.toString()} {...titleProps} />)}
                    </OverviewBlock>
                </TitledBlock>
                <TitledBlock title='Languages:'>
                    <OverviewBlock>
                        {LANGUAGES.map((props) => <LangCard key={props.lang} {...props} />)}
                    </OverviewBlock>
                </TitledBlock>
                <TitledBlock title='Contacts:'>
                    <OverviewBlock>
                        {CONTACTS.map((props) => <IconedRecord key={props.text} {...props} />)}
                    </OverviewBlock>
                </TitledBlock>
            </div>
            {/* <TitledBlock title='More technologies and skills:'>
                <List items={TECH_AND_SKILLS}/>
            </TitledBlock> */}
        </div>
    </>
}