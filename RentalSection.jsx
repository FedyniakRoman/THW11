import React from 'react';
import footer from '../assets/footer.png';

export default function RentalSection() {
  return (
    <div className='rental-section'>
        
           <div className="footer-foto"><img src={footer}/></div>
           <div className='footer-text'>
            <p>Прокат велосипедов</p>
            <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
           </div>
   
      
    </div>
  )
}

