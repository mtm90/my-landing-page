import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <img className="quizPic" src="/assets/quiz.png" alt="quizPic" />
        <div className="side1">
          <div className="quiz">
            <h1>My Quiz!</h1>
            <p className="surveyText">
              Could you please take my quiz? It will help me enhance my skills in data collection and analysis.
            </p>
          </div>
          <p className="survey">
            <a href="https://mtm90.github.io/quiz/">Take the quiz</a>
          </p>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
