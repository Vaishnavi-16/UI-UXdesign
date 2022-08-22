import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Gain mentorship from Google.',
    text: 'Dont miss out the chance for becoming the campus facilitator for various google technologies',
  },
  {
    title: 'Join a global community of leaders.',
    text: 'Our prime focus is to learn and disseminate knowledge.',
  },
  {
    title: 'Practice by sharing your skills.',
    text: 'We will not only focus on conducting events but also to propagate learning and work for building a person profile.',
  },
  {
    title: 'Help students grow.',
    text: 'Together, students learn the latest in Machine Learning, Android App Development, Google Cloud Platform, Flutter, and so much more.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
      If you want to upgrade yourself with the Google technologies and join the technical community, you are at the right place!</h1>
    
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
