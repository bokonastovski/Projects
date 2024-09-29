import React, { useState } from "react";
import "../css/components/_FAQ.scss";
import faqArrow from "../picturesFolder/faq/faq_arrow.png";

const faqs = [
  {
    question: "what is larger.world's unlearning platform?",
    answer:
      "larger.world hosts worlds of unique and unseen content, around the topics of diversity, inclusion, equity, sustainability, and regeneration. we invite you on a journey of unlearning, through rainforests of content, office chaos, and more.",
  },
  {
    question:
      "how can i benefit from using larger.world's unlearning platform?",
    answer:
      "by engaging with larger.world's unlearning platform, you can expand your perspectives, develop a growth mindset, and enhance your decision-making ability. the platform offers tools, resources, and a supportive community to facilitate your unlearning journey.",
  },
  {
    question: "what sets larger.world's unlearning platform apart from others?",
    answer:
      "larger.world's unlearning platform stands out for its user-friendly interface, diverse range of content, personalized learning recommendations, and interactive features like workshops and peer-to-peer discussions. it focuses on creating a holistic unlearning experience.",
  },
  {
    question:
      "are there any success stories from users of larger.world's unlearning platform?",
    answer:
      "many users of larger.world's unlearning platform have reported significant personal and professional growth outcomes, such as increased creativity, improved problem-solving skills, enhanced adaptability, and a more open mindset towards change and innovation.",
  },
  {
    question: "how can i get started with larger.world's unlearning platform?",
    answer:
      "to begin your unlearning journey with larger.world's platform, create an account, explore the available resources and courses, participate in discussions and workshops, set goals for yourself, and commit to regular self-reflection and practice. embrace the process of unlearning with an open mind and a willingness to grow.",
  },
];

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`faq ${className}`}>
      <h2 className="faq__title">frequently asked questions</h2>
      <ul className="faq__list">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className={`faq__item ${index === activeIndex ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq__question">
              <span>
                {index + 1}. {faq.question}
              </span>
              <span className="faq__icon">
                <img
                  src={faqArrow}
                  alt="arrow"
                  className={`faq__arrow ${
                    index === activeIndex ? "faq__arrow--active" : ""
                  }`}
                />
              </span>
            </div>
            {index === activeIndex && (
              <p className="faq__answer">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
