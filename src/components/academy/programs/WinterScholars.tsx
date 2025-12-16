// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, DollarSign, Users, Target, CheckCircle, Award, BookOpen } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function WinterScholars() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
//             alt="Winter Scholars Program"
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
          
//           <span className="inline-block px-4 py-2 bg-gray-500/20 backdrop-blur-md border border-gray-400/30 text-gray-300 mb-6" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 500 }}>
//             COMING DECEMBER 2025
//           </span>
          
//           <h1 className="serif text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
//             Winter Scholars Program
//           </h1>
          
//           <p className="text-white/90 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             An intensive winter break program combining academic enrichment with practical skill development for aspiring university students.
//           </p>

//           <div className="flex flex-wrap gap-8 justify-center text-white/90" style={{ fontSize: '0.9rem' }}>
//             <div className="flex items-center gap-2">
//               <Clock size={18} />
//               <span>3 Weeks</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar size={18} />
//               <span>December - January</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <DollarSign size={18} />
//               <span>$1,400</span>
//             </div>
//           </div>
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
//               Make the most of your winter break with an intensive program designed to accelerate your university preparation. Perfect for students looking to jumpstart their application journey or strengthen specific skills during the holiday period.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Users className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Focused Groups
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 12 students maximum per session
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Target className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Intensive Format
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Daily sessions for 3 weeks
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Award className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Skill Building
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Workshops and hands-on training
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-24 px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Program Components
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Academic Enrichment */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Academic Enrichment
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Critical thinking and analytical writing workshops
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Research skills and academic inquiry
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Advanced reading comprehension strategies
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Presentation skills and public speaking
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Application Prep */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Application Preparation
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Essay brainstorming and initial drafting
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     University research and fit assessment
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Resume and activities list development
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Understanding application requirements
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Leadership Development */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Leadership Development
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Team collaboration and project management
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Communication and negotiation skills
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Problem-solving workshops
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Goal setting and personal development
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Cultural Preparation */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Cultural Preparation
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Cross-cultural communication skills
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Understanding university life abroad
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Alumni panels and Q&A sessions
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Preparing for independence and self-advocacy
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Schedule */}
//       <section className="py-24 px-8 lg:px-16 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Program Schedule
//             </h2>
//             <p className="text-gray-600" style={{ fontSize: '0.95rem' }}>
//               Daily sessions Monday - Friday, 9:00 AM - 4:00 PM
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-20">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Week 1
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Foundation & Exploration
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Academic skills workshops, university research, essay brainstorming, team building activities
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-20">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Week 2
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Skill Development
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Writing intensive, leadership workshops, presentation training, cultural preparation
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-20">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Week 3
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Application & Showcase
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Application components finalization, capstone project presentations, program celebration
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing & Application */}
//       <section className="py-24 px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Program Investment
//             </h2>
//           </div>

//           <div className="bg-white p-10 border border-gray-200">
//             <div className="text-center mb-8">
//               <div className="serif text-[#c4151c] mb-2" style={{ fontSize: '3.5rem', fontWeight: 300 }}>
//                 $1,400
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                 3-week intensive program
//               </p>
//             </div>

//             <div className="space-y-3 mb-10">
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   15 full-day sessions (45 hours of instruction)
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   Small group workshops and activities
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   Individual essay review and feedback
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   All program materials and resources
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   Certificate of completion
//                 </span>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-6 mb-8">
//               <p className="text-gray-700 text-center" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                 <strong>Early bird discount:</strong> Register by November 15 and save $200 (Program fee: $1,200)
//               </p>
//             </div>

//             <div className="text-center">
//               <button
//                 onClick={() => navigate('/academy/login')}
//                 className="inline-block px-14 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//                 style={{ fontSize: '1rem', fontWeight: 500 }}
//               >
//                 Join Waitlist
//               </button>
//               <p className="text-gray-600 mt-4" style={{ fontSize: '0.85rem' }}>
//                 Applications open: October 2025
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-8 lg:px-16 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}>
//             Transform your winter break
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             Make meaningful progress toward your university goals in just three weeks.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => navigate('/academy/login')}
//               className="px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               Join Waitlist
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
