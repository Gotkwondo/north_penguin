import React from 'react';

interface IconBodyInterface {
  width: number
  height: number
  IconUrl: string
}

const IconBody = ({ width, height, IconUrl }: IconBodyInterface) => {
  return (
    <div className='IconBody'>
      <img src={ IconUrl } alt="" width={`${width}`} height={`${height}`}/>
    </div>
  )
}

export default IconBody;