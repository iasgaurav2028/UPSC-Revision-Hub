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
  "geo6-ch3": QUIZ_geo6_ch3,
  "geo6-ch4": QUIZ_geo6_ch4,
  "geo6-ch5": QUIZ_geo6_ch5,
  "geo6-ch6": QUIZ_geo6_ch6,

  "geo7-ch1": QUIZ_geo7_ch1,
  "geo7-ch2": QUIZ_geo7_ch2,
  "geo7-ch3": QUIZ_geo7_ch3,
  "geo7-ch4": QUIZ_geo7_ch4,
  "geo7-ch5": QUIZ_geo7_ch5,
  "geo7-ch6": QUIZ_geo7_ch6,
  "geo7-ch7": QUIZ_geo7_ch7,

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

  "ch2-ca-demand": QUIZ_ca_demand,
  "ch2-ca-composition": QUIZ_ca_composition,
  "ch2-ca-working": QUIZ_ca_working,
  "ch2-obj-resolution": QUIZ_obj_resolution,
  "ch2-changes-independence-act": QUIZ_changes_independence_act,
  "ch2-committees-major": QUIZ_major_committees,
  "ch2-committees-minor": QUIZ_minor_committees,
  "ch2-committees-drafting": QUIZ_drafting_committees,
  "ch2-criticism": QUIZ_criticism,
  "ch2-important-facts": QUIZ_important_facts,
  "ch2-enactment": QUIZ_enactment,
  "ch2-enforcement": QUIZ_enforcement,
  "ch2-congress-experts": QUIZ_congress_experts,

  "ch3-meaning": QUIZ_meaning,
  "ch3-functions": QUIZ_functions,
  "ch3-qualities": QUIZ_qualities,
  "ch3-classification": QUIZ_classification,
  "ch3-constitutionalism": QUIZ_constitutionalism,

  "news-budget-2025": QUIZ_news_budget_2025,
  "news-budget-2026": QUIZ_news_budget_2026,
  "news-budget-static": QUIZ_news_budget_static,
  "news-budget-priority-groups": QUIZ_news_budget_priority_groups,

  "news-2026-07-26-rice-methane": QUIZ_news_rice_methane,
  "news-2026-07-26-ondevice-ai": QUIZ_news_ondevice_ai,

  "news-2026-07-24-rti-corruption": QUIZ_news_rti_corruption,
  "news-2026-07-24-right-to-protest": QUIZ_news_right_to_protest,
  "news-2026-07-24-education-collapse": QUIZ_news_education_collapse,

  "qr-presidents": QUIZ_qr_presidents,
  "qr-anti-defection": QUIZ_qr_anti_defection,
  "qr-original-constitution": QUIZ_qr_original_constitution,
  "qr-state-nicknames": QUIZ_qr_state_nicknames,
  "qr-siliguri-corridor": QUIZ_qr_siliguri_corridor,
  "qr-types-of-mining": QUIZ_qr_types_of_mining,
  "qr-levels-of-partnership": QUIZ_qr_levels_partnership,
  "qr-important-full-forms": QUIZ_qr_full_forms,
};
