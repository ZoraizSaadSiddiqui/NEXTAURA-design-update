import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

export const metadata = {
  title: 'Contact Us - Savacy Technologies',
  description: 'Get in touch with Savacy Technologies. Let\'s discuss your project and how we can help bring your ideas to life.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}