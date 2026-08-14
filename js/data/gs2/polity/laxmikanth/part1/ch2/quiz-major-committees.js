// Quiz for: ch2-committees-major — 20 questions, UPSC Prelims-style
const QUIZ_major_committees = {
  title: "Major Committees of the Constituent Assembly",
  questions: [
    {
      q: "How many major committees did the Constituent Assembly appoint for constitution-making?",
      options: ["6", "8", "10", "13"],
      correct: 1,
      explain: "There were 8 major committees and several minor committees.",
    },
    {
      q: "Who chaired the Drafting Committee of the Constituent Assembly?",
      options: [
        "Jawaharlal Nehru",
        "Dr. Rajendra Prasad",
        "Dr. B.R. Ambedkar",
        "Sardar Patel",
      ],
      correct: 2,
      explain:
        "Dr. B.R. Ambedkar chaired the Drafting Committee — the most important of all committees.",
    },
    {
      q: [
        "Consider the following pairs:",
        "Committee — Chairman",
        "I. Union Powers Committee — Sardar Patel",
        "II. Provincial Constitution Committee — Sardar Patel",
        "III. States Committee — Jawaharlal Nehru",
        "How many of the above pairs are correctly matched?",
      ],
      options: [
        "Only one pair",
        "Only two pairs",
        "All three pairs",
        "None of the pairs",
      ],
      correct: 1,
      explain:
        "Pairs II and III are correctly matched. Pair I is incorrect — the Union Powers Committee was chaired by Jawaharlal Nehru, not Patel.",
    },
    {
      q: "Jawaharlal Nehru served as Chairman of which of the following sets of major committees?",
      options: [
        "Union Powers Committee, Drafting Committee, States Committee",
        "Union Powers Committee, Union Constitution Committee, States Committee",
        "Union Constitution Committee, Provincial Constitution Committee, Steering Committee",
        "Union Powers Committee, Advisory Committee, States Committee",
      ],
      correct: 1,
      explain:
        "Nehru chaired three committees: Union Powers, Union Constitution, and States Committee. Patel chaired Provincial Constitution and Advisory Committee; Ambedkar chaired the Drafting Committee.",
    },
    {
      q: "Which leader chaired BOTH the Provincial Constitution Committee AND the Advisory Committee on Fundamental Rights, Minorities and Tribal and Excluded Areas?",
      options: [
        "Jawaharlal Nehru",
        "Dr. B.R. Ambedkar",
        "Dr. Rajendra Prasad",
        "Sardar Vallabhbhai Patel",
      ],
      correct: 3,
      explain:
        "Sardar Patel chaired both the Provincial Constitution Committee and the Advisory Committee on FR, Minorities, and Tribal/Excluded Areas.",
    },
    {
      q: [
        "Assertion (A): The Advisory Committee on Fundamental Rights, Minorities and Tribal and Excluded Areas was one of the most structurally complex committees in the Constituent Assembly.",
        "Reason (R): It had five sub-committees under it, addressing distinct issues of fundamental rights, minorities, and two categories of tribal/excluded areas.",
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
        "Both are true and R correctly explains A — having five sub-committees reflects the breadth and complexity of its mandate.",
    },
    {
      q: "The Fundamental Rights Sub-Committee under the Advisory Committee was chaired by:",
      options: [
        "H.C. Mukherjee",
        "J.B. Kripalani",
        "Gopinath Bardoloi",
        "A.V. Thakkar",
      ],
      correct: 1,
      explain: "J.B. Kripalani chaired the Fundamental Rights Sub-Committee.",
    },
    {
      q: "Who chaired the Minorities Sub-Committee?",
      options: [
        "J.B. Kripalani",
        "H.C. Mukherjee",
        "Gopinath Bardoloi",
        "A.V. Thakkar",
      ],
      correct: 1,
      explain: "H.C. Mukherjee chaired the Minorities Sub-Committee.",
    },
    {
      q: [
        "Consider the following pairs (sub-committee — chairman):",
        "I. Fundamental Rights — J.B. Kripalani",
        "II. Minorities — Gopinath Bardoloi",
        "III. NE Frontier Tribal & Assam Excluded Areas — Gopinath Bardoloi",
        "IV. Excluded Areas (non-Assam) — A.V. Thakkar",
        "How many of the above pairs are correctly matched?",
      ],
      options: [
        "Only one pair",
        "Only two pairs",
        "Only three pairs",
        "All four pairs",
      ],
      correct: 1,
      explain:
        "Pairs I, III, and IV are correctly matched. Pair II is incorrect — Minorities was chaired by H.C. Mukherjee, not Gopinath Bardoloi.",
    },
    {
      q: "Why did the North-West Frontier Tribal Areas Sub-Committee NOT function on behalf of the Constituent Assembly of India?",
      options: [
        "Its chairman refused to participate",
        "It was merged with the Advisory Committee directly",
        "NWFP and Baluchistan became part of Pakistan after June 3, 1947 and a subsequent referendum",
        "The tribal areas were exempted from the Constitution's purview by a special order",
      ],
      correct: 2,
      explain:
        "Following the British Government's June 3, 1947 statement and a referendum, NWFP and Baluchistan joined Pakistan, making the sub-committee's mandate irrelevant for India.",
    },
    {
      q: [
        "Read the following passage carefully and answer the question:",
        "'One of the political consequences of the British Government's statement of June 3, 1947, was that following a referendum, the North-West Frontier Province and Baluchistan became part of the territory of the Dominion of Pakistan and as a result the tribal areas in this region became a concern of that Dominion. The Sub-Committee on the Tribal Areas in the North-West Frontier Province and Baluchistan was not therefore called upon to function on behalf of the Constituent Assembly of India.'",
        "Which of the following is the most accurate inference from this passage?",
      ],
      options: [
        "The sub-committee completed its report before partition",
        "The sub-committee's work became Pakistan's concern, so it had no function left for India's Assembly",
        "The tribal areas of NWFP chose to remain with India",
        "The sub-committee was formally dissolved by an Assembly resolution",
      ],
      correct: 1,
      explain:
        "The passage directly states the committee was 'not called upon to function' because the relevant territory became part of Pakistan — its mandate simply no longer applied to India.",
    },
    {
      q: "The members of the NW Frontier Tribal Areas Sub-Committee included which of the following?",
      options: [
        "J.B. Kripalani, H.C. Mukherjee, A.V. Thakkar",
        "Khan Abdul Ghaffar Khan, Khan Abdul Samad Khan, Mehr Chand Khanna",
        "Gopinath Bardoloi, A.V. Thakkar, G.V. Mavalankar",
        "Sardar Patel, Jawaharlal Nehru, Dr. Rajendra Prasad",
      ],
      correct: 1,
      explain:
        "The members were Khan Abdul Ghaffar Khan, Khan Abdul Samad Khan, and Mehr Chand Khanna. Their chairman's name is not found in the records.",
    },
    {
      q: "Dr. Rajendra Prasad chaired which of the following major committees?",
      options: [
        "Rules of Procedure Committee and Drafting Committee",
        "Rules of Procedure Committee and Steering Committee",
        "Steering Committee and States Committee",
        "Advisory Committee and Steering Committee",
      ],
      correct: 1,
      explain:
        "Dr. Rajendra Prasad chaired the Rules of Procedure Committee and the Steering Committee. The Drafting Committee was Ambedkar's; the States Committee was Nehru's.",
    },
    {
      q: "The States Committee of the Constituent Assembly was also known as:",
      options: [
        "Committee for Drafting State Constitutions",
        "Committee for Negotiating with States",
        "Committee for Princely States Integration",
        "Committee on State Boundaries",
      ],
      correct: 1,
      explain:
        "The States Committee was officially also called the 'Committee for Negotiating with States', chaired by Jawaharlal Nehru.",
    },
    {
      q: [
        "Consider the following statements:",
        "I. Nehru chaired 3 major committees.",
        "II. Patel chaired 3 major committees.",
        "III. Rajendra Prasad chaired 2 major committees.",
        "IV. Ambedkar chaired 1 major committee.",
        "Which of the statements given above is/are correct?",
      ],
      options: [
        "I, III and IV only",
        "I, II and IV only",
        "I, II, III and IV",
        "II, III and IV only",
      ],
      correct: 0,
      explain:
        "Statements I, III, and IV are correct. Statement II is incorrect — Patel chaired 2 committees (Provincial Constitution + Advisory), not 3.",
    },
    {
      q: "Which of the following best distinguishes Dr. Rajendra Prasad's two different roles in the Constituent Assembly?",
      options: [
        "He was Chairman of the Drafting Committee AND President of the Assembly simultaneously",
        "He was President of the Constituent Assembly overall AND chaired two major committees (Rules of Procedure and Steering)",
        "He was Chairman of the Advisory Committee AND chaired the Union Constitution Committee",
        "He had no committee chairmanship — only the ceremonial role of President",
      ],
      correct: 1,
      explain:
        "Prasad was both the President of the entire Constituent Assembly AND chaired the Rules of Procedure and Steering Committees — three distinct roles.",
    },
    {
      q: [
        "Assertion (A): Sardar Patel's committee chairmanships in the Constituent Assembly focused on provincial governance and protective provisions for minorities and tribal areas.",
        "Reason (R): Patel chaired the Provincial Constitution Committee and the Advisory Committee on Fundamental Rights, Minorities and Tribal and Excluded Areas.",
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
        "Both are true and R correctly explains A — the specific committees Patel chaired (provincial governance + protective provisions) form the basis for the characterisation in A.",
    },
    {
      q: "Which of the following is NOT a major committee of the Constituent Assembly?",
      options: [
        "Union Powers Committee",
        "Steering Committee",
        "Ad-hoc Committee on the National Flag",
        "Advisory Committee on Fundamental Rights, Minorities and Tribal Areas",
      ],
      correct: 2,
      explain:
        "The Ad-hoc Committee on the National Flag was a MINOR committee, chaired by Dr. Rajendra Prasad. The other three are all major committees.",
    },
    {
      q: "The Advisory Committee on Fundamental Rights, Minorities and Tribal and Excluded Areas had how many sub-committees?",
      options: ["Three", "Four", "Five", "Six"],
      correct: 2,
      explain:
        "The Advisory Committee had exactly five sub-committees covering Fundamental Rights, Minorities, NE Tribal Areas, Excluded Areas (non-Assam), and NW Frontier Tribal Areas.",
    },
    {
      q: "Which of the following best captures the overall division of committee chairmanships among the top leaders of the Constituent Assembly?",
      options: [
        "Nehru: federal union architecture; Patel: provincial governance and protective provisions; Ambedkar: actual text drafting; Prasad: procedural and administrative oversight",
        "Nehru: minority rights; Patel: federal structure; Ambedkar: foreign policy; Prasad: Constitution drafting",
        "All four leaders shared chairmanship of the Drafting Committee equally",
        "Nehru chaired only one committee; Ambedkar chaired all substantive committees",
      ],
      correct: 0,
      explain:
        "This reflects the actual distribution: Nehru (Union architecture + States negotiation), Patel (provincial + protective provisions), Ambedkar (drafting the text), Prasad (procedural/administrative oversight).",
    },
    {
      q: [
        "Consider the following statements:",
        "I. There were eight major committees.",
        "II. Jawaharlal Nehru chaired three of them.",
        "III. Dr. B.R. Ambedkar chaired two of them.",
        "How many of the statements given above are correct?",
      ],
      options: ["Only one", "Only two", "All three", "None"],
      correct: 1,
      explain:
        "Statements I and II are correct. Statement III is wrong — Ambedkar chaired only one major committee (the Drafting Committee).",
    },
    {
      q: [
        "Consider the following pairs (Committee — Chairman):",
        "I. Union Constitution Committee — Jawaharlal Nehru",
        "II. Steering Committee — Dr. Rajendra Prasad",
        "III. Provincial Constitution Committee — Dr. B.R. Ambedkar",
        "How many of the pairs given above are correctly matched?",
      ],
      options: ["Only one", "Only two", "All three", "None"],
      correct: 1,
      explain:
        "Pairs I and II are correct. Pair III is wrong — the Provincial Constitution Committee was chaired by Sardar Patel, not Ambedkar.",
    },
    {
      q: "The Rules of Procedure Committee was chaired by:",
      options: [
        "Jawaharlal Nehru",
        "Sardar Vallabhbhai Patel",
        "Dr. Rajendra Prasad",
        "Dr. B.R. Ambedkar",
      ],
      correct: 2,
      explain:
        "Dr. Rajendra Prasad chaired the Rules of Procedure Committee (as well as the Steering Committee).",
    },
    {
      q: [
        "Assertion (A): The North-West Frontier Tribal Areas Sub-Committee did not function on behalf of the Constituent Assembly of India.",
        "Reason (R): NWFP and Baluchistan became part of Pakistan following the June 3, 1947 statement and a subsequent referendum.",
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
        "Both are true and R explains A — since NWFP and Baluchistan joined Pakistan, the sub-committee's mandate no longer applied to India.",
    },
    {
      q: "The Sub-Committee on the North-East Frontier Tribal Areas and Assam Excluded Areas was chaired by:",
      options: [
        "J.B. Kripalani",
        "H.C. Mukherjee",
        "Gopinath Bardoloi",
        "A.V. Thakkar",
      ],
      correct: 2,
      explain:
        "Gopinath Bardoloi chaired the NE Frontier Tribal Areas and Assam Excluded Areas Sub-Committee.",
    },
    {
      q: "Which committee was chaired by Sardar Vallabhbhai Patel?",
      options: [
        "Union Powers Committee",
        "Provincial Constitution Committee",
        "States Committee",
        "Steering Committee",
      ],
      correct: 1,
      explain:
        "Sardar Patel chaired the Provincial Constitution Committee (and the Advisory Committee).",
    },
    {
      q: [
        "Statement I: The Advisory Committee on Fundamental Rights, Minorities and Tribal and Excluded Areas had five sub-committees.",
        "Statement II: It was chaired by Jawaharlal Nehru.",
        "Which one of the following is correct?",
      ],
      options: [
        "Both statements are true, and II is the correct explanation of I",
        "Both statements are true, but II is NOT the correct explanation of I",
        "Statement I is true, but Statement II is false",
        "Statement I is false, but Statement II is true",
      ],
      correct: 2,
      explain:
        "Statement I is true, but Statement II is false — the Advisory Committee was chaired by Sardar Patel, not Nehru.",
    },
    {
      q: "The Excluded and Partially Excluded Areas (other than Assam) Sub-Committee was chaired by:",
      options: [
        "A.V. Thakkar",
        "Gopinath Bardoloi",
        "H.C. Mukherjee",
        "J.B. Kripalani",
      ],
      correct: 0,
      explain:
        "A.V. Thakkar chaired the Excluded and Partially Excluded Areas (non-Assam) Sub-Committee.",
    },
    {
      q: [
        "Consider the following statements:",
        "I. J.B. Kripalani chaired the Fundamental Rights Sub-Committee.",
        "II. H.C. Mukherjee chaired the Minorities Sub-Committee.",
        "III. The States Committee was chaired by Sardar Patel.",
        "How many of the statements given above are correct?",
      ],
      options: ["Only one", "Only two", "All three", "None"],
      correct: 1,
      explain:
        "Statements I and II are correct. Statement III is wrong — the States Committee was chaired by Jawaharlal Nehru.",
    },
    {
      q: "Which leader among the following chaired the largest number of major committees of the Constituent Assembly?",
      options: [
        "Sardar Vallabhbhai Patel",
        "Jawaharlal Nehru",
        "Dr. Rajendra Prasad",
        "Dr. B.R. Ambedkar",
      ],
      correct: 1,
      explain:
        "Nehru chaired three major committees (Union Powers, Union Constitution, States) — more than any other leader.",
    },
  ],
};
