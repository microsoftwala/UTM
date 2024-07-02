import React, { useState, useEffect } from "react";
import "../css/campaign.css";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import data from "../component/plateformData";
import { motion } from "framer-motion";
import animation from "../component/animation";
import PreviewButton from "../component/previewbutton";
import Footer from "../component/footer";
import Continue from "../component/continue";

const Plateform = ({ onDisable }) => {
  const navigate = useNavigate();
  const {
    businessUnit,
    selectedCampaign,
    selectedPlateform,
    setSelectedPlateform,
    firstarray,
    checkfordisplay,
    setCheckfordisplay,
    // setLastroute,
  } = useGlobalState();

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
    if (
      campaign === "Display Other" ||
      campaign === "Choose_data"
    ) {
      alert("Choose Display Other Parameter First !!!");
      return;
    }
    navigate("/business&category&parameter");
  };

  // const handleNextPage = () => {};

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
        setButtonClass("mx-10 buttons-grid5 mb-10");
      } else {
        setButtonClass("mx-10 buttons-grid4 mb-10");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { fadeTransition1, fadeVariants } = animation;
  return (
    <motion.div
      // className="container1"
      className="mt-16 flex flex-col h-full"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition1}
    >
      <div>
        <p className="title font-bold md:ml-8 ml-4 flex justify-center md:justify-start">
          {" "}
          Choose your platform
        </p>

        <p className="subtitle md:ml-8 ml-4 mt-4 flex justify-center md:justify-start">
          The selection below will set the value in "utm_sources" platforms
        </p>
      </div>

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
                id="selectedPlateform"
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

      <div className="relative flex justify-center items-center pt-14 mb-8">
        <Footer goBack={() => onDisable()} onDisable={false} />
        {/* {selectedPlateform.length > 0 && (
          <Continue handleClick={handleNextPage} onDisable={false} />
        )} */}
        <div className="absolute right-1 md:text-4xl text-3xl">
          <PreviewButton onDisable={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default Plateform;
