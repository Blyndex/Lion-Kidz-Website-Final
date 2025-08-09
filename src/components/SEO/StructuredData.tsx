
export const getBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lion Kidz Photography",
  "image": "https://lionkidzphoto.mu/images/LionKidzLogo.png",
  "description": "Professional children and family photography services in Mauritius. Specializing in portrait photography, family sessions, event photography, and outdoor photography across Port Louis, Quatre Bornes, Curepipe, Rose Hill, and all of Mauritius.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Royal Road, Malakoff",
    "addressLocality": "Port Louis",
    "addressRegion": "Port Louis District",
    "addressCountry": "MU",
    "postalCode": "11321"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -20.348404,
    "longitude": 57.552152
  },
  "telephone": "+230-5281-8488",
  "email": "Lionkidz636@gmail.com",
  "url": "https://lionkidzphoto.mu",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 09:00-18:00",
  "currenciesAccepted": "MUR, USD, EUR",
  "paymentAccepted": "Cash, Bank Transfer, Mobile Money",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -20.348404,
      "longitude": 57.552152
    },
    "geoRadius": "50000"
  },
  "areaServed": [
    "Port Louis",
    "Quatre Bornes",
    "Curepipe",
    "Rose Hill",
    "Beau Bassin",
    "Vacoas",
    "Phoenix",
    "Mauritius"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Photography Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Children Photography",
          "description": "Professional children photography sessions capturing natural moments and personalities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Photography",
          "description": "Family portrait and group photography for lasting memories"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Newborn Photography",
          "description": "Gentle newborn photography sessions in comfortable settings"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Photography",
          "description": "Birthday parties, celebrations and special events photography"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/p/Lion-Kidz-Photography-100095060533230/",
    "https://www.instagram.com/dino_alexandre24",
    "https://www.tiktok.com/@lionkidz"
  ]
});

export const getPortfolioStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Lion Kidz Photography Portfolio",
  "description": "Professional photography portfolio showcasing children, family, and event photography in Mauritius",
  "creator": {
    "@type": "Organization",
    "name": "Lion Kidz Photography"
  }
});

export const getServiceStructuredData = (serviceName: string, description: string, price: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Lion Kidz Photography",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Port Louis",
      "addressCountry": "MU"
    }
  },
  "areaServed": "Mauritius",
  "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "MUR"
  }
});
