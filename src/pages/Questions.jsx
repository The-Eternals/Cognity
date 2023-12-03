import React from 'react';
import { Fragment } from 'react';
import NavBar from '../components/Navbar';

const FaqCard = ({ question, answer }) => {
  return (

    <div className="p-4 my-7 w-[30rem] overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 hover:h-auto">
    <div className="mb-2 font-semibold">{question}</div>
    <div className="text-gray-700">
      {answer}
    </div>
  </div>    
  );
};

const Questions = () => {
  const faqData = [
    {   question: "Why do I feel so overwhelmed all the time?",
        answer:" Feeling overwhelmed is a common experience for many people dealing with mental health challenges. It's essential to recognize these feelings and seek support. Talking to a mental health professional can provide valuable insights and coping strategies."
    },
    {

        question: "Will things ever get better?",
        
        answer:"Yes, things can get better. Recovery is a process, and with the right support, coping mechanisms, and treatment, many people see improvements in their mental health over time."
    },
    {

        question: "Why can't I just snap out of it and be happy?",
        
        answer: "Mental health challenges are not a choice, and it's not as simple as just 'snapping out of it.' It's important to understand that seeking professional help, therapy, and sometimes medication can be effective in managing symptoms."
    },
    {

        question: "What can I do when I feel isolated and alone?",
        
        answer: "Connecting with others is crucial. Reach out to friends, family, or support groups. Talking about your feelings with someone you trust or seeking professional help can make a significant difference."
    },
    {

        question: "Why do I have trouble concentrating and making decisions?",
        
        answer:"Difficulty concentrating is a common symptom of mental health challenges. It's not a reflection of your intelligence. Seeking help from a mental health professional can provide strategies to improve focus and decision-making."
    },
    {

        question: "Is it my fault that I feel this way?",
        
        answer: "No, mental health challenges are not your fault. They can be influenced by a combination of genetic, biological, environmental, and psychological factors. Blaming oneself can be counterproductive; seeking support is a more constructive approach."
    },
    {

        question: "How can I explain my mental health struggles to others?",
        
        answer: "Communicating about mental health can be challenging. Use clear and honest language, and emphasize that it's an ongoing process. Encourage open conversations and let others know how they can support you."
    },
    {

        question: "Will I ever be 'normal' again?",
        
        answer: "The concept of 'normal' varies for everyone, and there is no one-size-fits-all definition. Recovery doesn't mean returning to a previous state but finding ways to live a fulfilling life with support and coping mechanisms."
    },
    {
        question: "What can I do when I feel like I've lost interest in things I used to enjoy?",
        answer: "Loss of interest or pleasure in activities is a symptom of depression. Trying to engage in small, manageable activities and gradually reintroducing former interests can be part of the healing process. Seeking professional guidance is crucial.",
      },
      {
        question: "How do I deal with intrusive thoughts or negative self-talk?",
        answer: "Intrusive thoughts and negative self-talk can be challenging. Mindfulness techniques, cognitive-behavioral therapy (CBT), and talking to a therapist can help develop coping strategies to manage and redirect these thoughts.",
      },
      {
        question: "Why does my sleep pattern feel so disrupted?",
        answer: "Sleep disturbances are common with mental health challenges. Establishing a consistent sleep routine, creating a comfortable sleep environment, and discussing sleep patterns with a healthcare professional can contribute to better sleep.",
      },
      {
        question: "What should I do if I'm not comfortable sharing my struggles with others?",
        answer: "It's okay if you're not ready to share your struggles with others. Consider talking to a mental health professional who provides a confidential and non-judgmental space. You can decide when and how much you want to share.",
      },
      {
        question: "Why do I feel so irritable and easily frustrated?",
        answer: "Irritability can be a symptom of various mental health conditions. Identifying triggers, practicing mindfulness, and seeking professional support can help manage irritability and frustration.",
      },
      {
        question: "Is it normal to have good days followed by bad days?",
        answer: "Yes, fluctuating between good and bad days is normal. Mental health is a journey with ups and downs. Tracking patterns and discussing them with a mental health professional can provide insights into managing these fluctuations.",
      },
      {
        question: "How can I set realistic goals for myself without feeling overwhelmed?",
        answer: "Setting small, achievable goals is essential. Break larger tasks into smaller steps and celebrate each accomplishment. Collaborating with a therapist or counselor can help establish realistic and manageable goals.",
      },
        
  ];

  return (
    <Fragment>
        <NavBar />

        <div className="w-[60rem] px-[8rem] pt-16">
          <h3 className="text-3xl font-semibold">
            Self Help is the Best Help
          </h3>
          <p className="py-2 text-sm ">
            Find out simple but effective solutions to Day-to-Day issues here.{" "}
          </p>
          </div>


    <div className="flex flex-wrap justify-around p-4 ">
      {faqData.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>

    
  </Fragment>
  )
}

export default Questions;
