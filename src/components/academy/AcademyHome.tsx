import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, Briefcase, Target, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import svgPaths from '../../imports/svg-m2wujhj7qg';

export default function AcademyHome() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="assets/academy_home.svg"
            alt="Modern Learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center text-white">
          <h1 className="serif text-white mb-6 sm:mb-10" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Premium Programs<br />for Future Leaders
          </h1>
          
          <p
            className="text-white/90 w-full max-w-none mx-auto mb-8 sm:mb-14 text-center flex justify-center"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', lineHeight: 1.8, fontWeight: 300 }}
          >
            <span className="block max-w-2xl">
              Expert consulting and comprehensive programs to help Mongolian students gain admission to world-class universities.
            </span>
          </p>
          <br/>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={() => navigate('/academy/programs')}
              className="inline-flex items-center justify-center gap-3 bg-[#c4151c] text-white px-8 sm:px-12 py-4 hover:bg-[#a01117] transition-all rounded-lg"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              View Programs
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/academy/about')}
              className="inline-block px-8 sm:px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all rounded-lg"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Our Services - Quick Grid */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-26 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="serif text-black mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              What We Offer
            </h2>
            <p className="text-gray-600 px-4" style={{ fontSize: '0.95rem' }}>
              Comprehensive services for international education success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 justify-center">
            {/* Educational Consulting */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-lg transition-all w-full max-w-md mx-auto">
              <div className="mb-6">
                <BookOpen className="text-[#c4151c]" size={40} />
              </div>
              <h3 className="serif text-black mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600 }}>
                Educational Consulting
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                Personalized guidance for university applications, essay writing, and academic planning.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
                style={{ fontSize: '0.9rem', fontWeight: 500 }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* School Tours */}
            {/* <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-lg transition-all">
              <div className="mb-6">
                <Globe className="text-[#c4151c]" size={40} />
              </div>
              <h3 className="serif text-black mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600 }}>
                International School Tours
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                Curated tours of top universities in the US, UK, and other leading education destinations.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
                style={{ fontSize: '0.9rem', fontWeight: 500 }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div> */}

            {/* Creative Agency */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1 w-full max-w-md mx-auto">
              <div className="mb-6">
                <Briefcase className="text-[#c4151c]" size={40} />
              </div>
              <h3 className="serif text-black mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600 }}>
                Creative Agency
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                Professional branding, content creation, and marketing for educational initiatives.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
                style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="serif text-black mb-6 px-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Why Choose GobiScholars Academy
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* <div className="text-center px-4">
              <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#c4151c]" size={32} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)', fontWeight: 600 }}>
                Proven Results
              </h4>
              <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                95% acceptance rate to top-choice universities with over $2M in scholarships awarded.
              </p>
            </div> */}

            <div className="text-center px-4">
              <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#c4151c]" size={32} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)', fontWeight: 600 }}>
                Expert Guidance
              </h4>
              <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                Learn from counselors who have successfully navigated the international application process.
              </p>
            </div>

            <div className="text-center px-4 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-[#c4151c]" size={32} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)', fontWeight: 600 }}>
                Personalized Support
              </h4>
              <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                Customized strategies and small class sizes ensure every student gets individual attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways to Excellence - Figma Import */}
      <section className="bg-neutral-50 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-['Crimson_Text',serif] text-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                  Pathways to <span className="italic">excellence</span>
                </h2>
                <p className="text-[#4a5565] mb-6 sm:mb-8" style={{ fontSize: 'clamp(0.9rem, 2vw, 0.98rem)', lineHeight: 1.8, fontWeight: 300 }}>
                  Premium programs and consulting services designed to help students achieve excellence in their pursuit of international education and career success.
                </p>
                <button
                  onClick={() => navigate('/academy/about')}
                  className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
                  style={{ fontSize: '0.89rem', fontWeight: 500 }}
                >
                  <span>Learn more about us</span>
                  <svg className="size-[17px]" fill="none" viewBox="0 0 17 17">
                    <path d="M3.50521 8.41246H13.3199" stroke="#C4151C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4021" />
                    <path d={svgPaths.p3480de00} stroke="#C4151C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4021" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 sm:space-y-12">
              {/* Semester Programs */}
              <div>
                <h3 className="font-['Crimson_Text',serif] text-black mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Semester Programs
                </h3>
                <p className="text-[#4a5565] mb-4" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.89rem)', lineHeight: 1.8, fontWeight: 300 }}>
                  Intensive semester-long programs that build academic excellence and prepare students for competitive university applications.
                </p>
                <button
                  onClick={() => navigate('/academy/programs')}
                  className="text-[#364153] hover:text-[#c4151c] transition-colors underline decoration-solid"
                  style={{ fontSize: '0.84rem', fontWeight: 500 }}
                >
                  View programs
                </button>
              </div>

              {/* Consulting Services */}
              <div>
                <h3 className="font-['Crimson_Text',serif] text-black mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Consulting Services
                </h3>
                <p className="text-[#4a5565] mb-4" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.89rem)', lineHeight: 1.8, fontWeight: 300 }}>
                  One-on-one support for application strategy, essay development, and interview preparation from experienced counselors.
                </p>
                <button
                  onClick={() => navigate('/academy/programs')}
                  className="text-[#364153] hover:text-[#c4151c] transition-colors underline decoration-solid"
                  style={{ fontSize: '0.84rem', fontWeight: 500 }}
                >
                  Learn about consulting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      {/* <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif text-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Our Programs
            </h2>
            <p className="text-gray-600 mb-16" style={{ fontSize: '0.95rem' }}>
              Comprehensive learning experiences designed for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-100 p-8 hover:shadow-xl transition-all bg-white">
              <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Fall Scholars
              </h4>
              <p className="text-gray-600 mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Intensive semester-long program focused on university preparation.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="text-[#c4151c] hover:underline"
                style={{ fontSize: '0.85rem', fontWeight: 500 }}
              >
                Learn More →
              </button>
            </div>

            <div className="border border-gray-100 p-8 hover:shadow-xl transition-all bg-white">
              <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Winter Scholars
              </h4>
              <p className="text-gray-600 mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Winter break program with academic enrichment and workshops.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="text-[#c4151c] hover:underline"
                style={{ fontSize: '0.85rem', fontWeight: 500 }}
              >
                Learn More →
              </button>
            </div>

            <div className="border border-gray-100 p-8 hover:shadow-xl transition-all bg-white">
              <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Bootcamp
              </h4>
              <p className="text-gray-600 mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Intensive 2-week programs for essay writing and test prep.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="text-[#c4151c] hover:underline"
                style={{ fontSize: '0.85rem', fontWeight: 500 }}
              >
                Learn More →
              </button>
            </div>

            <div className="border border-gray-100 p-8 hover:shadow-xl transition-all bg-white">
              <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                12 Scholars Support
              </h4>
              <p className="text-gray-600 mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Premium consulting for Foundation scholars.
              </p>
              <button
                onClick={() => navigate('/academy/programs')}
                className="text-[#c4151c] hover:underline"
                style={{ fontSize: '0.85rem', fontWeight: 500 }}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 400, lineHeight: 1.1 }}>
            Ready to start your journey?
          </h2>
          
          <p className="text-gray-600 mb-16" style={{ fontSize: '0.95rem' }}>
            Join hundreds of successful students who have achieved their dream of studying at world-class universities.
          </p>
          <br/>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/academy/programs')}
              className="inline-block px-14 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              View Programs
            </button>
            {/* <button
              onClick={() => navigate('/academy/login')}
              className="inline-block px-14 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#c4151c] hover:text-[#c4151c] transition-all rounded-lg"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              Login
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}