import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterDesktop = () => {
    return (
        <footer className="text-white py-6 ">
            <div className="container mx-auto flex justify-between">
                {/* First Column */}
                <div className="flex-1 flex flex-col items-center">
                    <h2 className="font-bold text-2xl">Gokul R: +91 93849 18930</h2>
                </div>
                {/* Second Column */}
                <div className="flex-1 flex flex-col items-center">
                   
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/cyber_carnival_srmrmp/" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/cyber-carnival-srm-ramapuram-71a63a2b1/" aria-label="Linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="mailto:hello@cybercarnival.in?subject=CyberCarnival2025" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} size='2x' />
                        </a>
                    </div>
                </div>
                {/* Third Column */}
                <div className="flex-1 flex flex-col items-center">
                    <h2 className="font-bold text-2xl">Vignesh M : +91 98221 28899</h2>
                </div>
            </div>
        </footer>
    );
};

export default FooterDesktop;