import { Link } from 'react-router-dom';
import PageHeader from '../components/sections/PageHeader';
import Card from '../components/ui/Card';
import { getServicesByCategory } from '../data/services';

const Services = () => {
  const freightServices = getServicesByCategory('freight');
  const movingServices = getServicesByCategory('moving');

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive logistics solutions for all your shipping and moving needs"
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Freight Forwarding Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center mr-4">
                <i className="fas fa-ship text-xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Freight Forwarding & <span className="text-primary">Logistics</span>
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">
              International and domestic freight solutions including air, sea, customs clearance, and specialized cargo handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freightServices.map((service) => (
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
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-primary to-primary-dark h-1"></div>

      {/* Moving & Relocation Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center mr-4">
                <i className="fas fa-truck-moving text-xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Moving & <span className="text-secondary">Relocation Services</span>
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Professional moving, packing, storage, and specialized relocation services for residential, commercial, and industrial clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movingServices.map((service) => (
              <Link key={service.id} to={`/services/${service.slug}`}>
                <Card hover padding="lg" className="h-full">
                  <div className="text-center">
                    <div className="mb-4">
                      <i className={`fas ${service.icon} text-5xl text-secondary`}></i>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Our logistics experts are ready to help you find the perfect solution for your shipping or moving needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md bg-secondary text-white hover:bg-orange-600 transition-colors duration-200"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Us
              </Link>
              <a
                href="tel:+63XXXXXXXXX"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-200"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
