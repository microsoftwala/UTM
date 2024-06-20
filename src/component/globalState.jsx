import React, { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [businessUnit, setBusinessUnit] = useState("Select a Business Unit");
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [selectedPlateform, setSelectedPlateform] = useState("");
  const [firstarray, setFirstarray] = useState("");
  const [checkfordisplay, setCheckfordisplay] = useState(false);
  const [region, setRegion] = useState("");
  const [businessline, setBusinessline] = useState("");
  const [specie, setSpecie] = useState("");
  const [cateogory, setCateogory] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [other, setOther] = useState("");
  const [leadgen, setLeadgen] = useState("");
  const [Category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [campaignname, setCampaignname] = useState("");

  return (
    <GlobalStateContext.Provider
      value={{
        businessUnit,
        setBusinessUnit,
        selectedCampaign,
        setSelectedCampaign,
        selectedPlateform,
        setSelectedPlateform,
        firstarray,
        setFirstarray,
        checkfordisplay,
        setCheckfordisplay,
        region,
        setRegion,
        businessline,
        setBusinessline,
        cateogory,
        setCateogory,
        specie,
        setSpecie,
        content,
        setContent,
        description,
        setDescription,
        other,
        setOther,
        leadgen,
        setLeadgen,
        Category,
        setCategory,
        url,
        setUrl,
        campaignname,
        setCampaignname,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
