import React from 'react'
import ServiceItem from './ServiceItem';

export default function ServiceSection() {
    const services = [
        {
            id: 1,
            title: 'Годовое ТО',
            color: '#22356F'
        },
        {
            id: 2,
            title: 'Выравнивание колес',
            color: '#0052C1'
        },
        {
            id: 3,
            title: 'Настройка переключателей',
            color: '#76B58B'
        }
    ]

    


  return (
    <div className='service_section_container'>
        <div className='service_items'>
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            title={service.title}
            color={service.color}

          />
        ))}
        </div>
        
    </div>
  )
}


