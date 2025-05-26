"use client";

import { useState, useEffect } from "react";

interface AnalyticsEvent {
  id: string;
  type: string;
  data: any;
  timestamp: string;
}

const AnalyticsTerminal = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleAnalyticsEvent = (event: CustomEvent) => {
      const newEvent: AnalyticsEvent = {
        id: Date.now().toString(),
        type: event.detail.type,
        data: event.detail.data,
        timestamp: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [newEvent, ...prev].slice(0, 50)); // Keep last 50 events
    };

    const handlePostMessage = (event: MessageEvent) => {
      // Only handle messages from our analytics system
      if (event.data?.source === "adobe-analytics") {
        const newEvent: AnalyticsEvent = {
          id: Date.now().toString(),
          type: event.data.type,
          data: event.data.data,
          timestamp: new Date().toLocaleTimeString(),
        };

        setEvents((prev) => [newEvent, ...prev].slice(0, 50)); // Keep last 50 events
      }
    };

    window.addEventListener(
      "adobe-analytics-track",
      handleAnalyticsEvent as EventListener
    );
    window.addEventListener("message", handlePostMessage);

    return () => {
      window.removeEventListener(
        "adobe-analytics-track",
        handleAnalyticsEvent as EventListener
      );
      window.removeEventListener("message", handlePostMessage);
    };
  }, []);

  const handleClearEvents = () => {
    setEvents([]);
  };

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        backgroundColor: "black",
        color: "#10b981",
        fontFamily: "monospace",
        fontSize: "0.75rem",
        border: "1px solid #10b981",
        borderRadius: "0.5rem",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        zIndex: 50,
        transition: "all 0.3s",
        width: isMinimized ? "16rem" : "24rem",
        height: isMinimized ? "3rem" : "20rem",
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem",
          borderBottom: "1px solid #10b981",
          backgroundColor: "#1f2937",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: "#ef4444",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: "#eab308",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: "#22c55e",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ marginLeft: "0.5rem", color: "#10b981" }}>
            Analytics Terminal
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={handleClearEvents}
            style={{
              color: "#10b981",
              backgroundColor: "transparent",
              border: "none",
              padding: "0.25rem 0.5rem",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#10b981")}
            title="Clear events"
          >
            Clear
          </button>
          <button
            onClick={handleToggleMinimize}
            style={{
              color: "#10b981",
              backgroundColor: "transparent",
              border: "none",
              padding: "0.25rem 0.5rem",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#10b981")}
            title={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? "□" : "_"}
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      {!isMinimized && (
        <div
          style={{
            padding: "0.5rem",
            height: "16rem",
            overflowY: "auto",
          }}
        >
          {events.length === 0 ? (
            <div style={{ color: "#6b7280" }}>
              Waiting for analytics events...
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  style={{
                    borderLeft: "2px solid #10b981",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#eab308" }}>
                      [{event.timestamp}]
                    </span>
                    <span
                      style={{ color: "#3b82f6", textTransform: "uppercase" }}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div style={{ marginLeft: "1rem", color: "#10b981" }}>
                    {event.type === "pageview" && (
                      <div>
                        <div>Page: {event.data.pageName}</div>
                        <div>Channel: {event.data.channel}</div>
                        <div>Events: {event.data.events}</div>
                      </div>
                    )}
                    {event.type === "link" && (
                      <div>
                        <div>Type: {event.data.linkType}</div>
                        <div>Name: {event.data.linkName}</div>
                        <div>Events: {event.data.events}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Minimized State */}
      {isMinimized && (
        <div
          style={{
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#10b981" }}>Events: {events.length}</span>
          {events.length > 0 && (
            <span style={{ color: "#eab308", fontSize: "0.75rem" }}>
              Last: {events[0]?.type} at {events[0]?.timestamp}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AnalyticsTerminal;
