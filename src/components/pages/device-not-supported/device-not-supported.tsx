import Image from 'next/image'

import '~styles/typography.scss'
import './device-not-supported.scss'

export const DeviceNotSupported = () => {
  return (
    <div className='device-not-supported'>
      <h2 className='--blue --bold'>Unfortunately, your device is not supported yet</h2>
      <Image src='/assets/device-not-supported.png' alt='device not supported' width={300} height={300} />
      <h2 className='--blue --bold'>Site under construction. Please use desktop</h2>
    </div>
  )
}
