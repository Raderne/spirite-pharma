import React from "react";

const QuestionCard = (props) => {
  const { playfair, question, answer } = props;
  return (
    <div className="bg-[#435c7c] md:w-1/2 p-6 min-h-56 rounded-2xl">
      <h2
        className={`text-lg lg:text-2xl mb-4 ${playfair.className}`}
        style={{ fontWeight: "700" }}
      >
        {question}
      </h2>
      <p className={`text-base lg:text-lg ${playfair.className}`}>{answer}</p>
    </div>
  );
};

export default QuestionCard;
