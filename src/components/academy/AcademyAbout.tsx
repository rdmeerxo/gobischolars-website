import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Heart, GraduationCap, Target, Users, TrendingUp, Star, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function AcademyAbout() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/src/assets/About_GobiScholars.svg"
            alt="About GobiScholars Academy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
          {/* <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              About Us
            </span>
          </div> */}
          
          <h1 className="serif text-white mb-10" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            GOBISCHOLARS<br />ACADEMY
          </h1>
          
          <p className="text-white/90 max-w-3xl mx-auto mb-14" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            Premium educational consulting and programs helping Mongolian students achieve their dreams of international education.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#c4151c] to-transparent mx-auto mb-10" />
            <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>
              About GobiScholars Academy
            </h2>
            <p className="text-gray-600" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
              The premium consulting arm of the GobiScholars organization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="relative">
              <ImageWithFallback
                src="/src/assets/About_1.svg"
                alt="Academy Team"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="serif text-black mb-4" style={{ fontSize: '2.1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Our Mission
                </h3>
                <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                  GobiScholars Academy (LLC) is the consulting arm of the GobiScholars organization, offering premium application guidance and educational programs to Mongolian students pursuing international education.
                </p>
              </div>

              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                While the GobiScholars Foundation (NGO) provides full scholarships to 12 exceptional students annually, the Academy makes world-class consulting accessible to all students through paid programs and services.
              </p>
              <br/>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                Revenue from Academy programs directly supports Foundation operations, creating a sustainable model that expands our collective impact on Mongolian education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation vs Academy Comparison */}
      <section className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Foundation vs. Academy
            </h2>
            <p className="text-gray-600" style={{ fontSize: '0.95rem' }}>
              Two organizations, one mission: empowering Mongolian students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Foundation (NGO) */}
            <div className="bg-white p-12 border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-[#c4151c]" size={24} />
                </div>
                <h3 className="serif text-black" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Foundation (NGO)
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Full scholarships for 12 students annually
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    100% free for selected scholars
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Funded by donations and grants
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Focus on underprivileged students
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Educational research and advocacy
                  </span>
                </li>
              </ul>
            </div>

            {/* Academy (LLC) */}
            <div className="bg-white p-12 border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-[#c4151c]" size={24} />
                </div>
                <h3 className="serif text-black" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Academy (LLC)
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Premium programs open to all students
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Paid consulting and application support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Flexible programs and services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Revenue supports Foundation mission
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Future subscription-based online programs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      {/* <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Our Consulting Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-10 bg-gray-50 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#c4151c]" size={32} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                Personalized Strategy
              </h4>
              <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>
                Every student receives a customized application strategy based on their unique strengths and goals.
              </p>
            </div>

            <div className="text-center p-10 bg-gray-50 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#c4151c]" size={32} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                Expert Guidance
              </h4>
              <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>
                Learn from counselors who have successfully navigated international applications.
              </p>
            </div>

            <div className="text-center p-10 bg-gray-50 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-[#c4151c]" size={32} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                Proven Results
              </h4>
              <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>
                95% acceptance rate to top-choice universities with over $2M in scholarships awarded.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* What Makes Us Different */}
      <section className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center">
                    <Star className="text-[#c4151c]" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Mongolia-Focused Expertise
                  </h4>
                  <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                    We understand the unique challenges facing Mongolian students, from curriculum differences to cultural adaptation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center">
                    <Users className="text-[#c4151c]" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Personal Attention
                  </h4>
                  <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                    Small class sizes and individualized coaching ensure every student receives the support they need.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center">
                    <Globe className="text-[#c4151c]" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="serif text-black mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Global Network
                  </h4>
                  <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                    Access to our alumni network spanning top universities and companies around the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="/src/assets/Making_us_diff.svg"
                alt="Teaching and Mentorship"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif text-black mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
            Start your <span style={{ fontStyle: 'italic' }}>journey</span> today
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            Join hundreds of successful students who have achieved their dream of studying at world-class universities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/academy/programs')}
              className="px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
              style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              View Programs
            </button>
            <button
              onClick={() => navigate('/academy/login')}
              className="px-12 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#c4151c] hover:text-[#c4151c] transition-all rounded-lg"
              style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Login
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
