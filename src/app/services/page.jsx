import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";


const services = {
  "web-development": {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    icon: "💻",
    highlight: "Transform your online presence",
  },
  "app-development": {
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
    highlight: "Reach users on any device",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "User-centered design that creates engaging digital experiences",
    icon: "🎨",
    highlight: "Create exceptional user journeys",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to grow your online presence",
    icon: "📈",
    highlight: "Grow your business exponentially",
  },
  "saas-development": {
    title: "SaaS Development",
    description: "Scalable software-as-a-service solutions",
    icon: "☁️",
    highlight: "Build scalable cloud solutions",
  },
  "seo-optimization": {
    title: "SEO Optimization",
    description: "Improve search engine rankings and drive organic traffic",
    icon: "🔍",
    highlight: "Dominate search results",
  },
  "dashboard-development": {
    title: "Dashboard Development",
    description: "Interactive dashboards for data visualization and analytics",
    icon: "📊",
    highlight: "Turn data into insights",
  },
  "health-dashboards": {
    title: "Health Dashboards",
    description:
      "Specialized health monitoring dashboards with HIPAA compliance",
    icon: "🏥",
    highlight: "Healthcare data solutions",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-20 pb-16 bg-[#1A2A4F] h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center ">
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and
              drive exponential growth
            </p>
            <Link
              href="/contact"
              className="bg-white  h-[48px] w-[180px] flex items-center justify-center  rounded-full font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(26,42,79,0.25)] hover:text-[#00C8FF] transition-all duration-300 ease-in-out"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Object.entries(services).map(([slug, service]) => (
              <Link 
                key={slug}
                href={`/services/${slug}`}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-700 text-sm font-semibold">
                      {service.highlight}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> 

       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

       <Footer />
    </main>
  );
}
