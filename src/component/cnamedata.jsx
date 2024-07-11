const Select = ["Not Applicable"];

const Human_Nutrition = ["Not Applicable"];

const Food_Beverage = ["Not Applicable"];

const Animal_Health_Nutrition = ["Not Applicable"];

const Personal_Care = ["Not Applicable"];

const TTH_ISOL = ["Leadgen", "Awareness", "Brand"];

const Types_for_Leadgen = {
  "Human Nutrition": Human_Nutrition,
  "TTH ISOL": TTH_ISOL,
  "Animal Health & Nutrition": Animal_Health_Nutrition,
  "Personal Care": Personal_Care,
  "Select a Business Unit": Select,
  Biomedical: Select,
  "Food Beverage": Food_Beverage,
};

const Human_Nutrition1 = ["Other"];
const Animal_Health_Nutrition1 = [
  "poultry_perform",
  "poultry_promote",
  "poulty_protect",
  "piglet_care",
  "sow_longevity",
  "grower_finisher",
  "swine_sustainability",
  "aqua_perform",
  "aqua_promote",
  "aqua_protect",
  "ruminants_mycotoxins",
  "ruminants_hy-d",
  "evergreen",
  "enzymes_ao",
  "mycotoxins_ao",
  "special_nutrients_ao",
  "eubiotics_ao",
  "carotenoids_ao",
  "vitamins_ao",
  "sustell_ao",
  "verax_ao",
  "customer_portal",
  "special_days",
];

const Personal_Care1 = ["Other"];

const TTH_ISOL1 = ["Other"];
const Select1 = ["Other"];

const Types_for_Campaign = {
  "Human Nutrition": Human_Nutrition1,
  "TTH ISOL": TTH_ISOL1,
  "Animal Health & Nutrition": Animal_Health_Nutrition1,
  "Personal Care": Personal_Care1,
  "Select a Business Unit": Select1,
  Biomedical: Select1,
};

export default { Types_for_Campaign, Types_for_Leadgen };
