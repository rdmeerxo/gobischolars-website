// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   BookOpen, 
//   Users, 
//   Globe, 
//   Target, 
//   Award, 
//   TrendingUp,
//   CheckCircle,
//   Mail,
//   Building,
//   GraduationCap,
//   Lightbulb,
//   FileText
// } from 'lucide-react';

// export default function FoundationPartnerships() {
//   const [formData, setFormData] = useState({
//     organizationType: '',
//     organizationName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     partnershipType: '',
//     researchArea: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Partnership inquiry submitted:', formData);
//     // Handle form submission
//   };

//   const partnershipTypes = [
//     {
//       icon: <BookOpen size={40} />,
//       title: 'Joint Research Projects',
//       description: 'Collaborate on original research addressing critical questions in Mongolian education policy and practice.',
//       benefits: [
//         'Co-authorship on publications',
//         'Access to field research sites',
//         'Shared data and resources',
//         'Joint grant applications'
//       ],
//       link: '/foundation/partnerships/joint-research'
//     },
//     {
//       icon: <Users size={40} />,
//       title: 'Knowledge Exchange',
//       description: 'Facilitate reciprocal learning through researcher exchanges, guest lectures, and collaborative workshops.',
//       benefits: [
//         'Faculty exchange programs',
//         'Guest lecture opportunities',
//         'Workshop collaborations',
//         'Professional development'
//       ],
//       link: '/foundation/partnerships/knowledge-exchange'
//     },
//     {
//       icon: <GraduationCap size={40} />,
//       title: 'Capacity Building',
//       description: 'Partner on training programs that strengthen research capacity among Mongolian educators and researchers.',
//       benefits: [
//         'Research methodology training',
//         'Data analysis workshops',
//         'Mentorship programs',
//         'Certificate programs'
//       ],
//       link: '/foundation/partnerships/capacity-building'
//     },
//     {
//       icon: <FileText size={40} />,
//       title: 'Policy Development',
//       description: 'Collaborate on evidence-based policy recommendations for educational improvement in Mongolia.',
//       benefits: [
//         'Policy brief co-authorship',
//         'Stakeholder engagement',
//         'Government advisory roles',
//         'Implementation support'
//       ],
//       link: '/foundation/partnerships/policy-development'
//     }
//   ];

//   const currentPartners = [
//     {
//       name: 'Stanford Graduate School of Education',
//       type: 'University',
//       focus: 'Teacher development and curriculum innovation',
//       since: '2021'
//     },
//     {
//       name: 'Asian Development Bank',
//       type: 'International Organization',
//       focus: 'Education financing and policy analysis',
//       since: '2020'
//     },
//     {
//       name: 'National University of Mongolia',
//       type: 'University',
//       focus: 'Local educational research and implementation',
//       since: '2019'
//     },
//     {
//       name: 'UNESCO Bangkok',
//       type: 'International Organization',
//       focus: 'Regional education benchmarking',
//       since: '2022'
//     },
//     {
//       name: 'Harvard Graduate School of Education',
//       type: 'University',
//       focus: 'Educational leadership and systems change',
//       since: '2023'
//     },
//     {
//       name: 'World Bank Education Global Practice',
//       type: 'International Organization',
//       focus: 'Education systems strengthening',
//       since: '2021'
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Target size={32} />,
//       title: 'Real-World Impact',
//       description: 'Research directly informs policy and practice, creating tangible improvements in Mongolian education.'
//     },
//     {
//       icon: <Globe size={32} />,
//       title: 'Global Network',
//       description: 'Connect with leading researchers, institutions, and organizations working on education worldwide.'
//     },
//     {
//       icon: <Award size={32} />,
//       title: 'Publication Opportunities',
//       description: 'Co-author high-quality publications reaching academic and policy audiences internationally.'
//     },
//     {
//       icon: <TrendingUp size={32} />,
//       title: 'Funding Support',
//       description: 'Access to grant writing support and collaborative funding opportunities from international donors.'
//     },
//     {
//       icon: <Users size={32} />,
//       title: 'Field Access',
//       description: 'Direct access to schools, teachers, students, and policymakers across Mongolia for research.'
//     },
//     {
//       icon: <Lightbulb size={32} />,
//       title: 'Innovation Platform',
//       description: 'Test and scale innovative educational approaches in a dynamic, reform-oriented environment.'
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="py-32 bg-[#F8F8F8] dharmachakra-bg">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 border border-gray-300 mb-6" style={{ fontSize: '0.85rem', letterSpacing: '0.15em' }}>
//               RESEARCH PARTNERSHIPS
//             </div>
//           </div>
//           <h1 className="serif text-black mb-8">
//             Partner With Us to Advance<br />Educational Excellence
//           </h1>
//           <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             We collaborate with universities, research institutions, think tanks, and international organizations to conduct rigorous research that drives meaningful change in Mongolia's education system.
//           </p>
//         </div>
//       </section>

//       {/* Why Partner */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Why Partner With GobiScholars</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Our partnerships create value for researchers, institutions, and most importantly, the students and educators we serve
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="border border-gray-200 p-10 hover:border-[#c4151c] transition-colors">
//                 <div className="text-[#c4151c] mb-6">{benefit.icon}</div>
//                 <h4 className="serif text-black mb-4">{benefit.title}</h4>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                 <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                   {benefit.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnership Types */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Partnership Opportunities</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               We offer flexible partnership models tailored to your institution's strengths and priorities
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {partnershipTypes.map((type, index) => (
//               <div key={index} className="bg-white border border-gray-200 hover:border-[#c4151c] transition-all hover:shadow-lg">
//                 <div className="p-10">
//                   <div className="text-[#c4151c] mb-6">{type.icon}</div>
//                   <h3 className="serif text-black mb-4">{type.title}</h3>
//                   <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                   <p className="text-gray-700 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                     {type.description}
//                   </p>
//                   <div className="space-y-3">
//                     <p className="text-gray-600" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
//                       INCLUDES:
//                     </p>
//                     {type.benefits.map((benefit, bIndex) => (
//                       <div key={bIndex} className="flex items-start gap-3">
//                         <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                         <span className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                           {benefit}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="mt-6">
//                     <Link
//                       to={type.link}
//                       className="inline-flex items-center gap-2 text-[#c4151c] hover:underline"
//                       style={{ fontSize: '0.95rem', fontWeight: 500 }}
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Current Partners */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Our Partners</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               We're proud to collaborate with world-class institutions committed to educational excellence
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentPartners.map((partner, index) => (
//               <div key={index} className="border border-gray-200 p-8 hover:border-[#c4151c] transition-colors">
//                 <div className="mb-4">
//                   <Building className="text-[#c4151c]" size={32} />
//                 </div>
//                 <h4 className="serif text-black mb-2">{partner.name}</h4>
//                 <p className="text-gray-500 mb-4" style={{ fontSize: '0.85rem' }}>
//                   {partner.type}
//                 </p>
//                 <p className="text-gray-700 mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                   {partner.focus}
//                 </p>
//                 <div className="pt-4 border-t border-gray-200">
//                   <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>
//                     Partners since {partner.since}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnership Process */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Partnership Process</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Our collaborative, transparent approach ensures partnerships deliver value for all stakeholders
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-white border border-gray-200 p-8">
//               <div className="flex items-start gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c4151c] text-white flex items-center justify-center" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   1
//                 </div>
//                 <div>
//                   <h4 className="serif text-black mb-3">Initial Inquiry</h4>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Submit a partnership inquiry using the form below, describing your institution, areas of interest, and potential collaboration ideas.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <div className="flex items-start gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c4151c] text-white flex items-center justify-center" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   2
//                 </div>
//                 <div>
//                   <h4 className="serif text-black mb-3">Exploratory Conversation</h4>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Our team will schedule a conversation to discuss mutual interests, explore partnership opportunities, and assess alignment.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <div className="flex items-start gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c4151c] text-white flex items-center justify-center" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   3
//                 </div>
//                 <div>
//                   <h4 className="serif text-black mb-3">Partnership Design</h4>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Together, we'll design a partnership framework outlining objectives, activities, responsibilities, timelines, and success metrics.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <div className="flex items-start gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c4151c] text-white flex items-center justify-center" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   4
//                 </div>
//                 <div>
//                   <h4 className="serif text-black mb-3">Formalization</h4>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     We'll execute a memorandum of understanding or formal agreement documenting our collaboration and commitments.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-8">
//               <div className="flex items-start gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c4151c] text-white flex items-center justify-center" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   5
//                 </div>
//                 <div>
//                   <h4 className="serif text-black mb-3">Collaboration & Impact</h4>
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Execute partnership activities, maintain regular communication, and continuously evaluate impact and opportunities for enhancement.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partnership Inquiry Form */}
//       <section className="py-32 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Start a Conversation</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               We welcome partnership inquiries from universities, research institutions, think tanks, and organizations committed to educational excellence.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Organization Information */}
//             <div className="border border-gray-200 p-10">
//               <h3 className="serif text-black mb-8">Organization Information</h3>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Organization Type *
//                   </label>
//                   <select
//                     name="organizationType"
//                     value={formData.organizationType}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   >
//                     <option value="">Select type</option>
//                     <option value="university">University</option>
//                     <option value="research-institution">Research Institution</option>
//                     <option value="think-tank">Think Tank</option>
//                     <option value="ngo">NGO</option>
//                     <option value="international-org">International Organization</option>
//                     <option value="government">Government Agency</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Organization Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="organizationName"
//                     value={formData.organizationName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="border border-gray-200 p-10">
//               <h3 className="serif text-black mb-8">Contact Information</h3>
              
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Contact Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="contactName"
//                     value={formData.contactName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>
//             </div>

//             {/* Partnership Details */}
//             <div className="border border-gray-200 p-10">
//               <h3 className="serif text-black mb-8">Partnership Interest</h3>
              
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Partnership Type *
//                   </label>
//                   <select
//                     name="partnershipType"
//                     value={formData.partnershipType}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   >
//                     <option value="">Select type</option>
//                     <option value="joint-research">Joint Research Projects</option>
//                     <option value="knowledge-exchange">Knowledge Exchange</option>
//                     <option value="capacity-building">Capacity Building</option>
//                     <option value="policy-development">Policy Development</option>
//                     <option value="multiple">Multiple Areas</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Research Area of Interest
//                   </label>
//                   <select
//                     name="researchArea"
//                     value={formData.researchArea}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   >
//                     <option value="">Select area</option>
//                     <option value="curriculum">Curriculum Development</option>
//                     <option value="teacher-training">Teacher Training</option>
//                     <option value="access-equity">Access & Equity</option>
//                     <option value="innovation">Innovation in Learning</option>
//                     <option value="policy">Policy Analysis</option>
//                     <option value="benchmarking">International Benchmarking</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Tell us about your partnership interests and ideas *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                   style={{ fontSize: '0.95rem', lineHeight: 1.7 }}
//                   placeholder="Please describe your organization's expertise, partnership interests, and any specific collaboration ideas you'd like to explore..."
//                 />
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-12 py-4 hover:shadow-xl transition-all rounded-md"
//                 style={{ fontSize: '1rem', fontWeight: 500 }}
//               >
//                 Submit Partnership Inquiry
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <Mail className="text-[#c4151c] mx-auto mb-6" size={56} />
//           <h3 className="serif text-black mb-4">Questions About Partnerships?</h3>
//           <p className="text-gray-600 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//             Our research team is happy to discuss potential collaborations and answer any questions.
//           </p>
//           <div className="space-y-3">
//             <p className="text-gray-700" style={{ fontSize: '1rem' }}>
//               <strong>Research Partnerships:</strong> partnerships@gobischolars.org
//             </p>
//             <p className="text-gray-700" style={{ fontSize: '1rem' }}>
//               <strong>Phone:</strong> +976 7011 2345
//             </p>
//           </div>
//           <div className="mt-10 pt-10 border-t border-gray-300">
//             <Link
//               to="/foundation/research"
//               className="inline-flex items-center gap-2 text-[#c4151c] hover:underline"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               ← Back to Research
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }