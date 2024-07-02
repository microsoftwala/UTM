import React, { useEffect, useState } from "react";
import "../css/campaign.css";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../component/globalState";
import Header from "../component/header";
import data from "../component/businessdata";
import animation from "../component/animation";
import { motion } from "framer-motion";
import Footer from "../component/footer";
import Continue from "../component/continue";
import PreviewButton from "../component/previewbutton";
import ShowNavBar from "../component/showNavbar";
import Cateogory from "./cateogory";
import Parameter from "./parameter";

const Businessregion = () => {
  const {
    businessUnit,
    region,
    setRegion,
    businessline,
    setBusinessline,
    setLastroute,
    setOndisable1,
    setOndisable2,
    onDisable1,
    onDisable2,
  } = useGlobalState();

  setLastroute("/business&category&parameter");

  const handleClick = (campaign) => {
    if (region === "") {
      setRegion("Global");
    }
    if (Types[businessUnit].length > 0 && businessline === "") {
      setBusinessline(Types[businessUnit][0]);
    }

    if (businessUnit === "Human Nutrition") {
      setOndisable2(true);
      // navigate("/parameter");
    } else {
      setOndisable1(true);
      // navigate("/cateogory");
    }
  };

  const [showNav, setShownav] = useState(true);

  const Region = ["Global", "EMEA", "APAC", "LATAM", "NA", "GC"];

  const { Types } = data;

  const navigate = useNavigate();

  const { fadeTransition, fadeVariants } = animation;
  if (businessUnit === "Select a Business Unit") {
    navigate("/");
  }
  useEffect(() => {
    if (Types[businessUnit].length >= 1) {
      setBusinessline(Types[businessUnit][0]);
    }
    setRegion(Region[0]);
  }, [businessUnit]);

  return (
    <motion.div
      className="container1 flex flex-col"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <div className="fixed bg-white z-10">
        <Header on={true} count = {3}/>
      </div>

      <div className="mt-72 md:mt-44 mb-auto mx-10">
        <div className="mb-14 md:flex justify-between w-full">
          <div className="md:w-1/2 w-full">
            <p
              className={
                onDisable1 || onDisable2
                  ? "text-gray-500 font-bold text-2xl"
                  : "font-bold text-2xl"
              }
            >
              Select Region
            </p>
            <p className={(onDisable1 || onDisable2) && "text-gray-500"}>
              The selection here will set the value in
              <br />
              "utm_term" parameters
            </p>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            <select
              id="businessUnit"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              className={
                onDisable1 || onDisable2
                  ? "md:w-3/4 w-full bg-gray-400 hover:bg-gray-400 border-gray-400"
                  : "md:w-3/4 w-full"
              }
              disabled={onDisable1}
            >
              {Region.map((val, key) => (
                <option key={key} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>

        {Types[businessUnit].length > 0 &&
          Types[businessUnit][0] !== "Not Applicable" && (
            <div className="md:flex justify-between w-full">
              <div className="md:w-1/2 w-full">
                <p
                  className={
                    onDisable1 || onDisable2
                      ? "text-gray-500 font-bold text-2xl"
                      : "font-bold text-2xl"
                  }
                >
                  Select Business Line
                </p>
                <p className={(onDisable1 || onDisable2) && "text-gray-500"}>
                  The selection here will set the value in
                  <br />
                  "utm_content" or "utm_term" parameters
                </p>
              </div>
              <div className="md:w-1/2 w-full pt-2">
                {Types[businessUnit].length > 0 &&
                  Types[businessUnit][0] !== "Not Applicable" && (
                    <select
                      id="businessUnit"
                      value={businessline}
                      onChange={(event) => setBusinessline(event.target.value)}
                      className={
                        onDisable1 || onDisable2
                          ? "bg-gray-400 hover:bg-gray-400 border-gray-400 md:w-3/4 w-full"
                          : "md:w-3/4 w-full"
                      }
                      disabled={onDisable1}
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
          )}
      </div>

      <div className="relative flex justify-center items-center h-16 pt-14 mb-10 md:mb-0">
        <Footer
          goBack={() => navigate("/campaign&platform")}
          onDisable={onDisable1 || onDisable2}
        />
        <Continue
          handleClick={handleClick}
          onDisable={onDisable1 || onDisable2}
        />
        <div className="absolute right-1 md:text-4xl text-3xl">
          <PreviewButton onDisable={onDisable1 || onDisable2} />
        </div>
      </div>

      {onDisable1 &&
        businessUnit !== "Human Nutrition" &&
        businessUnit.length > 0 && (
          <Cateogory
            changeOndisable1={() => setOndisable1(false)}
            changeOndisable2={() => setOndisable2(true)}
          />
        )}
      {onDisable2 && (
        <Parameter
          changeOndisable2={() => setOndisable2(false)}
          changeOndisable1={() => setOndisable1(false)}
        />
      )}
    </motion.div>
  );
};

export default Businessregion;
