import { QuizCategory } from '@/types/quiz';

export const quizCategories: QuizCategory[] = [
{

    id: "history-framing",

    title: "Constitutional History & Framing",

    description: "The journey from the East India Company to the Sovereign Republic of India.",

    icon: "⌛",

    colorClass: "amber",

    difficulty: "Advanced",

    questions: [

      { question: "Which Act established the Supreme Court at Calcutta in 1774?", options: ['Regulating Act 1773', 'Pitts India Act 1784', 'Charter Act 1793', 'Charter Act 1813'], correctAnswer: 0, explanation: "The Regulating Act of 1773 provided for the establishment of a Supreme Court at Fort William, Calcutta." },

      { question: "Who was the first Governor-General of India?", options: ['Warren Hastings', 'William Bentinck', 'Lord Cornwallis', 'Lord Canning'], correctAnswer: 1, explanation: "The Charter Act of 1833 designated the Governor-General of Bengal as the Governor-General of India. William Bentinck was the first." },

      { question: "Which Act introduced communal representation for Muslims?", options: ['Act of 1892', 'Act of 1909', 'Act of 1919', 'Act of 1935'], correctAnswer: 1, explanation: "The Morley-Minto Reforms (1909) introduced separate electorates for Muslims." },

      { question: "The system of 'Dyarchy' was introduced in provinces by which Act?", options: ['Act of 1909', 'Act of 1919', 'Act of 1935', 'Act of 1947'], correctAnswer: 1, explanation: "The Montagu-Chelmsford Reforms (1919) introduced dyarchy in provincial governments." },

      { question: "Which Act abolished the East India Company's rule and transferred power to the British Crown?", options: ['Act of 1833', 'Act of 1853', 'Act of 1858', 'Act of 1861'], correctAnswer: 2, explanation: "The Government of India Act 1858 (Act for the Better Government of India) transferred power to the Crown." },

      { question: "Who was the temporary President of the Constituent Assembly?", options: ['Dr. Rajendra Prasad', 'Dr. B.R. Ambedkar', 'Dr. Sachchidananda Sinha', 'B.N. Rau'], correctAnswer: 2, explanation: "Following the French practice, the oldest member Dr. Sachchidananda Sinha was elected temporary President on 9 Dec 1946." },

      { question: "The 'Objectives Resolution' was moved in the CA by:", options: ['Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel', 'M.K. Gandhi'], correctAnswer: 1, explanation: "Jawaharlal Nehru moved the historic Objectives Resolution on Dec 13, 1946." },

      { question: "Who was the Constitutional Advisor to the Constituent Assembly?", options: ['B.N. Rau', 'K.M. Munshi', 'S.N. Mukherjee', 'H.V.R. Iyengar'], correctAnswer: 0, explanation: "Sir B.N. Rau was appointed as the Legal Advisor (Constitutional Advisor) to the CA." },

      { question: "Which Act separated Burma from India?", options: ['Act of 1909', 'Act of 1919', 'Act of 1935', 'Act of 1947'], correctAnswer: 2, explanation: "The Government of India Act 1935 provided for the separation of Burma from India." },

      { question: "The Drafting Committee was set up on:", options: ['15 August 1947', '29 August 1947', '26 November 1949', '24 January 1950'], correctAnswer: 1, explanation: "The Drafting Committee, chaired by Dr. Ambedkar, was set up on August 29, 1947." },

      { question: "How many sessions did the Constituent Assembly hold?", options: ['9', '11', '13', '15'], correctAnswer: 1, explanation: "The CA held 11 sessions over 2 years, 11 months, and 18 days." },

      { question: "The National Flag was adopted by the CA on:", options: ['22 July 1947', '15 August 1947', '26 January 1950', '24 January 1950'], correctAnswer: 0, explanation: "The National Flag was adopted on July 22, 1947." },

      { question: "Which Act introduced the 'Portfolio System' in India?", options: ['Act of 1858', 'Act of 1861', 'Act of 1892', 'Act of 1909'], correctAnswer: 1, explanation: "The Indian Councils Act 1861 gave statutory recognition to the portfolio system started by Lord Canning." },

      { question: "The Federal Court of India was established in which year?", options: ['1935', '1937', '1947', '1950'], correctAnswer: 1, explanation: "The Federal Court was established in 1937 under the provisions of the GOI Act 1935." },

      { question: "Who was the first Indian to join the Viceroy's Executive Council?", options: ['Satyendra Prasad Sinha', 'Dadabhai Naoroji', 'Motilal Nehru', 'Tej Bahadur Sapru'], correctAnswer: 0, explanation: "S.P. Sinha became the first Indian member of the Viceroy's Executive Council (Law Member) under the 1909 Act." },

      { question: "The Cabinet Mission arrived in India in:", options: ['1942', '1945', '1946', '1947'], correctAnswer: 2, explanation: "The Cabinet Mission (Pethick-Lawrence, Stafford Cripps, A.V. Alexander) arrived in March 1946." },

      { question: "Which Act for the first time recognized the 'Right of Education' for Indians by allocating 1 Lakh rupees?", options: ['Charter Act 1813', 'Charter Act 1833', 'Charter Act 1853', 'Act of 1858'], correctAnswer: 0, explanation: "The Charter Act of 1813 allotted 1 lakh rupees annually for the promotion of education in India." },

      { question: "Who was the Chairman of the Union Powers Committee of the CA?", options: ['Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel', 'J.B. Kripalani'], correctAnswer: 1, explanation: "Jawaharlal Nehru chaired the Union Powers Committee and the Union Constitution Committee." },

      { question: "Who calligraphed the original Indian Constitution in italic style?", options: ['Nandlal Bose', 'Prem Behari Narain Raizada', 'Vasant Krishan Vaidya', 'Beohar Rammanohar Sinha'], correctAnswer: 1, explanation: "The original Constitution was handwritten (calligraphed) by Prem Behari Narain Raizada." },

      { question: "The symbol (seal) adopted by the CA was:", options: ['Tiger', 'Lion', 'Elephant', 'Lotus'], correctAnswer: 2, explanation: "The Constituent Assembly adopted the Elephant as its symbol (seal)." },

      { question: "Who was the Chief Draftsman of the Constitution in the CA?", options: ['B.N. Rau', 'S.N. Mukherjee', 'K.M. Munshi', 'Alladi Krishnaswamy Ayyar'], correctAnswer: 1, explanation: "S.N. Mukherjee was the Chief Draftsman of the Constitution in the Constituent Assembly." },

      { question: "The 'Simon Commission' was appointed in:", options: ['1927', '1928', '1930', '1935'], correctAnswer: 0, explanation: "The Statutory Commission (Simon Commission) was appointed in Nov 1927 to report on the GOI Act 1919." },

      { question: "The 'Communal Award' was announced by:", options: ['Lord Irwin', 'Ramsay MacDonald', 'Winston Churchill', 'Clement Attlee'], correctAnswer: 1, explanation: "British PM Ramsay MacDonald announced the Communal Award in Aug 1932, providing separate electorates for depressed classes." },

      { question: "Which Act introduced 'Provincial Autonomy'?", options: ['Act of 1909', 'Act of 1919', 'Act of 1935', 'Act of 1947'], correctAnswer: 2, explanation: "The GOI Act 1935 abolished dyarchy in provinces and introduced 'provincial autonomy'." },

      { question: "Who was the Chairman of the Advisory Committee on Fundamental Rights?", options: ['Jawaharlal Nehru', 'Sardar Patel', 'J.B. Kripalani', 'H.C. Mukherjee'], correctAnswer: 1, explanation: "Sardar Vallabhbhai Patel chaired the Advisory Committee on FRs, Minorities, and Tribal/Excluded Areas." },

      { question: "The Constitution was adopted on Nov 26, 1949. Which of these came into force immediately?", options: ['Elections', 'Citizenship', 'Provisional Parliament', 'All of the above'], correctAnswer: 3, explanation: "Provisions relating to citizenship, elections, provisional parliament, and temporary/transitional provisions came into force on Nov 26, 1949." },

      { question: "Who was the first woman to be elected to the CA?", options: ['Sarojini Naidu', 'Ammu Swaminathan', 'Vijayalakshmi Pandit', 'There were 15 women original members'], correctAnswer: 3, explanation: "The CA had 15 women members in total, including Sarojini Naidu, Durgabai Deshmukh, and others." },

      { question: "The 'Mountbatten Plan' is also known as:", options: ['June 3 Plan', 'August Offer', 'Dickie Bird Plan', 'Both (a) and (c)'], correctAnswer: 3, explanation: "Lord Mountbatten's partition plan is known as the June 3 Plan and sometimes the Dickie Bird Plan." },

      { question: "Which Act ended the 'Dual Government' system of the Board of Control and Court of Directors?", options: ['Act of 1833', 'Act of 1853', 'Act of 1858', 'Act of 1861'], correctAnswer: 2, explanation: "The GOI Act 1858 abolished the Board of Control and Court of Directors, ending the dual government system." },

      { question: "The 'Poona Pact' was signed between:", options: ['Gandhi and Jinnah', 'Gandhi and Ambedkar', 'Nehru and Patel', 'Ambedkar and Jinnah'], correctAnswer: 1, explanation: "The Poona Pact (1932) was an agreement between Gandhi and Ambedkar on reservation of seats for depressed classes." },

      { question: "Who was the Vice-President of the Constituent Assembly?", options: ['H.C. Mukherjee', 'V.T. Krishnamachari', 'Both (a) and (b)', 'K.M. Munshi'], correctAnswer: 2, explanation: "The CA had two Vice-Presidents: H.C. Mukherjee and V.T. Krishnamachari." },

      { question: "Which Act introduced the 'Budget' discussion for the first time?", options: ['Act of 1858', 'Act of 1861', 'Act of 1892', 'Act of 1909'], correctAnswer: 2, explanation: "The Indian Councils Act 1892 allowed the councils to discuss the budget and address questions to the executive." },

      { question: "The 'August Offer' was made by which Viceroy?", options: ['Lord Irwin', 'Lord Linlithgow', 'Lord Wavell', 'Lord Mountbatten'], correctAnswer: 1, explanation: "Lord Linlithgow made the 'August Offer' in 1940 to get Indian support for WWII." },

      { question: "Who was the Chairman of the Fundamental Rights Sub-Committee?", options: ['Sardar Patel', 'J.B. Kripalani', 'Dr. B.R. Ambedkar', 'H.C. Mukherjee'], correctAnswer: 1, explanation: "J.B. Kripalani was the Chairman of the Fundamental Rights Sub-Committee under the Advisory Committee." },

      { question: "The National Anthem 'Jana Gana Mana' was adopted on:", options: ['15 August 1947', '26 November 1949', '24 January 1950', '26 January 1950'], correctAnswer: 2, explanation: "The CA adopted Jana Gana Mana as the National Anthem on January 24, 1950." },

      { question: "Who calligraphed the Hindi version of the Constitution?", options: ['Prem Behari Narain Raizada', 'Vasant Krishan Vaidya', 'Nandlal Bose', 'S.N. Mukherjee'], correctAnswer: 1, explanation: "Vasant Krishan Vaidya calligraphed the Hindi version, which was illuminated by Nandlal Bose." },

      { question: "Which Act gave statutory recognition to the practice of 'Nomination' for the first time?", options: ['Act of 1861', 'Act of 1892', 'Act of 1909', 'Act of 1919'], correctAnswer: 1, explanation: "The 1892 Act provided for limited and indirect use of election (though called nomination) to fill non-official seats." },

      { question: "The 'Cripps Mission' visited India in:", options: ['1940', '1942', '1944', '1946'], correctAnswer: 1, explanation: "Sir Stafford Cripps brought a draft proposal for a dominion status after WWII in 1942." },

      { question: "Who was the Chairman of the Minorities Sub-Committee?", options: ['H.C. Mukherjee', 'J.B. Kripalani', 'Sardar Patel', 'K.M. Munshi'], correctAnswer: 0, explanation: "H.C. Mukherjee was the Chairman of the Minorities Sub-Committee." },

      { question: "The last session of the Constituent Assembly was held on:", options: ['26 Nov 1949', '24 Jan 1950', '26 Jan 1950', '15 Aug 1947'], correctAnswer: 1, explanation: "The CA held its final session on Jan 24, 1950, where members signed the Constitution." },

      { question: "The 'Rowlatt Act' was passed in:", options: ['1917', '1919', '1921', '1923'], correctAnswer: 1, explanation: "The Anarchical and Revolutionary Crimes Act (Rowlatt Act) was passed in March 1919." },

      { question: "The 'Doctrine of Lapse' was popularized by:", options: ['Lord Wellesley', 'Lord Dalhousie', 'Lord Curzon', 'Lord Hastings'], correctAnswer: 1, explanation: "Lord Dalhousie used the Doctrine of Lapse to annex several Indian states." },

      { question: "Who was the Chairman of the States Committee (Negotiating Committee) of CA?", options: ['Jawaharlal Nehru', 'Sardar Patel', 'Dr. Rajendra Prasad', 'K.M. Munshi'], correctAnswer: 0, explanation: "Jawaharlal Nehru was the Chairman of the States Committee for negotiating with Princely States." },

      { question: "The 'Subsidiary Alliance' system was introduced by:", options: ['Lord Cornwallis', 'Lord Wellesley', 'Lord Hastings', 'Lord Dalhousie'], correctAnswer: 1, explanation: "Lord Richard Wellesley introduced the Subsidiary Alliance system." },

      { question: "Which Act made the GG of India's council a purely legislative body for the first time?", options: ['Act of 1833', 'Act of 1853', 'Act of 1858', 'Act of 1861'], correctAnswer: 1, explanation: "The Charter Act 1853 separated legislative and executive functions of the GG's Council." },

      { question: "The 'White Paper' on constitutional reforms led to which Act?", options: ['Act of 1909', 'Act of 1919', 'Act of 1935', 'Act of 1947'], correctAnswer: 2, explanation: "The GOI Act 1935 was based on the proposals in the White Paper prepared after the Round Table Conferences." },

      { question: "How many members signed the Constitution on Jan 24, 1950?", options: ['299', '284', '250', '211'], correctAnswer: 1, explanation: "Out of 299 members, 284 were actually present and signed the Constitution." },

      { question: "Who was the first Indian to be the President of the Central Legislative Assembly?", options: ['Vithalbhai J. Patel', 'Motilal Nehru', 'C.R. Das', 'Sardar Patel'], correctAnswer: 0, explanation: "Vithalbhai J. Patel was the first Indian Speaker (President) of the Central Legislative Assembly in 1925." },

      { question: "The 'IIbert Bill' controversy happened during the time of:", options: ['Lord Lytton', 'Lord Ripon', 'Lord Dufferin', 'Lord Lansdowne'], correctAnswer: 1, explanation: "The Ilbert Bill (1883) under Lord Ripon sought to allow Indian judges to try Europeans." },

      { question: "The 'Vernacular Press Act' was passed by:", options: ['Lord Ripon', 'Lord Lytton', 'Lord Curzon', 'Lord Mayo'], correctAnswer: 1, explanation: "Lord Lytton passed the Vernacular Press Act in 1878 to curtail freedom of Indian language press." },

    ],

  },

  {

    id: "state-executive",

    title: "The State Executive",

    description: "Governor, Chief Minister, and the administration of States.",

    icon: "👤",

    colorClass: "orange",

    difficulty: "Intermediate",

    questions: [

      { question: "The Governor of a State is appointed by:", options: ['Chief Minister', 'Prime Minister', 'President', 'Chief Justice of High Court'], correctAnswer: 2, explanation: "Article 155 states that the Governor of a State shall be appointed by the President by warrant under his hand and seal." },

      { question: "What is the minimum age to be appointed as Governor?", options: ['25 years', '30 years', '35 years', '45 years'], correctAnswer: 2, explanation: "Article 157 requires a person to be a citizen of India and have completed 35 years of age." },

      { question: "Article 161 deals with the Governor's power to:", options: ['Appoint the CM', 'Grant pardons, etc.', 'Issue ordinances', 'Address the legislature'], correctAnswer: 1, explanation: "Article 161 gives the Governor power to grant pardons, reprieves, respites or remissions of punishment." },

      { question: "The Chief Minister is appointed by:", options: ['President', 'Governor', 'State Legislature', 'Chief Justice of India'], correctAnswer: 1, explanation: "Article 164(1) states that the Chief Minister shall be appointed by the Governor." },

      { question: "The Council of Ministers in a State is collectively responsible to:", options: ['The Governor', 'The State Legislative Assembly', 'The President', 'The Chief Minister'], correctAnswer: 1, explanation: "Article 164(2) states that the Council of Ministers shall be collectively responsible to the Legislative Assembly of the State." },

      { question: "Who is the Advocate-General for a State appointed by?", options: ['President', 'Governor', 'Chief Justice of High Court', 'CM'], correctAnswer: 1, explanation: "Article 165 states that the Governor of each State shall appoint a person who is qualified to be a High Court judge as Advocate-General." },

      { question: "The executive power of the State is vested in:", options: ['The Chief Minister', 'The Governor', 'The Council of Ministers', 'The State Assembly'], correctAnswer: 1, explanation: "Article 154 states that the executive power of the State shall be vested in the Governor." },

      { question: "A person can be appointed as Governor of two or more States under:", options: ['Original Constitution', '7th Amendment 1956', '42nd Amendment 1976', '44th Amendment 1978'], correctAnswer: 1, explanation: "The 7th Constitutional Amendment Act of 1956 facilitated the appointment of the same person as Governor for two or more States." },

      { question: "Article 163 provides that there shall be a Council of Ministers to aid and advise the:", options: ['Chief Minister', 'Governor', 'President', 'State Legislature'], correctAnswer: 1, explanation: "Article 163(1) establishes the CoM to aid and advise the Governor in the exercise of his functions." },

      { question: "Which Article requires the CM to furnish information to the Governor?", options: ['Article 163', 'Article 164', 'Article 167', 'Article 174'], correctAnswer: 2, explanation: "Article 167 defines the duties of the CM in furnishing information to the Governor." },

      { question: "The Governor's oath is administered by:", options: ['President', 'Chief Justice of High Court', 'Chief Minister', 'Speaker of Assembly'], correctAnswer: 1, explanation: "Article 159 states the oath is administered by the Chief Justice of the High Court or the senior-most judge." },

      { question: "A Governor holds office for a term of:", options: ['5 years during pleasure of President', '5 years during pleasure of Governor', '6 years', 'Until age 65'], correctAnswer: 0, explanation: "Article 156 states the Governor holds office during the pleasure of the President, and subject to that, for a term of 5 years." },

      { question: "Who can be removed from office without impeachment?", options: ['President', 'SC Judge', 'Governor', 'CEC'], correctAnswer: 2, explanation: "The Governor holds office during the pleasure of the President and can be removed at any time without a formal impeachment." },

      { question: "If the office of Governor falls vacant, who performs his functions?", options: ['Chief Minister', 'Speaker of Assembly', 'Chief Justice of High Court', 'Vice-President'], correctAnswer: 2, explanation: "By convention, the Chief Justice of the concerned State High Court is appointed to perform the Governor's duties." },

      { question: "The salary and allowances of the Governor are charged on:", options: ['Consolidated Fund of India', 'Consolidated Fund of the State', 'Contingency Fund of India', 'Public Accounts of State'], correctAnswer: 1, explanation: "The emoluments and allowances of the Governor are charged on the Consolidated Fund of the State." },

      { question: "The Governor acts as an 'Agent of the Centre' during:", options: ['Financial Emergency', "President's Rule (Art 356)", 'National Emergency', 'All of the above'], correctAnswer: 1, explanation: "During President's Rule, the Governor carries on the state administration on behalf of the President." },

      { question: "Which Article empowers the Governor to promulgate ordinances?", options: ['Article 123', 'Article 213', 'Article 161', 'Article 174'], correctAnswer: 1, explanation: "Article 213 gives the Governor power to promulgate ordinances when the State Legislature is not in session." },

      { question: "An Ordinance issued by the Governor must be approved by the State Legislature within:", options: ['6 weeks of reassembly', '6 months', '3 months', '1 year'], correctAnswer: 0, explanation: "An ordinance must be laid before the State Legislature and ceases to operate after 6 weeks from reassembly." },

      { question: "The Governor can nominate how many members to the Legislative Council (if exists)?", options: ['1/3rd', '1/6th', '1/12th', '2 members'], correctAnswer: 1, explanation: "Under Article 171, the Governor nominates 1/6th of the members of the Legislative Council." },

      { question: "The Governor can reserve a Bill for the consideration of the President under:", options: ['Article 200', 'Article 201', 'Article 111', 'Article 123'], correctAnswer: 0, explanation: "Article 200 allows the Governor to reserve certain Bills for the President's consideration." },

      { question: "Which Bill MUST be reserved by the Governor for the President's consideration?", options: ['Money Bill', 'Bill that endangers the position of the High Court', 'Bill on Concurrent List', 'Ordinary Bill'], correctAnswer: 1, explanation: "The Governor must reserve any Bill that, in his opinion, would derogate from the powers of the High Court." },

      { question: "The total number of ministers, including the CM, in a State CoM cannot exceed:", options: ['10% of Assembly strength', '15% of Assembly strength (min 12)', '20% of Assembly strength', 'No limit'], correctAnswer: 1, explanation: "The 91st Amendment (2003) limited the CoM size to 15% of the total strength of the Legislative Assembly (minimum 12)." },

      { question: "The ministers in a State serve during the pleasure of the:", options: ['President', 'Governor', 'Chief Minister', 'Speaker'], correctAnswer: 1, explanation: "Article 164(1) states that ministers hold office during the pleasure of the Governor." },

      { question: "Who can dissolve the State Legislative Assembly?", options: ['President', 'Governor', 'Chief Minister', 'Speaker'], correctAnswer: 1, explanation: "Article 174(2)(b) empowers the Governor to dissolve the Legislative Assembly." },

      { question: "Who addresses the State Legislature at the commencement of the first session each year?", options: ['Chief Minister', 'Governor', 'Speaker', 'Chief Justice of HC'], correctAnswer: 1, explanation: "Article 176 provides for a special address by the Governor at the commencement of the first session after each general election and the first session of each year." },

      { question: "Which Article deals with the Advocate-General of the State?", options: ['Article 76', 'Article 165', 'Article 167', 'Article 214'], correctAnswer: 1, explanation: "Article 165 provides for the Advocate-General for the State (equivalent to Attorney-General for Union)." },

      { question: "The Governor is the ex-officio Chancellor of:", options: ['State Universities', 'Central Universities', 'Both', 'None'], correctAnswer: 0, explanation: "In most states, the Governor is the ex-officio Chancellor of the universities established by the State." },

      { question: "The Governor's discretionary powers are mentioned in:", options: ['Article 163', 'Article 164', 'Article 165', 'Article 166'], correctAnswer: 0, explanation: "Article 163(1) implicitly mentions discretionary powers by saying 'except in so far as he is... required to exercise his functions... in his discretion'." },

      { question: "Can the Governor pardon a death sentence?", options: ['Yes, under Article 161', 'No, only the President can', "Only with CM's consent", 'Only for state laws'], correctAnswer: 1, explanation: "The Governor can suspend or commute a death sentence but cannot fully pardon it; only the President has that power." },

      { question: "The State CoM is headed by:", options: ['Governor', 'Chief Minister', 'Chief Secretary', 'Speaker'], correctAnswer: 1, explanation: "The CM is the head of the State Council of Ministers." },

      { question: "Who can suggest the name of the CM to the Governor if no party has a majority?", options: ['The outgoing CM', 'The Speaker', 'The Governor uses his discretion', 'The President'], correctAnswer: 2, explanation: "In a hung assembly, the Governor uses his situational discretion to invite a leader to form the government." },

      { question: "A person who is not a member of the State Legislature can be a minister for a maximum of:", options: ['3 months', '6 months', '1 year', 'No limit'], correctAnswer: 1, explanation: "Under Article 164(4), a minister must become a member of the legislature within 6 months." },

      { question: "The 'Consolidated Fund of the State' is established under:", options: ['Article 266', 'Article 267', 'Article 280', 'Article 300'], correctAnswer: 0, explanation: "Article 266 provides for the Consolidated Fund and Public Account of India and of the States." },

      { question: "The 'Contingency Fund of the State' is established under:", options: ['Article 266', 'Article 267', 'Article 280', 'Article 300'], correctAnswer: 1, explanation: "Article 267(2) allows the State Legislature to establish a Contingency Fund for the State." },

      { question: "Who appoints the members of the State Public Service Commission?", options: ['President', 'Governor', 'Chief Minister', 'UPSC Chairman'], correctAnswer: 1, explanation: "Article 316 states the Chairman and members of a State PSC are appointed by the Governor." },

      { question: "Who can remove a member of the State Public Service Commission?", options: ['Governor', 'President', 'Chief Justice of HC', 'Chief Minister'], correctAnswer: 1, explanation: "Although appointed by the Governor, members of SPSC can only be removed by the President (Article 317)." },

      { question: "The State Election Commissioner is appointed by:", options: ['President', 'Governor', 'CEC of India', 'Chief Minister'], correctAnswer: 1, explanation: "Under Article 243K, the State Election Commissioner is appointed by the Governor." },

      { question: "The State Election Commissioner can be removed:", options: ['By Governor at pleasure', 'Only in like manner as a High Court judge', 'By the President', 'By the CM'], correctAnswer: 1, explanation: "To ensure independence, the SEC can only be removed in the same manner as a High Court judge." },

      { question: "Which Article allows the Governor to nominate one Anglo-Indian to the Assembly (now abolished)?", options: ['Article 331', 'Article 333', 'Article 334', 'Article 338'], correctAnswer: 1, explanation: "Article 333 allowed nomination of one Anglo-Indian, which was abolished by the 104th Amendment 2020." },

      { question: "The Governor can grant pardon for offences against laws relating to:", options: ['Union List', 'State List and Concurrent List', 'Global laws', 'Only criminal laws'], correctAnswer: 1, explanation: "The Governor's pardoning power extends to matters to which the executive power of the State extends (State and Concurrent List subjects)." },

      { question: "Who acts as the 'link' between the Governor and the CoM?", options: ['Chief Secretary', 'Chief Minister', 'Speaker', 'Advocate-General'], correctAnswer: 1, explanation: "The CM communicates all decisions of the CoM to the Governor (Article 167)." },

      { question: "The Governor's special address under Article 176 is:", options: ['Optional', 'Mandatory', 'Only during Emergency', 'Only for Money Bills'], correctAnswer: 1, explanation: "It is a mandatory constitutional requirement at the start of the first session of the year and after elections." },

      { question: "Which of these is NOT a formal qualification for Governor?", options: ['Citizen of India', 'Completed 35 years', 'Should not be a member of Parliament/Legislature', 'Should be a resident of the state'], correctAnswer: 3, explanation: "Residency is a convention, not a formal constitutional qualification." },

      { question: "Can a Governor be a member of either House of Parliament?", options: ['Yes', 'No (must vacate seat)', 'Only if nominated', 'Only if PM allows'], correctAnswer: 1, explanation: "Article 158(1) states if an MP or MLA is appointed Governor, he is deemed to have vacated his seat." },

      { question: "Who determines the conditions of service of the Advocate-General?", options: ['President', 'Governor', 'State Legislature', 'Parliament'], correctAnswer: 1, explanation: "The Advocate-General holds office during the pleasure of the Governor and receives such remuneration as the Governor may determine." },

      { question: "The Governor's report under Article 356 is sent to:", options: ['The Prime Minister', 'The President', 'The Parliament', 'The Home Minister'], correctAnswer: 1, explanation: "The Governor sends a report to the President if the state government cannot be carried on as per the Constitution." },

      { question: "Which Article deals with the Council of Ministers to aid and advise the Governor?", options: ['Article 74', 'Article 163', 'Article 164', 'Article 165'], correctAnswer: 1, explanation: "Article 163 is the state counterpart to Article 74 for the Union." },

      { question: "The Governor can summon, prorogue the Houses and dissolve the Assembly under:", options: ['Article 174', 'Article 175', 'Article 176', 'Article 177'], correctAnswer: 0, explanation: "Article 174 empowers the Governor to summon, prorogue and dissolve the state legislature." },

      { question: "The Governor has the right to send messages to the House(s) under:", options: ['Article 174', 'Article 175', 'Article 176', 'Article 177'], correctAnswer: 1, explanation: "Article 175(2) gives the Governor the right to send messages to the House with respect to a Bill or otherwise." },

      { question: "Who is the legal advisor to the State Government?", options: ['Chief Justice of HC', 'Advocate-General', 'Law Minister', 'Attorney-General'], correctAnswer: 1, explanation: "The Advocate-General is the primary legal advisor to the State Government (Article 165)." },

    ],

  },

  {

    id: "state-legislature",

    title: "The State Legislature",

    description: "Vidhan Sabha, Vidhan Parishad, and the law-making process in States.",

    icon: "🏢️",

    colorClass: "blue",

    difficulty: "Intermediate",

    questions: [

      { question: "Which Article provides for the Constitution of Legislatures in States?", options: ['Article 168', 'Article 169', 'Article 170', 'Article 171'], correctAnswer: 0, explanation: "Article 168 provides for a Legislature for every State, consisting of the Governor and one or two Houses." },

      { question: "Which Article deals with the abolition or creation of Legislative Councils in States?", options: ['Article 168', 'Article 169', 'Article 170', 'Article 171'], correctAnswer: 1, explanation: "Article 169 empowers Parliament to create or abolish a Legislative Council if the State Assembly passes a resolution by special majority." },

      { question: "The maximum strength of a State Legislative Assembly is:", options: ['400', '500', '550', 'Varies by state'], correctAnswer: 1, explanation: "Article 170 states the Assembly shall have not more than 500 and not less than 60 members (exceptions for small states)." },

      { question: "The minimum strength of a State Legislative Assembly is generally:", options: ['30', '40', '60', 'No limit'], correctAnswer: 2, explanation: "Article 170 sets 60 as the minimum, though Sikkim, Goa, Mizoram, etc., have fewer seats by special laws." },

      { question: "What is the maximum strength of a Legislative Council (Vidhan Parishad)?", options: ['1/3rd of Assembly strength', '50% of Assembly strength', 'Fixed at 100', '1/4th of Assembly strength'], correctAnswer: 0, explanation: "Article 171 states the total members in the Council shall not exceed 1/3rd of the total members in the Assembly." },

      { question: "The minimum strength of a Legislative Council is:", options: ['30', '40', '50', '60'], correctAnswer: 1, explanation: "Article 171(1) states the number of members in the Council shall in no case be less than 40." },

      { question: "Members of the Legislative Assembly (MLAs) are elected by:", options: ['Direct election', 'Indirect election', 'Nomination', 'Local bodies'], correctAnswer: 0, explanation: "MLAs are chosen by direct election from territorial constituencies in the State." },

      { question: "The term of a Legislative Assembly is usually:", options: ['4 years', '5 years', '6 years', 'Indefinite'], correctAnswer: 1, explanation: "Article 172 states the Legislative Assembly shall continue for 5 years from its first meeting." },

      { question: "The Legislative Council is a permanent body and:", options: ['Cannot be dissolved', '1/3rd members retire every 2 years', 'Members have a 6-year term', 'All of the above'], correctAnswer: 3, explanation: "Like the Rajya Sabha, the Legislative Council is permanent; 1/3rd members retire every second year after a 6-year term." },

      { question: "What is the minimum age to be a member of the Legislative Assembly (MLA)?", options: ['21 years', '25 years', '30 years', '35 years'], correctAnswer: 1, explanation: "Article 173(b) requires a minimum age of 25 years for the Assembly." },

      { question: "What is the minimum age to be a member of the Legislative Council (MLC)?", options: ['21 years', '25 years', '30 years', '35 years'], correctAnswer: 2, explanation: "Article 173(b) requires a minimum age of 30 years for the Council." },

      { question: "Who is the presiding officer of the State Legislative Assembly?", options: ['Governor', 'Chief Minister', 'Speaker', 'Chairman'], correctAnswer: 2, explanation: "The Speaker is the presiding officer of the Assembly, elected by its members." },

      { question: "Who is the presiding officer of the State Legislative Council?", options: ['Governor', 'Chief Minister', 'Speaker', 'Chairman'], correctAnswer: 3, explanation: "The Chairman is the presiding officer of the Council, elected by its members." },

      { question: "The Speaker of the Assembly can be removed by:", options: ['Governor', 'CM', 'Resolution passed by majority of all then members of Assembly', 'President'], correctAnswer: 2, explanation: "Article 179(c) allows removal of Speaker by a resolution of the Assembly after 14 days' notice." },

      { question: "Which House has the final power in passing Money Bills in a State?", options: ['Legislative Council', 'Legislative Assembly', 'Governor', 'Both equally'], correctAnswer: 1, explanation: "Article 198 states that a Money Bill can only be introduced in the Assembly and the Council has limited powers (14 days delay only)." },

      { question: "A Bill pending in the Legislature does NOT lapse on:", options: ['Dissolution of Assembly', 'Prorogation of the House(s)', 'Death of CM', 'None of the above'], correctAnswer: 1, explanation: "Article 196(3) states that a Bill pending in the Legislature shall not lapse by reason of the prorogation of the House(s)." },

      { question: "A Money Bill in the State is defined under:", options: ['Article 110', 'Article 199', 'Article 200', 'Article 111'], correctAnswer: 1, explanation: "Article 199 defines a Money Bill for States (equivalent to Article 110 for Union)." },

      { question: "Who decides whether a Bill is a Money Bill in the State?", options: ['Governor', 'Chief Minister', 'Speaker of Assembly', 'Chairman of Council'], correctAnswer: 2, explanation: "Under Article 199(3), the decision of the Speaker of the Legislative Assembly is final." },

      { question: "The 'Annual Financial Statement' of the State (Budget) is laid under:", options: ['Article 112', 'Article 202', 'Article 203', 'Article 204'], correctAnswer: 1, explanation: "Article 202 requires the Governor to lay the 'Annual Financial Statement' before the House(s) of the State Legislature." },

      { question: "No money can be withdrawn from the Consolidated Fund of the State without:", options: ["Governor's permission", 'Appropriation Act passed by Legislature', "Finance Minister's order", "CM's decree"], correctAnswer: 1, explanation: "Article 204 provides for Appropriation Bills; no money can be withdrawn without an Appropriation Act." },

      { question: "The quorum for a meeting of a House of State Legislature is:", options: ['1/3rd of total members', '1/10th of total members or 10 members, whichever is greater', '15 members', 'No quorum required'], correctAnswer: 1, explanation: "Article 189(3) sets the quorum at 1/10th of total members or 10, whichever is greater." },

      { question: "A person can be a member of both Houses of a State Legislature:", options: ['Yes', 'No', 'Only if CM allows', 'Only in UP and Bihar'], correctAnswer: 1, explanation: "Article 190(1) prohibits simultaneous membership of both Houses; the person must vacate one seat." },

      { question: "Disqualification of members of the State Legislature is decided by:", options: ['Speaker only', 'Governor in consultation with Election Commission', 'High Court', 'Supreme Court'], correctAnswer: 1, explanation: "Under Article 192, questions of disqualification (other than Tenth Schedule) are decided by the Governor, whose decision is final after ECI's opinion." },

      { question: "Disqualification on grounds of defection (Tenth Schedule) is decided by:", options: ['Governor', 'Election Commission', 'Speaker/Chairman of the House', 'High Court'], correctAnswer: 2, explanation: "Under the Tenth Schedule, the presiding officer of the House decides on defection-based disqualification." },

      { question: "Freedom of speech in the State Legislature is guaranteed by:", options: ['Article 19', 'Article 105', 'Article 194', 'Article 21'], correctAnswer: 2, explanation: "Article 194 provides for powers, privileges, and immunities of State Legislatures and their members." },

      { question: "The Legislative Council can delay an ordinary Bill for a maximum of:", options: ['14 days', '3 months initially, then 1 month (total 4 months)', '6 months', 'Indefinitely'], correctAnswer: 1, explanation: "Article 197 states the Council can delay a Bill passed by the Assembly for 3 months in the first instance and 1 month in the second." },

      { question: "Is there a provision for 'Joint Sitting' in State Legislatures?", options: ['Yes, under Art 108', 'No', 'Only for Money Bills', 'Only in Bicameral states'], correctAnswer: 1, explanation: "Unlike Parliament (Art 108), there is no provision for a Joint Sitting to resolve a deadlock in State Legislatures. The Assembly has the final word." },

      { question: "The 'Language to be used in the Legislature' is mentioned in:", options: ['Article 120', 'Article 210', 'Article 343', 'Article 345'], correctAnswer: 1, explanation: "Article 210 states that business in the State Legislature shall be transacted in the official language(s) of the State or in Hindi or English." },

      { question: "Who can permit a member to address the House in his mother tongue?", options: ['Chief Minister', 'Speaker/Chairman', 'Governor', 'Leader of Opposition'], correctAnswer: 1, explanation: "Under Article 210, the Speaker or Chairman may permit any member who cannot adequately express himself in the specified languages to address the House in his mother tongue." },

      { question: "Which Article prohibits Courts from inquiring into proceedings of the Legislature?", options: ['Article 122', 'Article 212', 'Article 226', 'Article 136'], correctAnswer: 1, explanation: "Article 212 states that the validity of any proceedings in the Legislature of a State shall not be called in question on the ground of any alleged irregularity of procedure." },

      { question: "A Vote on Account in the State is provided under:", options: ['Article 204', 'Article 206', 'Article 205', 'Article 207'], correctAnswer: 1, explanation: "Article 206 allows the Assembly to make grants in advance (Vote on Account) before the budget is passed." },

      { question: "Supplementary, additional or excess grants for a State are under:", options: ['Article 205', 'Article 206', 'Article 207', 'Article 208'], correctAnswer: 0, explanation: "Article 205 deals with supplementary, additional or excess grants." },

      { question: "Special provisions as to Financial Bills in a State are under:", options: ['Article 117', 'Article 207', 'Article 208', 'Article 209'], correctAnswer: 1, explanation: "Article 207 provides for special provisions for Financial Bills at the State level." },

      { question: "Who can make rules for regulating the procedure and conduct of business in the State House?", options: ['Governor', 'The House itself', 'Chief Minister', 'Parliament'], correctAnswer: 1, explanation: "Article 208 empowers each House of the Legislature of a State to make rules for regulating its procedure." },

      { question: "The total number of States in India with a bicameral legislature (two houses) is:", options: ['5', '6', '7', '8'], correctAnswer: 1, explanation: "Currently, 6 states have bicameral legislatures: Andhra Pradesh, Bihar, Karnataka, Maharashtra, Telangana, and Uttar Pradesh." },

      { question: "How many members of the Legislative Council are elected by the MLAs?", options: ['1/3rd', '1/6th', '1/12th', '1/4th'], correctAnswer: 0, explanation: "Article 171(3)(d) states 1/3rd are elected by the members of the Legislative Assembly." },

      { question: "How many members of the Legislative Council are elected by graduates?", options: ['1/3rd', '1/6th', '1/12th', '1/4th'], correctAnswer: 2, explanation: "Article 171(3)(b) states 1/12th are elected by graduates of 3 years' standing." },

      { question: "How many members of the Legislative Council are elected by teachers?", options: ['1/3rd', '1/6th', '1/12th', '1/4th'], correctAnswer: 2, explanation: "Article 171(3)(c) states 1/12th are elected by teachers of 3 years' standing in secondary or higher schools." },

      { question: "How many members of the Legislative Council are elected by local bodies (municipalities, etc.)?", options: ['1/3rd', '1/6th', '1/12th', '1/4th'], correctAnswer: 0, explanation: "Article 171(3)(a) states 1/3rd are elected by members of municipalities, district boards and other local authorities." },

      { question: "The Governor nominates 1/6th members of the Council from fields including:", options: ['Literature, Science, Art', 'Co-operative movement', 'Social service', 'All of the above'], correctAnswer: 3, explanation: "Article 171(5) lists Literature, Science, Art, Co-operative movement, and Social service." },

      { question: "The 'Resolution' for creating a Legislative Council must be passed by the Assembly by:", options: ['Simple majority', '2/3rd of members present and voting AND majority of total membership', '3/4th majority', 'Unanimous vote'], correctAnswer: 1, explanation: "Article 169 requires a special majority: majority of total membership AND 2/3rd of members present and voting." },

      { question: "A Bill passed by the Assembly but rejected by the Council:", options: ['Is dead', 'Can be passed again by Assembly and becomes law after 1 month even if Council rejects', 'Requires Joint Sitting', 'Goes to President'], correctAnswer: 1, explanation: "Under Article 197, if the Assembly passes the Bill again, it is deemed passed by both Houses even if the Council rejects or delays it for 1 month." },

      { question: "The 'Leader of the House' in the Assembly is usually:", options: ['The Speaker', 'The Chief Minister', 'The Governor', 'The Home Minister'], correctAnswer: 1, explanation: "The CM, being the leader of the majority party, is usually the Leader of the House." },

      { question: "Vacation of seats in State Legislature is covered under:", options: ['Article 190', 'Article 191', 'Article 192', 'Article 193'], correctAnswer: 0, explanation: "Article 190 deals with vacation of seats due to double membership, resignation, or absence." },

      { question: "Penalty for sitting and voting before taking oath in the State Legislature is:", options: ['Rs. 100 per day', 'Rs. 500 per day', 'Imprisonment', 'Dismissal'], correctAnswer: 1, explanation: "Article 193 prescribes a penalty of Rs. 500 for each day a person sits or votes without taking oath or when disqualified." },

      { question: "The State Legislature's power to make laws on Concurrent List is subject to:", options: ['Article 246', 'Article 254 (Repugnancy)', 'Both', 'None'], correctAnswer: 2, explanation: "Article 246 gives power, but Article 254 says if a State law conflicts with a Central law on Concurrent List, the Central law prevails (unless State law got Presidential assent)." },

      { question: "Which Article empowers the State Legislature to legislate on State List?", options: ['Article 245', 'Article 246(3)', 'Article 248', 'Article 250'], correctAnswer: 1, explanation: "Article 246(3) gives State Legislatures exclusive power to make laws for the State with respect to any of the matters in the State List." },

      { question: "The 'Sessions of the State Legislature' are summoned by:", options: ['Chief Minister', 'Speaker', 'Governor', 'President'], correctAnswer: 2, explanation: "Article 174(1) states the Governor shall from time to time summon the House(s)." },

      { question: "Maximum gap between two sessions of State Legislature is:", options: ['3 months', '6 months', '1 year', '4 months'], correctAnswer: 1, explanation: "Article 174(1) ensures that 6 months shall not intervene between the last sitting of one session and the first sitting of the next." },

      { question: "The 'Dissolution' of the Assembly is the end of the life of the House, whereas 'Prorogation' is:", options: ["The end of a member's term", 'The end of a session', 'A daily break', 'A court order'], correctAnswer: 1, explanation: "Prorogation ends a session of the House, while dissolution ends the very existence of the current Assembly." },

    ],

  },

  {

    id: "special-provisions",

    title: "Special Provisions & Regions",

    description: "Articles 370, 371 series, and the 5th/6th Schedules.",

    icon: "🗺️",

    colorClass: "purple",

    difficulty: "Advanced",

    questions: [

      { question: "Part XXI of the Constitution (Articles 369-392) deals with:", options: ['Fundamental Rights', 'Temporary, Transitional and Special Provisions', 'Emergency Provisions', 'Elections'], correctAnswer: 1, explanation: "Part XXI contains temporary, transitional and special provisions for various states and subjects." },

      { question: "Article 370, which gave special status to Jammu and Kashmir, was effectively abrogated in:", options: ['2014', '2017', '2019', '2021'], correctAnswer: 2, explanation: "The special status of J&K was effectively removed through a Presidential Order in August 2019, and the state was bifurcated into UTs." },

      { question: "Article 371 provides special provisions for which States?", options: ['Maharashtra and Gujarat', 'Nagaland and Assam', 'Manipur and Andhra Pradesh', 'Sikkim and Mizoram'], correctAnswer: 0, explanation: "Article 371 contains special provisions for Maharashtra and Gujarat (Development Boards)." },

      { question: "Article 371A provides special provisions for:", options: ['Nagaland', 'Assam', 'Manipur', 'Mizoram'], correctAnswer: 0, explanation: "Article 371A (added by 13th Amendment 1962) protects Naga customary laws and land rights." },

      { question: "Article 371B provides special provisions for:", options: ['Nagaland', 'Assam', 'Manipur', 'Mizoram'], correctAnswer: 1, explanation: "Article 371B (added by 22nd Amendment 1969) relates to the State of Assam (Committee of the Assembly for tribal areas)." },

      { question: "Article 371C provides special provisions for:", options: ['Nagaland', 'Assam', 'Manipur', 'Mizoram'], correctAnswer: 2, explanation: "Article 371C (added by 27th Amendment 1971) relates to the State of Manipur (Committee of members from Hill Areas)." },

      { question: "Article 371D and 371E contain special provisions for:", options: ['Andhra Pradesh and Telangana', 'Sikkim', 'Goa', 'Karnataka'], correctAnswer: 0, explanation: "Article 371D (32nd Amendment 1973) relates to equitable opportunities in employment/education in AP and Telangana." },

      { question: "Article 371F contains special provisions for:", options: ['Sikkim', 'Mizoram', 'Arunachal Pradesh', 'Goa'], correctAnswer: 0, explanation: "Article 371F (added by 36th Amendment 1975) relates to the State of Sikkim." },

      { question: "Article 371G contains special provisions for:", options: ['Mizoram', 'Arunachal Pradesh', 'Goa', 'Karnataka'], correctAnswer: 0, explanation: "Article 371G (added by 53rd Amendment 1986) protects Mizo customary law and land rights." },

      { question: "Article 371H contains special provisions for:", options: ['Mizoram', 'Arunachal Pradesh', 'Goa', 'Karnataka'], correctAnswer: 1, explanation: "Article 371H (added by 55th Amendment 1986) gives the Governor of Arunachal Pradesh special responsibility for law and order." },

      { question: "Article 371I contains special provisions for:", options: ['Goa', 'Karnataka', 'Maharashtra', 'Gujarat'], correctAnswer: 0, explanation: "Article 371I (added by 56th Amendment 1987) relates to the State of Goa." },

      { question: "Article 371J contains special provisions for:", options: ['Karnataka', 'Andhra Pradesh', 'Telangana', 'Kerala'], correctAnswer: 0, explanation: "Article 371J (added by 98th Amendment 2012) relates to the Hyderabad-Karnataka region of Karnataka." },

      { question: "The Fifth Schedule of the Constitution deals with:", options: ['Tribal areas in NE states', 'Scheduled Areas and Scheduled Tribes in other states', 'Official Languages', 'Allocation of seats in Rajya Sabha'], correctAnswer: 1, explanation: "The Fifth Schedule provides for the administration and control of Scheduled Areas and STs in states other than Assam, Meghalaya, Tripura and Mizoram." },

      { question: "The Sixth Schedule of the Constitution deals with tribal areas in:", options: ['Maharashtra, Gujarat', 'Assam, Meghalaya, Tripura, Mizoram', 'Nagaland, Manipur', 'Chhattisgarh, Jharkhand'], correctAnswer: 1, explanation: "The Sixth Schedule provides for Autonomous District Councils (ADCs) in these four Northeastern states." },

      { question: "Who has the power to declare an area as a 'Scheduled Area'?", options: ['Governor', 'Prime Minister', 'President', 'State Legislature'], correctAnswer: 2, explanation: "The President is empowered to declare an area to be a Scheduled Area under the Fifth Schedule." },

      { question: "The 'Tribes Advisory Council' (TAC) is established under:", options: ['Fifth Schedule', 'Sixth Schedule', 'Article 371', 'Article 338'], correctAnswer: 0, explanation: "The Fifth Schedule provides for a Tribes Advisory Council to advise on welfare of STs in the state." },

      { question: "Autonomous District Councils (ADCs) under the Sixth Schedule have:", options: ['Legislative powers', 'Judicial powers', 'Regulatory/Revenue powers', 'All of the above'], correctAnswer: 3, explanation: "ADCs have extensive powers to make laws on land, forests, etc., establish courts, and collect certain taxes/royalties." },

      { question: "Which Amendment added Article 371D for Andhra Pradesh?", options: ['24th Amendment', '32nd Amendment', '42nd Amendment', '44th Amendment'], correctAnswer: 1, explanation: "The 32nd Constitutional Amendment Act of 1973 added Article 371D." },

      { question: "Article 371-I was added when which territory became a state?", options: ['Sikkim', 'Goa', 'Mizoram', 'Arunachal Pradesh'], correctAnswer: 1, explanation: "Article 371-I was added when Goa became a full-fledged state in 1987." },

      { question: "The Governor of which state has special responsibility for law and order under Article 371H?", options: ['Nagaland', 'Manipur', 'Arunachal Pradesh', 'Mizoram'], correctAnswer: 2, explanation: "The Governor of Arunachal Pradesh has this special responsibility, acting in his individual judgment after consulting the CoM." },

      { question: "Under the Sixth Schedule, who has the power to organize and re-organize the autonomous districts?", options: ['President', 'Governor', 'Parliament', 'State Assembly'], correctAnswer: 1, explanation: "The Governor is empowered to organize and re-organize autonomous districts (increase/decrease area, change names)." },

      { question: "The Fifth Schedule currently applies to how many states?", options: ['5', '8', '10', '12'], correctAnswer: 2, explanation: "The Fifth Schedule currently applies to 10 states: AP, Telangana, Chhattisgarh, Gujarat, HP, Jharkhand, MP, Maharashtra, Odisha and Rajasthan." },

      { question: "Article 371A (Nagaland) was result of an agreement with:", options: ["Naga People's Convention", 'NSCN', 'Naga National Council', 'British Government'], correctAnswer: 0, explanation: "Article 371A was the result of a 16-point agreement between the Government of India and the Naga People's Convention." },

      { question: "Which Article empowers the President to establish a Central University in Andhra Pradesh?", options: ['Article 371D', 'Article 371E', 'Article 371F', 'Article 371G'], correctAnswer: 1, explanation: "Article 371E provides for the establishment of a Central University in Andhra Pradesh by a law of Parliament." },

      { question: "The PESA Act (1996) extends which part of the Constitution to Scheduled Areas?", options: ['Part III (FRs)', 'Part IX (Panchayats)', 'Part IXA (Municipalities)', 'Part IV (DPSPs)'], correctAnswer: 1, explanation: "The Provisions of the Panchayats (Extension to the Scheduled Areas) Act 1996 extends Part IX to Fifth Schedule areas." },

      { question: "Under the Sixth Schedule, an ADC consists of how many members?", options: ['15', '20', '30', '40'], correctAnswer: 2, explanation: "An Autonomous District Council usually consists of 30 members (4 nominated by Governor, 26 elected by adult franchise)." },

      { question: "The term of an ADC is:", options: ['4 years', '5 years', '6 years', 'Indefinite'], correctAnswer: 1, explanation: "The term of an ADC is 5 years from the date of its first meeting, unless dissolved earlier." },

      { question: "Which state is NOT covered under the Sixth Schedule?", options: ['Assam', 'Meghalaya', 'Manipur', 'Tripura'], correctAnswer: 2, explanation: "Manipur is not in the Sixth Schedule (it has special provisions under Article 371C). The four states are Assam, Meghalaya, Tripura, and Mizoram (AMTM)." },

      { question: "The special provision for Karnataka (Article 371J) covers which region?", options: ['Coastal Karnataka', 'Old Mysore', 'Hyderabad-Karnataka', 'Bombay-Karnataka'], correctAnswer: 2, explanation: "Article 371J relates to the 6 backward districts of the Hyderabad-Karnataka region." },

      { question: "The 'Inner Line Permit' (ILP) is a travel document required for entry into:", options: ['Arunachal Pradesh, Nagaland, Mizoram, Manipur', 'Sikkim, Himachal', 'Goa, Kerala', 'All tribal areas'], correctAnswer: 0, explanation: "The ILP system applies to these four states to regulate entry and stay of outsiders." },

      { question: "Which Amendment made Sikkim a 'full state' of India?", options: ['35th Amendment', '36th Amendment', '37th Amendment', '38th Amendment'], correctAnswer: 1, explanation: "The 36th Amendment 1975 made Sikkim the 22nd state of India." },

      { question: "Under the Fifth Schedule, who can direct that an Act of Parliament does NOT apply to a Scheduled Area?", options: ['President', 'Governor', 'State Assembly', 'Parliament'], correctAnswer: 1, explanation: "The Governor is empowered to direct that any particular Act of Parliament or of the State Legislature shall not apply or apply with modifications." },

      { question: "The 'Schedule' that protects the rights of indigenous people in the Northeast is:", options: ['Fifth', 'Sixth', 'Seventh', 'Eighth'], correctAnswer: 1, explanation: "The Sixth Schedule is the primary constitutional instrument for tribal self-rule in the Northeast." },

      { question: "Which state has the 'Gorkhaland Territorial Administration' (GTA)?", options: ['Sikkim', 'West Bengal', 'Assam', 'Uttarakhand'], correctAnswer: 1, explanation: "The GTA is an autonomous body for the Darjeeling and Kalimpong areas of West Bengal, established by a state law." },

      { question: "Article 371C (Manipur) gives the Governor special responsibility to ensure the proper functioning of:", options: ['The High Court', 'The Hill Areas Committee of the Assembly', 'The Police', 'The University'], correctAnswer: 1, explanation: "The Governor must report annually to the President on the administration of the Hill Areas and ensure the Committee's functioning." },

      { question: "The 32nd Amendment (Art 371D) was passed to resolve the:", options: ['Mulki Rules controversy in Andhra Pradesh', 'Separate Telangana movement', 'Andhra movement', 'Both (a) and (b)'], correctAnswer: 3, explanation: "Article 371D was a political settlement to address the regional demands in the undivided state of Andhra Pradesh." },

      { question: "Article 371F ensures that the Law of Sikkim before merger:", options: ['Is immediately void', 'Continues until amended/repealed', 'Is superior to Constitution', 'Is only for local bodies'], correctAnswer: 1, explanation: "Article 371F(k) ensures continuity of existing laws in Sikkim until the competent legislature changes them." },

      { question: "The Sixth Schedule allows ADCs to establish:", options: ['Primary schools', 'Markets', 'Dispensaries', 'All of the above'], correctAnswer: 3, explanation: "ADCs have power to establish and manage primary schools, dispensaries, markets, ferries, fisheries, etc." },

      { question: "Who can dissolve an Autonomous District Council?", options: ['President', 'Governor', 'Chief Minister', 'Parliament'], correctAnswer: 1, explanation: "The Governor can dissolve a District or Regional Council on the recommendation of a Commission of inquiry." },

      { question: "Article 371G (Mizoram) states that no Act of Parliament relating to Mizo customs shall apply unless:", options: ['The President orders', 'The State Legislative Assembly of Mizoram so decides by a resolution', 'The Governor allows', '1/2 states ratify'], correctAnswer: 1, explanation: "The Mizoram Assembly has the power to decide if Parliamentary laws on social/religious practices, customary law, and land should apply." },

      { question: "The 'Tribal Areas' in the Sixth Schedule are:", options: ['States', 'Autonomous Districts', 'Union Territories', 'Zila Parishads'], correctAnswer: 1, explanation: "The tribal areas in the four NE states are administered as autonomous districts." },

      { question: "Which Article provides for the administration of Union Territories?", options: ['Article 239', 'Article 240', 'Article 241', 'Article 242'], correctAnswer: 0, explanation: "Article 239 states that every UT shall be administered by the President acting through an administrator." },

      { question: "The 69th Amendment (1991) provided special status to:", options: ['Puducherry', 'Delhi (National Capital Territory)', 'Chandigarh', 'Lakshadweep'], correctAnswer: 1, explanation: "The 69th Amendment inserted Article 239AA and 239AB, making Delhi the National Capital Territory with a Legislative Assembly." },

      { question: "The Council of Ministers for Delhi is headed by the CM and its size is limited to:", options: ['10% of Assembly strength', '15% of Assembly strength', '20% of Assembly strength', 'Fixed at 7 members'], correctAnswer: 0, explanation: "Article 239AA(4) limits the CoM size for Delhi to 10% of the total number of members in the Assembly (7 members including CM)." },

      { question: "In case of failure of constitutional machinery in Delhi, the President can suspend Article 239AA under:", options: ['Article 356', 'Article 239AB', 'Article 352', 'Article 360'], correctAnswer: 1, explanation: "Article 239AB is the specific provision for failure of constitutional machinery in the NCT of Delhi." },

      { question: "Who has the power to make regulations for the peace, progress and good government of UTs like Lakshadweep and Andaman & Nicobar?", options: ['The Administrator', 'The Parliament', 'The President', 'The Home Minister'], correctAnswer: 2, explanation: "Article 240 empowers the President to make regulations for these UTs, which have the same force as an Act of Parliament." },

      { question: "The Legislative Assembly of Puducherry was created under:", options: ['Article 239A', 'Article 239AA', 'Article 240', 'Special Act of 1963'], correctAnswer: 0, explanation: "Article 239A (added by 14th Amendment 1962) allows Parliament to create a Legislature/CoM for Puducherry." },

      { question: "The High Court for the UT of Delhi was established by:", options: ['The Constitution directly', 'An Act of Parliament (Article 241)', 'Presidential order', 'Chief Justice of India'], correctAnswer: 1, explanation: "Article 241 empowers Parliament by law to constitute a High Court for a Union Territory." },

      { question: "Which UT has its own High Court?", options: ['Delhi', 'Puducherry', 'Chandigarh', 'Lakshadweep'], correctAnswer: 0, explanation: "Delhi is the only UT with its own High Court (established 1966). Others share High Courts with neighboring states." },

      { question: "The 'Administrator' of a UT is also called 'Lieutenant Governor' in:", options: ['Delhi, Puducherry, J&K, Ladakh, A&N Islands', 'All UTs', 'Only Delhi', 'Only J&K'], correctAnswer: 0, explanation: "These UTs have the designation of Lieutenant Governor, while others have 'Administrator'." },

    ],

  },

  {

    id: "finance-property",

    title: "Finance, Property & Contracts",

    description: "Articles 264-300A, Finance Commission, and the GST framework.",

    icon: "💰",

    colorClass: "green",

    difficulty: "Advanced",

    questions: [

      { question: "Which Article states that 'no tax shall be levied or collected except by authority of law'?", options: ['Article 264', 'Article 265', 'Article 266', 'Article 267'], correctAnswer: 1, explanation: "Article 265 ensures that the government cannot impose taxes without legislative authorization." },

      { question: "The 'Consolidated Fund of India' is provided under:", options: ['Article 265', 'Article 266', 'Article 267', 'Article 268'], correctAnswer: 1, explanation: "Article 266 provides for the Consolidated Fund where all revenues received by the Govt of India are credited." },

      { question: "The 'Contingency Fund of India' is provided under:", options: ['Article 265', 'Article 266', 'Article 267', 'Article 268'], correctAnswer: 2, explanation: "Article 267 allows Parliament to establish a Contingency Fund for unforeseen expenditure." },

      { question: "The 'Finance Commission' is constituted every 5 years under:", options: ['Article 275', 'Article 280', 'Article 281', 'Article 282'], correctAnswer: 1, explanation: "Article 280 requires the President to constitute a Finance Commission to recommend tax devolution." },

      { question: "The 'GST Council' was established under which Article?", options: ['Article 246A', 'Article 269A', 'Article 279A', 'Article 280'], correctAnswer: 2, explanation: "The 101st Amendment added Article 279A for the establishment of the GST Council." },

      { question: "Which Article provides for 'Grants-in-aid' from the Union to certain States?", options: ['Article 270', 'Article 275', 'Article 282', 'Article 293'], correctAnswer: 1, explanation: "Article 275 provides for statutory grants to states that are in need of assistance." },

      { question: "The 'Right to Property' is currently a constitutional right under:", options: ['Article 19', 'Article 31', 'Article 300A', 'Article 301'], correctAnswer: 2, explanation: "The 44th Amendment moved the Right to Property to Article 300A in Part XII." },

      { question: "Who is the Chairman of the Finance Commission?", options: ['Appointed by the President', 'Union Finance Minister', 'RBI Governor', 'PM'], correctAnswer: 0, explanation: "The President appoints the Chairman and four other members of the Finance Commission." },

      { question: "Under Article 292, who has the power to borrow money upon the security of the Consolidated Fund of India?", options: ['The President', 'The Finance Minister', 'The Executive (Union Government)', 'The Parliament'], correctAnswer: 2, explanation: "The executive power of the Union extends to borrowing money within limits fixed by Parliament." },

      { question: "Which Article deals with 'Suits and proceedings' by or against the Union of India?", options: ['Article 299', 'Article 300', 'Article 301', 'Article 302'], correctAnswer: 1, explanation: "Article 300 states that the Union of India may sue or be sued in the name of the Union of India." },

      { question: "All contracts made in the exercise of executive power of the Union are expressed to be made by:", options: ['The Prime Minister', 'The President', 'The Finance Secretary', 'The Government of India'], correctAnswer: 1, explanation: "Article 299 requires all executive contracts to be made in the name of the President of India (or Governor for States)." },

      { question: "The 'Net Proceeds' of a tax is certified by:", options: ['The Finance Minister', 'The CAG of India', 'The Finance Commission', 'The RBI Governor'], correctAnswer: 1, explanation: "Under Article 279, the CAG certifies the net proceeds of any tax or duty, and his certificate is final." },

      { question: "Which Article deals with taxes on professions, trades, callings and employments?", options: ['Article 275', 'Article 276', 'Article 277', 'Article 278'], correctAnswer: 1, explanation: "Article 276 allows State Legislatures to impose taxes on professions, etc., subject to a limit (currently Rs. 2500 per year)." },

      { question: "The 15th Finance Commission was headed by:", options: ['Y.V. Reddy', 'N.K. Singh', 'Vijay Kelkar', 'C. Rangarajan'], correctAnswer: 1, explanation: "N.K. Singh headed the 15th Finance Commission (2021-2026)." },

      { question: "Under GST, 'IGST' stands for:", options: ['Internal GST', 'Integrated GST', 'Inter-state GST', 'International GST'], correctAnswer: 1, explanation: "Integrated GST (IGST) is levied on inter-state supply of goods and services." },

      { question: "The 'Weighted Voting' in GST Council gives the Centre a weight of:", options: ['1/2', '1/3', '1/4', '2/3'], correctAnswer: 1, explanation: "The Union Government has a weightage of 1/3rd of the total votes cast in the GST Council." },

      { question: "Decisions in the GST Council require a majority of:", options: ['Simple majority', '2/3rd', '3/4th', 'Unanimous'], correctAnswer: 2, explanation: "Decisions are taken by a majority of not less than 3/4th of the weighted votes of the members present and voting." },

      { question: "The 'Finance Commission' is a:", options: ['Statutory body', 'Constitutional body', 'Extra-constitutional body', 'Executive body'], correctAnswer: 1, explanation: "It is established directly under Article 280 of the Constitution." },

      { question: "Which Article deals with the 'Succession to property, assets, rights, liabilities and obligations'?", options: ['Article 294', 'Article 295', 'Article 296', 'All of the above'], correctAnswer: 3, explanation: "Articles 294-296 deal with the transition of assets and liabilities from the British Crown/Princely States to the Union/States." },

      { question: "The power of the Union to grant 'Discretionary Grants' is under:", options: ['Article 275', 'Article 280', 'Article 282', 'Article 293'], correctAnswer: 2, explanation: "Article 282 allows the Union or a State to make any grants for any public purpose, even if not within its legislative competence." },

      { question: "Article 268 deals with taxes levied by the Union but:", options: ['Collected and appropriated by the States', 'Collected by the Union but shared', 'Appropriated by the Union', 'Only for UTs'], correctAnswer: 0, explanation: "Article 268 relates to stamp duties and duties of excise on medicinal and toilet preparations." },

      { question: "The 'Public Account of India' (Article 266) includes:", options: ['Tax revenues', 'Provident fund deposits, judicial deposits, etc.', 'Loans raised by the government', 'Grants from abroad'], correctAnswer: 1, explanation: "Public Account includes all other public moneys (not in Consolidated Fund) where the government acts as a banker." },

      { question: "Withdrawal from the 'Contingency Fund' requires:", options: ['Prior Parliamentary approval', 'Subsequent Parliamentary authorization', "President's order only", 'No approval needed'], correctAnswer: 1, explanation: "The fund is at the President's disposal, but any expenditure from it must be subsequently authorized by Parliament." },

      { question: "Which Article deals with 'Bona Vacantia' (Property accruing by escheat or lapse)?", options: ['Article 295', 'Article 296', 'Article 297', 'Article 298'], correctAnswer: 1, explanation: "Article 296 states that property which would have accrued to the Crown by escheat or lapse shall accrue to the State or Union." },

      { question: "Property in territorial waters or continental shelf vests in the Union under:", options: ['Article 296', 'Article 297', 'Article 298', 'Article 299'], correctAnswer: 1, explanation: "Article 297 states that all lands, minerals and other things of value underlying the ocean within territorial waters vest in the Union." },

      { question: "Article 298 empowers the Union and States to:", options: ['Carry on any trade or business', 'Acquire, hold and dispose of property', 'Make contracts', 'All of the above'], correctAnswer: 3, explanation: "Article 298 defines the 'Executive power to carry on trade, etc.'" },

      { question: "Who represents the Union of India in legal contracts?", options: ['Prime Minister', 'President', 'Attorney General', 'Finance Secretary'], correctAnswer: 1, explanation: "Contracts are expressed to be made by the President, though signed by authorized officers (Article 299)." },

      { question: "Can a State borrow money from outside India?", options: ["Yes, with President's consent", 'No', 'Only for infrastructure', 'Only during Emergency'], correctAnswer: 1, explanation: "Under Article 293, States can only borrow within the territory of India upon the security of the Consolidated Fund of the State." },

      { question: "The Union can give 'Loans' to States under:", options: ['Article 292', 'Article 293', 'Article 294', 'Article 295'], correctAnswer: 1, explanation: "Article 293(2) empowers the Government of India to make loans to any State." },

      { question: "Article 300 (Suits) preserves the 'Vicarious Liability' of the State based on:", options: ['Common Law', 'Crown Proceedings Act', 'The legal position before the Constitution', 'US Law'], correctAnswer: 2, explanation: "Article 300 links the liability of the Union/State to that of the Dominion of India/Provinces before 1950." },

      { question: "The first Finance Commission was established in:", options: ['1950', '1951', '1952', '1955'], correctAnswer: 1, explanation: "The first FC was established in 1951 with K.C. Neogy as Chairman." },

      { question: "Which Finance Commission recommended 42% devolution to states?", options: ['13th', '14th', '15th', '12th'], correctAnswer: 1, explanation: "The 14th FC (Y.V. Reddy) made a historic jump from 32% to 42%." },

      { question: "The GST Constitutional Amendment was the:", options: ['100th', '101st', '102nd', '103rd'], correctAnswer: 1, explanation: "The 101st Amendment Act 2016 introduced the Goods and Services Tax." },

      { question: "Under Article 269A, GST on inter-state trade is levied and collected by:", options: ['The States', 'The Union and apportioned between Union and States', 'The GST Council', 'Only the destination state'], correctAnswer: 1, explanation: "Article 269A provides for the levy and collection of GST in the course of inter-state trade or commerce by the Govt of India." },

      { question: "The 'Surcharge' on certain taxes for Union purposes is under:", options: ['Article 269', 'Article 270', 'Article 271', 'Article 272'], correctAnswer: 2, explanation: "Article 271 allows Parliament to increase any of the duties/taxes by a surcharge for Union purposes." },

      { question: "Which Article defines 'State' for Part XII (Finance)?", options: ['Article 12', 'Article 36', 'Article 264', 'Article 300'], correctAnswer: 2, explanation: "Article 264 provides the interpretation for Part XII." },

      { question: "The 'Consolidated Fund' is mentioned in the Constitution as:", options: ['The main bank account of India', 'The reservoir of all government funds', 'A fund into which all revenues, loans, etc., flow', 'A fund for emergencies'], correctAnswer: 2, explanation: "It includes all revenues, loans raised, and moneys received in repayment of loans." },

      { question: "Article 276(2) sets the limit for professional tax at:", options: ['Rs. 250', 'Rs. 2500', 'Rs. 25000', 'No limit'], correctAnswer: 1, explanation: "The current constitutional limit for tax on professions is Rs. 2,500 per annum." },

      { question: "Property of the Union is exempt from State taxation under:", options: ['Article 284', 'Article 285', 'Article 287', 'Article 289'], correctAnswer: 1, explanation: "Article 285 prevents States from taxing property of the Union unless Parliament provides otherwise." },

      { question: "Property and income of a State is exempt from Union taxation under:", options: ['Article 285', 'Article 287', 'Article 289', 'Article 291'], correctAnswer: 2, explanation: "Article 289 provides immunity to State property and income from Union taxation." },

      { question: "Article 287 prevents States from taxing:", options: ['Water', 'Electricity consumed by the Govt of India or Railways', 'Land', 'Fuel'], correctAnswer: 1, explanation: "Article 287 prohibits States from imposing tax on the consumption or sale of electricity by the Union or Railways." },

      { question: "The Finance Commission submits its recommendations to:", options: ['The Parliament', 'The President', 'The Finance Minister', 'The GST Council'], correctAnswer: 1, explanation: "The Commission submits its report to the President, who lays it before each House of Parliament." },

      { question: "Article 281 deals with:", options: ['Finance Commission recommendations', 'Audit reports', 'Election results', 'UPSC reports'], correctAnswer: 0, explanation: "Article 281 requires the President to lay the FC report and an action-taken memorandum before Parliament." },

      { question: "The 'Borrowing' powers of the Union are wider than States because:", options: ['Union can borrow outside India', 'Union has more resources', "States need Union's consent if they have outstanding loans", 'Both (a) and (c)'], correctAnswer: 3, explanation: "Articles 292 and 293 distinguish these powers." },

      { question: "A contract is valid under Article 299 only if it is:", options: ['In writing', 'Signed by the President personally', 'Expressed to be in the name of President/Governor and executed by authorized person', 'Both (a) and (c)'], correctAnswer: 3, explanation: "Contracts must be in writing, expressed in the President's/Governor's name, and executed by authorized persons." },

      { question: "Which case is famous for the 'Sovereign Immunity' debate in Article 300?", options: ['Kasturi Lal v. State of UP', 'Nagendra Rao v. State of AP', 'Both', 'None'], correctAnswer: 2, explanation: "These cases discussed whether the State is liable for the tortious acts of its servants in 'sovereign' functions." },

      { question: "The 'Principle of Escheat' means:", options: ['Property belongs to the finder', 'Property of a person dying heirless goes to the State', 'Property stolen goes to State', 'Property sold goes to State'], correctAnswer: 1, explanation: "Article 296 covers property accruing by escheat or lapse." },

      { question: "Article 300A was added by which Amendment?", options: ['42nd', '44th', '52nd', '73rd'], correctAnswer: 1, explanation: "The 44th Amendment (1978) added Article 300A after deleting Article 31." },

      { question: "The GST Council is a:", options: ['Purely central body', 'Joint forum of Centre and States', 'Private company', 'Tribunal'], correctAnswer: 1, explanation: "It is a constitutional joint forum for collective decision-making on GST." },

      { question: "Can the Union tax the 'Business' activities of a State?", options: ['No, never', 'Yes, if Parliament by law so provides', 'Only during Emergency', "Only with SC's permission"], correctAnswer: 1, explanation: "Under Article 289(2), Parliament can authorize the Union to tax trade or business carried on by a State." },

    ],

  },

  {

    id: "trade-commerce",

    title: "Trade, Commerce & Intercourse",

    description: "Freedom of trade throughout India and the powers of Part XIII.",

    icon: "🚢",

    colorClass: "teal",

    difficulty: "Advanced",

    questions: [

      { question: "Part XIII of the Constitution (Articles 301-307) deals with:", options: ['Trade, Commerce and Intercourse within India', 'Finance and Property', 'Public Services', 'Elections'], correctAnswer: 0, explanation: "Part XIII ensures the freedom of trade and commerce across the territory of India." },

      { question: "Article 301 states that trade, commerce and intercourse throughout India shall be:", options: ['Regulated by states', 'Free', 'Tax-free always', 'Only via railways'], correctAnswer: 1, explanation: "Article 301 guarantees that trade and commerce shall be free throughout the territory of India." },

      { question: "Who has the power to impose restrictions on the freedom of trade in 'public interest'?", options: ['The States', 'The Parliament', 'The President', 'The Supreme Court'], correctAnswer: 1, explanation: "Article 302 empowers Parliament to impose restrictions on trade in public interest." },

      { question: "Can a State Legislature impose 'reasonable restrictions' on freedom of trade?", options: ['No', 'Yes, with the previous sanction of the President', 'Only during Emergency', 'Only with 2/3rd majority'], correctAnswer: 1, explanation: "Article 304(b) allows States to impose reasonable restrictions in public interest, but the Bill needs prior Presidential sanction." },

      { question: "Article 303 prohibits Parliament and States from:", options: ['Taxing trade', 'Giving preference to one State over another in trade', 'Closing borders', 'Regulating prices'], correctAnswer: 1, explanation: "Article 303 prevents the Union and States from making laws that give preference or discriminate between states in trade." },

      { question: "The 'Compensatory Tax' theory relates to which Article?", options: ['Article 14', 'Article 19', 'Article 301', 'Article 300'], correctAnswer: 2, explanation: "The SC has discussed compensatory taxes (like road tax) in the context of freedom of trade under Article 301." },

      { question: "Article 304(a) allows a State to impose tax on goods imported from other states if:", options: ['The tax is higher than local goods', 'Similar goods produced in the state are taxed similarly (no discrimination)', 'The state is in deficit', 'The President orders'], correctAnswer: 1, explanation: "Article 304(a) ensures non-discrimination between local and imported goods." },

      { question: "Article 305 protects 'Existing Laws' and laws providing for:", options: ['State Monopolies', 'Private monopolies', 'Free trade', 'Import duties'], correctAnswer: 0, explanation: "Article 305 ensures that laws creating State monopolies are not affected by Article 301 or 303." },

      { question: "Article 307 provides for the appointment of an:", options: ['Election Commissioner', 'Authority for carrying out the purposes of Articles 301-304', 'Ombudsman', 'Trade Minister'], correctAnswer: 1, explanation: "Article 307 allows Parliament to appoint an authority for trade and commerce (similar to the Interstate Commerce Commission in USA, though not yet established)." },

      { question: "The 'Freedom of Trade' under Article 301 is:", options: ['An absolute right', 'Subject to provisions of Part XIII', 'Only for citizens', 'Only for companies'], correctAnswer: 1, explanation: "Article 301 is subject to the other provisions of Part XIII (Articles 302-305)." },

      { question: "Which case established that 'Compensatory taxes' do not violate Article 301?", options: ['Atiabari Tea Co. v. State of Assam', 'Automobile Transport v. State of Rajasthan', 'G.K. Krishnan v. State of Tamil Nadu', 'Jindal Stainless Ltd v. State of Haryana'], correctAnswer: 3, explanation: "Jindal Stainless (2016) is a landmark 9-judge bench case that clarified the validity of entry taxes and the compensatory tax doctrine." },

      { question: "In 'Atiabari Tea Co.' case, the SC held that:", options: ['Taxation is never a restriction', 'Only taxes that directly and immediately restrict trade violate Article 301', 'All taxes violate Article 301', 'States cannot tax trade'], correctAnswer: 1, explanation: "This 1961 case set the initial standard for judicial review of trade-restricting taxes." },

      { question: "The power of Parliament to restrict trade under Article 302 is:", options: ['Absolute', "Limited to 'Public Interest'", 'Only for foreign trade', 'Only during War'], correctAnswer: 1, explanation: "Parliament must show that the restriction is required in the public interest." },

      { question: "Can Parliament discriminate between states in trade during a 'Scarcity of Goods'?", options: ['No', 'Yes, under Article 303(2)', 'Only with SC permission', 'Only for food'], correctAnswer: 1, explanation: "Article 303(2) allows Parliament to discriminate if it's necessary to deal with a scarcity of goods in any part of India." },

      { question: "Trade and Commerce is found in which List of the Seventh Schedule?", options: ['Union List (Entry 42)', 'State List (Entry 26)', 'Concurrent List (Entry 33)', 'All of the above'], correctAnswer: 3, explanation: "Inter-state trade is in Union List; intra-state is in State List; specific commodities are in Concurrent List." },

      { question: "Which Article of the original Constitution (now repealed) dealt with 'Inter-state trade' in Part B states?", options: ['Article 301', 'Article 306', 'Article 307', 'Article 308'], correctAnswer: 1, explanation: "Article 306 was repealed by the 7th Amendment 1956." },

      { question: "The 'freedom of movement' under Article 19(1)(d) is for citizens, while Article 301 is:", options: ['For citizens only', 'For the subject matter of trade and commerce itself', 'Only for corporations', 'Only for foreigners'], correctAnswer: 1, explanation: "Article 301 protects the 'inter-state' flow of trade, regardless of the person involved." },

      { question: "If a State law on trade gets Presidential assent under Article 254, does it still need sanction under Article 304(b)?", options: ['Yes', 'No', 'Depends on the High Court', "Only if it's a Money Bill"], correctAnswer: 0, explanation: "The requirements of Part XIII are independent of the requirements of Part XI (legislative relations)." },

      { question: "The 'Jindal Stainless' case (2016) overruled which doctrine?", options: ['Doctrine of Pith and Substance', 'Compensatory Tax Doctrine as defined in Automobile Transport case', 'Doctrine of Eclipse', 'Basic Structure'], correctAnswer: 1, explanation: "The 9-judge bench redefined the scope of Article 301 and the validity of entry taxes." },

      { question: "Entry Tax is mentioned in which Entry of the State List?", options: ['Entry 42', 'Entry 52', 'Entry 54', 'Entry 60'], correctAnswer: 1, explanation: "Entry 52 of List II (now replaced/subsumed by GST) related to taxes on entry of goods into a local area." },

      { question: "Which Amendment subsumed many trade-related taxes into GST?", options: ['99th', '100th', '101st', '102nd'], correctAnswer: 2, explanation: "The 101st Amendment abolished Entry Tax, Octroi, Luxury Tax, etc." },

      { question: "Under Article 304, a State can impose tax on goods from other states only if:", options: ["It's a poor state", 'The tax is lower', 'Similar local goods are also taxed', 'The President orders a uniform tax'], correctAnswer: 2, explanation: "It ensures that a State doesn't use taxation to protect local industry from other states." },

      { question: "The authority under Article 307 is meant to be:", options: ['An advisory body', 'A regulatory body for trade and commerce', 'A court', 'A library'], correctAnswer: 1, explanation: "It's intended to be a specialized body to oversee the complex relations of inter-state trade." },

      { question: "The 'public interest' under Article 302 is determined by:", options: ['The President', 'The Parliament', 'The states', 'The traders'], correctAnswer: 1, explanation: "Parliament decides, subject to judicial review for constitutionality." },

      { question: "The freedom under Article 301 includes:", options: ['Buying and selling', 'Transportation', 'Delivery', 'All of the above'], correctAnswer: 3, explanation: "Trade and commerce include all stages from production to delivery across state lines." },

      { question: "Can a State create a monopoly in the trade of 'Liquor'?", options: ['No', 'Yes, protected by Article 305', 'Only if CM allows', 'Only with 3/4th majority'], correctAnswer: 1, explanation: "Article 305 protects laws relating to state monopolies from challenge under Article 301." },

      { question: "Article 301 is inspired by which country's constitution?", options: ['USA (Commerce Clause)', 'Australia (Section 92)', 'Canada', 'UK'], correctAnswer: 1, explanation: "It is largely inspired by Section 92 of the Australian Constitution, though with more express limitations." },

      { question: "A 'Non-discriminatory' tax that merely increases the cost of trade:", options: ['Violates Article 301', 'Does not violate Article 301 according to recent SC rulings', 'Requires 101st Amendment', 'Is always unconstitutional'], correctAnswer: 1, explanation: "Mere taxation is generally seen as a regulatory measure, not a restriction, unless it directly impedes movement." },

      { question: "The 'Atiabari' test was: ", options: ['Direct and immediate restriction', 'Remote restriction', 'Only on volume', 'Only on price'], correctAnswer: 0, explanation: "The 'Direct and Immediate' test was the hallmark of Atiabari Tea Co. judgment." },

      { question: "Which Part of the Constitution contains Article 301?", options: ['Part XII', 'Part XIII', 'Part XIV', 'Part XV'], correctAnswer: 1, explanation: "Part XIII contains Articles 301 to 307." },

      { question: "The main purpose of Part XIII is:", options: ['To collect taxes', 'To ensure India is one economic unit', 'To help big businesses', 'To prevent imports'], correctAnswer: 1, explanation: "Economic integration is a key goal of the Indian federal structure." },

      { question: "Article 303(2) is an exception to:", options: ['The rule of non-discrimination in trade', 'The rule of free speech', 'The rule of GST', 'The rule of equality'], correctAnswer: 0, explanation: "It allows Parliament to discriminate during a scarcity of goods." },

      { question: "The 'authority' under Article 307 has been:", options: ['Established in 1950', 'Established in 1991', 'Never established by Parliament', 'Established as NITI Aayog'], correctAnswer: 2, explanation: "Despite the constitutional provision, no such specialized trade authority has been created yet." },

      { question: "Is Article 301 a 'Fundamental Right'?", options: ['Yes', "No, it's a constitutional right but not in Part III", 'Yes, under Article 19', "No, it's a directive principle"], correctAnswer: 1, explanation: "It's a constitutional guarantee in Part XIII, not a Fundamental Right in Part III." },

      { question: "Can an individual sue the government for violating Article 301?", options: ['No', 'Yes, through a Writ Petition under Article 226/32', 'Only in civil courts', 'Only through RTI'], correctAnswer: 1, explanation: "Enforcement of constitutional rights can be done through writ jurisdiction." },

      { question: "If a state bans 'Lottery' from other states but allows its own:", options: ['It is valid', 'It violates Article 301 and 304(a)', 'It is protected by Article 305', 'It is an internal matter'], correctAnswer: 1, explanation: "Discrimination against products of other states is unconstitutional." },

      { question: "The term 'Intercourse' in Article 301 means:", options: ['Physical movement of people/goods', 'Social interaction only', 'Taxation', 'Legal suits'], correctAnswer: 0, explanation: "It refers to the commercial movement and communication between people of different states." },

      { question: "The 'Automobile Transport' case introduced the concept of:", options: ['Sovereign immunity', 'Compensatory Taxes', 'Basic structure', 'Judicial activism'], correctAnswer: 1, explanation: "It held that taxes for use of facilities (like roads) are not restrictions but 'compensatory'." },

      { question: "Does Article 301 apply to 'illegal' trade (e.g., smuggling)?", options: ['Yes', 'No, res extra commercium (things outside commerce)', 'Only if taxed', 'Only during Emergency'], correctAnswer: 1, explanation: "Trade in 'harmful' or illegal things is not protected by the freedom of trade." },

      { question: "Article 301 ensures:", options: ['Freedom of production', 'Freedom of transit', 'Freedom of consumption', 'All of the above'], correctAnswer: 3, explanation: "It protects the entire chain of commercial activity across the country." },

      { question: "A 'Check-post' on a state border is:", options: ['Always unconstitutional', "A valid regulatory measure if it doesn't unduly delay trade", 'A violation of Article 14', 'Only for police'], correctAnswer: 1, explanation: "Regulatory measures for checking taxes/safety are generally valid." },

      { question: "Which Amendment removed the 'Right to Property' as a hurdle to trade?", options: ['42nd', '44th', '25th', '1st'], correctAnswer: 1, explanation: "The 44th Amendment simplified property-related legal issues." },

      { question: "The 'Common Market' of India is supported by:", options: ['Part XIII', 'Part XII (GST)', 'Both', 'None'], correctAnswer: 2, explanation: "Part XIII provides the legal framework; GST provides the fiscal framework." },

      { question: "Under Article 302, 'Public Interest' is a:", options: ['Justiciable issue', 'Political issue', 'Scientific issue', 'Non-reviewable issue'], correctAnswer: 0, explanation: "The courts can check if a law is truly in public interest and not arbitrary." },

      { question: "The 'Automobile Transport' case was a:", options: ['3-judge bench', '5-judge bench', '7-judge bench', '9-judge bench'], correctAnswer: 2, explanation: "It was a 7-judge bench decision in 1962." },

      { question: "Is 'Price Control' by the government a restriction on trade?", options: ['No', 'Yes, but usually valid under Article 302 in public interest', 'Only for luxuries', 'Only for farmers'], correctAnswer: 1, explanation: "Regulating prices is a restriction but is constitutional if it serves the public interest (e.g., Essential Commodities Act)." },

      { question: "Can a State tax goods produced in its territory more than imported goods?", options: ['No', 'Yes (discrimination is only prohibited *against* imports)', 'Only for alcohol', "Only with President's consent"], correctAnswer: 1, explanation: "Article 304(a) prohibits discrimination *against* imported goods, not in their favor." },

      { question: "The 'Interstate Council' (Article 263) can discuss trade disputes:", options: ['Yes', 'No', 'Only if PM is present', 'Only for water'], correctAnswer: 0, explanation: "One of its duties is to discuss subjects of common interest between states." },

      { question: "Part XIII is often described as the:", options: ['Economic soul of the Constitution', 'Magna Carta of Trade', 'The Commerce Clause of India', 'All of the above'], correctAnswer: 3, explanation: "It's the foundation of India's economic federalism." },

      { question: "The 101st Amendment (GST) made which change to Entry 52 of State List?", options: ['Expanded it', 'Deleted/Subsumed it', 'Moved it to Union List', 'None'], correctAnswer: 1, explanation: "Entry 52 (Entry Tax) was omitted as it was merged into GST." },

    ],

  },

  {

    id: "language-official",

    title: "Official Language & Part XVII",

    description: "The languages of the Union, States, and the higher Judiciary.",

    icon: "🗣️",

    colorClass: "indigo",

    difficulty: "Intermediate",

    questions: [

      { question: "Part XVII of the Constitution (Articles 343-351) deals with:", options: ['Elections', 'Official Language', 'Public Services', 'Emergency'], correctAnswer: 1, explanation: "Part XVII contains provisions regarding the language of the Union, regional languages, and the language of the Courts." },

      { question: "The Official Language of the Union is:", options: ['Hindi in Devanagari script', 'English', 'Both Hindi and English equally forever', 'Sanskrit'], correctAnswer: 0, explanation: "Article 343(1) states the official language of the Union shall be Hindi in Devanagari script." },

      { question: "The form of numerals to be used for Union official purposes is:", options: ['Roman numerals', 'Devanagari numerals', 'International form of Indian numerals', 'Any numerals'], correctAnswer: 2, explanation: "Article 343(1) specifies the international form of Indian numerals (1, 2, 3...)." },

      { question: "The original Constitution allowed English for official purposes for a period of:", options: ['5 years', '10 years', '15 years', 'Indefinitely'], correctAnswer: 2, explanation: "Article 343(2) allowed English for 15 years from the commencement (until 1965)." },

      { question: "Which Act allowed the continued use of English after 1965?", options: ['Official Languages Act, 1963', 'English Language Act', 'General Clauses Act', 'Constitution 15th Amendment'], correctAnswer: 0, explanation: "The Official Languages Act 1963 provided for the continued use of English for an indefinite period." },

      { question: "Article 344 provides for the constitution of a:", options: ['Language Commission', 'Committee of Parliament on Official Language', 'Both (a) and (b)', 'None'], correctAnswer: 2, explanation: "Article 344 provides for a Commission (at 5 and 10 years) and a Committee of Parliament (30 members) to review language progress." },

      { question: "The Committee of Parliament on Official Language (Article 344) consists of:", options: ['20 Lok Sabha and 10 Rajya Sabha members', '15 Lok Sabha and 15 Rajya Sabha members', '30 Lok Sabha members', 'All MPs'], correctAnswer: 0, explanation: "The Committee consists of 30 members ΓÇö 20 from Lok Sabha and 10 from Rajya Sabha." },

      { question: "Which Article deals with 'Official language or languages of a State'?", options: ['Article 343', 'Article 345', 'Article 346', 'Article 347'], correctAnswer: 1, explanation: "Article 345 allows a State Legislature to adopt any one or more languages or Hindi as the official language(s) of the State." },

      { question: "Until a State Legislature decides otherwise, what language continues in the State for official purposes?", options: ['Hindi', 'English', 'Local language', 'Sanskrit'], correctAnswer: 1, explanation: "Article 345 ensures that English continues for the same purposes it was used before the Constitution." },

      { question: "The official language for communication between two States is covered under:", options: ['Article 345', 'Article 346', 'Article 347', 'Article 348'], correctAnswer: 1, explanation: "Article 346 states it shall be the language authorized for Union purposes (currently Hindi/English)." },

      { question: "If two States agree, they can use which language for communication between them?", options: ['Sanskrit', 'Hindi', 'English only', 'The local language of the larger state'], correctAnswer: 1, explanation: "Under Article 346, two or more States may agree that Hindi shall be the language for communication between them." },

      { question: "Article 347 deals with:", options: ['Language of Courts', 'Special provision relating to language spoken by a section of the population of a State', 'Language of Parliament', 'Hindi development'], correctAnswer: 1, explanation: "It allows the President to direct a language to be officially recognized in a State if a substantial proportion of people desire it." },

      { question: "Until Parliament by law provides otherwise, proceedings in the Supreme Court and High Courts shall be in:", options: ['Hindi', 'English', 'Local language of the state', 'Both Hindi and English'], correctAnswer: 1, explanation: "Article 348(1) mandates English as the language of the SC and HCs until Parliament legislates otherwise." },

      { question: "Who can authorize the use of Hindi in the proceedings of a High Court?", options: ['The Chief Justice of HC', 'The Governor with the previous consent of the President', 'The Chief Minister', 'The CJI'], correctAnswer: 1, explanation: "Article 348(2) allows the Governor to authorize Hindi (or another state official language) for HC proceedings, but NOT for judgments/orders/decrees." },

      { question: "All Bills, Acts, Ordinances, and Rules must be in:", options: ['Hindi', 'English', 'Local language', 'Any scheduled language'], correctAnswer: 1, explanation: "Article 348(1)(b) requires the authoritative text of all central/state laws to be in English." },

      { question: "If a State passes a law in Hindi, an 'Authoritative Text' must also be published in:", options: ['Sanskrit', 'English', 'Urdu', 'Tamil'], correctAnswer: 1, explanation: "Article 348(3) requires an English translation to be published in the Official Gazette, which is deemed the authoritative text." },

      { question: "Article 350 deals with:", options: ['Language for representation for redress of grievances', 'Hindi development', 'Court languages', 'Primary education'], correctAnswer: 0, explanation: "Every person is entitled to submit a representation in any of the languages used in the Union or the State." },

      { question: "Article 350A (added by 7th Amendment 1956) directs the State to provide:", options: ['Free education', 'Facilities for instruction in mother-tongue at primary stage', 'Hindi classes', 'Sanskrit schools'], correctAnswer: 1, explanation: "It mandates states/local authorities to provide adequate facilities for instruction in the mother-tongue to children belonging to linguistic minority groups." },

      { question: "Article 350B (added by 7th Amendment 1956) provides for a:", options: ['Language Commission', 'Special Officer for Linguistic Minorities', 'Minority Commission', 'Hindi Officer'], correctAnswer: 1, explanation: "The Special Officer (appointed by the President) investigates matters relating to safeguards for linguistic minorities." },

      { question: "Article 351 contains a directive for the:", options: ['Protection of English', 'Development of the Hindi language', 'Abolition of local dialects', 'Translation of Sanskrit texts'], correctAnswer: 1, explanation: "It is the duty of the Union to promote the spread of the Hindi language so that it may serve as a medium of expression for the composite culture of India." },

      { question: "Hindi should draw its vocabulary primarily from:", options: ['English', 'Sanskrit', 'Urdu', 'Local dialects'], correctAnswer: 1, explanation: "Article 351 specifies that Hindi should draw primarily from Sanskrit and secondarily from other languages." },

      { question: "How many languages are currently in the Eighth Schedule?", options: ['14', '18', '22', '25'], correctAnswer: 2, explanation: "There are 22 languages: Assamese, Bengali, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Sindhi, Tamil, Telugu, Urdu, Bodo, Santhali, Maithili, and Dogri." },

      { question: "Which of these was the first language to be added to the Eighth Schedule by an amendment?", options: ['Sindhi', 'Konkani', 'Manipuri', 'Bodo'], correctAnswer: 0, explanation: "Sindhi was added by the 21st Amendment Act 1967." },

      { question: "Which Amendment added Konkani, Manipuri and Nepali to the Eighth Schedule?", options: ['21st', '71st', '92nd', '96th'], correctAnswer: 1, explanation: "The 71st Amendment Act 1992 added these three languages." },

      { question: "Which Amendment added Bodo, Dogri, Maithili and Santhali to the Eighth Schedule?", options: ['21st', '71st', '92nd', '96th'], correctAnswer: 2, explanation: "The 92nd Amendment Act 2003 added these four languages." },

      { question: "The 96th Amendment (2011) changed the spelling of:", options: ['Oriya to Odia', 'Manipuri to Meitei', 'Kannada to Kanarese', 'None'], correctAnswer: 0, explanation: "It changed 'Oriya' to 'Odia' in the Eighth Schedule." },

      { question: "English is a language mentioned in the Eighth Schedule:", options: ['Yes', 'No', 'Only as an associate language', 'Only for legal purposes'], correctAnswer: 1, explanation: "English is NOT in the Eighth Schedule, though it is the official associate language of the Union." },

      { question: "The 'Classical Languages' of India currently include how many languages?", options: ['4', '6', '8', '11'], correctAnswer: 3, explanation: "As of 2024, there are 11 Classical Languages: Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia, Marathi, Pali, Prakrit, Assamese, and Bengali." },

      { question: "Which was the first language to be declared 'Classical' in India?", options: ['Sanskrit', 'Tamil', 'Kannada', 'Odia'], correctAnswer: 1, explanation: "Tamil was the first language to be given Classical status in 2004." },

      { question: "Criteria for Classical Language status include:", options: ['High antiquity of early texts (1500-2000 years)', 'Original literary tradition', 'Distinct from modern form', 'All of the above'], correctAnswer: 3, explanation: "The Ministry of Culture sets these criteria for recognition." },

      { question: "Article 120 deals with language to be used in:", options: ['High Courts', 'Parliament', 'State Legislatures', 'Elections'], correctAnswer: 1, explanation: "Article 120 states business in Parliament shall be transacted in Hindi or English." },

      { question: "Article 210 deals with language to be used in:", options: ['Parliament', 'State Legislature', "Governor's office", 'Panchayats'], correctAnswer: 1, explanation: "Article 210 is the counterpart to Article 120 for State Legislatures." },

      { question: "Who can permit an MP to speak in his mother tongue in Parliament?", options: ['Prime Minister', 'President', 'Speaker of Lok Sabha or Chairman of Rajya Sabha', 'Minister of Parliamentary Affairs'], correctAnswer: 2, explanation: "The presiding officers have this power under Article 120." },

      { question: "The 'Official Language Resolution' was passed in:", options: ['1950', '1963', '1968', '1976'], correctAnswer: 2, explanation: "The 1968 Resolution set the policy for the spread of Hindi and the 'Three-Language Formula' in education." },

      { question: "The 'Three-Language Formula' suggests teaching:", options: ['Hindi, English and a regional language', 'Only Hindi and English', 'Sanskrit and two others', 'Any three international languages'], correctAnswer: 0, explanation: "It aims to promote multilingualism and national integration." },

      { question: "Which State in India has 'Sanskrit' as one of its official languages?", options: ['Uttar Pradesh', 'Uttarakhand', 'Himachal Pradesh', 'Both (b) and (c)'], correctAnswer: 3, explanation: "Uttarakhand and Himachal Pradesh have declared Sanskrit as their second official language." },

      { question: "Linguistic Minorities are protected under which Fundamental Rights?", options: ['Article 14', 'Articles 29 and 30', 'Article 32', 'Article 17'], correctAnswer: 1, explanation: "Article 29 protects their language/culture; Article 30 allows them to establish educational institutions." },

      { question: "The Special Officer for Linguistic Minorities (Article 350B) is headquartered at:", options: ['New Delhi', 'Prayagraj (Allahabad)', 'Mumbai', 'Kolkata'], correctAnswer: 1, explanation: "The office of the Commissioner for Linguistic Minorities was established in Prayagraj in 1957." },

      { question: "Who appoints the Special Officer for Linguistic Minorities?", options: ['The Prime Minister', 'The President', 'The Chief Justice of India', 'The Home Minister'], correctAnswer: 1, explanation: "The President appoints the officer under Article 350B." },

      { question: "The language of the 'Authoritative Text' of the Constitution (Article 394A) is:", options: ['English only', 'Hindi only', 'Both (with Hindi translation having same legal force)', 'Any scheduled language'], correctAnswer: 2, explanation: "Article 394A (added by 58th Amendment 1987) provided for an authoritative text in Hindi." },

      { question: "Which Ministry handles the 'Department of Official Language'?", options: ['Ministry of Culture', 'Ministry of Education', 'Ministry of Home Affairs', 'Ministry of Law'], correctAnswer: 2, explanation: "The Department of Official Language is under the Ministry of Home Affairs." },

      { question: "The 'Kendriya Hindi Samiti' is chaired by:", options: ['The Home Minister', 'The President', 'The Prime Minister', 'The Vice-President'], correctAnswer: 2, explanation: "The PM chairs this apex body for official language policy." },

      { question: "Article 348(1) is an exception to:", options: ['Article 19', 'Article 343 (Hindi as official language)', 'Article 14', 'Article 21'], correctAnswer: 1, explanation: "While 343 says Hindi is official, 348 mandates English for Courts until Parliament changes it." },

      { question: "A person can petition a court in their mother tongue under:", options: ['Article 348', 'Article 350', 'Article 351', 'Article 343'], correctAnswer: 1, explanation: "Article 350 allows grievance representations in any language used in the Union or State." },

      { question: "The Eighth Schedule has its origins in which Article?", options: ['Article 343', 'Article 344(1) and 351', 'Article 345', 'Article 350'], correctAnswer: 1, explanation: "Articles 344(1) and 351 refer to the languages mentioned in the Eighth Schedule." },

      { question: "Which language is spoken by the most people in India after Hindi?", options: ['Bengali', 'Marathi', 'Telugu', 'Tamil'], correctAnswer: 0, explanation: "According to the 2011 Census, Bengali is the second most spoken language." },

      { question: "The 'Rajbhasha' day is celebrated on:", options: ['January 26', 'August 15', 'September 14', 'November 26'], correctAnswer: 2, explanation: "Hindi Day is celebrated on Sept 14, marking the day it was adopted as the official language of the Union in 1949." },

      { question: "Can a State have English as its ONLY official language?", options: ['No', 'Yes (e.g., Nagaland, Mizoram)', 'Only if they get SC permission', 'Only for 5 years'], correctAnswer: 1, explanation: "Several NE states use English as their primary official language." },

      { question: "Article 349 deals with:", options: ['Special procedure for enactment of certain laws relating to language', 'Hindi development', 'Court languages', 'Primary education'], correctAnswer: 0, explanation: "It required Presidential sanction for any Bill relating to language during the first 15 years." },

      { question: "The Commissioner for Linguistic Minorities submits reports to:", options: ['The Parliament', 'The President', 'The Home Minister', 'The Chief Ministers'], correctAnswer: 1, explanation: "The President lays these reports before each House of Parliament and sends them to state governments (Article 350B)." },

    ],

  },

  {

    id: "miscellaneous-provisions",

    title: "Miscellaneous & Part XIX",

    description: "Immunity of high officials, definitions, and transitional provisions.",

    icon: "📦",

    colorClass: "neutral",

    difficulty: "Advanced",

    questions: [

      { question: "Part XIX of the Constitution (Articles 361-367) deals with:", options: ['Elections', 'Miscellaneous Provisions', 'Amendments', 'Schedules'], correctAnswer: 1, explanation: "Part XIX contains miscellaneous provisions including immunity for President/Governors." },

      { question: "The President or Governor is NOT answerable to any court for:", options: ['Their personal crimes', 'The exercise and performance of powers and duties of their office', 'Their financial debts', 'Their family matters'], correctAnswer: 1, explanation: "Article 361(1) provides immunity for official acts." },

      { question: "Can criminal proceedings be instituted against the President during his term?", options: ['Yes, with notice', 'No', 'Only for murder', 'Only if PM allows'], correctAnswer: 1, explanation: "Article 361(2) states no criminal proceedings whatsoever shall be instituted or continued against the President or Governor during their term." },

      { question: "Civil proceedings against the President/Governor for personal acts require a notice of:", options: ['14 days', '1 month', '2 months', '6 months'], correctAnswer: 2, explanation: "Article 361(4) requires a 2-month notice before instituting civil proceedings for personal acts." },

      { question: "Article 361A protects the publication of:", options: ['Government secrets', 'Substantially true reports of proceedings of Parliament/State Legislatures', 'Court judgments', 'Private data of MPs'], correctAnswer: 1, explanation: "Added by 44th Amendment 1978, it protects media from civil/criminal liability for reporting legislative proceedings (unless in secret session)." },

      { question: "Article 363 bars interference by Courts in disputes arising out of:", options: ['Elections', 'Treaties/Agreements with Princely States', 'Fundamental Rights', 'GST'], correctAnswer: 1, explanation: "It prevents courts from adjudicating on pre-constitution treaties/covenants signed with rulers of Indian States." },

      { question: "Article 363A (added by 26th Amendment 1971) abolished:", options: ['Untouchability', 'Privy Purses and recognition of Rulers', 'Caste system', 'Zamindari'], correctAnswer: 1, explanation: "It abolished the titles, privileges and privy purses of the former rulers of Indian States." },

      { question: "The 'Major Ports' and 'Aerodromes' are covered under which Article for special laws?", options: ['Article 363', 'Article 364', 'Article 365', 'Article 366'], correctAnswer: 1, explanation: "Article 364 allows the President to direct that certain laws shall not apply or apply with modifications to major ports and aerodromes." },

      { question: "Article 365 relates to the effect of failure to comply with:", options: ['Court orders', 'Directions given by the Union', 'Panchayat rules', 'International treaties'], correctAnswer: 1, explanation: "If a State fails to comply with Union directions, the President may hold that the State government cannot be carried on per the Constitution (basis for Art 356)." },

      { question: "The 'Definitions' of terms used in the Constitution are found in:", options: ['Article 1', 'Article 12', 'Article 366', 'Article 395'], correctAnswer: 2, explanation: "Article 366 contains definitions for terms like 'Agricultural income', 'Debt', 'Goods', 'Scheduled Castes', etc." },

      { question: "Article 367 deals with:", options: ['Interpretations', 'Repeals', 'Short title', 'Commencement'], correctAnswer: 0, explanation: "Article 367 applies the General Clauses Act 1897 for the interpretation of the Constitution." },

      { question: "Under Article 366, 'Scheduled Castes' means castes specified in:", options: ['Article 338', 'Article 341', 'Article 342', 'Article 335'], correctAnswer: 1, explanation: "Article 341 contains the process for identifying SCs." },

      { question: "Under Article 366, 'Scheduled Tribes' means tribes specified in:", options: ['Article 338A', 'Article 341', 'Article 342', 'Article 335'], correctAnswer: 2, explanation: "Article 342 contains the process for identifying STs." },

      { question: "The 'Short Title' of the Constitution is given in:", options: ['Article 1', 'Preamble', 'Article 393', 'Article 394'], correctAnswer: 2, explanation: "Article 393 states 'This Constitution may be called the Constitution of India.'" },

      { question: "The date of 'Commencement' of the Constitution is given in:", options: ['Article 393', 'Article 394', 'Article 395', 'Nov 26, 1949'], correctAnswer: 1, explanation: "Article 394 specifies Jan 26, 1950, while listing articles that came into force on Nov 26, 1949." },

      { question: "Which Article repealed the Indian Independence Act 1947?", options: ['Article 393', 'Article 394', 'Article 395', 'Article 396'], correctAnswer: 2, explanation: "Article 395 repealed the Independence Act 1947 and the GOI Act 1935 (except the Abolition of Privy Council Jurisdiction Act)." },

      { question: "Article 394A (added by 58th Amendment 1987) provides for:", options: ['Hindi translation of Constitution', 'Authoritative text of Constitution in Hindi', 'Minority rights', 'Language of courts'], correctAnswer: 1, explanation: "It ensures that the Hindi translation has the same meaning as the English original." },

      { question: "Which Part of the Constitution was repealed by the 7th Amendment 1956?", options: ['Part VI', 'Part VII (States in Part B of the First Schedule)', 'Part VIII', 'Part IX'], correctAnswer: 1, explanation: "Part VII was removed as the classification of states (A, B, C, D) was abolished." },

      { question: "Part VIII of the Constitution (Articles 239-242) deals with:", options: ['States', 'Union Territories', 'Panchayats', 'Co-operative Societies'], correctAnswer: 1, explanation: "Part VIII provides for the administration of UTs." },

      { question: "The 10th Schedule (Anti-defection) was added to prevent:", options: ['Corruption', 'Aaya Ram Gaya Ram culture (frequent party hopping)', 'Criminals in politics', 'Electoral fraud'], correctAnswer: 1, explanation: "It was added by the 52nd Amendment 1985 to bring stability to governments." },

      { question: "Which Schedule deals with the powers, authority and responsibilities of Panchayats?", options: ['Ninth', 'Tenth', 'Eleventh', 'Twelfth'], correctAnswer: 2, explanation: "The 11th Schedule (73rd Amendment) lists 29 subjects for Panchayats." },

      { question: "Which Schedule deals with the powers, authority and responsibilities of Municipalities?", options: ['Ninth', 'Tenth', 'Eleventh', 'Twelfth'], correctAnswer: 3, explanation: "The 12th Schedule (74th Amendment) lists 18 subjects for Municipalities." },

      { question: "The 'Oaths or Affirmations' for constitutional posts are in which Schedule?", options: ['First', 'Second', 'Third', 'Fourth'], correctAnswer: 2, explanation: "The 3rd Schedule contains the forms of oath for Ministers, MPs, Judges, etc." },

      { question: "The 'Salaries and Emoluments' of President, Governors, Judges are in which Schedule?", options: ['First', 'Second', 'Third', 'Fourth'], correctAnswer: 1, explanation: "The 2nd Schedule specifies the financial provisions for high constitutional offices." },

      { question: "The allocation of seats in the Rajya Sabha is in which Schedule?", options: ['First', 'Second', 'Third', 'Fourth'], correctAnswer: 3, explanation: "The 4th Schedule lists the seats for each State and UT in the Council of States." },

      { question: "The 9th Schedule was added by which Amendment?", options: ['1st', '4th', '25th', '42nd'], correctAnswer: 0, explanation: "The 1st Amendment (1951) added the 9th Schedule to protect land reforms from judicial review." },

      { question: "Which Amendment added 'Co-operative Societies' as Part IXB?", options: ['73rd', '74th', '97th', '101st'], correctAnswer: 2, explanation: "The 97th Amendment 2011 added Part IXB and Article 43B (DPSP)." },

      { question: "The 102nd Amendment 2018 gave constitutional status to:", options: ['NCST', 'NCSC', 'NCBC', 'GST Council'], correctAnswer: 2, explanation: "It gave constitutional status to the National Commission for Backward Classes (Article 338B)." },

      { question: "Which Amendment extended SC/ST reservation in legislatures till 2030?", options: ['101st', '102nd', '103rd', '104th'], correctAnswer: 3, explanation: "The 104th Amendment 2020 extended the reservation for another 10 years." },

      { question: "The 106th Amendment (2023) provided for:", options: ['GST changes', '1/3rd reservation for women in Lok Sabha and State Assemblies', 'EWS reservation', 'Tribal rights'], correctAnswer: 1, explanation: "Known as the Nari Shakti Vandan Adhiniyam, it introduces women's reservation in legislatures." },

      { question: "Article 371D (Andhra Pradesh) was challenged in which famous case?", options: ['P. Sambamurthy v. State of AP', 'S.R. Bommai v. Union of India', 'Minerva Mills', 'Kesavananda'], correctAnswer: 0, explanation: "The SC struck down part of 371D (administrative tribunal's finality) as it violated judicial review." },

      { question: "Article 355 imposes a duty on the Union to:", options: ['Collect taxes', 'Protect States against external aggression and internal disturbance', 'Build roads', 'Hold elections'], correctAnswer: 1, explanation: "It is the Union's duty to protect states and ensure their government is carried on per the Constitution." },

      { question: "Under Article 361, can a court issue a 'Mandamus' to the President?", options: ['Yes', 'No', 'Only for personal acts', 'Only if PM allows'], correctAnswer: 1, explanation: "No court can compel the President or Governor to perform or not perform any official duty." },

      { question: "The 'President's pleasure' in Article 310 is qualified by:", options: ['Article 14', 'Article 311 (procedural safeguards)', 'Article 19', 'Article 21'], correctAnswer: 1, explanation: "Article 311 provides the necessary protection against arbitrary dismissal of civil servants." },

      { question: "Which Article provides for the appointment of a commission to investigate the conditions of backward classes?", options: ['Article 338', 'Article 339', 'Article 340', 'Article 341'], correctAnswer: 2, explanation: "Article 340 was used to set up the Kaka Kalelkar and Mandal Commissions." },

      { question: "The 'Provisional Parliament' (1950-52) was:", options: ['A new elected body', 'The Constituent Assembly itself', 'The Council of States', 'None'], correctAnswer: 1, explanation: "The CA transformed itself into the Provisional Parliament after Jan 26, 1950, until the first elections." },

      { question: "Article 371A (Nagaland) prevents Parliament from legislating on:", options: ['Religious/Social practices of Nagas', 'Naga customary law and procedure', 'Ownership and transfer of land', 'All of the above'], correctAnswer: 3, explanation: "These areas are protected from Parliamentary laws unless the Nagaland Assembly decides otherwise." },

      { question: "The 'Fifth Schedule' areas have a 'Tribes Advisory Council' with how many members?", options: ['10', '15', 'Maximum 20', '30'], correctAnswer: 2, explanation: "It consists of not more than 20 members, 3/4ths of whom must be ST representatives in the Assembly." },

      { question: "Which Amendment added the 'Fundamental Duties'?", options: ['24th', '42nd', '44th', '86th'], correctAnswer: 1, explanation: "The 42nd Amendment (1976) added Part IVA and Article 51A." },

      { question: "Article 371F ensures Sikkim has at least how many seats in Lok Sabha?", options: ['1', '2', '3', '5'], correctAnswer: 0, explanation: "Sikkim is allotted one seat in the Lok Sabha and one in the Rajya Sabha." },

      { question: "Who can amend the First Schedule to change state boundaries?", options: ['State Legislature', 'President', 'Parliament by simple law (Article 3/4)', 'Constitutional Amendment (Article 368)'], correctAnswer: 2, explanation: "A law under Article 3/4 is not considered an amendment under Article 368 and needs only a simple majority." },

      { question: "The 'Official Language' provisions are in which Part?", options: ['Part XVI', 'Part XVII', 'Part XVIII', 'Part XIX'], correctAnswer: 1, explanation: "Part XVII (Articles 343-351)." },

      { question: "Article 371G (Mizoram) was added by which Amendment?", options: ['52nd', '53rd', '54th', '55th'], correctAnswer: 1, explanation: "The 53rd Amendment (1986) followed the Mizo Peace Accord." },

      { question: "Which Article gives the definition of 'Agricultural Income'?", options: ['Article 366(1)', 'Article 366(10)', 'Article 265', 'Article 246'], correctAnswer: 0, explanation: "Article 366(1) defines it by reference to the enactments relating to Indian Income-tax." },

      { question: "The 'Authoritative text in Hindi' (Article 394A) is signed by:", options: ['Prime Minister', 'President', 'Speaker', 'Chief Justice'], correctAnswer: 1, explanation: "The President causes the translation to be published under his authority." },

      { question: "Which Schedule was omitted by the 7th Amendment 1956?", options: ['Second', 'Seventh', 'Ninth', 'None (Part B states part was removed)'], correctAnswer: 3, explanation: "No schedule was fully omitted, but the classification of states in the 1st Schedule was changed." },

      { question: "Article 366(25) defines:", options: ['Scheduled Castes', 'Scheduled Tribes', 'Anglo-Indians', 'Backwards'], correctAnswer: 1, explanation: "It defines STs as such tribes as are deemed under Article 342 to be STs." },

      { question: "The 'Governor's discretionary powers' (Art 163) are NOT subject to:", options: ['Judicial review generally', 'Cabinet advice (in that specific area)', "President's order", 'Both (a) and (b)'], correctAnswer: 1, explanation: "Discretionary powers mean the Governor acts without (or even against) the advice of the CoM." },

      { question: "Part XX contains only one Article, which is:", options: ['Article 356', 'Article 360', 'Article 368', 'Article 370'], correctAnswer: 2, explanation: "Article 368 (Power of Parliament to amend the Constitution and procedure therefor)." },

      { question: "The 'basic structure' of the Constitution was defined by the SC in which year?", options: ['1951', '1967', '1973', '1980'], correctAnswer: 2, explanation: "1973 (Kesavananda Bharati v. State of Kerala)." },

    ],

  },

  {

    id: "legal-doctrines",

    title: "Legal Maxims & Doctrines",

    description: "The 'Hidden Constitution' ΓÇö Pith & Substance, Colorable Legislation, and more.",

    icon: "📜",

    colorClass: "stone",

    difficulty: "Advanced",

    questions: [

      { question: "The 'Doctrine of Pith and Substance' is used to determine:", options: ['Fundamental Rights violation', 'Legislative competence when laws overlap between Lists', 'Executive overreach', 'Judicial bias'], correctAnswer: 1, explanation: "It examines the 'true nature' of a law to see which List it belongs to, ignoring incidental overlaps." },

      { question: "The 'Doctrine of Colorable Legislation' means:", options: ['Laws must be colorful', 'What cannot be done directly, cannot be done indirectly', 'Laws based on skin color', 'Temporary laws'], correctAnswer: 1, explanation: "It prevents the legislature from overstepping its power by disguising a law as something it's not." },

      { question: "The 'Doctrine of Eclipse' applies to:", options: ['Post-constitutional laws', 'Pre-constitutional laws that violate Fundamental Rights', 'Emergency laws', 'International treaties'], correctAnswer: 1, explanation: "Such laws are not void ab initio but become 'eclipsed' or dormant. They can become active if the FR is later amended." },

      { question: "The 'Doctrine of Severability' means:", options: ['The whole law is void if one part is bad', 'Only the unconstitutional part of a law is struck down if it can be separated', 'Judges can be removed', 'States can secede'], correctAnswer: 1, explanation: "Article 13 implies that only the inconsistent part is void, provided the rest can stand alone." },

      { question: "The 'Doctrine of Waiver' states that:", options: ['Citizens can give up their Fundamental Rights', 'Fundamental Rights cannot be waived in India', 'States can waive taxes', 'Governors can waive crimes'], correctAnswer: 1, explanation: "In Behram Khurshed Pesikaka case, the SC held that a citizen cannot waive Fundamental Rights as they are a matter of public policy." },

      { question: "The 'Doctrine of Territorial Nexus' applies to:", options: ['International trade', "Power of State Legislatures to tax objects/events outside the state if there's a sufficient connection", 'Boundary disputes', 'Citizenship'], correctAnswer: 1, explanation: "It allows extra-territorial operation of state laws if there is a real and not illusory connection." },

      { question: "The 'Doctrine of Pleasure' (Article 310) is borrowed from:", options: ['USA', "UK (Crown's pleasure)", 'France', 'Ireland'], correctAnswer: 1, explanation: "It originates from the British common law where servants hold office at the pleasure of the Crown." },

      { question: "The 'Doctrine of Basic Structure' was first used in:", options: ['Golaknath Case', 'Kesavananda Bharati Case', 'Minerva Mills', 'S.R. Bommai'], correctAnswer: 1, explanation: "The 13-judge bench in 1973 established this landmark doctrine." },

      { question: "The 'Doctrine of Judicial Review' is primarily based on which Article?", options: ['Article 13', 'Article 32', 'Article 226', 'All of the above'], correctAnswer: 3, explanation: "Article 13 defines the scope, while 32 and 226 provide the remedy." },

      { question: "'Audi Alteram Partem' is a principle of:", options: ['Criminal law', 'Natural Justice (Hear the other side)', 'Legislative procedure', 'Economic policy'], correctAnswer: 1, explanation: "It ensures that no one is condemned unheard." },

      { question: "'Nemo judex in causa sua' means:", options: ['No one can be a judge in their own cause', 'The law is supreme', 'Judges are immune', 'Justice must be swift'], correctAnswer: 0, explanation: "It is a rule against bias in natural justice." },

      { question: "The 'Doctrine of Res Judicata' means:", options: ['A matter already decided by a competent court cannot be reopened', 'Justice is delayed', 'New evidence is always allowed', 'Only SC can decide'], correctAnswer: 0, explanation: "It ensures finality of litigation and prevents multiple suits on the same issue." },

      { question: "'Stare Decisis' relates to:", options: ['Public interest', 'Binding nature of precedents (Article 141)', 'Right to property', 'Amendment power'], correctAnswer: 1, explanation: "It means to stand by things decided; lower courts must follow higher court rulings." },

      { question: "The 'Doctrine of Laches' relates to:", options: ['Physical assault', 'Unreasonable delay in seeking a legal remedy', 'Police brutality', 'Tax evasion'], correctAnswer: 1, explanation: "Courts may refuse to help a person who has 'slept over their rights' for too long." },

      { question: "The 'Doctrine of Harmonious Construction' is used when:", options: ['There is a conflict between two provisions of the Constitution/statute', 'A law is passed by 2/3rd majority', 'The PM and President disagree', 'A law is translated'], correctAnswer: 0, explanation: "The court tries to interpret the provisions such that they both remain effective and consistent." },

      { question: "The 'Doctrine of Prospective Overruling' was first used in:", options: ['A.K. Gopalan Case', 'Golaknath Case', 'Kesavananda Case', 'Maneka Gandhi Case'], correctAnswer: 1, explanation: "Justice Subba Rao used it to say that the ruling would apply only to future cases, not past amendments." },

      { question: "'Ejusdem Generis' is a rule of interpretation meaning:", options: ['Of the same kind', 'The law is hard', 'Literal meaning only', 'Special meaning'], correctAnswer: 0, explanation: "General words following specific words should be interpreted in the same context as the specific words." },

      { question: "The 'Doctrine of Eminent Domain' relates to:", options: ['Freedom of speech', 'Power of the State to take private property for public use', 'Military rule', 'Sovereign immunity'], correctAnswer: 1, explanation: "It is the basis for the state's power to acquire land (subject to Article 300A)." },

      { question: "'Salus populi est suprema lex' means:", options: ['The king can do no wrong', 'The welfare of the people is the supreme law', 'The law is the king', 'Equality for all'], correctAnswer: 1, explanation: "It is a maxim justifying state actions in public interest/emergency." },

      { question: "The 'Doctrine of Incidental or Ancillary Powers' means:", options: ['The power to make a law includes power to make rules/details to make it effective', 'Police have extra powers', 'The PM is superior', 'States have residual powers'], correctAnswer: 0, explanation: "It ensures that the grant of a main power includes all small powers necessary for its exercise." },

      { question: "'Locus Standi' refers to:", options: ['The place of a crime', 'The right of a party to appear and be heard by a court', 'A stationary object', 'Local laws'], correctAnswer: 1, explanation: "Traditionally, only the aggrieved person had locus standi, but PIL expanded this." },

      { question: "The 'Doctrine of Immunity of Instrumentalities' is associated with:", options: ['US Federalism', 'Indian Federalism', 'Parliamentary privileges', 'Diplomatic immunity'], correctAnswer: 0, explanation: "In the US, it means federal and state governments cannot tax each other's agencies; India has specific articles (285, 289) for this." },

      { question: "'Caveat Emptor' means:", options: ['Let the seller beware', 'Let the buyer beware', 'Let the judge beware', 'Let the law beware'], correctAnswer: 1, explanation: "It is a principle of commercial law often discussed in trade cases." },

      { question: "The 'Doctrine of Occupied Field' relates to:", options: ['Land acquisition', 'Legislative competence in the Concurrent List (Article 254)', 'Agriculture', 'Military camps'], correctAnswer: 1, explanation: "If Parliament makes a law on a subject, the 'field' is occupied and state laws cannot conflict." },

      { question: "'Ubi jus ibi remedium' means:", options: ['Where there is a right, there is a remedy', 'Justice must be done', 'The law is just', 'Rights are absolute'], correctAnswer: 0, explanation: "It is the foundation of the right to move courts (Article 32/226)." },

      { question: "The 'Doctrine of Proportionality' is used to check:", options: ['Tax rates', 'If a restriction on a Fundamental Right is excessive or reasonable', 'Size of constituencies', 'Number of judges'], correctAnswer: 1, explanation: "The punishment/restriction must be proportional to the objective sought." },

      { question: "'Ex post facto' laws (Article 20) are laws that:", options: ['Apply to the past', 'Apply only to the future', 'Apply to everyone', 'Apply to officials only'], correctAnswer: 0, explanation: "The Constitution prohibits retrospective criminal laws." },

      { question: "The 'Rule Against Double Jeopardy' (Article 20) means:", options: ['No one can be punished twice for the same offence', 'No one can be arrested twice', 'No one can be sued twice', 'Two punishments for one crime'], correctAnswer: 0, explanation: "It is a fundamental principle of criminal justice." },

      { question: "'Pari Materia' refers to:", options: ['Laws on different subjects', 'Laws on the same subject (to be interpreted together)', 'Material for a law', 'Superior laws'], correctAnswer: 1, explanation: "Statutes on the same subject should be read in harmony." },

      { question: "The 'Doctrine of Separation of Powers' was famously propounded by:", options: ['Dicey', 'Montesquieu', 'Locke', 'Aristotle'], correctAnswer: 1, explanation: "He suggested dividing government into Legislative, Executive, and Judicial branches." },

      { question: "'Quo Warranto' literally means:", options: ['We command', 'To be certified', 'By what authority', 'You have the body'], correctAnswer: 2, explanation: "It is a writ issued to enquire into the legality of a claim to a public office." },

      { question: "'Certiorari' means:", options: ['We command', 'To be informed/certified', 'By what authority', 'You have the body'], correctAnswer: 1, explanation: "It is a writ to quash the order of a lower court/tribunal." },

      { question: "'Mandamus' means:", options: ['We command', 'To be certified', 'By what authority', 'You have the body'], correctAnswer: 0, explanation: "It is a writ commanding a public official to perform their legal duty." },

      { question: "The 'Doctrine of Legitimate Expectation' is a part of:", options: ['Criminal law', 'Administrative law (Fairness in government action)', 'Tax law', 'Contract law'], correctAnswer: 1, explanation: "It protects people from sudden, arbitrary changes in government policy that affect them." },

      { question: "'Res Ipsa Loquitur' means:", options: ['The thing speaks for itself', 'The law is silent', 'Speak the truth', 'The judge speaks'], correctAnswer: 0, explanation: "A principle used in negligence cases where the facts suggest the conclusion." },

      { question: "The 'Doctrine of Public Trust' means:", options: ['The government is a trustee of natural resources for the people', 'Banks must be trusted', 'Elections are a trust', 'Parliament is a trust'], correctAnswer: 0, explanation: "Established in M.C. Mehta v. Kamal Nath, it protects forests, rivers, and air." },

      { question: "'De Jure' means:", options: ['In fact', 'By law (rightfully)', 'In court', 'During the day'], correctAnswer: 1, explanation: "Contrast with 'De Facto' (in practice)." },

      { question: "The 'Doctrine of Escheat' is covered in which Article?", options: ['Article 14', 'Article 296', 'Article 300', 'Article 19'], correctAnswer: 1, explanation: "It relates to property of a person dying without heirs." },

      { question: "'Persona Designata' means:", options: ['A person designated as an individual, not in an official capacity', 'The President', 'A witness', 'A judge'], correctAnswer: 0, explanation: "A person appointed to a function by name or specific description, not by virtue of their office." },

      { question: "The 'Doctrine of Strict Interpretation' is usually applied to:", options: ['Taxing statutes and criminal laws', 'Constitutional provisions', 'DPSPs', 'Preamble'], correctAnswer: 0, explanation: "Ambiguities in these laws are usually resolved in favor of the taxpayer/accused." },

      { question: "'Obiter Dicta' refers to:", options: ['The binding part of a judgment', 'Remarks made by a judge which are not essential to the decision', 'The final order', 'The dissenting opinion'], correctAnswer: 1, explanation: "These are persuasive but not binding precedents (Article 141)." },

      { question: "'Ratio Decidendi' refers to:", options: ['The binding part (reasoning) of a judgment', "The judge's mood", "The lawyer's argument", 'The summary'], correctAnswer: 0, explanation: "It is the principle of law on which the decision is based, and it is binding." },

      { question: "The 'Doctrine of Eclipse' was established in which case?", options: ['A.K. Gopalan', 'Bhikaji Narain Dhakras v. State of MP', 'Deep Chand v. State of UP', 'Mahendra Lal Jaini'], correctAnswer: 1, explanation: "This 1955 case explained how pre-constitutional laws revive after an amendment." },

      { question: "The 'Doctrine of Severability' was famously applied in:", options: ['A.K. Gopalan v. State of Madras (1950)', 'Kesavananda Case', 'Golaknath', 'Indra Sawhney'], correctAnswer: 0, explanation: "The SC struck down only Section 14 of the Preventive Detention Act, saving the rest." },

      { question: "'Ab initio' means:", options: ['From the beginning', 'After the fact', 'In the middle', 'At the end'], correctAnswer: 0, explanation: "Example: A law violating Fundamental Rights is often said to be void ab initio (from the start)." },

      { question: "'Amicus Curiae' means:", options: ["A judge's friend", 'A friend of the court (neutral expert advisor)', 'A lawyer for the accused', 'A witness'], correctAnswer: 1, explanation: "Courts appoint them to assist in complex public interest cases." },

      { question: "The 'Doctrine of Repugnancy' (Article 254) applies when:", options: ['A State law and Central law on Concurrent List conflict', 'The PM and President disagree', 'Two states fight', 'A law is poorly written'], correctAnswer: 0, explanation: "The Central law generally prevails in such a conflict." },

      { question: "'In Limine' means:", options: ['At the threshold (initial stage)', 'In the locker', 'In the court room', 'After a long time'], correctAnswer: 0, explanation: "Example: A petition dismissed 'in limine' is dismissed at the very first hearing." },

      { question: "'Mutatis Mutandis' means:", options: ['With necessary changes being made', 'Totally changed', 'No change', 'Changes made by Parliament'], correctAnswer: 0, explanation: "Commonly used in legal documents when applying a rule from one context to another." },

      { question: "The 'Golden Triangle' of the Constitution refers to:", options: ['Articles 14, 19 and 21', 'Articles 32, 226 and 136', 'The Preamble, FRs and DPSPs', 'The Legislature, Executive and Judiciary'], correctAnswer: 0, explanation: "Maneka Gandhi case established that these three articles must be read together as a combined guarantee of liberty." },

    ],

  },

  {

    id: "constitutional-philosophy",

    title: "Comparative Constitutionalism & Philosophy",

    description: "Global borrowings and the deep-seated philosophy of our Preamble.",

    icon: "≡ƒºá",

    colorClass: "rose",

    difficulty: "Advanced",

    questions: [

      { question: "The concept of 'Rule of Law' in the Indian Constitution is borrowed from:", options: ['USA', 'France', 'UK', 'Canada'], correctAnswer: 2, explanation: "It is a hallmark of the British constitutional tradition, popularized by A.V. Dicey." },

      { question: "The 'Suspension of Fundamental Rights during Emergency' is inspired by the:", options: ['Weimar Constitution of Germany', 'US Constitution', 'Soviet Constitution', 'Japanese Constitution'], correctAnswer: 0, explanation: "The provision to suspend rights during emergency was borrowed from the Weimar Republic." },

      { question: "The 'Procedure established by Law' (Article 21) was borrowed from:", options: ['USA', 'Japan', 'UK', 'Ireland'], correctAnswer: 1, explanation: "This phrase was specifically chosen over the US 'Due Process of Law' from the Japanese Constitution." },

      { question: "The 'Idea of Justice' (Social, Economic, Political) in the Preamble is from:", options: ['French Revolution', 'Russian Revolution', 'American Revolution', 'Irish Constitution'], correctAnswer: 1, explanation: "The ideals of social, economic, and political justice were inspired by the 1917 Russian Revolution." },

      { question: "The 'Ideals of Liberty, Equality and Fraternity' are from:", options: ['French Revolution', 'Russian Revolution', 'American Revolution', 'Glorious Revolution'], correctAnswer: 0, explanation: "These were the iconic slogans of the French Revolution (1789)." },

      { question: "India's 'Federal System with a Strong Centre' is similar to:", options: ['USA', 'Canada', 'Australia', 'Switzerland'], correctAnswer: 1, explanation: "Unlike the US model of independent states, India follows the Canadian model of a federation with a powerful central government." },

      { question: "The 'Directive Principles of State Policy' are borrowed from:", options: ['Ireland', 'USA', 'Spain', 'USSR'], correctAnswer: 0, explanation: "The Irish Constitution of 1937 was the source for India's DPSPs." },

      { question: "The 'Method of Election of the President' is borrowed from:", options: ['USA', 'Ireland', 'UK', 'France'], correctAnswer: 1, explanation: "While the post is like the UK's Crown, the indirect election method is from the Irish Constitution." },

      { question: "The 'Nomination of Members to Rajya Sabha' is from:", options: ['UK', 'Ireland', 'South Africa', 'Canada'], correctAnswer: 1, explanation: "The provision to nominate 12 members for their expertise is borrowed from Ireland." },

      { question: "The 'Concurrent List' was inspired by the Constitution of:", options: ['Canada', 'Australia', 'USA', 'Germany'], correctAnswer: 1, explanation: "The Australian Constitution provided the model for a list of subjects shared by both levels of government." },

      { question: "The 'Joint Sitting of the Two Houses' is borrowed from:", options: ['USA', 'UK', 'Australia', 'Canada'], correctAnswer: 2, explanation: "Article 108 is inspired by similar provisions in the Australian Constitution." },

      { question: "The 'Fundamental Duties' were added on the lines of which Constitution?", options: ['USA', 'Japan', 'USSR (Soviet Union)', 'China'], correctAnswer: 2, explanation: "The 42nd Amendment followed the socialist model of the Soviet Constitution." },

      { question: "The 'Amendment Procedure' (Article 368) is inspired by:", options: ['South Africa', 'USA', 'UK', 'Switzerland'], correctAnswer: 0, explanation: "The specific process for constitutional amendment was borrowed from South Africa." },

      { question: "The 'Election of Members of Rajya Sabha' is inspired by:", options: ['UK', 'USA', 'South Africa', 'Ireland'], correctAnswer: 2, explanation: "Unlike the US (direct) or UK (hereditary/nominated), the election by state MLAs is from the South African model." },

      { question: "Which country's Constitution is the shortest in the world?", options: ['India', 'USA', 'UK', 'France'], correctAnswer: 1, explanation: "The US Constitution is the shortest written constitution with only 7 original articles." },

      { question: "The UK follows which type of Constitution?", options: ['Written', 'Unwritten (based on conventions and acts)', 'Rigid', 'Federal'], correctAnswer: 1, explanation: "The British Constitution is a prime example of an unwritten/evolved constitution." },

      { question: "In the USA, the 'Residual Powers' belong to:", options: ['The Centre (Federal Govt)', 'The States', 'Both', 'None'], correctAnswer: 1, explanation: "Under the 10th Amendment of the US Constitution, powers not delegated to the federal government belong to the states." },

      { question: "The 'Five-Year Plans' (now discontinued) were inspired by:", options: ['USA', 'USSR', 'UK', 'France'], correctAnswer: 1, explanation: "Centralized economic planning was a hallmark of the Soviet system." },

      { question: "The 'Preamble' to the Constitution was first introduced by:", options: ['UK', 'USA', 'France', 'India'], correctAnswer: 1, explanation: "The American Constitution was the first to begin with a Preamble." },

      { question: "'Constitutional Morality' according to Ambedkar means:", options: ['Following religious morals', 'Adherence to the core spirit and conventions of the Constitution', 'Strict legalism', 'Moral policing'], correctAnswer: 1, explanation: "Ambedkar emphasized that a democracy needs constitutional morality to survive beyond mere rules." },

      { question: "Which country has the 'longest' written constitution in the world?", options: ['USA', 'China', 'India', 'Brazil'], correctAnswer: 2, explanation: "India's Constitution is famously the most detailed and longest in the world." },

      { question: "The 'Separation of Powers' in India is:", options: ['Absolute (as in USA)', 'Not absolute (overlap between Executive and Legislature)', 'Only between States', 'Non-existent'], correctAnswer: 1, explanation: "India follows a parliamentary system where the executive is part of and responsible to the legislature." },

      { question: "Which country has a 'Dual Citizenship' system?", options: ['India', 'USA', 'UK', 'Both (b) and (c)'], correctAnswer: 3, explanation: "In the US, one is a citizen of both the State and the USA. India rejected this for national unity." },

      { question: "The 'Due Process of Law' is a feature of which Constitution?", options: ['UK', 'India (Original)', 'USA', 'Japan'], correctAnswer: 2, explanation: "It allows courts to check not just the procedure but also the 'fairness' and 'justice' of a law." },

      { question: "The term 'Republic' in the Preamble indicates that:", options: ['The head of state is elected', 'There is no hereditary monarch', 'Supreme power is with the people', 'All of the above'], correctAnswer: 3, explanation: "A Republic is a state where the head of government/state is not a monarch but an elected/appointed official." },

      { question: "'Secularism' in the Indian context (Sarva Dharma Sambhava) means:", options: ['State has no religion', 'State is against religion', 'State respects all religions equally and maintains principled distance', 'State funds only one religion'], correctAnswer: 2, explanation: "Indian secularism is positive and pluralistic, unlike the strict 'wall of separation' in the West." },

      { question: "Ambedkar described which article as 'The Heart and Soul' of the Constitution?", options: ['Article 14', 'Article 21', 'Article 32', 'Preamble'], correctAnswer: 2, explanation: "Article 32 provides the right to constitutional remedies, without which other rights are 'nullity'." },

      { question: "'Social Justice' in the Indian Constitution aims to:", options: ['Distribute wealth equally to everyone', 'Remove imbalances and ensure dignity for the marginalized', 'Punish the rich', 'End all private property'], correctAnswer: 1, explanation: "It is a tool for social engineering to create an egalitarian society." },

      { question: "The 'Constituent Power' refers to the power of:", options: ['The President to make laws', 'The Parliament to amend the Constitution', 'The Courts to interpret', 'The People to vote'], correctAnswer: 1, explanation: "Unlike ordinary legislative power, constituent power allows for changing the supreme law itself." },

      { question: "'Fraternity' in the Preamble aims to ensure:", options: ['Only friendship between people', 'Dignity of the individual and unity/integrity of the nation', 'Only religious harmony', 'Military strength'], correctAnswer: 1, explanation: "Fraternity was a later addition to the list of goals, emphasized by Ambedkar." },

      { question: "Which country has 'Direct Democracy' features like Referendum and Initiative?", options: ['India', 'USA', 'Switzerland', 'UK'], correctAnswer: 2, explanation: "Switzerland is the best example of a country where people directly participate in law-making through votes." },

      { question: "The 'Doctrine of Sovereign Immunity' in India is:", options: ['Absolute', 'Limited (The State is liable for many commercial/tortious acts)', 'Only for the PM', 'Non-existent'], correctAnswer: 1, explanation: "Through various judgments, the SC has limited the scope of immunity, protecting citizens against state wrongs." },

      { question: "In the UK, 'Parliamentary Sovereignty' means:", options: ['The Queen is supreme', 'Parliament can make or unmake any law', 'Courts can quash any law', 'States are independent'], correctAnswer: 1, explanation: "The British Parliament is theoretically supreme, though this is now limited by international treaties." },

      { question: "The 'Equality of Opportunity' (Article 16) is a:", options: ['Formal equality only', 'Substantive equality (including affirmative action)', 'Only for private jobs', 'Only for men'], correctAnswer: 1, explanation: "It includes the power of the state to make special provisions for under-represented classes." },

      { question: "'Liberty' in the Indian Constitution is:", options: ['License to do anything', 'Regulated liberty within constitutional limits', 'Absolute freedom', 'Only for the press'], correctAnswer: 1, explanation: "Liberty is provided subject to 'reasonable restrictions' for the sake of society." },

      { question: "Which body in India is the 'Guardian of the Constitution'?", options: ['The President', 'The Parliament', 'The Supreme Court', 'The Prime Minister'], correctAnswer: 2, explanation: "The SC has the final power to interpret the Constitution and protect it from violations." },

      { question: "The 'Cabinet System' is based on the principle of:", options: ['Collective Responsibility', 'Individual power', 'Judicial oversight', 'Direct election'], correctAnswer: 0, explanation: "The entire cabinet stands or falls together based on the confidence of the lower house." },

      { question: "'Sovereignty' in the Indian context shifted from the British Crown to:", options: ['The President', 'The Parliament', 'The People of India', 'The Chief Justice'], correctAnswer: 2, explanation: "As stated in the Preamble ('We, the People...'), the ultimate source of authority is the people." },

      { question: "The 'Preamble' is considered the:", options: ['Identity card of the Constitution', 'Horoscope of our sovereign democratic republic', 'Key to the minds of the makers', 'All of the above'], correctAnswer: 3, explanation: "Various scholars and judges have used these metaphors to describe the Preamble's importance." },

      { question: "India is described as an 'Indestructible Union of Destructible States'. This means:", options: ['States cannot secede', 'Parliament can change state boundaries', 'States can secede if they want', 'Both (a) and (b)'], correctAnswer: 3, explanation: "The Union is permanent, but the internal map can be changed by Parliament under Article 3." },

      { question: "The US Federation is described as:", options: ['An Indestructible Union of Indestructible States', 'A Loose Confederation', 'A Unitary state', 'A Monarchy'], correctAnswer: 0, explanation: "In the US, neither the Union nor the States can be changed without their mutual consent." },

      { question: "The 'Westminster Model' refers to:", options: ['The US Presidential system', 'The British Parliamentary system', 'The French Semi-Presidential system', 'The Swiss system'], correctAnswer: 1, explanation: "It is named after the Palace of Westminster where the UK Parliament meets." },

      { question: "'Principled Distance' is a term used to describe:", options: ['Indian Secularism', 'Social distancing', 'Judicial review', 'Federalism'], correctAnswer: 0, explanation: "Unlike the total separation in the US, Indian secularism allows the state to intervene for social reform." },

      { question: "The 'Instrument of Instructions' in the GOI Act 1935 was similar to:", options: ['Fundamental Rights', 'Directive Principles of State Policy', 'Fundamental Duties', 'Emergency provisions'], correctAnswer: 1, explanation: "DPSPs are modern instructions to the executive and legislature, similar to the 1935 instruments." },

      { question: "The 'Rigidity' or 'Flexibility' of the Indian Constitution is:", options: ['Highly rigid (like USA)', 'Highly flexible (like UK)', 'A unique blend of both', 'Only flexible during Emergency'], correctAnswer: 2, explanation: "Some parts are easy to change, while others need a very complex process involving states." },

      { question: "The 'Basic Structure' doctrine ensures that:", options: ['Parliament can never amend the Constitution', 'The spirit of the Constitution is protected from majoritarian changes', 'Only the Preamble is supreme', 'The President is supreme'], correctAnswer: 1, explanation: "It acts as a check on the absolute power of the legislature to rewrite the Constitution." },

      { question: "'Constitutionalism' means:", options: ['Following any law', 'Limited Government (Government according to law and with checks)', 'Rule by experts', 'Rule by the majority only'], correctAnswer: 1, explanation: "It is the opposite of arbitrary or absolute rule." },

      { question: "The 'Socialist' goal in India (Democratic Socialism) aims to:", options: ['End all private property', 'Achieve social goals through democratic means and mixed economy', 'Copy the Soviet model', 'Nationalize all banks'], correctAnswer: 1, explanation: "It is a 'middle path' between capitalism and communism." },

      { question: "The 'Democratic' nature of India is ensured through:", options: ['Adult Franchise', 'Periodic Elections', 'Rule of Law', 'All of the above'], correctAnswer: 3, explanation: "These are the pillars of India's representative democracy." },

      { question: "The ultimate goal of the Indian Constitution as per the Preamble is to ensure:", options: ['Dignity of the individual and Unity of the nation', 'Only economic growth', 'Only world peace', 'Only military power'], correctAnswer: 0, explanation: "Dignity and Unity are the twin pillars of the fraternity envisioned by the makers." },

    ],

  },
];