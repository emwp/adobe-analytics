// Adobe Data Layer interfaces
export interface AdobeDataLayer {
  push: (eventType: string, eventData: any) => void;
  length: number;
  [index: number]: any;
}

declare global {
  interface Window {
    adobeDataLayer?: AdobeDataLayer;
  }
}

// Event interfaces
export interface PageViewData {
  pageName: string;
  channel: string;
  section?: string;
  appName?: string;
}

export interface ButtonClickData {
  buttonName: string;
  buttonType: string;
  section: string;
  value?: string;
  appName?: string;
}

export interface FormStartedData {
  formName: string;
  formType: string;
  section: string;
  appName?: string;
}

export interface FormInputChangedData {
  formName: string;
  fieldName: string;
  fieldValue: string;
  section: string;
  appName?: string;
}

export interface FormSubmitData {
  formName: string;
  formType: string;
  section: string;
  appName?: string;
}

export interface CustomEventData {
  [key: string]: any;
  appName?: string;
}
