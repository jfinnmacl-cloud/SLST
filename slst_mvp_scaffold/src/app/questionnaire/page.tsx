"use client";

import { useMemo, useState } from "react";
import { Nav } from "@/components/Nav";
import { questions } from "@/data/questions";
import { calculateScores, AnswerRecord } from "@/lib/scoring";

export default function QuestionnairePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [startedAt] = useState(Date.now());
  const [questionOpenedAt, setQuestionOpenedAt] = useState<Record<number, number>>(
    Object.fromEntries(questions.map(q => [q.id, Date.now()]))
  );
  const [changeCounts, setChangeCounts] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  function setAnswer(questionId: number, value: number) {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setChangeCounts(prev => ({ ...prev, [questionId]: (prev[questionId] ?? 0) + 1 }));
  }

  const answerRecords: AnswerRecord[] = useMemo(() => {
    return Object.entries(answers).map(([qid, raw]) => {
      const questionId = Number(qid);
      return {
        questionId,
        rawAnswer: raw,
        responseTimeSeconds: Math.round((Date.now() - (questionOpenedAt[questionId] ?? startedAt)) / 1000),
        changeCount: Math.max(0, (changeCounts[questionId] ?? 1) - 1),
        skipped: false
      };
    });
  }, [answers, questionOpenedAt, changeCounts, startedAt]);

  const scores = submitted ? calculateScores(answerRecords) : null;

  return (
    <>
      <Nav />
      <main>
        <h1>SLST Self-Integrity Questionnaire</h1>
        <p className="muted">Rate each statement from 1 Strongly Disagree to 5 Strongly Agree.</p>

        <div className="grid">
          {questions.map(q => (
            <div key={q.id} className="card">
              <strong>{q.id}. {q.text}</strong>
              {q.reverseScored && <span className="badge" style={{ marginLeft: 8 }}>Reverse scored</span>}
              <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                {[1,2,3,4,5].map(value => (
                  <label key={value}>
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      checked={answers[q.id] === value}
                      onChange={() => setAnswer(q.id, value)}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="button" style={{ marginTop: 24 }} onClick={() => setSubmitted(true)}>
          Score Diagnostic
        </button>

        {scores && (
          <section className="card" style={{ marginTop: 24 }}>
            <h2>Result</h2>
            <p><strong>Total Score:</strong> {scores.totalScore}/100</p>
            <p><strong>Track:</strong> {scores.track}</p>
            <p><strong>Identity Attractor Strength:</strong> {scores.identityAttractorStrength}%</p>
            <p><strong>Fracture Risk Index:</strong> {scores.fractureRiskIndex}%</p>
            <p><strong>Answer Pace Reliability:</strong> {scores.answerPaceReliability}%</p>
            <pre>{JSON.stringify(scores.subscalePercentages, null, 2)}</pre>
          </section>
        )}
      </main>
    </>
  );
}
