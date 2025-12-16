// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, DollarSign, Target, CheckCircle, Zap } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function Bootcamp() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
//             alt="Bootcamp Program"
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
//             MULTIPLE SESSIONS AVAILABLE
//           </span>
          
//           <h1 className="serif text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
//             Intensive Bootcamp
//           </h1>
          
//           <p className="text-white/90 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             Focused 2-week intensive programs targeting specific skills: essay writing, test prep, or interview preparation.
//           </p>

//           <div className="flex flex-wrap gap-8 justify-center text-white/90" style={{ fontSize: '0.9rem' }}>
//             <div className="flex items-center gap-2">
//               <Clock size={18} />
//               <span>2 Weeks</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar size={18} />
//               <span>Multiple dates available</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <DollarSign size={18} />
//               <span>$800</span>
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
//               Our bootcamp programs are designed for students who need intensive, focused preparation in specific areas. Choose from essay writing, standardized test prep, or interview preparation—or enroll in multiple bootcamps to build a comprehensive skill set.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Zap className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Intensive Format
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Daily sessions for rapid skill development
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <Target className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Skill-Specific
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Focused on one critical area
//               </p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 border border-gray-100">
//               <div className="w-14 h-14 rounded-full bg-[#c4151c]/10 flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="text-[#c4151c]" size={28} />
//               </div>
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                 Results-Driven
//               </h4>
//               <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                 Measurable improvement guaranteed
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bootcamp Options */}
//       <section className="py-24 px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Choose Your Focus
//             </h2>
//             <p className="text-gray-600" style={{ fontSize: '0.95rem' }}>
//               Select the bootcamp that matches your needs
//             </p>
//           </div>

//           <div className="space-y-6">
//             {/* Essay Writing Bootcamp */}
//             <div className="bg-white p-10 border border-gray-200 hover:shadow-lg transition-all">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h3 className="serif text-black mb-2" style={{ fontSize: '1.8rem', fontWeight: 600 }}>
//                     Essay Writing Bootcamp
//                   </h3>
//                   <p className="text-[#c4151c] italic" style={{ fontSize: '0.95rem' }}>
//                     Master the art of compelling college essays
//                   </p>
//                 </div>
//                 <span className="px-4 py-2 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap" style={{ fontWeight: 500 }}>
//                   NEXT: JUNE 2025
//                 </span>
//               </div>
              
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Learn to craft personal statements and supplemental essays that stand out. Through intensive writing workshops, peer review sessions, and expert feedback, you'll develop essays that authentically showcase your story and strengths.
//               </p>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-black mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     What You'll Master:
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Brainstorming compelling topics
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Structuring effective narratives
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Showing vs. telling techniques
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Self-editing and revision strategies
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-black mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     Program Format:
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         10 daily sessions (3 hours each)
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Small workshop groups (max 8 students)
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Complete 2-3 full essay drafts
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Individual counselor feedback
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Test Prep Bootcamp */}
//             <div className="bg-white p-10 border border-gray-200 hover:shadow-lg transition-all">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h3 className="serif text-black mb-2" style={{ fontSize: '1.8rem', fontWeight: 600 }}>
//                     Test Prep Bootcamp
//                   </h3>
//                   <p className="text-[#c4151c] italic" style={{ fontSize: '0.95rem' }}>
//                     Boost your SAT, ACT, or English proficiency scores
//                   </p>
//                 </div>
//                 <span className="px-4 py-2 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap" style={{ fontWeight: 500 }}>
//                   NEXT: JULY 2025
//                 </span>
//               </div>
              
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Intensive test preparation with proven strategies to maximize your scores. Focus on SAT/ACT or TOEFL/IELTS with targeted practice, expert techniques, and personalized feedback to achieve your score goals.
//               </p>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-black mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     What You'll Master:
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Test-taking strategies and time management
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Section-specific techniques
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Practice with official materials
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Error analysis and improvement plans
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-black mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     Program Format:
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         10 daily sessions (4 hours each)
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         3 full-length practice tests
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Personalized score improvement plans
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Access to online practice platform
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Interview Prep Bootcamp */}
//             <div className="bg-white p-10 border border-gray-200 hover:shadow-lg transition-all">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h3 className="serif text-black mb-2" style={{ fontSize: '1.8rem', fontWeight: 600 }}>
//                     Interview Prep Bootcamp
//                   </h3>
//                   <p className="text-[#c4151c] italic" style={{ fontSize: '0.95rem' }}>
//                     Excel in university admissions interviews
//                   </p>
//                 </div>
//                 <span className="px-4 py-2 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap" style={{ fontWeight: 500 }}>
//                   NEXT: AUGUST 2025
//                 </span>
//               </div>
              
//               <p className="text-gray-700 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Build confidence and master the skills needed to ace university interviews. Through mock interviews, feedback sessions, and communication workshops, you'll learn to articulate your story and respond effectively to any question.
//               </p>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-black mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     What You'll Master:
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Answering common interview questions
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Body language and presence
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Telling your story compellingly
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Managing nerves and building confidence
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-black mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     Program Format:
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         10 daily sessions (3 hours each)
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         5+ mock interview sessions
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Video recording and playback analysis
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>
//                         Individual coaching feedback
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing & Application */}
//       <section className="py-24 px-8 lg:px-16 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
//               Program Investment
//             </h2>
//           </div>

//           <div className="bg-gray-50 p-10 border border-gray-200">
//             <div className="text-center mb-8">
//               <div className="serif text-[#c4151c] mb-2" style={{ fontSize: '3.5rem', fontWeight: 300 }}>
//                 $800
//               </div>
//               <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                 Per bootcamp (2 weeks)
//               </p>
//             </div>

//             <div className="bg-white p-6 mb-8 border border-gray-200">
//               <p className="text-center text-gray-700 mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                 Bundle Discount Available
//               </p>
//               <p className="text-center text-gray-600" style={{ fontSize: '0.9rem' }}>
//                 Enroll in 2 bootcamps: <span className="text-[#c4151c]">$1,400</span> (save $200)<br />
//                 Enroll in all 3 bootcamps: <span className="text-[#c4151c]">$2,000</span> (save $400)
//               </p>
//             </div>

//             <div className="text-center">
//               <button
//                 onClick={() => navigate('/academy/login')}
//                 className="inline-block px-14 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//                 style={{ fontSize: '1rem', fontWeight: 500 }}
//               >
//                 Register for Bootcamp
//               </button>
//               <p className="text-gray-600 mt-4" style={{ fontSize: '0.85rem' }}>
//                 Multiple dates available throughout the year
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-8 lg:px-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}>
//             Ready to level up?
//           </h2>
          
//           <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
//             Choose the bootcamp that matches your goals and accelerate your university preparation.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => navigate('/academy/login')}
//               className="px-12 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               Register Now
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
