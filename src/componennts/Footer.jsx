import React from 'react';
import { dataHebrew } from '../text/Hebrew.jsx';
const Footer = () => {
    const headerFooterStyle = {
        backgroundColor: "#015C7C",
      };
  return (
    <footer style={headerFooterStyle}>
    <div className="container mx-auto text-center py-2  ">
      {/* Add footer content or links */}
      <p>
        &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
      </p>
    </div>
  </footer>

  );
};

export default Footer;
