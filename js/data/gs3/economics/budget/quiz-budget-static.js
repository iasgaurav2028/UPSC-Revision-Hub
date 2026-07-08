// Quiz for: news-budget-static (20 MCQs)
// Fully self-contained — defines its own constant, no shared-object
// mutation, no dependency on any other quiz file.
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
      q: "Revenue Deficit is best defined as:",
      options: [
        "Total Expenditure minus Total Receipts",
        "Revenue Expenditure minus Revenue Receipts",
        "Fiscal Deficit minus Interest Payments",
        "Capital Expenditure minus Revenue Expenditure",
      ],
      correct: 1,
      explain:
        "Revenue Deficit = Revenue Expenditure − Revenue Receipts. It signals borrowing for consumption rather than asset creation.",
    },
    {
      q: "Primary Deficit is calculated as:",
      options: [
        "Fiscal Deficit minus Interest Payments",
        "Revenue Deficit plus Interest Payments",
        "Total Expenditure minus Capital Expenditure",
        "Fiscal Deficit plus Interest Payments",
      ],
      correct: 0,
      explain:
        "Primary Deficit = Fiscal Deficit − Interest Payments, showing the deficit excluding the burden of past borrowing.",
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
        "Pensions are recurring payments that don't create assets — a classic Revenue Expenditure example.",
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
        "Constructing a railway line creates a long-term asset — a Capital Expenditure example.",
    },
    {
      q: "The FRBM Act was enacted in the year:",
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
        "The FRBM Act mandates the government to reduce fiscal and revenue deficits to sustainable levels over time.",
    },
    {
      q: "The FRBM Act has faced criticism primarily because of:",
      options: [
        "Being too strict with no exceptions ever allowed",
        "Repeated deadline extensions and deviations from targets",
        "Applying only to state governments",
        "Having no fiscal deficit target at all",
      ],
      correct: 1,
      explain:
        "A key criticism of the FRBM framework is that its deadlines have been repeatedly extended/deviated from.",
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
        "Only the President's approval",
        "State legislature's approval",
      ],
      correct: 1,
      explain:
        "No money can be withdrawn from the Consolidated Fund without Parliament's authorisation.",
    },
    {
      q: "The Contingency Fund of India is established under which Article?",
      options: ["Article 265", "Article 266", "Article 267", "Article 280"],
      correct: 2,
      explain:
        "The Contingency Fund of India is established under Article 267.",
    },
    {
      q: "The Contingency Fund of India is placed at the disposal of:",
      options: [
        "The Prime Minister",
        "The President",
        "The Finance Minister",
        "The Comptroller and Auditor General",
      ],
      correct: 1,
      explain:
        "The Contingency Fund's corpus is placed at the disposal of the President, used for unforeseen/urgent expenditure pending Parliamentary approval.",
    },
    {
      q: "Which fund is used by the government for unforeseen or urgent expenditure, pending Parliamentary approval?",
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
      q: "The Public Account of India is used for transactions where the government essentially acts as a:",
      options: ["Regulator", "Banker", "Employer", "Judge"],
      correct: 1,
      explain:
        "The Public Account holds funds like provident funds and small savings, where government acts as a banker for depositors.",
    },
    {
      q: "Withdrawing money from the Public Account of India requires:",
      options: [
        "Parliamentary appropriation, same as Consolidated Fund",
        "No Parliamentary appropriation",
        "Presidential assent only",
        "State government approval",
      ],
      correct: 1,
      explain:
        "Unlike the Consolidated Fund, the Public Account does NOT require Parliamentary appropriation to spend from it.",
    },
    {
      q: "In the Budget process, which comes first?",
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
      explain: "Both the Finance Bill and Appropriation Bill are Money Bills.",
    },
    {
      q: "Money Bills, such as the Finance Bill, can be introduced only in:",
      options: ["Rajya Sabha", "Lok Sabha", "Either House", "A Joint Sitting"],
      correct: 1,
      explain:
        "As per Article 110, Money Bills can be introduced only in the Lok Sabha.",
    },
    {
      q: "Regarding a Money Bill, the Rajya Sabha can:",
      options: [
        "Reject it outright",
        "Amend it freely",
        "Only recommend changes, not amend or reject",
        "Indefinitely delay it",
      ],
      correct: 2,
      explain:
        "The Rajya Sabha's role on a Money Bill is limited to recommending changes — it cannot amend or reject it.",
    },
    {
      q: "Which of the following correctly matches the fund with its key feature?",
      options: [
        "Consolidated Fund — no Parliamentary approval needed",
        "Contingency Fund — at President's disposal for urgent needs",
        "Public Account — needs Parliamentary appropriation",
        "Contingency Fund — established under Article 266",
      ],
      correct: 1,
      explain:
        "The Contingency Fund is placed at the President's disposal specifically for urgent, unforeseen expenditure — the other three options each contain an error.",
    },
  ],
};
