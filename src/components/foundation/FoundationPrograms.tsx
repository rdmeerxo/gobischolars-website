import React from 'react';
import { Award, BookOpen, Users, Globe, Target, Heart, Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, Plane } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function FoundationPrograms() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="assets/program_home page.svg"
            alt="GobiScholars Progams"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white flex flex-col md:justify-between justify-start h-full pt-28 pb-10 md:pb-20">
          <h1 className="serif text-white mb-0" style={{ fontSize: 'clamp(2rem, 3vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            PROGRAMS
          </h1>
        <p className="text-white/90 max-w-3xl mx-auto mb-2" style={{
          fontSize: '0.7rem',
          lineHeight: 1.8,
          fontWeight: 300,
          transform: 'translateY(-70px)'
        }}>
            Our programs are designed to identify, support, and nurture exceptional students <br/>
            who will become Mongolia's next generation of leaders, thinkers, and changemakers.
          </p>
        </div>
      </section>

        {/* Summer Internship Program */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <div className="inline-block mb-6">
              <div className="px-6 py-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 600 }}>
                NOW ACCEPTING APPLICATIONS
              </div>
            </div>
            <h2 className="serif text-black mb-6">Experience Mongolia:<br/>Summer Internship Program 2026</h2>
            <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              A transformative two-month opportunity for U.S. college students to teach, learn, and make an impact in Mongolia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="serif text-black mb-6">Gobischolars Summer<br/>Internship Program 2026</h3>
              <div className="space-y-4 text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                <br/>
                <p>
                  The GobiScholars Summer Internship Program is designed for U.S. college students passionate about teaching their favorite subjects to Mongolian high school students. This unique opportunity blends professional development, cultural immersion, and adventure.
                </p>
                <p>
                  Interns will collaborate with our dynamic entrepreneurial team, participate in hands-on projects, and receive guidance and networking opportunities with professionals in Mongolia. Whether exploring Mongolia's heritage, teaching impactful lessons, or engaging with local communities, participants will gain valuable skills while making a meaningful contribution.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l-4 border-[#c4151c] pl-6">
                  <Calendar className="text-[#c4151c] mb-3" size={28} />
                  <div className="text-gray-500 mb-1" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>DURATION</div>
                  <div className="serif text-black" style={{ fontSize: '1.3rem' }}>2 Months</div>
                  <p className="text-gray-600 mt-1" style={{ fontSize: '0.95rem' }}>June 10 - Aug 10</p>
                </div>

                <div className="border-l-4 border-[#c4151c] pl-6">
                  <MapPin className="text-[#c4151c] mb-3" size={28} />
                  <div className="text-gray-500 mb-1" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>LOCATION</div>
                  <div className="serif text-black" style={{ fontSize: '1.3rem' }}>Ulaanbaatar</div>
                  <p className="text-gray-600 mt-1" style={{ fontSize: '0.95rem' }}>Mongolia</p>
                </div>
              </div>

              <div className="mt-10 bg-[#c4151c]/5 border-l-4 border-[#c4151c] p-6">
                <div className="flex items-start gap-3">
                  <Plane className="text-[#c4151c] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <div className="text-black mb-2" style={{ fontWeight: 500 }}>Application Deadline: January 20, 2025</div>
                    <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Rolling admissions—apply early! We begin second-stage interviews on a rolling basis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="assets/Mongolia_landscape.svg"
                  alt="Mongolia landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="overflow-hidden aspect-square">
                  <ImageWithFallback
                    src="assets/Traditional_yurt.svg"
                    alt="Traditional yurt"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden aspect-square">
                  <ImageWithFallback
                    src="assets/Group_photo.svg"
                    alt="Group photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="mb-32">
            <h3 className="serif text-black text-center mb-16">What You'll Experience</h3>
            <br/>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white border border-gray-200 p-10">
                <Briefcase className="text-[#c4151c] mb-6" size={40} />
                <h4 className="serif text-black mb-4">Professional Development</h4>
                <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
                <ul className="space-y-3 text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Exclusive workshops with industry leaders</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Networking with local professionals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Career guidance and resume building</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Company visits and community engagement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-10">
                <Globe className="text-[#c4151c] mb-6" size={40} />
                <h4 className="serif text-black mb-4">Cultural Immersion</h4>
                <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
                <ul className="space-y-3 text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Mongolian language workshops</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Traditional script calligraphy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Naadam Festival experience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Culinary adventures and local cuisine</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-10">
                <Target className="text-[#c4151c] mb-6" size={40} />
                <h4 className="serif text-black mb-4">Adventure</h4>
                <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
                <ul className="space-y-3 text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Terelj National Park exploration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Horseback riding and hiking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Traditional yurt stay</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Stargazing and nature immersion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cultural Activities Highlights */}
          <div className="mb-24 p-2">
            <h3 className="serif text-black text-center mb-12">Cultural Highlights</h3>
            <br/>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6">
                <div className="overflow-hidden w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src="assets/P_1.svg"
                    alt="P_1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="serif text-black mb-2">Mongolian Script Calligraphy</h5>
                  <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    One-day workshop exploring traditional Mongolian script with a skilled calligrapher.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="overflow-hidden w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src="assets/P_2.svg"
                    alt="P_2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="serif text-black mb-2">Museums & Historical Sites</h5>
                  <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Visit the Chinggis Khaan Museum, Zaisan Memorial, and Tsonjin Boldog.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="overflow-hidden w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src="assets/P_3.svg"
                    alt="P_3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="serif text-black mb-2">Naadam Festival</h5>
                  <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Experience Mongolia's vibrant festival with horse racing, traditional games, and authentic cuisine.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="overflow-hidden w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src="assets/P_4.svg"
                    alt="P_4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="serif text-black mb-2">Countryside Experience</h5>
                  <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Visit a traditional family, learn culinary customs, and enjoy home-cooked meals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility & Application */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white border border-gray-200 p-10">
              <h3 className="serif text-black mb-8">Eligibility Criteria</h3>
              <br/>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <div className="text-black mb-1" style={{ fontWeight: 500 }}>Enrollment Status</div>
                    <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Current U.S. undergraduate student (sophomore, junior, or senior)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <div className="text-black mb-1" style={{ fontWeight: 500 }}>Academic Excellence</div>
                    <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Minimum GPA of 3.0 or higher (on a 4.0 scale)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <div className="text-black mb-1" style={{ fontWeight: 500 }}>Relevant Academic Background</div>
                    <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Must be majoring in the subject you intend to teach during the internship
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <div className="text-black mb-1" style={{ fontWeight: 500 }}>Commitment to Education</div>
                    <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Demonstrated enthusiasm for teaching and inspiring younger generations
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <div className="text-black mb-1" style={{ fontWeight: 500 }}>Financial Independence</div>
                    <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Unpaid internship; participants responsible for travel, accommodation, and living expenses
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#c4151c]/5 border-l-4 border-[#c4151c]">
                <p className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                  We encourage applicants to seek funding from their schools or universities. We're happy to provide letters of support to assist in securing funding.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#c4151c]/5 to-white border border-gray-200 p-10">
              <h3 className="serif text-black mb-8">Application Materials</h3>
              <br/>
              <div className="space-y-4 mb-8">
                <div className="pb-3 border-b border-gray-200">
                  <div className="text-black mb-1" style={{ fontWeight: 500 }}>1. Resume</div>
                  <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>Highlighting academic achievements and experience</p>
                </div>

                <div className="pb-3 border-b border-gray-200">
                  <div className="text-black mb-1" style={{ fontWeight: 500 }}>2. Motivation Letter</div>
                  <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>Explain your teaching subject and why you chose it</p>
                </div>

                <div className="pb-3 border-b border-gray-200">
                  <div className="text-black mb-1" style={{ fontWeight: 500 }}>3. Lesson Plan Draft</div>
                  <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>Outline key objectives and methods for 15-20 students</p>
                </div>

                <div className="pb-3 border-b border-gray-200">
                  <div className="text-black mb-1" style={{ fontWeight: 500 }}>4. Reference Information</div>
                  <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>One reference (professor or previous employer)</p>
                </div>

                <div className="pb-3 border-b border-gray-200">
                  <div className="text-black mb-1" style={{ fontWeight: 500 }}>5. Academic Transcript</div>
                  <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>Unofficial transcript (official required upon acceptance)</p>
                </div>

                <div className="pb-3">
                  <div className="text-black mb-1" style={{ fontWeight: 500 }}>6. Optional Materials</div>
                  <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>Portfolio, certificates, or relevant work samples</p>
                </div>
              </div>

              <div className="bg-white p-6 border border-gray-200">
                <h5 className="serif text-black mb-4">Available Positions</h5>
                <ul className="space-y-2 text-gray-600" style={{ fontSize: '0.9rem' }}>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Marketing & Business Development</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>English Writing & Essay Classes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>College Application Guidance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Computer Science & Technology</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c4151c]">•</span>
                    <span>Engineering & Environmental Studies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-[#F8F8F8] p-12 mb-20">
            <h3 className="serif text-black text-center mb-12">Important Information</h3>
            <br/>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div>
                <h5 className="text-black mb-4" style={{ fontWeight: 500 }}>Legal Consultation</h5>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  U.S. citizens can visit Mongolia without a visa for up to 90 days for tourism or short-term visits. If any legal issues arise, interns should contact the U.S. Embassy for assistance.
                </p>
              </div>

              <div>
                <h5 className="text-black mb-4" style={{ fontWeight: 500 }}>Insurance Guidelines</h5>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Most U.S.-based insurance does not cover services abroad. Interns should confirm their international coverage includes Mongolia or consider purchasing insurance from a Mongolian provider for the two-month stay.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white border border-gray-200 p-10">
            <h3 className="serif text-black mb-6">Ready to Experience Mongolia?</h3>
            
            <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Applications are reviewed on a rolling basis. Submit early to secure your spot for an <br/>
              unforgettable summer in Mongolia.
            </p>
            <br/>
            <a 
              href="/foundation/summer-internship-apply"
              className="inline-flex items-center gap-3 bg-[#c4151c] px-12 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-md"
              style={{ fontSize: '1.05rem', fontWeight: 500, color: 'white' }}>
              Apply Now
              <ArrowRight size={22} />
            </a>
            
            <p className="text-gray-500" style={{ fontSize: '0.95rem' }}>
              <br/>
              Questions? Email us at <span className="text-[#c4151c]">info@gobischolars.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Program - 12 Scholars */}
      <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-[2px] bg-[#c4151c] mb-8" />
              <h2 className="serif text-black mb-6">The 12 Scholars Program</h2>
              <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                Our flagship initiative, the 12 Scholars Program, provides comprehensive support to 12 exceptional Mongolian students each year. This highly competitive program covers tuition, living expenses, mentorship, and professional development.
              </p>
              <br/>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] flex items-center justify-center">
                    <Award className="text-[#c4151c]" size={24} />
                  </div>
                  <div>
                    <h5 className="serif text-black mb-2">Full Scholarship</h5>
                    <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                      Complete coverage of tuition, fees, and educational expenses
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] flex items-center justify-center">
                    <Users className="text-[#c4151c]" size={24} />
                  </div>
                  <div>
                    <h5 className="serif text-black mb-2">Mentorship Network</h5>
                    <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                      Access to accomplished professionals and academic advisors
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] flex items-center justify-center">
                    <Globe className="text-[#c4151c]" size={24} />
                  </div>
                  <div>
                    <h5 className="serif text-black mb-2">Global Opportunities</h5>
                    <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                      International conferences, internships, and study programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <ImageWithFallback
                    src="assets/about12scholar.svg"
                    alt="P_2"
                    className="w-full h-full object-cover"
                  />
                </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">
              Selection Criteria
            </h2>
            <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              We seek students who demonstrate exceptional promise across multiple dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-10">
              <Target className="text-[#c4151c] mb-6" size={36} />
              <h4 className="serif text-black mb-4">Academic Excellence</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Outstanding academic achievement with demonstrated intellectual curiosity and love of learning.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <Heart className="text-[#c4151c] mb-6" size={36} />
              <h4 className="serif text-black mb-4">Leadership Potential</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Evidence of leadership in school, community, or extracurricular activities with potential for future impact.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <Users className="text-[#c4151c] mb-6" size={36} />
              <h4 className="serif text-black mb-4">Character & Values</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Strong ethical foundation, resilience, and commitment to contributing to Mongolia's development.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <Globe className="text-[#c4151c] mb-6" size={36} />
              <h4 className="serif text-black mb-4">Global Perspective</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Understanding of global issues while maintaining deep connection to Mongolian culture and identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">What Our Scholars Receive</h2>
          </div>

          <div className="space-y-1">
            <div className="border-t border-gray-200 py-8 flex items-start gap-8">
              <div className="flex-shrink-0 text-[#c4151c] serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>01</div>
              <div>
                <h4 className="serif text-black mb-3">Financial Support</h4>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Full tuition coverage, living stipends, textbook allowances, and emergency funds to ensure scholars can focus entirely on their education.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 py-8 flex items-start gap-8">
              <div className="flex-shrink-0 text-[#c4151c] serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>02</div>
              <div>
                <h4 className="serif text-black mb-3">Academic Advising</h4>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Personalized guidance from experienced educators and professionals to help scholars navigate their academic journey and career planning.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 py-8 flex items-start gap-8">
              <div className="flex-shrink-0 text-[#c4151c] serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>03</div>
              <div>
                <h4 className="serif text-black mb-3">Professional Development</h4>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Workshops, seminars, and training sessions on leadership, communication, research skills, and professional etiquette.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 py-8 flex items-start gap-8">
              <div className="flex-shrink-0 text-[#c4151c] serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>04</div>
              <div>
                <h4 className="serif text-black mb-3">Community & Network</h4>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Lifelong membership in a community of accomplished scholars, alumni, and mentors who support each other's growth and success.
                </p>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-8 flex items-start gap-8">
              <div className="flex-shrink-0 text-[#c4151c] serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>05</div>
              <div>
                <h4 className="serif text-black mb-3">Research Opportunities</h4>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Access to research projects, academic conferences, and opportunities to contribute to Mongolia's educational discourse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Application Process</h2>
            <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              Our rigorous selection process ensures we identify the most promising scholars
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-[#c4151c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="serif text-[#c4151c]" style={{ fontSize: '1.5rem', fontWeight: 600 }}>1</span>
              </div>
              <h5 className="serif text-black mb-3">Application</h5>
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                Submit online application with transcripts and essays
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 border-2 border-[#c4151c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="serif text-[#c4151c]" style={{ fontSize: '1.5rem', fontWeight: 600 }}>2</span>
              </div>
              <h5 className="serif text-black mb-3">Review</h5>
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                Comprehensive review by selection committee
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 border-2 border-[#c4151c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="serif text-[#c4151c]" style={{ fontSize: '1.5rem', fontWeight: 600 }}>3</span>
              </div>
              <h5 className="serif text-black mb-3">Interview</h5>
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                In-depth interviews with finalists
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 border-2 border-[#c4151c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="serif text-[#c4151c]" style={{ fontSize: '1.5rem', fontWeight: 600 }}>4</span>
              </div>
              <h5 className="serif text-black mb-3">Selection</h5>
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                Final selection and award announcement
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-16">
            <div className="inline-block px-6 py-3 bg-[#c4151c] text-white rounded-md" style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              2025 APPLICATIONS OPEN IN SEPTEMBER
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}