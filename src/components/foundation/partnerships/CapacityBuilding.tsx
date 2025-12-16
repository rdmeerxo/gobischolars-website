// import React, { useState } from 'react';
// import { GraduationCap, CheckCircle, TrendingUp, Users, Mail, ArrowRight, Award, Target, Lightbulb } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function CapacityBuilding() {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     trainingArea: '',
//     targetGroup: '',
//     participants: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Capacity Building inquiry submitted:', formData);
//     alert('Thank you for your interest in capacity building! Our team will contact you within 3-5 business days.');
//   };

//   const trainingPrograms = [
//     {
//       icon: <Target size={32} />,
//       title: 'Research Methodology Training',
//       description: 'Comprehensive training in quantitative and qualitative research methods tailored for educational research.',
//       topics: [
//         'Study design and sampling',
//         'Survey development and validation',
//         'Interview and focus group techniques',
//         'Research ethics and integrity'
//       ],
//       duration: '4-8 weeks',
//       format: 'Hybrid (online + in-person)'
//     },
//     {
//       icon: <TrendingUp size={32} />,
//       title: 'Data Analysis Workshops',
//       description: 'Hands-on training in statistical analysis and data visualization using industry-standard tools.',
//       topics: [
//         'Statistical analysis (SPSS, R, Stata)',
//         'Qualitative data coding (NVivo, Atlas.ti)',
//         'Data visualization and reporting',
//         'Mixed methods integration'
//       ],
//       duration: '2-4 weeks',
//       format: 'In-person intensive'
//     },
//     {
//       icon: <Users size={32} />,
//       title: 'Mentorship Programs',
//       description: 'Structured mentorship connecting emerging Mongolian researchers with international experts.',
//       topics: [
//         'One-on-one mentorship matching',
//         'Research project guidance',
//         'Publication support',
//         'Career development planning'
//       ],
//       duration: '6-12 months',
//       format: 'Virtual + periodic in-person'
//     },
//     {
//       icon: <Award size={32} />,
//       title: 'Certificate Programs',
//       description: 'Accredited certificate programs in specialized areas of educational research and practice.',
//       topics: [
//         'Educational leadership',
//         'Curriculum design and assessment',
//         'Education policy analysis',
//         'Program evaluation'
//       ],
//       duration: '3-6 months',
//       format: 'Blended learning'
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Lightbulb size={28} />,
//       title: 'Skills Development',
//       description: 'Build practical research and analytical skills that immediately enhance professional capacity.'
//     },
//     {
//       icon: <Users size={28} />,
//       title: 'Peer Networks',
//       description: 'Connect with fellow researchers and practitioners across Mongolia and internationally.'
//     },
//     {
//       icon: <Award size={28} />,
//       title: 'Credentials & Recognition',
//       description: 'Earn certificates and credentials from internationally recognized institutions.'
//     },
//     {
//       icon: <TrendingUp size={28} />,
//       title: 'Career Advancement',
//       description: 'Enhanced skills and credentials open doors to new opportunities and leadership roles.'
//     }
//   ];

//   const successStories = [
//     {
//       name: 'Dr. Bayarmaa T.',
//       role: 'University Researcher',
//       program: 'Research Methodology Training 2022',
//       outcome: 'Led first national study on early childhood education, now advising Ministry of Education'
//     },
//     {
//       name: 'Enkhjargal S.',
//       role: 'School Principal',
//       program: 'Educational Leadership Certificate 2023',
//       outcome: 'Implemented data-driven school improvement plan, student outcomes improved 25%'
//     },
//     {
//       name: 'Ganbaatar D.',
//       role: 'Policy Analyst',
//       program: 'Data Analysis Workshop 2021',
//       outcome: 'Developed national education dashboard now used by all aimag education departments'
//     }
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'Needs Assessment',
//       description: 'Identify specific capacity gaps and training needs through consultation with stakeholders.'
//     },
//     {
//       step: '02',
//       title: 'Program Design',
//       description: 'Develop customized curriculum and training materials aligned with identified needs.'
//     },
//     {
//       step: '03',
//       title: 'Participant Selection',
//       description: 'Recruit and select participants through transparent application and nomination process.'
//     },
//     {
//       step: '04',
//       title: 'Training Delivery',
//       description: 'Implement program with expert facilitators, hands-on practice, and continuous support.'
//     },
//     {
//       step: '05',
//       title: 'Follow-Up & Mentoring',
//       description: 'Provide ongoing support and mentorship to ensure skills are applied in practice.'
//     }
//   ];

//   const targetGroups = [
//     'University Faculty & Researchers',
//     'School Teachers & Principals',
//     'Ministry & Government Officials',
//     'NGO Program Staff',
//     'Graduate Students',
//     'Education Consultants'
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
//             alt="Capacity building workshop"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
        
//         <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
//           <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20">
//             <GraduationCap size={20} />
//             <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 500 }}>
//               RESEARCH PARTNERSHIP
//             </span>
//           </div>
//           <h1 className="serif text-white mb-8" style={{ fontSize: '4.5rem', lineHeight: 1.1 }}>
//             Capacity Building
//           </h1>
//           <p className="text-white/90 max-w-3xl mx-auto" style={{ fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 300 }}>
//             Partner on training programs that strengthen research capacity among Mongolian educators and researchers.
//           </p>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div>
//               <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//                 Investing in People, Building the Future
//               </h2>
//               <div className="w-20 h-[2px] bg-[#c4151c] mb-8" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Capacity building is at the heart of sustainable educational improvement. By strengthening the skills and knowledge of Mongolian educators and researchers, we create lasting change that extends far beyond individual projects.
//               </p>
//               <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Our training programs combine international best practices with local context, ensuring participants gain practical skills they can immediately apply in their work.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Over 500 educators trained since 2018
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     15+ certificate programs offered
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Partnerships with leading international institutions
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     95% of participants report applying new skills within 3 months
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
//                 alt="Training session"
//                 className="w-full h-[500px] object-cover shadow-2xl"
//               />
//               <div className="absolute inset-0 border-2 border-[#c4151c] -z-10 translate-x-6 translate-y-6" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Training Programs */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Training Programs
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Comprehensive training programs designed to build research and leadership capacity.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {trainingPrograms.map((program, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-10 border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="text-[#c4151c] mb-6">{program.icon}</div>
//                 <h3 className="serif text-black mb-4" style={{ fontSize: '1.6rem' }}>
//                   {program.title}
//                 </h3>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                 <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                   {program.description}
//                 </p>
                
//                 <div className="flex gap-3 mb-6 flex-wrap">
//                   <span className="px-4 py-2 bg-[#c4151c]/10 text-[#c4151c] rounded-lg" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     {program.duration}
//                   </span>
//                   <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     {program.format}
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <p className="text-gray-600" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', fontWeight: 500 }}>
//                     TOPICS COVERED:
//                   </p>
//                   {program.topics.map((topic, tIndex) => (
//                     <div key={tIndex} className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.9rem' }}>
//                         {topic}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Program Benefits
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex gap-6 items-start p-8 bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
//                 <div className="bg-[#c4151c]/10 p-4 rounded-lg flex-shrink-0">
//                   <div className="text-[#c4151c]">{benefit.icon}</div>
//                 </div>
//                 <div>
//                   <h3 className="serif text-black mb-3" style={{ fontSize: '1.3rem' }}>
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     {benefit.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Target Groups */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Who Can Benefit?
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Our capacity building programs serve diverse groups within Mongolia's education sector.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {targetGroups.map((group, index) => (
//               <div 
//                 key={index}
//                 className="p-8 bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-lg transition-all text-center"
//               >
//                 <div className="text-[#c4151c] mb-4">
//                   <Users size={32} className="mx-auto" />
//                 </div>
//                 <p className="text-gray-800" style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.6 }}>
//                   {group}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               How We Build Capacity
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Our systematic approach ensures training leads to lasting capacity development.
//             </p>
//           </div>

//           <div className="space-y-12">
//             {process.map((item, index) => (
//               <div key={index} className="flex gap-8 items-start">
//                 <div className="flex-shrink-0">
//                   <div className="w-20 h-20 rounded-full bg-[#c4151c] flex items-center justify-center">
//                     <span className="serif text-white" style={{ fontSize: '1.5rem' }}>
//                       {item.step}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex-1 pt-3">
//                   <h3 className="serif text-black mb-3" style={{ fontSize: '1.8rem' }}>
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Success Stories
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto" />
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {successStories.map((story, index) => (
//               <div 
//                 key={index}
//                 className="p-8 bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="mb-6">
//                   <h4 className="serif text-black mb-2" style={{ fontSize: '1.3rem' }}>
//                     {story.name}
//                   </h4>
//                   <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                     {story.role}
//                   </p>
//                 </div>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                 <p className="text-gray-600 mb-4" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                   {story.program}
//                 </p>
//                 <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   {story.outcome}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Form */}
//       <section className="py-32 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3.5rem' }}>
//               Partner on Capacity Building
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Share your capacity building needs and let's design a program together.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Organization Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.organizationName}
//                   onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Contact Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.contactName}
//                   onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Training Area of Interest *
//                 </label>
//                 <select
//                   required
//                   value={formData.trainingArea}
//                   onChange={(e) => setFormData({ ...formData, trainingArea: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 >
//                   <option value="">Select training area</option>
//                   <option value="research">Research Methodology</option>
//                   <option value="data">Data Analysis</option>
//                   <option value="mentorship">Mentorship Program</option>
//                   <option value="certificate">Certificate Program</option>
//                   <option value="other">Other/Custom</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Target Group
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.targetGroup}
//                   onChange={(e) => setFormData({ ...formData, targetGroup: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                   placeholder="e.g., University faculty"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Expected Number of Participants
//               </label>
//               <input
//                 type="text"
//                 value={formData.participants}
//                 onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                 style={{ fontSize: '1rem' }}
//                 placeholder="e.g., 20-30 participants"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Capacity Building Needs *
//               </label>
//               <textarea
//                 required
//                 rows={6}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg resize-none"
//                 style={{ fontSize: '1rem', lineHeight: 1.7 }}
//                 placeholder="Describe the capacity gaps you'd like to address and your vision for the training program..."
//               />
//             </div>

//             <div className="text-center pt-4">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-14 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//                 style={{ fontSize: '1.05rem', fontWeight: 500 }}
//               >
//                 Submit Training Proposal
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-24 bg-gradient-to-br from-[#c4151c] to-[#a01117] text-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <h2 className="serif text-white mb-6" style={{ fontSize: '2.5rem' }}>
//             Questions About Capacity Building?
//           </h2>
//           <p className="text-white/90 mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//             Our training team can help you design a program that meets your specific needs.
//           </p>
//           <a
//             href="mailto:training@gobischolars.org"
//             className="inline-flex items-center gap-3 bg-white text-[#c4151c] px-10 py-4 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//             style={{ fontSize: '1rem', fontWeight: 500 }}
//           >
//             <Mail size={20} />
//             training@gobischolars.org
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
