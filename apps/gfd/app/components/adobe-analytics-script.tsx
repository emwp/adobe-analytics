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
      {/* Adobe Analytics AppMeasurement Script */}
      <Script
        id="adobe-analytics-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Adobe Analytics Configuration
            window.s_account = "${reportSuiteId}";
            window.s = {};
            
            // Mock Adobe Analytics object for demo purposes
            window.s = {
              account: "${reportSuiteId}",
              trackingServer: "${trackingServer}",
              visitorNamespace: "analytics",
              pageName: "",
              channel: "",
              server: "",
              pageType: "",
              prop1: "",
              prop2: "",
              prop3: "",
              prop4: "",
              prop5: "",
              eVar1: "",
              eVar2: "",
              eVar3: "",
              eVar4: "",
              eVar5: "",
              events: "",
              
              // Core tracking methods
              t: function() {
                console.log('Adobe Analytics: Page view tracked', {
                  pageName: this.pageName,
                  channel: this.channel,
                  events: this.events,
                  timestamp: new Date().toISOString()
                });
                
                // Dispatch custom event for our terminal display
                window.dispatchEvent(new CustomEvent('adobe-analytics-track', {
                  detail: {
                    type: 'pageview',
                    data: {
                      pageName: this.pageName,
                      channel: this.channel,
                      events: this.events,
                      timestamp: new Date().toISOString()
                    }
                  }
                }));
                
                // Reset variables after tracking
                this.clearVars();
              },
              
              tl: function(element, linkType, linkName) {
                console.log('Adobe Analytics: Link tracked', {
                  linkType: linkType,
                  linkName: linkName,
                  events: this.events,
                  timestamp: new Date().toISOString()
                });
                
                // Dispatch custom event for our terminal display
                window.dispatchEvent(new CustomEvent('adobe-analytics-track', {
                  detail: {
                    type: 'link',
                    data: {
                      linkType: linkType,
                      linkName: linkName,
                      events: this.events,
                      timestamp: new Date().toISOString()
                    }
                  }
                }));
                
                // Reset variables after tracking
                this.clearVars();
              },
              
              clearVars: function() {
                this.pageName = "";
                this.channel = "";
                this.events = "";
                this.prop1 = "";
                this.prop2 = "";
                this.prop3 = "";
                this.eVar1 = "";
                this.eVar2 = "";
                this.eVar3 = "";
              }
            };
            
            // Make s object globally available
            window.adobe = window.adobe || {};
            window.adobe.analytics = window.s;
          `,
        }}
      />
    </>
  );
};

export default AdobeAnalyticsScript;
