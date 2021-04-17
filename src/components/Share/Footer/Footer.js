import React from 'react';
import './Footer.css';
import FooterCol from "../FooterCol/FooterCol";


const Footer = () => {
    const noNamed = [
        {name: "H#00(0th Floor), Road #00, Bogura, Bangladesh" },
    ]
    const AboutUs = [
        {name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consectetur voluptatum, atque eligendi possimus quis provident delectus dolore vero accusamus."}
       
    ]
    const Company = [
        {name: "About"},
        {name: "Project" , link: "/Project"},
        {name: "Our Team" , link: "/Our Team"},
        {name: "Terms Condition" , link: "/Terms Condition"},
        {name: "Submit Listing" , link: "/Submit Listing"},
    ]
    const QuickLinks = [
        {name: "Quick Links" , link: "/emergency"},
        {name: "Rentals" , link: "/checkup"},
        {name: "Sales" , link: "/personal-treatment"},
        {name: "Contact" , link: "/tooth-extract"},
        {name: "Our Blog" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both ">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Company" menuItems={Company}/>
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={QuickLinks}/>
                    <FooterCol key={4} menuTitle="About Us" menuItems={AboutUs}> 
                        
                        <div className="mt-2">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;