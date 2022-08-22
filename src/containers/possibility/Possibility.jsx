import React from 'react';
import dev from '../../assets/dev.gif';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={dev} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Needless to say, DSC brings together the educational and professional opportunities, and students from all over India to directly brighten their future by helping them find accessible links and easy-to-follow steps guides. So, if you’re looking for a learning opportunity, we've got you covered!</p>
      <h4>Join us!</h4>
    </div>
  </div>
);

export default Possibility;
