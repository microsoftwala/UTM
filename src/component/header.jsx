import React, { useEffect, useState } from "react";
import "../css/campaign.css";

const Header = () => {
  const [windowwidth, setWindowwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {" "}
      <div>
        {windowwidth < 890 && (
          <div>
            <div className="flex justify-center">
              <img src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg" alt="dsm-firmenich" className="image2" />
            </div>
            <div className="header"></div>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <h1>Tell us about your campaign</h1>
        {windowwidth >= 890 && (
          <img src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg" alt="dsm-firmenich" className="image1" />
        )}
      </div>
    </div>
  );
};

export default Header;
