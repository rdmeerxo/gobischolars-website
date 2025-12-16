// import React, { useState } from 'react';
// import { Search, MapPin, Building2, FileSearch, Download, ExternalLink, Filter, ChevronRight } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function Resources() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterCategory, setFilterCategory] = useState<'all' | 'Top Tier' | 'Top Public' | 'Liberal Arts'>('all');
//   const [viewAll, setViewAll] = useState(false);

//   // Expanded University Database
//   const allUniversities = [
//     { id: 1, name: 'MIT', location: 'Cambridge, MA, USA', acceptanceRate: '3.2%', avgSAT: '1520-1580', tuition: '$57,986', type: 'Research University', category: 'Top Tier', students: '11,934' },
//     { id: 2, name: 'Stanford University', location: 'Stanford, CA, USA', acceptanceRate: '3.7%', avgSAT: '1470-1570', tuition: '$58,416', type: 'Research University', category: 'Top Tier', students: '17,249' },
//     { id: 3, name: 'UC Berkeley', location: 'Berkeley, CA, USA', acceptanceRate: '14.5%', avgSAT: '1330-1530', tuition: '$44,115', type: 'Public Research University', category: 'Top Public', students: '45,057' },
//     { id: 4, name: 'Carnegie Mellon University', location: 'Pittsburgh, PA, USA', acceptanceRate: '13.0%', avgSAT: '1480-1560', tuition: '$61,344', type: 'Research University', category: 'Top Tier', students: '15,818' },
//     { id: 5, name: 'Harvard University', location: 'Cambridge, MA, USA', acceptanceRate: '3.4%', avgSAT: '1460-1580', tuition: '$57,261', type: 'Research University', category: 'Top Tier', students: '23,731' },
//     { id: 6, name: 'Yale University', location: 'New Haven, CT, USA', acceptanceRate: '4.5%', avgSAT: '1470-1570', tuition: '$62,250', type: 'Research University', category: 'Top Tier', students: '14,567' },
//     { id: 7, name: 'Princeton University', location: 'Princeton, NJ, USA', acceptanceRate: '4.0%', avgSAT: '1470-1570', tuition: '$57,410', type: 'Research University', category: 'Top Tier', students: '8,842' },
//     { id: 8, name: 'Columbia University', location: 'New York, NY, USA', acceptanceRate: '3.9%', avgSAT: '1470-1570', tuition: '$65,524', type: 'Research University', category: 'Top Tier', students: '33,413' },
//     { id: 9, name: 'UCLA', location: 'Los Angeles, CA, USA', acceptanceRate: '11.0%', avgSAT: '1300-1530', tuition: '$43,022', type: 'Public Research University', category: 'Top Public', students: '46,116' },
//     { id: 10, name: 'University of Michigan', location: 'Ann Arbor, MI, USA', acceptanceRate: '18.0%', avgSAT: '1340-1530', tuition: '$53,232', type: 'Public Research University', category: 'Top Public', students: '47,907' },
//     { id: 11, name: 'Williams College', location: 'Williamstown, MA, USA', acceptanceRate: '8.0%', avgSAT: '1420-1550', tuition: '$61,450', type: 'Liberal Arts College', category: 'Liberal Arts', students: '2,021' },
//     { id: 12, name: 'Amherst College', location: 'Amherst, MA, USA', acceptanceRate: '7.3%', avgSAT: '1410-1540', tuition: '$62,640', type: 'Liberal Arts College', category: 'Liberal Arts', students: '1,849' },
//     { id: 13, name: 'Duke University', location: 'Durham, NC, USA', acceptanceRate: '5.9%', avgSAT: '1480-1570', tuition: '$63,054', type: 'Research University', category: 'Top Tier', students: '17,148' },
//     { id: 14, name: 'Northwestern University', location: 'Evanston, IL, USA', acceptanceRate: '7.0%', avgSAT: '1440-1550', tuition: '$62,391', type: 'Research University', category: 'Top Tier', students: '22,603' },
//     { id: 15, name: 'Brown University', location: 'Providence, RI, USA', acceptanceRate: '5.1%', avgSAT: '1450-1560', tuition: '$65,146', type: 'Research University', category: 'Top Tier', students: '10,696' },
//   ];

//   const downloadableResources = [
//     { id: 1, title: 'Complete SAT Study Guide 2024', type: 'PDF', size: '12.5 MB', downloads: 2847 },
//     { id: 2, title: 'Common App Essay Examples', type: 'PDF', size: '3.2 MB', downloads: 3421 },
//     { id: 3, title: 'Financial Aid Application Checklist', type: 'PDF', size: '1.8 MB', downloads: 1923 },
//     { id: 4, title: 'College Interview Prep Guide', type: 'PDF', size: '4.1 MB', downloads: 2156 },
//     { id: 5, title: 'TOEFL Practice Tests Bundle', type: 'PDF', size: '8.7 MB', downloads: 3156 },
//     { id: 6, title: 'Scholarship Database Guide', type: 'PDF', size: '2.4 MB', downloads: 2789 },
//   ];

//   const filteredUniversities = allUniversities.filter(uni => {
//     const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          uni.type.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesCategory = filterCategory === 'all' || uni.category === filterCategory;
    
//     return matchesSearch && matchesCategory;
//   });

//   const displayedUniversities = viewAll ? filteredUniversities : filteredUniversities.slice(0, 6);

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Sidebar */}
//       <DashboardSidebar 
//         collapsed={sidebarCollapsed} 
//         onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />

//       {/* Main Content */}
//       <main className={`flex-1 transition-all ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
//         <div className="p-6 sm:p-8">
//           <div className="mb-8">
//             <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//               Resources
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               Access university databases, study materials, and guides
//             </p>
//           </div>

//           {/* Search Bar */}
//           <div className="relative mb-6">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search universities, resources, or materials..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c4151c] transition-colors"
//               style={{ fontSize: '0.95rem' }}
//             />
//           </div>

//           {/* Category Filters */}
//           <div className="flex items-center gap-3 mb-8">
//             <Filter size={18} className="text-gray-500" />
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setFilterCategory('all')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterCategory === 'all' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 All Universities
//               </button>
//               <button
//                 onClick={() => setFilterCategory('Top Tier')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterCategory === 'Top Tier' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Top Tier
//               </button>
//               <button
//                 onClick={() => setFilterCategory('Top Public')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterCategory === 'Top Public' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Top Public
//               </button>
//               <button
//                 onClick={() => setFilterCategory('Liberal Arts')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterCategory === 'Liberal Arts' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Liberal Arts
//               </button>
//             </div>
//           </div>

//           {/* University Database */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                   <Building2 className="text-blue-600" size={20} />
//                 </div>
//                 <div>
//                   <h2 className="text-gray-900" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                     University Database
//                   </h2>
//                   <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>
//                     {filteredUniversities.length} universities found
//                   </p>
//                 </div>
//               </div>
//               {!viewAll && filteredUniversities.length > 6 && (
//                 <button 
//                   onClick={() => setViewAll(true)}
//                   className="text-[#c4151c] hover:underline flex items-center gap-1" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   View All <ChevronRight size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="grid gap-4">
//               {displayedUniversities.map((uni) => (
//                 <div key={uni.id} className="p-5 border border-gray-200 hover:border-[#c4151c] rounded-lg transition-all group cursor-pointer">
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                           {uni.name}
//                         </h3>
//                         <span className="px-2 py-1 bg-[#c4151c]/10 text-[#c4151c] rounded-full" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                           {uni.category}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-3 flex items-center gap-1" style={{ fontSize: '0.85rem' }}>
//                         <MapPin size={14} />
//                         {uni.location}
//                       </p>
//                       <div className="grid sm:grid-cols-5 gap-4">
//                         <div>
//                           <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>Acceptance</p>
//                           <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{uni.acceptanceRate}</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>SAT Range</p>
//                           <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{uni.avgSAT}</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>Tuition</p>
//                           <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{uni.tuition}</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>Students</p>
//                           <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{uni.students}</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>Type</p>
//                           <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{uni.type}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <ExternalLink className="text-gray-400 group-hover:text-[#c4151c] transition-colors" size={20} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {viewAll && (
//               <button 
//                 onClick={() => setViewAll(false)}
//                 className="w-full mt-4 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors" 
//                 style={{ fontSize: '0.9rem', fontWeight: 500 }}
//               >
//                 Show Less
//               </button>
//             )}
//           </div>

//           {/* Downloadable Resources */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
//                 <FileSearch className="text-green-600" size={20} />
//               </div>
//               <h2 className="text-gray-900" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                 Study Materials & Guides
//               </h2>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {downloadableResources.map((resource) => (
//                 <div key={resource.id} className="flex items-center justify-between p-4 border border-gray-200 hover:border-[#c4151c] rounded-lg transition-all group cursor-pointer">
//                   <div className="flex items-center gap-3 flex-1 min-w-0">
//                     <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center flex-shrink-0">
//                       <FileSearch className="text-red-600" size={20} />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-gray-900 truncate" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                         {resource.title}
//                       </p>
//                       <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                         {resource.type} • {resource.size} • {resource.downloads} downloads
//                       </p>
//                     </div>
//                   </div>
//                   <Download className="text-gray-400 group-hover:text-[#c4151c] transition-colors flex-shrink-0" size={20} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
