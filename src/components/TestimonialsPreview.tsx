
import { Star, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsPreview = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: 'ijiwole damilola',
      text: 'This photography brand stands out for its exceptional craftsmanship and innovative approach. He excel in capturing both expansive landscapes and intimate moments with meticulous attention to detail. I highly recommend their services to anyone looking for top-quality photography.',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'STARVIB3 C',
      text: 'Can tell that he knows what he is doing. He\'s born for that',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Tejasvini SARDHARAM',
      text: 'Love the vibe you bring to the pictures when you edit.',
      rating: 5,
      reviews: '2 reviews'
    },
    {
      name: 'Bakrid mauritius',
      text: 'The best 💯💯💯',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Stacy Leraty',
      text: 'Recommended 💯 and satisfied',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Jayesh DJG',
      text: 'Very nice person with great talent 👌🏾 highly recommend 👌🏾',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Farla jean hugue bertand',
      text: 'Nothing to say, the photos are just wooow…. Very very good photography, I recommend it to you🔥🔥',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Naomie Edouard',
      text: '❤️🫶🏽Very good photographer',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Francesca Gili',
      text: 'Very good photographer🫶🏻💯',
      rating: 5,
      reviews: '1 review'
    },
    {
      name: 'Kerwin Avinash',
      text: 'Very professional',
      rating: 5,
      reviews: '1 review'
    }
  ];

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-alegreya text-4xl md:text-5xl text-white mb-6 font-bold">
            {t('testimonials.title')} <span className="text-brand-pink">{t('testimonials.titleHighlight')}</span> {t('testimonials.titleEnd')}
          </h2>
          <p className="font-alegreya text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-700 h-64 flex flex-col">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-lime text-brand-lime" />
                      ))}
                    </div>
                    
                    <div className="flex-1 mb-4">
                      <p className="font-alegreya text-gray-300 leading-relaxed text-sm">
                        {truncateText(testimonial.text, 120)}
                      </p>
                      {testimonial.text.length > 120 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="link" 
                              className="p-0 h-auto text-brand-lime hover:text-brand-lime/80 text-sm mt-1"
                            >
                              {t('testimonials.readMore')}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle className="font-alegreya text-brand-darkGray">
                                {t('testimonials.reviewBy')} {testimonial.name}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-brand-lime text-brand-lime" />
                                ))}
                              </div>
                              <p className="font-alegreya text-gray-700 leading-relaxed">
                                "{testimonial.text}"
                              </p>
                              <div className="text-sm text-gray-500 font-alegreya">
                                {testimonial.reviews}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-lime flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-alegreya font-bold text-white text-sm">
                            {testimonial.name}
                          </div>
                          <div className="font-alegreya text-xs text-gray-400">
                            {testimonial.reviews}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
