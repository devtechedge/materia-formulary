import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#13202e",
          color: "#f3f0e7",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 28, height: 28, background: "#b03d28" }} />
          <div style={{ fontSize: 30, letterSpacing: 8 }}>MATERIA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 980 }}>
            What you take, examined properly.
          </div>
          <div style={{ marginTop: 28, width: 150, height: 2, background: "#b03d28" }} />
        </div>
        <div style={{ display: "flex", gap: 34, fontSize: 22, color: "#a9b5c1" }}>
          <div>130 monographs</div>
          <div>30 deterministic rules</div>
          <div>A to D evidence grades</div>
        </div>
      </div>
    ),
    size,
  );
}
