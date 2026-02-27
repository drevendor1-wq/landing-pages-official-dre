// Country code to calling code mapping
export const COUNTRY_TO_CALLING_CODE: Record<string, string> = {
  AE: "+971", // United Arab Emirates
  SA: "+966", // Saudi Arabia
  KW: "+965", // Kuwait
  QA: "+974", // Qatar
  OM: "+968", // Oman
  BH: "+973", // Bahrain
  IN: "+91",  // India
  PK: "+92",  // Pakistan
  BD: "+880", // Bangladesh
  US: "+1",   // United States
  GB: "+44",  // United Kingdom
  CA: "+1",   // Canada
  AU: "+61",  // Australia
  DE: "+49",  // Germany
  FR: "+33",  // France
  IT: "+39",  // Italy
  ES: "+34",  // Spain
  NL: "+31",  // Netherlands
  BE: "+32",  // Belgium
  CH: "+41",  // Switzerland
  SE: "+46",  // Sweden
  NO: "+47",  // Norway
  DK: "+45",  // Denmark
  FI: "+358", // Finland
  PL: "+48",  // Poland
  RU: "+7",   // Russia
  CN: "+86",  // China
  JP: "+81",  // Japan
  KR: "+82",  // South Korea
  SG: "+65",  // Singapore
  MY: "+60",  // Malaysia
  TH: "+66",  // Thailand
  PH: "+63",  // Philippines
  ID: "+62",  // Indonesia
  VN: "+84",  // Vietnam
  EG: "+20",  // Egypt
  JO: "+962", // Jordan
  LB: "+961", // Lebanon
  TR: "+90",  // Turkey
  ZA: "+27",  // South Africa
  NG: "+234", // Nigeria
  KE: "+254", // Kenya
  BR: "+55",  // Brazil
  AR: "+54",  // Argentina
  MX: "+52",  // Mexico
  NZ: "+64",  // New Zealand
};

// Timezone to country code mapping
const TIMEZONE_TO_COUNTRY: Record<string, string> = {
  // India
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/New_Delhi": "IN",
  "Asia/Mumbai": "IN",
  "Asia/Chennai": "IN",
  // UAE
  "Asia/Dubai": "AE",
  // UK
  "Europe/London": "GB",
  // US
  "America/New_York": "US",
  "America/Los_Angeles": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  // Germany
  "Europe/Berlin": "DE",
  // France
  "Europe/Paris": "FR",
  // Singapore
  "Asia/Singapore": "SG",
  // Japan
  "Asia/Tokyo": "JP",
  // Australia
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  // Canada
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  // Saudi Arabia
  "Asia/Riyadh": "SA",
  // Pakistan
  "Asia/Karachi": "PK",
  // Bangladesh
  "Asia/Dhaka": "BD",
  // China
  "Asia/Shanghai": "CN",
  "Asia/Beijing": "CN",
};

/**
 * Detects the user's country and returns the corresponding calling code
 * @returns Promise<string> - The detected calling code or "+971" (UAE) as default
 */
export async function detectCountryCode(): Promise<string> {
  let detectedCode: string | null = null;

  // Method 1: Try IP geolocation (multiple services for reliability)
  const ipServices = [
    "https://ipapi.co/json/",
    "https://ip-api.com/json/?fields=countryCode",
  ];

  for (const service of ipServices) {
    try {
      const response = await fetch(service, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // ipapi.co returns country_code, ip-api.com returns countryCode
        const countryCode = data.country_code || data.countryCode;

        if (countryCode && COUNTRY_TO_CALLING_CODE[countryCode]) {
          detectedCode = COUNTRY_TO_CALLING_CODE[countryCode];
          break;
        }
      }
    } catch (error) {
      // Try next service
      continue;
    }
  }

  // Method 2: Try browser timezone (more reliable than locale)
  if (!detectedCode) {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const countryCode = TIMEZONE_TO_COUNTRY[timezone];
      if (countryCode && COUNTRY_TO_CALLING_CODE[countryCode]) {
        detectedCode = COUNTRY_TO_CALLING_CODE[countryCode];
      }
    } catch (error) {
      console.log("Timezone detection failed");
    }
  }

  // Method 3: Try browser locale as last resort
  if (!detectedCode) {
    try {
      const locale = navigator.language || (navigator as any).userLanguage;
      const countryCode = locale.split("-")[1]?.toUpperCase();
      
      if (countryCode && COUNTRY_TO_CALLING_CODE[countryCode]) {
        detectedCode = COUNTRY_TO_CALLING_CODE[countryCode];
      }
    } catch (error) {
      console.log("Locale detection failed");
    }
  }

  // Return detected code or default to UAE
  return detectedCode || "+971";
}
