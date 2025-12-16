// import React, { useState } from 'react';
// import { TrendingUp, TrendingDown, Users, BookOpen, Award, Clock, Target, BarChart3, Calendar, Download } from 'lucide-react';
// import TeacherSidebar from './TeacherSidebar';

// export default function Analytics() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [timePeriod, setTimePeriod] = useState<'week' | 'month' | 'quarter' | 'year'>('month');

//   const overallStats = {
//     totalStudents: 142,
//     activeStudents: 128,
//     avgCompletionRate: 78,
//     avgGrade: 85,
//     totalAssignments: 56,
//     submittedAssignments: 892,
//     avgResponseTime: '24 hours',
//     studentSatisfaction: 4.7,
//   };

//   const trends = {
//     students: { current: 142, previous: 135, change: +5.2 },
//     completion: { current: 78, previous: 72, change: +8.3 },
//     avgGrade: { current: 85, previous: 82, change: +3.7 },
//     engagement: { current: 92, previous: 88, change: +4.5 },
//   };

//   const programPerformance = [
//     { name: 'Fall Scholars', students: 45, avgGrade: 88, completion: 85, satisfaction: 4.8, color: 'from-orange-500 to-red-500' },
//     { name: 'Winter Scholars', students: 32, avgGrade: 82, completion: 78, satisfaction: 4.6, color: 'from-blue-500 to-cyan-500' },
//     { name: 'SAT Bootcamp', students: 38, avgGrade: 91, completion: 92, satisfaction: 4.9, color: 'from-purple-500 to-pink-500' },
//     { name: '12 Scholars Support', students: 27, avgGrade: 79, completion: 70, satisfaction: 4.5, color: 'from-green-500 to-emerald-500' },
//   ];

//   const topPerformers = [
//     { name: 'Michael Rodriguez', program: 'SAT Bootcamp', avgGrade: 98, completion: 100, assignments: 32 },
//     { name: 'Sarah Michelle', program: 'Fall Scholars', avgGrade: 96, completion: 95, assignments: 28 },
//     { name: 'Alex Thompson', program: 'Winter Scholars', avgGrade: 94, completion: 90, assignments: 24 },
//     { name: 'Emily Chen', program: 'Fall Scholars', avgGrade: 92, completion: 88, assignments: 22 },
//     { name: 'James Park', program: 'SAT Bootcamp', avgGrade: 91, completion: 92, assignments: 26 },
//   ];

//   const needsAttention = [
//     { name: 'James Wilson', program: '12 Scholars Support', avgGrade: 65, completion: 45, lastActive: '1 week ago', issues: 'Low completion rate, multiple missed deadlines' },
//     { name: 'Lisa Anderson', program: 'Winter Scholars', avgGrade: 70, completion: 60, lastActive: '3 days ago', issues: 'Struggling with essay assignments' },
//     { name: 'David Kim', program: 'Fall Scholars', avgGrade: 72, completion: 65, lastActive: '2 days ago', issues: 'Below average grades on recent tests' },
//   ];

//   const weeklyActivity = [
//     { day: 'Mon', submissions: 45, completions: 38, avgTime: 42 },
//     { day: 'Tue', submissions: 52, completions: 44, avgTime: 38 },
//     { day: 'Wed', submissions: 48, completions: 40, avgTime: 45 },
//     { day: 'Thu', submissions: 55, completions: 48, avgTime: 35 },
//     { day: 'Fri', submissions: 38, completions: 32, avgTime: 40 },
//     { day: 'Sat', submissions: 28, completions: 24, avgTime: 50 },
//     { day: 'Sun', submissions: 32, completions: 28, avgTime: 48 },
//   ];

//   const maxSubmissions = Math.max(...weeklyActivity.map(d => d.submissions));

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
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//                   Analytics & Insights
//                 </h1>
//                 <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//                   Track performance and identify trends
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <select
//                   value={timePeriod}
//                   onChange={(e) => setTimePeriod(e.target.value as any)}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="week">This Week</option>
//                   <option value="month">This Month</option>
//                   <option value="quarter">This Quarter</option>
//                   <option value="year">This Year</option>
//                 </select>
//                 <button className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors flex items-center gap-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   <Download size={18} />
//                   Export
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Key Metrics with Trends */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
//                   <Users className="text-white" size={24} />
//                 </div>
//                 <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trends.students.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                   {trends.students.change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
//                   {Math.abs(trends.students.change)}%
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Total Students</p>
//               <p className="text-gray-900 mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>{trends.students.current}</p>
//               <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>vs {trends.students.previous} last month</p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                   <Target className="text-white" size={24} />
//                 </div>
//                 <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trends.completion.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                   {trends.completion.change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
//                   {Math.abs(trends.completion.change)}%
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Avg Completion</p>
//               <p className="text-gray-900 mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>{trends.completion.current}%</p>
//               <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>vs {trends.completion.previous}% last month</p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                   <Award className="text-white" size={24} />
//                 </div>
//                 <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trends.avgGrade.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                   {trends.avgGrade.change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
//                   {Math.abs(trends.avgGrade.change)}%
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Average Grade</p>
//               <p className="text-gray-900 mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>{trends.avgGrade.current}%</p>
//               <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>vs {trends.avgGrade.previous}% last month</p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
//                   <BarChart3 className="text-white" size={24} />
//                 </div>
//                 <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trends.engagement.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                   {trends.engagement.change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
//                   {Math.abs(trends.engagement.change)}%
//                 </div>
//               </div>
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Engagement Rate</p>
//               <p className="text-gray-900 mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>{trends.engagement.current}%</p>
//               <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>vs {trends.engagement.previous}% last month</p>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-6 mb-8">
//             {/* Weekly Activity Chart */}
//             <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <h2 className="text-gray-900 mb-6" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Weekly Activity
//               </h2>
//               <div className="space-y-4">
//                 {weeklyActivity.map((day) => (
//                   <div key={day.day}>
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-gray-700 w-12" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         {day.day}
//                       </span>
//                       <div className="flex-1 mx-4">
//                         <div className="bg-gray-200 rounded-full h-8 relative overflow-hidden">
//                           <div
//                             className="bg-gradient-to-r from-[#c4151c] to-orange-500 h-8 rounded-full flex items-center justify-end pr-3 transition-all"
//                             style={{ width: `${(day.submissions / maxSubmissions) * 100}%` }}
//                           >
//                             <span className="text-white" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                               {day.submissions}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex gap-4 text-gray-600" style={{ fontSize: '0.75rem' }}>
//                         <span>{day.completions} completed</span>
//                         <span>{day.avgTime} min avg</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="bg-gradient-to-br from-[#c4151c] to-[#a01117] p-6 rounded-xl shadow-lg text-white">
//               <h2 className="text-white mb-5" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Quick Stats
//               </h2>
//               <div className="space-y-4">
//                 <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
//                   <p className="text-white/80 mb-1" style={{ fontSize: '0.8rem' }}>Total Assignments</p>
//                   <p className="text-white" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{overallStats.totalAssignments}</p>
//                 </div>
//                 <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
//                   <p className="text-white/80 mb-1" style={{ fontSize: '0.8rem' }}>Total Submissions</p>
//                   <p className="text-white" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{overallStats.submittedAssignments}</p>
//                 </div>
//                 <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
//                   <p className="text-white/80 mb-1" style={{ fontSize: '0.8rem' }}>Avg Response Time</p>
//                   <p className="text-white" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{overallStats.avgResponseTime}</p>
//                 </div>
//                 <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
//                   <p className="text-white/80 mb-1" style={{ fontSize: '0.8rem' }}>Satisfaction</p>
//                   <p className="text-white" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{overallStats.studentSatisfaction}/5.0</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Program Performance */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
//             <h2 className="text-gray-900 mb-5" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//               Program Performance
//             </h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {programPerformance.map((program) => (
//                 <div key={program.name} className="p-5 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl">
//                   <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4`}>
//                     <BookOpen className="text-white" size={20} />
//                   </div>
//                   <h3 className="text-gray-900 mb-4" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                     {program.name}
//                   </h3>
//                   <div className="space-y-3">
//                     <div>
//                       <div className="flex items-center justify-between mb-1">
//                         <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>Avg Grade</span>
//                         <span className="text-gray-900" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{program.avgGrade}%</span>
//                       </div>
//                       <div className="bg-gray-200 rounded-full h-1.5">
//                         <div 
//                           className={`bg-gradient-to-r ${program.color} h-1.5 rounded-full`} 
//                           style={{ width: `${program.avgGrade}%` }} 
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex items-center justify-between mb-1">
//                         <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>Completion</span>
//                         <span className="text-gray-900" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{program.completion}%</span>
//                       </div>
//                       <div className="bg-gray-200 rounded-full h-1.5">
//                         <div 
//                           className={`bg-gradient-to-r ${program.color} h-1.5 rounded-full`} 
//                           style={{ width: `${program.completion}%` }} 
//                         />
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between pt-2 border-t border-gray-200">
//                       <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>Students</span>
//                       <span className="text-gray-900" style={{ fontSize: '0.85rem', fontWeight: 700 }}>{program.students}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>Rating</span>
//                       <span className="text-yellow-600" style={{ fontSize: '0.85rem', fontWeight: 700 }}>⭐ {program.satisfaction}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6">
//             {/* Top Performers */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
//                   <Award className="text-green-600" size={20} />
//                 </div>
//                 <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   Top Performers
//                 </h2>
//               </div>
//               <div className="space-y-3">
//                 {topPerformers.map((student, idx) => (
//                   <div key={student.name} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
//                     <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
//                       <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>#{idx + 1}</span>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                         {student.name}
//                       </p>
//                       <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>
//                         {student.program}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-green-900 mb-1" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
//                         {student.avgGrade}%
//                       </p>
//                       <p className="text-gray-600" style={{ fontSize: '0.7rem' }}>
//                         {student.completion}% complete
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Students Needing Attention */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
//                   <TrendingDown className="text-red-600" size={20} />
//                 </div>
//                 <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   Needs Attention
//                 </h2>
//               </div>
//               <div className="space-y-3">
//                 {needsAttention.map((student) => (
//                   <div key={student.name} className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg">
//                     <div className="flex items-start justify-between mb-2">
//                       <div>
//                         <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                           {student.name}
//                         </p>
//                         <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>
//                           {student.program}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-red-900 mb-1" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
//                           {student.avgGrade}%
//                         </p>
//                         <p className="text-gray-600" style={{ fontSize: '0.7rem' }}>
//                           {student.completion}% complete
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 mb-2" style={{ fontSize: '0.8rem' }}>
//                       {student.issues}
//                     </p>
//                     <p className="text-gray-500" style={{ fontSize: '0.7rem' }}>
//                       Last active: {student.lastActive}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
