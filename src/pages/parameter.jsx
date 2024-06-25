import React, { useEffect } from "react";
import "../css/campaign.css";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import Header from "../component/header";
import data from "../component/parameterdata";
import { motion } from "framer-motion";
import animation from "../component/animation";
import Footer from "../component/footer";
import Continue from "../component/continue";
import PreviewButton from "../component/previewbutton";

const Parameter = () => {
  const {
    setLastroute,
    businessUnit,
    content,
    setContent,
    description,
    setDescription,
    other,
    setOther,
  } = useGlobalState();
  setLastroute("/parameter");
  const clearInput = () => {
    setDescription("");
  };

  const clearOtherInput = () => {
    setOther("");
  };

  const handleClick = (campaign) => {
    navigate("/cname");
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const { Types_for_Content } = data;

  const navigate = useNavigate();

  const goBack = () => {
    if (businessUnit === "Human Nutrition") {
      navigate("/business");
    } else {
      navigate("/cateogory");
    }
  };

  const { fadeTransition, fadeVariants } = animation;

  useEffect(() => {
    if (Types_for_Content[businessUnit].length === 1) {
      setContent(Types_for_Content[businessUnit][0]);
    }
  });

  const classname = content === "Other" ? "md:w-1/2 w-full" : "w-full";
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

      <div className="mt-16 mb-16 ml-10 mr-10 md:mr-0">
        <div className="mb-14 md:flex justify-between w-full">
          <div className="md:w-1/2 w-full ">
            <p className="font-bold text-2xl">Enter Content Type</p>
            <p>
              The selection here will set the value in
              <br />
              "utm_content" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2 md:flex">
            <div className={classname}>
              {Types_for_Content[businessUnit][0] !== "Not Applicable" &&
              Types_for_Content[businessUnit][0] !== "Other" ? (
                <select
                  id="businessUnit"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  className="md:w-3/4 w-full"
                >
                  {Types_for_Content[businessUnit].map((val, key) => (
                    <option key={key} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  id="businessUnit"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  className="md:w-3/4 w-full bg-gray-400 hover:bg-gray-400 border-gray-400 "
                  disabled="true"
                >
                  {Types_for_Content[businessUnit].map((val, key) => (
                    <option key={key} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {content === "Other" && (
              <div className="md:w-1/2 w-full pt-2 md:pt-0 input">
                <div className="relative w-full md:mt-0 mt-4">
                  <input
                    type="text"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                    className="w-full"
                    placeholder="Enter Content Value..."
                  />
                  {other && (
                    <p
                      onClick={clearOtherInput}
                      className="absolute right-2 top-1/3 transform -translate-y-1/2 text-gray-600 text-2xl cursor-pointer md:pt-0 pt-3"
                    >
                      &times;
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:flex justify-between w-full">
          <div className="md:w-1/2 w-full">
            <p className="font-bold text-2xl">Enter Ad Description</p>
            <p>
              The selection here will set the value in
              <br />
              "utm_vehicle" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2 input">
            <div
              className={
                content === "Other" ? "w-full relative" : "parawidth relative"
              }
            >
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full"
                placeholder="Enter Vehicle Value..."
              />
              {description && (
                <p
                  onClick={clearInput}
                  className="absolute right-2 top-1/3 transform -translate-y-1/2 text-gray-600 text-2xl cursor-pointer md:pt-0 pt-3"
                >
                  &times;
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center h-16 pt-14 mb-12 md:mb-0">
        <Footer goBack={goBack} />
        <Continue handleClick={handleClick} />
        <div className="absolute right-1 md:text-4xl text-3xl">
          <PreviewButton />
        </div>
      </div>
    </motion.div>
  );
};

export default Parameter;
