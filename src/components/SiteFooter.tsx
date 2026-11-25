import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <p>
          MATERIA is an educational reference. It is not medical advice and does not diagnose,
          prescribe, or replace a qualified professional. Correlation is not causation.
        </p>
        <p>
          <Link href="/methodology">Evidence rubric and review method</Link>
          {" · "}
          <Link href="/browse">Source provenance</Link>
        </p>
      </div>
    </footer>
  );
}
