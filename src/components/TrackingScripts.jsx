// TrackingScripts.jsx
// Currently renders nothing — no tracking is active.
//
// FUTURE INTEGRATION — Google Analytics 4 & Google Ads:
// -------------------------------------------------------
// 1. Get your Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
//    and your Conversion ID from Google Ads (format: AW-XXXXXXXXXX).
//
// 2. Store them as Vite environment variables in a `.env.local` file
//    (this file must be in .gitignore — NEVER commit API keys):
//
//    VITE_GA4_ID=G-XXXXXXXXXX
//    VITE_GADS_ID=AW-XXXXXXXXXX
//
// 3. Uncomment and adapt the implementation below:
//
// import { useEffect } from 'react'
//
// export default function TrackingScripts() {
//   useEffect(() => {
//     const GA4_ID  = import.meta.env.VITE_GA4_ID
//     const GADS_ID = import.meta.env.VITE_GADS_ID
//     if (!GA4_ID) return
//
//     // Load the gtag.js script once
//     const script = document.createElement('script')
//     script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
//     script.async = true
//     document.head.appendChild(script)
//
//     // Initialize the dataLayer and configure both GA4 and Ads
//     window.dataLayer = window.dataLayer || []
//     function gtag() { window.dataLayer.push(arguments) }
//     window.gtag = gtag
//     gtag('js', new Date())
//     gtag('config', GA4_ID)
//     if (GADS_ID) gtag('config', GADS_ID)
//   }, [])
//
//   return null
// }

export default function TrackingScripts() {
  return null
}
