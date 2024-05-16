import Image from 'next/image'

import './under-construction.scss'
import '@styles/typography.scss'

export const UnderConstruction = () => {
  return <div className='under-construction'>
    <Image src='/under-construction.png' alt='The page is under construction' width={400} height={400} />
    <h2 className='--blue --bold'>
      It&apos;s nice that you have decided to vitis this page<br /> in spite of the fact that the button is disabled :)
    </h2>
    <h3 className='--blue --bold'>But the page is comming soon...</h3>
  </div>
}