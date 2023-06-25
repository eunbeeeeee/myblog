import React from 'react';
import logo from "../../img/eunbee.png";
import  "./footer.css";

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container text-center top">
                <div className="img">
                    <img src={logo} alt={logo} />
                </div>
                <p>&copy; 2023. All right reserved. design by BBeaKim!</p>
            </div>   
        </footer>
        </>
    );
};

export default Footer;