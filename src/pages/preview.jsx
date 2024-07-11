import React from "react";
import { useGlobalState } from "../component/globalState";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import animation from "../component/animation";
import "../css/campaign.css";

const Preview = () => {
  const navigate = useNavigate();
  const {
    businessUnit,
    selectedCampaign,
    selectedPlateform,
    checkfordisplay,
    region,
    businessline,
    specie,
    cateogory,
    content,
    other,
    description,
    Category,
    leadgen,
    url,
    campaignname,
    lastroute,
    cateogory1,
  } = useGlobalState();
  const { fadeTransition, fadeVariants } = animation;

  return (
    <motion.div
      className="container1 relative"
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <div className="header">
        <img
          src="https://www.dsm-firmenich.com/content/dam/dsm-firmenich/corporate/images/logos/logo-black.svg"
          alt="dsm-firmenich"
          className="image p-4"
        />
      </div>
      <div className="flex justify-center font-semibold mt-4 md:text-3xl text-2xl text-gray-500">
        Preview
      </div>
      <div className="mt-4 ml-10 mr-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <p className="text-lg font-bold mb-4">Campaign Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Business Unit:</p>

            {businessUnit === "Animal Health & Nutrition" ? (
              <p className="ml-2 truncate">Animal Nutrition & Health</p>
            ) : (
              <p className="ml-2 truncate">{businessUnit}</p>
            )}
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Campaign:</p>
            <p className="ml-2 truncate">{selectedCampaign}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Platform:</p>
            <p className="ml-2 truncate">{selectedPlateform}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Region:</p>
            <p className="ml-2 truncate">{region}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Business Line:</p>
            <p className="ml-2 truncate">{businessline}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Specie:</p>
            <p className="ml-2 truncate">{specie}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Category:</p>
            <p className="ml-2 truncate">{cateogory}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Category(if Other):</p>
            <p className="ml-2 truncate">{cateogory1}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Content:</p>
            <p className="ml-2 truncate">{content}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Other:</p>
            <p className="ml-2 truncate">{other}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Description:</p>
            <p className="ml-2 truncate">{description}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Campaign Type:</p>
            <p className="ml-2 truncate">{leadgen}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Select Category Type:</p>
            <p className="ml-2 truncate">{Category}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">Campaign Name:</p>
            <p className="ml-2 truncate">{campaignname}</p>
          </div>
          <div className="flex items-center overflow-hidden">
            <p className="font-semibold">URL:</p>
            <p className="ml-2 truncate">{url}</p>
          </div>
        </div>
      </div>

      <div className="absolute md:text-xl  top-5 right-1/2">
        <button
          onClick={() => {
            navigate(lastroute);
          }}
        >
          <ImCross className="text-gray-500 hover:text-gray-800" />
        </button>
      </div>
    </motion.div>
  );
};

export default Preview;
