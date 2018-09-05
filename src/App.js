import React, { Component } from 'react';

import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" 
        style={{
            height: '1500px'
        }}  
      >
        <Header />
        
        <Element name="feature">
          <Featured />
        </Element>

        <Element name="venue">
          <VenueInfo />
        </Element>

        <Element name="highlights">
            <Highlights />
        </Element> 
          
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />

      </div>
    );
  }
}

export default App;
