"use client";

import { useState } from "react";
import { Answers, Recommendation } from "./types";
import { getInitialAnswers, updateAnswer, areAllAnswered } from "./helpers";
import { provideRecommendations } from "./recommendations";
import { QuestionOne, QuestionTwo, QuestionThree } from "./questions";

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

  return (
    <div>
      {step === 1 && (
        <QuestionOne
          value={answers.question1}
          onAnswer={(value) => handleAnswer("question1", value)}
        />
      )}

      {step === 2 && (
        <QuestionTwo
          value={answers.question2}
          onAnswer={(value) => handleAnswer("question2", value)}
        />
      )}

      {step === 3 && (
        <QuestionThree
          value={answers.question3}
          onAnswer={(value) => handleAnswer("question3", value)}
        />
      )}

      {step === 4 && (
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.id}>
              {rec.title}
              {rec.description}
            </li>
          ))}
        </ul>
      )}

      {/* Navigation */}
      <div>
        {step > 1 && step < 4 && <button onClick={goBack}>Back</button>}

        {step < 3 && (
          <button
            onClick={goNext}
            disabled={
              (step === 1 && !answers.question1) ||
              (step === 2 && !answers.question2)
            }
          >
            Next
          </button>
        )}

        {step === 3 && areAllAnswered(answers) && (
          <button onClick={finish}>Show recommendations</button>
        )}
      </div>
    </div>
  );
}
