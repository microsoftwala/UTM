import React, { useEffect, useState } from "react";
import "../css/campaign.css";

const Header = ({ on,onDisable }) => {
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
    <div className="md:pt-4">
      {" "}
      {on && (
        <div>
          {windowwidth < 768 && (
            <div>
              <div className="flex justify-center">
                <img
                  src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg"
                  alt="dsm-firmenich"
                  className="image2"
                />
              </div>
              <div className="header"></div>
            </div>
          )}
        </div>
      )}
      <div className="flex md:justify-between justify-center box pr-3">
        <h1>Tell us about your campaign</h1>
        {windowwidth >= 768 && on && (
          <img
            src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg"
            alt="dsm-firmenich"
            className="image1"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
