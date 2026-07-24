import { ImageResponse } from "next/og"

import { personalInfo } from "@/lib/resume-data"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export const alt = `${personalInfo.name} — ${personalInfo.title}`

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #8b5cf655 0%, transparent 45%), radial-gradient(circle at 85% 85%, #7c3aed55 0%, transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            color: "#c4b5fd",
            letterSpacing: -0.5,
          }}
        >
          {personalInfo.title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: -2,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          Turning sales &amp; market data into clear, actionable insights
        </div>
      </div>
    ),
    { ...size }
  )
}
