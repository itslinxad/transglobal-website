import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { services } from '../../data/services';

const ServicesGrid = () => {
  // Get 8 featured services (4 from each category)
  const featuredServices = [
    ...services.filter(s => s.category === 'freight').slice(0, 4),
    ...services.filter(s => s.category === 'moving').slice(0, 4),
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your needs, from freight forwarding to complete relocation services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => (
            <Link key={service.id} to={`/services/${service.slug}`}>
              <Card hover padding="lg" className="h-full">
                <div className="text-center">
                  <div className="mb-4">
                    <i className={`fas ${service.icon} text-5xl text-primary`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="text-secondary font-medium text-sm flex items-center justify-center">
                    Learn More <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors duration-200"
          >
            View All Services
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
