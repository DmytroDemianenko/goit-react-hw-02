import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const feedbackValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackData, setFeedbackData] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    return savedValues !== null ? JSON.parse(savedValues) : feedbackValues;
  });

  const handleUpdateFeedback = (feedbackValues) => {
    setFeedbackData((prev) => ({
      ...prev,
      [feedbackValues]: prev[feedbackValues] + 1,
    }));
  };
  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;
  const positivFeedback = Math.round((feedbackData.good / totalFeedback) * 100);
  const resetFeedbackData = () => {
    setFeedbackData(feedbackValues);
  };
  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(feedbackData));
  }, [feedbackData]);

  return (
    <>
      <div className="wrapper">
        <Description />
        <Options onUpdate={handleUpdateFeedback} reset={resetFeedbackData} />
        {totalFeedback ? (
          <Feedback
            totalFeedback={totalFeedback}
            positiveFeedback={positivFeedback}
            good={feedbackData.good}
            neutral={feedbackData.neutral}
            bad={feedbackData.bad}
            reset={feedbackData.reset}
          />
        ) : (
          <p>No Feedback yet</p>
        )}
      </div>
    </>
  );
}

export default App;
