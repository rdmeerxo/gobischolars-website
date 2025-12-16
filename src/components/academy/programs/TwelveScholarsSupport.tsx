// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, DollarSign, Users, CheckCircle, Heart, Star, Award } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function TwelveScholarsSupport() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
//             alt="12 Scholars Support Program"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
//         <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
//           <button
//             onClick={() => navigate('/academy/programs')}
//             className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
//             style={{ fontSize: '0.9rem' }}
//           >
//             <ArrowLeft size={18} />
//             <span>Back to Programs</span>
//           </button>
          
//           <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-300 mb-6" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 500 }}>
//             FOR FOUNDATION SCHOLARS
//           </span>
          
//           <h1 className="serif text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
//             12 Scholars Support
//           </h1>
          
//           <p className="text-white/90 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             Premium paid consulting services exclusively for GobiScholars Foundation scholarship recipients who want additional personalized support.
//           </p>

//           <div className="flex flex-wrap gap-8 justify-center text-white/90" style={{ fontSize: '0.9rem' }}>
//             <div className="flex items-center gap-2">
//               <Clock size={18} />
//               <span>Flexible Duration</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar size={18} />
//               <span>Year-round Availability</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <DollarSign size={18} />
//               <span>Starting at $500</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Important Note */}
//       <section className="py-16 px-8 lg:px-16 bg-[#c4151c]">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Heart className="text-white" size={28} />
//             <h3 className="serif text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//               Important Information
//             </h3>
//           </div>
//           <p className="text-white/95" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             This program is <strong>exclusively for students</strong> who have already been accepted into the GobiScholars Foundation's 12 Scholars Program and receive full scholarships. The Foundation provides comprehensive free support—these are optional paid services for scholars who want additional intensive consulting.
//           </p>
//         </div>
//       </section>

//       {/* Program Overview */}
//       <section className="py-24 px-8 lg:px-16 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Program Overview
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//               While the Foundation provides all necessary support for successful university applications, some scholars choose to supplement with additional paid consulting for extra essay reviews, specialized test prep, or intensive interview practice.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Users className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Exclusive Access
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Only for Foundation scholars
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Star className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Premium Service
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Enhanced 1-on-1 support
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Award className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Optional Add-On
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Supplement foundation support
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Available */}
//       <section className="py-24 px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Available Services
//             </h2>
//             <p className="text-gray-600" style={{ fontSize: '0.95rem' }}>
//               À la carte options to supplement your Foundation support
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Additional Essay Reviews */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Additional Essay Reviews
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                 Beyond the comprehensive essay support included in your scholarship, get additional rounds of detailed feedback on your personal statement and supplemental essays.
//               </p>
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     Unlimited revision rounds
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     Line-by-line detailed feedback
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     48-hour turnaround time
//                   </span>
//                 </li>
//               </ul>
//               <div className="text-[#c4151c]" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                 $500 / package
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                 5 additional essay reviews
//               </p>
//             </div>

//             {/* Intensive Test Prep */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Intensive Test Prep
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                 Focused SAT/ACT or TOEFL/IELTS preparation with personalized study plans, practice materials, and strategy sessions beyond Foundation resources.
//               </p>
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     8 one-on-one tutoring sessions
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     Customized study plan
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     Practice test analysis
//                   </span>
//                 </li>
//               </ul>
//               <div className="text-[#c4151c]" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                 $800 / package
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                 4-week intensive program
//               </p>
//             </div>

//             {/* Interview Mastery */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Interview Mastery
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                 Advanced interview preparation with multiple mock interviews, video analysis, and coaching to perfect your interview skills for top university admissions.
//               </p>
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     6 mock interview sessions
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     Video recording and analysis
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     School-specific preparation
//                   </span>
//                 </li>
//               </ul>
//               <div className="text-[#c4151c]" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                 $600 / package
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                 3-week intensive program
//               </p>
//             </div>

//             {/* Advanced Strategy Sessions */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Advanced Strategy Sessions
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                 Deep-dive strategy sessions for specific schools, scholarships, or application components with our most experienced counselors.
//               </p>
//               <ul className="space-y-3 mb-6">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     4 strategy sessions (90 min each)
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     School-specific research
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                   <span className="text-gray-700" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                     Scholarship application guidance
//                   </span>
//                 </li>
//               </ul>
//               <div className="text-[#c4151c]" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                 $500 / package
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                 4 sessions over 4 weeks
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who This Is For */}
//       <section className="py-24 px-8 lg:px-16 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Is This Right For You?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="serif text-black mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Consider This If:
//               </h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You're applying to highly selective universities (Ivy League, Oxbridge, etc.)
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You want additional practice and feedback beyond the comprehensive Foundation support
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You need intensive test score improvement in a short timeframe
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You have interview requirements for multiple competitive programs
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="serif text-black mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 You Probably Don't Need This If:
//               </h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <span className="text-gray-400 flex-shrink-0 mt-1">✕</span>
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You're satisfied with the comprehensive support already provided by the Foundation
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-gray-400 flex-shrink-0 mt-1">✕</span>
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You have financial constraints (Foundation support is comprehensive and free)
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-gray-400 flex-shrink-0 mt-1">✕</span>
//                   <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You're just beginning the application process (start with Foundation resources first)
//                   </span>
//                 </li>
//               </ul>

//               <div className="mt-8 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                   <strong>Remember:</strong> The Foundation provides everything you need for successful applications. These services are optional enhancements for scholars who want extra support.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}>
//             Interested in additional support?
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             Speak with your Foundation counselor about whether these optional services would benefit your specific application goals.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => navigate('/academy/login')}
//               className="px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               Contact Your Counselor
//             </button>
//             <button
//               onClick={() => navigate('/academy/programs')}
//               className="px-12 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#c4151c] hover:text-[#c4151c] transition-all rounded-lg"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               View All Programs
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
