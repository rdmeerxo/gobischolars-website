// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Users, TrendingUp, BookOpen, FileText, BarChart3, Calendar, Award, AlertCircle, CheckCircle, Clock, Search, Filter, Plus, Eye, Download, Edit, MessageSquare } from 'lucide-react';
// import TeacherSidebar from './TeacherSidebar';

// export default function TeacherDashboard() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const stats = {
//     totalStudents: 142,
//     activeStudents: 128,
//     pendingAssignments: 47,
//     submittedAssignments: 89,
//     avgCompletionRate: 78,
//     avgGrade: 85,
//     activeCourses: 8,
//     totalPrograms: 4,
//   };

//   const recentActivities = [
//     { id: 1, type: 'submission', student: 'Sarah Michelle', action: 'submitted Common App Essay', course: 'Essay Writing', time: '5 min ago', icon: FileText, color: 'text-blue-600' },
//     { id: 2, type: 'completion', student: 'Alex Thompson', action: 'completed SAT Math Module 5', course: 'SAT Prep', time: '15 min ago', icon: CheckCircle, color: 'text-green-600' },
//     { id: 3, type: 'question', student: 'Michael Rodriguez', action: 'posted a question in Linear Equations', course: 'SAT Math', time: '1 hour ago', icon: MessageSquare, color: 'text-purple-600' },
//     { id: 4, type: 'submission', student: 'Emily Chen', action: 'submitted University Research', course: 'College Strategy', time: '2 hours ago', icon: FileText, color: 'text-blue-600' },
//     { id: 5, type: 'alert', student: 'James Wilson', action: 'missed deadline for Practice Test 3', course: 'TOEFL Prep', time: '3 hours ago', icon: AlertCircle, color: 'text-red-600' },
//   ];

//   const upcomingDeadlines = [
//     { id: 1, title: 'Common App Essays - Due', date: 'Dec 10, 2024', daysLeft: 13, submitted: 28, total: 45, program: 'Fall Scholars' },
//     { id: 2, title: 'SAT Practice Test 5', date: 'Dec 8, 2024', daysLeft: 11, submitted: 42, total: 45, program: 'Test Prep' },
//     { id: 3, title: 'Mock Interview Recordings', date: 'Dec 12, 2024', daysLeft: 15, submitted: 15, total: 32, program: 'Winter Scholars' },
//   ];

//   const programStats = [
//     { name: 'Fall Scholars', students: 45, active: 42, avgProgress: 82, color: 'from-orange-500 to-red-500' },
//     { name: 'Winter Scholars', students: 32, active: 30, avgProgress: 75, color: 'from-blue-500 to-cyan-500' },
//     { name: 'SAT Bootcamp', students: 38, active: 35, avgProgress: 88, color: 'from-purple-500 to-pink-500' },
//     { name: '12 Scholars Support', students: 27, active: 21, avgProgress: 70, color: 'from-green-500 to-emerald-500' },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Sidebar */}
//       <TeacherSidebar 
//         collapsed={sidebarCollapsed} 
//         onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />

//       {/* Main Content */}
//       <main className={`flex-1 transition-all ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
//         <div className="p-6 sm:p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//               Teacher Dashboard
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               Welcome back, Dr. Michael Chen
//             </p>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
//                   <Users className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Total Students</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.totalStudents}</p>
//               <p className="text-green-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 {stats.activeStudents} active this week
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
//                   <FileText className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Pending Review</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.pendingAssignments}</p>
//               <p className="text-orange-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 Awaiting feedback
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                   <TrendingUp className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Avg Completion</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.avgCompletionRate}%</p>
//               <p className="text-green-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 +5% from last month
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                   <Award className="text-white" size={24} />
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Average Grade</p>
//               <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.avgGrade}%</p>
//               <p className="text-purple-600 mt-2" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                 Class performance
//               </p>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-6 mb-8">
//             {/* Recent Activity */}
//             <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-5">
//                 <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   Recent Activity
//                 </h2>
//                 <button className="text-[#c4151c] hover:underline" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                   View All
//                 </button>
//               </div>
//               <div className="space-y-3">
//                 {recentActivities.map((activity) => {
//                   const Icon = activity.icon;
//                   return (
//                     <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all">
//                       <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 ${activity.color}`}>
//                         <Icon size={20} />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-gray-900 mb-1" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                           {activity.student}
//                         </p>
//                         <p className="text-gray-700 mb-1" style={{ fontSize: '0.85rem' }}>
//                           {activity.action}
//                         </p>
//                         <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: '0.75rem' }}>
//                           <span>{activity.course}</span>
//                           <span>•</span>
//                           <span>{activity.time}</span>
//                         </div>
//                       </div>
//                       <button className="px-3 py-1.5 text-[#c4151c] hover:bg-[#c4151c]/10 rounded-lg transition-colors" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                         View
//                       </button>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-br from-[#c4151c] to-[#a01117] p-6 rounded-xl shadow-lg text-white">
//               <h2 className="text-white mb-5" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Quick Actions
//               </h2>
//               <div className="space-y-2">
//                 <button 
//                   onClick={() => navigate('/teacher/assignments/create')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Plus size={18} />
//                   Create Assignment
//                 </button>
//                 <button 
//                   onClick={() => navigate('/teacher/students')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Users size={18} />
//                   View All Students
//                 </button>
//                 <button 
//                   onClick={() => navigate('/teacher/submissions')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <FileText size={18} />
//                   Review Submissions
//                 </button>
//                 <button 
//                   onClick={() => navigate('/teacher/analytics')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <BarChart3 size={18} />
//                   View Analytics
//                 </button>
//                 <button 
//                   onClick={() => navigate('/teacher/programs')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <BookOpen size={18} />
//                   Manage Programs
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Upcoming Deadlines */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
//             <div className="flex items-center justify-between mb-5">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
//                   <Calendar className="text-red-600" size={20} />
//                 </div>
//                 <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   Upcoming Assignment Deadlines
//                 </h2>
//               </div>
//             </div>
//             <div className="grid md:grid-cols-3 gap-4">
//               {upcomingDeadlines.map((deadline) => (
//                 <div key={deadline.id} className="p-5 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl">
//                   <p className="text-gray-900 mb-2" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                     {deadline.title}
//                   </p>
//                   <p className="text-gray-600 mb-1" style={{ fontSize: '0.8rem' }}>
//                     {deadline.program}
//                   </p>
//                   <p className="text-gray-600 mb-3 flex items-center gap-1" style={{ fontSize: '0.8rem' }}>
//                     <Calendar size={12} />
//                     Due: {deadline.date}
//                   </p>
//                   <div className="mb-3">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-gray-700" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                         Submission Progress
//                       </span>
//                       <span className="text-gray-900" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                         {deadline.submitted}/{deadline.total}
//                       </span>
//                     </div>
//                     <div className="bg-white rounded-full h-2">
//                       <div 
//                         className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" 
//                         style={{ width: `${(deadline.submitted / deadline.total) * 100}%` }} 
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-red-600" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                       {deadline.daysLeft} days left
//                     </span>
//                     <button className="text-[#c4151c] hover:underline" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Program Overview */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//             <div className="flex items-center justify-between mb-5">
//               <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Program Overview
//               </h2>
//               <button 
//                 onClick={() => navigate('/teacher/programs')}
//                 className="text-[#c4151c] hover:underline" 
//                 style={{ fontSize: '0.8rem', fontWeight: 500 }}
//               >
//                 Manage All Programs
//               </button>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {programStats.map((program) => (
//                 <div 
//                   key={program.name}
//                   className="p-5 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-all cursor-pointer"
//                   onClick={() => navigate(`/teacher/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`)}
//                 >
//                   <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4`}>
//                     <BookOpen className="text-white" size={20} />
//                   </div>
//                   <h3 className="text-gray-900 mb-3" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                     {program.name}
//                   </h3>
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center justify-between text-gray-600" style={{ fontSize: '0.8rem' }}>
//                       <span>Total Students</span>
//                       <span className="font-semibold text-gray-900">{program.students}</span>
//                     </div>
//                     <div className="flex items-center justify-between text-gray-600" style={{ fontSize: '0.8rem' }}>
//                       <span>Active</span>
//                       <span className="font-semibold text-green-600">{program.active}</span>
//                     </div>
//                   </div>
//                   <div className="mb-2">
//                     <div className="flex items-center justify-between mb-1">
//                       <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>Avg Progress</span>
//                       <span className="text-gray-900" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{program.avgProgress}%</span>
//                     </div>
//                     <div className="bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className={`bg-gradient-to-r ${program.color} h-1.5 rounded-full`} 
//                         style={{ width: `${program.avgProgress}%` }} 
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
