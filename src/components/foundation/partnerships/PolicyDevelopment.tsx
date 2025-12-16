// import React, { useState } from 'react';
// import { FileText, CheckCircle, Target, Users, Mail, ArrowRight, Award, TrendingUp, Lightbulb, Building } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function PolicyDevelopment() {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     policyArea: '',
//     stakeholders: '',
//     timeline: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Policy Development inquiry submitted:', formData);
//     alert('Thank you for your interest in policy collaboration! Our team will contact you within 3-5 business days.');
//   };

//   const policyAreas = [
//     {
//       icon: <Target size={32} />,
//       title: 'Teacher Policy',
//       description: 'Evidence-based recommendations for teacher recruitment, training, evaluation, and professional development.',
//       recentWork: 'National Teacher Competency Framework (2023)',
//       impact: 'Adopted by Ministry of Education for all teacher training programs'
//     },
//     {
//       icon: <Users size={32} />,
//       title: 'Education Equity',
//       description: 'Policies to ensure equal access to quality education across urban and rural areas.',
//       recentWork: 'Rural Education Access Study (2022)',
//       impact: 'Informed $15M investment in rural school infrastructure'
//     },
//     {
//       icon: <TrendingUp size={32} />,
//       title: 'Curriculum Reform',
//       description: 'Data-driven recommendations for curriculum modernization and skills alignment with labor market needs.',
//       recentWork: '21st Century Skills Integration Policy Brief (2023)',
//       impact: 'New national curriculum framework implemented in pilot schools'
//     },
//     {
//       icon: <Award size={32} />,
//       title: 'Student Assessment',
//       description: 'Policies for fair, comprehensive student learning assessment and accountability systems.',
//       recentWork: 'National Learning Assessment Framework (2022)',
//       impact: 'New assessment system piloted in 100+ schools nationwide'
//     }
//   ];

//   const approaches = [
//     {
//       icon: <Lightbulb size={28} />,
//       title: 'Evidence-Based',
//       description: 'All policy recommendations grounded in rigorous research and data analysis.'
//     },
//     {
//       icon: <Users size={28} />,
//       title: 'Stakeholder Engagement',
//       description: 'Inclusive consultation process involving educators, officials, parents, and students.'
//     },
//     {
//       icon: <Building size={28} />,
//       title: 'Contextual Relevance',
//       description: 'International best practices adapted to Mongolia\'s unique educational context.'
//     },
//     {
//       icon: <Target size={28} />,
//       title: 'Implementation Focus',
//       description: 'Practical, actionable recommendations with clear implementation pathways.'
//     }
//   ];

//   const policyProducts = [
//     {
//       type: 'Policy Briefs',
//       description: 'Concise, accessible summaries of research findings with clear policy implications',
//       audience: 'Government officials, policymakers'
//     },
//     {
//       type: 'White Papers',
//       description: 'Comprehensive analysis of policy issues with detailed recommendations',
//       audience: 'Ministry leadership, international partners'
//     },
//     {
//       type: 'Position Papers',
//       description: 'Advocacy documents making the case for specific policy changes',
//       audience: 'Civil society, advocacy organizations'
//     },
//     {
//       type: 'Implementation Guides',
//       description: 'Step-by-step guidance for putting policies into practice',
//       audience: 'School administrators, local education officials'
//     }
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'Issue Identification',
//       description: 'Identify critical policy gaps through stakeholder consultation and data analysis.'
//     },
//     {
//       step: '02',
//       title: 'Research & Analysis',
//       description: 'Conduct rigorous research combining quantitative data, qualitative insights, and international benchmarking.'
//     },
//     {
//       step: '03',
//       title: 'Stakeholder Consultation',
//       description: 'Engage diverse stakeholders to gather input, build consensus, and ensure relevance.'
//     },
//     {
//       step: '04',
//       title: 'Policy Formulation',
//       description: 'Draft evidence-based policy recommendations with clear implementation strategies.'
//     },
//     {
//       step: '05',
//       title: 'Dissemination & Advocacy',
//       description: 'Present findings to policymakers, publish briefs, and support implementation.'
//     }
//   ];

//   const recentProjects = [
//     {
//       title: 'National Teacher Development Policy',
//       year: '2022-2023',
//       partner: 'Ministry of Education & Science',
//       description: 'Comprehensive policy framework for teacher professional development aligned with international standards',
//       outcomes: [
//         'New competency framework adopted nationally',
//         'Teacher training programs redesigned',
//         'Annual professional development requirements established'
//       ]
//     },
//     {
//       title: 'Early Childhood Education Expansion',
//       year: '2021-2022',
//       partner: 'Asian Development Bank & Ministry of Education',
//       description: 'Policy recommendations for expanding access to quality early childhood education in rural areas',
//       outcomes: [
//         'Government allocated $8M for ECE expansion',
//         '50 new kindergartens opened in rural aimags',
//         'ECE teacher training program established'
//       ]
//     },
//     {
//       title: 'STEM Education Strategy',
//       year: '2023-2024',
//       partner: 'World Bank & National University of Mongolia',
//       description: 'National strategy for strengthening STEM education from primary through higher education',
//       outcomes: [
//         'National STEM strategy launched',
//         'STEM labs established in 100 schools',
//         'STEM teacher training program initiated'
//       ]
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
//             alt="Policy development"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
        
//         <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
//           <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20">
//             <FileText size={20} />
//             <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 500 }}>
//               RESEARCH PARTNERSHIP
//             </span>
//           </div>
//           <h1 className="serif text-white mb-8" style={{ fontSize: '4.5rem', lineHeight: 1.1 }}>
//             Policy Development
//           </h1>
//           <p className="text-white/90 max-w-3xl mx-auto" style={{ fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 300 }}>
//             Collaborate on evidence-based policy recommendations for educational improvement in Mongolia.
//           </p>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div>
//               <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//                 Bridging Research and Policy
//               </h2>
//               <div className="w-20 h-[2px] bg-[#c4151c] mb-8" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Effective education policy requires rigorous evidence, contextual understanding, and inclusive stakeholder engagement. We partner with governments, international organizations, and civil society to translate research into actionable policy.
//               </p>
//               <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Our policy work combines quantitative analysis, qualitative insights, international best practices, and deep knowledge of Mongolia's educational landscape to create recommendations that are both ambitious and achievable.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     15+ policy briefs published since 2019
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Direct advisory role to Ministry of Education
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Partnerships with international development agencies
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Proven track record of influencing national policy
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
//                 alt="Policy discussion"
//                 className="w-full h-[500px] object-cover shadow-2xl"
//               />
//               <div className="absolute inset-0 border-2 border-[#c4151c] -z-10 translate-x-6 translate-y-6" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Policy Areas */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Priority Policy Areas
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               We focus on strategic policy areas with high potential for educational improvement.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {policyAreas.map((area, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-10 border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="text-[#c4151c] mb-6">{area.icon}</div>
//                 <h3 className="serif text-black mb-4" style={{ fontSize: '1.6rem' }}>
//                   {area.title}
//                 </h3>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                 <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                   {area.description}
//                 </p>
                
//                 <div className="bg-gray-50 p-5 border-l-2 border-[#c4151c] mb-4">
//                   <p className="text-gray-600 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em' }}>
//                     RECENT WORK:
//                   </p>
//                   <p className="text-gray-800 mb-3" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                     {area.recentWork}
//                   </p>
//                   <div className="flex items-start gap-2">
//                     <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                     <p className="text-gray-700" style={{ fontSize: '0.9rem' }}>
//                       {area.impact}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Our Policy Approach
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {approaches.map((approach, index) => (
//               <div key={index} className="flex gap-6 items-start p-8 bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
//                 <div className="bg-[#c4151c]/10 p-4 rounded-lg flex-shrink-0">
//                   <div className="text-[#c4151c]">{approach.icon}</div>
//                 </div>
//                 <div>
//                   <h3 className="serif text-black mb-3" style={{ fontSize: '1.3rem' }}>
//                     {approach.title}
//                   </h3>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     {approach.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Policy Products */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Policy Deliverables
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               We produce diverse policy products tailored to different audiences and purposes.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {policyProducts.map((product, index) => (
//               <div 
//                 key={index}
//                 className="p-8 bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-lg transition-all"
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <FileText className="text-[#c4151c] flex-shrink-0" size={28} />
//                   <h3 className="serif text-black" style={{ fontSize: '1.4rem' }}>
//                     {product.type}
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   {product.description}
//                 </p>
//                 <div className="pt-4 border-t border-gray-200">
//                   <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>
//                     <strong>Audience:</strong> {product.audience}
//                   </p>
//                 </div>
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
//               Policy Development Process
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Our systematic approach ensures policy recommendations are evidence-based and implementable.
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

//       {/* Recent Projects */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Recent Policy Projects
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto" />
//           </div>

//           <div className="space-y-10">
//             {recentProjects.map((project, index) => (
//               <div 
//                 key={index}
//                 className="p-10 bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h3 className="serif text-black mb-3" style={{ fontSize: '1.8rem' }}>
//                       {project.title}
//                     </h3>
//                     <div className="flex gap-4 flex-wrap">
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Year:</strong> {project.year}
//                       </span>
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Partner:</strong> {project.partner}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                   {project.description}
//                 </p>

//                 <div className="bg-gray-50 p-6 rounded-lg">
//                   <p className="text-gray-600 mb-4" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em' }}>
//                     KEY OUTCOMES:
//                   </p>
//                   <div className="space-y-3">
//                     {project.outcomes.map((outcome, oIndex) => (
//                       <div key={oIndex} className="flex items-start gap-3">
//                         <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                         <span className="text-gray-700" style={{ fontSize: '0.95rem' }}>
//                           {outcome}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
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
//               Propose a Policy Partnership
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Share your policy challenge and let's work together on evidence-based solutions.
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
//                   Policy Area *
//                 </label>
//                 <select
//                   required
//                   value={formData.policyArea}
//                   onChange={(e) => setFormData({ ...formData, policyArea: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 >
//                   <option value="">Select policy area</option>
//                   <option value="teacher">Teacher Policy</option>
//                   <option value="equity">Education Equity</option>
//                   <option value="curriculum">Curriculum Reform</option>
//                   <option value="assessment">Student Assessment</option>
//                   <option value="financing">Education Financing</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Key Stakeholders
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.stakeholders}
//                   onChange={(e) => setFormData({ ...formData, stakeholders: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                   placeholder="e.g., Ministry, Schools, NGOs"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Proposed Timeline
//               </label>
//               <input
//                 type="text"
//                 value={formData.timeline}
//                 onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                 style={{ fontSize: '1rem' }}
//                 placeholder="e.g., 6-12 months"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Policy Challenge & Objectives *
//               </label>
//               <textarea
//                 required
//                 rows={6}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg resize-none"
//                 style={{ fontSize: '1rem', lineHeight: 1.7 }}
//                 placeholder="Describe the policy issue you'd like to address and the outcomes you hope to achieve..."
//               />
//             </div>

//             <div className="text-center pt-4">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-14 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//                 style={{ fontSize: '1.05rem', fontWeight: 500 }}
//               >
//                 Submit Policy Proposal
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
//             Questions About Policy Partnerships?
//           </h2>
//           <p className="text-white/90 mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//             Our policy team can discuss how research can inform your policy priorities.
//           </p>
//           <a
//             href="mailto:policy@gobischolars.org"
//             className="inline-flex items-center gap-3 bg-white text-[#c4151c] px-10 py-4 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//             style={{ fontSize: '1rem', fontWeight: 500 }}
//           >
//             <Mail size={20} />
//             policy@gobischolars.org
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
