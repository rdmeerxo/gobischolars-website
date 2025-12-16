// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { BookMarked, BookOpen, TrendingUp, Database, School, CalendarCheck, User, LogOut, ChevronLeft, ChevronRight, FileText, Bot, ClipboardList } from 'lucide-react';

// interface DashboardSidebarProps {
//   collapsed?: boolean;
//   onToggleCollapse?: () => void;
// }

// export default function DashboardSidebar({ collapsed = false, onToggleCollapse }: DashboardSidebarProps) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const sidebarItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: BookMarked, path: '/academy/dashboard' },
//     { id: 'courses', label: 'My Courses', icon: BookOpen, path: '/academy/courses' },
//     { id: 'assignments', label: 'Assignments', icon: ClipboardList, path: '/academy/assignments' },
//     { id: 'submissions', label: 'My Submissions', icon: FileText, path: '/academy/submissions' },
//     { id: 'progress', label: 'Progress', icon: TrendingUp, path: '/academy/progress' },
//     { id: 'ai-counseling', label: 'AI Counseling', icon: Bot, path: '/academy/ai-counseling' },
//     { id: 'counseling', label: 'Counseling', icon: CalendarCheck, path: '/academy/counseling' },
//     { id: 'resources', label: 'Resources', icon: Database, path: '/academy/resources' },
//     { id: 'school-selection', label: 'School Selection', icon: School, path: '/academy/school-selection' },
//     { id: 'settings', label: 'Settings', icon: User, path: '/academy/settings' },
//   ];

//   const handleNavigation = (path: string) => {
//     navigate(path);
//   };

//   const handleLogout = () => {
//     navigate('/academy/login');
//   };

//   return (
//     <aside className={`fixed left-0 top-0 bottom-0 bg-white border-r border-gray-200 transition-all z-50 shadow-lg ${
//       collapsed ? 'w-20' : 'w-72'
//     }`}>
//       <div className="h-full flex flex-col">
//         {/* Logo Section */}
//         <div className="p-6 border-b border-gray-200">
//           {!collapsed ? (
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-lg flex items-center justify-center">
//                 <span className="text-white" style={{ fontSize: '1.2rem', fontWeight: 700 }}>G</span>
//               </div>
//               <div>
//                 <h2 className="serif text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                   GobiScholars
//                 </h2>
//                 <p className="text-gray-500" style={{ fontSize: '0.7rem' }}>Academy Portal</p>
//               </div>
//             </div>
//           ) : (
//             <div className="w-10 h-10 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-lg flex items-center justify-center mx-auto">
//               <span className="text-white" style={{ fontSize: '1.2rem', fontWeight: 700 }}>G</span>
//             </div>
//           )}
//         </div>

//         {/* User Profile Section */}
//         {!collapsed && (
//           <div className="px-4 py-6 border-b border-gray-200">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-xl flex items-center justify-center flex-shrink-0">
//                 <User size={24} className="text-white" />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-gray-900 truncate" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                   Sarah Michelle
//                 </p>
//                 <p className="text-gray-500 truncate" style={{ fontSize: '0.75rem' }}>
//                   Class of 2025
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Navigation Items */}
//         <nav className="flex-1 px-3 pt-4 space-y-1 overflow-y-auto">
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path || 
//                            (item.id === 'assignments' && location.pathname.startsWith('/academy/assignments')) ||
//                            (item.id === 'submissions' && location.pathname.startsWith('/academy/submissions')) ||
//                            (item.id === 'ai-counseling' && location.pathname.startsWith('/academy/ai-counseling')) ||
//                            (item.id === 'resources' && location.pathname.startsWith('/academy/resources')) ||
//                            (item.id === 'school-selection' && location.pathname === '/academy/school-selection') ||
//                            (item.id === 'counseling' && location.pathname === '/academy/counseling');
            
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavigation(item.path)}
//                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
//                   isActive
//                     ? 'bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white shadow-lg'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//                 style={{ fontSize: '0.9rem', fontWeight: isActive ? 600 : 500 }}
//                 title={collapsed ? item.label : undefined}
//               >
//                 <Icon size={20} className="flex-shrink-0" />
//                 {!collapsed && <span>{item.label}</span>}
//               </button>
//             );
//           })}
//         </nav>

//         {/* Bottom Section */}
//         <div className="p-4 border-t border-gray-200 space-y-2">
//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
//             style={{ fontSize: '0.9rem', fontWeight: 500 }}
//             title={collapsed ? 'Logout' : undefined}
//           >
//             <LogOut size={20} className="flex-shrink-0" />
//             {!collapsed && <span>Logout</span>}
//           </button>

//           {/* Collapse Toggle */}
//           {onToggleCollapse && (
//             <button
//               onClick={onToggleCollapse}
//               className="w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-center gap-2"
//               style={{ fontSize: '0.85rem', fontWeight: 500 }}
//             >
//               {collapsed ? <ChevronRight size={18} /> : <><ChevronLeft size={18} /> Collapse</>}
//             </button>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }
