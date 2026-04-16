export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When did the Constitution of India come into effect?",
    options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1869"],
    correctAnswer: 2,
    explanation: "While adopted on 26 Nov 1949, the Constitution legally came into effect on 26 Jan 1950, celebrated as Republic Day."
  },
  {
    id: 2,
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Sardar Vallabhbhai Patel"],
    correctAnswer: 2,
    explanation: "Dr. B. R. Ambedkar was the Chairman of the Drafting Committee and played a pivotal role in framing the Constitution."
  },
  {
    id: 3,
    question: "Which of these is NOT a Fundamental Right?",
    options: ["Right to Equality", "Right to Property", "Right to Freedom", "Right against Exploitation"],
    correctAnswer: 1,
    explanation: "The Right to Property was originally a Fundamental Right but was removed by the 44th Amendment in 1978 and is now a legal right."
  },
  {
    id: 4,
    question: "Which Article guarantees Equality before the Law?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    correctAnswer: 0,
    explanation: "Article 14 states that the State shall not deny to any person equality before the law within the territory of India."
  },
  {
    id: 5,
    question: "Dr. Ambedkar called which article the 'heart and soul of the Constitution'?",
    options: ["Article 15", "Article 19", "Article 21", "Article 32"],
    correctAnswer: 3,
    explanation: "Article 32 provides the Right to Constitutional Remedies, allowing citizens to approach the Supreme Court to protect their fundamental rights."
  },
  {
    id: 6,
    question: "How many Fundamental Duties are currently listed in the Constitution?",
    options: ["8", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "There are 11 Fundamental Duties listed in Article 51A. Ten were added in 1976, and the 11th (duty to provide education to children) was added in 2002."
  },
  {
    id: 7,
    question: "What does the word 'Secular' in the Preamble mean?",
    options: ["The country has no religion of its own", "All religions are treated equally by the state", "Citizens have freedom to follow any religion", "All of the above"],
    correctAnswer: 3,
    explanation: "Secularism in India means the State maintains a principled distance from all religions and guarantees equal respect and freedom to practice any faith."
  },
  {
    id: 8,
    question: "Which part of the Constitution contains the Directive Principles of State Policy?",
    options: ["Part II", "Part III", "Part IV", "Part V"],
    correctAnswer: 2,
    explanation: "Part IV (Articles 36-51) contains the Directive Principles, which are guidelines for the government to create a just society."
  },
  {
    id: 9,
    question: "How long did it take to draft the Indian Constitution?",
    options: ["1 year, 11 months, 18 days", "2 years, 11 months, 18 days", "3 years, 2 months, 10 days", "Exactly 3 years"],
    correctAnswer: 1,
    explanation: "The Constituent Assembly took almost 3 years (2 years, 11 months, and 18 days) to complete its historic task of drafting the Constitution."
  },
  {
    id: 10,
    question: "The concept of 'Fundamental Rights' was borrowed from the constitution of which country?",
    options: ["United Kingdom", "Soviet Union", "USA", "Ireland"],
    correctAnswer: 2,
    explanation: "The Fundamental Rights in the Indian Constitution are inspired by the Bill of Rights in the US Constitution."
  }
];
