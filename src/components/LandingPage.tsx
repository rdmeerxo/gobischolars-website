import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, GraduationCap, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Bold Typography */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Mongolia Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#c4151c]/70" />
        </div>

        {/* Top Bar Info */}
        <div className="absolute top-0 left-0 right-0 px-8 lg:px-16 py-8 flex items-start justify-between text-white/80 z-10">
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 300 }}>
              Founded 2024
            </p>
            <p className="serif" style={{ fontSize: '0.85rem', letterSpacing: '0.02em', fontWeight: 400, marginTop: '4px' }}>
              GobiScholars Initiative
            </p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 300 }}>
              Ulaanbaatar
            </p>
            <p className="serif" style={{ fontSize: '0.85rem', letterSpacing: '0.02em', fontWeight: 400, marginTop: '4px' }}>
              Mongolia
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
          {/* Large Bold Title */}
          <div className="mb-16">
            <h1 
              className="serif text-white uppercase leading-none mb-6" 
              style={{ 
                fontSize: 'clamp(4rem, 15vw, 12rem)', 
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 0.9
              }}
            >
              GOBI
              <br />
              SCHOLARS
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="w-16 h-0.5 bg-white/60" />
              <p style={{ fontSize: '1.1rem', letterSpacing: '0.05em', fontWeight: 300 }}>
                Reimagining Education for Mongolia
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 300 }}>SCROLL TO EXPLORE</p>
            <div className="w-0.5 h-16 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Diagonal Cut Section */}
      <section className="relative bg-white">
        {/* Diagonal Image Section */}
        <div className="relative">
          <div 
            className="relative h-[70vh] overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1652305500057-0fcb348b62aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Education" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            
            {/* Text Overlay */}
            <div className="absolute bottom-20 left-8 lg:left-16 right-8 lg:right-16">
              <h2 className="serif text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 600, lineHeight: 1.1 }}>
                Two Organizations,
                <br />
                One Mission
              </h2>
              <p className="text-white/90 max-w-2xl" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
                Transforming education through scholarship, research, and comprehensive support for Mongolia's brightest students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section - Organizations */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Foundation */}
            <div 
              className="group cursor-pointer"
              onClick={() => navigate('/foundation')}
            >
              <div className="mb-8 overflow-hidden aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Foundation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm">
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 500 }}>NON-PROFIT</p>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#c4151c] to-[#a01117] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="serif mb-2" style={{ fontSize: '2.5rem', fontWeight: 600, lineHeight: 1 }}>Foundation</h3>
                  <div className="w-12 h-0.5 bg-[#c4151c]" />
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                A non-profit dedicated to scholarships, educational research, and fostering Mongolia's next generation of leaders.
              </p>

              <div className="flex items-center gap-2 text-[#c4151c] group-hover:gap-4 transition-all" style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                <span>EXPLORE FOUNDATION</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Academy */}
            <div 
              className="group cursor-pointer"
              onClick={() => navigate('/academy')}
            >
              <div className="mb-8 overflow-hidden aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Academy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm">
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 500 }}>LLC</p>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#c4151c] to-[#a01117] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="serif mb-2" style={{ fontSize: '2.5rem', fontWeight: 600, lineHeight: 1 }}>Academy</h3>
                  <div className="w-12 h-0.5 bg-[#c4151c]" />
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                Premium programs and consulting services for students pursuing excellence in international education.
              </p>

              <div className="flex items-center gap-2 text-[#c4151c] group-hover:gap-4 transition-all" style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                <span>EXPLORE ACADEMY</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Bold Numbers */}
      <section className="py-32 bg-gradient-to-b from-[#F8F8F8] to-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <Sparkles className="text-[#c4151c]" size={24} />
              <p className="text-gray-600" style={{ fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 500 }}>
                OUR IMPACT
              </p>
              <Sparkles className="text-[#c4151c]" size={24} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <h2 className="serif mb-4" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 1, color: '#c4151c' }}>
                24
              </h2>
              <p className="text-gray-700" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', fontWeight: 300 }}>
                Scholars Supported
              </p>
            </div>
            <div className="text-center">
              <h2 className="serif mb-4" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 1, color: '#c4151c' }}>
                100%
              </h2>
              <p className="text-gray-700" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', fontWeight: 300 }}>
                University Acceptance
              </p>
            </div>
            <div className="text-center">
              <h2 className="serif mb-4" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 1, color: '#c4151c' }}>
                ∞
              </h2>
              <p className="text-gray-700" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', fontWeight: 300 }}>
                Potential for Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c4151c] to-[#a01117]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 transform rotate-45" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/10 transform rotate-12" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-16 text-center text-white">
          <h2 className="serif mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 600, lineHeight: 1.1 }}>
            Ready to Transform
            <br />
            Education in Mongolia?
          </h2>
          
          <p className="text-white/90 max-w-2xl mx-auto mb-12" style={{ fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 300 }}>
            Join us in our mission to reimagine education through scholarship, research, and comprehensive support.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/foundation')}
              className="px-10 py-5 bg-white text-[#c4151c] hover:bg-white/90 transition-all rounded-lg group"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              <span className="flex items-center gap-2">
                Foundation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => navigate('/academy')}
              className="px-10 py-5 border-2 border-white text-white hover:bg-white/10 transition-all rounded-lg group"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              <span className="flex items-center gap-2">
                Academy
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
