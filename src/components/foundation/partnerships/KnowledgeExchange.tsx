// import React, { useState } from 'react';
// import { Users, CheckCircle, Globe, BookOpen, Mail, ArrowRight, Calendar, Award, Presentation } from 'lucide-react';
// import { ImageWithFallback } from '../../figma/ImageWithFallback';

// export default function KnowledgeExchange() {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     exchangeType: '',
//     participants: '',
//     duration: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Knowledge Exchange inquiry submitted:', formData);
//     alert('Thank you for your interest in knowledge exchange! Our team will contact you within 3-5 business days.');
//   };

//   const exchangeTypes = [
//     {
//       icon: <Users size={32} />,
//       title: 'Faculty Exchange Programs',
//       description: 'Short-term or long-term faculty exchanges to share teaching methodologies and research expertise.',
//       duration: '2 weeks - 6 months',
//       examples: ['Visiting professorships', 'Co-teaching opportunities', 'Research sabbaticals']
//     },
//     {
//       icon: <Presentation size={32} />,
//       title: 'Guest Lectures & Seminars',
//       description: 'Expert speakers sharing cutting-edge research, best practices, and innovative approaches.',
//       duration: '1-3 days',
//       examples: ['Keynote presentations', 'Workshop facilitation', 'Masterclasses']
//     },
//     {
//       icon: <BookOpen size={32} />,
//       title: 'Collaborative Workshops',
//       description: 'Hands-on learning experiences focused on specific skills, methodologies, or topics.',
//       duration: '1-5 days',
//       examples: ['Research methodology training', 'Curriculum design workshops', 'Technology integration sessions']
//     },
//     {
//       icon: <Award size={32} />,
//       title: 'Professional Development',
//       description: 'Structured programs for educators to enhance skills and credentials through international collaboration.',
//       duration: '3-12 months',
//       examples: ['Certificate programs', 'Leadership development', 'Mentorship initiatives']
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Globe size={28} />,
//       title: 'Global Perspectives',
//       description: 'Exposure to international best practices and diverse educational approaches enriches local practice.'
//     },
//     {
//       icon: <Users size={28} />,
//       title: 'Network Building',
//       description: 'Form lasting professional relationships that extend beyond the formal exchange period.'
//     },
//     {
//       icon: <BookOpen size={28} />,
//       title: 'Reciprocal Learning',
//       description: 'Both parties benefit from shared knowledge, creating mutual value and understanding.'
//     },
//     {
//       icon: <Award size={28} />,
//       title: 'Career Development',
//       description: 'Participants gain international experience and credentials that advance their careers.'
//     }
//   ];

//   const pastExchanges = [
//     {
//       title: 'Teacher Education Workshop Series',
//       partner: 'Harvard Graduate School of Education',
//       year: '2023',
//       participants: '45 Mongolian educators',
//       outcome: 'Launched new teacher mentorship program across 20 schools'
//     },
//     {
//       title: 'Educational Leadership Exchange',
//       partner: 'Stanford University',
//       year: '2022',
//       participants: '12 school principals',
//       outcome: 'Implemented data-driven decision-making frameworks in participating schools'
//     },
//     {
//       title: 'STEM Education Workshop',
//       partner: 'MIT Education Arcade',
//       year: '2023',
//       participants: '60 science teachers',
//       outcome: 'Developed hands-on STEM curriculum adopted by Ministry of Education'
//     }
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'Identify Exchange Goals',
//       description: 'Define objectives, target participants, and desired outcomes for the knowledge exchange.'
//     },
//     {
//       step: '02',
//       title: 'Design Program Structure',
//       description: 'Collaboratively plan schedule, activities, logistics, and evaluation methods.'
//     },
//     {
//       step: '03',
//       title: 'Select Participants',
//       description: 'Identify and prepare faculty, researchers, or educators who will participate in the exchange.'
//     },
//     {
//       step: '04',
//       title: 'Execute Exchange',
//       description: 'Implement the program with support for logistics, translation, and cultural orientation.'
//     },
//     {
//       step: '05',
//       title: 'Evaluate & Follow-Up',
//       description: 'Assess impact, gather feedback, and plan next steps for continued collaboration.'
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
//             alt="Knowledge exchange"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
        
//         <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
//           <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20">
//             <Users size={20} />
//             <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 500 }}>
//               RESEARCH PARTNERSHIP
//             </span>
//           </div>
//           <h1 className="serif text-white mb-8" style={{ fontSize: '4.5rem', lineHeight: 1.1 }}>
//             Knowledge Exchange
//           </h1>
//           <p className="text-white/90 max-w-3xl mx-auto" style={{ fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 300 }}>
//             Facilitate reciprocal learning through researcher exchanges, guest lectures, and collaborative workshops.
//           </p>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div className="relative">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
//                 alt="Team learning"
//                 className="w-full h-[500px] object-cover shadow-2xl"
//               />
//               <div className="absolute inset-0 border-2 border-[#c4151c] -z-10 translate-x-6 translate-y-6" />
//             </div>

//             <div>
//               <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//                 Building Bridges Through Learning
//               </h2>
//               <div className="w-20 h-[2px] bg-[#c4151c] mb-8" />
//               <p className="text-gray-700 mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Knowledge exchange programs create powerful opportunities for educators and researchers to learn from one another, bringing fresh perspectives and innovative practices to Mongolian education.
//               </p>
//               <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 We facilitate meaningful exchanges that go beyond tourism, creating structured learning experiences with lasting impact on participants and their institutions.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Over 200 international exchanges facilitated since 2015
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Partnerships with 25+ international institutions
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Full logistical and cultural support provided
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//                   <span className="text-gray-700" style={{ fontSize: '1rem' }}>
//                     Translation services available in Mongolian and English
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Exchange Types */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Types of Knowledge Exchange
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               We offer flexible exchange formats to meet diverse learning objectives and schedules.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {exchangeTypes.map((type, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-10 border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="text-[#c4151c] mb-6">{type.icon}</div>
//                 <h3 className="serif text-black mb-4" style={{ fontSize: '1.6rem' }}>
//                   {type.title}
//                 </h3>
//                 <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                 <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                   {type.description}
//                 </p>
//                 <div className="mb-6">
//                   <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4151c]/10 text-[#c4151c] rounded-lg" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     <Calendar size={16} />
//                     {type.duration}
//                   </span>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="text-gray-600" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', fontWeight: 500 }}>
//                     EXAMPLES:
//                   </p>
//                   {type.examples.map((example, eIndex) => (
//                     <div key={eIndex} className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={16} />
//                       <span className="text-gray-700" style={{ fontSize: '0.9rem' }}>
//                         {example}
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
//               Why Knowledge Exchange?
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

//       {/* Process */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Exchange Program Process
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               We handle all aspects of program design and logistics to ensure a successful exchange.
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

//       {/* Past Exchanges */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//               Recent Exchange Programs
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto" />
//           </div>

//           <div className="space-y-8">
//             {pastExchanges.map((exchange, index) => (
//               <div 
//                 key={index}
//                 className="p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#c4151c] hover:shadow-xl transition-all"
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//                   <div className="flex-1">
//                     <h3 className="serif text-black mb-3" style={{ fontSize: '1.5rem' }}>
//                       {exchange.title}
//                     </h3>
//                     <div className="flex flex-wrap gap-4 mb-4">
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Partner:</strong> {exchange.partner}
//                       </span>
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Year:</strong> {exchange.year}
//                       </span>
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         <strong>Participants:</strong> {exchange.participants}
//                       </span>
//                     </div>
//                     <div className="flex items-start gap-2">
//                       <CheckCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={18} />
//                       <p className="text-gray-700" style={{ fontSize: '0.95rem' }}>
//                         <strong>Outcome:</strong> {exchange.outcome}
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
//               Propose a Knowledge Exchange
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//               Tell us about your exchange idea and we'll work together to make it happen.
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
//                   Exchange Type *
//                 </label>
//                 <select
//                   required
//                   value={formData.exchangeType}
//                   onChange={(e) => setFormData({ ...formData, exchangeType: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                 >
//                   <option value="">Select exchange type</option>
//                   <option value="faculty">Faculty Exchange Program</option>
//                   <option value="lecture">Guest Lecture/Seminar</option>
//                   <option value="workshop">Collaborative Workshop</option>
//                   <option value="professional">Professional Development</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Expected Number of Participants
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.participants}
//                   onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
//                   className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: '1rem' }}
//                   placeholder="e.g., 20-30 educators"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Proposed Duration
//               </label>
//               <input
//                 type="text"
//                 value={formData.duration}
//                 onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                 style={{ fontSize: '1rem' }}
//                 placeholder="e.g., 3 days, 2 weeks, 3 months"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Exchange Program Description *
//               </label>
//               <textarea
//                 required
//                 rows={6}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg resize-none"
//                 style={{ fontSize: '1rem', lineHeight: 1.7 }}
//                 placeholder="Describe the goals, activities, and expected outcomes of your proposed exchange..."
//               />
//             </div>

//             <div className="text-center pt-4">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-14 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//                 style={{ fontSize: '1.05rem', fontWeight: 500 }}
//               >
//                 Submit Exchange Proposal
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
//             Questions About Knowledge Exchange?
//           </h2>
//           <p className="text-white/90 mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//             Our partnerships team can help you design an exchange program that meets your goals.
//           </p>
//           <a
//             href="mailto:exchange@gobischolars.org"
//             className="inline-flex items-center gap-3 bg-white text-[#c4151c] px-10 py-4 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//             style={{ fontSize: '1rem', fontWeight: 500 }}
//           >
//             <Mail size={20} />
//             exchange@gobischolars.org
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
