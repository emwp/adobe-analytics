"use client";

import { useState } from "react";
import {
  trackFormStarted,
  trackFormInputChanged,
  trackFormSubmit,
  trackButtonClick,
} from "@repo/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isFormStarted, setIsFormStarted] = useState(false);

  const handleFormStart = () => {
    if (!isFormStarted) {
      setIsFormStarted(true);
      trackFormStarted({
        formName: "Contact Us Form",
        formType: "contact",
        section: "contact-page",
      });
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    trackFormInputChanged({
      formName: "Contact Us Form",
      fieldName,
      fieldValue: value,
      section: "contact-page",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackFormSubmit({
      formName: "Contact Us Form",
      formType: "contact",
      section: "contact-page",
    });

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsFormStarted(false);
  };

  const handleSocialClick = (platform: string) => {
    trackButtonClick({
      buttonName: `Social: ${platform}`,
      buttonType: "social",
      section: "contact-page",
      value: platform,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #faf5ff, #fce7f3)",
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
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            Get in touch with our team to learn more about Adobe Analytics
            implementation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Contact Form */}
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
              Send us a message
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    htmlFor="firstName"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.25rem",
                    }}
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onFocus={handleFormStart}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.5rem 0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                    onFocusCapture={(e) => {
                      e.currentTarget.style.borderColor = "#8b5cf6";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(139, 92, 246, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#d1d5db";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onFocus={handleFormStart}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.5rem 0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                    onFocusCapture={(e) => {
                      e.currentTarget.style.borderColor = "#8b5cf6";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(139, 92, 246, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#d1d5db";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
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
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onFocus={handleFormStart}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  onFocusCapture={(e) => {
                    e.currentTarget.style.borderColor = "#8b5cf6";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(139, 92, 246, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onFocus={handleFormStart}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  onFocusCapture={(e) => {
                    e.currentTarget.style.borderColor = "#8b5cf6";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(139, 92, 246, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onFocus={handleFormStart}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  onFocusCapture={(e) => {
                    e.currentTarget.style.borderColor = "#8b5cf6";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(139, 92, 246, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="analytics-implementation">
                    Analytics Implementation
                  </option>
                  <option value="technical-support">Technical Support</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
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
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onFocus={handleFormStart}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project or question..."
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                  onFocusCapture={(e) => {
                    e.currentTarget.style.borderColor = "#8b5cf6";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(139, 92, 246, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#8b5cf6",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7c3aed")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#8b5cf6")
                }
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
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
                Get in Touch
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
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#8b5cf6",
                        fontSize: "0.875rem",
                      }}
                    >
                      📧
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontWeight: "500",
                        color: "#111827",
                      }}
                    >
                      Email
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                      }}
                    >
                      analytics@example.com
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#8b5cf6",
                        fontSize: "0.875rem",
                      }}
                    >
                      📞
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontWeight: "500",
                        color: "#111827",
                      }}
                    >
                      Phone
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                      }}
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#8b5cf6",
                        fontSize: "0.875rem",
                      }}
                    >
                      📍
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontWeight: "500",
                        color: "#111827",
                      }}
                    >
                      Office
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                      }}
                    >
                      123 Analytics Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
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
                Follow Us
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                }}
              >
                <button
                  onClick={() => handleSocialClick("LinkedIn")}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1d4ed8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2563eb")
                  }
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => handleSocialClick("Twitter")}
                  style={{
                    backgroundColor: "#0ea5e9",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0284c7")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0ea5e9")
                  }
                >
                  Twitter
                </button>
                <button
                  onClick={() => handleSocialClick("GitHub")}
                  style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#111827")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1f2937")
                  }
                >
                  GitHub
                </button>
                <button
                  onClick={() => handleSocialClick("YouTube")}
                  style={{
                    backgroundColor: "#dc2626",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#b91c1c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#dc2626")
                  }
                >
                  YouTube
                </button>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(to right, #8b5cf6, #ec4899)",
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
                Need Help Getting Started?
              </h2>
              <p
                style={{
                  marginBottom: "1.5rem",
                }}
              >
                Our team of Adobe Analytics experts is here to help you
                implement and optimize your analytics solution.
              </p>
              <button
                onClick={() =>
                  trackButtonClick({
                    buttonName: "Schedule Consultation",
                    buttonType: "cta",
                    section: "contact-page",
                    value: "consultation",
                  })
                }
                style={{
                  backgroundColor: "white",
                  color: "#8b5cf6",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9fafb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
