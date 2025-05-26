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

// Helper function to get Adobe Analytics instance
const getAdobeAnalytics = () => {
  // Only use current window's Adobe Analytics instance
  // Cross-origin iframe access will be handled via postMessage
  return window.s;
};

export const trackPageView = (data: Omit<PageViewData, "appName">) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  const trackingData = { ...data, appName };

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.pageName = `${appName}:${data.pageName}`;
    s.channel = data.channel;
    s.events = "event1"; // Page view event
    s.eVar1 = data.section || "";
    s.eVar2 = appName;
    s.t(); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("pageview", {
      pageName: `${appName}:${data.pageName}`,
      channel: data.channel,
      events: "event1",
      appName,
    });
  }
};

export const trackButtonClick = (data: Omit<ButtonClickData, "appName">) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  const trackingData = { ...data, appName };

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.events = "event2"; // Button click event
    s.eVar3 = `${appName}:${data.buttonName}`;
    s.eVar4 = data.buttonType;
    s.eVar5 = data.section;
    s.prop1 = data.value || "";
    s.prop2 = appName;
    s.tl(true, "o", `${appName}:${data.buttonName}`); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("link", {
      linkType: "button",
      linkName: `${appName}:${data.buttonName}`,
      events: "event2",
      appName,
    });
  }
};

export const trackFormStarted = (data: Omit<FormStartedData, "appName">) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  const trackingData = { ...data, appName };

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.events = "event3"; // Form start event
    s.eVar1 = `${appName}:${data.formName}`;
    s.eVar2 = data.formType;
    s.eVar3 = data.section;
    s.prop3 = appName;
    s.tl(true, "o", `${appName}:form-start:${data.formName}`); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("link", {
      linkType: "form-start",
      linkName: `${appName}:${data.formName}`,
      events: "event3",
      appName,
    });
  }
};

export const trackFormInputChanged = (
  data: Omit<FormInputChangedData, "appName">
) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  const trackingData = { ...data, appName };

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.events = "event4"; // Form input change event
    s.eVar1 = `${appName}:${data.formName}`;
    s.eVar2 = data.fieldName;
    s.eVar3 = data.section;
    s.prop4 = appName;
    s.tl(true, "o", `${appName}:form-input:${data.fieldName}`); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("link", {
      linkType: "form-input",
      linkName: `${appName}:${data.fieldName}`,
      events: "event4",
      appName,
    });
  }
};

export const trackFormSubmit = (data: Omit<FormSubmitData, "appName">) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  const trackingData = { ...data, appName };

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.events = "event5"; // Form submit event
    s.eVar1 = `${appName}:${data.formName}`;
    s.eVar2 = data.formType;
    s.eVar3 = data.section;
    s.prop5 = appName;
    s.tl(true, "o", `${appName}:form-submit:${data.formName}`); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("link", {
      linkType: "form-submit",
      linkName: `${appName}:${data.formName}`,
      events: "event5",
      appName,
    });
  }
};

export const trackRightClick = (elementName: string, section: string) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.events = "event6"; // Right click event
    s.eVar4 = `${appName}:${elementName}`;
    s.eVar5 = section;
    s.prop1 = appName;
    s.tl(true, "o", `${appName}:right-click:${elementName}`); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("link", {
      linkType: "right-click",
      linkName: `${appName}:${elementName}`,
      events: "event6",
      appName,
    });
  }
};

export const trackCustomEvent = (
  eventName: string,
  properties: Omit<CustomEventData, "appName">
) => {
  const appName = getAppName();
  const s = getAdobeAnalytics();

  const trackingData = { ...properties, appName };

  // Only track in Adobe Analytics if we have access to it (parent window)
  if (s && window === window.parent) {
    s.events = "event7"; // Custom event
    s.eVar1 = `${appName}:${eventName}`;
    s.eVar2 = JSON.stringify(trackingData);
    s.prop2 = appName;
    s.tl(true, "o", `${appName}:custom:${eventName}`); // Adobe Analytics will dispatch the event automatically
  } else {
    // Only dispatch manual event if Adobe Analytics is not available (iframe case)
    dispatchAnalyticsEvent("link", {
      linkType: "custom",
      linkName: `${appName}:${eventName}`,
      events: "event7",
      appName,
    });
  }
};
