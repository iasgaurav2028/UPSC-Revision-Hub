// Quiz for: news-budget-static (20 questions, UPSC Prelims-style)
const QUIZ_news_budget_static = {
  title: "Budget — Static Concepts",
  questions: [
    {
      q: "Fiscal Deficit is best defined as:",
      options: [
        "Revenue Expenditure minus Revenue Receipts",
        "Total Expenditure minus Total Receipts (excluding borrowings)",
        "Fiscal Deficit minus Interest Payments",
        "Capital Expenditure minus Capital Receipts",
      ],
      correct: 1,
      explain:
        "Fiscal Deficit = Total Expenditure − Total Receipts (excluding borrowings). It indicates how much the government needs to borrow.",
    },
    {
      q: [
        "Consider the following statements regarding budgetary deficits:",
        "I. Revenue Deficit equals Revenue Expenditure minus Revenue Receipts.",
        "II. Primary Deficit equals Fiscal Deficit minus Interest Payments.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I only", "II only", "Both I and II", "Neither I nor II"],
      correct: 2,
      explain:
        "Both statements correctly define their respective deficit concepts — a frequently tested pair of formulas.",
    },
    {
      q: "Which of the following is an example of Revenue Expenditure?",
      options: [
        "Building a new highway",
        "Payment of government employee pensions",
        "Constructing an irrigation canal",
        "Purchasing land for a new port",
      ],
      correct: 1,
      explain:
        "Pension payments are recurring and create no asset — a classic example of Revenue Expenditure.",
    },
    {
      q: "Which of the following is an example of Capital Expenditure?",
      options: [
        "Interest payment on public debt",
        "Subsidy disbursement",
        "Construction of a new railway line",
        "Salary payments to government staff",
      ],
      correct: 2,
      explain:
        "Constructing a railway line creates a long-term asset — a Capital Expenditure example, as opposed to the recurring, non-asset-creating options listed.",
    },
    {
      q: [
        "Assertion (A): The chain 'CapEx → Infrastructure → Investment → Employment → Growth' is often cited to justify prioritising capital expenditure.",
        "Reason (R): Capital expenditure, unlike revenue expenditure, creates durable productive assets that can generate future economic returns.",
        "Which one of the following is correct?",
      ],
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 0,
      explain:
        "Both are true and R correctly explains A — the durable, asset-creating nature of capital expenditure is precisely why it is theorised to generate this growth-employment chain.",
    },
    {
      q: "The FRBM Act was enacted in which year?",
      options: ["1991", "1999", "2003", "2008"],
      correct: 2,
      explain:
        "The Fiscal Responsibility and Budget Management (FRBM) Act was enacted in 2003.",
    },
    {
      q: "The primary purpose of the FRBM Act is to:",
      options: [
        "Regulate foreign exchange reserves",
        "Mandate reduction of fiscal deficit and revenue deficit to sustainable levels",
        "Set minimum wages across states",
        "Regulate the stock market",
      ],
      correct: 1,
      explain:
        "The FRBM Act mandates the government to reduce fiscal and revenue deficits to sustainable levels over a defined timeframe.",
    },
    {
      q: [
        "Consider the following statements regarding the FRBM Act:",
        "I. It has faced criticism for repeated deadline extensions and deviations from its original targets.",
        "II. It applies exclusively to state governments, not the Union Government.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I only", "II only", "Both I and II", "Neither I nor II"],
      correct: 0,
      explain:
        "Statement I is correct — this is a well-documented criticism. Statement II is incorrect — the FRBM framework applies to the Union Government (states have their own parallel FRBM-type legislation).",
    },
    {
      q: "The Consolidated Fund of India is established under which Article of the Constitution?",
      options: ["Article 265", "Article 266", "Article 267", "Article 280"],
      correct: 1,
      explain:
        "The Consolidated Fund of India is established under Article 266.",
    },
    {
      q: "Withdrawal of money from the Consolidated Fund of India requires:",
      options: [
        "No approval — the executive can withdraw freely",
        "Parliament's authorisation",
        "Only the President's personal approval",
        "State legislature's approval",
      ],
      correct: 1,
      explain:
        "No money can be withdrawn from the Consolidated Fund without Parliament's authorisation — a core principle of Parliamentary control over public finance.",
    },
    {
      q: "The Contingency Fund of India is established under which Article, and is placed at whose disposal?",
      options: [
        "Article 266; Parliament's disposal",
        "Article 267; the President's disposal",
        "Article 280; the Finance Commission's disposal",
        "Article 265; the Prime Minister's disposal",
      ],
      correct: 1,
      explain:
        "The Contingency Fund is established under Article 267 and placed at the disposal of the President, for unforeseen/urgent expenditure pending Parliamentary approval.",
    },
    {
      q: "Which fund is used by the government for unforeseen or urgent expenditure, pending subsequent Parliamentary approval?",
      options: [
        "Consolidated Fund",
        "Contingency Fund",
        "Public Account",
        "National Investment Fund",
      ],
      correct: 1,
      explain:
        "The Contingency Fund exists precisely for urgent, unforeseen expenditure before Parliament formally approves it.",
    },
    {
      q: "The Public Account of India is used for transactions in which the government essentially acts as a:",
      options: ["Regulator", "Banker", "Employer", "Judge"],
      correct: 1,
      explain:
        "The Public Account holds funds like provident funds and small savings, where government acts as a banker for depositors' money.",
    },
    {
      q: [
        "Consider the following statements regarding the Public Account of India:",
        "I. It is governed by Article 266(2).",
        "II. Withdrawal from it requires the same Parliamentary appropriation as the Consolidated Fund.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I only", "II only", "Both I and II", "Neither I nor II"],
      correct: 0,
      explain:
        "Statement I is correct. Statement II is incorrect — unlike the Consolidated Fund, the Public Account does NOT require Parliamentary appropriation to spend from it.",
    },
    {
      q: "In the Budget process, which of the following comes first?",
      options: [
        "Appropriation Bill",
        "President's Assent",
        "Finance Bill",
        "Budget presentation in Parliament",
      ],
      correct: 3,
      explain:
        "The correct order is: Budget presented → Finance Bill → Appropriation Bill → passed by Parliament → President's Assent.",
    },
    {
      q: "The Finance Bill and Appropriation Bill are both classified as:",
      options: [
        "Ordinary Bills",
        "Money Bills",
        "Constitutional Amendment Bills",
        "Private Member Bills",
      ],
      correct: 1,
      explain:
        "Both the Finance Bill and Appropriation Bill are classified as Money Bills.",
    },
    {
      q: [
        "Assertion (A): The Rajya Sabha's power over a Money Bill like the Finance Bill is limited.",
        "Reason (R): As per Article 110, Money Bills can be introduced only in the Lok Sabha, and the Rajya Sabha can only recommend changes, not amend or reject them.",
        "Which one of the following is correct?",
      ],
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 0,
      explain:
        "Both are true and R directly explains A — the constitutional restriction under Article 110 is precisely why the Rajya Sabha's role on Money Bills is limited to recommendations.",
    },
    {
      q: "Which of the following correctly matches the fund with its key defining feature?",
      options: [
        "Consolidated Fund — no Parliamentary approval needed for withdrawal",
        "Contingency Fund — placed at the President's disposal for urgent needs",
        "Public Account — requires Parliamentary appropriation like the Consolidated Fund",
        "Contingency Fund — established under Article 266",
      ],
      correct: 1,
      explain:
        "The Contingency Fund being placed at the President's disposal for urgent needs is the only correctly matched pair — the other three options each contain a factual error.",
    },
    {
      q: "Which of the following government financial instruments/funds does NOT require Parliamentary appropriation before money can be spent from it?",
      options: [
        "Consolidated Fund of India",
        "Public Account of India",
        "Neither requires appropriation",
        "Both require identical appropriation procedures",
      ],
      correct: 1,
      explain:
        "The Public Account is the exception — money can be spent from it without needing Parliamentary appropriation, unlike the Consolidated Fund.",
    },
    {
      q: "Which of the following statements best captures the core tension addressed by the FRBM Act and the revenue-versus-capital-expenditure distinction together?",
      options: [
        "There is no meaningful relationship between the two concepts",
        "Governments often face a trade-off between meeting fiscal deficit targets (under FRBM) and sustaining growth-oriented capital expenditure, especially during slowdowns",
        "The FRBM Act mandates that all government expenditure must be capital expenditure",
        "Revenue expenditure is always preferable to capital expenditure under the FRBM framework",
      ],
      correct: 1,
      explain:
        "This trade-off — between fiscal discipline (FRBM targets) and growth-oriented capital spending — is the central, recurring tension in India's fiscal policy debates, especially during economic downturns.",
    },
  ],
};
