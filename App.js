import React from 'react';
import './style.css';
import Header from './components/Header';
import OfferSection from './components/OfferSection';
import DescriptionSection from './components/DescriptionSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import RentalSection from './components/RentalSection';


function App() {
  return (

        <div className='App'>

            <Header />
            <OfferSection />
            <DescriptionSection />
            <ServiceSection />
            <RentalSection />






        </div>
  );
}

export default App;