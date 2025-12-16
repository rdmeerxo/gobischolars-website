// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Calendar, Clock, AlertCircle, CheckCircle, FileText, Upload, ChevronRight, Filter } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function Assignments() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'submitted' | 'graded'>('all');

//   const assignments = [
//     {
//       id: 1,
//       title: 'Common App Personal Essay - First Draft',
//       course: 'College Essay Writing Masterclass',
//       dueDate: 'Dec 10, 2024',
//       daysLeft: 13,
//       status: 'pending',
//       priority: 'high',
//       points: 100,
//       description: 'Write your first draft of the Common App personal essay. Choose one of the seven prompts and write 250-650 words.',
//       instructor: 'Prof. Michael Chen',
//       submissionType: 'Essay',
//     },
//     {
//       id: 2,
//       title: 'SAT Math Practice Set 5',
//       course: 'SAT Math Preparation',
//       dueDate: 'Dec 8, 2024',
//       daysLeft: 11,
//       status: 'pending',
//       priority: 'high',
//       points: 50,
//       description: 'Complete all 20 questions from Practice Set 5. Focus on quadratic equations and algebraic expressions.',
//       instructor: 'Dr. Sarah Johnson',
//       submissionType: 'Practice Test',
//     },
//     {
//       id: 3,
//       title: 'University Research Assignment',
//       course: 'College Application Strategy',
//       dueDate: 'Dec 15, 2024',
//       daysLeft: 18,
//       status: 'submitted',
//       priority: 'medium',
//       points: 75,
//       description: 'Research 5 universities and create a detailed comparison chart including acceptance rates, majors, campus culture, and financial aid.',
//       instructor: 'Emma Williams',
//       submissionType: 'Research Paper',
//       submittedDate: 'Nov 28, 2024',
//     },
//     {
//       id: 4,
//       title: 'TOEFL Speaking Task 1 Recording',
//       course: 'TOEFL Speaking Excellence',
//       dueDate: 'Dec 5, 2024',
//       daysLeft: 8,
//       status: 'graded',
//       priority: 'low',
//       points: 50,
//       score: 45,
//       description: 'Record your response to the independent speaking task. Aim for 45 seconds of clear, well-structured speech.',
//       instructor: 'Robert Taylor',
//       submissionType: 'Audio Recording',
//       submittedDate: 'Nov 25, 2024',
//       feedback: 'Great improvement in fluency! Work on adding more specific examples to support your points.',
//     },
//     {
//       id: 5,
//       title: 'Mock Interview Self-Assessment',
//       course: 'Interview Skills & Presentation',
//       dueDate: 'Dec 12, 2024',
//       daysLeft: 15,
//       status: 'pending',
//       priority: 'medium',
//       points: 60,
//       description: 'Complete a mock interview recording and submit a 2-page self-assessment analyzing your strengths and areas for improvement.',
//       instructor: 'Emma Williams',
//       submissionType: 'Video + Essay',
//     },
//     {
//       id: 6,
//       title: 'Supplemental Essay - Why Stanford?',
//       course: 'College Essay Writing Masterclass',
//       dueDate: 'Dec 18, 2024',
//       daysLeft: 21,
//       status: 'pending',
//       priority: 'medium',
//       points: 100,
//       description: 'Write a compelling "Why Stanford?" supplemental essay (100-250 words). Focus on specific programs, professors, and opportunities.',
//       instructor: 'Prof. Michael Chen',
//       submissionType: 'Essay',
//     },
//   ];

//   const filteredAssignments = assignments.filter(assignment => {
//     if (filterStatus === 'all') return true;
//     return assignment.status === filterStatus;
//   });

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'pending':
//         return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending', icon: AlertCircle };
//       case 'submitted':
//         return { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Submitted', icon: Upload };
//       case 'graded':
//         return { bg: 'bg-green-100', text: 'text-green-700', label: 'Graded', icon: CheckCircle };
//       default:
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Unknown', icon: FileText };
//     }
//   };

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case 'high':
//         return 'border-red-500';
//       case 'medium':
//         return 'border-yellow-500';
//       case 'low':
//         return 'border-green-500';
//       default:
//         return 'border-gray-300';
//     }
//   };

//   const stats = {
//     pending: assignments.filter(a => a.status === 'pending').length,
//     submitted: assignments.filter(a => a.status === 'submitted').length,
//     graded: assignments.filter(a => a.status === 'graded').length,
//     avgScore: assignments.filter(a => a.score).reduce((acc, a) => acc + (a.score || 0), 0) / assignments.filter(a => a.score).length || 0,
//   };

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
//               Assignments
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               View and submit your course assignments
//             </p>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
//                   <AlertCircle className="text-yellow-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Pending</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.pending}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                   <Upload className="text-blue-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Submitted</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.submitted}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
//                   <CheckCircle className="text-green-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Graded</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.graded}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
//                   <FileText className="text-purple-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Avg Score</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.avgScore.toFixed(0)}%</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex items-center gap-3 mb-6">
//             <Filter size={18} className="text-gray-500" />
//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setFilterStatus('all')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterStatus === 'all' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 All Assignments
//               </button>
//               <button
//                 onClick={() => setFilterStatus('pending')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterStatus === 'pending' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Pending
//               </button>
//               <button
//                 onClick={() => setFilterStatus('submitted')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterStatus === 'submitted' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Submitted
//               </button>
//               <button
//                 onClick={() => setFilterStatus('graded')}
//                 className={`px-4 py-2 rounded-lg transition-all ${
//                   filterStatus === 'graded' ? 'bg-[#c4151c] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-[#c4151c]'
//                 }`}
//                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//               >
//                 Graded
//               </button>
//             </div>
//           </div>

//           {/* Assignments List */}
//           <div className="space-y-4">
//             {filteredAssignments.map((assignment) => {
//               const statusBadge = getStatusBadge(assignment.status);
//               const StatusIcon = statusBadge.icon;

//               return (
//                 <div 
//                   key={assignment.id} 
//                   className={`bg-white border-l-4 ${getPriorityColor(assignment.priority)} border-t border-r border-b border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer`}
//                   onClick={() => navigate(`/academy/assignments/${assignment.id}`)}
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                           {assignment.title}
//                         </h3>
//                         <span className={`px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text} flex items-center gap-1`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                           <StatusIcon size={12} />
//                           {statusBadge.label}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-1" style={{ fontSize: '0.9rem' }}>
//                         {assignment.course} • {assignment.instructor}
//                       </p>
//                       <p className="text-gray-700 mb-3" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                         {assignment.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                     <div className="flex items-center gap-6 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                       <span className="flex items-center gap-1">
//                         <Calendar size={16} />
//                         Due: {assignment.dueDate}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock size={16} />
//                         {assignment.daysLeft} days left
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FileText size={16} />
//                         {assignment.submissionType}
//                       </span>
//                       <span className="font-semibold">
//                         {assignment.points} points
//                       </span>
//                     </div>

//                     {assignment.status === 'pending' && (
//                       <button 
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           navigate(`/academy/submissions/new?assignment=${assignment.id}`);
//                         }}
//                         className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors flex items-center gap-2" 
//                         style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                       >
//                         Submit Assignment <ChevronRight size={16} />
//                       </button>
//                     )}

//                     {assignment.status === 'submitted' && (
//                       <span className="text-blue-600" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                         Submitted on {assignment.submittedDate}
//                       </span>
//                     )}

//                     {assignment.status === 'graded' && assignment.score !== undefined && (
//                       <div className="text-right">
//                         <p className="text-green-600 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
//                           {assignment.score}/{assignment.points}
//                         </p>
//                         <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                           {((assignment.score / assignment.points) * 100).toFixed(0)}%
//                         </p>
//                       </div>
//                     )}
//                   </div>

//                   {assignment.feedback && (
//                     <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                       <p className="text-blue-900" style={{ fontSize: '0.85rem' }}>
//                         <span className="font-semibold">Feedback:</span> {assignment.feedback}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
