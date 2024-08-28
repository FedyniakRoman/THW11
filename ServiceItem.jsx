import React from 'react'

export default function ServiceItem({title, color}) {
  return (
    <div className='service_item' style={{ backgroundColor: color }}>
        <div className='items-container'>
          <div className='line'></div>
          <h3 className='title'>{title}</h3>
        </div>

    </div>
  )
};

