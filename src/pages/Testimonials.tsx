import { Star, Quote, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import BackLink from '../components/BackLink';

const Testimonials = () => {
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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with Back Link */}
      <section className="bg-gradient-to-br from-brand-lightGray to-white py-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <div className="mb-8">
            <BackLink to="/" label="Back to Home" className="text-gray-600 hover:text-brand-pink" />
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-brand-pink" />
              <span className="font-alegreya text-brand-pink font-medium">Client Reviews</span>
            </div>
            <h1 className="font-gagalin text-4xl md:text-6xl text-brand-darkGray mb-6">
              What <span className="text-brand-lime">Clients</span> Say
            </h1>
            <p className="font-alegreya text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real clients who have experienced Lion Kidz Photography. 
              Their feedback and satisfaction are what drive us to deliver exceptional photography services.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-gagalin text-4xl text-brand-pink mb-2">500+</div>
              <div className="font-alegreya text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="font-gagalin text-4xl text-brand-lime mb-2">5.0</div>
              <div className="font-alegreya text-gray-600">Google Rating</div>
            </div>
            <div>
              <div className="font-gagalin text-4xl text-brand-pink mb-2">100%</div>
              <div className="font-alegreya text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="font-gagalin text-4xl text-brand-lime mb-2">5+</div>
              <div className="font-alegreya text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-brand-lightGray to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="h-8 w-8 text-brand-lime mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-lime text-brand-lime" />
                  ))}
                </div>
                
                <p className="font-alegreya text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-lime flex items-center justify-center">
                      <span className="font-alegreya font-bold text-white text-lg">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="font-alegreya font-bold text-brand-darkGray">
                        {testimonial.name}
                      </div>
                      <div className="font-alegreya text-sm text-gray-500">
                        {testimonial.reviews}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-gagalin text-4xl text-center text-brand-darkGray mb-12">
              Why Clients <span className="text-brand-pink">Choose</span> Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-brand-darkGray" />
                </div>
                <h3 className="font-gagalin text-xl text-brand-darkGray mb-4">
                  Exceptional Craftsmanship
                </h3>
                <p className="font-alegreya text-gray-600">
                  We excel in capturing both expansive landscapes and intimate moments 
                  with meticulous attention to detail and innovative approach.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-gagalin text-xl text-brand-darkGray mb-4">
                  Born for Photography
                </h3>
                <p className="font-alegreya text-gray-600">
                  Natural talent combined with professional experience delivers 
                  consistently outstanding results that exceed expectations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="h-10 w-10 text-brand-darkGray" />
                </div>
                <h3 className="font-gagalin text-xl text-brand-darkGray mb-4">
                  Unique Editing Style
                </h3>
                <p className="font-alegreya text-gray-600">
                  Our signature editing brings a special vibe to every photo, 
                  creating images that truly stand out and capture the moment perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-darkGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gagalin text-4xl text-white mb-6">
            Ready to Experience <span className="text-brand-lime">Exceptional</span> Photography?
          </h2>
          <p className="font-alegreya text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let's create stunning photos that you'll treasure forever. 
            Book your session today and discover the Lion Kidz Photography difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="/contact"
              className="bg-brand-pink text-white px-8 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
            >
              Book Your Session
            </NavLink>
            <NavLink
              to="/portfolio"
              className="bg-brand-lime text-brand-darkGray px-8 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
            >
              View Our Work
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
