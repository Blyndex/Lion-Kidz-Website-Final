import { Instagram, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InstagramFeed = () => {
  const { t } = useTranslation();

  // Portfolio images for "Follow Our Journey" section
  const journeyImages = [
    {
      id: 1,
      image: "/images/portfolio/Portraits/Ryan1.jpg",
      caption: "Professional Portrait Photography 📸✨",
      likes: 127,
      comments: 15
    },
    {
      id: 2,
      image: "/images/portfolio/Families/Mel4.jpg",
      caption: "Family Photography Sessions 💕",
      likes: 203,
      comments: 28
    },
    {
      id: 3,
      image: "/images/portfolio/FriendsAndLifestyle/Lor1.jpg",
      caption: "Lifestyle Photography in Mauritius 🌴",
      likes: 189,
      comments: 22
    },
    {
      id: 4,
      image: "/images/portfolio/NatureAndLandscapes/photo_7_2025-07-02_19-29-01.jpg",
      caption: "Landscape Photography 👶📷",
      likes: 156,
      comments: 19
    },
    {
      id: 5,
      image: "/images/portfolio/Families/Int1.JPG",
      caption: "Creating memories that last forever ✨",
      likes: 241,
      comments: 31
    },
    {
      id: 6,
      image: "/images/portfolio/Portraits/Lor2.jpg",
      caption: "Portrait Photography Excellence 🎬",
      likes: 178,
      comments: 24
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground font-alegreya">
              {t('instagram.title')}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('instagram.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {journeyImages.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <Instagram className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm">
                    <span className="flex items-center justify-center gap-1">
                      ❤️ {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/dino_alexandre24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            {t('instagram.followButton')}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;