const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>total: {totalFeedback}</li>
        <li>positiv: {positiveFeedback}%</li>
      </ul>
    </>
  );
};
export default Feedback;
