import React, { useState } from "react";

const data = [
  {
    id: 0,
    question: "What is your pet name?",
    option: ["Tommy", "Ronny", "Sonny", "asd"],
    correct: "asd",
  },
  {
    id: 1,
    question: "What is your set name?",
    option: ["Tommy", "Ronny", "Sonny", "Dommy"],
    correct: "Dommy",
  },
  {
    id: 2,
    question: "What is your get name?",
    option: ["Tommy", "Ronny", "Sonny", "Dommy"],
    correct: "Sonny",
  },
  {
    id: 3,
    question: "What is your lut name?",
    option: ["Tommy", "Ronny", "Sonny", "Dommy"],
    correct: "Ronny",
  },
  {
    id: 4,
    question: "What is your fut name?",
    option: ["Tommy", "Ronny", "Sonny", "Dommy"],
    correct: "Tommy",
  },
];
const Quiz = ({ totalCount = 5 }) => {
  const [ques, setQues] = useState(0);

  const handleButtonClick = () => {
    setQues((prev) => prev + 1);
  };

  // when an argument has to get passed, we create callback

  return (
    <>
      <QuizQuestions ques={ques} />
      <button onClick={handleButtonClick}>Next</button>
    </>
  );
};

export default Quiz;

const QuizQuestions = ({ ques }) => {
  const [correctAns, setCorrectAns] = useState("");
  const handleClick = (data) => {
    setCorrectAns(data);
  };
  return (
    <>
      {data
        ?.filter((elm) => elm.id == ques)
        .map((item) => {
          return (
            <>
              <div>{item.question}</div>
              {item.option.map((abl) => {
                return (
                  <>
                    <input
                      type="radio"
                      value={correctAns}
                      name="options"
                      onClick={() => handleClick(abl)}
                    />
                    {abl};
                  </>
                );
              })}
            </>
          );
        })}
    </>
  );
};
