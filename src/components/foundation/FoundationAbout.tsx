import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, TrendingUp, Target, Lightbulb, BookOpen} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function FoundationAbout() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/gobischolars-website/assets/about.svg"
            alt="About GobiScholars Foundation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white flex flex-col justify-between h-full pt-28 pb-20">
          <h1 className="serif text-white mb-0" style={{ fontSize: 'clamp(3rem, 4vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            ABOUT US
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto mb-0" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            @ Gobischolars NGO, we push each other, we grow together, that's where the real impact is.
          </p>
        </div>
      </section>

      {/* Mission Intro Section */}
      <section className="py-32 px-8 lg:px-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-0.5 bg-[#c4151c] mx-auto mb-6" />
          <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600 }}>
            Our Mission
          </h2>
          <p className="text-black" style={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 400 }}>
            <br/>Providing world-class educational opportunities, facilitating meaningful discussions, and<br/>
            turning ideas into impactful initiatives for the future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-20">
            <div className="w-16 h-0.5 bg-[#c4151c] mx-auto mb-10" />
            <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>
              About GobiScholars NGO
            </h2>
            <p className="text-gray-600" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
              A nonprofit organization reimagining education in Mongolia
            </p>
          </div>

          {/* Two Column Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <ImageWithFallback
                src="/gobischolars-website/assets/about2.svg"
                alt="GobiScholars Team"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="serif text-black mb-4" style={{ fontSize: '2.1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Our Story
                </h3>
                <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                  Founded with a vision to transform educational opportunities in Mongolia, GobiScholars Foundation emerged from a simple belief: that investing in exceptional students creates ripple effects that transform entire communities and nations.
                </p>
              </div>

              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                We recognized that Mongolia's greatest resource is its young people—bright, ambitious students who dream of making a difference but often lack access to world-class educational opportunities. Our foundation exists to bridge that gap.
              </p>

              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                As a registered nonprofit organization, we are committed to transparency, accountability, and measurable impact in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.1rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Persistence */}
            <div className="bg-white border border-gray-100 p-10 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#c4151c]" size={24} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                PERSISTENCE
              </h4>
              <p className="text-gray-600" style={{ fontSize: '0.7rem', lineHeight: 1.8 }}>
                We pursue our passions, goals, and dreams persistently.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white border border-gray-100 p-10 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#c4151c]" size={24} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                COMMUNITY
              </h4>
              <p className="text-gray-600" style={{ fontSize: '0.7rem', lineHeight: 1.8 }}>
                We support and uplift each other to achieve collective success.
              </p>
            </div>

            {/* Support */}
            <div className="bg-white border border-gray-100 p-10 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#c4151c]" size={24} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                SUPPORT
              </h4>
              <p className="text-gray-600" style={{ fontSize: '0.7rem', lineHeight: 1.8 }}>
                We provide comprehensive support to help students succeed.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white border border-gray-100 p-10 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-[#c4151c]" size={24} />
              </div>
              <h4 className="serif text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                IMPACT
              </h4>
              <p className="text-gray-600" style={{ fontSize: '0.7rem', lineHeight: 1.8 }}>
                We measure and maximize our impact on students and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Scholars Section */}
      <section className="py-32 px-8 lg:px-16 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-0.5 bg-[#c4151c] mx-auto mb-6" />
          <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
            The 12 Scholars
          </h2>
          <p className="text-gray-600 mb-16" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
            Each year, we select 12 exceptional students to receive
            comprehensive support through their educational journey.
          </p>
<br/>
          {/* Top Images */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <img src="/gobischolars-website/assets/about12scholar.svg" alt="Scholars Group 1" className="w-full h-80 object-cover rounded" />
            <img src="/gobischolars-website/assets/about12scholar1.svg" alt="Scholars Group 2" className="w-full h-80 object-cover rounded" />
          </div>
          

          {/* Scholar Cards */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div className="border border-gray-200 p-6 text-left">
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center mb-4 rounded"></div>
              <img src="/gobischolars-website/assets/about12scholar.svg" alt="Scholars Group 1" className="w-full h-80 object-cover rounded" />
              <p className="text-black font-semibold">Scholar 1</p>
              <p className="text-gray-600 text-sm">University Name</p>
              <p className="text-[#c4151c] text-sm font-semibold mt-1">Class of 2024</p>
            </div>

            <div className="border border-gray-200 p-6 text-left">
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center mb-4 rounded"></div>
              <img src="/gobischolars-website/assets/about12scholar.svg" alt="Scholars Group 1" className="w-full h-80 object-cover rounded" />
              <p className="text-black font-semibold">Scholar 2</p>
              <p className="text-gray-600 text-sm">University Name</p>
              <p className="text-[#c4151c] text-sm font-semibold mt-1">Class of 2024</p>
            </div>

            <div className="border border-gray-200 p-6 text-left">
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center mb-4 rounded"></div>
              <img src="/gobischolars-website/assets/about12scholar.svg" alt="Scholars Group 1" className="w-full h-80 object-cover rounded" />
              <p className="text-black font-semibold">Scholar 3</p>
              <p className="text-gray-600 text-sm">University Name</p>
              <p className="text-[#c4151c] text-sm font-semibold mt-1">Class of 2024</p>
            </div>

            <div className="border border-gray-200 p-6 text-left">
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center mb-4 rounded"></div>
              <img src="/gobischolars-website/assets/about12scholar.svg" alt="Scholars Group 1" className="w-full h-80 object-cover rounded" />
              <p className="text-black font-semibold">Scholar 4</p>
              <p className="text-gray-600 text-sm">University Name</p>
              <p className="text-[#c4151c] text-sm font-semibold mt-1">Class of 2024</p>
            </div>
          </div> */}

          {/* <button
            onClick={() => navigate('/foundation/scholars')}
            className="inline-flex items-center gap-2 px-10 py-3 border border-[#c4151c] text-[#c4151c] hover:border-gray-300 hover:text-gray-300 transition-all rounded-2xl mx-auto"
            style={{ fontSize: '0.9rem', fontWeight: 500 }}
          >
            View All Scholars
            <span>→</span>
          </button> */}
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-32 px-8 lg:px-16 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="w-16 h-0.5 bg-[#c4151c] mx-auto mb-6" />
          <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 600 }}>
            Future Vision
          </h2>
          <p className="text-gray-600 mb-20" style={{ fontSize: '0.95rem' }}>
            Establish the world's most innovative and influential educational ecosystematic community.
          </p>

          {/* Large image */}
          <div className="max-w-4xl mx-auto mt-8 mb-12">
            <ImageWithFallback
              src="/gobischolars-website/assets/about_future.svg"
              alt="Future vision"
              className="w-full h-72 object-cover rounded"
            />
          </div>

          {/* Three feature cards */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-8 text-left hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-md bg-[#fff] border border-[#c4151c] flex items-center justify-center text-[#c4151c] mb-4">
                <BookOpen size={20} />
              </div>
              <h4 className="serif text-black mb-2" style={{ fontSize: '1.35rem', fontWeight: 600 }}>
                Research & Think Tank
              </h4>
              <div className="w-16 h-0.5 bg-[#c4151c] mx-left mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                Conducting rigorous research <br/>
                on educational reform, policy <br/>
                development,and best practices <br/>
                to inform national education strategy.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 text-left hover:shadow-lg transition-all relative">
              <div className="absolute top-6 bg-[#c4151c] text-white text-xs px-3 py-1 rounded z-30" style={{ right: '24px' }}>COMING SOON</div>
              <div className="w-12 h-12 rounded-md bg-[#fff] border border-[#c4151c] flex items-center justify-center text-[#c4151c] mb-4">
                <Lightbulb size={20} />
              </div>
              <h4 className="serif text-black mb-2" style={{ fontSize: '1.35rem', fontWeight: 600 }}>
                Education Forum
              </h4>
              <div className="w-16 h-0.5 bg-[#c4151c] mx-left mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                Launching the Mongolia Education <br/>
                Forum to convene educators, policymakers,<br/>
                and thought leaders for annual dialogue <br/>
                on the future of education.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 text-left hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-md bg-[#fff] border border-[#c4151c] flex items-center justify-center text-[#c4151c] mb-4">
                <Users size={20} />
              </div>
              <h4 className="serif text-black mb-2" style={{ fontSize: '1.35rem', fontWeight: 600 }}>
                Alumni Network
              </h4>
              <div className="w-16 h-0.5 bg-[#c4151c] mx-left mb-6" />
              <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                Building a lifelong community of <br/>
                scholars who support each other <br/>
                and give back to Mongolia through <br/>
                mentorship and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16"> */}
            {/* Mission */}
            {/* <div>
              <h3 className="serif text-black mb-6" style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                To identify, support, and empower Mongolia's most promising students to access world-class education, enabling them to become transformative leaders who will strengthen Mongolia's future.
              </p>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                We provide comprehensive scholarships, mentorship, and educational resources to ensure that financial barriers never prevent exceptional talent from achieving its potential.
              </p>
            </div> */}

            {/* Vision */}
            {/* <div>
              <h3 className="serif text-black mb-6" style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Our Vision
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                A Mongolia where every talented student has the opportunity to access world-class education, regardless of their financial circumstances.
              </p>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
                We envision a thriving network of GobiScholars alumni who are leaders across sectors, contributing their knowledge, skills, and passion to Mongolia's development.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      {/* Impact Stats - Quick Overview */}
      <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-[#c4151c] mx-auto mb-6" />

          <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2.3rem, 4vw, 3rem)', fontWeight: 600 }}>
            Our Impact
          </h2>
          <p className="text-gray-600 mb-16" style={{ fontSize: '0.95rem' }}>
            We're just beginning, but our commitment to excellence is unwavering
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mb-24">
            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#c4151c', fontWeight: 500 }}>$90K+</div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>In Scholarships Awarded</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#c4151c', fontWeight: 500 }}>12%</div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Acceptance Rate</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#c4151c', fontWeight: 500 }}>12+</div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Countries Represented</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#c4151c', fontWeight: 500 }}>18</div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Fields of Study</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#c4151c', fontWeight: 500 }}>2,000+</div>
              <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>Mentorship Hours</p>
            </div>

            <div>
              <div className="serif mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#c4151c', fontWeight: 500 }}>95.8%</div>
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


      {/* Team Section */}
      {/* <section className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            Meet the dedicated individuals working to transform educational opportunities in Mongolia.
          </p>
          
          <button
            onClick={() => navigate('/foundation/team')}
            className="inline-block px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
            style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
          >
            Meet Our Team
          </button>
        </div>
      </section> */}

{/* </section> */}

      {/* Leadership Team Section */}
      <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-[#c4151c] mx-auto mb-6" />
              <h2 className="serif text-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 600 }}>
              Leadership Team
              </h2>
                <p className="text-gray-400 mb-16" style={{ fontSize: '0.95rem' }}>
                  Our foundation is guided by experienced leaders committed to <br/>
                  educational transformation
                </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="w-full">
              <ImageWithFallback
                src="/gobischolars-website/assets/about_team.svg"
                alt="Leadership group"
                className="w-full h-[360px] object-cover rounded"
              />
            </div>

            <div className="text-gray-700" style={{ fontSize: '0.98rem', lineHeight: 1.9 }}>
              <p className="mb-4">
                Our board and leadership team brings together expertise from education, business, policy, and philanthropy. Together, we ensure that every decision advances our mission of reimagining education in Mongolia.
              </p>

              <p>
                We are guided by a deep commitment to transparency, accountability, and measurable impact. Our governance structure ensures that every donated dollar is used effectively to support our scholars and advance educational reform.
              </p>
            </div>
          </div>

          {/* Leadership Cards */}
          {/* <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-6 text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zM3 21a9 9 0 1118 0H3z" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h5 className="text-black font-bold">Board Chair</h5>
              <p className="text-gray-600 text-sm">Former Education Minister<br/>Leading strategic direction and policy advocacy</p>
            </div>

            <div className="bg-white border border-gray-100 p-6 text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zM3 21a9 9 0 1118 0H3z" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h5 className="text-black font-semibold">Executive Director</h5>
              <p className="text-gray-600 text-sm">Education Innovation Expert<br/>Overseeing programs and operations</p>
            </div>

            <div className="bg-white border border-gray-100 p-6 text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zM3 21a9 9 0 1118 0H3z" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h5 className="text-black font-semibold">Program Director</h5>
              <p className="text-gray-600 text-sm">Scholar Support Specialist<br/>Managing scholar selection and support</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Get Involved Section */}
      {/* <section className="py-24 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-[#c4151c] mx-auto mb-6" />
          <h2 className="serif text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.4rem)', fontWeight: 600 }}>
            Get Involved
          </h2>
          <p className="text-gray-500 mb-16" style={{ fontSize: '0.95rem' }}>
            Join us in reimagining education for Mongolia through partnership, support, and collaboration
          </p><br/>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-100 p-8 text-left hover:shadow-md transition-all">
              <Heart className="text-[#c4151c] flex items-center mb-4 mx-auto" size={34} />
              <h4 className="serif text-black mb-2 text-center" style={{ fontWeight: 600 }}>Support a Scholar</h4>
              <p className="text-gray-600 text-sm text-center">Make a direct impact by sponsoring a student's education</p>
              <div className="text-center mt-4"><a href="#" className="text-[#c4151c] text-sm inline-flex items-center gap-2">Learn More <span>→</span></a></div>
            </div>

            <div className="bg-white border border-gray-100 p-8 text-left hover:shadow-md transition-all">
              <Users className="text-[#c4151c] flex items-center mb-4 mx-auto" size={34} />
              <h4 className="serif text-black mb-2 text-center" style={{ fontWeight: 600 }}>Partner With Us</h4>
              <p className="text-gray-600 text-sm text-center">Collaborate on programs and initiatives</p>
              <div className="text-center mt-4"><a href="#" className="text-[#c4151c] text-sm inline-flex items-center gap-2">Get in Touch <span>→</span></a></div>
            </div>

            <div className="bg-white border border-gray-100 p-8 text-left hover:shadow-md transition-all">
              <Lightbulb className="text-[#c4151c] flex items-center mb-4 mx-auto" size={34} />
              <h4 className="serif text-black mb-2 text-center" style={{ fontWeight: 600 }}>Join Our Network</h4>
              <p className="text-gray-600 text-sm text-center">Become a mentor or advisor to our scholars</p>
              <div className="text-center mt-4"><a href="#" className="text-[#c4151c] text-sm inline-flex items-center gap-2">Connect <span>→</span></a></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}x

      {/* CTA Section */}
      {/* <section className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif text-black mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
            Join our <span style={{ fontStyle: 'italic' }}>mission</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-12" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            Whether through donations, partnerships, or volunteering, there are many ways to support our work.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/foundation/donate')}
              className="px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
              style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Donate
            </button>
            <button
              onClick={() => navigate('/foundation/volunteer')}
              className="px-12 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#c4151c] hover:text-[#c4151c] transition-all rounded-lg"
              style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Volunteer
            </button>
            <button
              onClick={() => navigate('/foundation/partnerships')}
              className="px-12 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#c4151c] hover:text-[#c4151c] transition-all rounded-lg"
              style={{ fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section> */}


    </div>
  );
}
