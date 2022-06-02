import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { RiMessengerFill } from 'react-icons/ri';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import '../styles//Footer.css';
function Footer() {
    return (
        <div className="footer">
            <div className="footerItem">Contact us</div>
            <div className="footerItem">
                <a
                    href="https://www.linkedin.com/in/tanimahossain/"
                    target="_blank"
                    className="linkedInIcon"
                >
                    <TiSocialLinkedinCircular />
                </a>{' '}
                <a
                    href="https://github.com/tanimahossain"
                    target="_blank"
                    className="githubIcon"
                >
                    <AiFillGithub />
                </a>{' '}
                <a
                    href="mailto:tanimahossain01@gmail.com"
                    target="_blank"
                    className="emailIcon"
                >
                    <MdAlternateEmail />
                </a>{' '}
                <a
                    href="https://www.messenger.com/t/tanima.hossain786"
                    target="_blank"
                    className="messengerIcon"
                >
                    <RiMessengerFill />
                </a>{' '}
                <a
                    href="tel: +880-1521-438996"
                    target="_blank"
                    className="callIcon"
                >
                    <FiPhoneCall />
                </a>
            </div>
        </div>
    );
}
//github
//call
export default Footer;
