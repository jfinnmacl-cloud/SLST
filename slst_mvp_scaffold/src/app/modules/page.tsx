import { Nav } from "@/components/Nav";
import { modules } from "@/data/modules";

export default function ModulesPage() {
  return (
    <>
      <Nav />
      <main>
        <h1>SLST Modules</h1>
        <div className="grid">
          {modules.map(module => (
            <div className="card" key={module.id}>
              <span className="badge">Module {module.id}</span>
              <h2>{module.title}</h2>
              <p className="muted">{module.summary}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
