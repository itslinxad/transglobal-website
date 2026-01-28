import PageHeader from "../components/sections/PageHeader";
import ContactForm from "../components/sections/ContactForm";
import Card from "../components/ui/Card";

const Contact = () => {
  const contactInfo = [
    {
      id: "1",
      icon: "fa-map-marker-alt",
      title: "Headquarters",
      details: [
        "Metro Manila, Philippines",
        "Serving nationwide and worldwide",
      ],
    },
    {
      id: "2",
      icon: "fa-envelope",
      title: "Email",
      details: [
        "rene.transglobal@gmail.com",
        "We reply within 24 hours, 7 days a week",
      ],
    },
    {
      id: "3",
      icon: "fa-phone",
      title: "Phone",
      details: ["+63 917 852 4276", "Mon - Fri: 8:00 AM - 6:00 PM"],
    },
    {
      id: "4",
      icon: "fa-clock",
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM"],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for quotes, inquiries, or support"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Send Us a <span className="text-primary">Message</span>
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you as
                    soon as possible.
                  </p>
                </div>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact <span className="text-primary">Information</span>
                </h3>
              </div>

              {contactInfo.map((info) => (
                <Card
                  key={info.id}
                  padding="md"
                  className="border-l-4 border-primary"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">
                      <i className={`fas ${info.icon} text-xl`}></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Additional Info */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <i className="fas fa-globe-asia text-6xl text-secondary mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving the Philippines & Beyond
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              With our headquarters in Metro Manila and a global network of
              partners, we provide logistics services throughout the Philippines
              and to over 50 countries worldwide. Whether you need domestic
              forwarding or international shipping, we're here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  Philippines
                </div>
                <div className="text-sm text-gray-300">Nationwide Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
