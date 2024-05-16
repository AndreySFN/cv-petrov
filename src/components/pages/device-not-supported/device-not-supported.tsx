import Image from 'next/image'

import './device-not-supported.scss'
import '~styles/typography.scss'

export const DeviceNotSupported = () => {
  return <div className='device-not-supported'>
    <h2 className='--blue --bold'>Unfortunatley, your device is not supported yet</h2>
    <Image src='/assets/device-not-supported.png' alt='device not supported' width={300} height={300} />
    <h2 className='--blue --bold'>Site under construction. Please use desktop</h2>
  </div>
}