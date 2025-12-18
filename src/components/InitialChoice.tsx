import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InitialChoice(): JSX.Element {
  const navigate = useNavigate();

  // Keep advanced/less-typed CSS properties off the TS type-check by assigning them after
  const verticalStyle: React.CSSProperties = { writingMode: 'vertical-lr' };
  // textOrientation isn't in React's CSSProperties in some TS versions, set it via `any` to avoid errors
  (verticalStyle as any).textOrientation = 'upright';

  return (<div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/index.svg"
          alt="Mongolia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#c4151c]/75" />
      </div>

      {/* Content  textOrientation: 'upright' }}*/}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-16 flex justify-center items-center">
        {/* Single row: Foundation - Mongolian (center) - Academy */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center gap-12 md:gap-20 py-16 md:py-24 mx-auto text-center w-full">

          {/* Left: Foundation (preserve all original text styles and content) */}
          <div className="hidden md:flex flex-1 flex justify-start md:justify-end order-2 md:order-none w-full md:w-auto px-4">
            <button
              onClick={() => navigate('/foundation')}
              className="group relative flex flex-col items-center max-w-xs transition-all hover:scale-105"
              type="button"
            >
              <h2 className="text-white mb-4 serif" style={{ fontSize: '2rem', fontWeight: 400, letterSpacing: '0.01em' }}>
                Gobischolars NGO
              </h2>
              <p className="text-white/80" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Non-profit organization providing scholarships and educational research for Mongolia's brightest students
              </p>
            </button>
          </div>

          {/* Center: vertical Mongolian text (dead center) */}
          <div className="flex-shrink-0 flex items-center justify-center order-1 md:order-none my-6 md:my-0">
            <div className="text-white" style={{ writingMode: 'vertical-lr' }}>
              <span style={{ fontSize: '3rem', letterSpacing: '0.5em', fontFamily: 'MongolianScript' }}>
                ᠭᠣᠪᠢ ᠰᠻᠣᠯᠠᠷᠰ
              </span>
            </div>
          </div>

          {/* Right: Academy (preserve all original text styles and content) */}
          <div className="hidden md:flex flex-1 flex justify-end md:justify-start order-3 md:order-none w-full md:w-auto px-4">
            <button
              onClick={() => navigate('/academy')}
              className="group relative flex flex-col items-center max-w-xs transition-all hover:scale-105"
              type="button"
            >
              <h2 className="text-white mb-4 serif whitespace-nowrap" style={{ fontSize: '2rem', fontWeight: 400, letterSpacing: '0.01em' }}>
                Gobischolars Academy LLC
              </h2>
              <p className="text-white/80" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Premium programs and consulting services for students pursuing international education excellence
              </p>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile bottom buttons: pinned bottom on small screens */}
      <div className="w-full md:hidden absolute left-0 right-0 bottom-4 px-4 flex justify-between z-20">
        <button
          onClick={() => navigate('/foundation')}
          type="button"
          className="text-white py-3 px-4 rounded-md max-w-[46%] text-left"
        >
          <div className="text-lg font-serif" style={{ fontWeight: 400 }}>Foundation</div>
          <div className="text-white/80 text-sm" style={{ lineHeight: 1.4 }}>
            Non-profit organization providing scholarships and educational research for Mongolia's brightest students
          </div>
        </button>
        <div className="h-24 w-0.5 bg-white/30 mt-12" />
        <button
          onClick={() => navigate('/academy')}
          type="button"
          className="text-white py-3 px-4 rounded-md max-w-[46%] text-right"
        >
          <div className="text-lg font-serif" style={{ fontWeight: 400 }}>Academy</div>
          <div className="text-white/80 text-sm" style={{ lineHeight: 1.4 }}>
            Premium programs and consulting services for students pursuing international education excellence
          </div>
        </button>
      </div>

        {/* Bottom Text */}
        <div className="text-white/60 mt-20 md:mt-10 flex justify-center w-full relative z-40 pb-24">
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 300 }}>
            SELECT YOUR EXPERIENCE
          </p>
        </div>
      </div>
  );
}
