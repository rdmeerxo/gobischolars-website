import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Users, Award, Globe, Heart, BookOpen, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
export default function FoundationTeam() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="assets/GobiScholars_team.svg"
                  alt="GobiScholars Academy Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 " />
              
              <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="serif text-white mb-8">
            Meet Our Team
          </h1>
          <p className="text-white max-w-3xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            A dedicated group of educators, professionals, and visionaries committed to empowering Mongolia's brightest students through scholarship and mentorship.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Board of Directors</h2>
            <p className="text-black" style={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 400 }}>
              Our board brings together decades of experience in education, policy, and international development
            </p>
          </div>

     <div className="grid md:grid-cols-3 gap-10 mb-16 justify-items-center">
            {/* Board Chair */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Users className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>BOARD CHAIR</div>
                <h4 className="serif text-black mb-2">B. Bayarjavkhlan </h4>
                {/* <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Former Education Minister</p> */}
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Co-Founder, Gobischolars NGO 
                </p>
                <div className="flex gap-3">
                  {/* <a href="mailto:board@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a> */}
                  <a href="https://www.linkedin.com/in/jack-bayanmunkh-074895184/" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Vice Chair */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Award className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>VICE CHAIR</div>
                <h4 className="serif text-black mb-2">O. Injinaash </h4>
                {/* <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>International Education Specialist</p> */}
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Founder & CEO, Gobischolars Academy
                </p>
                <div className="flex gap-3">
                  {/* <a href="mailto:board@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a> */}
                  <a href="https://www.linkedin.com/in/injinaash/" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* BM */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Globe className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>BOARD MEMBER</div>
                <h4 className="serif text-black mb-2">Kh. Norovsuren</h4>
                {/* <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Finance & Development</p> */}
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Program Coordinator, Gobischolars Academy
                </p>
                <div className="flex gap-3">
                  {/* <a href="mailto:board@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a> */}
                  <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Board Members */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <BookOpen className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>BOARD MEMBER</div>
                <h4 className="serif text-black mb-2">Prof. Odgerel</h4>
                {/* <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Academic Affairs</p> */}
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Professor & Head of Department of Hematology, School of Medicine, Mongolian National University of Medical Sciences (MNUMS)
                </p>
                {/* <div className="flex gap-3">
                  <a href="mailto:board@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div> */}
              </div>
            </div>

            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Heart className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>BOARD MEMBER</div>
                <h4 className="serif text-black mb-2">Ch. Jantsan</h4>
                {/* <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Cultural Programs</p> */}
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  CO-Founder of Tab Explore
                </p>
                <div className="flex gap-3">
                  {/* <a href="mailto:board@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a> */}
                  <a href="https://www.linkedin.com/in/jantsanch/" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      {/* <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Advisory Council</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              Distinguished advisors providing expertise across education, business, and social impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Dr. Narantsetseg Bold</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Education Research</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Professor, National University of Mongolia
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Thomas Anderson</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Corporate Partnerships</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Former CEO, International Development Corp
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Sarnai Dorjsuren</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Alumni Relations</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Founder, Mongolia Youth Leadership Network
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Dr. Elena Popov</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Global Engagement</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Director, UNESCO Asia-Pacific Office
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>David Kim</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Legal Affairs</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Partner, International Education Law Group
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Khulan Batmunkh</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Social Impact</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Director, Mongolia Community Foundation
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Rebecca Taylor</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Communications</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Former VP, Global Communications, Oxford
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-gray-400" size={36} />
              </div>
              <h5 className="serif text-black mb-2" style={{ fontSize: '1.1rem' }}>Ganbaatar Sukhee</h5>
              <p className="text-gray-500 mb-2" style={{ fontSize: '0.85rem' }}>Student Support</p>
              <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                Psychologist, Student Wellness Specialist
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Staff */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Core Team</h2>
            <p className="text-black" style={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 400 }}>
              Our dedicated staff working daily to support scholars and advance our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Users className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>EXECUTIVE DIRECTOR</div>
                <h4 className="serif text-black mb-2">O. Injinaash </h4>
                <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Leadership & Operations</p>
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Injinaash oversees all foundation operations, strategic planning, and stakeholder relations. 
                </p>
                <div className="flex gap-3">
                  <a href="mailto:info@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <BookOpen className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>DEVELOPMENT DIRECTOR</div>
                <h4 className="serif text-black mb-2">E. Erdemtugs</h4>
                <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Academic Program & Tech lead</p>
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Erdemtugs provides strategic guidance on digital learning tools and innovation in scholarship program delivery.
                </p>
                <div className="flex gap-3">
                  <a href="mailto:programs@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Heart className="text-gray-300" size={80} />
              </div>
              <div className="p-8">
                <div className="mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#c4151c' }}>PROGRAM DIRECTOR</div>
                <h4 className="serif text-black mb-2">Kh. Norovsuren</h4>
                <p className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>Program Coordinator</p>
                <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Norovsuren manages all scholar programs. She works closely with each scholar to ensure academic success and personal development throughout their educational journey.
                </p>
                <div className="flex gap-3">
                  <a href="mailto:development@gobischolars.com" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#c4151c] hover:text-[#c4151c] transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      {/* <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
          <h2 className="serif text-black mb-6">Join Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            We're always looking for passionate individuals who share our commitment to empowering Mongolia's brightest students. Explore opportunities to join our team or advisory council.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/foundation/careers"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              <Mail size={20} />
              Career Opportunities
            </Link>
            <a 
              href="mailto:volunteer@gobischolars.com"
              className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              <Heart size={20} />
              Volunteer With Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}