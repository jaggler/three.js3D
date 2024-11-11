import React from 'react';

const Footer = () => {
    return (
        <section
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            {/* Terms & Conditions and Privacy Policy */}
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-6 h-6"/>
                </div>
                <div className="social-icon">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6"/>
                </div>
                <div className="social-icon">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6"/>
                </div>
            </div>
            <p className="text-gray-500 text-sm mt-3 w-full text-center">
                © 2024 Peace. All rights reserved.
            </p>
        </section>
    );
};

export default Footer;
