import Card from '../ui/Card';

const whyChooseUs = [
  {
    id: '1',
    icon: 'fa-award',
    title: '25+ Years of Excellence',
    description: 'Over two decades of experience in international logistics and freight forwarding, serving thousands of satisfied clients worldwide.',
  },
  {
    id: '2',
    icon: 'fa-globe-asia',
    title: 'Global Network',
    description: 'Extensive worldwide network connecting the Philippines to over 50 countries with reliable partners at every destination.',
  },
  {
    id: '3',
    icon: 'fa-shield-alt',
    title: 'Trusted & Reliable',
    description: 'Licensed and insured operations with a proven track record of on-time deliveries and professional service excellence.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">Transglobal Movers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine experience, reliability, and customer service to deliver exceptional logistics solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <Card key={item.id} hover padding="lg" className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                  <i className={`fas ${item.icon} text-2xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
