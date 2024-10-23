"use client";
import React, { useState } from "react";
import { Stepper, Step, StepLabel, SvgIcon, Dialog } from "@mui/material";
import { useRouter } from "next/navigation";
import Result1 from "./Result1";
import Result2 from "./Result2";
import Result3 from "./Result3";
import { StepIconProps } from "@mui/material"; // Import StepIconProps

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "Како е најдобро да се следат трошоците?",
    options: [
      "Не треба да се следат.",
      "Преку пишување во тетратка.",
      "Преку пишување во тетратка, ексел-табели или апликации за следење на буџетот.",
    ],
    answer:
      "Преко пишување во тетратка, ексел-табели или апликации за следење на буџетот.",
  },
  {
    question: "Што претставува буџетирање?",
    options: [
      "Трошење на пари.",
      "Планирање на приходите и расходите.",
      "Задолжување за кредити.",
    ],
    answer: "Планирање на приходите и расходите.",
  },
  {
    question: "Која е најдобра возраст за започнување на штедење?",
    options: [
      "Во било која возраст.",
      "Само по 30-тата година.",
      "Кога ќе се добие првата плата.",
    ],
    answer: "Во било која возраст.",
  },
  {
    question: "Зошто е важно да се има заштеди?",
    options: [
      "Затоа што е забавно.",
      "За да се подготвиме за непредвидени трошоци.",
      "Затоа што секој треба да има штедна книшка.",
    ],
    answer: "За да се подготвиме за непредвидени трошоци.",
  },
  {
    question: "Што претставува инвестирање?",
    options: [
      "Трошење на пари на забава.",
      "Вложување на пари со цел да се добие поврат.",
      "Купување на луксузни предмети.",
    ],
    answer: "Вложување на пари со цел да се добие поврат.",
  },
  {
    question: "Која е улогата на каматните стапки?",
    options: [
      "Каматните стапки немаат никаква улога.",
      "Каматните стапки ја зголемуваат вредноста на штедните влогови.",
      "Каматните стапки ја намалуваат вредноста на долговите.",
    ],
    answer: "Каматните стапки ја зголемуваат вредноста на штедните влогови.",
  },
  {
    question: "Што претставува задолжување?",
    options: [
      "Добивање на кредит од банка.",
      "Добивање пари без враќање.",
      "Подарување пари на пријатели.",
    ],
    answer: "Добивање на кредит од банка.",
  },
  {
    question: "Која е најдобрата стратегија за отплата на долг?",
    options: [
      "Да не се плаќа долгот.",
      "Да се плаќа минимумот секој месец.",
      "Да се отплатува редовно со план за исплата.",
    ],
    answer: "Да се отплатува редовно со план за исплата.",
  },
  {
    question: "Која е разликата помеѓу дебитна и кредитна картичка?",
    options: [
      "Дебитната картичка користи сопствени средства, кредитната позајмени средства.",
      "Нема разлика, и двете се исти.",
      "Дебитната картичка има повисока камата.",
    ],
    answer:
      "Дебитната картичка користи сопствени средства, кредитната позајмени средства.",
  },
  {
    question: "Зошто е важно да се има финансиски план?",
    options: [
      "За да се избегне финансиски стрес и да се постигнат долгорочни цели.",
      "За да се потрошат сите пари одеднаш.",
      "Финансискиот план е непотребен.",
    ],
    answer:
      "За да се избегне финансиски стрес и да се постигнат долгорочни цели.",
  },
];

const CustomStepIcon = (props: StepIconProps) => {
  const { completed, error } = props;

  return (
    <SvgIcon
      style={{
        color: error ? "red" : completed ? "green" : "grey",
        width: 24,
        height: 24,
      }}
    >
      <circle cx="12" cy="12" r="10" />
      {completed && <circle cx="12" cy="12" r="6" fill="white" />}
    </SvgIcon>
  );
};

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [isAnswered, setIsAnswered] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
    setIsAnswered((prev) => {
      const updated = [...prev];
      updated[currentStep] = true;
      return updated;
    });

    const isAnswerCorrect = answer === questions[currentStep].answer;
    setIsCorrect(isAnswerCorrect);
    setSelectedOption(answer);

    if (isAnswerCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
      setSelectedOption("");
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const renderResultComponent = () => {
    if (correctAnswersCount >= 0 && correctAnswersCount <= 6) {
      return <Result1 correctAnswers={correctAnswersCount} />;
    } else if (correctAnswersCount >= 7 && correctAnswersCount <= 9) {
      return <Result2 correctAnswers={correctAnswersCount} />;
    } else if (correctAnswersCount === 10) {
      return <Result3 correctAnswers={correctAnswersCount} />;
    }
    return null;
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz">
        {showResult ? (
          <div>{renderResultComponent()}</div>
        ) : (
          <>
            <div className="back-icon" onClick={handleOpenModal}>
              <img src="/icons/leftquizarrow.svg" alt="" />
              <p>Назад</p>
            </div>
            <Stepper activeStep={currentStep} alternativeLabel>
              {questions.map((_, index) => (
                <Step
                  key={index}
                  completed={
                    isAnswered[index] &&
                    answers[index] === questions[index].answer
                  }
                >
                  <StepLabel
                    StepIconComponent={CustomStepIcon}
                    error={
                      isAnswered[index] &&
                      answers[index] !== questions[index].answer
                    }
                    style={{ textAlign: "center" }}
                  />
                </Step>
              ))}
            </Stepper>

            <h1 className="quiz-h1">{questions[currentStep].question}</h1>
            {questions[currentStep].options.map((option, index) => (
              <button
                className={`quiz-btn ${
                  selectedOption === option && isAnswered[currentStep]
                    ? isCorrect
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
            {selectedOption && isCorrect !== null && (
              <div className={isCorrect ? "result-true" : "result-false"}>
                <div className="left">
                  <img
                    src={isCorrect ? "/icons/true.svg" : "/icons/wrong.svg"}
                    alt=""
                  />
                  <p>{isCorrect ? "Точно!" : "Нетоно!"}</p>
                </div>
                <button className="next-btn" onClick={handleNextQuestion}>
                  Следно
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Dialog open={open} onClose={handleCloseModal}>
        <div className="dialog-content">
          <h2>Дали сте сигурни дека сакате да се вратите?</h2>
          <p>
            Сите неисполнети одговори ќе бидат изгубени. Дали сакате да се
            вратите?
          </p>
          <button
            className="confirm-btn"
            onClick={() => {
              handleCloseModal();
              router.push("/"); // Navigate back to home or desired route
            }}
          >
            Да
          </button>
          <button className="cancel-btn" onClick={handleCloseModal}>
            Не
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default Quiz;
