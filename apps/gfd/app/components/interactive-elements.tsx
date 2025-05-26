"use client";

import { useState } from "react";
import {
  trackButtonClick,
  trackFormStarted,
  trackFormInputChanged,
  trackFormSubmit,
  trackRightClick,
  trackCustomEvent,
} from "@repo/analytics";

const InteractiveElements = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormStarted, setIsFormStarted] = useState(false);

  const handleButtonClick = (
    buttonName: string,
    buttonType: string = "button"
  ) => {
    trackButtonClick({
      buttonName,
      buttonType,
      section: "interactive-demo",
      value: buttonName,
    });
  };

  const handleFormStart = () => {
    if (!isFormStarted) {
      setIsFormStarted(true);
      trackFormStarted({
        formName: "Contact Form",
        formType: "contact",
        section: "interactive-demo",
      });
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    trackFormInputChanged({
      formName: "Contact Form",
      fieldName,
      fieldValue: value,
      section: "interactive-demo",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackFormSubmit({
      formName: "Contact Form",
      formType: "contact",
      section: "interactive-demo",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsFormStarted(false);
    alert("Form submitted! Check the analytics terminal.");
  };

  const handleRightClick = (e: React.MouseEvent, elementName: string) => {
    e.preventDefault();
    trackRightClick(elementName, "interactive-demo");
    alert(`Right-clicked on ${elementName}! Check the analytics terminal.`);
  };

  const handleCustomEvent = (eventName: string) => {
    trackCustomEvent(eventName, {
      section: "interactive-demo",
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent.substring(0, 50),
    });
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        padding: "2rem",
        marginBottom: "4rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Interactive Analytics Demo
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Button Interactions */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            Button Click Tracking
          </h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <button
              onClick={() => handleButtonClick("Primary CTA", "cta")}
              style={{
                width: "100%",
                backgroundColor: "#2563eb",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1d4ed8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2563eb")
              }
            >
              Primary CTA Button
            </button>

            <button
              onClick={() => handleButtonClick("Secondary Action", "secondary")}
              style={{
                width: "100%",
                backgroundColor: "#4b5563",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#374151")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4b5563")
              }
            >
              Secondary Action
            </button>

            <button
              onClick={() => handleButtonClick("Download", "download")}
              style={{
                width: "100%",
                backgroundColor: "#059669",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#047857")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#059669")
              }
            >
              Download Button
            </button>
          </div>

          {/* Right Click Demo */}
          <div style={{ marginTop: "2rem" }}>
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "0.75rem",
              }}
            >
              Right Click Tracking
            </h4>
            <div
              onContextMenu={(e) => handleRightClick(e, "Demo Card")}
              style={{
                backgroundColor: "#fef3c7",
                border: "2px solid #fbbf24",
                padding: "1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "#92400e" }}>
                Right-click on this card to trigger a right-click event!
              </p>
            </div>
          </div>

          {/* Custom Events */}
          <div style={{ marginTop: "2rem" }}>
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "0.75rem",
              }}
            >
              Custom Event Tracking
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <button
                onClick={() => handleCustomEvent("Feature Explored")}
                style={{
                  width: "100%",
                  backgroundColor: "#7c3aed",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.25rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6d28d9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7c3aed")
                }
              >
                Explore Feature
              </button>
              <button
                onClick={() => handleCustomEvent("Help Requested")}
                style={{
                  width: "100%",
                  backgroundColor: "#ea580c",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.25rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#dc2626")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ea580c")
                }
              >
                Request Help
              </button>
            </div>
          </div>
        </div>

        {/* Form Interactions */}
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            Form Tracking
          </h3>

          <form
            onSubmit={handleFormSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                }}
                onFocus={(e) => {
                  handleFormStart();
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                }}
                onFocus={(e) => {
                  handleFormStart();
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                }}
                onFocus={(e) => {
                  handleFormStart();
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#2563eb",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1d4ed8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2563eb")
              }
            >
              Submit Form
            </button>
          </form>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#eff6ff",
              borderRadius: "0.5rem",
            }}
          >
            <h4
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#1e40af",
                marginBottom: "0.5rem",
              }}
            >
              Form Tracking Events:
            </h4>
            <ul
              style={{
                fontSize: "0.875rem",
                color: "#1d4ed8",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <li>• Form Started: When you first focus on any field</li>
              <li>• Input Changed: Every time you type in a field</li>
              <li>• Form Submitted: When you submit the form</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;
