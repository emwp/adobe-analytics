"use client";

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f0fdf4, #d1fae5)",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "3rem 1rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3rem)",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "1.5rem",
            }}
          >
            About Adobe Analytics
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            Learn about the implementation and architecture of our Adobe
            Analytics solution.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
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
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Implementation Overview
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
              }}
            >
              Our Adobe Analytics implementation follows modern best practices
              for Next.js applications. It includes both client-side and
              server-side tracking capabilities, with a focus on performance and
              developer experience.
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
              <li>Automatic page view tracking on route changes</li>
              <li>Comprehensive event tracking library</li>
              <li>Real-time debugging with analytics terminal</li>
              <li>TypeScript support for type safety</li>
              <li>Form interaction tracking</li>
              <li>Interactive element tracking</li>
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
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Architecture Components
            </h2>
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
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#1e3a8a",
                    marginBottom: "0.5rem",
                  }}
                >
                  Adobe Analytics Script
                </h3>
                <p
                  style={{
                    color: "#1d4ed8",
                    fontSize: "0.875rem",
                  }}
                >
                  Next.js Script component that loads the Adobe Analytics
                  library with proper timing and configuration.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#f0fdf4",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#14532d",
                    marginBottom: "0.5rem",
                  }}
                >
                  Analytics Provider
                </h3>
                <p
                  style={{
                    color: "#15803d",
                    fontSize: "0.875rem",
                  }}
                >
                  Client-side provider that handles automatic page view tracking
                  using Next.js usePathname hook.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#faf5ff",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#581c87",
                    marginBottom: "0.5rem",
                  }}
                >
                  Tracking Library
                </h3>
                <p
                  style={{
                    color: "#7c3aed",
                    fontSize: "0.875rem",
                  }}
                >
                  Abstraction layer over Adobe Analytics API with TypeScript
                  support and easy-to-use functions.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#fff7ed",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#9a3412",
                    marginBottom: "0.5rem",
                  }}
                >
                  Analytics Terminal
                </h3>
                <p
                  style={{
                    color: "#ea580c",
                    fontSize: "0.875rem",
                  }}
                >
                  Real-time debugging component that displays all tracking
                  events for development and testing.
                </p>
              </div>
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
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Event Types Supported
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  borderLeft: "4px solid #3b82f6",
                  paddingLeft: "1rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Page Views
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Automatic tracking of page navigation with pathname, channel,
                  and section data.
                </p>
              </div>
              <div
                style={{
                  borderLeft: "4px solid #10b981",
                  paddingLeft: "1rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Button Clicks
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Track user interactions with buttons, including button type
                  and context.
                </p>
              </div>
              <div
                style={{
                  borderLeft: "4px solid #8b5cf6",
                  paddingLeft: "1rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Form Interactions
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Comprehensive form tracking including start, input changes,
                  and submission.
                </p>
              </div>
              <div
                style={{
                  borderLeft: "4px solid #f59e0b",
                  paddingLeft: "1rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Right Click Events
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Track right-click interactions for enhanced user behavior
                  analysis.
                </p>
              </div>
              <div
                style={{
                  borderLeft: "4px solid #ef4444",
                  paddingLeft: "1rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Custom Events
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                  }}
                >
                  Flexible custom event tracking for any business-specific
                  interactions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
