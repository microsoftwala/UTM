import React from "react";
import "../css/campaign.css";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import data from "../component/categorydata";
import { motion } from "framer-motion";
import animation from "../component/animation";
import Footer from "../component/footer";
import Continue from "../component/continue";
import PreviewButton from "../component/previewbutton";

const Cateogory = ({ changeOndisable1, changeOndisable2 }) => {
  const {
    businessUnit,
    specie,
    setSpecie,
    cateogory,
    setCateogory,
    setLastroute,
    onDisable2,
  } = useGlobalState();

  setLastroute("/business&category&parameter");
  const handleClick = (campaign) => {
    if (
      specie === "" &&
      Types_for_Species[businessUnit][0] !== "Not Applicable"
    ) {
      setSpecie(Types_for_Species[businessUnit][0]);
    }
    if (
      cateogory === "" &&
      Types_for_Category[businessUnit][0] !== "Not Applicable"
    ) {
      setCateogory(Types_for_Category[businessUnit][0]);
    }
    // navigate("/parameter");
    changeOndisable2();
  };

  const { Types_for_Species, Types_for_Category } = data;

  const navigate = useNavigate();

  const { fadeTransition, fadeVariants } = animation;
  return (
    <motion.div
      // className="container1"
      className="mt-16 flex flex-col"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      {/* <Header /> */}

      <div className="mt-16 mb-16 mx-10">
        {Types_for_Species[businessUnit][0] !== "Not Applicable" && (
          <div className="mb-14 md:flex justify-between w-full">
            <div className="md:w-1/2 w-full ">
              <p
                className={
                  onDisable2
                    ? "text-gray-500 font-bold text-2xl"
                    : "font-bold text-2xl"
                }
              >
                Select Specie
              </p>
              <p className={onDisable2 && "text-gray-500"}>
                The selection here will set the value in
                <br />
                "utm_term" parameters
              </p>
            </div>
            <div className="md:w-1/2 w-full pt-2">
              {Types_for_Species[businessUnit][0] !== "Not Applicable" && (
                <select
                  id="businessUnit"
                  value={specie}
                  onChange={(event) => setSpecie(event.target.value)}
                  className={
                    onDisable2
                      ? "md:w-3/4 w-full bg-gray-400 hover:bg-gray-400 border-gray-400"
                      : "md:w-3/4 w-full"
                  }
                >
                  {Types_for_Species[businessUnit].map((val, key) => (
                    <option key={key} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        )}

        {Types_for_Category[businessUnit][0] !== "Not Applicable" && (
          <div className="md:flex justify-between w-full">
            {Types_for_Category[businessUnit][0] !== "Not Applicable" && (
              <div className="md:w-1/2 w-full">
                <p
                  className={
                    onDisable2
                      ? "text-gray-500 font-bold text-2xl"
                      : "font-bold text-2xl"
                  }
                >
                  Select Category
                </p>
                <p className={onDisable2 && "text-gray-500"}>
                  The selection here will set the value in
                  <br />
                  "utm_term" parameters
                </p>
              </div>
            )}
            <div className="md:w-1/2 w-full pt-2">
              {Types_for_Category[businessUnit][0] !== "Not Applicable" && (
                <select
                  id="cateogory"
                  value={cateogory}
                  onChange={(event) => setCateogory(event.target.value)}
                  className={
                    onDisable2
                      ? "md:w-3/4 w-full bg-gray-400 hover:bg-gray-400 border-gray-400"
                      : "md:w-3/4 w-full"
                  }
                >
                  {Types_for_Category[businessUnit].map((val, key) => (
                    <option key={key} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="relative flex justify-center items-center h-16 pt-14 mb-10 md:mb-8">
        {/* <Footer goBack={() => navigate("/business")} /> */}
        <Footer goBack={() => changeOndisable1()} onDisable={onDisable2} />
        <Continue handleClick={handleClick} onDisable={onDisable2} />
        <div className="absolute right-1 md:text-4xl text-3xl">
          <PreviewButton onDisable={onDisable2} />
        </div>
      </div>
    </motion.div>
  );
};

export default Cateogory;
