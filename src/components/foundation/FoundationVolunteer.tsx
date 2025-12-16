// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Users, BookOpen, Globe, Calendar, Clock, Mail, Check, ArrowRight, MessageSquare, Award, Briefcase, Target } from 'lucide-react';

// export default function FoundationVolunteer() {
//   const [selectedRole, setSelectedRole] = useState<string | null>(null);

//   const volunteerRoles = [
//     {
//       id: 'mentor',
//       icon: Users,
//       title: 'Scholar Mentor',
//       commitment: '3-5 hours/month',
//       location: 'Remote',
//       description: 'Guide and support GobiScholars students through their academic journey. Share your expertise, provide career advice, and help students navigate challenges.',
//       responsibilities: [
//         'Meet with assigned scholar(s) monthly via video call',
//         'Provide academic and career guidance',
//         'Share professional insights and networking opportunities',
//         'Support personal development and goal-setting',
//         'Maintain regular communication and respond to questions'
//       ],
//       qualifications: [
//         'Bachelors degree or higher',
//         'Professional experience in relevant field',
//         'Strong communication and listening skills',
//         'Commitment to 6-month minimum engagement',
//         'Cultural sensitivity and global perspective'
//       ]
//     },
//     {
//       id: 'tutor',
//       icon: BookOpen,
//       title: 'Academic Tutor',
//       commitment: '2-4 hours/week',
//       location: 'Remote',
//       description: 'Help GobiScholars students excel academically by providing tutoring in specific subjects or test preparation.',
//       responsibilities: [
//         'Conduct one-on-one or small group tutoring sessions',
//         'Help students with homework and exam preparation',
//         'Develop study strategies and learning plans',
//         'Track student progress and communicate with program staff',
//         'Adapt teaching methods to individual learning styles'
//       ],
//       qualifications: [
//         'Strong knowledge in tutoring subject area',
//         'Previous tutoring or teaching experience preferred',
//         'Patient and encouraging teaching approach',
//         'Reliable internet connection for virtual sessions',
//         'Minimum 3-month commitment'
//       ]
//     },
//     {
//       id: 'event',
//       icon: Calendar,
//       title: 'Event Volunteer',
//       commitment: 'Flexible, event-based',
//       location: 'Various locations',
//       description: 'Support GobiScholars fundraising events, scholar celebrations, and community gatherings.',
//       responsibilities: [
//         'Assist with event setup and breakdown',
//         'Welcome and guide attendees',
//         'Support registration and check-in',
//         'Help with auction or raffle activities',
//         'Share GobiScholars mission with attendees'
//       ],
//       qualifications: [
//         'Friendly and professional demeanor',
//         'Ability to work as part of a team',
//         'Reliable and punctual',
//         'Physical ability to stand and move during events',
//         'Available for weekend or evening events'
//       ]
//     },
//     {
//       id: 'marketing',
//       icon: MessageSquare,
//       title: 'Marketing & Social Media',
//       commitment: '3-6 hours/month',
//       location: 'Remote',
//       description: 'Help amplify GobiScholars story through content creation, social media management, and digital marketing.',
//       responsibilities: [
//         'Create engaging social media content',
//         'Design graphics and visual materials',
//         'Write blog posts and success stories',
//         'Monitor and engage with online community',
//         'Assist with email campaigns and newsletters'
//       ],
//       qualifications: [
//         'Experience with social media platforms',
//         'Strong writing and communication skills',
//         'Graphic design skills (Canva, Adobe) preferred',
//         'Creative mindset and attention to detail',
//         'Understanding of nonprofit marketing'
//       ]
//     },
//     {
//       id: 'professional',
//       icon: Briefcase,
//       title: 'Pro Bono Professional Services',
//       commitment: 'Project-based',
//       location: 'Remote',
//       description: 'Share your professional expertise in areas like law, accounting, HR, IT, or consulting to support our operations.',
//       responsibilities: [
//         'Provide expert consultation in your field',
//         'Review documents, processes, or systems',
//         'Develop recommendations and best practices',
//         'Train staff on specialized topics',
//         'Complete defined project deliverables'
//       ],
//       qualifications: [
//         'Licensed professional or subject matter expert',
//         'Minimum 5 years professional experience',
//         'Strong project management skills',
//         'Ability to work independently',
//         'Commitment to completing project scope'
//       ]
//     },
//     {
//       id: 'translation',
//       icon: Globe,
//       title: 'Translator & Interpreter',
//       commitment: '2-5 hours/month',
//       location: 'Remote',
//       description: 'Bridge language barriers by translating documents and interpreting for scholar communications (Mongolian-English).',
//       responsibilities: [
//         'Translate program documents and materials',
//         'Interpret during scholar meetings or interviews',
//         'Review translated content for accuracy',
//         'Support multilingual communications',
//         'Maintain confidentiality of sensitive information'
//       ],
//       qualifications: [
//         'Fluency in Mongolian and English',
//         'Translation or interpretation experience',
//         'Strong attention to detail and accuracy',
//         'Cultural competency in both languages',
//         'Reliable availability for time-sensitive requests'
//       ]
//     }
//   ];

//   const benefits = [
//     {
//       icon: Heart,
//       title: 'Make Real Impact',
//       description: 'Directly contribute to transforming the lives of talented Mongolian students'
//     },
//     {
//       icon: Users,
//       title: 'Build Connections',
//       description: 'Network with professionals and scholars across the globe'
//     },
//     {
//       icon: Award,
//       title: 'Recognition',
//       description: 'Receive certificates and acknowledgment for your contributions'
//     },
//     {
//       icon: Target,
//       title: 'Flexible Commitment',
//       description: 'Choose opportunities that fit your schedule and interests'
//     }
//   ];

//   const impactStats = [
//     { number: '150+', label: 'Active Volunteers' },
//     { number: '3,000+', label: 'Volunteer Hours (2024)' },
//     { number: '45', label: 'Countries Represented' },
//     { number: '98%', label: 'Volunteer Satisfaction' }
//   ];

//   const testimonials = [
//     {
//       quote: 'Mentoring a GobiScholar has been one of the most rewarding experiences of my life. Watching my mentee grow and achieve their goals reminds me why education matters.',
//       author: 'Dr. James Morrison',
//       role: 'Scholar Mentor since 2022',
//       location: 'Boston, MA'
//     },
//     {
//       quote: "As a Mongolian expat, volunteering with GobiScholars helps me stay connected to my roots while giving back to Mongolia's next generation of leaders.",
//       author: 'Enkhjin Bat',
//       role: 'Translator & Event Volunteer',
//       location: 'Los Angeles, CA'
//     }
//   ];

//   if (selectedRole) {
//     const role = volunteerRoles.find(r => r.id === selectedRole)!;
//     const Icon = role.icon;

//     return (
//       <div className="bg-white">
//         {/* Role Detail Header */}
//         <section className="py-20 bg-[#F8F8F8] border-b border-gray-200">
//           <div className="max-w-5xl mx-auto px-6 lg:px-12">
//             <button
//               onClick={() => setSelectedRole(null)}
//               className="text-[#c4151c] hover:underline mb-8 inline-flex items-center gap-2"
//               style={{ fontSize: '0.9rem', fontWeight: 500 }}
//             >
//               ← Back to All Opportunities
//             </button>
            
//             <div className="flex items-start gap-6 mb-8">
//               <div className="w-16 h-16 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded flex items-center justify-center flex-shrink-0">
//                 <Icon className="text-white" size={32} />
//               </div>
//               <div>
//                 <h1 className="serif text-black mb-4">{role.title}</h1>
//                 <div className="flex flex-wrap gap-6 text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <Clock size={18} className="text-[#c4151c]" />
//                     <span style={{ fontSize: '0.95rem' }}>{role.commitment}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Globe size={18} className="text-[#c4151c]" />
//                     <span style={{ fontSize: '0.95rem' }}>{role.location}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <p className="text-gray-600 max-w-3xl" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               {role.description}
//             </p>
//           </div>
//         </section>

//         {/* Role Details */}
//         <section className="py-20 bg-white">
//           <div className="max-w-5xl mx-auto px-6 lg:px-12">
//             <div className="grid lg:grid-cols-3 gap-12">
//               {/* Main Content */}
//               <div className="lg:col-span-2 space-y-12">
//                 <div>
//                   <h3 className="serif text-black mb-6">Responsibilities</h3>
//                   <ul className="space-y-3">
//                     {role.responsibilities.map((resp, index) => (
//                       <li key={index} className="flex gap-3">
//                         <Check className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                         <span className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                           {resp}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="serif text-black mb-6">Ideal Candidate</h3>
//                   <ul className="space-y-3">
//                     {role.qualifications.map((qual, index) => (
//                       <li key={index} className="flex gap-3">
//                         <Check className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                         <span className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                           {qual}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-[#c4151c]/5 border-l-4 border-[#c4151c] p-8">
//                   <h4 className="serif text-black mb-3">Your Impact</h4>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Every hour you volunteer directly supports our scholars' success. Whether mentoring one student or supporting an event with hundreds, your contribution creates lasting change in the lives of Mongolia's future leaders.
//                   </p>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="lg:col-span-1">
//                 <div className="bg-[#F8F8F8] border border-gray-200 p-8 sticky top-8">
//                   <h4 className="serif text-black mb-6">Sign Up to Volunteer</h4>
//                   <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                     Ready to make a difference? Express your interest and our volunteer coordinator will be in touch.
//                   </p>
//                   <a 
//                     href={`mailto:volunteer@gobischolars.com?subject=Volunteer Interest: ${role.title}`}
//                     className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-8 py-4 hover:shadow-xl transition-all rounded-md mb-6"
//                     style={{ fontSize: '1rem', fontWeight: 500 }}
//                   >
//                     <Mail size={20} />
//                     Express Interest
//                   </a>
//                   <p className="text-gray-500 text-center" style={{ fontSize: '0.85rem' }}>
//                     We'll respond within 2-3 business days
//                   </p>

//                   <div className="mt-8 pt-8 border-t border-gray-300">
//                     <h5 className="serif text-black mb-4" style={{ fontSize: '1rem' }}>Questions?</h5>
//                     <p className="text-gray-600 mb-3" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                       Contact our volunteer team to learn more about this opportunity.
//                     </p>
//                     <a 
//                       href="mailto:volunteer@gobischolars.com"
//                       className="text-[#c4151c] hover:underline"
//                       style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                     >
//                       volunteer@gobischolars.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white dharmachakra-bg">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 border border-gray-300 mb-6" style={{ fontSize: '0.85rem', letterSpacing: '0.15em' }}>
//               VOLUNTEER WITH US
//             </div>
//           </div>
//           <h1 className="serif text-black mb-8">
//             Share Your Time, Transform Lives
//           </h1>
//           <p className="text-gray-600 max-w-3xl mx-auto mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             Join our global community of volunteers dedicated to empowering Mongolia's brightest students through education.
//           </p>
//           <a
//             href="#opportunities"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
//             style={{ fontSize: '1rem', fontWeight: 500 }}
//           >
//             Explore Opportunities
//             <ArrowRight size={20} />
//           </a>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="py-20 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {impactStats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-[#c4151c] mb-2 serif" style={{ fontSize: '3rem', lineHeight: 1 }}>
//                   {stat.number}
//                 </div>
//                 <p className="text-gray-600" style={{ fontSize: '0.95rem' }}>
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Volunteer */}
//       <section className="py-20 bg-[#F8F8F8]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Why Volunteer with GobiScholars?</h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => {
//               const Icon = benefit.icon;
//               return (
//                 <div key={index} className="bg-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300">
//                   <Icon className="text-[#c4151c] mx-auto mb-6" size={48} />
//                   <h4 className="serif text-black mb-3" style={{ fontSize: '1.1rem' }}>
//                     {benefit.title}
//                   </h4>
//                   <p className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                     {benefit.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Volunteer Opportunities */}
//       <section id="opportunities" className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Volunteer Opportunities</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Find the perfect way to contribute your skills and passion
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {volunteerRoles.map((role) => {
//               const Icon = role.icon;
//               return (
//                 <div 
//                   key={role.id}
//                   className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
//                   onClick={() => setSelectedRole(role.id)}
//                 >
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded flex items-center justify-center flex-shrink-0">
//                       <Icon className="text-white" size={24} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="serif text-black mb-2">{role.title}</h3>
//                       <div className="flex flex-wrap gap-4 text-gray-500 mb-3">
//                         <div className="flex items-center gap-1">
//                           <Clock size={14} />
//                           <span style={{ fontSize: '0.85rem' }}>{role.commitment}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Globe size={14} />
//                           <span style={{ fontSize: '0.85rem' }}>{role.location}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     {role.description}
//                   </p>

//                   <button
//                     className="inline-flex items-center gap-2 text-[#c4151c] hover:underline"
//                     style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                   >
//                     Learn More & Sign Up
//                     <ArrowRight size={18} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Volunteer Stories</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white border border-gray-200 p-10">
//                 <Heart className="text-[#c4151c] mb-6" size={40} />
//                 <p className="text-gray-600 mb-8 italic" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
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
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Get Started */}
//       <section className="py-32 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//           <h2 className="serif text-black mb-6">Ready to Get Started?</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//             Whether you have a few hours a month or can make a longer commitment, there's a place for you on the GobiScholars team.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <a 
//               href="mailto:volunteer@gobischolars.com?subject=General Volunteer Interest"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               <Mail size={20} />
//               Contact Volunteer Team
//             </a>
//             <a
//               href="#opportunities"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               View Opportunities
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Other Ways to Help */}
//       <section className="py-20 bg-[#F8F8F8] border-t border-gray-200">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <h3 className="serif text-black mb-8">Other Ways to Support Our Mission</h3>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link
//               to="/foundation/donate"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-8 py-3 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <Heart size={18} />
//               Make a Donation
//             </Link>
//             <Link
//               to="/foundation/internships"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-8 py-3 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <BookOpen size={18} />
//               Internship Program
//             </Link>
//             <Link
//               to="/foundation/careers"
//               className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-8 py-3 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <Briefcase size={18} />
//               Career Opportunities
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
