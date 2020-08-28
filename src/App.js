import React from 'react';
import './App.scss';
import './mobile.scss';
import Header from './components/header';
import Notification from './components/notification';
import Disclaimer from './components/disclaimer';
import About from './components/about';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import AvailabilityChecker from './components/availabilityChecker';
import ContactUs from './components/contactUs';
import GettingHere from './components/gettingHere';
import Footer from './components/footer';
import Social from './components/social';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Notification />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <GettingHere />
      <Section5 />
      <AvailabilityChecker />
      <About /> */}
      <Disclaimer />
      <ContactUs />
      {/* <Footer /> */}
      <Social />
    </div>
  );
}

export default App;

global.getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}