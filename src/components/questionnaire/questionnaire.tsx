"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Answers, Recommendation } from "./types";
import { getInitialAnswers, updateAnswer } from "./helpers";
import { provideRecommendations } from "./recommendations";
import { QuestionOne, QuestionTwo, QuestionThree } from "./questions";
import styles from "./questionnaire.module.css";

export function Questionnaire() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(getInitialAnswers);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleAnswer = (question: keyof Answers, value: string) => {
    setAnswers((prev) => updateAnswer(prev, question, value));
  };

  const goNext = () => {
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const finish = () => {
    const results = provideRecommendations(answers);
    setRecommendations(results);
    setStep(4);
  };

  const reset = () => {
    setAnswers(getInitialAnswers());
    setRecommendations([]);
    setStep(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <QuestionOne
          value={answers.question1}
          onAnswer={(value) => {
            handleAnswer("question1", value);
            goNext();
          }}
        />
      )}

      {step === 2 && (
        <>
          <button onClick={goBack} className={styles.backButton}><ChevronLeft size={16} />Back</button>
          <QuestionTwo
            value={answers.question2}
            onAnswer={(value) => {
              handleAnswer("question2", value);
              goNext();
            }}
          />
        </>
      )}

      {step === 3 && (
        <>
          <button onClick={goBack} className={styles.backButton}><ChevronLeft size={16} />Back</button>
          <QuestionThree
            value={answers.question3}
            onAnswer={(value) => {
              handleAnswer("question3", value);
              finish();
            }}
          />
        </>
      )}

      {step === 4 && (
        <ul className={styles.recommendations}>
          {recommendations.map((rec) => (
            <li key={rec.id} className={styles.recommendationItem}>
              <div className={styles.recommendationTitle}>{rec.title}</div>
              <div className={styles.recommendationDescription}>
                {rec.description}
              </div>
            </li>
          ))}
        </ul>
      )}

      {step === 4 && (
        <div className={styles.navigation}>
          <button onClick={reset} className={styles.resetButton}>Start again</button>
        </div>
      )}
    </div>
  );
}
