import { Nav } from "@/components/Nav";
import { mockLearners } from "@/lib/mockData";

export default function LearnerProfile({ params }: { params: { id: string } }) {
  const learner = mockLearners.find(l => l.id === params.id);

  if (!learner) {
    return (
      <>
        <Nav />
        <main><h1>Learner not found</h1></main>
      </>
    );
  }

  const a = learner.analytics;

  return (
    <>
      <Nav />
      <main>
        <h1>{learner.name}</h1>
        <p className="muted">{learner.id}</p>

        <section className="grid grid-3">
          <div className="card"><h3>Score</h3><p style={{ fontSize: 32 }}>{a.totalScore}</p></div>
          <div className="card"><h3>Track</h3><p style={{ fontSize: 24 }}>{a.track}</p></div>
          <div className="card"><h3>Fracture Risk</h3><p style={{ fontSize: 32 }}>{a.fractureRiskIndex}%</p></div>
        </section>

        <section className="grid grid-2" style={{ marginTop: 24 }}>
          <div className="card">
            <h2>Subscale Percentages</h2>
            <pre>{JSON.stringify(a.subscalePercentages, null, 2)}</pre>
          </div>
          <div className="card">
            <h2>Internal Flags</h2>
            <ul>
              {a.externalDependencyLoad > 60 && <li>High external dependency load</li>}
              {a.fractureRiskIndex > 60 && <li>Elevated fracture risk</li>}
              {a.answerPaceReliability < 70 && <li>Low answer pace reliability</li>}
              {a.identityAttractorStrength < 50 && <li>Low identity attractor strength</li>}
            </ul>
          </div>
        </section>

        <section className="card" style={{ marginTop: 24 }}>
          <h2>Answer Records</h2>
          <table>
            <thead><tr><th>Question</th><th>Raw</th><th>Adjusted</th><th>Response Time</th><th>Changes</th></tr></thead>
            <tbody>
              {a.adjusted.map(row => (
                <tr key={row.questionId}>
                  <td>{row.questionId}</td>
                  <td>{row.rawAnswer}</td>
                  <td>{row.adjustedAnswer}</td>
                  <td>{row.responseTimeSeconds}s</td>
                  <td>{row.changeCount ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
