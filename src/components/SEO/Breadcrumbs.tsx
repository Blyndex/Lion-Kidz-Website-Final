
import { ChevronRight, Home } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const breadcrumbNames: { [key: string]: string } = {
    'portfolio': t('nav.portfolio'),
    'services': t('nav.services'),
    'about': t('nav.about'),
    'contact': t('nav.contact'),
    'testimonials': 'Testimonials'
  };

  if (pathnames.length === 0) return null;

  const breadcrumbStructuredData = {
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

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      <nav aria-label="Breadcrumb" className="bg-background/50 backdrop-blur-sm py-3 border-b border-brand-lime/10">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink
                to="/"
                className="flex items-center text-muted-foreground hover:text-brand-lime transition-colors"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </NavLink>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              
              return (
                <li key={name} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-muted-foreground/70 mx-2" />
                  {isLast ? (
                    <span className="text-brand-lime font-medium font-alegreya">
                      {breadcrumbNames[name] || name}
                    </span>
                  ) : (
                    <NavLink
                      to={routeTo}
                      className="text-muted-foreground hover:text-brand-lime transition-colors font-alegreya"
                    >
                      {breadcrumbNames[name] || name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
