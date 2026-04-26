import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="card" style={{ padding: 48 }}>
          <span className="badge">Standalone SLST MVP</span>
          <h1 style={{ fontSize: 52, lineHeight: 1.05, marginBottom: 16 }}>
            Self Localized Systems Theory
          </h1>
          <p style={{ fontSize: 20, maxWidth: 760 }} className="muted">
            Engineer identity by mapping the local systems that create it. SLST models the self as an adaptive system of habits, beliefs, emotions, environments, and feedback loops.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <Link className="button" href="/questionnaire">Start Diagnostic</Link>
            <Link className="button secondary" href="/dashboard">Internal Dashboard</Link>
          </div>
        </section>

        <section className="grid grid-3" style={{ marginTop: 24 }}>
          <div className="card"><h3>Map Nodes</h3><p className="muted">Identify beliefs, habits, emotional states, and environments.</p></div>
          <div className="card"><h3>Detect Loops</h3><p className="muted">Find reinforcing, balancing, and distorting identity loops.</p></div>
          <div className="card"><h3>Assign Tracks</h3><p className="muted">Place learners into Observed, Observer, or Observing tracks.</p></div>
        </section>
      </main>
    </>
  );
}
