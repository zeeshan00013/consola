// app/robots.txt/route.js
export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.consolamentalhealth.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
