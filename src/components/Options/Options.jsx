import s from "./Options.module.css";
const Options = ({ totalFeedback, onUpdate, reset }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.btn} onClick={() => onUpdate("good")}>
        good
      </button>
      <button className={s.btn} onClick={() => onUpdate("neutral")}>
        neutral
      </button>
      <button className={s.btn} onClick={() => onUpdate("bad")}>
        bad
      </button>

      {totalFeedback ? (
        <button className={s.btn} onClick={() => reset()}>
          reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Options;
