import Script from "next/script";

interface AdobeAnalyticsScriptProps {
  reportSuiteId?: string;
  trackingServer?: string;
}

const AdobeAnalyticsScript = ({
  reportSuiteId = "dev-analytics-suite",
  trackingServer = "analytics.example.com",
}: AdobeAnalyticsScriptProps) => {
  return (
    <>
      {/* Adobe Analytics Data Layer Script */}
      <Script
        id="adobe-analytics-config"
        strategy="beforeInteractive"
        // src="https://assets.adobedtm.com/x/y/z.min.js"
        // NOTE: Below is just a mock for demo purposes
        dangerouslySetInnerHTML={{
          __html: `
            // Initialize Adobe Data Layer
            window.adobeDataLayer = window.adobeDataLayer || [];
            
            // Helper function to get browser info
            function getBrowserInfo() {
              const ua = navigator.userAgent;
              let browser = 'Unknown';
              if (ua.includes('Chrome')) browser = 'Chrome';
              else if (ua.includes('Firefox')) browser = 'Firefox';
              else if (ua.includes('Safari')) browser = 'Safari';
              else if (ua.includes('Edge')) browser = 'Edge';
              return browser;
            }
            
            // Helper function to get user info (mock for demo)
            function getUserInfo() {
              return {
                userId: 'user_' + Math.random().toString(36).substr(2, 9),
                sessionId: 'session_' + Date.now(),
                browser: getBrowserInfo(),
                userAgent: navigator.userAgent.substring(0, 100),
                language: navigator.language,
                platform: navigator.platform
              };
            }
            
            // Data Layer push method
            window.adobeDataLayer.push = function(eventType, eventData) {
              const enrichedData = {
                ...eventData,
                ...getUserInfo(),
                timestamp: new Date().toISOString(),
                reportSuite: "${reportSuiteId}",
                trackingServer: "${trackingServer}"
              };
              
              console.log('Adobe Data Layer:', eventType, enrichedData);
              
              // Dispatch custom event for our terminal display
              window.dispatchEvent(new CustomEvent('adobe-analytics-track', {
                detail: {
                  type: eventType,
                  data: enrichedData
                }
              }));
              
              // Store in the data layer array for potential batch processing
              Array.prototype.push.call(this, {
                event: eventType,
                data: enrichedData
              });
            };
            
            // Make data layer globally available
            window.adobe = window.adobe || {};
            window.adobe.dataLayer = window.adobeDataLayer;
          `,
        }}
      />
    </>
  );
};

export default AdobeAnalyticsScript;
