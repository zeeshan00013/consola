// app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = "https://www.rcmexpertc.com";
  const staticRoutes = [
    "",
    "about",
    "contact",
    "faqs",
    "HipaaCompliance",
    "EHRSoftware",
    "privacy",
    "payment-posting",
    "patient-statements",
    "mental-health-billing",
    "medical-group-practice",
    "medical-coding",
    "medical-biling",
    "internal-medicine-billing",
    "insurance-eligibility",
    "independent-practices",
    "hospitals",
    "healthcare-digital-marketing",
    "faqs",
    "denial-management",
    "credentialing-services",
    "bookkeeping",
    "ar-follow-up",
    "ambulatory-surgery",
  ];

  const routes = [...staticRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
