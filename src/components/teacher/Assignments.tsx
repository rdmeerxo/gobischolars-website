// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Plus, Search, Filter, Calendar, Clock, FileText, Users, Edit, Trash2, Copy, Eye, AlertCircle, CheckCircle, Upload } from 'lucide-react';
// import TeacherSidebar from './TeacherSidebar';

// export default function Assignments() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [filterCourse, setFilterCourse] = useState<string>('all');
//   const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'past' | 'draft'>('all');

//   const assignments = [
//     {
//       id: 1,
//       title: 'Common App Personal Essay - First Draft',
//       course: 'College Essay Writing Masterclass',
//       program: 'Fall Scholars',
//       type: 'Essay',
//       dueDate: 'Dec 10, 2024',
//       createdDate: 'Nov 15, 2024',
//       points: 100,
//       totalStudents: 45,
//       submitted: 28,
//       graded: 15,
//       pending: 13,
//       status: 'active',
//       description: 'Write your first draft of the Common App personal essay. Choose one of the seven prompts and write 250-650 words.',
//     },
//     {
//       id: 2,
//       title: 'SAT Math Practice Set 5',
//       course: 'SAT Math Preparation',
//       program: 'SAT Bootcamp',
//       type: 'Practice Test',
//       dueDate: 'Dec 8, 2024',
//       createdDate: 'Nov 20, 2024',
//       points: 50,
//       totalStudents: 38,
//       submitted: 30,
//       graded: 25,
//       pending: 5,
//       status: 'active',
//       description: 'Complete all 20 questions from Practice Set 5. Focus on quadratic equations and algebraic expressions.',
//     },
//     {
//       id: 3,
//       title: 'University Research Assignment',
//       course: 'College Application Strategy',
//       program: 'Winter Scholars',
//       type: 'Research Paper',
//       dueDate: 'Dec 15, 2024',
//       createdDate: 'Nov 10, 2024',
//       points: 75,
//       totalStudents: 32,
//       submitted: 18,
//       graded: 10,
//       pending: 8,
//       status: 'active',
//       description: 'Research 5 universities and create a detailed comparison chart.',
//     },
//     {
//       id: 4,
//       title: 'TOEFL Speaking Task 1 Recording',
//       course: 'TOEFL Speaking Excellence',
//       program: 'Test Prep',
//       type: 'Audio Recording',
//       dueDate: 'Nov 25, 2024',
//       createdDate: 'Nov 1, 2024',
//       points: 50,
//       totalStudents: 28,
//       submitted: 28,
//       graded: 28,
//       pending: 0,
//       status: 'past',
//       description: 'Record your response to the independent speaking task.',
//     },
//     {
//       id: 5,
//       title: 'Supplemental Essays - Ivy League',
//       course: 'College Essay Writing Masterclass',
//       program: 'Fall Scholars',
//       type: 'Essay',
//       dueDate: 'Dec 20, 2024',
//       createdDate: 'Nov 25, 2024',
//       points: 100,
//       totalStudents: 45,
//       submitted: 0,
//       graded: 0,
//       pending: 0,
//       status: 'draft',
//       description: 'Draft supplemental essays for your target Ivy League schools.',
//     },
//   ];

//   const filteredAssignments = assignments.filter(assignment => {
//     const matchesCourse = filterCourse === 'all' || assignment.course === filterCourse;
//     const matchesStatus = filterStatus === 'all' || assignment.status === filterStatus;
//     return matchesCourse && matchesStatus;
//   });

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'active':
//         return { bg: 'bg-green-100', text: 'text-green-700', label: 'Active', icon: CheckCircle };
//       case 'past':
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Past', icon: Clock };
//       case 'draft':
//         return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Draft', icon: AlertCircle };
//       default:
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Unknown', icon: AlertCircle };
//     }
//   };

//   const courses = [...new Set(assignments.map(a => a.course))];

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
//                   Assignments
//                 </h1>
//                 <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//                   Create and manage course assignments
//                 </p>
//               </div>
//               <button
//                 onClick={() => navigate('/teacher/assignments/create')}
//                 className="px-5 py-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//                 style={{ fontSize: '0.9rem', fontWeight: 600 }}
//               >
//                 <Plus size={20} />
//                 Create Assignment
//               </button>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Total Assignments</p>
//               <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{assignments.length}</p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Active</p>
//               <p className="text-green-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {assignments.filter(a => a.status === 'active').length}
//               </p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Pending Review</p>
//               <p className="text-orange-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {assignments.reduce((acc, a) => acc + a.pending, 0)}
//               </p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Submissions Today</p>
//               <p className="text-blue-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>12</p>
//             </div>
//           </div>

//           {/* Filters */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
//             <div className="grid md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Filter by Course
//                 </label>
//                 <select
//                   value={filterCourse}
//                   onChange={(e) => setFilterCourse(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="all">All Courses</option>
//                   {courses.map(course => (
//                     <option key={course} value={course}>{course}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                   Filter by Status
//                 </label>
//                 <select
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value as any)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="all">All Status</option>
//                   <option value="active">Active</option>
//                   <option value="past">Past</option>
//                   <option value="draft">Draft</option>
//                 </select>
//               </div>
//               <div className="flex items-end">
//                 <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   <Filter size={18} />
//                   More Filters
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Assignments List */}
//           <div className="space-y-4">
//             {filteredAssignments.map((assignment) => {
//               const statusBadge = getStatusBadge(assignment.status);
//               const StatusIcon = statusBadge.icon;
//               const submissionRate = (assignment.submitted / assignment.totalStudents) * 100;

//               return (
//                 <div 
//                   key={assignment.id}
//                   className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
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
//                         <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                           {assignment.type}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-2" style={{ fontSize: '0.9rem' }}>
//                         {assignment.course} • {assignment.program}
//                       </p>
//                       <p className="text-gray-700 mb-3" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                         {assignment.description}
//                       </p>
//                       <div className="flex items-center gap-4 text-gray-600" style={{ fontSize: '0.8rem' }}>
//                         <span className="flex items-center gap-1">
//                           <Calendar size={14} />
//                           Due: {assignment.dueDate}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Users size={14} />
//                           {assignment.totalStudents} students
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <FileText size={14} />
//                           {assignment.points} points
//                         </span>
//                         <span>Created: {assignment.createdDate}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button 
//                         onClick={() => navigate(`/teacher/assignments/${assignment.id}`)}
//                         className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" 
//                         title="View"
//                       >
//                         <Eye size={18} />
//                       </button>
//                       <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
//                         <Edit size={18} />
//                       </button>
//                       <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Duplicate">
//                         <Copy size={18} />
//                       </button>
//                       <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Submission Stats */}
//                   <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
//                     <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                       <div className="flex items-center justify-center gap-1 mb-1">
//                         <Upload className="text-blue-600" size={16} />
//                         <p className="text-blue-900" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{assignment.submitted}</p>
//                       </div>
//                       <p className="text-blue-700" style={{ fontSize: '0.75rem' }}>Submitted</p>
//                     </div>
//                     <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
//                       <div className="flex items-center justify-center gap-1 mb-1">
//                         <CheckCircle className="text-green-600" size={16} />
//                         <p className="text-green-900" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{assignment.graded}</p>
//                       </div>
//                       <p className="text-green-700" style={{ fontSize: '0.75rem' }}>Graded</p>
//                     </div>
//                     <div className="text-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
//                       <div className="flex items-center justify-center gap-1 mb-1">
//                         <Clock className="text-orange-600" size={16} />
//                         <p className="text-orange-900" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{assignment.pending}</p>
//                       </div>
//                       <p className="text-orange-700" style={{ fontSize: '0.75rem' }}>Pending Review</p>
//                     </div>
//                     <div className="text-center p-3 bg-purple-50 border border-purple-200 rounded-lg">
//                       <div className="flex items-center justify-center gap-1 mb-1">
//                         <FileText className="text-purple-600" size={16} />
//                         <p className="text-purple-900" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{Math.round(submissionRate)}%</p>
//                       </div>
//                       <p className="text-purple-700" style={{ fontSize: '0.75rem' }}>Submission Rate</p>
//                     </div>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="mt-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-gray-700" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                         Overall Progress
//                       </span>
//                       <span className="text-gray-900" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                         {assignment.submitted}/{assignment.totalStudents} submitted
//                       </span>
//                     </div>
//                     <div className="bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-[#c4151c] to-orange-600 h-2 rounded-full transition-all"
//                         style={{ width: `${submissionRate}%` }}
//                       />
//                     </div>
//                   </div>

//                   {/* Action Button */}
//                   {assignment.pending > 0 && (
//                     <div className="mt-4">
//                       <button
//                         onClick={() => navigate(`/teacher/submissions?assignment=${assignment.id}`)}
//                         className="w-full px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors"
//                         style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                       >
//                         Review {assignment.pending} Pending Submission{assignment.pending > 1 ? 's' : ''}
//                       </button>
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
