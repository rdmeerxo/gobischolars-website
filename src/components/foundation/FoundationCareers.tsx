// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Globe, BookOpen, ArrowRight, Mail, Check } from 'lucide-react';

// interface JobPosting {
//   id: string;
//   title: string;
//   department: string;
//   location: string;
//   type: string;
//   salary: string;
//   description: string;
//   responsibilities: string[];
//   qualifications: string[];
//   posted: string;
// }

// export default function FoundationCareers() {
//   const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

//   const jobPostings: JobPosting[] = [
//     {
//       id: '1',
//       title: 'Program Coordinator',
//       department: 'Programs',
//       location: 'Ulaanbaatar, Mongolia',
//       type: 'Full-Time',
//       salary: '$35,000 - $45,000',
//       description: 'We are seeking a dedicated Program Coordinator to manage day-to-day operations of our scholarship programs and provide direct support to our scholars.',
//       responsibilities: [
//         'Coordinate scholar onboarding and orientation processes',
//         'Maintain regular communication with scholars and their families',
//         'Track academic progress and provide support interventions',
//         'Organize scholar events, workshops, and cultural programs',
//         'Manage program documentation and reporting',
//         'Collaborate with university partners and mentors'
//       ],
//       qualifications: [
//         "Bachelor's degree in Education, Social Work, or related field",
//         '2+ years experience in program management or student services',
//         'Fluency in Mongolian and English',
//         'Strong organizational and communication skills',
//         'Experience working with diverse student populations',
//         'Proficiency in Microsoft Office and database management'
//       ],
//       posted: 'November 15, 2025'
//     },
//     {
//       id: '2',
//       title: 'Development Manager',
//       department: 'Development',
//       location: 'Remote (US-based)',
//       type: 'Full-Time',
//       salary: '$55,000 - $70,000',
//       description: 'Join our development team to cultivate donor relationships and secure funding for our growing scholarship programs.',
//       responsibilities: [
//         'Develop and execute fundraising strategies and campaigns',
//         'Identify, cultivate, and steward major donor relationships',
//         'Write compelling grant proposals and donor communications',
//         'Plan and coordinate fundraising events',
//         'Maintain donor database and track giving metrics',
//         'Collaborate with board members on fundraising initiatives'
//       ],
//       qualifications: [
//         "Bachelor's degree in Nonprofit Management, Communications, or related field",
//         '3-5 years experience in nonprofit fundraising',
//         'Proven track record of securing major gifts',
//         'Excellent written and verbal communication skills',
//         'Experience with donor management systems (Salesforce, Raiser\'s Edge)',
//         'Passion for education and international development'
//       ],
//       posted: 'November 10, 2025'
//     },
//     {
//       id: '3',
//       title: 'Marketing & Communications Specialist',
//       department: 'Communications',
//       location: 'Remote (Flexible)',
//       type: 'Full-Time',
//       salary: '$45,000 - $60,000',
//       description: 'Tell the GobiScholars story through compelling content, social media, and digital marketing campaigns.',
//       responsibilities: [
//         'Develop and implement marketing and communications strategies',
//         'Create engaging content for website, social media, and newsletters',
//         'Manage brand identity and visual communications',
//         'Coordinate scholar spotlights and success stories',
//         'Monitor and analyze engagement metrics',
//         'Support event promotion and media relations'
//       ],
//       qualifications: [
//         "Bachelor's degree in Marketing, Communications, or Journalism",
//         '2-4 years experience in nonprofit marketing or communications',
//         'Strong writing, editing, and storytelling skills',
//         'Proficiency in social media platforms and content management systems',
//         'Experience with Adobe Creative Suite or Canva',
//         'Understanding of SEO and digital marketing best practices'
//       ],
//       posted: 'November 8, 2025'
//     },
//     {
//       id: '4',
//       title: 'Scholarship Selection Coordinator',
//       department: 'Programs',
//       location: 'Ulaanbaatar, Mongolia',
//       type: 'Contract (Seasonal)',
//       salary: '$25,000 - $30,000',
//       description: 'Lead the scholarship application review and selection process, working with our advisory committee to identify exceptional candidates.',
//       responsibilities: [
//         'Manage scholarship application portal and processes',
//         'Review and evaluate scholarship applications',
//         'Coordinate with selection committee members',
//         'Conduct interviews with finalists',
//         'Communicate with applicants throughout the process',
//         'Maintain confidentiality and ensure fair selection practices'
//       ],
//       qualifications: [
//         "Bachelor's degree in Education or related field",
//         'Experience in admissions, student recruitment, or program evaluation',
//         'Fluency in Mongolian and English',
//         'Strong analytical and decision-making skills',
//         'Excellent interpersonal and communication abilities',
//         'Ability to work independently and meet tight deadlines'
//       ],
//       posted: 'November 1, 2025'
//     }
//   ];

//   const benefits = [
//     {
//       icon: Heart,
//       title: 'Mission-Driven Work',
//       description: 'Make a direct impact on the lives of talented Mongolian students'
//     },
//     {
//       icon: Globe,
//       title: 'Global Team',
//       description: 'Work with colleagues across Mongolia, the US, and internationally'
//     },
//     {
//       icon: BookOpen,
//       title: 'Professional Development',
//       description: 'Access to training, conferences, and continuous learning opportunities'
//     },
//     {
//       icon: Users,
//       title: 'Collaborative Culture',
//       description: 'Join a supportive team dedicated to excellence and innovation'
//     }
//   ];

//   if (selectedJob) {
//     return (
//       <div className="bg-white">
//         {/* Job Detail Header */}
//         <section className="py-20 bg-[#F8F8F8] border-b border-gray-200">
//           <div className="max-w-5xl mx-auto px-6 lg:px-12">
//             <button
//               onClick={() => setSelectedJob(null)}
//               className="text-[#c4151c] hover:underline mb-8 inline-flex items-center gap-2"
//               style={{ fontSize: '0.9rem', fontWeight: 500 }}
//             >
//               ← Back to All Openings
//             </button>
            
//             <div className="mb-6">
//               <div className="inline-block px-4 py-2 bg-[#c4151c] text-white mb-4" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
//                 {selectedJob.department.toUpperCase()}
//               </div>
//             </div>
            
//             <h1 className="serif text-black mb-6">{selectedJob.title}</h1>
            
//             <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
//               <div className="flex items-center gap-2">
//                 <MapPin size={18} className="text-[#c4151c]" />
//                 <span style={{ fontSize: '0.95rem' }}>{selectedJob.location}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock size={18} className="text-[#c4151c]" />
//                 <span style={{ fontSize: '0.95rem' }}>{selectedJob.type}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <DollarSign size={18} className="text-[#c4151c]" />
//                 <span style={{ fontSize: '0.95rem' }}>{selectedJob.salary}</span>
//               </div>
//             </div>

//             <p className="text-gray-500" style={{ fontSize: '0.9rem' }}>
//               Posted: {selectedJob.posted}
//             </p>
//           </div>
//         </section>

//         {/* Job Details */}
//         <section className="py-20 bg-white">
//           <div className="max-w-5xl mx-auto px-6 lg:px-12">
//             <div className="grid lg:grid-cols-3 gap-12">
//               {/* Main Content */}
//               <div className="lg:col-span-2 space-y-12">
//                 <div>
//                   <h3 className="serif text-black mb-4">About the Role</h3>
//                   <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                     {selectedJob.description}
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="serif text-black mb-6">Key Responsibilities</h3>
//                   <ul className="space-y-3">
//                     {selectedJob.responsibilities.map((resp, index) => (
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
//                   <h3 className="serif text-black mb-6">Qualifications</h3>
//                   <ul className="space-y-3">
//                     {selectedJob.qualifications.map((qual, index) => (
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
//                   <h4 className="serif text-black mb-3">Our Commitment to Diversity</h4>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     GobiScholars Foundation is an equal opportunity employer committed to building a diverse and inclusive team. We encourage applications from all qualified candidates regardless of race, ethnicity, religion, gender, sexual orientation, age, or disability status.
//                   </p>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="lg:col-span-1">
//                 <div className="bg-[#F8F8F8] border border-gray-200 p-8 sticky top-8">
//                   <h4 className="serif text-black mb-6">Apply for This Position</h4>
//                   <p className="text-gray-600 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                     To apply, please send your resume, cover letter, and three professional references to:
//                   </p>
//                   <a 
//                     href={`mailto:careers@gobischolars.com?subject=Application: ${selectedJob.title}`}
//                     className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-8 py-4 hover:shadow-xl transition-all rounded-md mb-6"
//                     style={{ fontSize: '1rem', fontWeight: 500 }}
//                   >
//                     <Mail size={20} />
//                     Submit Application
//                   </a>
//                   <p className="text-gray-500 text-center" style={{ fontSize: '0.85rem' }}>
//                     Applications reviewed on a rolling basis
//                   </p>

//                   <div className="mt-8 pt-8 border-t border-gray-300">
//                     <h5 className="serif text-black mb-4" style={{ fontSize: '1rem' }}>Questions?</h5>
//                     <p className="text-gray-600 mb-3" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                       Contact our HR team for more information about this role.
//                     </p>
//                     <a 
//                       href="mailto:hr@gobischolars.com"
//                       className="text-[#c4151c] hover:underline"
//                       style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                     >
//                       hr@gobischolars.com
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
//               JOIN OUR TEAM
//             </div>
//           </div>
//           <h1 className="serif text-black mb-8">
//             Build a Career with Purpose
//           </h1>
//           <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             Join GobiScholars Foundation and help empower Mongolia's brightest students. We're a mission-driven team dedicated to transforming lives through education.
//           </p>
//         </div>
//       </section>

//       {/* Why Work Here */}
//       <section className="py-20 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Why GobiScholars?</h2>
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

//       {/* Current Openings */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Current Openings</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Explore our available positions and find the role that matches your skills and passion
//             </p>
//           </div>

//           <div className="space-y-6">
//             {jobPostings.map((job) => (
//               <div 
//                 key={job.id}
//                 className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => setSelectedJob(job)}
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                   <div className="flex-1">
//                     <div className="flex items-start gap-4 mb-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded flex items-center justify-center flex-shrink-0">
//                         <Briefcase className="text-white" size={24} />
//                       </div>
//                       <div>
//                         <h3 className="serif text-black mb-2">{job.title}</h3>
//                         <div className="text-[#c4151c] mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
//                           {job.department.toUpperCase()}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
//                       <div className="flex items-center gap-2">
//                         <MapPin size={16} className="text-gray-400" />
//                         <span style={{ fontSize: '0.9rem' }}>{job.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Clock size={16} className="text-gray-400" />
//                         <span style={{ fontSize: '0.9rem' }}>{job.type}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <DollarSign size={16} className="text-gray-400" />
//                         <span style={{ fontSize: '0.9rem' }}>{job.salary}</span>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       {job.description}
//                     </p>
//                   </div>

//                   <div className="flex-shrink-0">
//                     <button
//                       className="inline-flex items-center gap-2 bg-[#c4151c] text-white px-8 py-3 hover:bg-[#a01117] transition-colors rounded-md"
//                       style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                     >
//                       View Details
//                       <ArrowRight size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* General Application */}
//       <section className="py-32 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//           <h2 className="serif text-black mb-6">Don't See the Right Role?</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//             We're always interested in hearing from talented individuals who are passionate about our mission. Send us your resume and we'll keep you in mind for future opportunities.
//           </p>
//           <a 
//             href="mailto:careers@gobischolars.com?subject=General Application"
//             className="inline-flex items-center gap-2 border-2 border-[#c4151c] text-[#c4151c] px-10 py-4 hover:bg-[#c4151c] hover:text-white transition-all rounded-md"
//             style={{ fontSize: '1rem', fontWeight: 500 }}
//           >
//             <Mail size={20} />
//             Submit General Application
//           </a>
//         </div>
//       </section>

//       {/* Internship & Volunteer */}
//       <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Other Opportunities</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             <div className="bg-white border border-gray-200 p-10 text-center hover:shadow-xl transition-all duration-300">
//               <BookOpen className="text-[#c4151c] mx-auto mb-6" size={56} />
//               <h3 className="serif text-black mb-4">Internship Program</h3>
//               <p className="text-gray-600 mb-8" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Gain hands-on experience in nonprofit management, program development, and international education. We offer internships throughout the year for students and recent graduates.
//               </p>
//               <Link
//                 to="/foundation/internships"
//                 className="inline-flex items-center gap-2 text-[#c4151c] hover:underline"
//                 style={{ fontSize: '0.9rem', fontWeight: 500 }}
//               >
//                 Learn About Internships
//                 <ArrowRight size={18} />
//               </Link>
//             </div>

//             <div className="bg-white border border-gray-200 p-10 text-center hover:shadow-xl transition-all duration-300">
//               <Heart className="text-[#c4151c] mx-auto mb-6" size={56} />
//               <h3 className="serif text-black mb-4">Volunteer Opportunities</h3>
//               <p className="text-gray-600 mb-8" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Share your expertise and time by volunteering with GobiScholars. We welcome mentors, event volunteers, and professionals offering pro-bono services.
//               </p>
//               <Link
//                 to="/foundation/volunteer"
//                 className="inline-flex items-center gap-2 text-[#c4151c] hover:underline"
//                 style={{ fontSize: '0.9rem', fontWeight: 500 }}
//               >
//                 Get Involved
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }