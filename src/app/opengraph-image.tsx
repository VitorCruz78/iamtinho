import { ImageResponse } from "next/og";

import { profile } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0c0d",
        color: "#f1f1ef",
        padding: 80,
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#9ba0a7" }}>
        {profile.brand}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 40,
            color: "#e79a5c",
          }}
        >
          {profile.role}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#9ba0a7" }}>
        TypeScript · React · Next.js · Node.js · PostgreSQL
      </div>
    </div>,
    size,
  );
}
