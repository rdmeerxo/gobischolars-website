// import React, { useState } from 'react';
// import { User, Calendar, Video, CalendarCheck } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function Counseling() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const counselingSessions = [
//     {
//       id: 1,
//       title: 'College List Review',
//       counselor: 'Sarah Johnson',
//       date: 'Dec 1, 2024',
//       time: '3:00 PM',
//       status: 'Scheduled',
//       type: 'Video Call',
//     },
//     {
//       id: 2,
//       title: 'Essay Feedback Session',
//       counselor: 'Michael Chen',
//       date: 'Dec 5, 2024',
//       time: '4:30 PM',
//       status: 'Scheduled',
//       type: 'Video Call',
//     },
//   ];

//   const availableSlots = [
//     { date: 'Dec 8, 2024', time: '2:00 PM', counselor: 'Sarah Johnson' },
//     { date: 'Dec 8, 2024', time: '4:00 PM', counselor: 'Michael Chen' },
//     { date: 'Dec 10, 2024', time: '3:00 PM', counselor: 'Emma Williams' },
//     { date: 'Dec 12, 2024', time: '2:30 PM', counselor: 'Sarah Johnson' },
//     { date: 'Dec 15, 2024', time: '10:00 AM', counselor: 'Michael Chen' },
//     { date: 'Dec 15, 2024', time: '1:00 PM', counselor: 'Emma Williams' },
//   ];

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
//               Counseling Sessions
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               Schedule and manage your college counseling appointments
//             </p>
//           </div>

//           {/* Upcoming Sessions */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
//             <h2 className="text-gray-900 mb-6" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//               Your Scheduled Sessions
//             </h2>
//             <div className="space-y-4">
//               {counselingSessions.map((session) => (
//                 <div key={session.id} className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
//                   <div className="flex items-start justify-between mb-3">
//                     <div className="flex-1">
//                       <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                         {session.title}
//                       </h3>
//                       <div className="space-y-1">
//                         <p className="text-gray-700 flex items-center gap-2" style={{ fontSize: '0.9rem' }}>
//                           <User size={16} />
//                           {session.counselor}
//                         </p>
//                         <p className="text-gray-700 flex items-center gap-2" style={{ fontSize: '0.9rem' }}>
//                           <Calendar size={16} />
//                           {session.date} at {session.time}
//                         </p>
//                         <p className="text-gray-700 flex items-center gap-2" style={{ fontSize: '0.9rem' }}>
//                           <Video size={16} />
//                           {session.type}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         Join Call
//                       </button>
//                       <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         Reschedule
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Book New Session */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//             <h2 className="text-gray-900 mb-6" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//               Schedule New Session
//             </h2>

//             {/* Session Type Selection */}
//             <div className="mb-6">
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Session Type
//               </label>
//               <div className="grid sm:grid-cols-3 gap-3">
//                 <button className="p-4 border-2 border-[#c4151c] bg-[#c4151c]/5 rounded-lg text-left transition-all">
//                   <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     College List Review
//                   </p>
//                   <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                     30 minutes
//                   </p>
//                 </button>
//                 <button className="p-4 border border-gray-300 hover:border-[#c4151c] rounded-lg text-left transition-all">
//                   <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     Essay Review
//                   </p>
//                   <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                     45 minutes
//                   </p>
//                 </button>
//                 <button className="p-4 border border-gray-300 hover:border-[#c4151c] rounded-lg text-left transition-all">
//                   <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     General Counseling
//                   </p>
//                   <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                     60 minutes
//                   </p>
//                 </button>
//               </div>
//             </div>

//             {/* Available Slots */}
//             <div>
//               <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Available Time Slots
//               </label>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                 {availableSlots.map((slot, index) => (
//                   <button
//                     key={index}
//                     className="p-4 border border-gray-300 hover:border-[#c4151c] hover:bg-[#c4151c]/5 rounded-lg text-left transition-all group"
//                   >
//                     <p className="text-gray-900 mb-2 flex items-center gap-2" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                       <Calendar size={16} />
//                       {slot.date}
//                     </p>
//                     <p className="text-gray-600 mb-1" style={{ fontSize: '0.85rem' }}>
//                       {slot.time}
//                     </p>
//                     <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                       with {slot.counselor}
//                     </p>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button className="w-full mt-6 py-3 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors flex items-center justify-center gap-2" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//               <CalendarCheck size={20} />
//               Book Session
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
