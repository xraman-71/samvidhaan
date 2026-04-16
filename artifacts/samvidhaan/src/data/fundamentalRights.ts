export interface FundamentalRight {
  id: string;
  title: string;
  articles: string;
  summary: string;
  description: string;
  examples: string[];
}

export const fundamentalRights: FundamentalRight[] = [
  {
    id: "right-to-equality",
    title: "Right to Equality",
    articles: "Articles 14-18",
    summary: "Guarantees equal rights for everyone, irrespective of religion, gender, caste, race or birth place.",
    description: "The Right to Equality is one of the chief guarantees of the Constitution. It ensures that all citizens are treated equally before the law and prevents discrimination on various grounds. It also abolishes untouchability and titles.",
    examples: [
      "A person cannot be denied a job based on their religion or caste.",
      "Public places like parks, restaurants, and wells are open to all.",
      "The practice of untouchability is a punishable offense."
    ]
  },
  {
    id: "right-to-freedom",
    title: "Right to Freedom",
    articles: "Articles 19-22",
    summary: "Ensures citizens can live freely, speak their minds, and form associations.",
    description: "This right guarantees six fundamental freedoms: freedom of speech and expression, assembly, association, movement, residence, and profession. It also provides protection in respect of conviction for offenses, protection of life and personal liberty, and protection against arrest and detention in certain cases.",
    examples: [
      "Citizens can freely express their opinions in newspapers or on social media.",
      "People can gather peacefully without weapons to protest.",
      "An individual has the right to move freely throughout the territory of India."
    ]
  },
  {
    id: "right-against-exploitation",
    title: "Right Against Exploitation",
    articles: "Articles 23-24",
    summary: "Protects citizens from human trafficking, forced labor, and child labor.",
    description: "This right prohibits all forms of forced labor, child labor, and human trafficking. It ensures that no person is forced to work against their will or without proper compensation, and specifically protects children under the age of 14 from hazardous employment.",
    examples: [
      "Employing children under 14 in factories or mines is strictly prohibited.",
      "Bonded labor (begar) where people are forced to work to pay off debt is illegal.",
      "Selling or buying human beings is a criminal offense."
    ]
  },
  {
    id: "right-to-freedom-of-religion",
    title: "Right to Freedom of Religion",
    articles: "Articles 25-28",
    summary: "Secures the secular nature of India, allowing anyone to practice any religion.",
    description: "India is a secular state. This right guarantees freedom of conscience and the right to freely profess, practice, and propagate any religion. It also gives every religious group the right to manage its own affairs in matters of religion.",
    examples: [
      "Individuals can choose to follow any religion or no religion at all.",
      "Religious communities can establish and maintain institutions for religious and charitable purposes.",
      "No person can be compelled to pay taxes for the promotion of any particular religion."
    ]
  },
  {
    id: "cultural-and-educational-rights",
    title: "Cultural and Educational Rights",
    articles: "Articles 29-30",
    summary: "Protects the rights of cultural, linguistic, and religious minorities.",
    description: "These rights protect the interests of minorities by allowing them to conserve their distinct language, script, or culture. It also grants them the right to establish and administer educational institutions of their choice.",
    examples: [
      "A linguistic minority group can run a school to teach their native language.",
      "The government cannot discriminate against any educational institution on the ground that it is under minority management.",
      "Citizens have the right to conserve their unique culture and heritage."
    ]
  },
  {
    id: "right-to-constitutional-remedies",
    title: "Right to Constitutional Remedies",
    articles: "Article 32",
    summary: "Allows citizens to move the Supreme Court to enforce their Fundamental Rights.",
    description: "Dr. B.R. Ambedkar called this Article the 'heart and soul of the Constitution.' It empowers citizens to directly approach the Supreme Court if any of their Fundamental Rights are violated. The court can issue writs (directions/orders) for the enforcement of these rights.",
    examples: [
      "If a person is illegally detained, they can file a Habeas Corpus petition.",
      "If a public official fails to perform their duty, the court can issue a writ of Mandamus.",
      "Citizens have a guaranteed mechanism to protect their rights from state overreach."
    ]
  }
];
