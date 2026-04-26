import Link from "next/link";
import { Nav } from "@/components/Nav";
import { mockLearners } from "@/lib/mockData";

export default function DashboardPage() {
  const avg = Math.round(mockLearners.reduce((s, l) => s + l.analytics.totalScore, 0) / mockLearners.length);
  const complete = mockLearners.filter(l => l.status === "Complete").length;

  return (
    <>
      <Nav />
      <main>
        <h1>Internal Dashboard</h1>
        <p className="muted">Instructor/admin-only MVP dashboard using mock data.</p>

        <section className="grid grid-3">
          <div className="card"><h3>Total Learners</h3><p style={{ fontSize: 32 }}>{mockLearners.length}</p></div>
          <div className="card"><h3>Completed</h3><p style={{ fontSize: 32 }}>{complete}</p></div>
          <div className="card"><h3>Average Score</h3><p style={{ fontSize: 32 }}>{avg}</p></div>
        </section>

        <section className="card" style={{ marginTop: 24 }}>
          <h2>Learners</h2>
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Score</th><th>Track</th><th>FRI</th><th></th></tr></thead>
            <tbody>
              {mockLearners.map(l => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.name}</td>
                  <td>{l.analytics.totalScore}</td>
                  <td>{l.analytics.track}</td>
                  <td>{l.analytics.fractureRiskIndex}%</td>
                  <td><Link href={`/dashboard/learners/${l.id}`}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
