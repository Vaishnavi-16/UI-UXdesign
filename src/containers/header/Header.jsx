import React from 'react';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import gdscsticker from '../../assets/gdscsticker.gif';
import gdmain from '../../assets/gdmain.png';
import './header.css';

const Header = () => (
 
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <h1><font color="white">Google Developer Student Clubs</font></h1>
      <p>Vishwakarma Institute Of Information Technology, Pune.</p><p> By joining a GDSC, students will grow their knowledge in a peer-to-peer learning environment and put theory to practice by building solutions for local businesses and their community.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button"><a href="https://gdsc.community.dev/vishwakarma-institute-of-information-technology-pune/">Get Started</a></button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Google Developer Student Clubs are now in 110+ countries with 1500+ groups and now at our campus too!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={gdscsticker} alt="loading..."/>
    </div>
  </div>
);

export default Header;
