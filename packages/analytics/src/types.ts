// Adobe Analytics interfaces
export interface AdobeAnalytics {
  t: () => void;
  tl: (
    element: any,
    linkType: string,
    linkName: string,
    variables?: any
  ) => void;
  pageName: string;
  channel: string;
  events: string;
  eVar1?: string;
  eVar2?: string;
  eVar3?: string;
  eVar4?: string;
  eVar5?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;
}

declare global {
  interface Window {
    s?: AdobeAnalytics;
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
