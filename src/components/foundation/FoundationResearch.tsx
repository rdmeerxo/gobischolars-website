import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lightbulb, TrendingUp, Users, FileText, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function FoundationResearch() {
  const publications = [
    {
      title: 'The State of Education in Modern Mongolia: Challenges and Opportunities',
      date: 'March 2024',
      type: 'Research Paper',
      authors: 'GobiScholars Research Team',
      slug: 'state-of-education-mongolia'
    },
    {
      title: 'Comparative Analysis: Educational Systems in East Asia',
      date: 'January 2024',
      type: 'Policy Brief',
      authors: 'Dr. Scholar Name',
      slug: 'education-systems-east-asia'
    },
    {
      title: 'Building Excellence: A Framework for Educational Reform',
      date: 'November 2023',
      type: 'White Paper',
      authors: 'Foundation Advisory Board',
      slug: 'framework-educational-reform'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="/src/assets/research.svg"
                  alt="Researcn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />
              
              <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white flex flex-col items-center gap-6">
      
                <p className="text-white/90 max-w-2xl mx-auto mb-8" style={{ fontSize: '0.8rem', lineHeight: 1.8, fontWeight: 300, textShadow: '0 0 8px rgba(0,0,0,0.7)' }}>
                  RESEARCH & THOUGHT LEADERSHIP
                </p>
      
                <h1
                  className="serif text-white"
                  style={{
                    fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    textShadow: '0 0 8px rgba(0,0,0,0.2)'
                  }}
                >
                  Advancing Educational<br />
                  Excellence <br />
                  Through Research
                </h1>
                
                <p className="text-white/90 max-w-2xl mx-auto mt-4 mb-8" style={{ fontSize: '0.8rem', lineHeight: 1.8, fontWeight: 300, textShadow: '0 0 8px rgba(0,0,0,0.7)' }}>
                  Our think tank conducts rigorous research on educational policy, best practices, and <br />
                  systemic reform to inform decision-making and drive meaningful change in Mongolia's education system.
                </p>
              </div>
            </section>

      {/* Research Focus Areas */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
            <h2 className="serif text-black mb-6">Focus Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our research explores critical questions shaping the future of education in Mongolia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
              <BookOpen className="text-[#c4151c] mb-6" size={40} />
              <h4 className="serif text-black mb-4">Curriculum Development</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Analyzing and proposing modern curriculum frameworks that balance global standards with Mongolian cultural identity.
              </p>
            </div>

            <div className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
              <Users className="text-[#c4151c] mb-6" size={40} />
              <h4 className="serif text-black mb-4">Teacher Training</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Researching effective professional development models to elevate teaching quality nationwide.
              </p>
            </div>

            <div className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
              <TrendingUp className="text-[#c4151c] mb-6" size={40} />
              <h4 className="serif text-black mb-4">Access & Equity</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Studying barriers to educational access and developing strategies for inclusive excellence.
              </p>
            </div>

            <div className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
              <Lightbulb className="text-[#c4151c] mb-6" size={40} />
              <h4 className="serif text-black mb-4">Innovation in Learning</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Exploring emerging pedagogical approaches and educational technologies for 21st-century learners.
              </p>
            </div>

            <div className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
              <FileText className="text-[#c4151c] mb-6" size={40} />
              <h4 className="serif text-black mb-4">Policy Analysis</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Evaluating current education policies and proposing evidence-based reforms at national and local levels.
              </p>
            </div>

            <div className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
              <TrendingUp className="text-[#c4151c] mb-6" size={40} />
              <h4 className="serif text-black mb-4">International Benchmarking</h4>
              <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Comparing Mongolia's education system with international best practices and adapting successful models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white border border-gray-200 hover:border-[#c4151c] transition-colors">
                <div className="p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="px-3 py-1 bg-[#c4151c] text-white" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                          {pub.type}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: '0.85rem' }}>
                          <Calendar size={14} />
                          <span>{pub.date}</span>
                        </div>
                      </div>
                      <h4 className="serif text-black mb-2">{pub.title}</h4>
                      <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
                        By {pub.authors}
                      </p>
                    </div>
                    <Link to={`/publications/${pub.slug}`} className="text-[#c4151c] hover:underline whitespace-nowrap" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                      Read Paper →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/foundation/publications" className="inline-block border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-colors rounded-lg" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
              View All Publications
            </Link>
          </div>
        </div>
      </section> */}

      {/* Mongolia Education Forum */}
      {/* <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#c4151c] text-white mb-6" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                COMING SOON
              </div>
              <h2 className="serif text-black mb-6">Mongolia Education Forum</h2>
              <div className="w-16 h-[2px] bg-[#c4151c] mb-8" />
              <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                An annual convening of educators, policymakers, researchers, and thought leaders to discuss the future of education in Mongolia. The forum will feature keynote addresses, panel discussions, workshops, and collaborative sessions focused on actionable solutions.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#c4151c] rounded-full mt-2" />
                  <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Keynote speakers from leading universities and organizations worldwide
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#c4151c] rounded-full mt-2" />
                  <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Panel discussions on policy, innovation, and systemic reform
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#c4151c] rounded-full mt-2" />
                  <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Workshops and collaborative sessions for practitioners
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#c4151c] rounded-full mt-2" />
                  <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Networking opportunities with education leaders
                  </p>
                </div>
              </div>
              <button className="border-2 border-gray-300 text-gray-600 px-10 py-4 cursor-not-allowed rounded-lg" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                Registration Opens 2025
              </button>
            </div>
            <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center">
              <Users className="text-gray-400" size={64} />
            </div>
          </div>
        </div>
      </section> */}

      {/* Research Partnerships */}
      {/* <section className="py-32 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
          <h2 className="serif text-black mb-6">Research Partnerships</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            We collaborate with leading institutions, researchers, and organizations to advance educational excellence
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8">
              <div className="w-full aspect-video bg-gray-200 mb-4 flex items-center justify-center">
                <BookOpen className="text-gray-400" size={40} />
              </div>
              <h5 className="serif text-black">Research Institution</h5>
            </div>
            <div className="p-8">
              <div className="w-full aspect-video bg-gray-200 mb-4 flex items-center justify-center">
                <BookOpen className="text-gray-400" size={40} />
              </div>
              <h5 className="serif text-black">University Partner</h5>
            </div>
            <div className="p-8">
              <div className="w-full aspect-video bg-gray-200 mb-4 flex items-center justify-center">
                <BookOpen className="text-gray-400" size={40} />
              </div>
              <h5 className="serif text-black">Think Tank</h5>
            </div>
          </div>

          <Link to="/foundation/partnerships" className="inline-block border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-colors rounded-lg" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
            Partner With Us
          </Link>
        </div>
      </section> */}
    </div>
  );
}