"use client";

import InteractiveElements from "./components/interactive-elements";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #dbeafe, #e0e7ff)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "3rem 1rem",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "1.5rem",
            }}
          >
            Adobe Analytics Demo
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              marginBottom: "2rem",
              maxWidth: "48rem",
              margin: "0 auto 2rem auto",
            }}
          >
            This is a comprehensive demonstration of Adobe Analytics
            implementation with Next.js. Interact with the elements below to see
            real-time tracking in the terminal at the bottom right.
          </p>
          <div
            style={{
              backgroundColor: "#fef3c7",
              borderLeft: "4px solid #f59e0b",
              padding: "1rem",
              maxWidth: "32rem",
              margin: "0 auto",
            }}
          >
            <p style={{ color: "#92400e" }}>
              <strong>Watch the Analytics Terminal:</strong> All your
              interactions are being tracked and displayed in real-time in the
              terminal window at the bottom right corner.
            </p>
          </div>
        </div>

        {/* Interactive Elements Section */}
        <InteractiveElements />

        {/* Content Sections */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            marginTop: "4rem",
          }}
        >
          <section
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1.5rem",
              }}
            >
              Page View Tracking
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
              }}
            >
              Every time you navigate to a different page, a page view event is
              automatically tracked. The Analytics Provider component uses the
              usePathname hook to detect route changes and sends the appropriate
              tracking data to Adobe Analytics.
            </p>
            <div
              style={{
                backgroundColor: "#1f2937",
                padding: "1rem",
                borderRadius: "0.375rem",
              }}
            >
              <code
                style={{
                  fontSize: "0.875rem",
                  color: "#10b981",
                  fontFamily: "monospace",
                }}
              >
                trackPageView(&#123;
                <br />
                &nbsp;&nbsp;pageName: pathname,
                <br />
                &nbsp;&nbsp;channel: 'web',
                <br />
                &nbsp;&nbsp;section: pathname.split('/')[1] || 'home'
                <br />
                &#125;);
              </code>
            </div>
          </section>

          <section
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1.5rem",
              }}
            >
              Event Tracking Architecture
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
              }}
            >
              Our analytics implementation includes:
            </p>
            <ul
              style={{
                listStyle: "disc",
                listStylePosition: "inside",
                color: "#4b5563",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                Adobe Analytics Script component for loading the tracking
                library
              </li>
              <li>Analytics Provider for automatic page view tracking</li>
              <li>Abstraction library for easy event tracking</li>
              <li>Real-time terminal display for debugging</li>
              <li>Interactive element tracking</li>
              <li>Form interaction tracking</li>
            </ul>
          </section>

          <section
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1.5rem",
              }}
            >
              Micro-Frontend Integration
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "1.5rem",
              }}
            >
              Below you'll find the iframe app loaded as a micro-frontend. This
              demonstrates how analytics can work across different applications
              in a micro-frontend architecture.
            </p>

            {/* Iframe Integration */}
            <div
              style={{
                border: "4px solid #ef4444",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  padding: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Micro-Frontend: Iframe App (Port 3001)
              </div>
              <iframe
                src="http://localhost:3001"
                style={{
                  width: "100%",
                  height: "24rem",
                  border: "0",
                }}
                title="Iframe Micro-Frontend"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </section>

          <section
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1.5rem",
              }}
            >
              Additional Content
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
              }}
            >
              This section provides additional content to demonstrate the
              analytics implementation. All user interactions are tracked and
              displayed in the analytics terminal.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#eff6ff",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#1e3a8a",
                    marginBottom: "0.75rem",
                  }}
                >
                  Client-Side Tracking
                </h3>
                <p style={{ color: "#1d4ed8" }}>
                  All user interactions are tracked on the client-side using our
                  analytics library that abstracts the Adobe Analytics API.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#f0fdf4",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#14532d",
                    marginBottom: "0.75rem",
                  }}
                >
                  Server-Side Ready
                </h3>
                <p style={{ color: "#15803d" }}>
                  The architecture also supports server-side tracking for
                  scenarios where client-side tracking isn't sufficient.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
