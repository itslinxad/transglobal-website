import Button from '../ui/Button';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
}

const CTASection = ({
  title = "Ready to Ship with Confidence?",
  description = "Get in touch with our team today for a free consultation and quote. We're here to make your logistics simple and stress-free.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  variant = 'primary',
}: CTASectionProps) => {
  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-primary to-primary-dark' 
    : 'bg-gradient-to-r from-secondary to-orange-600';

  return (
    <section className={`py-16 md:py-20 ${bgClass} text-white`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to={buttonLink}
              variant="secondary"
              size="lg"
              icon="fa-envelope"
              className={variant === 'secondary' ? 'bg-primary hover:bg-primary-dark' : ''}
            >
              {buttonText}
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
              icon="fa-list"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
