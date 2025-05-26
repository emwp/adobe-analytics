"use client";

import { useState, useEffect } from "react";
import { trackButtonClick, trackCustomEvent } from "@repo/analytics";

export default function Demo() {
  const [clickCount, setClickCount] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimeOnPage(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAdvancedClick = (action: string) => {
    setClickCount((prev) => prev + 1);

    trackButtonClick({
      buttonName: `Demo: ${action}`,
      buttonType: "demo",
      section: "demo-page",
      value: `click-${clickCount + 1}`,
    });

    trackCustomEvent("Advanced Interaction", {
      action,
      clickCount: (clickCount + 1).toString(),
      timeOnPage: timeOnPage.toString(),
      timestamp: new Date().toISOString(),
    });
  };

  const handleTimedEvent = () => {
    trackCustomEvent("Timed Event Triggered", {
      timeOnPage: timeOnPage.toString(),
      section: "demo-page",
      eventType: "timed-interaction",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fff7ed, #fecaca)",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
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
            Advanced Analytics Demo
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            Explore advanced tracking features and see how complex user
            interactions can be captured and analyzed.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#2563eb",
                marginBottom: "0.5rem",
              }}
            >
              {clickCount}
            </div>
            <div style={{ color: "#4b5563" }}>Total Clicks</div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#059669",
                marginBottom: "0.5rem",
              }}
            >
              {timeOnPage}s
            </div>
            <div style={{ color: "#4b5563" }}>Time on Page</div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#7c3aed",
                marginBottom: "0.5rem",
              }}
            >
              {Math.floor(timeOnPage / 60)}:
              {(timeOnPage % 60).toString().padStart(2, "0")}
            </div>
            <div style={{ color: "#4b5563" }}>Session Duration</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Interactive Elements */}
          <div
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
                marginBottom: "1.5rem",
              }}
            >
              Interactive Elements
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => handleAdvancedClick("Feature A")}
                style={{
                  width: "100%",
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "1rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1d4ed8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563eb")
                }
              >
                <div style={{ fontWeight: "500" }}>Feature A Demo</div>
                <div
                  style={{
                    color: "#dbeafe",
                    fontSize: "0.875rem",
                  }}
                >
                  Click to track advanced interaction
                </div>
              </button>

              <button
                onClick={() => handleAdvancedClick("Feature B")}
                style={{
                  width: "100%",
                  backgroundColor: "#059669",
                  color: "white",
                  padding: "1rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#047857")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#059669")
                }
              >
                <div style={{ fontWeight: "500" }}>Feature B Demo</div>
                <div
                  style={{
                    color: "#d1fae5",
                    fontSize: "0.875rem",
                  }}
                >
                  Includes custom event properties
                </div>
              </button>

              <button
                onClick={() => handleAdvancedClick("Feature C")}
                style={{
                  width: "100%",
                  backgroundColor: "#7c3aed",
                  color: "white",
                  padding: "1rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6d28d9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7c3aed")
                }
              >
                <div style={{ fontWeight: "500" }}>Feature C Demo</div>
                <div
                  style={{
                    color: "#e9d5ff",
                    fontSize: "0.875rem",
                  }}
                >
                  Multi-dimensional tracking
                </div>
              </button>

              <button
                onClick={handleTimedEvent}
                style={{
                  width: "100%",
                  backgroundColor: "#ea580c",
                  color: "white",
                  padding: "1rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#dc2626")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ea580c")
                }
              >
                <div style={{ fontWeight: "500" }}>Timed Event</div>
                <div
                  style={{
                    color: "#fed7aa",
                    fontSize: "0.875rem",
                  }}
                >
                  Tracks time-based interactions
                </div>
              </button>
            </div>

            <div
              style={{
                marginTop: "2rem",
                padding: "1rem",
                backgroundColor: "#f9fafb",
                borderRadius: "0.5rem",
              }}
            >
              <h3
                style={{
                  fontWeight: "500",
                  color: "#111827",
                  marginBottom: "0.5rem",
                }}
              >
                Tracking Information
              </h3>
              <ul
                style={{
                  fontSize: "0.875rem",
                  color: "#4b5563",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <li>• Each click increments a counter</li>
                <li>• Time on page is tracked continuously</li>
                <li>• Custom events include contextual data</li>
                <li>• All interactions appear in the analytics terminal</li>
              </ul>
            </div>
          </div>

          {/* Analytics Insights */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div
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
                  marginBottom: "1.5rem",
                }}
              >
                Real-time Insights
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
                      fontWeight: "500",
                      color: "#111827",
                    }}
                  >
                    Engagement Level
                  </h3>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.875rem",
                    }}
                  >
                    {clickCount === 0
                      ? "No interactions yet"
                      : clickCount < 3
                        ? "Low engagement"
                        : clickCount < 6
                          ? "Medium engagement"
                          : "High engagement"}
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
                      fontWeight: "500",
                      color: "#111827",
                    }}
                  >
                    Session Quality
                  </h3>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.875rem",
                    }}
                  >
                    {timeOnPage < 30
                      ? "Just started"
                      : timeOnPage < 60
                        ? "Getting familiar"
                        : timeOnPage < 120
                          ? "Engaged user"
                          : "Highly engaged"}
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
                      fontWeight: "500",
                      color: "#111827",
                    }}
                  >
                    Interaction Rate
                  </h3>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.875rem",
                    }}
                  >
                    {timeOnPage === 0
                      ? "0 clicks/min"
                      : `${(clickCount / (timeOnPage / 60)).toFixed(1)} clicks/min`}
                  </p>
                </div>
              </div>
            </div>

            <div
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
                  marginBottom: "1.5rem",
                }}
              >
                Event Types Demonstrated
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "#3b82f6",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ color: "#374151" }}>Button Click Events</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "#10b981",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ color: "#374151" }}>
                    Custom Events with Properties
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "#8b5cf6",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ color: "#374151" }}>Time-based Tracking</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "#f59e0b",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ color: "#374151" }}>Session Analytics</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: "#ef4444",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ color: "#374151" }}>Interactive Elements</span>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(to right, #3b82f6, #7c3aed)",
                borderRadius: "0.5rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                padding: "2rem",
                color: "white",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Advanced Features
              </h2>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  color: "#dbeafe",
                }}
              >
                <li>• Real-time event processing</li>
                <li>• Multi-dimensional data capture</li>
                <li>• Session-based analytics</li>
                <li>• Custom event properties</li>
                <li>• Time-based interactions</li>
                <li>• User engagement metrics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div
          style={{
            marginTop: "4rem",
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
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "1.5rem",
              }}
            >
              Implementation Details
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
              }}
            >
              This demo page showcases advanced analytics features including:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "0.5rem",
                  }}
                >
                  Client-Side Tracking
                </h3>
                <ul
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <li>• Real-time event capture</li>
                  <li>• Custom event properties</li>
                  <li>• Session state management</li>
                  <li>• Time-based analytics</li>
                </ul>
              </div>
              <div>
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "0.5rem",
                  }}
                >
                  Data Enrichment
                </h3>
                <ul
                  style={{
                    color: "#4b5563",
                    fontSize: "0.875rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <li>• Contextual information</li>
                  <li>• User behavior patterns</li>
                  <li>• Engagement metrics</li>
                  <li>• Performance indicators</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
