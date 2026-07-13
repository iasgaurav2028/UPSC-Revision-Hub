// Chapter 1: Historical Background — combines Company Rule + Crown Rule
// (defined in ch1-company.js and ch1-crown.js, loaded just before this file)
const DATA_ch1 = {
  id: "ch1",
  title: "Chapter 1",
  subtitle: "Historical Background",
  icon: "\ud83d\udcda",
  isChapter: true, // marks this as a Prev/Next navigation boundary
  children: [DATA_ch1_company, DATA_ch1_crown],
};
