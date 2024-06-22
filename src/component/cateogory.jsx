import React from "react";
import "../css/campaign.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "./globalState";
import Header from "./header";
import data from "./categorydata";
import { motion } from "framer-motion";
import animation from "./animation";
import { VscPreview } from "react-icons/vsc";

const Cateogory = () => {
  const {
    businessUnit,
    specie,
    setSpecie,
    cateogory,
    setCateogory,
    setLastroute,
  } = useGlobalState();

  setLastroute("/cateogory");
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
    navigate("/parameter");
  };

  const handleSpecieChange = (event) => {
    setSpecie(event.target.value);
  };

  const handleCateogoryChange = (event) => {
    setCateogory(event.target.value);
  };

  const { Types_for_Species, Types_for_Category } = data;

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/business");
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

      <div className="mt-16 mb-16 mx-10">
        <div className="mb-14 md:flex justify-between w-full">
          <div className="md:w-1/2 w-full ">
            <p className="font-bold text-2xl">Select Specie</p>
            <p>
              The selection here will set the value in
              <br />
              "utm_term" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            {Types_for_Species[businessUnit][0] !== "Not Applicable" ? (
              <select
                id="businessUnit"
                value={specie}
                onChange={handleSpecieChange}
                className="w-3/4"
              >
                {Types_for_Species[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id="businessUnit"
                value={specie}
                onChange={handleSpecieChange}
                className="w-3/4 bg-gray-400 hover:bg-gray-400 border-gray-400"
                disabled="true"
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

        <div className="md:flex justify-between w-full">
          <div className="md:w-1/2 w-full">
            <p className="font-bold text-2xl">Select Category</p>
            <p>
              The selection here will set the value in
              <br />
              "utm_content" or "utm_term" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            {Types_for_Category[businessUnit][0] !== "Not Applicable" ? (
              <select
                id="cateogory"
                value={cateogory}
                onChange={handleCateogoryChange}
                className="w-3/4"
              >
                {Types_for_Category[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id="cateogory"
                value={cateogory}
                onChange={handleCateogoryChange}
                className="w-3/4 bg-gray-400 hover:bg-gray-400 border-gray-400"
                disabled="true"
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
      </div>

      <div className="relative flex justify-center items-center h-16 pt-14">
        <div className="absolute left-0">
          <IoArrowBackCircleOutline
            className="md:text-6xl text-5xl text-blue-700 cursor-pointer font-semibold"
            onClick={() => goBack()}
          />
        </div>
        <button
          className=" text-white font-semibold rounded button"
          onClick={() => handleClick()}
        >
          Continue
        </button>
        <div className="absolute right-0 md:text-4xl text-3xl">
          <button
            onClick={() => {
              navigate("/preview");
            }}
          >
            <VscPreview />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cateogory;
