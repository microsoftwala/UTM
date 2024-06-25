import React, { useState, useEffect } from "react";
import "../css/campaign.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import Header from "../component/header";
import campaignTypesData from "../component/campaignData";
import { motion } from "framer-motion";
import animation from "../component/animation";
import PreviewButton from "../component/previewbutton";

const Campaign = () => {
  const { businessUnit, setSelectedCampaign, setFirstarray, setLastroute } =
    useGlobalState();
  setLastroute("/campaign");
  const [windowwidth, setWindowwidth] = useState(window.innerWidth);

  const handleClick = (campaign) => {
    setSelectedCampaign(campaign);
    if (businessUnit === "Human Nutrition") {
      setFirstarray("Human Nutrition");
    } else if (businessUnit === "TTH ISOL") {
      setFirstarray("TTH ISOL");
    }
    navigate("/plateform");
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
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const { fadeTransition, fadeVariants } = animation;

  return (
    <motion.div
      className="container1 "
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <Header />

      <p className="title font-bold md:ml-8 ml-4"> Choose your campaign type</p>
      <p className="subtitle md:ml-8 ml-4 mt-4">
        The selection below will set the value in "utm_medium" parameters
      </p>
      <div className="all_types">
        {windowwidth >= 650 && (
          <>
            <div className="buttons-grid">
              {campaignTypes.map((campaign, ind) =>
                ind < 4 ? (
                  <button
                    key={ind}
                    className={"campaign-button"}
                    onClick={() => handleClick(campaign)}
                  >
                    {campaign}
                  </button>
                ) : null
              )}
            </div>
            <div className="buttons-grid1">
              {campaignTypes.map((campaign, ind) =>
                ind < 7 && ind >= 4 ? (
                  <button
                    key={ind}
                    className={"campaign-button"}
                    onClick={() => handleClick(campaign)}
                  >
                    {campaign}
                  </button>
                ) : null
              )}
            </div>
            <div className="buttons-grid2">
              {campaignTypes.map((campaign, ind) =>
                ind >= 7 ? (
                  <button
                    key={ind}
                    className={"campaign-button"}
                    onClick={() => handleClick(campaign)}
                  >
                    {campaign}
                  </button>
                ) : null
              )}
            </div>
          </>
        )}
        {windowwidth < 650 && (
          <>
            <div className="mb-20">
              <div className="buttons-grid3 mx-10">
                {campaignTypes.map((campaign, ind) => (
                  <button
                    key={ind}
                    className={"campaign-button"}
                    onClick={() => handleClick(campaign)}
                  >
                    {campaign}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="relative w-full">
        <IoArrowBackCircleOutline
          className="md:text-6xl text-5xl text-blue-700 cursor-pointer font-semibold"
          onClick={() => goBack()}
        />
        <div className="absolute right-1 md:text-4xl text-3xl bottom-1">
          <PreviewButton />
        </div>
      </div>
    </motion.div>
  );
};

export default Campaign;
