// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Users, BookOpen, Settings, Shield, TrendingUp, DollarSign, AlertTriangle, CheckCircle, Clock, BarChart3, UserPlus, FileText, Database, Activity } from 'lucide-react';
// import AdminSidebar from './AdminSidebar';

// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const systemStats = {
//     totalUsers: 312,
//     students: 142,
//     teachers: 15,
//     admins: 3,
//     activePrograms: 4,
//     totalCourses: 24,
//     totalRevenue: 245680,
//     monthlyRevenue: 42150,
//     systemUptime: 99.8,
//     avgResponseTime: '120ms',
//   };

//   const recentActivities = [
//     { id: 1, type: 'user', action: 'New student registered: Sarah Michelle', time: '5 min ago', icon: UserPlus, color: 'text-blue-600' },
//     { id: 2, type: 'payment', action: 'Payment received: $1,500 - Fall Scholars', time: '15 min ago', icon: DollarSign, color: 'text-green-600' },
//     { id: 3, type: 'content', action: 'Course created: AP Biology Review', time: '1 hour ago', icon: BookOpen, color: 'text-purple-600' },
//     { id: 4, type: 'system', action: 'Database backup completed', time: '2 hours ago', icon: Database, color: 'text-gray-600' },
//     { id: 5, type: 'alert', action: 'Server load spike detected', time: '3 hours ago', icon: AlertTriangle, color: 'text-orange-600' },
//   ];

//   const systemHealth = [
//     { metric: 'API Response Time', value: '120ms', status: 'excellent', target: '<200ms', color: 'text-green-600' },
//     { metric: 'Database Performance', value: '98%', status: 'excellent', target: '>95%', color: 'text-green-600' },
//     { metric: 'Server Uptime', value: '99.8%', status: 'excellent', target: '>99.5%', color: 'text-green-600' },
//     { metric: 'Error Rate', value: '0.02%', status: 'excellent', target: '<0.1%', color: 'text-green-600' },
//     { metric: 'Active Users', value: '287/312', status: 'good', target: '>85%', color: 'text-blue-600' },
//     { metric: 'Storage Usage', value: '62%', status: 'warning', target: '<80%', color: 'text-yellow-600' },
//   ];

//   const userGrowth = [
//     { month: 'Jul', students: 95, teachers: 12 },
//     { month: 'Aug', students: 108, teachers: 13 },
//     { month: 'Sep', students: 122, teachers: 14 },
//     { month: 'Oct', students: 135, teachers: 15 },
//     { month: 'Nov', students: 142, teachers: 15 },
//   ];

//   const revenueData = [
//     { month: 'Jul', amount: 38500 },
//     { month: 'Aug', amount: 42300 },
//     { month: 'Sep', amount: 39800 },
//     { month: 'Oct', amount: 44600 },
//     { month: 'Nov', amount: 42150 },
//   ];

//   const maxStudents = Math.max(...userGrowth.map(d => d.students));
//   const maxRevenue = Math.max(...revenueData.map(d => d.amount));

//   const pendingActions = [
//     { id: 1, type: 'approval', title: 'Teacher Application: Dr. Emily Zhang', priority: 'high', time: '2 hours ago' },
//     { id: 2, type: 'payment', title: 'Refund Request: $1,200', priority: 'medium', time: '1 day ago' },
//     { id: 3, type: 'content', title: 'Course Review: SAT Writing Module', priority: 'low', time: '2 days ago' },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Sidebar */}
//       <AdminSidebar 
//         collapsed={sidebarCollapsed} 
//         onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />

//       {/* Main Content */}
//       <main className={`flex-1 transition-all ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
//         <div className="p-6 sm:p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//               Admin Dashboard
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               System overview and management center
//             </p>
//           </div>

//           {/* Key Metrics */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
//                   <Users className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Total Users</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{systemStats.totalUsers}</p>
//               <div className="flex items-center gap-2 mt-2 text-gray-600" style={{ fontSize: '0.75rem' }}>
//                 <span>{systemStats.students} students</span>
//                 <span>•</span>
//                 <span>{systemStats.teachers} teachers</span>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                   <BookOpen className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Programs & Courses</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{systemStats.activePrograms}</p>
//               <p className="text-gray-600 mt-2" style={{ fontSize: '0.75rem' }}>
//                 {systemStats.totalCourses} total courses
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                   <DollarSign className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Monthly Revenue</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>${(systemStats.monthlyRevenue / 1000).toFixed(0)}k</p>
//               <p className="text-green-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 +8.5% from last month
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
//                   <Activity className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>System Uptime</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{systemStats.systemUptime}%</p>
//               <p className="text-green-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 Excellent performance
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
//                   <Clock className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Response Time</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{systemStats.avgResponseTime}</p>
//               <p className="text-blue-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 API performance
//               </p>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-6 mb-8">
//             {/* User Growth Chart */}
//             <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <h2 className="text-gray-900 mb-6" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 User Growth
//               </h2>
//               <div className="space-y-4">
//                 {userGrowth.map((data) => (
//                   <div key={data.month}>
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-gray-700 w-12" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         {data.month}
//                       </span>
//                       <div className="flex-1 mx-4">
//                         <div className="bg-gray-200 rounded-full h-8 relative overflow-hidden">
//                           <div
//                             className="bg-gradient-to-r from-[#c4151c] to-orange-500 h-8 rounded-full flex items-center justify-end pr-3 transition-all"
//                             style={{ width: `${(data.students / maxStudents) * 100}%` }}
//                           >
//                             <span className="text-white" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                               {data.students}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-gray-600" style={{ fontSize: '0.75rem' }}>
//                         {data.teachers} teachers
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-br from-[#c4151c] to-[#a01117] p-6 rounded-xl shadow-lg text-white">
//               <h2 className="text-white mb-5" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Quick Actions
//               </h2>
//               <div className="space-y-2">
//                 <button 
//                   onClick={() => navigate('/admin/users')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Users size={18} />
//                   Manage Users
//                 </button>
//                 <button 
//                   onClick={() => navigate('/admin/programs')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <BookOpen size={18} />
//                   Manage Programs
//                 </button>
//                 <button 
//                   onClick={() => navigate('/admin/content')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <FileText size={18} />
//                   Content Management
//                 </button>
//                 <button 
//                   onClick={() => navigate('/admin/analytics')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <BarChart3 size={18} />
//                   View Analytics
//                 </button>
//                 <button 
//                   onClick={() => navigate('/admin/settings')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Settings size={18} />
//                   System Settings
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Revenue Chart */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
//             <h2 className="text-gray-900 mb-6" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//               Revenue Trend
//             </h2>
//             <div className="flex items-end justify-between gap-4 h-64">
//               {revenueData.map((data) => (
//                 <div key={data.month} className="flex-1 flex flex-col items-center justify-end">
//                   <div
//                     className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
//                     style={{ height: `${(data.amount / maxRevenue) * 100}%` }}
//                   />
//                   <div className="mt-3 text-center">
//                     <p className="text-gray-900 mb-1" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
//                       ${(data.amount / 1000).toFixed(1)}k
//                     </p>
//                     <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>
//                       {data.month}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6 mb-8">
//             {/* System Health */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
//                   <Activity className="text-green-600" size={20} />
//                 </div>
//                 <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   System Health
//                 </h2>
//               </div>
//               <div className="space-y-3">
//                 {systemHealth.map((item) => (
//                   <div key={item.metric} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                         {item.metric}
//                       </span>
//                       <span className={`${item.color}`} style={{ fontSize: '1rem', fontWeight: 700 }}>
//                         {item.value}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between text-gray-600" style={{ fontSize: '0.75rem' }}>
//                       <span>Target: {item.target}</span>
//                       <span className={`px-2 py-1 rounded-full ${
//                         item.status === 'excellent' ? 'bg-green-100 text-green-700' :
//                         item.status === 'good' ? 'bg-blue-100 text-blue-700' :
//                         'bg-yellow-100 text-yellow-700'
//                       }`} style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                         {item.status}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Activities */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-5">
//                 <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   Recent Activities
//                 </h2>
//                 <button className="text-[#c4151c] hover:underline" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                   View All
//                 </button>
//               </div>
//               <div className="space-y-3">
//                 {recentActivities.map((activity) => {
//                   const Icon = activity.icon;
//                   return (
//                     <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                       <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 ${activity.color}`}>
//                         <Icon size={20} />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-gray-900 mb-1" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                           {activity.action}
//                         </p>
//                         <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                           {activity.time}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Pending Actions */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
//                 <AlertTriangle className="text-orange-600" size={20} />
//               </div>
//               <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Pending Actions
//               </h2>
//             </div>
//             <div className="space-y-3">
//               {pendingActions.map((action) => (
//                 <div key={action.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg">
//                   <div>
//                     <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                       {action.title}
//                     </p>
//                     <div className="flex items-center gap-3 text-gray-600" style={{ fontSize: '0.75rem' }}>
//                       <span>{action.time}</span>
//                       <span className={`px-2 py-0.5 rounded-full ${
//                         action.priority === 'high' ? 'bg-red-100 text-red-700' :
//                         action.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
//                         'bg-gray-100 text-gray-700'
//                       }`} style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                         {action.priority} priority
//                       </span>
//                     </div>
//                   </div>
//                   <button className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     Review
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
