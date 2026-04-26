import Link from "next/link";

export function Nav() {
  return (
    <div style={{ borderBottom: "1px solid #e7e7e7", background: "white" }}>
      <main style={{ paddingTop: 16, paddingBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ fontWeight: 800 }}>SLST</Link>
        <div style={{ display: "flex", gap: 16 }}>
          <Link href="/questionnaire">Questionnaire</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/modules">Modules</Link>
        </div>
      </main>
    </div>
  );
}
