import PageHeader from '../components/sections/PageHeader';
import Card from '../components/ui/Card';

const About = () => {
  const values = [
    {
      id: '1',
      icon: 'fa-handshake',
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency, building trust with every shipment.',
    },
    {
      id: '2',
      icon: 'fa-bullseye',
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from first contact to final delivery.',
    },
    {
      id: '3',
      icon: 'fa-users',
      title: 'Customer Focus',
      description: 'Our clients\' success is our success. We tailor solutions to meet your unique needs.',
    },
    {
      id: '4',
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'We embrace technology and new methods to provide efficient, modern logistics solutions.',
    },
  ];

  const coverage = [
    { region: 'Asia Pacific', countries: 'Philippines, China, Japan, South Korea, Singapore, Australia, and more' },
    { region: 'North America', countries: 'United States, Canada, Mexico' },
    { region: 'Europe', countries: 'UK, Germany, France, Netherlands, and major European markets' },
    { region: 'Middle East', countries: 'UAE, Saudi Arabia, Qatar, Bahrain' },
  ];

  return (
    <div>
      <PageHeader
        title="About Transglobal Movers INC."
        subtitle="Your trusted partner in global logistics for over 25 years"
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who <span className="text-primary">We Are</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Established in 1999, Transglobal Movers INC. has grown from a small freight forwarding company 
                  in the Philippines to a comprehensive global logistics provider serving clients worldwide. Our 
                  journey has been built on a foundation of reliability, expertise, and unwavering commitment to 
                  customer satisfaction.
                </p>
                <p>
                  With over 25 years of experience in international shipping, customs clearance, and relocation 
                  services, we understand the complexities and challenges of global logistics. Our team of 
                  dedicated professionals works tirelessly to ensure your cargo reaches its destination safely, 
                  on time, and within budget.
                </p>
                <p>
                  From air and sea freight to specialized moving services, we offer end-to-end logistics solutions 
                  tailored to your specific needs. Whether you're a business looking to expand globally or an 
                  individual relocating overseas, we have the expertise and network to make it happen seamlessly.
                </p>
              </div>
            </div>
            <div>
              <Card padding="lg" className="bg-gray-50">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">
                      <i className="fas fa-bullseye text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                      <p className="text-gray-600">
                        To provide world-class logistics solutions that enable our clients to succeed in the 
                        global marketplace through reliable service, innovative solutions, and unwavering dedication.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center">
                      <i className="fas fa-eye text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                      <p className="text-gray-600">
                        To be the most trusted and preferred logistics partner in the Philippines and beyond, 
                        recognized for excellence, innovation, and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.id} hover padding="lg" className="text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                    <i className={`fas ${value.icon} text-2xl`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-primary">We Do</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions for all your shipping and moving needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card padding="lg" className="border-l-4 border-primary">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-ship text-4xl text-primary"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Freight Forwarding & Logistics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete freight forwarding solutions including air freight, sea freight, NVOCC services, 
                    customs clearance, domestic forwarding, courier & distribution, and project cargo handling.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      International air and sea shipping
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Expert customs brokerage
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Nationwide distribution
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Specialized project cargo
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card padding="lg" className="border-l-4 border-secondary">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-truck-moving text-4xl text-secondary"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Moving & Relocation Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional moving and relocation services for residential, commercial, and industrial clients. 
                    From packing to delivery, we handle every detail with care.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Household and office relocations
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Industrial plant moving
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Secure warehousing & storage
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      Pet and vehicle shipping
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Global <span className="text-secondary">Coverage</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Based in the Philippines with a worldwide network of trusted partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coverage.map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <i className="fas fa-globe-americas text-3xl text-secondary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.region}</h3>
                    <p className="text-gray-200 text-sm">{item.countries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              <i className="fas fa-map-marker-alt text-secondary mr-2"></i>
              Headquarters: Metro Manila, Philippines
            </p>
            <p className="text-gray-200 max-w-2xl mx-auto">
              With our extensive network of partners and agents worldwide, we can handle your shipments 
              to virtually any destination. Our local expertise in the Philippines combined with our 
              international reach makes us your ideal logistics partner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
