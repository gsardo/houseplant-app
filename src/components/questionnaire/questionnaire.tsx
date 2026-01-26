'use client'

import { useState } from 'react'
import { Answers, Recommendation } from './types'
import {
  getInitialAnswers,
  updateAnswer,
  areAllAnswered,
} from './helpers'
import { getRecommendations } from './recommendations'

export function Questionnaire() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Answers>(getInitialAnswers)
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])

  const handleAnswer = (question: keyof Answers, value: string) => {
    setAnswers(prev => updateAnswer(prev, question, value))
  }

  const goNext = () => {
    setStep(prev => prev + 1)
  }

  const goBack = () => {
    setStep(prev => Math.max(1, prev - 1))
  }

  const finish = () => {
    const results = getRecommendations()
    setRecommendations(results)
    setStep(4)
  }

  type QuestionProps = {
    value: string | null
    onAnswer: (value: string) => void
  }
  
  const QuestionOne = ({ value, onAnswer }: QuestionProps) => {
    return (
      <div>
        <p>What is your experience level in caring for plants?</p>
        <select value={value ?? ''} onChange={e => onAnswer(e.target.value)}>
          <option value="" disabled>Please select one</option>
          <option value="beginner">Newbie</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Confident plant parent</option>
        </select>
      </div>
    )
  }

  const QuestionTwo = ({ value, onAnswer }: QuestionProps) => {
    return (
      <div>
        <p>How much natural light does your home get?</p>
        <select value={value ?? ''} onChange={e => onAnswer(e.target.value)}>
          <option value="" disabled>Please select one</option>
          <option value="low">Low light (far from windows)</option>
          <option value="medium">Medium / indirect light</option>
          <option value="bright">Bright light (direct sunlight for several hours)</option>
        </select>
      </div>
    )
  }

  const QuestionThree = ({ value, onAnswer }: QuestionProps) => {
    return (
      <div>
        <p>Do you have any furry friends in the home?</p>
        <select value={value ?? ''} onChange={e => onAnswer(e.target.value)}>
          <option value="" disabled>Please select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    )
  }

  return (
    <div>
      {step === 1 && (
        <QuestionOne
          value={answers.question1}
          onAnswer={value => handleAnswer('question1', value)}
        />
      )}

      {step === 2 && (
        <QuestionTwo
          value={answers.question2}
          onAnswer={value => handleAnswer('question2', value)}
        />
      )}

      {step === 3 && (
        <QuestionThree
          value={answers.question3}
          onAnswer={value => handleAnswer('question3', value)}
        />
      )}

      {step === 4 && (
       <ul>
       {recommendations.map(rec => (
         <li key={rec.id}>
            {rec.title}
            {rec.description}
            </li>
       ))}
     </ul>
      )}

      {/* Navigation */}
      <div>
        {step > 1 && step < 4 && (
          <button onClick={goBack}>Back</button>
        )}

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

        {step === 3 && answers.question3 && (
          <button onClick={finish}>
            Show recommendations
          </button>
        )}
      </div>
    </div>
  )
}
