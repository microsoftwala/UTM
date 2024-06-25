import React, { useState, useEffect } from "react";
import "../css/campaign.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import Header from "../component/header";
import data from "../component/plateformData";
import { motion } from "framer-motion";
import animation from "../component/animation";
import PreviewButton from "../component/previewbutton";

const Plateform = () => {
  const navigate = useNavigate();
  const {
    businessUnit,
    selectedCampaign,
    selectedPlateform,
    setSelectedPlateform,
    firstarray,
    checkfordisplay,
    setCheckfordisplay,
    setLastroute,
  } = useGlobalState();

  setLastroute("/plateform");

  const [windowwidth, setWindowwidth] = useState(window.innerWidth);

  const [buttonClass, setButtonClass] = useState(() =>
    windowwidth > 840
      ? "buttons-grid4 mx-10 mb-10"
      : "buttons-grid5 mx-20 mb-10"
  );

  const handleplateformsUnitChange = (event) => {
    setSelectedPlateform(event.target.value);
    handleClick(event.target.value);
  };
  const handleClick = (campaign) => {
    setSelectedPlateform(campaign);
    if (campaign === "Display Other") {
      setCheckfordisplay(true);
      return;
    }
    navigate("/business");
  };

  const plateForm1 = ["Google"];
  const plateForm2 = ["Facebook", "Twitter", "Instagram", "LinkedIn"];
  const plateForm3 = ["Google", "Display Other"];
  const plateForm4 = ["Marketo", "Web Power", "NewsLetter"];
  const plateForm5 = ["Youtube"];
  const plateForm6 = ["QR Code", "Trade Media"];

  const { Human_Nutrition, TTH_ISOL } = data;

  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
      if (window.innerWidth < 840) {
        setButtonClass("mx-20 buttons-grid5 mb-10");
      } else {
        setButtonClass("mx-10 buttons-grid4 mb-10");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goBack = () => {
    navigate("/campaign");
  };

  const { fadeTransition, fadeVariants } = animation;
  return (
    <motion.div
      className="container1"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
    <Header />

      <p className="title font-bold md:ml-8 ml-4"> Choose your parameters</p>

      <p className="subtitle md:ml-8 ml-4 mt-4">
        The selection below will set the value in "utm_sources" parameters
      </p>

      <div className="mb-20">
        <div className={buttonClass}>
          {selectedCampaign === "Search" && (
            <>
              {" "}
              {plateForm1.map((plateform, ind) => (
                <button
                  key={ind}
                  className={"campaign-button"}
                  onClick={() => handleClick(plateform)}
                >
                  {plateform}
                </button>
              ))}
            </>
          )}

          {(selectedCampaign === "Paid Social" ||
            selectedCampaign === "Organic Social") && (
            <>
              {" "}
              {plateForm2.map((plateform, ind) => (
                <button
                  key={ind}
                  className={"campaign-button"}
                  onClick={() => handleClick(plateform)}
                >
                  {plateform}
                </button>
              ))}
            </>
          )}

          {selectedCampaign === "Display" && (
            <>
              {" "}
              {(businessUnit === "TTH ISOL" ||
                businessUnit === "Human Nutrition") && (
                <>
                  {plateForm3.map((plateform, ind) => (
                    <button
                      key={ind}
                      className={"campaign-button"}
                      onClick={() => handleClick(plateform)}
                    >
                      {plateform}
                    </button>
                  ))}
                </>
              )}
              {(businessUnit === "Biomedical" ||
                businessUnit === "Animal Health & Nutrition" ||
                businessUnit === "Personal Care") && (
                <>
                  {plateForm1.map((plateform, ind) => (
                    <button
                      key={ind}
                      className={"campaign-button"}
                      onClick={() => handleClick(plateform)}
                    >
                      {plateform}
                    </button>
                  ))}
                </>
              )}
            </>
          )}

          {selectedCampaign === "Emailer" && (
            <>
              {" "}
              {plateForm4.map((plateform, ind) => (
                <button
                  key={ind}
                  className={"campaign-button"}
                  onClick={() => handleClick(plateform)}
                >
                  {plateform}
                </button>
              ))}
            </>
          )}

          {selectedCampaign === "Video" && (
            <>
              {" "}
              {plateForm5.map((plateform, ind) => (
                <button
                  key={ind}
                  className={"campaign-button"}
                  onClick={() => handleClick(plateform)}
                >
                  {plateform}
                </button>
              ))}
            </>
          )}

          {selectedCampaign === "Print" && (
            <>
              {" "}
              {plateForm6.map((plateform, ind) => (
                <button
                  key={ind}
                  className={"campaign-button"}
                  onClick={() => handleClick(plateform)}
                >
                  {plateform}
                </button>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center">
          {businessUnit === "Human Nutrition" &&
            firstarray === "Human Nutrition" &&
            checkfordisplay && (
              <select
                id="businessUnit"
                value={selectedPlateform}
                onChange={handleplateformsUnitChange}
              >
                {Human_Nutrition.map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            )}

          {businessUnit === "TTH ISOL" &&
            firstarray === "TTH ISOL" &&
            checkfordisplay && (
              <select
                id="selectedPlateform"
                value={selectedPlateform}
                onChange={handleplateformsUnitChange}
              >
                {TTH_ISOL.map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            )}
        </div>
      </div>

      <div className="mt-36 w-full relative">
        <IoArrowBackCircleOutline
          className="md:text-6xl text-5xl text-blue-700 cursor-pointer font-semibold"
          onClick={() => goBack()}
        />
        <div className="absolute right-1 md:text-4xl text-3xl bottom-2">
          <PreviewButton />
        </div>
      </div>
    </motion.div>
  );
};

export default Plateform;
