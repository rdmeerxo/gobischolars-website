import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

export default function AcademyPrograms() {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-3xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full bg-[#c4151c]/10 flex items-center justify-center">
            <Clock size={32} className="text-[#c4151c]" />
          </div>
        </div>

        {/* Title */}
        <h1
          className="serif text-black mb-6"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Program Details<br />Coming Soon
        </h1>

        {/* Description */}
        
        <div className="flex justify-center mb-12">
          <p
            className="text-gray-600 text-center"
            style={{
              maxWidth: '36rem',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            We’re currently finalizing the structure, curriculum, and timeline for this program.
            Full details will be announced soon. Thank you for your interest and patience.
          </p>
        </div>
            
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black transition-all rounded-lg"
            style={{ fontSize: '0.95rem', fontWeight: 500 }}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate('/academy')}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#c4151c] text-white hover:bg-[#a01117] transition-all rounded-lg"
            style={{ fontSize: '0.95rem', fontWeight: 500 }}
          >
            Return to Academy
          </button>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Award, BookOpen, Target, Users, Check, Calendar, Clock, DollarSign } from 'lucide-react';

// export default function AcademyPrograms() {
//   const navigate = useNavigate();
//   const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

//   const programs = [
//     {
//       id: 'fall-scholars',
//       icon: Award,
//       title: 'Fall Scholars Program',
//       tagline: 'Semester-Long Academic Excellence',
//       duration: '14 weeks',
//       schedule: 'September - December',
//       price: '$2,500',
//       isActive: true, // Currently accepting applications
//       description: 'Our flagship semester-long program providing intensive academic preparation, university application support, and skill development for high school students.',
//       features: [
//         'Weekly academic seminars and workshops',
//         'University application essay coaching',
//         'Standardized test preparation (SAT/ACT)',
//         'College counseling and planning',
//         'Public speaking and presentation skills',
//         'Research methodology training',
//         'Peer collaboration and study groups',
//         'One-on-one mentorship sessions',
//       ],
//       outcomes: [
//         'Completed university application package',
//         'Strong portfolio of essays and writing samples',
//         'Improved test scores',
//         'Clear academic and career pathway',
//       ],
//     },
//     {
//       id: 'winter-scholars',
//       icon: BookOpen,
//       title: 'Winter Scholars Program',
//       tagline: 'Intensive Winter Break Learning',
//       duration: '4 weeks',
//       schedule: 'January - February',
//       price: '$1,200',
//       isActive: false, // Not currently accepting applications
//       description: 'A concentrated winter program combining academic enrichment with practical skill development during the school break.',
//       features: [
//         'Academic writing intensive',
//         'Critical thinking workshops',
//         'Leadership development',
//         'Cultural competency training',
//         'College readiness sessions',
//         'Group projects and presentations',
//         'Guest speaker series',
//         'Networking with professionals',
//       ],
//       outcomes: [
//         'Enhanced academic writing skills',
//         'Leadership certificate',
//         'Expanded professional network',
//         'Clearer educational goals',
//       ],
//     },
//     {
//       id: 'bootcamp',
//       icon: Target,
//       title: 'Skills Bootcamp',
//       tagline: 'Intensive 2-Week Focused Training',
//       duration: '2 weeks',
//       schedule: 'Multiple sessions throughout year',
//       price: '$800',
//       isActive: true, // Currently accepting applications
//       description: 'Intensive bootcamps focused on specific skills like essay writing, standardized test prep, or interview preparation.',
//       features: [
//         'Daily intensive sessions (4 hours/day)',
//         'Small group instruction (max 12 students)',
//         'Expert instructors and coaches',
//         'Hands-on practice and feedback',
//         'Personalized skill assessment',
//         'Take-home practice materials',
//         'Post-bootcamp support (2 weeks)',
//         'Certificate of completion',
//       ],
//       outcomes: [
//         'Mastery of specific skill set',
//         'Actionable improvement plan',
//         'Increased confidence',
//         'Measurable skill improvement',
//       ],
//     },
//     {
//       id: 'twelve-scholars',
//       icon: Users,
//       title: '12 Scholars Premium Support',
//       tagline: 'Enhanced Services for Foundation Scholars',
//       duration: 'Ongoing',
//       schedule: 'Year-round availability',
//       price: 'Custom pricing',
//       isActive: true, // Always accepting applications
//       description: 'Additional premium consulting and support services for GobiScholars Foundation scholars who want enhanced guidance.',
//       features: [
//         'Advanced application strategy',
//         'Essay editing and refinement',
//         'Interview preparation',
//         'Scholarship application support',
//         'Career pathway consulting',
//         'Internship and opportunity matching',
//         'Alumni network access',
//         'Priority scheduling',
//       ],
//       outcomes: [
//         'Optimized application materials',
//         'Additional scholarship awards',
//         'Stronger interview performance',
//         'Clear career trajectory',
//       ],
//     },
//   ];

//   const selectedProgramData = programs.find(p => p.id === selectedProgram);

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="pt-40 pb-32 bg-[#F8F8F8] dharmachakra-bg">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 border border-gray-300 mb-6" style={{ fontSize: '0.85rem', letterSpacing: '0.15em' }}>
//               PROGRAMS & REGISTRATION
//             </div>
//           </div>
//           <h1 className="serif text-black mb-8">
//             Transform Your Future<br />Through Education
//           </h1>
//           <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             Choose from our comprehensive programs designed to prepare you for academic success and personal growth. Each program offers unique benefits tailored to different needs and timelines.
//           </p>
//         </div>
//       </section>

//       {/* Programs Overview */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid md:grid-cols-2 gap-8">
//             {programs.map((program) => {
//               const Icon = program.icon;
//               return (
//                 <div
//                   key={program.id}
//                   className={`border-2 transition-all cursor-pointer ${
//                     selectedProgram === program.id
//                       ? 'border-[#c4151c] bg-[#F8F8F8]'
//                       : program.isActive
//                       ? 'border-gray-200 hover:border-[#c4151c]'
//                       : 'border-gray-200 opacity-75'
//                   }`}
//                   onClick={() => setSelectedProgram(program.id)}
//                 >
//                   <div className="p-10">
//                     <div className="flex items-start justify-between mb-6">
//                       <Icon className={program.isActive ? "text-[#c4151c]" : "text-gray-400"} size={40} />
//                       {program.isActive ? (
//                         <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full" style={{ fontWeight: 500 }}>
//                           ACCEPTING APPLICATIONS
//                         </span>
//                       ) : (
//                         <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full" style={{ fontWeight: 500 }}>
//                           NOT CURRENTLY OPEN
//                         </span>
//                       )}
//                     </div>
//                     <h3 className="serif text-black mb-2">{program.title}</h3>
//                     <p className="text-[#c4151c] mb-6" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
//                       {program.tagline}
//                     </p>
//                     <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
                    
//                     <div className="space-y-3 mb-8">
//                       <div className="flex items-center gap-3 text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <Clock size={16} className="text-[#c4151c]" />
//                         <span>{program.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <Calendar size={16} className="text-[#c4151c]" />
//                         <span>{program.schedule}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <DollarSign size={16} className="text-[#c4151c]" />
//                         <span>{program.price}</span>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-8" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       {program.description}
//                     </p>

//                     <button
//                       onClick={() => navigate(`/academy/programs/${program.id}`)}
//                       className={`w-full py-4 transition-all rounded-lg ${
//                         selectedProgram === program.id
//                           ? 'bg-[#c4151c] text-white'
//                           : 'border-2 border-[#c4151c] text-[#c4151c] hover:bg-[#c4151c] hover:text-white'
//                       }`}
//                       style={{ fontSize: '0.95rem', fontWeight: 500 }}
//                     >
//                       View Full Details
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Program Details */}
//       {selectedProgramData && (
//         <section className="py-32 bg-[#F8F8F8]">
//           <div className="max-w-6xl mx-auto px-6 lg:px-12">
//             <div className="text-center mb-20">
//               <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//               <h2 className="serif text-black mb-4">{selectedProgramData.title}</h2>
//               <p className="text-[#c4151c]" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
//                 {selectedProgramData.tagline}
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-16 mb-16">
//               {/* Features */}
//               <div className="bg-white border border-gray-200 p-10">
//                 <h4 className="serif text-black mb-6">What's Included</h4>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-8" />
//                 <ul className="space-y-4">
//                   {selectedProgramData.features.map((feature, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <Check className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                       <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Outcomes */}
//               <div className="bg-white border border-gray-200 p-10">
//                 <h4 className="serif text-black mb-6">Expected Outcomes</h4>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-8" />
//                 <ul className="space-y-4 mb-10">
//                   {selectedProgramData.outcomes.map((outcome, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <Target className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                       <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                         {outcome}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="border-t border-gray-200 pt-8">
//                   <div className="space-y-4 mb-8">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>Duration</span>
//                       <span className="text-black" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                         {selectedProgramData.duration}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>Schedule</span>
//                       <span className="text-black" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                         {selectedProgramData.schedule}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>Investment</span>
//                       <span className="text-[#c4151c] serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
//                         {selectedProgramData.price}
//                       </span>
//                     </div>
//                   </div>

//                   <button className="w-full bg-[#c4151c] text-white py-5 hover:bg-[#a01117] transition-colors rounded-full" style={{ fontSize: '1rem', fontWeight: 500 }}>
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Application Process */}
//       <section className="py-32 bg-white">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">How to Apply</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Our streamlined application process makes it easy to get started
//             </p>
//           </div>

//           <div className="space-y-1">
//             <div className="border-t border-gray-200 py-8 flex items-start gap-8">
//               <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] rounded-full flex items-center justify-center">
//                 <span className="serif text-[#c4151c]" style={{ fontSize: '1.25rem', fontWeight: 600 }}>1</span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-3">Submit Application</h4>
//                 <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   Complete our online application form with your academic information, goals, and program preferences.
//                 </p>
//               </div>
//             </div>

//             <div className="border-t border-gray-200 py-8 flex items-start gap-8">
//               <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] rounded-full flex items-center justify-center">
//                 <span className="serif text-[#c4151c]" style={{ fontSize: '1.25rem', fontWeight: 600 }}>2</span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-3">Initial Consultation</h4>
//                 <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   Meet with our team to discuss your goals, assess fit, and answer any questions about the program.
//                 </p>
//               </div>
//             </div>

//             <div className="border-t border-gray-200 py-8 flex items-start gap-8">
//               <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] rounded-full flex items-center justify-center">
//                 <span className="serif text-[#c4151c]" style={{ fontSize: '1.25rem', fontWeight: 600 }}>3</span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-3">Enrollment & Payment</h4>
//                 <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   Secure your spot with enrollment confirmation and payment. Payment plans available.
//                 </p>
//               </div>
//             </div>

//             <div className="border-t border-b border-gray-200 py-8 flex items-start gap-8">
//               <div className="flex-shrink-0 w-12 h-12 border-2 border-[#c4151c] rounded-full flex items-center justify-center">
//                 <span className="serif text-[#c4151c]" style={{ fontSize: '1.25rem', fontWeight: 600 }}>4</span>
//               </div>
//               <div>
//                 <h4 className="serif text-black mb-3">Begin Your Journey</h4>
//                 <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   Receive pre-program materials and join orientation to prepare for your transformative experience.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-16">
//             <button className="bg-[#c4151c] text-white px-14 py-5 hover:bg-[#a01117] transition-colors rounded-lg" style={{ fontSize: '1rem', fontWeight: 500 }}>
//               Start Your Application
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Frequently Asked Questions</h2>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-white border border-gray-200 p-8">
//               <h5 className="serif text-black mb-3">What are the admission requirements?</h5>
//               <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Requirements vary by program, but generally include strong academic performance, commitment to personal growth, and alignment with program goals. Contact us for specific requirements.
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <h5 className="serif text-black mb-3">Are payment plans available?</h5>
//               <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Yes, we offer flexible payment plans for all programs. Contact our admissions team to discuss options that work for your family.
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <h5 className="serif text-black mb-3">Can I switch programs after enrolling?</h5>
//               <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Program changes may be possible depending on availability and timing. Please discuss with our team as soon as possible if you're considering a change.
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <h5 className="serif text-black mb-3">What is your refund policy?</h5>
//               <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Full refunds are available up to 2 weeks before program start. Partial refunds may be available after that. See our full policy in the enrollment agreement.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
