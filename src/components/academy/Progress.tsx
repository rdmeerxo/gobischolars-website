// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TrendingUp, Award, BookOpen, Clock, CheckCircle, Target, Calendar, Trophy, Star, BarChart3 } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function Progress() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('month');
//   const [testType, setTestType] = useState<'sat' | 'ielts'>('sat');

//   const overallStats = {
//     totalCourses: 8,
//     completedCourses: 2,
//     inProgressCourses: 4,
//     totalHoursWatched: 47.5,
//     averageProgress: 52,
//     certificatesEarned: 2,
//     currentStreak: 12,
//     longestStreak: 28,
//   };

//   const courseProgress = [
//     {
//       id: 1,
//       title: 'SAT Math Preparation',
//       category: 'Test Prep',
//       progress: 65,
//       videosCompleted: 16,
//       totalVideos: 24,
//       hoursSpent: 12.5,
//       lastAccessed: '2 days ago',
//       grade: 'B+',
//       quizScore: 85,
//     },
//     {
//       id: 2,
//       title: 'College Essay Writing Masterclass',
//       category: 'Application',
//       progress: 100,
//       videosCompleted: 15,
//       totalVideos: 15,
//       hoursSpent: 8.0,
//       lastAccessed: '1 week ago',
//       grade: 'A',
//       quizScore: 95,
//     },
//     {
//       id: 3,
//       title: 'Interview Skills & Presentation',
//       category: 'Skills',
//       progress: 40,
//       videosCompleted: 5,
//       totalVideos: 12,
//       hoursSpent: 4.5,
//       lastAccessed: '3 days ago',
//       grade: 'C+',
//       quizScore: 78,
//     },
//     {
//       id: 4,
//       title: 'Advanced Physics for Olympiad',
//       category: 'Academic',
//       progress: 15,
//       videosCompleted: 5,
//       totalVideos: 32,
//       hoursSpent: 6.5,
//       lastAccessed: '5 days ago',
//       grade: 'B',
//       quizScore: 82,
//     },
//     {
//       id: 5,
//       title: 'TOEFL Speaking Excellence',
//       category: 'Test Prep',
//       progress: 80,
//       videosCompleted: 14,
//       totalVideos: 18,
//       hoursSpent: 9.5,
//       lastAccessed: '1 day ago',
//       grade: 'A-',
//       quizScore: 92,
//     },
//     {
//       id: 6,
//       title: 'Extracurricular Activities Planning',
//       category: 'Skills',
//       progress: 30,
//       videosCompleted: 2,
//       totalVideos: 8,
//       hoursSpent: 2.5,
//       lastAccessed: '4 days ago',
//       grade: 'B-',
//       quizScore: 80,
//     },
//   ];

//   const achievements = [
//     {
//       id: 1,
//       title: 'First Course Completed',
//       description: 'Completed your first course',
//       icon: Trophy,
//       earned: true,
//       date: '2 weeks ago',
//     },
//     {
//       id: 2,
//       title: 'Week Warrior',
//       description: '7 day learning streak',
//       icon: Target,
//       earned: true,
//       date: '5 days ago',
//     },
//     {
//       id: 3,
//       title: 'Perfect Score',
//       description: 'Got 100% on a quiz',
//       icon: Star,
//       earned: true,
//       date: '1 week ago',
//     },
//     {
//       id: 4,
//       title: '10 Hours Watched',
//       description: 'Watched 10 hours of content',
//       icon: Clock,
//       earned: true,
//       date: '3 days ago',
//     },
//     {
//       id: 5,
//       title: 'Month Master',
//       description: '30 day learning streak',
//       icon: Calendar,
//       earned: false,
//       date: null,
//     },
//     {
//       id: 6,
//       title: 'Course Completer',
//       description: 'Complete 5 courses',
//       icon: Award,
//       earned: false,
//       date: null,
//     },
//   ];

//   const weeklyActivity = [
//     { day: 'Mon', hours: 2.5, videos: 4 },
//     { day: 'Tue', hours: 1.5, videos: 3 },
//     { day: 'Wed', hours: 3.0, videos: 5 },
//     { day: 'Thu', hours: 2.0, videos: 3 },
//     { day: 'Fri', hours: 1.0, videos: 2 },
//     { day: 'Sat', hours: 4.0, videos: 7 },
//     { day: 'Sun', hours: 2.5, videos: 4 },
//   ];

//   const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

//   // SAT Mock Test Data
//   const satMockTests = [
//     { 
//       testNumber: 1, 
//       date: 'Sep 15, 2024',
//       totalScore: 1180, 
//       mathScore: 600, 
//       readingWritingScore: 580,
//       percentile: 68
//     },
//     { 
//       testNumber: 2, 
//       date: 'Sep 29, 2024',
//       totalScore: 1240, 
//       mathScore: 650, 
//       readingWritingScore: 590,
//       percentile: 75
//     },
//     { 
//       testNumber: 3, 
//       date: 'Oct 13, 2024',
//       totalScore: 1310, 
//       mathScore: 680, 
//       readingWritingScore: 630,
//       percentile: 82
//     },
//     { 
//       testNumber: 4, 
//       date: 'Oct 27, 2024',
//       totalScore: 1350, 
//       mathScore: 700, 
//       readingWritingScore: 650,
//       percentile: 85
//     },
//     { 
//       testNumber: 5, 
//       date: 'Nov 10, 2024',
//       totalScore: 1420, 
//       mathScore: 740, 
//       readingWritingScore: 680,
//       percentile: 91
//     },
//   ];

//   const bestScore = Math.max(...satMockTests.map(t => t.totalScore));
//   const averageScore = Math.round(satMockTests.reduce((sum, t) => sum + t.totalScore, 0) / satMockTests.length);
//   const scoreImprovement = satMockTests[satMockTests.length - 1].totalScore - satMockTests[0].totalScore;
//   const targetScore = 1500;
//   const gapToTarget = targetScore - satMockTests[satMockTests.length - 1].totalScore;
//   const classAverageScore = 1320; // Average score of the class
//   const schoolAverageScore = 1280; // Average score of the school

//   const maxScore = 1600;
//   const maxSectionScore = 800;

//   // IELTS Mock Test Data
//   const ieltsMockTests = [
//     {
//       testNumber: 1,
//       date: 'Sep 20, 2024',
//       overallBand: 6.0,
//       listening: 6.0,
//       reading: 5.5,
//       writing: 6.0,
//       speaking: 6.5,
//       percentile: 62
//     },
//     {
//       testNumber: 2,
//       date: 'Oct 4, 2024',
//       overallBand: 6.5,
//       listening: 6.5,
//       reading: 6.0,
//       writing: 6.5,
//       speaking: 7.0,
//       percentile: 70
//     },
//     {
//       testNumber: 3,
//       date: 'Oct 18, 2024',
//       overallBand: 7.0,
//       listening: 7.0,
//       reading: 6.5,
//       writing: 7.0,
//       speaking: 7.5,
//       percentile: 78
//     },
//     {
//       testNumber: 4,
//       date: 'Nov 1, 2024',
//       overallBand: 7.5,
//       listening: 7.5,
//       reading: 7.0,
//       writing: 7.5,
//       speaking: 8.0,
//       percentile: 85
//     },
//     {
//       testNumber: 5,
//       date: 'Nov 15, 2024',
//       overallBand: 8.0,
//       listening: 8.0,
//       reading: 7.5,
//       writing: 8.0,
//       speaking: 8.5,
//       percentile: 92
//     },
//   ];

//   const bestBand = Math.max(...ieltsMockTests.map(t => t.overallBand));
//   const averageBand = (ieltsMockTests.reduce((sum, t) => sum + t.overallBand, 0) / ieltsMockTests.length).toFixed(1);
//   const bandImprovement = (ieltsMockTests[ieltsMockTests.length - 1].overallBand - ieltsMockTests[0].overallBand).toFixed(1);
//   const targetBand = 8.5;
//   const gapToBand = (targetBand - ieltsMockTests[ieltsMockTests.length - 1].overallBand).toFixed(1);
//   const classAverageBand = 7.2; // Average band of the class
//   const schoolAverageBand = 6.8; // Average band of the school

//   const maxBand = 9;

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <DashboardSidebar 
//         collapsed={sidebarCollapsed} 
//         onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />

//       {/* Main Content */}
//       <main className={`flex-1 transition-all ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
//         {/* Header */}
//         <section className="bg-gradient-to-br from-[#c4151c] to-[#a01117] py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
//             <div>
//               <h1 className="serif text-white mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600 }}>
//                 My Progress
//               </h1>
//               <p className="text-white/90" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
//                 Track your learning journey and achievements
//               </p>
//             </div>
//             <button
//               onClick={() => navigate('/academy/dashboard')}
//               className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all rounded-lg w-full sm:w-auto"
//               style={{ fontSize: '0.9rem', fontWeight: 500 }}
//             >
//               Back to Dashboard
//             </button>
//           </div>

//           {/* Overall Stats */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <CheckCircle className="text-white" size={22} />
//                 <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Completed</span>
//               </div>
//               <p className="text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                 {overallStats.completedCourses}/{overallStats.totalCourses}
//               </p>
//               <p className="text-white/70" style={{ fontSize: '0.75rem' }}>Courses</p>
//             </div>

//             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <Clock className="text-white" size={22} />
//                 <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Watch Time</span>
//               </div>
//               <p className="text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                 {overallStats.totalHoursWatched}
//               </p>
//               <p className="text-white/70" style={{ fontSize: '0.75rem' }}>Hours</p>
//             </div>

//             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <Target className="text-white" size={22} />
//                 <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Avg Progress</span>
//               </div>
//               <p className="text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                 {overallStats.averageProgress}%
//               </p>
//               <p className="text-white/70" style={{ fontSize: '0.75rem' }}>Overall</p>
//             </div>

//             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-lg">
//               <div className="flex items-center gap-2 mb-2">
//                 <Award className="text-white" size={22} />
//                 <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Certificates</span>
//               </div>
//               <p className="text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                 {overallStats.certificatesEarned}
//               </p>
//               <p className="text-white/70" style={{ fontSize: '0.75rem' }}>Earned</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Column - Weekly Activity & Streak */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Weekly Activity Chart */}
//               <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="serif text-black" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                     Weekly Activity
//                   </h2>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => setTimeframe('week')}
//                       className={`px-3 sm:px-4 py-2 rounded-lg transition-all ${
//                         timeframe === 'week' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700'
//                       }`}
//                       style={{ fontSize: '0.8rem', fontWeight: 500 }}
//                     >
//                       Week
//                     </button>
//                     <button
//                       onClick={() => setTimeframe('month')}
//                       className={`px-3 sm:px-4 py-2 rounded-lg transition-all ${
//                         timeframe === 'month' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700'
//                       }`}
//                       style={{ fontSize: '0.8rem', fontWeight: 500 }}
//                     >
//                       Month
//                     </button>
//                     <button
//                       onClick={() => setTimeframe('all')}
//                       className={`px-3 sm:px-4 py-2 rounded-lg transition-all ${
//                         timeframe === 'all' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700'
//                       }`}
//                       style={{ fontSize: '0.8rem', fontWeight: 500 }}
//                     >
//                       All Time
//                     </button>
//                   </div>
//                 </div>

//                 {/* Bar Chart */}
//                 <div className="flex items-end justify-between gap-2 sm:gap-4 h-48 sm:h-56 mb-4">
//                   {weeklyActivity.map((data, index) => (
//                     <div key={index} className="flex-1 flex flex-col items-center gap-2">
//                       <div className="flex-1 w-full flex flex-col justify-end">
//                         <div
//                           className="w-full bg-gradient-to-t from-[#c4151c] to-[#e84855] rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
//                           style={{ height: `${(data.hours / maxHours) * 100}%` }}
//                         >
//                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                             {data.hours}h
//                           </div>
//                         </div>
//                       </div>
//                       <span className="text-gray-600" style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)', fontWeight: 500 }}>
//                         {data.day}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                   <div className="text-center">
//                     <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Total Hours</p>
//                     <p className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                       {weeklyActivity.reduce((sum, d) => sum + d.hours, 0).toFixed(1)}h
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Videos Watched</p>
//                     <p className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                       {weeklyActivity.reduce((sum, d) => sum + d.videos, 0)}
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Daily Average</p>
//                     <p className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                       {(weeklyActivity.reduce((sum, d) => sum + d.hours, 0) / 7).toFixed(1)}h
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Mock Test Tracker with Tabs */}
//               <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                 {/* Tab Navigation */}
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="serif text-black" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                     Mock Test Progress
//                   </h2>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => setTestType('sat')}
//                       className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                         testType === 'sat' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                       style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                     >
//                       SAT Tests
//                     </button>
//                     <button
//                       onClick={() => setTestType('ielts')}
//                       className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                         testType === 'ielts' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                       style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                     >
//                       IELTS Tests
//                     </button>
//                   </div>
//                 </div>

//                 {/* SAT Content */}
//                 {testType === 'sat' && (
//                   <>
//                     {/* Stats Cards */}
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-4 rounded-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Trophy className="text-green-600" size={18} />
//                       <span className="text-green-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Best Score</span>
//                     </div>
//                     <p className="text-green-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                       {bestScore}
//                     </p>
//                     <p className="text-green-600" style={{ fontSize: '0.7rem' }}>out of 1600</p>
//                   </div>

//                   <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-4 rounded-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <BarChart3 className="text-blue-600" size={18} />
//                       <span className="text-blue-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Your Average</span>
//                     </div>
//                     <p className="text-blue-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                       {averageScore}
//                     </p>
//                     <p className="text-blue-600" style={{ fontSize: '0.7rem' }}>{satMockTests.length} tests taken</p>
//                   </div>

//                   <div className="bg-gradient-to-br from-[#c4151c]/5 to-orange-50 border-2 border-[#c4151c]/20 p-4 rounded-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <TrendingUp className="text-[#c4151c]" size={18} />
//                       <span className="text-[#c4151c]" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Improvement</span>
//                     </div>
//                     <p className="text-[#c4151c]" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                       +{scoreImprovement}
//                     </p>
//                     <p className="text-[#c4151c]/70" style={{ fontSize: '0.7rem' }}>since first test</p>
//                   </div>

//                   <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-4 rounded-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Target className="text-purple-600" size={18} />
//                       <span className="text-purple-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>To Target</span>
//                     </div>
//                     <p className="text-purple-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                       {gapToTarget}
//                     </p>
//                     <p className="text-purple-600" style={{ fontSize: '0.7rem' }}>points needed</p>
//                   </div>
//                 </div>

//                 {/* Class and School Averages */}
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 p-4 rounded-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Award className="text-amber-600" size={18} />
//                       <span className="text-amber-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Class Average</span>
//                     </div>
//                     <p className="text-amber-900" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
//                       {classAverageScore}
//                     </p>
//                     <p className="text-amber-600" style={{ fontSize: '0.7rem' }}>
//                       You're {averageScore > classAverageScore ? '+' : ''}{averageScore - classAverageScore} vs class
//                     </p>
//                   </div>

//                   <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 p-4 rounded-lg">
//                     <div className="flex items-center gap-2 mb-2">
//                       <BookOpen className="text-gray-600" size={18} />
//                       <span className="text-gray-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>School Average</span>
//                     </div>
//                     <p className="text-gray-900" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
//                       {schoolAverageScore}
//                     </p>
//                     <p className="text-gray-600" style={{ fontSize: '0.7rem' }}>
//                       You're {averageScore > schoolAverageScore ? '+' : ''}{averageScore - schoolAverageScore} vs school
//                     </p>
//                   </div>
//                 </div>

//                 {/* Score Progression Chart */}
//                 <div className="mb-6">
//                   <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                     Score Progression
//                   </h3>
//                   <div className="relative">
//                     {/* Y-axis labels */}
//                     <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-gray-500" style={{ fontSize: '0.7rem' }}>
//                       <span>1600</span>
//                       <span>1200</span>
//                       <span>800</span>
//                       <span>400</span>
//                     </div>

//                     {/* Chart area */}
//                     <div className="ml-12 pl-4 border-l-2 border-b-2 border-gray-300" style={{ height: '280px' }}>
//                       {/* Grid lines */}
//                       <div className="relative h-full">
//                         <div className="absolute top-0 left-0 right-0 border-t border-gray-200" />
//                         <div className="absolute top-1/4 left-0 right-0 border-t border-gray-200" />
//                         <div className="absolute top-1/2 left-0 right-0 border-t border-gray-200" />
//                         <div className="absolute top-3/4 left-0 right-0 border-t border-gray-200" />

//                         {/* Line chart */}
//                         <svg className="absolute inset-0 w-full h-full overflow-visible">
//                           {/* Total Score Line */}
//                           <polyline
//                             points={satMockTests.map((test, index) => {
//                               const x = (index / (satMockTests.length - 1)) * 100;
//                               const y = 100 - ((test.totalScore / maxScore) * 100);
//                               return `${x}%,${y}%`;
//                             }).join(' ')}
//                             fill="none"
//                             stroke="#c4151c"
//                             strokeWidth="3"
//                             strokeLinejoin="round"
//                           />

//                           {/* Math Score Line */}
//                           <polyline
//                             points={satMockTests.map((test, index) => {
//                               const x = (index / (satMockTests.length - 1)) * 100;
//                               const y = 100 - ((test.mathScore / maxSectionScore) * 100);
//                               return `${x}%,${y}%`;
//                             }).join(' ')}
//                             fill="none"
//                             stroke="#3b82f6"
//                             strokeWidth="2"
//                             strokeDasharray="5,5"
//                             strokeLinejoin="round"
//                           />

//                           {/* Reading/Writing Score Line */}
//                           <polyline
//                             points={satMockTests.map((test, index) => {
//                               const x = (index / (satMockTests.length - 1)) * 100;
//                               const y = 100 - ((test.readingWritingScore / maxSectionScore) * 100);
//                               return `${x}%,${y}%`;
//                             }).join(' ')}
//                             fill="none"
//                             stroke="#10b981"
//                             strokeWidth="2"
//                             strokeDasharray="5,5"
//                             strokeLinejoin="round"
//                           />

//                           {/* Data points for total score */}
//                           {satMockTests.map((test, index) => {
//                             const x = (index / (satMockTests.length - 1)) * 100;
//                             const y = 100 - ((test.totalScore / maxScore) * 100);
//                             return (
//                               <circle
//                                 key={index}
//                                 cx={`${x}%`}
//                                 cy={`${y}%`}
//                                 r="5"
//                                 fill="#c4151c"
//                                 className="hover:r-7 transition-all cursor-pointer"
//                               >
//                                 <title>{`Test ${test.testNumber}: ${test.totalScore}`}</title>
//                               </circle>
//                             );
//                           })}
//                         </svg>

//                         {/* X-axis labels */}
//                         <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-gray-600" style={{ fontSize: '0.75rem' }}>
//                           {satMockTests.map((test) => (
//                             <span key={test.testNumber} className="text-center" style={{ fontSize: '0.7rem' }}>
//                               Test {test.testNumber}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Legend */}
//                   <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-4 border-t border-gray-200">
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-1 bg-[#c4151c] rounded" />
//                       <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Total Score</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-1 bg-blue-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #3b82f6, #3b82f6 5px, transparent 5px, transparent 10px)' }} />
//                       <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Math (800)</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-1 bg-green-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #10b981, #10b981 5px, transparent 5px, transparent 10px)' }} />
//                       <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Reading & Writing (800)</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Test History Table */}
//                 <div>
//                   <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                     Test History
//                   </h3>
//                   <div className="space-y-2">
//                     {satMockTests.slice().reverse().map((test) => (
//                       <div
//                         key={test.testNumber}
//                         className="p-4 border border-gray-200 rounded-lg hover:border-[#c4151c] transition-all"
//                       >
//                         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                           <div className="flex items-center gap-3">
//                             <div className="w-12 h-12 bg-[#c4151c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                               <span className="text-[#c4151c]" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
//                                 #{test.testNumber}
//                               </span>
//                             </div>
//                             <div>
//                               <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                                 Mock Test {test.testNumber}
//                               </p>
//                               <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                                 {test.date}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="flex items-center gap-3 sm:gap-4">
//                             <div className="text-center">
//                               <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Total</p>
//                               <p className="text-[#c4151c]" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
//                                 {test.totalScore}
//                               </p>
//                             </div>
//                             <div className="w-px h-8 bg-gray-200" />
//                             <div className="text-center">
//                               <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Math</p>
//                               <p className="text-blue-600" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                                 {test.mathScore}
//                               </p>
//                             </div>
//                             <div className="text-center">
//                               <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>R&W</p>
//                               <p className="text-green-600" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                                 {test.readingWritingScore}
//                               </p>
//                             </div>
//                             <div className="w-px h-8 bg-gray-200" />
//                             <div className="text-center">
//                               <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Percentile</p>
//                               <p className="text-gray-900" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                                 {test.percentile}%
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                   </>
//                 )}

//                 {/* IELTS Content */}
//                 {testType === 'ielts' && (
//                   <>
//                     {/* Stats Cards */}
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                       <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-4 rounded-lg">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Trophy className="text-green-600" size={18} />
//                           <span className="text-green-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Best Band</span>
//                         </div>
//                         <p className="text-green-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                           {bestBand}
//                         </p>
//                         <p className="text-green-600" style={{ fontSize: '0.7rem' }}>out of 9.0</p>
//                       </div>

//                       <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-4 rounded-lg">
//                         <div className="flex items-center gap-2 mb-2">
//                           <BarChart3 className="text-blue-600" size={18} />
//                           <span className="text-blue-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Your Average</span>
//                         </div>
//                         <p className="text-blue-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                           {averageBand}
//                         </p>
//                         <p className="text-blue-600" style={{ fontSize: '0.7rem' }}>{ieltsMockTests.length} tests taken</p>
//                       </div>

//                       <div className="bg-gradient-to-br from-[#c4151c]/5 to-orange-50 border-2 border-[#c4151c]/20 p-4 rounded-lg">
//                         <div className="flex items-center gap-2 mb-2">
//                           <TrendingUp className="text-[#c4151c]" size={18} />
//                           <span className="text-[#c4151c]" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Improvement</span>
//                         </div>
//                         <p className="text-[#c4151c]" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                           +{bandImprovement}
//                         </p>
//                         <p className="text-[#c4151c]/70" style={{ fontSize: '0.7rem' }}>since first test</p>
//                       </div>

//                       <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-4 rounded-lg">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Target className="text-purple-600" size={18} />
//                           <span className="text-purple-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>To Target</span>
//                         </div>
//                         <p className="text-purple-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                           {gapToBand}
//                         </p>
//                         <p className="text-purple-600" style={{ fontSize: '0.7rem' }}>bands needed</p>
//                       </div>
//                     </div>

//                     {/* Class and School Averages */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 p-4 rounded-lg">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Award className="text-amber-600" size={18} />
//                           <span className="text-amber-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Class Average</span>
//                         </div>
//                         <p className="text-amber-900" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
//                           {classAverageBand}
//                         </p>
//                         <p className="text-amber-600" style={{ fontSize: '0.7rem' }}>
//                           You're {parseFloat(averageBand) > classAverageBand ? '+' : ''}{(parseFloat(averageBand) - classAverageBand).toFixed(1)} vs class
//                         </p>
//                       </div>

//                       <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 p-4 rounded-lg">
//                         <div className="flex items-center gap-2 mb-2">
//                           <BookOpen className="text-gray-600" size={18} />
//                           <span className="text-gray-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>School Average</span>
//                         </div>
//                         <p className="text-gray-900" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
//                           {schoolAverageBand}
//                         </p>
//                         <p className="text-gray-600" style={{ fontSize: '0.7rem' }}>
//                           You're {parseFloat(averageBand) > schoolAverageBand ? '+' : ''}{(parseFloat(averageBand) - schoolAverageBand).toFixed(1)} vs school
//                         </p>
//                       </div>
//                     </div>

//                     {/* Band Progression Chart */}
//                     <div className="mb-6">
//                       <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                         Band Progression
//                       </h3>
//                       <div className="relative">
//                         {/* Y-axis labels */}
//                         <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-gray-500" style={{ fontSize: '0.7rem' }}>
//                           <span>9.0</span>
//                           <span>6.0</span>
//                           <span>3.0</span>
//                           <span>0.0</span>
//                         </div>

//                         {/* Chart area */}
//                         <div className="ml-12 pl-4 border-l-2 border-b-2 border-gray-300" style={{ height: '280px' }}>
//                           {/* Grid lines */}
//                           <div className="relative h-full">
//                             <div className="absolute top-0 left-0 right-0 border-t border-gray-200" />
//                             <div className="absolute top-1/3 left-0 right-0 border-t border-gray-200" />
//                             <div className="absolute top-2/3 left-0 right-0 border-t border-gray-200" />

//                             {/* Line chart */}
//                             <svg className="absolute inset-0 w-full h-full overflow-visible">
//                               {/* Overall Band Line */}
//                               <polyline
//                                 points={ieltsMockTests.map((test, index) => {
//                                   const x = (index / (ieltsMockTests.length - 1)) * 100;
//                                   const y = 100 - ((test.overallBand / maxBand) * 100);
//                                   return `${x}%,${y}%`;
//                                 }).join(' ')}
//                                 fill="none"
//                                 stroke="#c4151c"
//                                 strokeWidth="3"
//                                 strokeLinejoin="round"
//                               />

//                               {/* Listening Band Line */}
//                               <polyline
//                                 points={ieltsMockTests.map((test, index) => {
//                                   const x = (index / (ieltsMockTests.length - 1)) * 100;
//                                   const y = 100 - ((test.listening / maxBand) * 100);
//                                   return `${x}%,${y}%`;
//                                 }).join(' ')}
//                                 fill="none"
//                                 stroke="#3b82f6"
//                                 strokeWidth="2"
//                                 strokeDasharray="5,5"
//                                 strokeLinejoin="round"
//                               />

//                               {/* Reading Band Line */}
//                               <polyline
//                                 points={ieltsMockTests.map((test, index) => {
//                                   const x = (index / (ieltsMockTests.length - 1)) * 100;
//                                   const y = 100 - ((test.reading / maxBand) * 100);
//                                   return `${x}%,${y}%`;
//                                 }).join(' ')}
//                                 fill="none"
//                                 stroke="#10b981"
//                                 strokeWidth="2"
//                                 strokeDasharray="5,5"
//                                 strokeLinejoin="round"
//                               />

//                               {/* Writing Band Line */}
//                               <polyline
//                                 points={ieltsMockTests.map((test, index) => {
//                                   const x = (index / (ieltsMockTests.length - 1)) * 100;
//                                   const y = 100 - ((test.writing / maxBand) * 100);
//                                   return `${x}%,${y}%`;
//                                 }).join(' ')}
//                                 fill="none"
//                                 stroke="#f59e0b"
//                                 strokeWidth="2"
//                                 strokeDasharray="5,5"
//                                 strokeLinejoin="round"
//                               />

//                               {/* Speaking Band Line */}
//                               <polyline
//                                 points={ieltsMockTests.map((test, index) => {
//                                   const x = (index / (ieltsMockTests.length - 1)) * 100;
//                                   const y = 100 - ((test.speaking / maxBand) * 100);
//                                   return `${x}%,${y}%`;
//                                 }).join(' ')}
//                                 fill="none"
//                                 stroke="#8b5cf6"
//                                 strokeWidth="2"
//                                 strokeDasharray="5,5"
//                                 strokeLinejoin="round"
//                               />

//                               {/* Data points for overall band */}
//                               {ieltsMockTests.map((test, index) => {
//                                 const x = (index / (ieltsMockTests.length - 1)) * 100;
//                                 const y = 100 - ((test.overallBand / maxBand) * 100);
//                                 return (
//                                   <circle
//                                     key={index}
//                                     cx={`${x}%`}
//                                     cy={`${y}%`}
//                                     r="5"
//                                     fill="#c4151c"
//                                     className="hover:r-7 transition-all cursor-pointer"
//                                   >
//                                     <title>{`Test ${test.testNumber}: Band ${test.overallBand}`}</title>
//                                   </circle>
//                                 );
//                               })}
//                             </svg>

//                             {/* X-axis labels */}
//                             <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-gray-600" style={{ fontSize: '0.75rem' }}>
//                               {ieltsMockTests.map((test) => (
//                                 <span key={test.testNumber} className="text-center" style={{ fontSize: '0.7rem' }}>
//                                   Test {test.testNumber}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Legend */}
//                       <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-4 border-t border-gray-200">
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-1 bg-[#c4151c] rounded" />
//                           <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Overall Band</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-1 bg-blue-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #3b82f6, #3b82f6 5px, transparent 5px, transparent 10px)' }} />
//                           <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Listening</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-1 bg-green-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #10b981, #10b981 5px, transparent 5px, transparent 10px)' }} />
//                           <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Reading</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-1 bg-amber-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #f59e0b, #f59e0b 5px, transparent 5px, transparent 10px)' }} />
//                           <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Writing</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-1 bg-violet-500 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #8b5cf6, #8b5cf6 5px, transparent 5px, transparent 10px)' }} />
//                           <span className="text-gray-700" style={{ fontSize: '0.8rem' }}>Speaking</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Test History Table */}
//                     <div>
//                       <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                         Test History
//                       </h3>
//                       <div className="space-y-2">
//                         {ieltsMockTests.slice().reverse().map((test) => (
//                           <div
//                             key={test.testNumber}
//                             className="p-4 border border-gray-200 rounded-lg hover:border-[#c4151c] transition-all"
//                           >
//                             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-12 h-12 bg-[#c4151c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                                   <span className="text-[#c4151c]" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
//                                     #{test.testNumber}
//                                   </span>
//                                 </div>
//                                 <div>
//                                   <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                                     Mock Test {test.testNumber}
//                                   </p>
//                                   <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                                     {test.date}
//                                   </p>
//                                 </div>
//                               </div>

//                               <div className="flex items-center gap-2 sm:gap-3">
//                                 <div className="text-center">
//                                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Overall</p>
//                                   <p className="text-[#c4151c]" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
//                                     {test.overallBand}
//                                   </p>
//                                 </div>
//                                 <div className="w-px h-8 bg-gray-200" />
//                                 <div className="text-center">
//                                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.65rem' }}>L</p>
//                                   <p className="text-blue-600" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                                     {test.listening}
//                                   </p>
//                                 </div>
//                                 <div className="text-center">
//                                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.65rem' }}>R</p>
//                                   <p className="text-green-600" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                                     {test.reading}
//                                   </p>
//                                 </div>
//                                 <div className="text-center">
//                                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.65rem' }}>W</p>
//                                   <p className="text-amber-600" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                                     {test.writing}
//                                   </p>
//                                 </div>
//                                 <div className="text-center">
//                                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.65rem' }}>S</p>
//                                   <p className="text-violet-600" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                                     {test.speaking}
//                                   </p>
//                                 </div>
//                                 <div className="w-px h-8 bg-gray-200" />
//                                 <div className="text-center">
//                                   <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Percentile</p>
//                                   <p className="text-gray-900" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                                     {test.percentile}%
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* Course Progress Details */}
//               <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                 <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                   Course Performance
//                 </h2>

//                 <div className="space-y-4">
//                   {courseProgress.map((course) => (
//                     <div key={course.id} className="p-4 sm:p-5 border border-gray-200 rounded-lg hover:border-[#c4151c] transition-all">
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
//                         <div className="flex-1">
//                           <h3 className="text-black mb-1" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: 600 }}>
//                             {course.title}
//                           </h3>
//                           <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                             {course.category} • Last accessed {course.lastAccessed}
//                           </p>
//                         </div>
//                         <div className="flex items-center gap-4">
//                           <div className="text-center">
//                             <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Grade</p>
//                             <span className={`px-3 py-1 rounded-full ${
//                               course.grade.startsWith('A') ? 'bg-green-100 text-green-700' :
//                               course.grade.startsWith('B') ? 'bg-blue-100 text-blue-700' :
//                               'bg-yellow-100 text-yellow-700'
//                             }`} style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                               {course.grade}
//                             </span>
//                           </div>
//                           <div className="text-center">
//                             <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Quiz Score</p>
//                             <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                               {course.quizScore}%
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="mb-3">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-gray-600" style={{ fontSize: '0.85rem' }}>
//                             Progress: {course.videosCompleted}/{course.totalVideos} videos
//                           </span>
//                           <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                             {course.progress}%
//                           </span>
//                         </div>
//                         <div className="bg-gray-200 rounded-full h-2.5">
//                           <div
//                             className="bg-gradient-to-r from-[#c4151c] to-[#e84855] h-2.5 rounded-full transition-all"
//                             style={{ width: `${course.progress}%` }}
//                           />
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-4 text-gray-600" style={{ fontSize: '0.8rem' }}>
//                         <span className="flex items-center gap-1">
//                           <Clock size={14} />
//                           {course.hoursSpent}h spent
//                         </span>
//                         {course.progress === 100 && (
//                           <span className="flex items-center gap-1 text-green-600">
//                             <CheckCircle size={14} />
//                             Completed
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Streaks & Achievements */}
//             <div className="space-y-8">
//               {/* Learning Streak */}
//               <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 p-6 rounded-lg">
//                 <div className="text-center mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                     <Target className="text-white" size={32} />
//                   </div>
//                   <h3 className="serif text-gray-900 mb-2" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                     Learning Streak
//                   </h3>
//                   <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>
//                     Keep up the great work!
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="bg-white p-4 rounded-lg">
//                     <p className="text-gray-600 mb-2" style={{ fontSize: '0.8rem' }}>Current Streak</p>
//                     <p className="text-orange-600" style={{ fontSize: '2rem', fontWeight: 700 }}>
//                       {overallStats.currentStreak} <span style={{ fontSize: '1rem', fontWeight: 500 }}>days</span>
//                     </p>
//                   </div>

//                   <div className="bg-white p-4 rounded-lg">
//                     <p className="text-gray-600 mb-2" style={{ fontSize: '0.8rem' }}>Longest Streak</p>
//                     <p className="text-gray-900" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
//                       {overallStats.longestStreak} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>days</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Achievements */}
//               <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
//                 <h3 className="serif text-black mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                   Achievements
//                 </h3>

//                 <div className="space-y-3">
//                   {achievements.map((achievement) => {
//                     const Icon = achievement.icon;
//                     return (
//                       <div
//                         key={achievement.id}
//                         className={`p-4 rounded-lg border-2 transition-all ${
//                           achievement.earned
//                             ? 'bg-gradient-to-br from-[#c4151c]/5 to-orange-50 border-[#c4151c]/20'
//                             : 'bg-gray-50 border-gray-200 opacity-60'
//                         }`}
//                       >
//                         <div className="flex items-start gap-3">
//                           <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
//                             achievement.earned ? 'bg-[#c4151c] text-white' : 'bg-gray-300 text-gray-500'
//                           }`}>
//                             <Icon size={20} />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h4 className="text-gray-900 mb-1" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                               {achievement.title}
//                             </h4>
//                             <p className="text-gray-600 mb-1" style={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
//                               {achievement.description}
//                             </p>
//                             {achievement.earned && achievement.date && (
//                               <p className="text-gray-500" style={{ fontSize: '0.7rem' }}>
//                                 Earned {achievement.date}
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </main>
//     </div>
//   );
// }
