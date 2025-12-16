// import React, { useState } from 'react';
// import { BookOpen, CheckCircle, Target, Users, FileText, Mail, ArrowRight, Lightbulb, Award } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function JointResearchProjects() {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     researchTopic: '',
//     timeline: '',
//     fundingStatus: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Joint Research inquiry submitted:', formData);
//     alert('Thank you for your research partnership inquiry! Our team will contact you within 3-5 business days.');
//   };

//   const researchAreas = [
//     'Teacher Professional Development',
//     'Curriculum Innovation',
//     'Educational Technology',
//     'Rural Education Access',
//     'STEM Education',
//     'Early Childhood Education',
//     'Higher Education Policy',
//     'Student Assessment & Learning Outcomes'
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'Initial Consultation',
//       description: 'Submit your research idea and meet with our research team to explore alignment and feasibility.'
//     },
//     {
//       step: '02',
//       title: 'Proposal Development',
//       description: 'Collaboratively develop a detailed research proposal including methodology, timeline, and budget.'
//     },
//     {
//       step: '03',
//       title: 'Funding & Approval',
//       description: 'Secure funding through joint grant applications or institutional support. Obtain necessary approvals.'
//     },
//     {
//       step: '04',
//       title: 'Research Implementation',
//       description: 'Execute the research project with regular check-ins, data collection, and collaborative analysis.'
//     },
//     {
//       step: '05',
//       title: 'Publication & Dissemination',
//       description: 'Co-author publications, present at conferences, and share findings with stakeholders.'
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Target size={28} />,
//       title: 'Co-Authorship Opportunities',
//       description: 'Equal recognition through co-authored publications in peer-reviewed journals and policy briefs.'
//     },
//     {
//       icon: <Users size={28} />,
//       title: 'Field Research Access',
//       description: 'Direct access to schools, educators, and students across Mongolia for data collection.'
//     },
//     {
//       icon: <FileText size={28} />,
//       title: 'Shared Resources',
//       description: 'Access to existing datasets, research infrastructure, and local expertise.'
//     },
//     {
//       icon: <Award size={28} />,
//       title: 'Joint Grant Applications',
//       description: 'Strengthen funding proposals through international collaboration and local implementation.'
//     }
//   ];

//   const pastProjects = [
//     {
//       title: 'Impact of Professional Development on Teaching Quality',
//       partner: 'Stanford Graduate School of Education',
//       year: '2022-2023',
//       outcome: 'Published in International Journal of Educational Development'
//     },
//     {
//       title: 'Technology Integration in Rural Mongolian Schools',
//       partner: 'UNESCO Bangkok',
//       year: '2021-2022',
//       outcome: 'Informed national digital education policy'
//     },
//     {
//       title: 'Early Grade Reading Assessment',
//       partner: 'World Bank Education Global Practice',
//       year: '2023-2024',
//       outcome: 'Created national reading benchmarks for grades 1-3'
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
//             alt="Research collaboration"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
        
//         <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
//           <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20">
//             <BookOpen size={20} />
//             <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 500 }}>
//               RESEARCH PARTNERSHIP
//             </span>
//           </div>
//           <h1 className="serif text-white mb-8" style={{ fontSize: '4.5rem', lineHeight: 1.1 }}>
//             Joint Research Projects
//           </h1>
//           <p className="text-white/90 max-w-3xl mx-auto" style={{ fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 300 }}>
//             Collaborate on original research addressing critical questions in Mongolian education policy and practice.
//           </p>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div>
//               <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//                 Why Partner on Research?
//               </h2>
//               <div className="w-20 h-[2px] bg-[#c4151c] mb-8" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Joint research partnerships allow us to tackle complex educational challenges through rigorous academic inquiry combined with on-the-ground implementation expertise.
//               </p>
//               <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Our collaborative approach ensures research is both academically sound and practically relevant, creating evidence that drives real change in Mongolian classrooms.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Access to 200+ schools across Mongolia
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Established relationships with Ministry of Education
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Bilingual research team (Mongolian/English)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Expertise in mixed-methods research design
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
//                 alt="Research team"
//                 className="w-full h-[500px] object-cover shadow-2xl"
//               />
//               <div className="absolute inset-0 border-2 border-[#c4151c] -z-10 translate-x-6 translate-y-6" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Research Process */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Research Partnership Process
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               From initial idea to published findings, we guide you through every stage of collaborative research.
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

//       {/* Benefits */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Partnership Benefits
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

//       {/* Research Areas */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Priority Research Areas
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               We welcome research proposals across all aspects of education, with particular interest in these strategic areas.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {researchAreas.map((area, index) => (
//               <div 
//                 key={index}
//                 className="p-6 bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-lg transition-all text-center"
//               >
//                 <div className="text-[#c4151c] mb-4">
//                   <Lightbulb size={32} className="mx-auto" />
//                 </div>
//                 <p className="text-gray-800" style={{ fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.6 }}>
//                   {area}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Past Projects */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Recent Collaborative Projects
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto" />
//           </div>

//           <div className="space-y-8">
//             {pastProjects.map((project, index) => (
//               <div 
//                 key={index}
//                 className="p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//                   <div className="flex-1">
//                     <h3 className="serif text-black mb-3" style={{ fontSize: '1.5rem' }}>
//                       {project.title}
//                     </h3>
//                     <div className="flex flex-wrap gap-4 mb-4">
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Partner:</strong> {project.partner}
//                       </span>
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Year:</strong> {project.year}
//                       </span>
//                     </div>
//                     <div className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                       <p className="text-gray-700" style={{ fontSize: '0.95rem' }}>
//                         {project.outcome}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Form */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3.5rem' }}>
//               Propose a Joint Research Project
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Share your research idea with us and let's explore how we can collaborate.
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

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Research Topic/Area *
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.researchTopic}
//                 onChange={(e) => setFormData({ ...formData, researchTopic: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                 style={{ fontSize: '1rem' }}
//                 placeholder="e.g., Teacher professional development in rural areas"
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Proposed Timeline
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.timeline}
//                   onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                   placeholder="e.g., 12-18 months"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Funding Status
//                 </label>
//                 <select
//                   value={formData.fundingStatus}
//                   onChange={(e) => setFormData({ ...formData, fundingStatus: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 >
//                   <option value="">Select funding status</option>
//                   <option value="secured">Funding Secured</option>
//                   <option value="pending">Funding Pending</option>
//                   <option value="seeking">Seeking Joint Funding</option>
//                   <option value="unfunded">Not Yet Funded</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Research Proposal Summary *
//               </label>
//               <textarea
//                 required
//                 rows={6}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg resize-none"
//                 style={{ fontSize: '1rem', lineHeight: 1.7 }}
//                 placeholder="Briefly describe your research question, methodology, and expected outcomes..."
//               />
//             </div>

//             <div className="text-center pt-4">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-14 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//                 style={{ fontSize: '1.05rem', fontWeight: 500 }}
//               >
//                 Submit Research Proposal
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
//             Questions About Research Partnerships?
//           </h2>
//           <p className="text-white/90 mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//             Our research team is available to discuss potential collaborations and answer your questions.
//           </p>
//           <a
//             href="mailto:research@gobischolars.org"
//             className="inline-flex items-center gap-3 bg-white text-[#c4151c] px-10 py-4 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//             style={{ fontSize: '1rem', fontWeight: 500 }}
//           >
//             <Mail size={20} />
//             research@gobischolars.org
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
