import main from '../assets/main.png';
import React from 'react';

export default function OfferSection() {
  return (
    <div className='OfferSection'>
   
            <div className='offer_container'>
                <div className='text_container'>    <h2>Что мы предлагаем</h2>
                <p className='offer_text'>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p></div>

            </div>

           
            <div className='velik'><img src={main}/></div>
    </div>
  )
}

