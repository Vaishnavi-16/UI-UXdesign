import React from 'react';
import profile from '../../assets/profile.png';
import './footer.css';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="https://gdsc.community.dev/vishwakarma-institute-of-information-technology-pune/">Connect with us</a></p>
    </div>
    <div className="gpt3__footer-btn">
      <p><a href="https://forms.gle/hvT8LFZLRJ1GPAqj9">Become a team member</a></p>
    </div>
{/* 
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
       <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div> */}
  

    <div className="gpt3__footer-copyright">
      <img src={profile}></img>
      <p><h3>Vaishnavi Pophale </h3><br></br>
      <h3>GDSC Lead</h3><br></br> vaishnavi.22010473@viit.ac.in</p>
      <br></br><br></br>
      <p>Vishwakarma Institute of Information Technology <br></br>
Survey No. 3/4, Kondhwa (Budruk)
Pune – 411048, Maharashtra (India)</p>
<br></br><br></br>
<p> <a href="https://www.instagram.com/gdscviit/" target="_blank"><BsInstagram /></a></p>

    </div>
  </div>
);

export default Footer;
