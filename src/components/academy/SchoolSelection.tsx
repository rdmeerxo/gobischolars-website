// import React, { useState } from 'react';
// import { Upload, Calendar, CheckCircle, AlertCircle, School } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function SchoolSelection() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const [schoolChoices, setSchoolChoices] = useState([
//     {
//       id: 1,
//       name: 'MIT',
//       type: 'Reach',
//       deadline: 'Jan 1, 2025',
//       status: 'In Progress',
//       submitted: false,
//       essays: true,
//       transcripts: true,
//       testScores: true,
//       recLetters: false,
//     },
//     {
//       id: 2,
//       name: 'Stanford University',
//       type: 'Reach',
//       deadline: 'Jan 5, 2025',
//       status: 'In Progress',
//       submitted: false,
//       essays: false,
//       transcripts: true,
//       testScores: true,
//       recLetters: true,
//     },
//     {
//       id: 3,
//       name: 'UC Berkeley',
//       type: 'Target',
//       deadline: 'Nov 30, 2024',
//       status: 'Ready to Submit',
//       submitted: false,
//       essays: true,
//       transcripts: true,
//       testScores: true,
//       recLetters: true,
//     },
//   ]);

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
//               School Selection
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               Manage your college application list
//             </p>
//           </div>

//           {/* Add School Button */}
//           <button className="w-full mb-6 p-6 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3" style={{ fontSize: '1rem', fontWeight: 600 }}>
//             <Upload size={20} />
//             Add New School
//           </button>

//           {/* School List Summary */}
//           <div className="grid sm:grid-cols-3 gap-4 mb-8">
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
//                   <School className="text-red-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Reach Schools</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>2</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-lg">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                   <School className="text-blue-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Target Schools</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>1</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-lg">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
//                   <School className="text-green-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Safety Schools</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>0</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* School Cards */}
//           <div className="space-y-4">
//             {schoolChoices.map((school) => (
//               <div key={school.id} className="bg-white border border-gray-200 p-6 rounded-lg hover:border-[#c4151c] transition-all">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-2">
//                       <h3 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                         {school.name}
//                       </h3>
//                       <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         school.type === 'Reach' ? 'bg-red-100 text-red-700' :
//                         school.type === 'Target' ? 'bg-blue-100 text-blue-700' :
//                         'bg-green-100 text-green-700'
//                       }`}>
//                         {school.type}
//                       </span>
//                       <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         school.status === 'Ready to Submit' ? 'bg-green-100 text-green-700' :
//                         'bg-yellow-100 text-yellow-700'
//                       }`}>
//                         {school.status}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 flex items-center gap-2" style={{ fontSize: '0.9rem' }}>
//                       <Calendar size={16} />
//                       Deadline: {school.deadline}
//                     </p>
//                   </div>
//                   <button className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     View Details
//                   </button>
//                 </div>

//                 {/* Application Components Checklist */}
//                 <div className="grid sm:grid-cols-4 gap-3 pt-4 border-t border-gray-200">
//                   <div className="flex items-center gap-2">
//                     {school.essays ? (
//                       <CheckCircle className="text-green-500" size={16} />
//                     ) : (
//                       <AlertCircle className="text-amber-500" size={16} />
//                     )}
//                     <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>Essays</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {school.transcripts ? (
//                       <CheckCircle className="text-green-500" size={16} />
//                     ) : (
//                       <AlertCircle className="text-amber-500" size={16} />
//                     )}
//                     <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>Transcripts</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {school.testScores ? (
//                       <CheckCircle className="text-green-500" size={16} />
//                     ) : (
//                       <AlertCircle className="text-amber-500" size={16} />
//                     )}
//                     <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>Test Scores</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {school.recLetters ? (
//                       <CheckCircle className="text-green-500" size={16} />
//                     ) : (
//                       <AlertCircle className="text-amber-500" size={16} />
//                     )}
//                     <span className="text-gray-700" style={{ fontSize: '0.85rem' }}>Rec Letters</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
