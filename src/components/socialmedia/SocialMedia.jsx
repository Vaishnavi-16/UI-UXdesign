import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">

        <div>
            <a href="https://www.instagram.com/vaishnavi.1608/" target="_blank"><BsInstagram /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/vaishnavi-pophale-4a0037206/" target="_blank"><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://github.com/Vaishnavi-16" target="_blank"><BsGithub /></a>
        </div>
    </div>
);

export default SocialMedia;