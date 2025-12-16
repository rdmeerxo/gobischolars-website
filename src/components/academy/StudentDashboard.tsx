// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Play, Clock, CheckCircle, BookOpen, Award, TrendingUp, Calendar, User, ChevronRight, CalendarCheck, Flame, Target, BookMarked, Video, Star, Trophy, Zap, ArrowUp, Bell, MessageSquare, FileText, Upload, Bot, AlertCircle } from 'lucide-react';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
// import DashboardSidebar from './DashboardSidebar';

// export default function StudentDashboard() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   // Mock enrolled courses
//   const enrolledCourses = [
//     {
//       id: 1,
//       title: 'SAT Math Preparation',
//       progress: 65,
//       thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800',
//       instructor: 'Dr. Sarah Johnson',
//       nextLesson: 'Quadratic Equations',
//       totalVideos: 24,
//       completedVideos: 16,
//       lastWatched: '2 hours ago',
//       dueDate: 'Dec 15, 2024',
//     },
//     {
//       id: 2,
//       title: 'College Essay Writing Masterclass',
//       progress: 100,
//       thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
//       instructor: 'Prof. Michael Chen',
//       totalVideos: 15,
//       completedVideos: 15,
//       lastWatched: '1 week ago',
//     },
//     {
//       id: 3,
//       title: 'TOEFL Speaking Excellence',
//       progress: 80,
//       thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
//       instructor: 'Robert Taylor',
//       nextLesson: 'Task 3: Campus Situations',
//       totalVideos: 18,
//       completedVideos: 14,
//       lastWatched: '1 day ago',
//       dueDate: 'Dec 10, 2024',
//     },
//     {
//       id: 4,
//       title: 'Interview Skills & Presentation',
//       progress: 40,
//       thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
//       instructor: 'Emma Williams',
//       nextLesson: 'Body Language Fundamentals',
//       totalVideos: 12,
//       completedVideos: 5,
//       lastWatched: '3 days ago',
//       dueDate: 'Dec 20, 2024',
//     },
//   ];

//   // Counseling Sessions
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

//   // Recent Activity
//   const recentActivity = [
//     { id: 1, type: 'assignment', text: 'New assignment: Common App Personal Essay', time: '1 hour ago', icon: FileText, color: 'text-red-600' },
//     { id: 2, type: 'completed', text: 'Completed "Advanced Algebra" lesson', time: '2 hours ago', icon: CheckCircle, color: 'text-green-600' },
//     { id: 3, type: 'achievement', text: 'Earned "7-Day Streak" badge', time: '1 day ago', icon: Award, color: 'text-yellow-600' },
//     { id: 4, type: 'feedback', text: 'Essay feedback received from Prof. Chen', time: '1 day ago', icon: MessageSquare, color: 'text-blue-600' },
//     { id: 5, type: 'score', text: 'SAT Mock Test: 1480/1600', time: '2 days ago', icon: TrendingUp, color: 'text-blue-600' },
//     { id: 6, type: 'reminder', text: 'Counseling session tomorrow at 3 PM', time: '3 days ago', icon: Bell, color: 'text-purple-600' },
//   ];

//   // Upcoming Assignments & Deadlines
//   const upcomingAssignments = [
//     { id: 1, title: 'Common App Personal Essay - First Draft', type: 'Essay', course: 'College Essay Writing', date: 'Dec 10, 2024', daysLeft: 13, priority: 'high', points: 100 },
//     { id: 2, title: 'SAT Math Practice Set 5', type: 'Practice Test', course: 'SAT Math Preparation', date: 'Dec 8, 2024', daysLeft: 11, priority: 'high', points: 50 },
//     { id: 3, title: 'Mock Interview Self-Assessment', type: 'Video + Essay', course: 'Interview Skills', date: 'Dec 12, 2024', daysLeft: 15, priority: 'medium', points: 60 },
//     { id: 4, title: 'University Research Assignment', type: 'Research Paper', course: 'College Application Strategy', date: 'Dec 15, 2024', daysLeft: 18, priority: 'medium', points: 75 },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Sidebar */}
//       <DashboardSidebar 
//         collapsed={sidebarCollapsed} 
//         onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />

//       {/* Main Content Area */}
//       <main className={`flex-1 transition-all ${sidebarCollapsed ? 'ml-20' : 'ml-72'} p-6 sm:p-8`}>
//         {/* Welcome Section with Streak */}
//         <div className="mb-8">
//           <div className="flex items-start justify-between mb-4">
//             <div>
//               <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//                 Welcome back, Sarah!
//               </h1>
//               <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//                 Keep up the great work. You're on track to achieve your goals.
//               </p>
//             </div>
//             {/* Streak Counter */}
//             <div className="flex items-center gap-3 bg-gradient-to-br from-orange-500 to-red-500 text-white px-6 py-4 rounded-2xl shadow-lg">
//               <Flame size={32} className="animate-pulse" />
//               <div>
//                 <p className="text-white" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>7</p>
//                 <p className="text-orange-100" style={{ fontSize: '0.8rem', fontWeight: 500 }}>Day Streak</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards - Enhanced */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
//                 <BookOpen className="text-white" size={24} />
//               </div>
//               <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                 <ArrowUp size={14} />
//                 +2
//               </span>
//             </div>
//             <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Active Courses</p>
//             <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>8</p>
//             <p className="text-gray-400 mt-2" style={{ fontSize: '0.75rem' }}>2 completed this month</p>
//           </div>

//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
//                 <FileText className="text-white" size={24} />
//               </div>
//               <span className="flex items-center gap-1 text-yellow-600" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                 <AlertCircle size={14} />
//                 3
//               </span>
//             </div>
//             <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Pending Assignments</p>
//             <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>6</p>
//             <p className="text-gray-400 mt-2" style={{ fontSize: '0.75rem' }}>3 due this week</p>
//           </div>

//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
//                 <CheckCircle className="text-white" size={24} />
//               </div>
//               <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                 <ArrowUp size={14} />
//                 +12%
//               </span>
//             </div>
//             <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Overall Progress</p>
//             <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>71%</p>
//             <div className="mt-3 bg-gray-100 rounded-full h-2">
//               <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '71%' }} />
//             </div>
//           </div>

//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
//                 <Clock className="text-white" size={24} />
//               </div>
//               <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                 <ArrowUp size={14} />
//                 +5.2h
//               </span>
//             </div>
//             <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Study Hours</p>
//             <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>47.5</p>
//             <p className="text-gray-400 mt-2" style={{ fontSize: '0.75rem' }}>This week: 12.3 hours</p>
//           </div>

//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
//                 <Trophy className="text-white" size={24} />
//               </div>
//               <span className="flex items-center gap-1 text-green-600" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                 <ArrowUp size={14} />
//                 +3
//               </span>
//             </div>
//             <p className="text-gray-500 mb-1" style={{ fontSize: '0.85rem' }}>Achievements</p>
//             <p className="text-gray-900" style={{ fontSize: '2rem', fontWeight: 700 }}>24</p>
//             <p className="text-gray-400 mt-2" style={{ fontSize: '0.75rem' }}>3 earned this week</p>
//           </div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//           {/* Left Column - Continue Learning */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Continue Learning Section */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-[#c4151c]/10 rounded-lg flex items-center justify-center">
//                     <Play className="text-[#c4151c]" size={20} />
//                   </div>
//                   <h2 className="text-gray-900" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
//                     Continue Learning
//                   </h2>
//                 </div>
//                 <button
//                   onClick={() => navigate('/academy/courses')}
//                   className="text-[#c4151c] hover:underline flex items-center gap-1"
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   View All <ChevronRight size={16} />
//                 </button>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-4">
//                 {enrolledCourses.map((course) => (
//                   <div
//                     key={course.id}
//                     onClick={() => navigate(`/academy/courses/${course.id}`)}
//                     className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#c4151c] rounded-xl overflow-hidden transition-all hover:shadow-lg"
//                   >
//                     <div className="relative h-36 overflow-hidden">
//                       <ImageWithFallback
//                         src={course.thumbnail}
//                         alt={course.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                       {course.progress === 100 ? (
//                         <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                           <CheckCircle size={12} />
//                           Completed
//                         </div>
//                       ) : (
//                         <div className="absolute top-3 right-3 bg-[#c4151c] text-white px-3 py-1 rounded-full shadow-lg" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                           {course.progress}%
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                         <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
//                           <Play className="text-[#c4151c]" size={24} />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <h3 className="text-gray-900 mb-2 line-clamp-2 group-hover:text-[#c4151c] transition-colors" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                         {course.title}
//                       </h3>
//                       <p className="text-gray-600 mb-3 flex items-center gap-1" style={{ fontSize: '0.8rem' }}>
//                         <User size={12} />
//                         {course.instructor}
//                       </p>
//                       {course.progress < 100 && course.nextLesson && (
//                         <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
//                           <p className="text-blue-700 flex items-center gap-1" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
//                             <Video size={12} />
//                             Next: {course.nextLesson}
//                           </p>
//                         </div>
//                       )}
//                       <div className="flex items-center justify-between mb-2 text-gray-600" style={{ fontSize: '0.75rem' }}>
//                         <span className="flex items-center gap-1">
//                           <BookMarked size={12} />
//                           {course.completedVideos}/{course.totalVideos} videos
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Clock size={12} />
//                           {course.lastWatched}
//                         </span>
//                       </div>
//                       <div className="bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-gradient-to-r from-[#c4151c] to-[#a01117] h-2 rounded-full transition-all"
//                           style={{ width: `${course.progress}%` }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
//                   <Zap className="text-purple-600" size={20} />
//                 </div>
//                 <h2 className="text-gray-900" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
//                   Recent Activity
//                 </h2>
//               </div>
//               <div className="space-y-3">
//                 {recentActivity.map((activity) => {
//                   const Icon = activity.icon;
//                   return (
//                     <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                       <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-200 flex-shrink-0`}>
//                         <Icon size={16} className={activity.color} />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                           {activity.text}
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

//           {/* Right Column - Upcoming & Quick Actions */}
//           <div className="space-y-8">
//             {/* Upcoming Assignments */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
//                     <FileText className="text-red-600" size={20} />
//                   </div>
//                   <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                     Pending Assignments
//                   </h2>
//                 </div>
//                 <button
//                   onClick={() => navigate('/academy/assignments')}
//                   className="text-[#c4151c] hover:underline"
//                   style={{ fontSize: '0.8rem', fontWeight: 500 }}
//                 >
//                   View All
//                 </button>
//               </div>
//               <div className="space-y-3">
//                 {upcomingAssignments.map((assignment) => (
//                   <div 
//                     key={assignment.id} 
//                     onClick={() => navigate('/academy/assignments')}
//                     className={`p-4 rounded-lg border-l-4 cursor-pointer hover:shadow-lg transition-all ${
//                       assignment.priority === 'high' 
//                         ? 'bg-red-50 border-red-500' 
//                         : 'bg-yellow-50 border-yellow-500'
//                     }`}
//                   >
//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex-1">
//                         <p className="text-gray-900 mb-1 line-clamp-1" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                           {assignment.title}
//                         </p>
//                         <p className="text-gray-600 mb-2" style={{ fontSize: '0.75rem' }}>
//                           {assignment.course} • {assignment.type}
//                         </p>
//                       </div>
//                       <span className={`px-2 py-1 rounded-full text-white ${
//                         assignment.priority === 'high' ? 'bg-red-500' : 'bg-yellow-600'
//                       }`} style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                         {assignment.points} pts
//                       </span>
//                     </div>
//                     <p className="text-gray-600 mb-2 flex items-center gap-1" style={{ fontSize: '0.75rem' }}>
//                       <Calendar size={12} />
//                       Due: {assignment.date}
//                     </p>
//                     <div className="flex items-center gap-2">
//                       <div className="flex-1 bg-white rounded-full h-1.5">
//                         <div 
//                           className={`h-1.5 rounded-full ${
//                             assignment.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
//                           }`} 
//                           style={{ width: `${Math.max(10, 100 - (assignment.daysLeft * 3))}%` }} 
//                         />
//                       </div>
//                       <span className={`text-xs font-semibold ${
//                         assignment.priority === 'high' ? 'text-red-600' : 'text-yellow-700'
//                       }`}>
//                         {assignment.daysLeft} days
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => navigate('/academy/assignments')}
//                 className="w-full mt-4 px-4 py-2 bg-white border border-[#c4151c] text-[#c4151c] rounded-lg hover:bg-[#c4151c] hover:text-white transition-colors"
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Submit Assignment
//               </button>
//             </div>

//             {/* Upcoming Counseling Sessions */}
//             <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
//               <div className="flex items-center justify-between mb-5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                     <CalendarCheck className="text-blue-600" size={20} />
//                   </div>
//                   <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                     Upcoming Sessions
//                   </h2>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 {counselingSessions.map((session) => (
//                   <div key={session.id} className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
//                     <p className="text-gray-900 mb-2" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                       {session.title}
//                     </p>
//                     <p className="text-gray-700 mb-2 flex items-center gap-1" style={{ fontSize: '0.8rem' }}>
//                       <User size={12} />
//                       {session.counselor}
//                     </p>
//                     <p className="text-gray-700 mb-3 flex items-center gap-1" style={{ fontSize: '0.8rem' }}>
//                       <Calendar size={12} />
//                       {session.date} at {session.time}
//                     </p>
//                     <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                       Join Session
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <button 
//                 onClick={() => navigate('/academy/counseling')}
//                 className="w-full mt-4 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors" 
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 View All Sessions
//               </button>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-br from-[#c4151c] to-[#a01117] p-6 rounded-xl shadow-lg text-white">
//               <h2 className="text-white mb-4" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                 Quick Actions
//               </h2>
//               <div className="space-y-2">
//                 <button 
//                   onClick={() => navigate('/academy/assignments')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <FileText size={18} />
//                   View Assignments
//                 </button>
//                 <button 
//                   onClick={() => navigate('/academy/submissions')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Upload size={18} />
//                   Submit Work
//                 </button>
//                 <button 
//                   onClick={() => navigate('/academy/ai-counseling')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Bot size={18} />
//                   AI Counseling
//                 </button>
//                 <button 
//                   onClick={() => navigate('/academy/resources')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <BookMarked size={18} />
//                   Browse Resources
//                 </button>
//                 <button 
//                   onClick={() => navigate('/academy/school-selection')}
//                   className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-left flex items-center gap-2" 
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   <Target size={18} />
//                   Manage School List
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
