import React, { useEffect } from "react";
import "../css/campaign.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "./globalState";
import Header from "./header";
import data from "./businessdata";
import animation from "./animation";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";

const Businessregion = () => {
  const {
    businessUnit,
    region,
    setRegion,
    businessline,
    setBusinessline,
    setLastroute,
  } = useGlobalState();

  setLastroute("/business");

  const handleClick = (campaign) => {
    if (region === "") {
      setRegion("Global");
    }
    if (Types[businessUnit].length > 0 && businessline === "") {
      setBusinessline(Types[businessUnit][0]);
    }

    if (businessUnit === "Human Nutrition") {
      navigate("/parameter");
    } else {
      navigate("/cateogory");
    }
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handlebusinessUnitChange = (event) => {
    setBusinessline(event.target.value);
  };

  const Region = ["Global", "EMEA", "APAC", "LATAM", "NA", "GC"];

  const { Types } = data;

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/plateform");
  };

  const { fadeTransition, fadeVariants } = animation;

  useEffect(() => {
    if (Types[businessUnit].length >= 1) {
      setBusinessline(Types[businessUnit][0]);
    }
    setRegion(Region[0]);
  }, [businessUnit]);

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
            <p className="font-bold text-2xl">Select Region</p>
            <p>
              The selection here will set the value in
              <br />
              "utm_term" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            <select
              id="businessUnit"
              value={region}
              onChange={handleRegionChange}
              className="w-3/4"
            >
              {Region.map((val, key) => (
                <option key={key} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:flex justify-between w-full">
          <div className="md:w-1/2 w-full">
            <p className="font-bold text-2xl">Select Business Line</p>
            <p>
              The selection here will set the value in
              <br />
              "utm_content" or "utm_term" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            {Types[businessUnit].length > 0 &&
            Types[businessUnit][0] !== "Not Applicable" ? (
              <select
                id="businessUnit"
                value={businessline}
                onChange={handlebusinessUnitChange}
                className="w-3/4"
              >
                {Types[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id="businessUnit"
                value={businessline}
                onChange={handlebusinessUnitChange}
                className="w-3/4 bg-gray-400 hover:bg-gray-400 border-gray-400"
                disabled="true"
              >
                {Types[businessUnit].map((val, key) => (
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
        <div className="absolute right-1 md:text-4xl text-3xl">
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

export default Businessregion;
