import React, { useState, useEffect } from "react";
import "../css/campaign.css";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import Header from "../component/header";
import campaignTypesData from "../component/campaignData";
import { motion } from "framer-motion";
import animation from "../component/animation";
import PreviewButton from "../component/previewbutton";
import Footer from "../component/footer";
import Continue from "../component/continue";
import Plateform from "./plateform";
import ShowNavBar from "../component/showNavbar";

const Campaign = () => {
  const navigate = useNavigate();
  const {
    businessUnit,
    setSelectedCampaign,
    setFirstarray,
    setLastroute,
    selectedCampaign,
    onDisable,
    setOndisable,
    setOndisable1,
    setOndisable2,
  } = useGlobalState();
  setLastroute("/campaign&platform");

  const [windowwidth, setWindowwidth] = useState(window.innerWidth);
  const [showNav, setShownav] = useState(true);
  setOndisable1(false); //for category
  setOndisable2(false); //for parameter
  const handleClick = () => {
    // navigate("/plateform");
    // setOndisable(true);
  };

  const changeOndisable = () => {
    setOndisable(false);
  };

  if (businessUnit === "Select a Business Unit") {
    navigate("/");
  }

  const handleCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    if (businessUnit === "Human Nutrition") {
      setFirstarray("Human Nutrition");
    } else if (businessUnit === "TTH ISOL") {
      setFirstarray("TTH ISOL");
    }
    setOndisable(true);
  };

  const campaignTypes = campaignTypesData;

  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowwidth]);

  const { fadeTransition, fadeVariants } = animation;

  return (
    <motion.div
      className="container1 h-screen flex flex-col"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <div className="fixed bg-white z-10">
        <Header on={true} onDisable={onDisable} />
      </div>
      <div className="relative">
        <div className="fixed left-3 md:top-8 top-10 z-20">
          <ShowNavBar showNav={showNav} setShownav={setShownav} />
        </div>
      </div>
      <div className={`${windowwidth > 780 ? "mt-24" : "mt-56"}`}>
        <p
          className={
            onDisable
              ? "titledisable font-bold md:ml-8 ml-4 flex md:justify-start justify-center"
              : "title font-bold md:ml-8 ml-4 flex md:justify-start justify-center"
          }
        >
          {" "}
          Choose your campaign type
        </p>
        <p
          className={
            onDisable
              ? "subtitledisable md:ml-8 ml-4 mt-4 flex md:justify-start justify-center"
              : "subtitle md:ml-8 ml-4 mt-4 flex md:justify-start justify-center"
          }
        >
          The selection below will set the value in "utm_medium" parameters
        </p>
      </div>
      <div className="all_types mt-auto mb-auto">
        {windowwidth >= 840 && (
          <>
            <div className="buttons-grid">
              {campaignTypes.map((campaign, ind) => (
                <button
                  key={ind}
                  className={
                    onDisable ? "campaign-button-disable " : "campaign-button "
                  }
                  onClick={() => handleCampaign(campaign)}
                  disabled={onDisable}
                >
                  {campaign}
                </button>
              ))}
            </div>
          </>
        )}
        {windowwidth < 840 && (
          <>
            <div className="mb-20">
              <div className="buttons-grid3 mx-10">
                {campaignTypes.map((campaign, ind) => (
                  <button
                    key={ind}
                    className={
                      onDisable ? "campaign-button-disable" : "campaign-button"
                    }
                    onClick={() => handleCampaign(campaign)}
                    disabled={onDisable}
                  >
                    {campaign}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="relative flex justify-center items-center pt-14 mb-10 md:mb-0">
        <Footer goBack={() => navigate("/")} onDisable={onDisable} />
        {/* {selectedCampaign.length > 0 && (
          <Continue handleClick={handleClick} onDisable={onDisable} />
        )} */}
        <div className="absolute right-1 md:text-4xl text-3xl">
          <PreviewButton onDisable={onDisable} />
        </div>
      </div>

      {onDisable && <Plateform onDisable={changeOndisable} />}
    </motion.div>
  );
};

export default Campaign;
