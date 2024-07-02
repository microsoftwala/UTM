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
  const [cateogory1, setCateogory1] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [other, setOther] = useState("");
  const [leadgen, setLeadgen] = useState("");
  const [Category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [campaignname, setCampaignname] = useState("");
  const [lastroute, setLastroute] = useState("/");
  const [onDisable, setOndisable] = useState(false);
  const [onDisable1, setOndisable1] = useState(false);
  const [onDisable2, setOndisable2] = useState(false);
  const [utmurl, setUtmurl] = useState("");

  return (
    <GlobalStateContext.Provider
      value={{
        onDisable1,
        setOndisable1,
        onDisable2,
        setOndisable2,
        businessUnit,
        setBusinessUnit,
        selectedCampaign,
        setSelectedCampaign,
        selectedPlateform,
        setSelectedPlateform,
        firstarray,
        setFirstarray,
        onDisable,
        setOndisable,
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
        lastroute,
        setLastroute,
        cateogory1,
        setCateogory1,
        utmurl,
        setUtmurl,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
