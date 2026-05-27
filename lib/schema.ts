import { siteConfig } from "./seo";

type ServiceSchemaProps = {
  title: string;
  description: string;
  path: string;
  areaServed: string;
};

export function homeSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: siteConfig.name,

    url: siteConfig.url,

    image: `${siteConfig.url}/og_image.png`,

    description: siteConfig.description,

    areaServed: [
      "Abu Dhabi",
      "Dubai",
      "United Arab Emirates",
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },

    serviceType: [
      "Website Design",
      "Web Advertising",
      "SEO Optimization",
      "Mobile Optimization",
      "WhatsApp Integration",
      "Website Maintenance",
    ],
  };
}

export function serviceSchema({
  title,
  description,
  path,
  areaServed,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    name: title,

    description,

    url: `${siteConfig.url}${path}`,

    areaServed: {
      "@type": "City",
      name: areaServed,
    },

    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}