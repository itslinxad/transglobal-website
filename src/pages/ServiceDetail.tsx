import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/sections/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getServiceBySlug } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/services" replace />;
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const iconColor = service.category === 'freight' ? 'text-primary' : 'text-secondary';
  const accentColor = service.category === 'freight' ? 'bg-primary' : 'bg-secondary';

  return (
    <div>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <i className={`fas ${service.icon} text-7xl ${iconColor} mb-6`}></i>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our {service.title} Service
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                {service.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What's <span className={service.category === 'freight' ? 'text-primary' : 'text-secondary'}>Included</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <Card key={index} padding="md" className="flex items-start">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${accentColor} text-white flex items-center justify-center mr-4 mt-1`}>
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <p className="text-gray-700 flex-1">{feature}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It <span className={service.category === 'freight' ? 'text-primary' : 'text-secondary'}>Works</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <Card key={index} hover padding="lg" className="text-center relative">
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full ${accentColor} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Us for <span className={service.category === 'freight' ? 'text-primary' : 'text-secondary'}>{service.title}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <Card key={index} hover padding="lg" className="text-center">
                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${accentColor} text-white`}>
                      <i className={`fas ${benefit.icon} text-2xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 md:py-20 bg-gradient-to-r ${service.category === 'freight' ? 'from-primary to-primary-dark' : 'from-secondary to-orange-600'} text-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Contact us today for a free consultation and quote. Our team is ready to handle your logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/contact"
                variant={service.category === 'freight' ? 'secondary' : 'primary'}
                size="lg"
                icon="fa-envelope"
              >
                Get a Quote
              </Button>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-200"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
