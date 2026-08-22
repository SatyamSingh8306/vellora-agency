import { SITE } from "./seo";

export const CAL_LINK = "satyam-singh-oshgny/15min";
export const CAL_NAMESPACE = "15min";
export const BOOKING_URL = `https://cal.com/${CAL_LINK}`;
export const CONTACT_EMAIL = SITE.email;
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Project inquiry",
)}`;
