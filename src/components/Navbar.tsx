import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRightLeft, User, LogOut, BarChart3, BookOpen, Settings } from 'lucide-react';

interface NavbarProps {
  type: 'foundation' | 'academy';
}

export default function Navbar({ type }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      const diff = currentY - lastScrollY.current;

      // Ignore negative scroll and tiny jitter
      if (currentY < 0) return;

      // Scroll down -> hide nav (translate up)
      if (diff > 5 && currentY > 80) {
        setIsNavHidden(true);
      }
      // Scroll up -> show nav
      else if (diff < -5) {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFoundation = type === 'foundation';
  
  // Check if user is logged in (on dashboard or related routes)
  const isLoggedIn = !isFoundation && (
    location.pathname.startsWith('/academy/dashboard') ||
    location.pathname.startsWith('/academy/courses') ||
    location.pathname.startsWith('/academy/assignments') ||
    location.pathname.startsWith('/academy/submissions') ||
    location.pathname.startsWith('/academy/progress') ||
    location.pathname.startsWith('/academy/ai-counseling') ||
    location.pathname.startsWith('/academy/resources') ||
    location.pathname.startsWith('/academy/school-selection') ||
    location.pathname.startsWith('/academy/counseling') ||
    location.pathname.startsWith('/academy/settings')
  );
  
  // Hide navbar on dashboard pages
  if (isLoggedIn) {
    return null;
  }
  
  const toggleExperience = () => {
    const newPath = isFoundation ? '/academy' : '/foundation';
    navigate(newPath);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    navigate('/academy');
    setMobileMenuOpen(false);
  };

  // Mock user data
  const userName = "Sarah M.";

  const navItems = isFoundation
    ? [
        { name: 'About Us', path: '/foundation/about' },
        { name: 'Programs', path: '/foundation/programs' },
        { name: 'Scholars', path: '/foundation/scholars' },
        { name: 'Research', path: '/foundation/research' },
        { name: 'Team', path: '/foundation/team' },
      ]
    : isLoggedIn
    ? [
        { name: 'Dashboard', path: '/academy/dashboard', icon: BarChart3 },
        { name: 'My Courses', path: '/academy/courses', icon: BookOpen },
        { name: 'Progress', path: '/academy/progress', icon: BarChart3 },
        { name: 'Settings', path: '/academy/settings', icon: Settings },
      ]
    : [
        { name: 'Home', path: '/academy' },
        { name: 'About', path: '/academy/about' },
        { name: 'Programs', path: '/academy/programs' },
      ];

  const isLightFoundationPage =
    isFoundation && location.pathname.includes('research');

  const navClassName = isFoundation
    ? isLightFoundationPage
      ? 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black/60 to-black/20" text-white backdrop-blur-sm'
      : 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black/60 to-black/20" text-white backdrop-blur-sm'
    : 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black/60 to-black/20" text-white backdrop-blur-sm';

  return (
    <nav
      className={`${navClassName} transition-transform duration-300 font-serif`}
      style={{ transform: isNavHidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo (mobile only) */}
          <Link to={isFoundation ? '/foundation' : (isLoggedIn ? '/academy/dashboard' : '/academy')} className="flex items-center gap-4 group md:hidden">
            <div className="flex flex-col">
              <img
                src={isFoundation ? '/gobischolars-website/assets/GOBISCHOLARS_FOUNDATION.svg' : '/gobischolars-website/assets/GOBISCHOLARS_ACADEMY.svg'}
                alt="GobiScholars Logo"
                className="h-5 w-auto object-contain"
              />
              <span className="opacity-70" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', marginTop: '2px', fontWeight: 500 }}>
                {isFoundation ? 'NGO' : 'ACADEMY'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {isFoundation ? (
            <>
              {/* Left: foundation nav items */}
              <div className="hidden md:flex items-center gap-8 flex-1 justify-start">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-2 transition-all ${
                      isLightFoundationPage
                        ? (location.pathname === item.path
                            ? 'text-gray-900'
                            : 'text-gray-600 hover:text-gray-900')
                        : (location.pathname === item.path
                            ? 'text-white'
                            : 'text-white/70 hover:text-white')
                    }`}
                    style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.04em' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Center: brand wordmark */}
              <Link
                to="/foundation"
                className="hidden md:flex flex-col items-center flex-none"
              >
                <img
                  src="/gobischolars-website/assets/GOBISCHOLARS_FOUNDATION.svg"
                  alt="GobiScholars Foundation Logo"
                  className="h-5 w-auto object-contain"
                />
              </Link>

              {/* Right: donate, apply, switch to academy */}
              <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
                {/* <Link
                  to="/foundation/donate"
                  className={isLightFoundationPage
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'}
                  style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em' }}
                >
                  Donate
                </Link> */}

                <a
                href="https://form.jotform.com/253413116819455"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2.5 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-2xl inline-flex items-center justify-center"
                style={{ fontSize: '0.85rem', fontWeight: 500 }}
                >
                  Apply Now
                </a>

                <button
                  onClick={toggleExperience}
                  className={
                    isLightFoundationPage
                      ? 'px-6 py-2.5 bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 transition-all flex items-center gap-2 rounded-2xl'
                      : 'px-6 py-2.5 bg-white/10 text-white/90 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2 rounded-2xl'
                  }
                  style={{ fontSize: '0.8rem', fontWeight: 500 }}
                >
                  <ArrowRightLeft size={14} />
                  <span>Academy</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="hidden md:flex items-center gap-8 flex-1 justify-start">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-2 transition-all ${
                      location.pathname === item.path ? 'text-gray-900' : 
                      'text-gray-600 hover:text-gray-900'
                    }`}
                    style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.01em' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Center: brand wordmark for academy */}
              <Link
                to="/academy"
                className="hidden md:flex flex-col items-center flex-none"
              >
                <img
                  src="/gobischolars-website/assets/GOBISCHOLARS_ACADEMY.svg"
                  alt="GobiScholars Academy Logo"
                  className="h-5 w-auto object-contain"
                />
              </Link>

              {/* Right: academy actions */}
              <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
                {/* Academy: Logged In State */}
                {isLoggedIn && (
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <div className="w-8 h-8 bg-white rounded-2xl flex items-center justify-center">
                        <User size={18} className="text-[#c4151c]" />
                      </div>
                      <span className="text-white" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
                        {userName}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all rounded-md"
                      style={{ fontSize: '0.85rem', fontWeight: 500 }}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}

                {/* Academy: Logged Out State (Login & Apply Now) */}
                {!isLoggedIn && (
                  <div className="flex items-center gap-6">
                    {/* <button
                      onClick={() => navigate('/academy/login')}
                      className="px-8 py-3.5 text-white hover:text-gray-900 transition-colors rounded-md"
                      style={{ fontSize: '0.9rem', fontWeight: 500 }}
                    >
                      Login
                    </button> */}
                    <button
                      onClick={() => navigate('/academy/programs')}
                        className="px-8 py-2.5 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-2xl"
                    style={{ fontSize: '0.85rem', fontWeight: 500 }}
                    >
                      Apply Now
                    </button>
                  </div>
                )}

                {/* Experience Switcher - Modern (academy side)*/}
                {!isLoggedIn && (
                  <button
                    onClick={toggleExperience}
                    className="px-6 py-2.5 bg-white/10 text-white/90 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2 rounded-2xl"
                    style={{ fontSize: '0.8rem', fontWeight: 500 }}
                  >
                    <ArrowRightLeft size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                    <span>Foundation</span>
                  </button>
                )}
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isFoundation && !isLightFoundationPage
                ? 'text-white hover:bg-white/10'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-gray-100">
            <div className="flex flex-col gap-6">
              {/* Logged In User Profile (Mobile) */}
              {!isFoundation && isLoggedIn && (
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-md mb-4">
                  <div className="w-10 h-10 bg-[#c4151c] rounded-2xl flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      {userName}
                    </p>
                    <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>
                      Student
                    </p>
                  </div>
                </div>
              )}

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    location.pathname === item.path ? 'text-[#c4151c]' : 'text-gray-600'
                  }`}
                  style={{ fontSize: '1.1rem', fontWeight: 500 }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Foundation Mobile: Donate */}
              {isFoundation && (
                <Link
                  to="/foundation/donate"
                  className="mt-6 px-8 py-4 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white transition-all text-center rounded-md block"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  Donate
                </Link>
              )}

              {/* Academy Mobile: Logged Out (Login & Apply) */}
              {!isFoundation && !isLoggedIn && (
                <div className="flex flex-col gap-4 mt-6">
                  {/* <button
                    onClick={() => { navigate('/academy/login'); setMobileMenuOpen(false); }}
                    className="px-8 py-4 border-2 border-gray-200 text-white transition-all text-center rounded-md"
                    style={{ fontSize: '1rem', fontWeight: 500 }}
                  >
                    Login
                  </button> */}
                  <button
                    onClick={() => { navigate('/academy/programs'); setMobileMenuOpen(false); }}
                    className="px-8 py-4 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white transition-all text-center rounded-2xl"
                    style={{ fontSize: '1rem', fontWeight: 500 }}
                  >
                    Apply Now
                  </button>
                </div>
              )}

              {/* Academy Mobile: Logged In (Logout) */}
              {!isFoundation && isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="mt-6 px-8 py-4 border-2 border-[#c4151c] text-[#c4151c] hover:bg-[#c4151c] hover:text-white transition-all text-center rounded-md flex items-center justify-center gap-2"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              )}
              
              {!isLoggedIn && (
                <button
                  onClick={toggleExperience}
                  className="mt-6 px-8 py-4 border-2 border-gray-200 text-white transition-all text-center flex items-center justify-center gap-2 rounded-md"
                >
                  <ArrowRightLeft size={18} />
                  <span>Switch to {isFoundation ? 'Academy' : 'NGO'}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}