import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Globe, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type CountUpProps = {
  end: number;
  duration?: number;
  startDelay?: number; // NEW
};

const CountUp = ({ end, duration = 2000, startDelay = 0 }: CountUpProps) => {
  const [value, setValue] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);

    const begin = () => {
      const step = () => {
        start += increment;
        if (start < end) {
          setValue(start);
          requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      };
      requestAnimationFrame(step);
    };

    // apply delay before starting animation
    setTimeout(begin, startDelay);
  }, [isVisible, end, duration, startDelay]);

  return (
    <span ref={ref}>
      {Math.floor(value)}
    </span>
  );
};

export default function FoundationHome() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen md:min-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/src/assets/ngo_home.svg"
            alt="GobiScholars Foundation Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white flex flex-col items-center gap-6">

          <p className="text-white/90 max-w-2xl mx-auto mb-8" style={{ fontSize: '0.8rem', lineHeight: 1.8, fontWeight: 300 }}>
            GOBISCHOLARS NGO
          </p>

          <h1 className="serif text-white mb-6" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
            Summer Internship<br />Program 2026
          </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto mt-4 mb-8" style={{fontSize: '0.8rem', lineHeight: 1.8, fontWeight: 650 }}>
            Join Gobischolars’ Summer Internship Program in Mongolia and make a 
            <br />lasting impact while gaining teaching experience.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://form.jotform.com/253413116819455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all rounded-2xl"
              style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Program Highlights*/}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left content */}
          <div className="pr-8 lg:pr-20">
            <div className="w-12 h-0.5 bg-[#c4151c] mb-6" />
            <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700 }}>
              Summer Internship 2026
            </h2>
            <p className="text-gray-700 max-w-xl mb-20" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              Join Gobischolars’ Summer Internship Program in Mongolia and make a lasting impact while gaining teaching and professional development experience.
            </p>

            <div className="space-y-6 mb-8 mt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none border border-[#c4151c] flex items-center justify-center text-[#c4151c]">
                  <Award size={20} />
                </div>
                <div>
                  <div className="serif" style={{ fontWeight: 800 }}>Professional Development</div>
                  <div className="text-gray-600" style={{ fontSize: '0.92rem' }}>Opportunity to engage in exclusive events and workshops led by industry leaders.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none border border-[#c4151c] flex items-center justify-center text-[#c4151c]">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="serif" style={{ fontWeight: 800 }}>Cultural Immersion</div>
                  <div className="text-gray-600" style={{ fontSize: '0.92rem' }}>Dive into Mongolia's heritage with workshops.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none border border-[#c4151c] flex items-center justify-center text-[#c4151c]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="serif" style={{ fontWeight: 800 }}>Adventure</div>
                  <div className="text-gray-600" style={{ fontSize: '0.92rem' }}>International conferences, internships, and study programs.</div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => navigate('/foundation/programs')}
                className="inline-block px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-[#c4151c] transition-all rounded-2xl"
                style={{ fontSize: '0.95rem', fontWeight: 500 }}
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full pl-0 md:pl-6 lg:pl-20">
            <ImageWithFallback
              src="/src/assets/ngo_high.svg"
              alt="Interns group"
              className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Building Futures Section */}
      <section className="py-20 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side */}
          <div>
            <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 400 }}>
              Building <span style={{ fontStyle: 'italic' }}>futures</span>
            </h2>
            <p className="text-gray-700 max-w-xl mb-6" style={{ fontSize: '0.95rem', fontWeight: 20,lineHeight: 1.8 }}>
              Our non-profit foundation provides comprehensive scholarships, 
              conducts educational research, and fosters the next generation of Mongolian 
              leaders through innovative programs.
            </p>
            <button
              onClick={() => navigate('/foundation/about')}
              className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
              style={{ fontSize: '0.9rem', fontWeight: 500 }}
            >
              <span>Learn more about us</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Side */}
          <div className="space-y-12">
            {/* 12 Scholars */}
            <div>
              <h3 className="serif text-black mb-2" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                12 Scholars Program
              </h3>
              <p className="text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 20, lineHeight: 1.7 }}>
                Full scholarships for Mongolia's most promising students, providing comprehensive support for
                international university admissions.
              </p>
              <button
                onClick={() => navigate('/foundation/programs')}
                className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
                style={{ fontSize: '0.9rem', fontWeight: 500 }}
              >
                <span>View scholarship program</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Research & Impact */}
            <div>
              <h3 className="serif text-black mb-2" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                Research & Impact
              </h3>
              <p className="text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 20, lineHeight: 1.7 }}>
                Educational research and publications advancing knowledge and policy in Mongolia's education sector.
              </p>
              <button
                onClick={() => navigate('/foundation/research')}
                className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-4 transition-all"
                style={{ fontSize: '0.9rem', fontWeight: 500 }}
              >
                <span>Explore research</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - Quick Overview */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-[#c4151c] mx-auto mb-6" />

          <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2.3rem, 4vw, 3rem)', fontWeight: 600 }}>
            Our Impact
          </h2>
          <p className="text-gray-600 mb-16" style={{ fontSize: '0.95rem' }}>
            We're just beginning, but our commitment to excellence is unwavering
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 mb-16 md:mb-24">
            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#c4151c', fontWeight: 500 }}>
                $<CountUp end={90} startDelay={0}/>k+ 
              </div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>In Scholarships Awarded</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#c4151c', fontWeight: 500 }}>
                <CountUp end={12} startDelay={400} />%
              </div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Acceptance Rate</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#c4151c', fontWeight: 500 }}>
                <CountUp end={12} startDelay={800} />+
              </div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Countries Represented</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#c4151c', fontWeight: 500 }}>
                <CountUp end={18} startDelay={1200} />
              </div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Fields of Study</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#c4151c', fontWeight: 500 }}>
                <CountUp end={2000} startDelay={1600} />+
              </div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Mentorship Hours</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#c4151c', fontWeight: 500 }}>
                <CountUp end={96} startDelay={2000} />%
              </div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Retention Rate</p>
            </div>
          </div>

          {/* Quote Box */}
          <div className="mx-auto max-w-3xl border border-gray-100 p-12 rounded-lg text-center">
            <p className="italic text-gray-500 mb-4" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="text-gray-400" style={{ fontSize: '0.9rem' }}>— Nelson Mandela</p>
          </div>
        </div>
      </section>

    
      {/* CTA Section - Simple */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3">
         <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em' }}>
            Ready to <span style={{ fontStyle: 'italic', letterSpacing: '-0.015em'}}>make</span> a difference?
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300}}>
            Support the next generation of Mongolian leaders through scholarships <br/>and educational programs.
          </p>

          <button
            onClick={() => navigate('/foundation/donate')}
            className="inline-block px-14 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-2xl shadow-md"
            style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '0.02em' }}
          >
            Get involved
          </button>
        </div>
      </section>
    </div>
  );
}
