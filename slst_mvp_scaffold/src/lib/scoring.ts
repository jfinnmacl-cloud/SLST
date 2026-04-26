export type Track = "Observed / Core" | "Observer / Intermediate" | "Observing / Advanced";

export type AnswerRecord = {
  questionId: number;
  rawAnswer: number;
  responseTimeSeconds?: number;
  changeCount?: number;
  skipped?: boolean;
};

export function adjustedAnswer(questionId: number, rawAnswer: number): number {
  if (questionId >= 11 && questionId <= 15) return 6 - rawAnswer;
  return rawAnswer;
}

export function assignTrack(totalScore: number): Track {
  if (totalScore <= 49) return "Observed / Core";
  if (totalScore <= 79) return "Observer / Intermediate";
  return "Observing / Advanced";
}

export function subscaleFromQuestion(questionId: number) {
  if (questionId <= 5) return "identityClarity";
  if (questionId <= 10) return "stressStability";
  if (questionId <= 15) return "externalIndependence";
  return "internalCoherence";
}

export function calculateScores(answers: AnswerRecord[]) {
  const adjusted = answers.map(a => ({
    ...a,
    adjustedAnswer: adjustedAnswer(a.questionId, a.rawAnswer)
  }));

  const totalScore = adjusted.reduce((sum, a) => sum + a.adjustedAnswer, 0);
  const track = assignTrack(totalScore);

  const subscales = {
    identityClarity: 0,
    stressStability: 0,
    externalIndependence: 0,
    internalCoherence: 0
  };

  for (const a of adjusted) {
    subscales[subscaleFromQuestion(a.questionId)] += a.adjustedAnswer;
  }

  const pct = (score: number) => Math.round(((score - 5) / 20) * 100);

  const subscalePercentages = {
    identityClarity: pct(subscales.identityClarity),
    stressStability: pct(subscales.stressStability),
    externalIndependence: pct(subscales.externalIndependence),
    internalCoherence: pct(subscales.internalCoherence)
  };

  const identityAttractorStrength = Math.round(
    (subscalePercentages.identityClarity +
      subscalePercentages.stressStability +
      subscalePercentages.internalCoherence) / 3
  );

  const externalDependencyLoad = 100 - subscalePercentages.externalIndependence;

  const averageResponseTime =
    answers.length === 0
      ? 0
      : answers.reduce((sum, a) => sum + (a.responseTimeSeconds ?? 0), 0) / answers.length;

  const hesitationPenalty = averageResponseTime > 45 ? 10 : 0;
  const changePenalty = answers.filter(a => (a.changeCount ?? 0) > 1).length > 5 ? 10 : 0;
  const incompletePenalty = answers.length < 20 ? 25 : 0;

  const fractureRiskIndex = Math.min(
    100,
    Math.round(
      ((100 - subscalePercentages.identityClarity) +
        (100 - subscalePercentages.stressStability) +
        externalDependencyLoad +
        (100 - subscalePercentages.internalCoherence)) / 4 +
        hesitationPenalty +
        incompletePenalty
    )
  );

  const answerPaceReliability = Math.max(
    0,
    100 - hesitationPenalty - changePenalty - incompletePenalty
  );

  return {
    adjusted,
    totalScore,
    track,
    subscales,
    subscalePercentages,
    identityAttractorStrength,
    externalDependencyLoad,
    fractureRiskIndex,
    answerPaceReliability
  };
}
