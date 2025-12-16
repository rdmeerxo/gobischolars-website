// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, FileText, Filter, Search, Download, BookOpen } from 'lucide-react';

// interface Publication {
//   slug: string;
//   title: string;
//   type: string;
//   date: string;
//   authors: string;
//   abstract: string;
//   tags: string[];
// }

// const allPublications: Publication[] = [
//   {
//     slug: 'state-of-education-mongolia',
//     title: 'The State of Education in Modern Mongolia: Challenges and Opportunities',
//     type: 'Research Paper',
//     date: 'March 2024',
//     authors: 'GobiScholars Research Team',
//     abstract: 'This comprehensive research paper examines the current state of Mongolia\'s education system, analyzing key challenges and identifying opportunities for systemic improvement.',
//     tags: ['education policy', 'Mongolia', 'systemic reform', 'access', 'equity']
//   },
//   {
//     slug: 'education-systems-east-asia',
//     title: 'Comparative Analysis: Educational Systems in East Asia',
//     type: 'Policy Brief',
//     date: 'January 2024',
//     authors: 'Dr. Kenji Tanaka, Dr. Li Wei, Dr. Batdelger Sukhbaatar',
//     abstract: 'This policy brief provides a comparative analysis of education systems across East Asia, examining Mongolia, South Korea, Japan, Singapore, and China.',
//     tags: ['comparative education', 'East Asia', 'policy analysis', 'best practices']
//   },
//   {
//     slug: 'framework-educational-reform',
//     title: 'Building Excellence: A Framework for Educational Reform',
//     type: 'White Paper',
//     date: 'November 2023',
//     authors: 'GobiScholars Foundation Advisory Board',
//     abstract: 'This white paper presents a comprehensive framework for educational reform in Mongolia, synthesizing research findings and international best practices.',
//     tags: ['reform framework', 'implementation', 'policy', 'systemic change']
//   },
//   {
//     slug: 'teacher-development-mongolia',
//     title: 'Professional Development for Teachers: A National Strategy',
//     type: 'Research Paper',
//     date: 'September 2023',
//     authors: 'Dr. Sarah Williams, Odbayar Tumur',
//     abstract: 'An in-depth examination of teacher training and professional development needs across Mongolia, with recommendations for a comprehensive national strategy.',
//     tags: ['teacher training', 'professional development', 'capacity building']
//   },
//   {
//     slug: 'rural-education-access',
//     title: 'Bridging the Divide: Rural Education Access in Mongolia',
//     type: 'Research Paper',
//     date: 'June 2023',
//     authors: 'Dr. Tuya Enkhjargal, James Morrison',
//     abstract: 'This study examines barriers to educational access in rural Mongolia and proposes evidence-based interventions to ensure equity.',
//     tags: ['rural education', 'access', 'equity', 'infrastructure']
//   },
//   {
//     slug: 'digital-learning-opportunities',
//     title: 'Digital Learning: Opportunities for Mongolia',
//     type: 'Policy Brief',
//     date: 'April 2023',
//     authors: 'Dr. Michael Chen',
//     abstract: 'An analysis of how digital learning technologies can address educational challenges in Mongolia, with policy recommendations for implementation.',
//     tags: ['technology', 'digital learning', 'innovation', 'access']
//   },
//   {
//     slug: 'stem-education-mongolia',
//     title: 'STEM Education in Mongolia: Current State and Future Directions',
//     type: 'Research Paper',
//     date: 'February 2023',
//     authors: 'Dr. Batkhuyag Ganbold, Dr. Lisa Park',
//     abstract: 'A comprehensive assessment of STEM education in Mongolia, examining curriculum, teacher preparation, and student outcomes.',
//     tags: ['STEM', 'curriculum', 'science education', 'mathematics']
//   },
//   {
//     slug: 'scholarship-program-impact',
//     title: 'Measuring Impact: GobiScholars Program Evaluation 2020-2023',
//     type: 'Report',
//     date: 'December 2022',
//     authors: 'GobiScholars Research Team',
//     abstract: 'A thorough evaluation of the GobiScholars program outcomes, tracking scholar success and program impact over three years.',
//     tags: ['program evaluation', 'impact assessment', 'scholarships']
//   },
//   {
//     slug: 'multilingual-education',
//     title: 'Multilingual Education: Preserving Heritage, Embracing Global Opportunities',
//     type: 'White Paper',
//     date: 'October 2022',
//     authors: 'Dr. Narantsetseg Bold, Dr. Robert Kim',
//     abstract: 'Exploring how Mongolia can develop multilingual education policies that honor linguistic heritage while preparing students for global engagement.',
//     tags: ['language policy', 'multilingual education', 'cultural identity']
//   },
//   {
//     slug: 'early-childhood-education',
//     title: 'Investing in the Future: Early Childhood Education in Mongolia',
//     type: 'Policy Brief',
//     date: 'July 2022',
//     authors: 'Dr. Emily Thompson',
//     abstract: 'A policy brief examining early childhood education access and quality in Mongolia, with recommendations for expansion.',
//     tags: ['early childhood', 'preschool', 'access', 'quality']
//   },
//   {
//     slug: 'higher-education-pathways',
//     title: 'Higher Education Pathways: Opportunities and Challenges',
//     type: 'Research Paper',
//     date: 'May 2022',
//     authors: 'Dr. James Morrison, Batdelger Sukhbaatar',
//     abstract: 'An analysis of higher education access, quality, and labor market alignment in Mongolia.',
//     tags: ['higher education', 'university', 'workforce development']
//   },
//   {
//     slug: 'assessment-practices',
//     title: 'Rethinking Assessment: Moving Beyond Standardized Testing',
//     type: 'White Paper',
//     date: 'March 2022',
//     authors: 'GobiScholars Foundation Advisory Board',
//     abstract: 'A critical examination of assessment practices in Mongolia with proposals for more authentic, meaningful evaluation systems.',
//     tags: ['assessment', 'evaluation', 'testing', 'accountability']
//   }
// ];

// const publicationTypes = ['All', 'Research Paper', 'Policy Brief', 'White Paper', 'Report'];

// export default function FoundationPublications() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedType, setSelectedType] = useState('All');
//   const [selectedYear, setSelectedYear] = useState('All');

//   // Extract unique years from publications
//   const years = ['All', ...Array.from(new Set(allPublications.map(pub => pub.date.split(' ')[1]))).sort().reverse()];

//   // Filter publications
//   const filteredPublications = allPublications.filter(pub => {
//     const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
//     const matchesType = selectedType === 'All' || pub.type === selectedType;
//     const matchesYear = selectedYear === 'All' || pub.date.includes(selectedYear);
    
//     return matchesSearch && matchesType && matchesYear;
//   });

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="py-32 bg-[#F8F8F8] dharmachakra-bg">
//         <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 border border-gray-300 mb-6" style={{ fontSize: '0.85rem', letterSpacing: '0.15em' }}>
//               PUBLICATIONS LIBRARY
//             </div>
//           </div>
//           <h1 className="serif text-black mb-8">
//             Research & Publications
//           </h1>
//           <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             Explore our complete collection of research papers, policy briefs, white papers, and reports on educational excellence in Mongolia.
//           </p>
//         </div>
//       </section>

//       {/* Search and Filters */}
//       <section className="py-12 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid md:grid-cols-4 gap-6">
//             {/* Search Bar */}
//             <div className="md:col-span-2">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search publications, authors, topics..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>
//             </div>

//             {/* Type Filter */}
//             <div>
//               <div className="relative">
//                 <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <select
//                   value={selectedType}
//                   onChange={(e) => setSelectedType(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none appearance-none rounded-md"
//                   style={{ fontSize: '0.95rem' }}
//                 >
//                   {publicationTypes.map(type => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Year Filter */}
//             <div>
//               <div className="relative">
//                 <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <select
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none appearance-none rounded-md"
//                   style={{ fontSize: '0.95rem' }}
//                 >
//                   {years.map(year => (
//                     <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Results Count */}
//           <div className="mt-6 text-gray-600" style={{ fontSize: '0.9rem' }}>
//             Showing {filteredPublications.length} of {allPublications.length} publications
//           </div>
//         </div>
//       </section>

//       {/* Publications Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           {filteredPublications.length === 0 ? (
//             <div className="text-center py-20">
//               <BookOpen className="text-gray-300 mx-auto mb-6" size={64} />
//               <h3 className="serif text-gray-600 mb-3">No publications found</h3>
//               <p className="text-gray-500" style={{ fontSize: '0.95rem' }}>
//                 Try adjusting your search or filters
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-8">
//               {filteredPublications.map((pub) => (
//                 <div key={pub.slug} className="bg-white border border-gray-200 hover:border-[#c4151c] transition-all hover:shadow-lg">
//                   <div className="p-10">
//                     <div className="grid lg:grid-cols-4 gap-8">
//                       {/* Left: Type and Date */}
//                       <div className="lg:col-span-1">
//                         <div className="space-y-4">
//                           <div className="px-3 py-1 bg-[#c4151c] text-white inline-block" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
//                             {pub.type.toUpperCase()}
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: '0.85rem' }}>
//                             <Calendar size={14} />
//                             <span>{pub.date}</span>
//                           </div>
//                           <div className="pt-4 border-t border-gray-200">
//                             <button className="inline-flex items-center gap-2 text-[#c4151c] hover:underline" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                               <Download size={16} />
//                               Download PDF
//                             </button>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Right: Content */}
//                       <div className="lg:col-span-3">
//                         <Link to={`/publications/${pub.slug}`}>
//                           <h3 className="serif text-black mb-3 hover:text-[#c4151c] transition-colors">
//                             {pub.title}
//                           </h3>
//                         </Link>
//                         <p className="text-gray-600 mb-4" style={{ fontSize: '0.9rem' }}>
//                           By {pub.authors}
//                         </p>
//                         <p className="text-gray-700 mb-6" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
//                           {pub.abstract}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {pub.tags.map((tag, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-300"
//                               style={{ fontSize: '0.8rem' }}
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                         <Link
//                           to={`/publications/${pub.slug}`}
//                           className="inline-flex items-center gap-2 text-[#c4151c] hover:underline"
//                           style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                         >
//                           Read Full Publication →
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <FileText className="text-[#c4151c] mx-auto mb-6" size={56} />
//           <h2 className="serif text-black mb-6">Stay Updated</h2>
//           <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//           <p className="text-gray-600 mb-10 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//             Subscribe to receive notifications when we publish new research, policy briefs, and thought leadership on educational excellence in Mongolia.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="flex-1 px-6 py-4 border border-gray-300 focus:border-[#c4151c] focus:outline-none rounded-md"
//               style={{ fontSize: '0.95rem' }}
//             />
//             <button className="bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md whitespace-nowrap" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//               Subscribe
//             </button>
//           </div>
//           <p className="text-gray-500 mt-4" style={{ fontSize: '0.85rem' }}>
//             We respect your privacy. Unsubscribe at any time.
//           </p>
//         </div>
//       </section>

//       {/* Research Areas CTA */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Explore Our Research</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Learn more about our research focus areas and ongoing projects
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <Link to="/foundation/research" className="border-2 border-gray-200 p-10 hover:border-[#c4151c] transition-colors text-center group">
//               <BookOpen className="text-[#c4151c] mx-auto mb-6 group-hover:scale-110 transition-transform" size={48} />
//               <h4 className="serif text-black mb-4">Research Focus Areas</h4>
//               <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Explore the critical questions shaping the future of education in Mongolia
//               </p>
//               <span className="text-[#c4151c] hover:underline" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Learn More →
//               </span>
//             </Link>

//             <div className="border-2 border-gray-200 p-10 hover:border-[#c4151c] transition-colors text-center group">
//               <FileText className="text-[#c4151c] mx-auto mb-6 group-hover:scale-110 transition-transform" size={48} />
//               <h4 className="serif text-black mb-4">Partner With Us</h4>
//               <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Collaborate on research projects and contribute to educational excellence
//               </p>
//               <button className="text-[#c4151c] hover:underline" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Get In Touch →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
