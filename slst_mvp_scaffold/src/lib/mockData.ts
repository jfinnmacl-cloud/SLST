import { calculateScores, AnswerRecord } from "./scoring";

function makeAnswers(values: number[], responseBase: number): AnswerRecord[] {
  return values.map((rawAnswer, index) => ({
    questionId: index + 1,
    rawAnswer,
    responseTimeSeconds: responseBase + ((index * 7) % 25),
    changeCount: index % 6 === 0 ? 1 : 0,
    skipped: false
  }));
}

const sampleA = makeAnswers([2,2,3,2,2,2,2,2,2,2,5,4,5,4,5,2,3,2,2,3], 18);
const sampleB = makeAnswers([3,4,3,3,4,3,3,4,3,3,3,3,2,3,2,4,4,3,4,4], 25);
const sampleC = makeAnswers([5,5,4,5,5,4,5,4,5,5,1,1,2,1,1,5,5,5,4,5], 21);

export const mockLearners = [
  { id: "L-1001", name: "Sample Learner A", answers: sampleA, status: "Complete" },
  { id: "L-1002", name: "Sample Learner B", answers: sampleB, status: "Complete" },
  { id: "L-1003", name: "Sample Learner C", answers: sampleC, status: "Complete" }
].map(learner => ({
  ...learner,
  analytics: calculateScores(learner.answers)
}));
