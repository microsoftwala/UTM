import React, { useState, useEffect } from "react";
import "../css/campaign.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "./globalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header";
import data from "./cnamedata";
import { motion } from "framer-motion";
import animation from "./animation";
import { VscPreview } from "react-icons/vsc";


const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-4);

  return `${day}${month}${year}`;
};

const formatString = (input) => {
  return input.trim().replace(/\s+/g, " ").replace(/\s/g, "_");
};

const Cname = () => {
  const {
    businessUnit,
    setLastroute,
    selectedCampaign,
    setSelectedCampaign,
    selectedPlateform,
    checkfordisplay,
    setContent,
    region,
    businessline,
    specie,
    cateogory,
    content,
    other,
    setOther,
    description,
    Category,
    setCategory,
    leadgen,
    setLeadgen,
    url,
    setUrl,
    campaignname,
    setCampaignname,
  } = useGlobalState();
  setLastroute("/cname")
  if (other === "Other") setOther("");
  if (content === "Other") setContent("");
  if (Category === "Other") setCategory("");

  if (selectedCampaign === "Search" || selectedCampaign === "Video")
    setSelectedCampaign("serach_ad");
  else if (selectedCampaign === "Paid Social") setSelectedCampaign("social_ad");
  else if (selectedCampaign === "Organic Social")
    setSelectedCampaign("social_post");
  else if (selectedCampaign === "Display") setSelectedCampaign("display");
  else if (selectedCampaign === "Email") setSelectedCampaign("email");
  else if (selectedCampaign === "Print") setSelectedCampaign("print");
  else setSelectedCampaign("website");

  const [check, setCheck] = useState(true);

  const handleRestart = () => {
    navigate("/campaign");
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const [utmurl, setUtmurl] = useState("");

  const handleGenrate = () => {
    const campaignname1 = formatString(campaignname);
    const description1 = formatString(description);
    const other1 = formatString(other);
    if (businessUnit === "Human Nutrition") {
      setUtmurl(
        url +
          "?utm_source=" +
          selectedPlateform.toLowerCase() +
          "&utm_medium=" +
          selectedCampaign +
          "&utm_campaign=" +
          campaignname1 +
          "_" +
          Category +
          "_&utm_term=" +
          businessline +
          "_" +
          region +
          "&utm_content=" +
          content +
          other1 +
          "_" +
          formattedDate +
          "&utm_vechile=" +
          description1
      );
    } else if (businessUnit === "Personal Care") {
      setUtmurl(
        url +
          "?utm_source=" +
          selectedPlateform.toLowerCase() +
          "&utm_medium=" +
          selectedCampaign +
          "&utm_campaign=" +
          campaignname1 +
          "_" +
          Category +
          "_&utm_term=" +
          cateogory +
          "_" +
          businessline +
          "_" +
          region +
          "&utm_content=" +
          content +
          other1 +
          "_" +
          formattedDate
      );
    } else if (businessUnit === "Animal Health & Nutrition") {
      setUtmurl(
        url +
          "?utm_source=" +
          selectedPlateform.toLowerCase() +
          "&utm_medium=" +
          selectedCampaign +
          "&utm_campaign=" +
          campaignname1 +
          "_" +
          Category +
          "_&utm_term=" +
          specie +
          "_" +
          cateogory +
          "_" +
          businessline +
          "_" +
          region +
          "&utm_content=" +
          content +
          other1 +
          "_" +
          formattedDate
      );
    } else if (businessUnit === "TTH ISOL") {
      setUtmurl(
        url +
          "?utm_source=" +
          selectedPlateform.toLowerCase() +
          "&utm_medium=" +
          selectedCampaign +
          "&utm_campaign=" +
          campaignname1 +
          "_" +
          leadgen +
          "_" +
          "&utm_term=" +
          cateogory +
          "_" +
          businessline +
          "_" +
          region +
          "&utm_content=" +
          content +
          other1 +
          "_" +
          formattedDate +
          "&utm_vechile=" +
          description1
      );
    }
    setCheck(false);
  };

  const { Types_for_Campaign, Types_for_Leadgen } = data;

  useEffect(() => {
    setCategory(Types_for_Campaign[businessUnit][0]);
    if (businessUnit === "TTH ISOL") {
      setLeadgen(Types_for_Leadgen[businessUnit][0]);
    }
  }, [businessUnit]);

  const handleCateogoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleURLChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCampaignnameChange = (event) => {
    setCampaignname(event.target.value);
  };

  const handleLeadgenChange = (event) => {
    setLeadgen(event.target.value);
  };

  const clearInput = (val) => {
    if (val === "url") setUrl("");
    else setCampaignname("");
  };

  const handleCopy = () => {
    if (utmurl.length > 0) {
      navigator.clipboard
        .writeText(utmurl)
        .then((error) => {
          toast.success("URL copied to clipboard");
        })
        .catch((err) => {
          toast.error("Failed to copy: ", err);
        });
    } else {
      toast.error("Please genrate url first");
    }
    console.log(utmurl);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/parameter");
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

      <div className="mt-16 mb-16 ml-10 mr-10 md:mr-0">
        <div className="mb-14 md:flex md:justify-between w-full">
          <div className="md:w-1/3 w-full mr-6">
            <p className="font-bold text-xl">Select Campaign Type</p>
            <div className="w-full pt-2"></div>
            {Types_for_Leadgen[businessUnit][0] !== "Not Applicable" ? (
              <select
                id="businessUnit"
                value={leadgen}
                onChange={handleLeadgenChange}
                className="w-full"
              >
                {Types_for_Leadgen[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id="businessUnit"
                value={specie}
                onChange={handleLeadgenChange}
                className="w-full bg-gray-400 hover:bg-gray-400 border-gray-400 "
                disabled="true"
              >
                {Types_for_Leadgen[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="md:w-1/3 w-full md:mt-0 mt-6 mr-6">
            <p className="font-bold text-xl w-full">Select Category</p>
            <div className="w-full pt-2"></div>
            {Types_for_Campaign[businessUnit][0] !== "Not Applicable" &&
            Types_for_Campaign[businessUnit][0] !== "Other" ? (
              <select
                id="category"
                value={Category}
                onChange={handleCateogoryChange}
                className="w-full"
              >
                {Types_for_Campaign[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id="category"
                value={Category}
                onChange={handleCateogoryChange}
                className="w-full bg-gray-400 hover:bg-gray-400 border-gray-400"
                disabled="true"
              >
                {Types_for_Campaign[businessUnit].map((val, key) => (
                  <option key={key} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="relative md:w-1/3 w-full md:mt-0 mt-6">
            <p className="font-bold text-xl w-full">Enter Campaign Name</p>
            <div className="w-full pt-2"></div>
            <div className="w-full input md:mt-0 mt-3">
              <input
                type="text"
                value={campaignname}
                onChange={handleCampaignnameChange}
                className="w-full"
                placeholder="Enter Content Value..."
              />
              {campaignname && (
                <p
                  onClick={() => clearInput("campaignname")}
                  className="absolute right-2 top-3/4 transform -translate-y-1/2 text-gray-600 text-2xl cursor-pointer"
                >
                  &times;
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 ml-10 mr-10 md:mr-0">
        <p className="font-bold text-xl pb-4">
          Enter Campaign Landing Page Link/URL
        </p>

        <div className="w-full md:flex">
          <div className="relative md:w-8/12 w-full mr-9">
            <input
              type="text"
              value={url}
              onChange={handleURLChange}
              className="w-full pt-3 pb-3"
              placeholder="Enter Landing Page Link..."
            />
            {url && (
              <p
                onClick={() => clearInput("url")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl cursor-pointer"
              >
                &times;
              </p>
            )}
          </div>
          <div className="md:w-5/12 w-full flex md:justify-between justify-between md:mt-0 mt-6">
            <button
              className="buttons text-white font-semibold rounded button ml-4"
              onClick={() => handleGenrate()}
            >
              Generate
            </button>
            <button
              className=" text-white font-semibold rounded buttons button"
              onClick={() => handleRestart()}
            >
              Restart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 ml-10 mr-10 md:mr-0">
        <div className="w-full md:flex">
          <div className="relative md:w-4/5 w-full">
            <textarea
              value={utmurl}
              className="w-full pt-2 pb-2 min-h-28 bg-gray-300 border-gray-600 hover:bg-gray-300 pl-2 pr-1 text-gray-500 rounded-sm"
              disabled
            />
          </div>
          <div className="md:w-1/5 w-full flex justify-start md:justify-end md:mt-0 mt-6 items-center ">
            <button
              className={
                check
                  ? "bg-gray-400 buttons pt-3 pb-3 pl-2 pr-2 rounded-md font-semibold hover:bg-gray-400 text-gray-500"
                  : "buttons text-white font-semibold rounded h-12 cursor-pointer button"
              }
              onClick={() => handleCopy()}
              disabled={check}
            >
              Copy
            </button>

            <ToastContainer />
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

export default Cname;
