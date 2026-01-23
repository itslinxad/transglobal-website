import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-16 md:py-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <i className="fas fa-award text-primary mr-2"></i>
              <span className="text-primary font-semibold text-sm">25+ Years of Excellence</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Your Trusted
              <span className="block text-primary mt-2">Global Logistics</span>
              <span className="block text-secondary mt-2">Partner</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Comprehensive freight forwarding, moving, and storage solutions connecting the Philippines to the world. 
              Experience reliability, expertise, and exceptional service with every shipment.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon="fa-envelope"
                className="shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              >
                Get a Free Quote
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                icon="fa-arrow-right"
                iconPosition="right"
              >
                Explore Services
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-gray-600">Shipments</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5K+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual Content */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Card - Services Showcase */}
            <div className="relative w-full max-w-lg">
              
              {/* Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl transform rotate-3 shadow-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Core Services
                </h3>
                
                <div className="space-y-4">
                  {/* Service Item 1 */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-plane text-white text-xl"></i>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Air & Sea Freight</div>
                      <div className="text-sm text-gray-600">Fast global shipping</div>
                    </div>
                    <i className="fas fa-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                  
                  {/* Service Item 2 */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-truck-moving text-white text-xl"></i>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Moving & Storage</div>
                      <div className="text-sm text-gray-600">Relocation experts</div>
                    </div>
                    <i className="fas fa-arrow-right text-secondary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                  
                  {/* Service Item 3 */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-file-invoice text-white text-xl"></i>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Customs Clearance</div>
                      <div className="text-sm text-gray-600">Expert brokerage</div>
                    </div>
                    <i className="fas fa-arrow-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                  
                  {/* Service Item 4 */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-warehouse text-white text-xl"></i>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Warehousing</div>
                      <div className="text-sm text-gray-600">Secure facilities</div>
                    </div>
                    <i className="fas fa-arrow-right text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </div>
                
                {/* View All Link */}
                <div className="mt-6 text-center">
                  <Button to="/services" variant="ghost" size="sm" icon="fa-th" className="text-primary hover:text-primary-dark">
                    View All 17 Services
                  </Button>
                </div>
              </div>
              
              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
              
              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-6 py-3 rounded-full shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs">Countries</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
