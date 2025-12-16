// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Building, 
//   Users, 
//   GraduationCap, 
//   Award, 
//   Heart,
//   Globe,
//   CheckCircle,
//   Mail,
//   Briefcase,
//   Target,
//   TrendingUp,
//   Lightbulb,
//   ArrowRight,
//   BookOpen
// } from 'lucide-react';
// import { ImageWithFallback } from '../figma/ImageWithFallback';

// export default function FoundationPartnershipOpportunities() {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     partnershipType: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Partnership inquiry submitted:', formData);
//     alert('Thank you for your interest! We will contact you within 2-3 business days.');
//   };

//   const partnershipTypes = [
//     {
//       icon: <Building size={36} />,
//       title: 'Corporate Partnerships',
//       description: 'Partner with us to create meaningful impact through employee engagement, CSR initiatives, and skills-based volunteering.',
//       benefits: [
//         'Brand visibility and recognition',
//         'Employee volunteer opportunities',
//         'Scholarship sponsorship programs',
//         'Joint community initiatives',
//         'Impact reporting and storytelling'
//       ],
//       color: '#c4151c'
//     },
//     {
//       icon: <GraduationCap size={36} />,
//       title: 'Educational Institutions',
//       description: 'Collaborate on academic programs, student exchanges, and curriculum development to strengthen educational outcomes.',
//       benefits: [
//         'Student exchange programs',
//         'Joint research initiatives',
//         'Faculty collaboration',
//         'Curriculum development support',
//         'Resource sharing'
//       ],
//       color: '#c4151c'
//     },
//     {
//       icon: <Users size={36} />,
//       title: 'Community Organizations',
//       description: 'Work together to expand our reach and create sustainable programs that serve Mongolia\'s educational community.',
//       benefits: [
//         'Co-hosted events and workshops',
//         'Shared resources and facilities',
//         'Joint grant applications',
//         'Community outreach programs',
//         'Network expansion'
//       ],
//       color: '#c4151c'
//     },
//     {
//       icon: <Award size={36} />,
//       title: 'Sponsorship Opportunities',
//       description: 'Support our scholars and programs through financial sponsorship, in-kind donations, or event partnerships.',
//       benefits: [
//         'Full or partial scholarship sponsorship',
//         'Program-specific funding',
//         'Event sponsorship packages',
//         'In-kind resource donations',
//         'Recognition at events and publications'
//       ],
//       color: '#c4151c'
//     },
//     {
//       icon: <BookOpen size={36} />,
//       title: 'Research Partnerships',
//       description: 'Collaborate on cutting-edge research initiatives that advance educational innovation and policy development.',
//       benefits: [
//         'Joint research projects',
//         'Data sharing and analysis',
//         'Academic publications',
//         'Conference presentations',
//         'Policy impact opportunities'
//       ],
//       color: '#c4151c',
//       link: '/foundation/partnerships',
//       linkText: 'Explore Research Partnerships'
//     },
//     {
//       icon: <Globe size={36} />,
//       title: 'International Partnerships',
//       description: 'Connect with global institutions to bring international perspectives and opportunities to Mongolian scholars.',
//       benefits: [
//         'Study abroad programs',
//         'Global mentorship networks',
//         'International conferences',
//         'Cross-cultural exchanges',
//         'Global best practices sharing'
//       ],
//       color: '#c4151c'
//     }
//   ];

//   const currentPartners = [
//     'Leading Mongolian Universities',
//     'International Education Foundations',
//     'Corporate Partners in Technology',
//     'Community Development Organizations',
//     'Research Institutes'
//   ];

//   const impactStats = [
//     { number: '25+', label: 'Active Partnerships' },
//     { number: '150+', label: 'Collaborative Projects' },
//     { number: '1,200+', label: 'Students Impacted' },
//     { number: '10+', label: 'Countries Represented' }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
//             alt="Partnership Collaboration"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        
//         <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center text-white">
//           <div className="mb-8 inline-block">
//             <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 500 }}>
//               PARTNERSHIP OPPORTUNITIES
//             </div>
//           </div>
//           <h1 className="serif text-white mb-8" style={{ fontSize: '5rem', lineHeight: 1.1 }}>
//             Partner With Us
//           </h1>
//           <p className="text-white/90 max-w-3xl mx-auto" style={{ fontSize: '1.2rem', lineHeight: 1.9, fontWeight: 300 }}>
//             Together, we can create lasting impact and transform educational opportunities for Mongolian scholars.
//           </p>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
//             {impactStats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="serif text-[#c4151c] mb-3" style={{ fontSize: '3.5rem' }}>
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600" style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnership Types */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3.5rem' }}>
//               Partnership Opportunities
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
//               We offer diverse partnership models tailored to align with your organization's mission and goals.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {partnershipTypes.map((type, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-2xl transition-all duration-300"
//               >
//                 <div className="p-10">
//                   <div className="text-[#c4151c] mb-6">{type.icon}</div>
//                   <h3 className="serif text-black mb-4" style={{ fontSize: '1.5rem' }}>
//                     {type.title}
//                   </h3>
//                   <div className="w-12 h-[1px] bg-[#c4151c] mb-6" />
//                   <p className="text-gray-700 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                     {type.description}
//                   </p>
//                   <div className="space-y-3 mb-8">
//                     <p className="text-gray-600" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
//                       BENEFITS:
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
                  
//                   {type.link && (
//                     <Link 
//                       to={type.link}
//                       className="inline-flex items-center gap-2 text-[#c4151c] hover:gap-3 transition-all px-6 py-3 border border-[#c4151c] hover:bg-[#c4151c] hover:text-white rounded-lg"
//                       style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                     >
//                       {type.linkText}
//                       <ArrowRight size={16} />
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Partner With Us */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//                 Why Partner With GobiScholars?
//               </h2>
//               <div className="w-20 h-[2px] bg-[#c4151c] mb-8" />
//               <p className="text-gray-700 mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//                 Our partnerships are built on shared values, mutual respect, and a commitment to creating sustainable impact in Mongolia's educational landscape.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-[#c4151c]/10 p-3 rounded-lg flex-shrink-0">
//                     <Target className="text-[#c4151c]" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>
//                       Measurable Impact
//                     </h4>
//                     <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       We provide transparent reporting and tangible outcomes for all partnership initiatives.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-[#c4151c]/10 p-3 rounded-lg flex-shrink-0">
//                     <TrendingUp className="text-[#c4151c]" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>
//                       Proven Track Record
//                     </h4>
//                     <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       Over a decade of successful partnerships with leading organizations worldwide.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-[#c4151c]/10 p-3 rounded-lg flex-shrink-0">
//                     <Heart className="text-[#c4151c]" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>
//                       Deep Community Roots
//                     </h4>
//                     <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       Strong connections with educational institutions, government agencies, and communities across Mongolia.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-[#c4151c]/10 p-3 rounded-lg flex-shrink-0">
//                     <Lightbulb className="text-[#c4151c]" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>
//                       Innovation Focus
//                     </h4>
//                     <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                       We embrace creative approaches and cutting-edge research to solve educational challenges.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
//                 alt="Team collaboration"
//                 className="w-full h-[600px] object-cover shadow-2xl"
//               />
//               <div className="absolute inset-0 border-2 border-[#c4151c] -z-10 translate-x-6 translate-y-6" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Current Partners */}
//       <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
//           <h2 className="serif text-black mb-6" style={{ fontSize: '3rem' }}>
//             Our Valued Partners
//           </h2>
//           <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-12" />
//           <p className="text-gray-600 max-w-3xl mx-auto mb-16" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
//             We're proud to work with organizations that share our commitment to educational excellence.
//           </p>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentPartners.map((partner, index) => (
//               <div 
//                 key={index}
//                 className="p-8 bg-white border border-gray-200 hover:border-[#c4151c] hover:shadow-lg transition-all"
//               >
//                 <div className="text-[#c4151c] mb-4">
//                   <Briefcase size={32} className="mx-auto" />
//                 </div>
//                 <p className="text-gray-700" style={{ fontSize: '1rem', fontWeight: 500 }}>
//                   {partner}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnership Inquiry Form */}
//       <section className="py-32 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="serif text-black mb-6" style={{ fontSize: '3.5rem' }}>
//               Start a Conversation
//             </h2>
//             <div className="w-20 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
//               We'd love to explore how we can work together. Fill out the form below and our partnerships team will be in touch.
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
//                 Partnership Interest *
//               </label>
//               <select
//                 required
//                 value={formData.partnershipType}
//                 onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                 style={{ fontSize: '1rem' }}
//               >
//                 <option value="">Select a partnership type</option>
//                 <option value="corporate">Corporate Partnership</option>
//                 <option value="educational">Educational Institution</option>
//                 <option value="community">Community Organization</option>
//                 <option value="sponsorship">Sponsorship Opportunity</option>
//                 <option value="research">Research Partnership</option>
//                 <option value="international">International Partnership</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Tell us about your partnership idea *
//               </label>
//               <textarea
//                 required
//                 rows={6}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-5 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg resize-none"
//                 style={{ fontSize: '1rem', lineHeight: 1.7 }}
//                 placeholder="Share your vision for how we can work together..."
//               />
//             </div>

//             <div className="text-center pt-4">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-14 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//                 style={{ fontSize: '1.05rem', fontWeight: 500 }}
//               >
//                 Submit Partnership Inquiry
//                 <Mail size={20} />
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-24 bg-gradient-to-br from-[#c4151c] to-[#a01117] text-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <h2 className="serif text-white mb-6" style={{ fontSize: '3rem' }}>
//             Questions About Partnerships?
//           </h2>
//           <p className="text-white/90 mb-10" style={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
//             Our partnerships team is here to help you explore collaboration opportunities.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href="mailto:partnerships@gobischolars.org"
//               className="inline-flex items-center gap-3 bg-white text-[#c4151c] px-10 py-4 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               <Mail size={20} />
//               partnerships@gobischolars.org
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
