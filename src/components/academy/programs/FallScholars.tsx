// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, DollarSign, Users, BookOpen, Target, CheckCircle, Award } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function FallScholars() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
//             alt="Fall Scholars Program"
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
//             ACCEPTING APPLICATIONS
//           </span>
          
//           <h1 className="serif text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
//             Fall Scholars Program
//           </h1>
          
//           <p className="text-white/90 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             A comprehensive semester-long program designed to prepare students for competitive international university applications.
//           </p>

//           <div className="flex flex-wrap gap-8 justify-center text-white/90" style={{ fontSize: '0.9rem' }}>
//             <div className="flex items-center gap-2">
//               <Clock size={18} />
//               <span>16 Weeks</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar size={18} />
//               <span>September - December</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <DollarSign size={18} />
//               <span>$2,800</span>
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
//               The Fall Scholars Program is our flagship semester-long intensive that combines academic rigor with personalized college application support. Students work closely with experienced counselors to develop compelling applications while building essential skills for university success.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Users className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Small Cohorts
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Maximum 15 students per cohort
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Target className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Personalized Support
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 1-on-1 counseling sessions
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Award className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Expert Guidance
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Counselors from top universities
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
//               What You'll Learn
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Application Strategy */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Application Strategy
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     University research and school list development
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Understanding admissions criteria and requirements
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Timeline management and deadline planning
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Application platform navigation (Common App, UCAS, etc.)
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Essay Writing */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Essay Writing
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Brainstorming and topic selection
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Crafting compelling personal statements
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Supplemental essay development
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Multiple rounds of editing and refinement
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Test Preparation */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Test Preparation
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     SAT/ACT strategy and practice
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     TOEFL/IELTS preparation
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Test-taking strategies and time management
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Practice tests and score analysis
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Additional Support */}
//             <div className="bg-white p-8 border border-gray-100">
//               <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                 Additional Support
//               </h3>
//               <div className="w-12 h-[2px] bg-[#c4151c] mb-6" />
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Interview preparation and mock interviews
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Extracurricular activity guidance
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Financial aid and scholarship advising
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                     Parent workshops and information sessions
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
//               Classes meet twice weekly with additional 1-on-1 sessions
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-24">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Weeks 1-4
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Foundation & Strategy
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   University research, school list development, understanding the application landscape
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-24">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Weeks 5-10
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Essay Writing Intensive
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Personal statement drafting, supplemental essays, multiple editing rounds
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-24">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Weeks 11-14
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Application Completion
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Finalizing applications, recommendation letters, interview preparation
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 p-6 bg-gray-50 border-l-4 border-[#c4151c]">
//               <div className="flex-shrink-0 w-24">
//                 <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Weeks 15-16
//                 </span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   Submission & Beyond
//                 </h4>
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Application submission, financial aid guidance, continued support
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
//                 $2,800
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                 16-week comprehensive program
//               </p>
//             </div>

//             <div className="space-y-3 mb-10">
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   32 group sessions (2 per week)
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   8 individual counseling sessions
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   Unlimited essay review and feedback
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   Access to resource library and test prep materials
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                 <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
//                   Parent workshops and progress updates
//                 </span>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-6 mb-8">
//               <p className="text-gray-700 text-center" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                 <strong>Payment plans available:</strong> Split payment into 2 or 3 installments with no additional fees.
//               </p>
//             </div>

//             <div className="text-center">
//               <button
//                 onClick={() => navigate('/academy/login')}
//                 className="inline-block px-14 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//                 style={{ fontSize: '1rem', fontWeight: 500 }}
//               >
//                 Apply Now
//               </button>
//               <p className="text-gray-600 mt-4" style={{ fontSize: '0.85rem' }}>
//                 Applications close: August 15, 2025
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-8 lg:px-16 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}>
//             Ready to join Fall Scholars?
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             Limited spots available. Start your journey to your dream university today.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => navigate('/academy/login')}
//               className="px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               Apply Now
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
