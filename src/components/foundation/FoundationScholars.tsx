import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, MapPin, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export default function FoundationScholars() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const years = ['2026','2025'];

  const scholars = [
    {
      id: 'GS-2025-01',
      name: 'T. Tansagmergen',
      university: 'IE University',
      major: 'International Business, Trade, and Tax Law',
      year: '2025',
      location: 'Madrid, Spain',
      bio: 'Focused on education policy and social equity, Anu aims to improve access to quality education for rural communities in Mongolia.',
      image: 'assets/scholars/GS-2025-01.svg',
    },
    {
      id: 'GS-2025-02',
      name: 'A. Enkh-Orchlon',
      university: 'BME University',
      major: 'Engineering',
      year: '2025',
      location: 'Budapest, Hungary',
      bio: 'Temuulen is passionate about using AI and data systems to modernize public services and educational infrastructure.',
      image: 'assets/scholars/GS-2025-02.svg',
    },
    {
      id: 'GS-2025-03',
      name: 'A. Enkh-Orchlon',
      university: 'National University of Mongolia',
      major: 'Psychology',
      year: '2025',
      location: 'Ulaanbaatar, Mongolia',
      bio: 'An aspiring educator researching inclusive learning models for underserved student populations.',
      image: 'assets/scholars/GS-2025-03.svg',
    },
    {
      id: 'GS-2025-04',
      name: 'A. Goomaral',
      university: 'Gap Year',
      major: '-',
      year: '2025',
      location: 'Ulaanbaatar, Mongolia',
      bio: 'Interested in development economics and long-term strategies for sustainable national growth.',
      image: 'assets/scholars/GS-2025-04.svg',
    },
    {
      id: 'GS-2025-05',
      name: 'U. Mungunzul',
      university: 'National University of Mongolia',
      major: 'Public Relations',
      year: '2025',
      location: 'Ulaanbaatar, Mongolia',
      bio: 'Solongo studies social systems and inequality with the goal of shaping data-driven public policy.',
      image: 'assets/scholars/GS-2025-05.svg',
    },
    {
      id: 'GS-2025-06',
      name: 'B. Khulan',
      university: 'University of Sydney',
      major: 'Biochemistry | Molecular Biology | Data Science',
      year: '2025',
      location: 'Sydney, Australia',
      bio: 'Researching adolescent mental health and student well-being in academic environments.',
      image: 'assets/scholars/GS-2025-06.svg',
    },
    {
      id: 'GS-2025-07',
      name: 'Kh. Ryenchinsonom',
      university: 'Mongolian University of Science and Technology Engineering ',
      major: 'Engineering',
      year: '2025',
      location: 'Ulaanbaatar, Mongolia',
      bio: 'Driven to build scalable hardware and energy solutions for developing regions.',
      image: 'assets/scholars/GS-2025-07.svg',
    },
    // {
    //   id: 'GS-2025-08',
    //   name: 'Erkhembayar Davaajargal',
    //   university: 'University of Tokyo',
    //   major: 'International Relations',
    //   year: '2025',
    //   location: 'Tokyo, Japan',
    //   bio: 'Focused on diplomacy, regional cooperation, and Mongolia’s role in East Asia.',
    //   image: 'assets/scholars/GS-2025-08.svg',
    // },
    // {
    //   id: 'GS-2025-09',
    //   name: 'Tungalag Saruul',
    //   university: 'King’s College London',
    //   major: 'Law',
    //   year: '2025',
    //   location: 'London, UK',
    //   bio: 'Aspires to strengthen legal institutions and promote transparency through policy reform.',
    //   image: 'assets/scholars/GS-2025-09.svg',
    // },
    // {
    //   id: 'GS-2025-10',
    //   name: 'Ariunbold Khishigjargal',
    //   university: 'University of California, Berkeley',
    //   major: 'Environmental Science',
    //   year: '2025',
    //   location: 'California, USA',
    //   bio: 'Working on climate resilience and sustainable resource management initiatives.',
    //   image: 'assets/scholars/GS-2025-10.svg',
    // },
    // {
    //   id: 'GS-2025-11',
    //   name: 'Delgermaa Enkh-Amgalan',
    //   university: 'ETH Zurich',
    //   major: 'Architecture',
    //   year: '2025',
    //   location: 'Zurich, Switzerland',
    //   bio: 'Exploring sustainable urban design and resilient city planning.',
    //   image: 'assets/scholars/GS-2025-11.svg',
    // },
    // {
    //   id: 'GS-2025-12',
    //   name: 'Khulanbayar Otgon',
    //   university: 'Peking University',
    //   major: 'Education Technology',
    //   year: '2025',
    //   location: 'Beijing, China',
    //   bio: 'Developing digital learning platforms to bridge educational gaps across regions.',
    //   image: 'assets/scholars/GS-2025-12.svg',
    // },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="assets/12scholars.svg"
            alt="About GobiScholars Foundation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20" />
        <div className="relative min-h-screen flex flex-col justify-end pb-32 md:pb-48 lg:pb-64">
          <div className="text-center text-white flex flex-col items-center gap-6 px-4">
            <h1 className="serif mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
              Mongolia's Future<br />Leaders & Changemakers
            </h1>
            
            <p className="max-w-2xl mx-auto mb-8" style={{ fontSize: '0.8rem', lineHeight: 1.8, fontWeight: 300 }}>
              Join Gobischolars' Summer Internship Program in Mongolia and make a 
              <br />lasting impact while gaining teaching experience.
            </p>
          </div>
        </div>
      </section>

            {/* Cohort Stats */}
      <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Class of {selectedYear} Statistics</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="serif mb-3" style={{ fontSize: '3rem', color: '#c4151c' }}>12</div>
              <p className="text-gray-700" style={{ fontSize: '1rem' }}>Total Scholars</p>
            </div>
            <div className="text-center">
              <div className="serif mb-3" style={{ fontSize: '3rem', color: '#c4151c' }}>8</div>
              <p className="text-gray-700" style={{ fontSize: '1rem' }}>Countries Represented</p>
            </div>
            <div className="text-center">
              <div className="serif mb-3" style={{ fontSize: '3rem', color: '#c4151c' }}>15+</div>
              <p className="text-gray-700" style={{ fontSize: '1rem' }}>Fields of Study</p>
            </div>
            <div className="text-center">
              <div className="serif mb-3" style={{ fontSize: '3rem', color: '#c4151c' }}>100%</div>
              <p className="text-gray-700" style={{ fontSize: '1rem' }}>University Acceptance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center items-center gap-4">
            <label className="text-gray-700" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
              Select Year:
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-8 py-4 border-2 border-[#c4151c] bg-white text-[#c4151c] hover:bg-[#c4151c] hover:text-white transition-all rounded-lg min-w-[200px] justify-between"
                style={{ fontSize: '0.95rem', fontWeight: 500 }}
              >
                <span>Class of {selectedYear}</span>
                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-10 overflow-hidden">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-8 py-3 text-left hover:bg-gray-50 transition-colors ${
                        selectedYear === year ? 'bg-[#c4151c]/5 text-[#c4151c]' : 'text-gray-700'
                      }`}
                      style={{ fontSize: '0.95rem', fontWeight: selectedYear === year ? 500 : 400 }}
                    >
                      Class of {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scholars Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {scholars.map((scholar) => (
              <div key={scholar.id} className="border border-gray-200 hover:border-[#c4151c] transition-colors group">
                <div className="aspect-[3/4] overflow-hidden border-b border-gray-200 bg-gray-100">
                  <img
                    src={scholar.image}
                    alt={scholar.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h4 className="serif text-black mb-2">{scholar.name}</h4>
                  <div className="w-10 h-[1px] bg-[#c4151c] mb-4" />
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <BookOpen className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
                      <div>
                        <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>{scholar.university}</p>
                        <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>{scholar.major}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#c4151c] flex-shrink-0" size={16} />
                      <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>{scholar.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="text-[#c4151c] flex-shrink-0" size={16} />
                      <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>Class of {scholar.year}</p>
                    </div>
                  </div>

                  <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {scholar.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Scholar Voices</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-gray-200 p-10">
              <p className="text-gray-700 italic mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                "It is not just a 7 month long college prep, it is a lifelong found family and a home to return to. At gobi, you are both the the product and the manufacturer because the environment allows you and supports you to innovate, fail, and try again over and over."
              </p>
              <br/>
              <div className="flex items-center gap-4">
                <img
                  src="assets/scholars/testimonials/U-Undram.jpg"
                  alt="Undram"
                  className="w-5 h-5 rounded-full object-cover"
                />
                <div>
                  <p className="text-black" style={{ fontSize: '0.95rem', fontWeight: 500 }}>U. Undram</p>
                  <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>Class of 2025</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-10">
              <p className="text-gray-700 italic mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                "GobiScholar Foundation’s 12 Scholars Program gave me a community that genuinely cares. Through constant support from dedicated faculty and mentors, I gained confidence and a sense of belonging. Being surrounded by peers who uplift and challenge one another has both shaped my academic growth and fueled my dreams."
              </p>
              <br/>
              <div className="flex items-center gap-4">
                <img
                  src="assets/scholars/testimonials/Delgerjargal.jpg"
                  alt="Delgerjargal"
                  className="w-5 h-5 rounded-full object-cover"
                />
                <div>
                  <p className="text-black" style={{ fontSize: '0.95rem', fontWeight: 500 }}>G. Delgerjargal</p>
                  <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>Class of 2026</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-10">
              <p className="text-gray-700 italic mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                "The people I met and the memories we created at Gobi will always stay with me. The mentorship and inspiration I received helped me grow more confident in myself and in the path I want to pursue."
              </p>
              <br/>
              <div className="flex items-center gap-4">
                <img
                  src="assets/scholars/testimonials/U-Undram.jpg"
                  alt="Undram"
                  className="w-5 h-5 rounded-full object-cover"
                />
                <div>
                  <p className="text-black" style={{ fontSize: '0.95rem', fontWeight: 500 }}>E. Ekhjin</p>
                  <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>Class of 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-#F8F8F8">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="serif text-black mb-6">Support Our Scholars</h2>
          <p className="text-gray-600 mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            Your contribution directly impacts the lives of these exceptional students and the future of Mongolia
          </p>
          <br/>
          <Link 
            to="/foundation/donate"
            className="bg-#c4151c px-12 py-5 hover:bg-#a01117 transition-colors rounded-lg inline-block" 
            style={{ fontSize: '1rem', fontWeight: 500, color: 'white' }}
          >
            Make a Donation
          </Link>
        </div>
      </section>
    </div>
  );
}