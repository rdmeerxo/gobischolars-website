// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, MapPin, Users, BookOpen, Lightbulb, Target, Award, Mail, Check, ArrowRight, Globe, Heart } from 'lucide-react';

// export default function FoundationInternships() {
//   const [selectedTerm, setSelectedTerm] = useState<'summer' | 'fall' | 'spring'>('summer');

//   const internshipTracks = [
//     {
//       icon: Users,
//       title: 'Program Management',
//       description: 'Work directly with our scholars, coordinate programs, and support student success initiatives.',
//       skills: ['Event coordination', 'Student mentoring', 'Database management', 'Communication']
//     },
//     {
//       icon: Lightbulb,
//       title: 'Development & Fundraising',
//       description: 'Assist with donor relations, grant writing, and fundraising campaigns to support our mission.',
//       skills: ['Grant research', 'Donor communications', 'Campaign planning', 'CRM systems']
//     },
//     {
//       icon: BookOpen,
//       title: 'Marketing & Communications',
//       description: 'Create compelling content, manage social media, and help tell the GobiScholars story.',
//       skills: ['Content creation', 'Social media', 'Graphic design', 'SEO & analytics']
//     },
//     {
//       icon: Globe,
//       title: 'Research & Policy',
//       description: 'Conduct research on education trends, analyze program impact, and contribute to policy initiatives.',
//       skills: ['Data analysis', 'Report writing', 'Literature review', 'Statistical tools']
//     }
//   ];

//   const terms = [
//     {
//       id: 'summer' as const,
//       name: 'Summer Internship',
//       dates: 'June - August 2026',
//       duration: '10-12 weeks',
//       deadline: 'March 1, 2026',
//       description: 'Our flagship summer program offers full-time immersive experience in nonprofit management.',
//       commitment: 'Full-time (40 hours/week)',
//       stipend: '$3,000 - $4,000',
//       spots: '8-10 positions'
//     },
//     {
//       id: 'fall' as const,
//       name: 'Fall Internship',
//       dates: 'September - December 2026',
//       duration: '12-16 weeks',
//       deadline: 'July 1, 2026',
//       description: 'Part-time opportunity ideal for students seeking semester-long experience during the academic year.',
//       commitment: 'Part-time (15-20 hours/week)',
//       stipend: '$1,500 - $2,000',
//       spots: '4-6 positions'
//     },
//     {
//       id: 'spring' as const,
//       name: 'Spring Internship',
//       dates: 'January - May 2026',
//       duration: '12-16 weeks',
//       deadline: 'November 1, 2025',
//       description: 'Part-time opportunity during the spring semester with flexible scheduling options.',
//       commitment: 'Part-time (15-20 hours/week)',
//       stipend: '$1,500 - $2,000',
//       spots: '4-6 positions'
//     }
//   ];

//   const benefits = [
//     'Competitive stipend and professional development budget',
//     'Mentorship from experienced nonprofit professionals',
//     'Networking opportunities with board members and advisors',
//     'Letter of recommendation upon successful completion',
//     'Potential for future employment opportunities',
//     'Access to training workshops and webinars'
//   ];

//   const qualifications = [
//     'Current undergraduate or graduate student, or recent graduate (within 1 year)',
//     'Strong interest in education, international development, or nonprofit work',
//     'Excellent written and verbal communication skills',
//     'Self-motivated with strong organizational abilities',
//     'Proficiency in Microsoft Office or Google Workspace',
//     'Commitment to diversity, equity, and inclusion'
//   ];

//   const testimonials = [
//     {
//       quote: "My internship at GobiScholars was transformative. I gained real-world experience in nonprofit management while making a tangible impact on students' lives.",
//       author: 'Sarah Chen',
//       role: 'Summer 2024 Intern, Program Management',
//       university: 'Harvard University'
//     },
//     {
//       quote: "The mentorship and professional development opportunities exceeded my expectations. I learned more in 10 weeks than I could have imagined.",
//       author: 'Michael Torres',
//       role: 'Fall 2024 Intern, Development',
//       university: 'Stanford University'
//     },
//     {
//       quote: "Working with the GobiScholars team opened my eyes to the power of education access. This experience shaped my career aspirations.",
//       author: 'Tuya Bayarsaikhan',
//       role: 'Summer 2024 Intern, Communications',
//       university: 'National University of Mongolia'
//     }
//   ];

//   const selectedTermData = terms.find(t => t.id === selectedTerm)!;

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white dharmachakra-bg">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 border border-gray-300 mb-6" style={{ fontSize: '0.85rem', letterSpacing: '0.15em' }}>
//               INTERNSHIP PROGRAM
//             </div>
//           </div>
//           <h1 className="serif text-black mb-8">
//             Launch Your Impact Career
//           </h1>
//           <p className="text-gray-600 max-w-3xl mx-auto mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             Join GobiScholars Foundation for a hands-on internship experience in nonprofit management, international education, and social impact.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <a
//               href="#apply"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               Apply Now
//               <ArrowRight size={20} />
//             </a>
//             <a
//               href="mailto:internships@gobischolars.com"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               <Mail size={20} />
//               Ask Questions
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Internship Tracks */}
//       <section className="py-20 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Internship Tracks</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Choose from four specialized tracks based on your interests and career goals
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {internshipTracks.map((track, index) => {
//               const Icon = track.icon;
//               return (
//                 <div key={index} className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className="w-14 h-14 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded flex items-center justify-center flex-shrink-0">
//                       <Icon className="text-white" size={28} />
//                     </div>
//                     <div>
//                       <h3 className="serif text-black mb-2">{track.title}</h3>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     {track.description}
//                   </p>
//                   <div>
//                     <p className="text-gray-500 mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
//                       SKILLS YOU'LL DEVELOP:
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {track.skills.map((skill, idx) => (
//                         <span
//                           key={idx}
//                           className="px-3 py-1 bg-[#c4151c]/5 text-[#c4151c] border border-[#c4151c]/20"
//                           style={{ fontSize: '0.85rem' }}
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Terms & Timelines */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Internship Terms</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               We offer internships year-round to accommodate different schedules
//             </p>
//           </div>

//           {/* Term Selector */}
//           <div className="flex justify-center gap-4 mb-12 flex-wrap">
//             {terms.map((term) => (
//               <button
//                 key={term.id}
//                 onClick={() => setSelectedTerm(term.id)}
//                 className={`px-8 py-3 transition-all rounded-md ${
//                   selectedTerm === term.id
//                     ? 'bg-[#c4151c] text-white'
//                     : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.95rem', fontWeight: 500 }}
//               >
//                 {term.name}
//               </button>
//             ))}
//           </div>

//           {/* Selected Term Details */}
//           <div className="bg-white border border-gray-200 p-10">
//             <div className="grid md:grid-cols-2 gap-10">
//               <div>
//                 <h3 className="serif text-black mb-6">{selectedTermData.name}</h3>
//                 <p className="text-gray-600 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                   {selectedTermData.description}
//                 </p>

//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <Calendar className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                     <div>
//                       <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>Dates</p>
//                       <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{selectedTermData.dates}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Clock className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                     <div>
//                       <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>Duration</p>
//                       <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{selectedTermData.duration}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Target className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                     <div>
//                       <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>Commitment</p>
//                       <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{selectedTermData.commitment}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-[#c4151c]/5 to-white p-8 border-l-4 border-[#c4151c]">
//                 <h4 className="serif text-black mb-6">Program Details</h4>
//                 <div className="space-y-4 mb-8">
//                   <div>
//                     <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Stipend</p>
//                     <p className="text-[#c4151c]" style={{ fontSize: '1.1rem', fontWeight: 600 }}>{selectedTermData.stipend}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Available Positions</p>
//                     <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{selectedTermData.spots}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Application Deadline</p>
//                     <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{selectedTermData.deadline}</p>
//                   </div>
//                 </div>
//                 <a
//                   href="#apply"
//                   className="inline-flex items-center gap-2 bg-[#c4151c] text-white px-8 py-3 hover:bg-[#a01117] transition-colors rounded-md w-full justify-center"
//                   style={{ fontSize: '0.95rem', fontWeight: 500 }}
//                 >
//                   Apply for {selectedTermData.name}
//                   <ArrowRight size={18} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What You'll Gain */}
//       <section className="py-20 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-12">
//             <div>
//               <div className="w-16 h-[2px] bg-[#c4151c] mb-8" />
//               <h2 className="serif text-black mb-6">What You'll Gain</h2>
//               <p className="text-gray-600 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                 Our internship program is designed to provide comprehensive professional development while making a real impact on our mission.
//               </p>
//               <ul className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <li key={index} className="flex gap-3">
//                     <Check className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                     <span className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       {benefit}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <div className="w-16 h-[2px] bg-[#c4151c] mb-8" />
//               <h2 className="serif text-black mb-6">Qualifications</h2>
//               <p className="text-gray-600 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                 We're looking for passionate, driven individuals who want to make a difference in education access.
//               </p>
//               <ul className="space-y-3">
//                 {qualifications.map((qual, index) => (
//                   <li key={index} className="flex gap-3">
//                     <Check className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                     <span className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       {qual}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Hear from Our Interns</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white border border-gray-200 p-8">
//                 <Award className="text-[#c4151c] mb-6" size={32} />
//                 <p className="text-gray-600 mb-6 italic" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   "{testimonial.quote}"
//                 </p>
//                 <div className="border-t border-gray-200 pt-6">
//                   <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     {testimonial.author}
//                   </p>
//                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>
//                     {testimonial.role}
//                   </p>
//                   <p className="text-gray-400" style={{ fontSize: '0.85rem' }}>
//                     {testimonial.university}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section id="apply" className="py-32 bg-white">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">How to Apply</h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6 mb-16">
//             {[
//               { step: '1', title: 'Submit Application', desc: 'Complete our online application form with your resume and cover letter' },
//               { step: '2', title: 'Initial Review', desc: 'Our team reviews applications on a rolling basis' },
//               { step: '3', title: 'Interview', desc: 'Selected candidates participate in virtual or in-person interviews' },
//               { step: '4', title: 'Offer', desc: 'Final candidates receive offers and onboarding materials' }
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white serif" style={{ fontSize: '1.5rem' }}>{item.step}</span>
//                 </div>
//                 <h4 className="serif text-black mb-2" style={{ fontSize: '1rem' }}>{item.title}</h4>
//                 <p className="text-gray-600" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-[#F8F8F8] border border-gray-200 p-10 text-center">
//             <h3 className="serif text-black mb-4">Ready to Apply?</h3>
//             <p className="text-gray-600 max-w-2xl mx-auto mb-8" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//               Applications are reviewed on a rolling basis. Apply early to ensure consideration for your preferred term.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a
//                 href="mailto:internships@gobischolars.com?subject=Internship Application"
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
//                 style={{ fontSize: '1rem', fontWeight: 500 }}
//               >
//                 <Mail size={20} />
//                 Submit Application
//               </a>
//               <a
//                 href="mailto:internships@gobischolars.com?subject=Internship Program Questions"
//                 className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//                 style={{ fontSize: '1rem', fontWeight: 500 }}
//               >
//                 Questions?
//               </a>
//             </div>
//             <p className="text-gray-500 mt-6" style={{ fontSize: '0.85rem' }}>
//               Required materials: Resume, cover letter, unofficial transcript, and one letter of recommendation
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA to Other Opportunities */}
//       <section className="py-20 bg-gradient-to-br from-[#c4151c]/5 to-white border-t border-gray-200">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <h3 className="serif text-black mb-4">Explore Other Ways to Get Involved</h3>
//           <div className="flex flex-wrap gap-4 justify-center mt-8">
//             <Link
//               to="/foundation/volunteer"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-8 py-3 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <Heart size={18} />
//               Volunteer Opportunities
//             </Link>
//             <Link
//               to="/foundation/careers"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-8 py-3 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <Users size={18} />
//               Career Opportunities
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
