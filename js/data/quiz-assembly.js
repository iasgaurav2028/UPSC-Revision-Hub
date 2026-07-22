// ╔══════════════════════════════════════════════════════════════════╗
// ║  QUIZ-ASSEMBLY.JS — Combines every QUIZ_* file into QUIZ_DATA       ║
// ║                                                                    ║
// ║  This file must be loaded LAST among all quiz-*.js files (see the  ║
// ║  <script> order / build-bundle.js FILE_ORDER) — it simply lists    ║
// ║  the QUIZ_* variables that every quiz-*.js file has already        ║
// ║  defined.                                                          ║
// ║                                                                    ║
// ║  Each quiz-*.js file is FULLY INDEPENDENT: it defines its own      ║
// ║  uniquely-named constant and never touches any shared object.      ║
// ║  This file is the ONLY place that maps a topic id -> its quiz.     ║
// ║                                                                    ║
// ║  To add a new topic's quiz:                                        ║
// ║   1. Create quiz-<topicid>.js next to that topic's content file,   ║
// ║      defining `const QUIZ_<varname> = { title, questions: [...] }` ║
// ║   2. Add one line below: "<topic-id>": QUIZ_<varname>,             ║
// ║   3. Add the new file's path to build-bundle.js's FILE_ORDER       ║
// ║      (before this file, since this file references it)             ║
// ╚══════════════════════════════════════════════════════════════════╝
const QUIZ_DATA = {
  "geo6-ch1": QUIZ_geo6_ch1,
  "geo6-ch2": QUIZ_geo6_ch2,
  "ch1-regulating1773": QUIZ_ch1_regulating1773,
  "ch1-amending1781": QUIZ_ch1_amending1781,
  "ch1-pitts1784": QUIZ_ch1_pitts1784,
  "ch1-act1786": QUIZ_ch1_act1786,
  "ch1-charter1793": QUIZ_ch1_charter1793,
  "ch1-charter1813": QUIZ_ch1_charter1813,
  "ch1-charter1833": QUIZ_ch1_charter1833,
  "ch1-charter1853": QUIZ_ch1_charter1853,
  "ch1-govact1858": QUIZ_ch1_govact1858,
  "ch1-ica1861": QUIZ_ch1_ica1861,
  "ch1-ica1892": QUIZ_ch1_ica1892,
  "ch1-ica1909": QUIZ_ch1_ica1909,
  "ch1-govact1919": QUIZ_ch1_govact1919,
  "ch1-simon": QUIZ_ch1_simon,
  "ch1-communalaward": QUIZ_ch1_communalaward,
  "ch1-govact1935": QUIZ_ch1_govact1935,
  "ch1-indep1947": QUIZ_ch1_indep1947,

  "ch2-ca-demand": QUIZ_ch2_ca_demand,
  "ch2-ca-composition": QUIZ_ch2_ca_composition,
  "ch2-ca-working": QUIZ_ch2_ca_working,
  "ch2-obj-resolution": QUIZ_ch2_obj_resolution,
  "ch2-changes-independence-act": QUIZ_ch2_changes_independence_act,

  "news-budget-2025": QUIZ_news_budget_2025,
  "news-budget-2026": QUIZ_news_budget_2026,
  "news-budget-static": QUIZ_news_budget_static,
  "news-budget-priority-groups": QUIZ_news_budget_priority_groups,
};
