import React from "react";
import "../css/nopage.css";
import { useNavigate } from "react-router-dom";
import "../css/homescreen.css";


const Nopage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <div className="relative w-screen left-auto right-auto">
        <div className="flex justify-center">
          <img
            src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg"
            alt="dsm-firmenich"
            className="image "
          />
        </div>
      </div>
      <div className="body">
        <div class="error__container">
          <div class="error__code">
            <p className="p">4</p>
            <p className="p">0</p>
            <p className="p">4</p>
          </div>
          <div class="error__title">Page Not Found</div>
          <div class="error__description">
            We can't seem to find that page. It might have been removed or
            doesn't exist anymore.
          </div>
          <button className="button" onClick={() => navigate("/")}>Go Home</button>
        </div>
      </div>
    </div>
  );
};

export default Nopage;
