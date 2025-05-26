import type {
  PageViewData,
  ButtonClickData,
  FormStartedData,
  FormInputChangedData,
  FormSubmitData,
  CustomEventData,
} from "./types";

// Helper function to get the app name from the current context
const getAppName = (): string => {
  // Check if we're in an iframe
  if (window !== window.parent) {
    return "iframe-app";
  }
  return "gfd-app";
};

// Helper function to dispatch custom events for the analytics terminal
const dispatchAnalyticsEvent = (type: string, data: any) => {
  const eventData = { type, data };

  // If we're in an iframe, send message to parent
  if (window !== window.parent) {
    try {
      window.parent.postMessage(
        {
          source: "adobe-analytics",
          ...eventData,
        },
        "*"
      );
    } catch (error) {
      console.warn("Failed to send analytics event to parent:", error);
    }
  } else {
    // Dispatch event normally in parent window
    const event = new CustomEvent("adobe-analytics-track", {
      detail: eventData,
    });
    window.dispatchEvent(event);
  }
};

// Helper function to get Adobe Data Layer instance
const getAdobeDataLayer = () => {
  // Only use current window's Adobe Data Layer instance
  // Cross-origin iframe access will be handled via postMessage
  return window.adobeDataLayer;
};

export const trackPageView = (data: Omit<PageViewData, "appName">) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("pageLoadEvent", {
      path: data.pageName,
      title: document.title || data.pageName,
      channel: data.channel,
      section: data.section || "",
      appName: appName,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("pageLoadEvent", {
      path: data.pageName,
      title: document.title || data.pageName,
      channel: data.channel,
      section: data.section || "",
      appName: appName,
    });
  }
};

export const trackButtonClick = (data: Omit<ButtonClickData, "appName">) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("clickEvent", {
      buttonText: data.buttonName,
      buttonType: data.buttonType,
      buttonAlt: data.value || "",
      section: data.section,
      appName: appName,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("clickEvent", {
      buttonText: data.buttonName,
      buttonType: data.buttonType,
      buttonAlt: data.value || "",
      section: data.section,
      appName: appName,
    });
  }
};

export const trackFormStarted = (data: Omit<FormStartedData, "appName">) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("formStartEvent", {
      formName: data.formName,
      formType: data.formType,
      section: data.section,
      appName: appName,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("formStartEvent", {
      formName: data.formName,
      formType: data.formType,
      section: data.section,
      appName: appName,
    });
  }
};

export const trackFormInputChanged = (
  data: Omit<FormInputChangedData, "appName">
) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("formInputEvent", {
      formName: data.formName,
      fieldName: data.fieldName,
      fieldValue: data.fieldValue,
      section: data.section,
      appName: appName,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("formInputEvent", {
      formName: data.formName,
      fieldName: data.fieldName,
      fieldValue: data.fieldValue,
      section: data.section,
      appName: appName,
    });
  }
};

export const trackFormSubmit = (data: Omit<FormSubmitData, "appName">) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("formSubmitEvent", {
      formName: data.formName,
      formType: data.formType,
      section: data.section,
      appName: appName,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("formSubmitEvent", {
      formName: data.formName,
      formType: data.formType,
      section: data.section,
      appName: appName,
    });
  }
};

export const trackRightClick = (elementName: string, section: string) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("rightClickEvent", {
      elementName: elementName,
      section: section,
      appName: appName,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("rightClickEvent", {
      elementName: elementName,
      section: section,
      appName: appName,
    });
  }
};

export const trackCustomEvent = (
  eventName: string,
  properties: Omit<CustomEventData, "appName">
) => {
  const appName = getAppName();
  const dataLayer = getAdobeDataLayer();

  const trackingData = { ...properties, appName };

  // Only track in Adobe Data Layer if we have access to it (parent window)
  if (dataLayer && window === window.parent) {
    dataLayer.push("customEvent", {
      eventName: eventName,
      ...trackingData,
    });
  } else {
    // Only dispatch manual event if Adobe Data Layer is not available (iframe case)
    dispatchAnalyticsEvent("customEvent", {
      eventName: eventName,
      ...trackingData,
    });
  }
};
