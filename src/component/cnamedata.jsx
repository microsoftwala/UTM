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
  "we_make_it_possible",
  "evergreen",
  "sustell",
  "Bovaer",
  "piglet_care",
  "special_days",
  "sow_longevity",
  "shrimp_robustness",
  "poultry_perform",
  "special_days",
  "verax",
  "poultry_protect",
  "poultry_promote",
  "fish_robustness",
  "protect_profits",
  "Other",
];

const Personal_Care1 = ["Other"];

const TTH_ISOL1 = ["Other"];

const Types_for_Campaign = {
  "Human Nutrition": Human_Nutrition1,
  "TTH ISOL": TTH_ISOL1,
  "Animal Health & Nutrition": Animal_Health_Nutrition1,
  "Personal Care": Personal_Care1,
  "Select a Business Unit": Select,
  Biomedical: Select,
};


export default { Types_for_Campaign,Types_for_Leadgen };