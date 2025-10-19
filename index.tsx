export default function Home() {
  return (
    <main className="container">
      <h1>Heallows</h1>
      <p className="small">Gifts that feel like presence — gentle care for body, mind, and soul.</p>

      <div className="card" style={{marginTop: 16}}>
        <h2 style={{marginTop: 0}}>Welcome</h2>
        <p>This is a minimal Next.js starter. No middleware or custom headers.</p>
        <ul>
          <li><a className="btn" href="/plain">Open plain page</a></li>
          <li><a className="btn" href="/api/health" style={{marginLeft: 8}}>Health JSON</a></li>
        </ul>
      </div>
    </main>
  );
}
