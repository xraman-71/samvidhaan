export interface Article {
  id: string;
  number: string;
  title: string;
  category: "Fundamental Rights" | "Directive Principles" | "Fundamental Duties" | "Other";
  originalText: string;
  simplified: string;
  examples: string[];
  relatedArticles?: string[];
}

export const articles: Article[] = [
  {
    id: "article-14",
    number: "14",
    title: "Equality before law",
    category: "Fundamental Rights",
    originalText: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    simplified: "The government must treat everyone equally. The law applies to everyone in the same way, whether they are rich or poor, powerful or ordinary citizens.",
    examples: [
      "A politician and a common citizen face the same legal process if they commit the same crime.",
      "Government policies cannot arbitrarily favor one group over another without a valid logical reason."
    ],
    relatedArticles: ["article-15", "article-16"]
  },
  {
    id: "article-15",
    number: "15",
    title: "Prohibition of discrimination",
    category: "Fundamental Rights",
    originalText: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.",
    simplified: "The government cannot treat you differently just because of your religion, race, caste, gender, or where you were born.",
    examples: [
      "No one can be stopped from entering public parks, using public wells, or visiting public restaurants based on their caste.",
      "The government can, however, make special provisions for women, children, and socially backward classes to help them advance."
    ],
    relatedArticles: ["article-14", "article-17"]
  },
  {
    id: "article-21",
    number: "21",
    title: "Protection of life and personal liberty",
    category: "Fundamental Rights",
    originalText: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    simplified: "Everyone has the right to live and be free. The government cannot take away your life or freedom unless there is a fair and legal reason established by a proper law.",
    examples: [
      "The right to privacy is considered a part of the right to life and liberty.",
      "The right to live in a clean environment and access to clean water falls under this article."
    ],
    relatedArticles: ["article-20", "article-22"]
  },
  {
    id: "article-21a",
    number: "21A",
    title: "Right to education",
    category: "Fundamental Rights",
    originalText: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",
    simplified: "Every child between 6 and 14 years old has a fundamental right to get free education from the government.",
    examples: [
      "Government schools provide free education, uniforms, and mid-day meals to ensure children can study.",
      "Parents cannot be charged fees for elementary education in government schools."
    ],
    relatedArticles: ["article-21", "article-45"]
  },
  {
    id: "article-39a",
    number: "39A",
    title: "Equal justice and free legal aid",
    category: "Directive Principles",
    originalText: "The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.",
    simplified: "The government must ensure everyone has access to justice. If someone is too poor to afford a lawyer, the government should provide one for free.",
    examples: [
      "Lok Adalats are organized to provide free and quick dispute resolution.",
      "Legal Services Authorities provide free legal representation to the needy."
    ],
    relatedArticles: ["article-14"]
  },
  {
    id: "article-44",
    number: "44",
    title: "Uniform civil code for the citizens",
    category: "Directive Principles",
    originalText: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.",
    simplified: "The government should try to create a single set of personal laws (like marriage, divorce, inheritance) that apply equally to all citizens, regardless of their religion.",
    examples: [
      "Currently, different religions have their own personal laws. This article suggests moving towards one common law for everyone."
    ]
  },
  {
    id: "article-51a",
    number: "51A",
    title: "Fundamental duties",
    category: "Fundamental Duties",
    originalText: "It shall be the duty of every citizen of India— (a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem...",
    simplified: "Just as we have rights, we also have duties. These include respecting the Constitution, the flag, defending the country, protecting the environment, and treating all Indians as brothers and sisters.",
    examples: [
      "Standing up out of respect when the National Anthem is played.",
      "Not destroying public property like buses or monuments during protests.",
      "Taking steps to reduce pollution and protect wildlife."
    ]
  }
];
