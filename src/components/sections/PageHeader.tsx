interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path?: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {breadcrumb && (
            <nav className="mb-4 text-sm">
              <ol className="flex items-center justify-center space-x-2">
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && <i className="fas fa-chevron-right text-xs mx-2 text-gray-300"></i>}
                    {item.path ? (
                      <a href={item.path} className="text-gray-300 hover:text-white transition-colors">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 34.7C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
