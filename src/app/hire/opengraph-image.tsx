import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Hire Ryan Wilson - Automation Engineer, AI Integration, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = [
  "n8n",
  "Next.js",
  "React",
  "Python",
  "PostgreSQL",
  "Docker",
  "Claude API",
  "Node.js",
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(145deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Accent glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Accent glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Status pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              border: "1px solid rgba(0,212,255,0.25)",
              background: "rgba(0,212,255,0.06)",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00d4ff",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 14,
                color: "#00d4ff",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
              }}
            >
              Available for Hire
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#f0f0f0",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Ryan Wilson
          </h1>

          {/* Headline */}
          <p
            style={{
              fontSize: 26,
              color: "#00d4ff",
              margin: "12px 0 0 0",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            I Ship Production Systems. Not Prototypes.
          </p>

          {/* Role line */}
          <p
            style={{
              fontSize: 18,
              color: "rgba(240,240,240,0.5)",
              margin: "16px 0 0 0",
              fontWeight: 400,
            }}
          >
            Automation Engineer | AI Integration | Full-Stack Developer
          </p>

          {/* Skills row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              marginTop: 28,
              maxWidth: 800,
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  padding: "5px 14px",
                  borderRadius: 6,
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  fontSize: 14,
                  color: "rgba(240,240,240,0.7)",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Metrics line */}
          <p
            style={{
              fontSize: 15,
              color: "rgba(240,240,240,0.35)",
              margin: "24px 0 0 0",
              fontWeight: 400,
            }}
          >
            1,500+ jobs processed via automation | 9+ production dashboards | 50+
            workflows deployed
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
