import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GDSC-VIIT ?" text="Google Developer Student Club will gie you the chance to gain mentorship from Google,
join a global community of leaders, practice by sharing your skills, help students grow by build solutions for real life problems."></Feature>



    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">How will I improve my skills?</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Connect" text="Meet students interested in developer technologies at our university. All are welcome, including those with diverse backgrounds" />
      <Feature title="Learn" text="Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities" />
      <Feature title="Grow" text="Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to our community by helping others learn, too." />
    </div>
  </div>
);

export default WhatGPT3;
