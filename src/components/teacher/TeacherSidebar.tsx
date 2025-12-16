// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { LayoutDashboard, Users, FileText, BookOpen, BarChart3, MessageSquare, Settings, LogOut, ChevronLeft, ChevronRight, Calendar, Award, Upload } from 'lucide-react';

// interface TeacherSidebarProps {
//   collapsed?: boolean;
//   onToggleCollapse?: () => void;
// }

// export default function TeacherSidebar({ collapsed = false, onToggleCollapse }: TeacherSidebarProps) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const sidebarItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/teacher/dashboard' },
//     { id: 'students', label: 'Students', icon: Users, path: '/teacher/students' },
//     { id: 'assignments', label: 'Assignments', icon: FileText, path: '/teacher/assignments' },
//     { id: 'submissions', label: 'Submissions', icon: Upload, path: '/teacher/submissions' },
//     { id: 'programs', label: 'Programs', icon: BookOpen, path: '/teacher/programs' },
//     { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/teacher/analytics' },
//     { id: 'schedule', label: 'Schedule', icon: Calendar, path: '/teacher/schedule' },
//     { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/teacher/messages' },
//     { id: 'settings', label: 'Settings', icon: Settings, path: '/teacher/settings' },
//   ];

//   return (
//     <aside
//       className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-50 ${
//         collapsed ? 'w-20' : 'w-72'
//       }`}
//     >
//       <div className="flex flex-col h-full">
//         {/* Logo */}
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             {!collapsed && (
//               <div>
//                 <h1 className="serif text-[#c4151c]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
//                   GobiScholars
//                 </h1>
//                 <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>
//                   Teacher Portal
//                 </p>
//               </div>
//             )}
//             {collapsed && (
//               <div className="mx-auto">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-lg flex items-center justify-center">
//                   <span className="text-white" style={{ fontSize: '1.2rem', fontWeight: 700 }}>G</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto p-4">
//           <ul className="space-y-1">
//             {sidebarItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = location.pathname === item.path || 
//                              (item.id === 'students' && location.pathname.startsWith('/teacher/students')) ||
//                              (item.id === 'assignments' && location.pathname.startsWith('/teacher/assignments')) ||
//                              (item.id === 'submissions' && location.pathname.startsWith('/teacher/submissions')) ||
//                              (item.id === 'programs' && location.pathname.startsWith('/teacher/programs')) ||
//                              (item.id === 'analytics' && location.pathname.startsWith('/teacher/analytics'));

//               return (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => navigate(item.path)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
//                       isActive
//                         ? 'bg-[#c4151c] text-white shadow-md'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                     title={collapsed ? item.label : ''}
//                   >
//                     <Icon size={20} className="flex-shrink-0" />
//                     {!collapsed && (
//                       <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                         {item.label}
//                       </span>
//                     )}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* User Section */}
//         <div className="p-4 border-t border-gray-200">
//           <div className={`flex items-center gap-3 px-4 py-3 ${collapsed ? 'justify-center' : ''}`}>
//             <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
//               <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>MC</span>
//             </div>
//             {!collapsed && (
//               <div className="flex-1 min-w-0">
//                 <p className="text-gray-900 truncate" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                   Dr. Michael Chen
//                 </p>
//                 <p className="text-gray-600 truncate" style={{ fontSize: '0.75rem' }}>
//                   Teacher
//                 </p>
//               </div>
//             )}
//           </div>
//           <button
//             onClick={() => navigate('/academy')}
//             className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mt-2"
//           >
//             <LogOut size={20} className="flex-shrink-0" />
//             {!collapsed && (
//               <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Logout</span>
//             )}
//           </button>
//         </div>

//         {/* Collapse Toggle */}
//         <button
//           onClick={onToggleCollapse}
//           className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
//         >
//           {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
//         </button>
//       </div>
//     </aside>
//   );
// }
