const Select = ["Not Applicable"];

const Human_Nutrition = ["Not Applicable"];

const Food_Beverage = ["Not Applicable"];

const Animal_Health_Nutrition = [
  "poultry",
  "swine",
  "aquaculture",
  "ruminants",
  "multi_species",
];

const Personal_Care = ["Not Applicable"];

const TTH_ISOL = [
  "article",
  "sample_request",
  "formulation",
  "technical_request",
  "download",
  "whitepaper",
  "consumer insights ",
  "other_request",
  "quote_request",
  "insights_page",
  "Other",
];

const Animal_Health_Nutrition1 = [
  "enzymes",
  "eubiotics",
  "mycotoxins",
  "special_nutrients",
  "vitamins",
  "carotenoids",
  "multi_products",
];

const Personal_Care1 = [
  "article",
  "sample",
  "formulation",
  "video",
  "register",
  "line_up",
  "study",
  "Other",
];

const Types_for_Species = {
  "Human Nutrition": Human_Nutrition,
  "TTH ISOL": Select,
  "Animal Health & Nutrition": Animal_Health_Nutrition,
  "Personal Care": Personal_Care,
  "Select a Business Unit": Select,
  Biomedical: Select,
  "Food & Beverages": Food_Beverage,
};

const Types_for_Category = {
  "Human Nutrition": Human_Nutrition,
  "TTH ISOL": TTH_ISOL,
  "Animal Health & Nutrition": Animal_Health_Nutrition1,
  "Personal Care": Personal_Care1,
  "Select a Business Unit": Select,
  Biomedical: Select,
  "Food & Beverages": Food_Beverage,
};

export default { Types_for_Species, Types_for_Category };
