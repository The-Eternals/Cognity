import { Fragment } from "react";
import { useState } from "react";
const Faq = () => {
  const faqData = [
    {
      question: 'What is a mental health consultant?',
      answer: 'Early childhood mental health consultants are professionals with mental health expertise who also have knowledge, and experience related to working with young children and their families.',
    },
    {
      question: 'What services do you offer as a mental health consultant?',
      answer: 'We implement well studied and validated questionaires that will help adolscents to recognize their need of mental heatlh consultations if required and help stramline the process of connecting professionals to parents of the kids.',
    },
    {
      question: 'How can I benefit from working with a mental health consultant?',
      answer: 'Counseling can help you manage your stress and anxiety. With this knowledge, we can make proactive and positive changes to improve our well-being. Mental health counselors can help people manage their stress and anxiety, both of which can have a tremendous impact on physical health.',
    },
    {
      question: 'What types of issues can a mental health consultant help with?',
      answer: 'A mental health counselor provides support to those experiencing mental or emotional distress. They may use a variety of therapeutic techniques to help a person manage anxiety, depression, and other mental health conditions.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-[5rem] justify-center items-center flex flex-col py-20">
      <p className="font-semibold">Faq</p>
      <h1 className="py-10 text-4xl font-semibold text-center">
        Navigating Mental Health Consultation Commonly Asked Questions
      </h1>
      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="flex flex-col mt-14">
            <div className="flex justify-between">
              <div>
                <p className="text-xl font-bold">{faq.question}</p>
                <p className={`text-sm mt-5 ${openIndex === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </p>
              </div>
              <div onClick={() => toggleAccordion(index)}>
                <i
                  className={`fa-solid ${
                    openIndex === index ? 'fa-angle-up' : 'fa-angle-down'
                  } cursor-pointer`}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
