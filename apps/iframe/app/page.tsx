"use client";

import { useState, useEffect } from "react";
import { trackPageView, trackCustomEvent } from "@repo/analytics";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Track page view when component mounts
    trackPageView({
      pageName: "/",
      channel: "iframe-app",
      section: "home",
    });
  }, []);

  const handleCustomAction = () => {
    setClickCount((prev) => prev + 1);
    trackCustomEvent("Custom Iframe Action", {
      section: "demo-section",
      action: "custom-interaction",
      clickCount: (clickCount + 1).toString(),
      timestamp: new Date().toISOString(),
    });

    alert(`Custom action tracked! Total clicks: ${clickCount + 1}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#667eea",
            borderRadius: "50%",
            margin: "0 auto 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          📱
        </div>

        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "1rem",
          }}
        >
          Iframe Application
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          This is a micro-frontend application loaded inside an iframe. It uses
          the shared analytics package to track events and communicates with the
          parent window via postMessage for cross-origin analytics tracking.
        </p>

        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            color: "#374151",
          }}
        >
          <strong>Analytics Integration:</strong>
          <br />
          Events are prefixed with "iframe-app:" and sent to the parent window
          for unified tracking.
        </div>

        <button
          onClick={handleCustomAction}
          style={{
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#5a67d8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#667eea")
          }
        >
          Custom Action ({clickCount})
        </button>

        <div
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "#9ca3af",
          }}
        >
          Click count: {clickCount} | Check the analytics terminal in the parent
          window
        </div>
      </div>
    </div>
  );
}
