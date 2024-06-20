const Select = ["Not Applicable"];

const TTH_ISOL = [
  "regulatory",
  "insights",
  "microbiome",
  "product",
  "solution",
  "Other",
];

const Human_Nutrition = ["Other"];

const Animal_Health_Nutrition = ["Other"];
const Personal_Care = [
  "regulatory",
  "insights",
  "microbiome",
  "innovation",
  "sustainability",
  "sustainability_talk",
  "webinar",
  "circulaity",
  "bar_soap",
  "microbiome_study",
  "Other",
];

const Types_for_Content = {
  "Human Nutrition": Human_Nutrition,
  "TTH ISOL": TTH_ISOL,
  "Animal Health & Nutrition": Animal_Health_Nutrition,
  "Personal Care": Personal_Care,
  "Select a Business Unit": Select,
  Biomedical: Select,
};

export default { Types_for_Content };
