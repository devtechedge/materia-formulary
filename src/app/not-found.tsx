import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>No such monograph</h1>
        <p className="lede">That entry is not in the formulary snapshot.</p>
        <p>
          <Link className="btn secondary" href="/browse">
            Return to the shelf
          </Link>
        </p>
      </div>
    </section>
  );
}
