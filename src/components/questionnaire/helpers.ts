import type { Answers } from './types'

export const getInitialAnswers = (): Answers => ({
    question1: null,
    question2: null,
    question3: null,
})

export const updateAnswer = (
    prev: Answers,
    question: keyof Answers,
    value: string
  ): Answers => ({
    ...prev,
    [question]: value,
})

export const areAllAnswered = (answers: Answers): boolean => Object.values(answers).every(Boolean)
