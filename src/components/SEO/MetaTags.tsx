
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

const MetaTags = ({
  title = "Lion Kidz Photography - Professional Children & Family Photography in Mauritius",
  description = "Capture precious moments with Lion Kidz Photography - Mauritius' premier children and family photographer. Specializing in kids, newborn, maternity, family, and event photography across Port Louis, Quatre Bornes, Curepipe, Rose Hill, and all of Mauritius.",
        keywords = "Mauritius photographer, family photography Mauritius, children photographer Mauritius, portrait photography Mauritius, event photography Mauritius, wedding photographer Mauritius, birthday photography Mauritius, newborn photography Mauritius, maternity photography Mauritius, professional photographer Mauritius, Port Louis photographer, Quatre Bornes photographer, Curepipe photographer, Rose Hill photographer, outdoor photography Mauritius, studio photography Mauritius, family portraits Mauritius, kids photography Mauritius, group photography Mauritius, friends photography Mauritius, beach photography Mauritius, landscape photography Mauritius",
      image = "https://lionkidzphoto.mu/images/LionKidzLogo.png",
  url = "https://lionkidzphoto.mu",
  type = "website",
  structuredData
}: MetaTagsProps) => {
  const location = useLocation();
  
  // Generate breadcrumb structured data for non-home pages
  const getBreadcrumbStructuredData = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    if (pathnames.length === 0) return null;
    
    const breadcrumbNames: { [key: string]: string } = {
      'portfolio': 'Portfolio',
      'services': 'Services',
      'about': 'About',
      'contact': 'Contact',
      'testimonials': 'Testimonials'
    };

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://lionkidzphoto.mu"
        },
        ...pathnames.map((name, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": breadcrumbNames[name] || name,
          "item": `https://lionkidzphoto.mu/${pathnames.slice(0, index + 1).join('/')}`
        }))
      ]
    };
  };

  const breadcrumbData = getBreadcrumbStructuredData();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Lion Kidz Photography - Professional photography services in Mauritius" />
      <meta property="og:site_name" content="Lion Kidz Photography" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lionkidzphoto" />
      <meta name="twitter:creator" content="@lionkidzphoto" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Lion Kidz Photography" />
      <meta name="geo.region" content="MU" />
      <meta name="geo.placename" content="Mauritius" />
      <meta name="geo.position" content="-20.348404;57.552152" />
      <meta name="ICBM" content="-20.348404, 57.552152" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
