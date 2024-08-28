import React from 'react';
import logo from '../assets/logo.png';
import din from '../assets/din.png';

function Header() {
  return (
    <header className="Header">
      <nav>
        <div className="logo"><img src={logo}/></div>
        <ul>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Аренда</li>
        </ul>
        <button className="appointment-button">Записаться</button>
      </nav>

        <h1>Веломастерская “Велозар”</h1>

        <div className="DinoContainer">      <p className='Description'>
        Мы, мастера веломастерской "Велозар", как раз те самые, счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим, чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
      </p> <img src={din}/></div>

    </header>
  );
}

export default Header;