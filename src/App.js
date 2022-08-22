import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, SocialMedia } from './components';

import './App.css';

const App = () => (
  
  <div className="App">
    <div className="gradient__bg">
    useEffect(() => {
    document.title = "GDSC-VIIT"
  }, [])
  
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    <SocialMedia/>
  </div>
);

export default App;