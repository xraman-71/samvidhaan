export const constitutionFacts = {
  adoptedDate: "November 26, 1949",
  effectiveDate: "January 26, 1950",
  architect: "Dr. Bhim. Rao. Ramji. Ambedkar",
  timeTaken: "2 years, 11 months, and 18 days",
  preamble: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:
  
JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all

FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`,
  totalArticles: "448 (Originally 395)",
  totalParts: "25 (Originally 22)",
  totalSchedules: "12 (Originally 8)",
  totalAmendments: "106 (as of 2023)",
};

export interface Amendment {
  number: string;
  year: string;
  summary: string;
  important?: boolean;
}

export const keyAmendments: Amendment[] = [
  {
    number: "1st Amendment",
    year: "1951",
    summary:
      "Added restrictions on freedom of speech and expression under Article 19(2). Added Ninth Schedule to protect land reform laws from judicial challenge. Validated zamindari abolition laws.",
    important: true,
  },
  {
    number: "2nd Amendment",
    year: "1952",
    summary:
      "Changed the ratio of representation in Lok Sabha — allowed one MP per million (instead of one per 750,000) people, accommodating population growth.",
  },
  {
    number: "3rd Amendment",
    year: "1954",
    summary:
      "Revised Entry 33 of the Concurrent List to give Parliament broader powers to regulate production, supply, and distribution of essential commodities like food grains, cotton, oils, etc.",
  },
  {
    number: "4th Amendment",
    year: "1955",
    summary:
      "Allowed the State to acquire private property for public purposes with limited compensation. Also added more laws to the Ninth Schedule to protect them from fundamental rights challenges.",
  },
  {
    number: "5th Amendment",
    year: "1955",
    summary:
      "Required the President to specify a time limit within which state legislatures must express views on proposed changes to their boundaries or names.",
  },
  {
    number: "6th Amendment",
    year: "1956",
    summary:
      "Gave Parliament exclusive power to levy taxes on inter-state sale or purchase of goods, removing state authority on such taxes.",
  },
  {
    number: "7th Amendment",
    year: "1956",
    summary:
      "Implemented the States Reorganisation Act — reorganized states on linguistic lines. Abolished distinction between Part A, B, C, D states. Created the present framework of States and Union Territories.",
    important: true,
  },
  {
    number: "8th Amendment",
    year: "1960",
    summary:
      "Extended the reservation of seats for Scheduled Castes and Scheduled Tribes, and representation of Anglo-Indians in Parliament and state legislatures for another 10 years (until 1970).",
  },
  {
    number: "9th Amendment",
    year: "1960",
    summary:
      "Transferred certain territories to Pakistan (Berubari Union area in West Bengal) as part of the 1958 Nehru–Noon Pact with Pakistan.",
  },
  {
    number: "10th Amendment",
    year: "1961",
    summary:
      "Incorporated Dadra and Nagar Haveli (freed from Portuguese rule in 1961) into India as a Union Territory.",
  },
  {
    number: "11th Amendment",
    year: "1961",
    summary:
      "Changed the procedure for election of the Vice-President — created an electoral college consisting of both Houses of Parliament in a joint sitting. Also clarified that election cannot be questioned for unfilled vacancies in the electoral college.",
  },
  {
    number: "12th Amendment",
    year: "1962",
    summary:
      "Incorporated Goa, Daman and Diu (freed from Portuguese rule) into India as a Union Territory.",
  },
  {
    number: "13th Amendment",
    year: "1962",
    summary:
      "Added Article 371A granting special status to Nagaland, protecting its customary law, religious practices, and land ownership from Parliamentary interference without state assembly approval.",
  },
  {
    number: "14th Amendment",
    year: "1962",
    summary:
      "Incorporated Pondicherry (Puducherry) into India as a Union Territory. Also allowed Parliament to create legislatures and councils of ministers for UTs of Himachal Pradesh, Manipur, Tripura, Goa, Daman & Diu, and Puducherry.",
  },
  {
    number: "15th Amendment",
    year: "1963",
    summary:
      "Raised the retirement age of High Court judges from 60 to 62 years. Also allowed appointment of retired HC judges as acting HC judges, and gave original jurisdiction to HCs in service matters.",
  },
  {
    number: "16th Amendment",
    year: "1963",
    summary:
      "Added restrictions on fundamental rights of speech, assembly, and movement in the interest of the sovereignty and integrity of India. Required oath of allegiance to the Constitution to include commitment to uphold India's integrity.",
  },
  {
    number: "17th Amendment",
    year: "1964",
    summary:
      "Added the definition of 'estate' and 'rights in land' to Article 31A to protect land reform laws. Also added 44 more state laws to the Ninth Schedule.",
  },
  {
    number: "18th Amendment",
    year: "1966",
    summary:
      "Clarified that the power to form a new state under Article 3 includes the power to form a new state by uniting a part of one state with a part of another state.",
  },
  {
    number: "19th Amendment",
    year: "1966",
    summary:
      "Abolished the Election Tribunals (which previously decided election disputes) and transferred election petitions to High Courts.",
  },
  {
    number: "20th Amendment",
    year: "1966",
    summary:
      "Validated the appointment of certain District Judges in Uttar Pradesh made outside the proper procedure, retroactively.",
  },
  {
    number: "21st Amendment",
    year: "1967",
    summary:
      "Added Sindhi to the Eighth Schedule of recognized languages — the first addition to the original 14 languages.",
  },
  {
    number: "22nd Amendment",
    year: "1969",
    summary:
      "Added Article 244A to allow creation of an Autonomous State within Assam (for tribal areas in the Sixth Schedule) with its own legislature and council of ministers.",
  },
  {
    number: "23rd Amendment",
    year: "1969",
    summary:
      "Extended reservation of seats for Scheduled Castes and Scheduled Tribes in Parliament and state legislatures for another 10 years (until 1980). Also extended Anglo-Indian representation.",
  },
  {
    number: "24th Amendment",
    year: "1971",
    summary:
      "Affirmed Parliament's power to amend any provision of the Constitution, including Fundamental Rights. Made Presidential assent to Constitutional Amendment Bills mandatory.",
    important: true,
  },
  {
    number: "25th Amendment",
    year: "1971",
    summary:
      "Curtailed the right to property — allowed the State to acquire property for public purposes with 'amount' (not 'compensation') as determined by law. Barred courts from questioning this amount.",
    important: true,
  },
  {
    number: "26th Amendment",
    year: "1971",
    summary:
      "Abolished privy purses and special privileges of former rulers of Indian princely states. Terminated official recognition of Rulers of Indian States.",
  },
  {
    number: "27th Amendment",
    year: "1971",
    summary:
      "Reorganized northeastern states — created Meghalaya as an associate state within Assam. Also provided for creation of the states of Mizoram and Arunachal Pradesh (then NEFA) in the future.",
  },
  {
    number: "28th Amendment",
    year: "1972",
    summary:
      "Abolished the special privileges of the Indian Civil Service (ICS) officers — the British-era all-India service. ICS officers were merged into the IAS with equivalent terms.",
  },
  {
    number: "29th Amendment",
    year: "1972",
    summary:
      "Added two Kerala land reform laws (the Kerala Land Reforms (Amendment) Acts 1969 and 1971) to the Ninth Schedule to protect them from judicial review.",
  },
  {
    number: "30th Amendment",
    year: "1972",
    summary:
      "Replaced the requirement that civil cases must involve Rs. 20,000 or more to appeal to the Supreme Court, with a provision requiring a High Court certificate that the case is fit for SC appeal.",
  },
  {
    number: "31st Amendment",
    year: "1973",
    summary:
      "Increased Lok Sabha seats from 525 to 545. Also fixed representation principle — constituencies to be readjusted after census based on total population.",
  },
  {
    number: "32nd Amendment",
    year: "1973",
    summary:
      "Added special provisions for Andhra Pradesh (Article 371D) to ensure equitable opportunities for people from different regions of the state in education and public employment.",
  },
  {
    number: "33rd Amendment",
    year: "1974",
    summary:
      "Amended provisions relating to vacation of seats in Parliament and state legislatures — resignations must be voluntary and genuine to be accepted by the Speaker/Chairman.",
  },
  {
    number: "34th Amendment",
    year: "1974",
    summary:
      "Added more state land reform laws to the Ninth Schedule to protect them from judicial challenge under Fundamental Rights.",
  },
  {
    number: "35th Amendment",
    year: "1974",
    summary:
      "Made Sikkim an Associate State of India — created a new category by adding the 10th Schedule and Article 2A (later repealed when Sikkim became a full state).",
  },
  {
    number: "36th Amendment",
    year: "1975",
    summary:
      "Made Sikkim the 22nd full-fledged State of India after a referendum where Sikkim's people voted to join India. Repealed Article 2A (Associate State category).",
  },
  {
    number: "37th Amendment",
    year: "1975",
    summary:
      "Made Arunachal Pradesh (formerly NEFA) a full Union Territory with a legislature and council of ministers.",
  },
  {
    number: "38th Amendment",
    year: "1975",
    summary:
      "Made Presidential and Gubernatorial proclamations of Emergency and Ordinances non-justiciable — courts could not question their satisfaction. (Later reversed by the 44th Amendment.)",
  },
  {
    number: "39th Amendment",
    year: "1975",
    summary:
      "Placed disputes regarding elections of the President, Vice-President, Prime Minister, and Speaker outside the jurisdiction of all courts. (Later reversed by the 44th Amendment.) Was challenged in the Indira Gandhi election case.",
  },
  {
    number: "40th Amendment",
    year: "1976",
    summary:
      "Added more Acts to the Ninth Schedule and clarified Parliament's power to pass laws related to territorial waters and exclusive economic zones as part of India's territory.",
  },
  {
    number: "41st Amendment",
    year: "1976",
    summary:
      "Raised the retirement age of State Public Service Commission members from 60 to 62 years.",
  },
  {
    number: "42nd Amendment",
    year: "1976",
    summary:
      "The most wide-ranging amendment — known as the 'Mini Constitution'. Added 'Socialist', 'Secular', 'Integrity' to Preamble. Added Fundamental Duties (Part IVA, Article 51A). Moved Education, Forest, and Wild Animals from State List to Concurrent List. Reduced power of courts to review constitutional amendments. Made Directive Principles immune from fundamental rights. Extended Emergency provisions and Parliament's term.",
    important: true,
  },
  {
    number: "43rd Amendment",
    year: "1977",
    summary:
      "Reversed many 42nd Amendment changes — restored the Supreme Court's power to review constitutional amendments, restored jurisdiction of courts, and removed Parliament's power to legislate for states to prevent 'subversive activities'.",
  },
  {
    number: "44th Amendment",
    year: "1978",
    summary:
      "Major corrective amendment after Emergency. Removed the Right to Property from Fundamental Rights (Article 19(1)(f) and 31) and made it a constitutional right (Article 300A). Restored judicial review of emergencies. Made Article 20 and 21 non-suspendable during Emergency. Restored Lok Sabha term to 5 years.",
    important: true,
  },
  {
    number: "45th Amendment",
    year: "1980",
    summary:
      "Extended reservation of seats for SC/ST and representation of Anglo-Indians in Parliament and state assemblies for another 10 years (until 1990).",
  },
  {
    number: "46th Amendment",
    year: "1982",
    summary:
      "Amended tax provisions in the Constitution — clarified the scope of 'tax on sale or purchase of goods' to include 'works contracts' to prevent tax avoidance.",
  },
  {
    number: "47th Amendment",
    year: "1984",
    summary:
      "Added more land reform laws (relating to Kerala, Karnataka, Maharashtra, and Rajasthan) to the Ninth Schedule.",
  },
  {
    number: "48th Amendment",
    year: "1984",
    summary:
      "Changed the provisions relating to the continuation of President's Rule in Punjab — allowing it to continue beyond one year without fresh parliamentary approval given the extraordinary situation.",
  },
  {
    number: "49th Amendment",
    year: "1984",
    summary:
      "Extended the Sixth Schedule provisions to Tripura — brought tribal areas of Tripura under the Sixth Schedule's autonomous district council system.",
  },
  {
    number: "50th Amendment",
    year: "1984",
    summary:
      "Amended Article 33 to extend Parliament's power to restrict fundamental rights to members of intelligence organizations and communication systems, in addition to armed forces.",
  },
  {
    number: "51st Amendment",
    year: "1984",
    summary:
      "Provided reservation of seats for Scheduled Tribes in the Lok Sabha and state assemblies for Meghalaya, Nagaland, Mizoram, and Arunachal Pradesh — despite these being tribal-majority states.",
  },
  {
    number: "52nd Amendment",
    year: "1985",
    summary:
      "Introduced the Anti-Defection Law — added the Tenth Schedule. Disqualifies MPs and MLAs who defect from their party or vote against party whip without permission.",
    important: true,
  },
  {
    number: "53rd Amendment",
    year: "1986",
    summary:
      "Added Article 371G — gave Mizoram special provisions similar to Nagaland's Article 371A, protecting Mizo customary law and land rights from Parliamentary interference. Part of the Mizoram Peace Accord.",
  },
  {
    number: "54th Amendment",
    year: "1986",
    summary:
      "Increased salaries of Supreme Court and High Court judges — Chief Justice of India from Rs. 5,000 to Rs. 10,000 per month; other SC judges to Rs. 9,000; HC Chief Justice to Rs. 9,000; HC judges to Rs. 8,000.",
  },
  {
    number: "55th Amendment",
    year: "1986",
    summary:
      "Added Article 371H — granted Arunachal Pradesh special provisions, giving the Governor special responsibility for law and order with individual judgment powers (reflecting its sensitive border location with China).",
  },
  {
    number: "56th Amendment",
    year: "1987",
    summary:
      "Made Goa the 25th full State of India (separated from Daman and Diu). Added Article 371I requiring Goa's assembly to have at least 30 members.",
  },
  {
    number: "57th Amendment",
    year: "1987",
    summary:
      "Provided for reservation of seats for Scheduled Tribes in Lok Sabha from Mizoram, Meghalaya, Nagaland, and Arunachal Pradesh, notwithstanding their small population.",
  },
  {
    number: "58th Amendment",
    year: "1987",
    summary:
      "Added Article 394A — authorized the President to publish an authoritative text of the Constitution in the Hindi language.",
  },
  {
    number: "59th Amendment",
    year: "1988",
    summary:
      "Amended Emergency provisions for Punjab — allowed imposition of Emergency in Punjab for specific situations, with possible internal disturbance as grounds (in addition to war and external aggression).",
  },
  {
    number: "60th Amendment",
    year: "1988",
    summary:
      "Increased the ceiling on Profession Tax that states can levy from Rs. 250 per annum to Rs. 2,500 per annum.",
  },
  {
    number: "61st Amendment",
    year: "1989",
    summary:
      "Reduced the voting age from 21 to 18 years — making millions more young Indians eligible to vote in elections to Parliament and state assemblies.",
    important: true,
  },
  {
    number: "62nd Amendment",
    year: "1989",
    summary:
      "Extended reservation of seats for SC/ST and representation of Anglo-Indians in Parliament and state assemblies for another 10 years (until 2000).",
  },
  {
    number: "63rd Amendment",
    year: "1989",
    summary:
      "Reversed the 59th Amendment — removed the special Emergency provisions for Punjab that had allowed declaration of Emergency on grounds of internal disturbance.",
  },
  {
    number: "64th Amendment",
    year: "1990",
    summary:
      "Extended the period of President's Rule in Punjab by 6 months — from 2 years to 2.5 years, due to continuing militancy situation.",
  },
  {
    number: "65th Amendment",
    year: "1990",
    summary:
      "Changed the composition of the National Commission for Scheduled Castes and Scheduled Tribes — made it a high-powered commission with a Chairman, Vice-Chairman, and 5 other members.",
  },
  {
    number: "66th Amendment",
    year: "1990",
    summary:
      "Added 55 more state land reform laws to the Ninth Schedule to protect them from judicial challenge.",
  },
  {
    number: "67th Amendment",
    year: "1990",
    summary:
      "Extended President's Rule in Punjab for another 6 months (total of 3 years).",
  },
  {
    number: "68th Amendment",
    year: "1991",
    summary:
      "Extended President's Rule in Punjab for another year (total of 4 years) due to continuing militancy.",
  },
  {
    number: "69th Amendment",
    year: "1991",
    summary:
      "Added Articles 239AA and 239AB — gave Delhi (NCT) a special status: a legislature, council of ministers, and a High Court, while retaining Union Territory status with the LG as the Centre's representative.",
  },
  {
    number: "70th Amendment",
    year: "1992",
    summary:
      "Included elected members of Union Territories with legislatures (Delhi and Puducherry) in the Presidential Electoral College.",
  },
  {
    number: "71st Amendment",
    year: "1992",
    summary:
      "Added Konkani, Manipuri (Meitei), and Nepali to the Eighth Schedule — increasing recognized languages from 15 to 18.",
  },
  {
    number: "72nd Amendment",
    year: "1992",
    summary:
      "Provided for temporary adjustment of seats reserved for Scheduled Tribes in Tripura's state assembly, pending fresh delimitation after reorganization of tribal areas.",
  },
  {
    number: "73rd Amendment",
    year: "1992",
    summary:
      "Added Part IX and the Eleventh Schedule — gave constitutional status to Panchayati Raj. Mandatory elections every 5 years, reservations for women (1/3rd) and SC/ST, State Election Commissions, and State Finance Commissions.",
    important: true,
  },
  {
    number: "74th Amendment",
    year: "1992",
    summary:
      "Added Part IXA and the Twelfth Schedule — gave constitutional status to Urban Local Bodies (municipalities). Created categories of Municipal Corporations, Municipal Councils, and Nagar Panchayats. Mandatory elections, reservations, and Metropolitan Planning Committees.",
    important: true,
  },
  {
    number: "75th Amendment",
    year: "1994",
    summary:
      "Amended Article 323B — enabled states to set up rent control tribunals and restricted the jurisdiction of ordinary civil courts in rent-related matters.",
  },
  {
    number: "76th Amendment",
    year: "1994",
    summary:
      "Added Tamil Nadu's reservation law (69% reservation for OBCs, SC, ST) to the Ninth Schedule, shielding it from the Supreme Court's Mandal judgment 50% cap.",
  },
  {
    number: "77th Amendment",
    year: "1995",
    summary:
      "Added Article 16(4A) — allowed states to provide reservation in promotions for SCs and STs within the government, overruling the Supreme Court's Indra Sawhney judgment which had restricted reservation only to initial appointments.",
  },
  {
    number: "78th Amendment",
    year: "1995",
    summary:
      "Added more land reform laws relating to multiple states (Bihar, Karnataka, MP, etc.) to the Ninth Schedule to protect them from judicial review.",
  },
  {
    number: "79th Amendment",
    year: "1999",
    summary:
      "Extended reservation of seats for Scheduled Castes and Scheduled Tribes in Lok Sabha and state assemblies, and Anglo-Indian representation, for another 10 years (until 2010).",
  },
  {
    number: "80th Amendment",
    year: "2000",
    summary:
      "Implemented the 10th Finance Commission's recommendation — changed the method of sharing Central taxes with states. States now get 29% of the gross proceeds of all central taxes as a single shareable pool (instead of tax-by-tax sharing).",
  },
  {
    number: "81st Amendment",
    year: "2000",
    summary:
      "Added Article 16(4B) — allowed unfilled SC/ST reserved vacancies to be carried forward to subsequent years, overruling the 50% ceiling on reservations in a single year.",
  },
  {
    number: "82nd Amendment",
    year: "2000",
    summary:
      "Added a provision to Article 335 allowing states to lower qualifying marks and standards in examinations for SC/ST candidates in matters of promotions.",
  },
  {
    number: "83rd Amendment",
    year: "2000",
    summary:
      "Exempted Arunachal Pradesh from the requirement to reserve seats for Scheduled Castes in Panchayat elections (since there are no scheduled castes there).",
  },
  {
    number: "84th Amendment",
    year: "2001",
    summary:
      "Extended the freeze on delimitation of Lok Sabha and state assembly constituencies (based on 1971 census) until after the first census after 2026. Allowed renaming of constituencies based on 1991 census.",
  },
  {
    number: "85th Amendment",
    year: "2001",
    summary:
      "Amended Article 16(4A) to provide 'consequential seniority' to SC/ST government employees promoted through reservation — meaning reservations in promotion will count for subsequent seniority.",
  },
  {
    number: "86th Amendment",
    year: "2002",
    summary:
      "Added Article 21A making free and compulsory education a Fundamental Right for children aged 6 to 14. Also made it a Fundamental Duty for parents to provide education to their children. Led to the Right to Education Act 2009.",
    important: true,
  },
  {
    number: "87th Amendment",
    year: "2003",
    summary:
      "Changed the basis for delimitation of parliamentary and state assembly constituencies from 1991 census to 2001 census (while keeping the freeze on total seats until after 2026).",
  },
  {
    number: "88th Amendment",
    year: "2003",
    summary:
      "Added Article 268A — allowed Parliament to levy service tax and share its proceeds with states. (Later subsumed under the 101st Amendment/GST in 2016.)",
  },
  {
    number: "89th Amendment",
    year: "2003",
    summary:
      "Split the National Commission for Scheduled Castes and Scheduled Tribes into two separate bodies — National Commission for Scheduled Castes (Article 338) and National Commission for Scheduled Tribes (Article 338A).",
  },
  {
    number: "90th Amendment",
    year: "2003",
    summary:
      "Provided reservation for Scheduled Tribes and non-tribal communities from the Bodoland area in the Assam Legislative Assembly.",
  },
  {
    number: "91st Amendment",
    year: "2003",
    summary:
      "Limited the size of the Council of Ministers at Centre and in states to 15% of total members of Lok Sabha/state assembly (minimum 12). Made ministerial positions invalid for disqualified MPs/MLAs under the anti-defection law.",
    important: true,
  },
  {
    number: "92nd Amendment",
    year: "2003",
    summary:
      "Added four languages to the Eighth Schedule — Bodo, Dogri, Maithili, and Santhali — increasing recognized languages from 18 to 22.",
  },
  {
    number: "93rd Amendment",
    year: "2005",
    summary:
      "Added Article 15(5) — allowed states to make special provisions for socially and educationally backward classes, SC/ST in private educational institutions (including unaided ones), enabling OBC reservations in private colleges.",
  },
  {
    number: "94th Amendment",
    year: "2006",
    summary:
      "Extended the requirement to have a Minister for Tribal Welfare to Chhattisgarh and Jharkhand — states with large tribal populations carved out from MP and Bihar.",
  },
  {
    number: "95th Amendment",
    year: "2009",
    summary:
      "Extended reservation of seats for SC/ST in Lok Sabha and state assemblies, and Anglo-Indian nominated representation, for another 10 years (until 2020).",
  },
  {
    number: "96th Amendment",
    year: "2011",
    summary:
      "Substituted the term 'Oriya' with 'Odia' in the Eighth Schedule and renamed the state of 'Orissa' to 'Odisha' — reflecting the proper pronunciation of the Odia language.",
  },
  {
    number: "97th Amendment",
    year: "2011",
    summary:
      "Added Part IXB (Articles 243ZH to 243ZT) to give constitutional status to Co-operative Societies. Made the right to form cooperatives a Fundamental Right (added to Article 19(1)(c)). Provided for democratic elections and governance of cooperatives.",
    important: true,
  },
  {
    number: "98th Amendment",
    year: "2013",
    summary:
      "Added Article 371J — special provisions for Hyderabad-Karnataka region within Karnataka, ensuring equitable distribution of government jobs and educational opportunities for the historically disadvantaged region.",
  },
  {
    number: "99th Amendment",
    year: "2014",
    summary:
      "Established the National Judicial Appointments Commission (NJAC) to replace the collegium system for appointment of SC and HC judges. Subsequently struck down by the Supreme Court in 2015 as violating the basic structure (independence of judiciary).",
  },
  {
    number: "100th Amendment",
    year: "2015",
    summary:
      "Gave constitutional validity to the India-Bangladesh Land Boundary Agreement — transferred certain enclaves to Bangladesh and received Bangladeshi enclaves in return, implementing the historic 1974 Indira-Mujib Pact.",
  },
  {
    number: "101st Amendment",
    year: "2016",
    summary:
      "Introduced the Goods and Services Tax (GST) — the biggest tax reform since Independence. Created the GST Council, abolished multiple central and state taxes, unified India into a single market under a dual GST structure (CGST + SGST/IGST).",
    important: true,
  },
  {
    number: "102nd Amendment",
    year: "2018",
    summary:
      "Gave constitutional status to the National Commission for Backward Classes (NCBC) through new Article 338B. Also added Article 342A allowing the President (in consultation with Governor) to specify OBC communities for central purposes.",
  },
  {
    number: "103rd Amendment",
    year: "2019",
    summary:
      "Added 10% reservation for Economically Weaker Sections (EWS) among the general (unreserved) category in government jobs and educational institutions, through amendments to Articles 15 and 16. Upheld by the Supreme Court in 2022.",
    important: true,
  },
  {
    number: "104th Amendment",
    year: "2020",
    summary:
      "Extended reservation of seats for SC/ST in Lok Sabha and state assemblies for another 10 years (until 2030). Simultaneously abolished the nomination of Anglo-Indian members to Parliament and state assemblies (ended a 70-year-old provision).",
  },
  {
    number: "105th Amendment",
    year: "2021",
    summary:
      "Restored states' power to identify and maintain their own lists of Other Backward Classes (OBCs), overruling the Supreme Court's Maratha reservation judgment which had held that only the Centre could identify OBCs under Article 342A.",
  },
  {
    number: "106th Amendment",
    year: "2023",
    summary:
      "Nari Shakti Vandan Adhiniyam — Reserved 33% of seats in the Lok Sabha and all state legislative assemblies for women. Reservation also applies within SC/ST reserved seats. Comes into effect after the next census and delimitation exercise.",
    important: true,
  },
];
