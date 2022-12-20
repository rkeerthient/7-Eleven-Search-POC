import {
  CtaClick,
  provideConversionTrackingAnalytics,
  PagesAnalyticsConfig,
  provideAnalytics,
  providePagesAnalytics,
  CookieManager,
} from "@yext/analytics";
import { v4 as uuidv4 } from "uuid";

const analytics = provideAnalytics({
  experienceKey: "7-eleven-search-poc",
  experienceVersion: "PRODUCTION",
  businessId: 3878450,
  debug: true,
});

export function fireClickEvent(queryId: string, entityId: string) {
  fireAnalyticsEvent({
    type: "CTA_CLICK",
    entityId: entityId,
    verticalKey: "product",
    searcher: "VERTICAL",
    queryId: uuidv4(),
  });
}

export function fireClickEventWithError() {
  fireAnalyticsEvent({
    type: "CTA_CLICK",
    queryId: "95751527-9db6-4859-8278-60d1c060b6c0",
  });
}

function fireAnalyticsEvent(event: any) {
  analytics
    .report(event)
    .then(() => console.log("success!"))
    .catch((err) => console.error(err));
}

const pages = providePagesAnalytics({
  pageType: {
    name: "entity",
    pageSetId: "location",
    id: 18718615,
  },
  referrer: "https://www.google.com",
  pageUrl:
    "https://www.pagesanalyticstesting.com/location/11291?y_source=123353131212312312",
  businessId: 3350634,
  production: false,
  siteId: 40659,
  debug: true,
});

const cookieManager = new CookieManager();
const cookieId = cookieManager.setAndGetYextCookie();
let enableConversionTracking = true;
pages.setConversionTrackingEnabled(enableConversionTracking, cookieId);

export function firePageView() {
  pages.pageView();
}

export function firePagesCTA() {
  pages.track(CtaClick, { cid: "fd61ce31-43ca-41ce-a68d-f6b540b80556" });
}

const conversions = provideConversionTrackingAnalytics(true);

export function toggleConversionTracking() {
  enableConversionTracking = !enableConversionTracking;
  pages.setConversionTrackingEnabled(enableConversionTracking, cookieId);
}

export function fireConversion(value: number) {
  conversions.trackConversion({
    cookieId: cookieId,
    cid: "fd61ce31-43ca-41ce-a68d-f6b540b80556",
    cv: value.toString(),
    location: window.location.href,
  });
}

export function fireListings() {
  conversions.trackListings({
    cookieId: cookieId,
    source: "1_NjE0MzM5Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    location: "location/04500",
  });
}
