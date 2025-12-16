import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  type: 'foundation' | 'academy';
}

export default function Footer({ type }: FooterProps) {
  const isFoundation = type === 'foundation';
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Top Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 justify-items-center md:justify-items-start text-center md:text-left">
          {/* SITEMAP Column */}
          <div>
            <h6 className="mb-6 text-black " style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 600 }}>
              SITEMAP
            </h6>
            <br/>
            <ul className="space-y-3">
              <li>
                <Link 
                  to={isFoundation ? '/foundation' : '/academy'} 
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to={isFoundation ? '/foundation/about' : '/academy/about'} 
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to={isFoundation ? '/foundation/programs' : '/academy/programs'} 
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Programs
                </Link>
              </li>
              {isFoundation && (
                <>
                  <li>
                    <Link 
                      to="/foundation/scholars" 
                      className="text-black hover:text-[#c4151c] transition-colors" 
                      style={{ fontSize: '0.9rem', fontWeight: 400 }}
                    >
                      Scholars
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/foundation/research" 
                      className="text-black hover:text-[#c4151c] transition-colors" 
                      style={{ fontSize: '0.9rem', fontWeight: 400 }}
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/foundation/team" 
                      className="text-black hover:text-[#c4151c] transition-colors" 
                      style={{ fontSize: '0.9rem', fontWeight: 400 }}
                    >
                      Team
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h6 className="mb-6 text-black" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 600 }}>
              LEGAL
            </h6>
            <br/>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-black hover:text-[#c4151c] transition-colors"
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-black hover:text-[#c4151c] transition-colors"
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-black hover:text-[#c4151c] transition-colors"
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT Column */}
          <div>
            <h6 className="mb-6 text-black" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 600 }}>
              CONNECT
            </h6>
            <br/>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com/gobischolars/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.co/company/gobischolars/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@gobischolars.com" 
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="tel:+97680531163"
                  className="text-black hover:text-[#c4151c] transition-colors" 
                  style={{ fontSize: '0.9rem', fontWeight: 400 }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Email Newsletter Section */}
        <div className="mb-20 pb-16 ">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="serif text-black mb-3" style={{ fontSize: '1.9rem', fontWeight: 400, letterSpacing: '-0.01em' }}>
              Stay <span style={{ fontStyle: 'italic' }}>connected</span>
            </h3>
            <p className="text-gray-600 mb-8" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
              Subscribe to our newsletter for updates on programs, scholars, and educational insights.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
                style={{ fontSize: '0.9rem' }}
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#c4151c] text-white hover:bg-[#a01117] transition-colors flex items-center gap-2 group"
                style={{ fontSize: '0.9rem', fontWeight: 400 }}
              >
                {submitted ? (
                  'Subscribed!'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-9 pb-16">
          <div className="text-gray-600" style={{ fontSize: '0.95rem' }}>
            © {currentYear} Gobischolars {isFoundation ? 'NGO' : 'Academy'}
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/gobischolars" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#c4151c] hover:text-[#c4151c] transition-all"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/company/gobischolars/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#c4151c] hover:text-[#c4151c] transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:info@gobischolars.com" 
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-[#c4151c] hover:text-[#c4151c] transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Large Footer Wordmark */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none flex justify-center px-8 md:px-20"
        style={{ height: '130px' }}
      >
        <img
          src={
            isFoundation
              ? '/src/assets/GOBISCHOLARS_FOUNDATION_footer.svg'
              : '/src/assets/GOBISCHOLARS_ACADEMY_footer.svg'
          }
          alt=""
          aria-hidden="true"
          className="h-full w-auto opacity-10 object-contain"
        />
      </div>
    </footer>
  );
}
