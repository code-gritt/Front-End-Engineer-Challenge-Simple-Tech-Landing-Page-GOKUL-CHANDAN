import React, { useRef, useState } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import "./About.css";

const data = [
  {
    question: "Lorem Ipsum is simply dummy text of ?",
    answer: `An AI workforce comprises software systems designed to understand language, learn from data, and autonomously perform tasks to meet objectives. For instance, this could involve agents that process natural language requests and carry out helpful actions.`,
  },
  {
    question: "What are some essential features of an AI workforce?",
    answer: `NLorem Ipsum is simply dummy text of g recommendations based on data analysis. `,
  },
  {
    question: " How to Build an AI Workforce with Tech Innovators AI?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. out to you within 24 hours.`,
  },
  {
    question: "Lorem Ipsum is simply dummy text of ?",
    answer: `Yes, Take a test drive of a Tech Innovators AI workforce tailored to your industry and see firsthand how it can transform your business. Feel free to connect us on connect@Tech Innovators.ai`,
  },
  {
    question: "Lorem Ipsum is simply dummy text of?",
    answer: `NaLorem Ipsum is simply dummy text of and resources for your organization. This allows your team to focus on more strategic and high-value activities, ultimately improving efficiency and productivity.`,
  },
  {
    question: "What does Tech Innovators AI cost?",
    answer: `Our priLorem Ipsum is simply dummy text of ach requirement is unique. You can connect with the Tech Innovators AI team for a personalized quote to understand the pricing structure. to connect you can schedule a demo here calendly.com/varun-saaragh/Tech Innovators-ai. `,
  },
];

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="Acc_wrapper">
      <button
        className={`${"question_container"} ${isOpen ? `${"active"}` : ""}`}
        onClick={onClick}
      >
        <p className="question_content">{question}</p>
        <RiArrowDropRightFill
          className={`${"arrow"} ${isOpen ? `${"arrow_active"}` : ""}`}
        />
      </button>

      <div
        ref={contentHeight}
        className="answer_container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer_content">{answer}</p>
      </div>
    </div>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="features showBox">
      <h1 className="feature_header">FAQs</h1>
      <div className="Acc_container">
        <div className="card">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
