"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "../lib/analytics";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string>("");

  useEffect(() => {
    // Only track if the pathname has actually changed
    if (pathname !== lastTrackedPath.current) {
      lastTrackedPath.current = pathname;

      trackPageView({
        pageName: pathname,
        channel: "web",
        section: pathname.split("/")[1] || "home",
      });
    }
  }, [pathname]);

  return <>{children}</>;
};

export default AnalyticsProvider;
