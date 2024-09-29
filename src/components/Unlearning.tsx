interface UnlearningProps {
  title: string;
  questions: string[];
}

const Unlearning = ({ title, questions }: UnlearningProps) => {
  const handleClick = () => {
    window.location.href = "/topics/zeroTolerance";
  };
  return (
    <div className="unlearningDiv">
      <div className="purple-border">
        <div className="bulb">
          <img src="/images/lightBulbIcon.png" alt="" />
          <h1>unlearning {title}</h1>
        </div>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick} className="contact-form__button">
        continue discovering
      </button>
    </div>
  );
};

export default Unlearning;
