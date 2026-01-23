import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const featuredServices = [
    { label: 'Air Freight', path: '/services/air-freight' },
    { label: 'Sea Freight', path: '/services/sea-freight' },
    { label: 'Customs Clearance', path: '/services/customs-clearance' },
    { label: 'Moving & Storage', path: '/services/moving-storage' },
    { label: 'Warehousing', path: '/services/warehousing' },
    { label: 'Door-to-Door', path: '/services/door-to-door' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo-mockup.png" 
                alt="Transglobal Movers INC." 
                className="h-12 w-auto mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for comprehensive freight forwarding, moving, and storage solutions worldwide.
            </p>
            <p className="text-sm">
              <i className="fas fa-map-marker-alt text-secondary mr-2"></i>
              Philippines • International Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-secondary transition-colors duration-200"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {featuredServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-secondary transition-colors duration-200"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <i className="fas fa-envelope text-secondary mr-3"></i>
                <a href="mailto:linuxadona17@gmail.com" className="hover:text-secondary transition-colors duration-200">
                  linuxadona17@gmail.com
                </a>
              </li>
              <li className="text-sm">
                <i className="fas fa-phone text-secondary mr-3"></i>
                <span>+63 XXX XXX XXXX</span>
              </li>
              <li className="text-sm">
                <i className="fas fa-clock text-secondary mr-3"></i>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
              <li className="text-sm">
                <i className="fas fa-globe text-secondary mr-3"></i>
                <span>Serving Philippines & Worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Transglobal Movers INC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">
                Built with <i className="fas fa-heart text-red-500 mx-1"></i> for global logistics
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
