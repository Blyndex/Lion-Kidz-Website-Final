
import Hero from '../components/Hero';
import FeatureBoxes from '../components/FeatureBoxes';
import SocialMediaManagement from '../components/SocialMediaManagement';
import ServicesPreview from '../components/ServicesPreview';
import PortfolioCollage from '../components/PortfolioCollage';
import TestimonialsPreview from '../components/TestimonialsPreview';
import AboutSection from '../components/AboutSection';
import InstagramFeed from '../components/InstagramFeed';
import MetaTags from '../components/SEO/MetaTags';
import { getBusinessStructuredData } from '../components/SEO/StructuredData';

const Home = () => {
  const structuredData = getBusinessStructuredData();

  return (
    <div className="min-h-screen">
      <MetaTags
        title="Lion Kidz Photography - Professional Children & Family Photography in Mauritius"
        description="Capture precious moments with Lion Kidz Photography - Mauritius' premier children and family photographer. Specializing in kids, newborn, maternity, family, and event photography across Port Louis, Quatre Bornes, Curepipe, Rose Hill, and all of Mauritius."
        keywords="Mauritius children photographer, family photography Mauritius, kids photography, professional photography Mauritius, Port Louis photographer, newborn photography Mauritius, maternity photography Mauritius, event photography Mauritius, baby photographer Mauritius, family portraits Mauritius, wedding photography Mauritius, birthday photography Mauritius, outdoor photography Mauritius, studio photography Mauritius"
        url="https://lionkidzphoto.mu"
        structuredData={structuredData}
      />
      <Hero />
      <FeatureBoxes />
      <AboutSection />
      <PortfolioCollage />
      <SocialMediaManagement />
      <ServicesPreview />
      <TestimonialsPreview />
      <InstagramFeed />
    </div>
  );
};

export default Home;
