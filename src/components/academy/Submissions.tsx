// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, FileText, Trash2, Download, Eye, Edit3, Plus, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function Submissions() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState<'essays' | 'all'>('essays');
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   const submissions = [
//     {
//       id: 1,
//       title: 'Common App Personal Essay - First Draft',
//       type: 'Essay',
//       assignment: 'Common App Personal Essay - First Draft',
//       course: 'College Essay Writing Masterclass',
//       submittedDate: 'Nov 28, 2024',
//       status: 'graded',
//       score: 92,
//       totalPoints: 100,
//       wordCount: 548,
//       feedback: 'Excellent opening hook! Your personal voice comes through clearly. Consider adding more specific examples in the second paragraph.',
//       fileUrl: '/essays/personal-essay-draft1.pdf',
//     },
//     {
//       id: 2,
//       title: 'Why Stanford Supplemental Essay',
//       type: 'Essay',
//       assignment: 'Supplemental Essay - Why Stanford?',
//       course: 'College Essay Writing Masterclass',
//       submittedDate: 'Nov 25, 2024',
//       status: 'submitted',
//       wordCount: 237,
//       fileUrl: '/essays/stanford-why-essay.pdf',
//     },
//     {
//       id: 3,
//       title: 'MIT Maker Portfolio Essay',
//       type: 'Essay',
//       assignment: 'MIT Supplemental Essays',
//       course: 'College Essay Writing Masterclass',
//       submittedDate: 'Nov 22, 2024',
//       status: 'graded',
//       score: 88,
//       totalPoints: 100,
//       wordCount: 245,
//       feedback: 'Strong technical details! Try to show more of your personal growth and reflection.',
//       fileUrl: '/essays/mit-maker-essay.pdf',
//     },
//     {
//       id: 4,
//       title: 'University Research Comparison',
//       type: 'Research Paper',
//       assignment: 'University Research Assignment',
//       course: 'College Application Strategy',
//       submittedDate: 'Nov 28, 2024',
//       status: 'submitted',
//       pages: 8,
//       fileUrl: '/research/university-comparison.pdf',
//     },
//     {
//       id: 5,
//       title: 'Personal Statement Draft 2',
//       type: 'Essay',
//       assignment: 'Common App Personal Essay - Second Draft',
//       course: 'College Essay Writing Masterclass',
//       submittedDate: 'Nov 20, 2024',
//       status: 'graded',
//       score: 85,
//       totalPoints: 100,
//       wordCount: 612,
//       feedback: 'Good improvement from draft 1. Watch your word count - you\'re over the 650 limit.',
//       fileUrl: '/essays/personal-essay-draft2.pdf',
//     },
//   ];

//   const essaySubmissions = submissions.filter(s => s.type === 'Essay');
//   const displayedSubmissions = activeTab === 'essays' ? essaySubmissions : submissions;

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'graded':
//         return { bg: 'bg-green-100', text: 'text-green-700', label: 'Graded', icon: CheckCircle };
//       case 'submitted':
//         return { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Under Review', icon: Clock };
//       case 'draft':
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Draft', icon: Edit3 };
//       default:
//         return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending', icon: AlertCircle };
//     }
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
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//                   My Submissions
//                 </h1>
//                 <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//                   Manage your essays and assignment submissions
//                 </p>
//               </div>
//               <button
//                 onClick={() => navigate('/academy/submissions/new')}
//                 className="px-5 py-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//                 style={{ fontSize: '0.9rem', fontWeight: 600 }}
//               >
//                 <Plus size={20} />
//                 New Submission
//               </button>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                   <FileText className="text-blue-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Total Essays</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{essaySubmissions.length}</p>
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
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                     {submissions.filter(s => s.status === 'graded').length}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
//                   <Clock className="text-yellow-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>Under Review</p>
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                     {submissions.filter(s => s.status === 'submitted').length}
//                   </p>
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
//                   <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                     {submissions.filter(s => s.score).length > 0 
//                       ? Math.round(submissions.filter(s => s.score).reduce((acc, s) => acc + ((s.score || 0) / (s.totalPoints || 100) * 100), 0) / submissions.filter(s => s.score).length)
//                       : 0}%
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tab Navigation */}
//           <div className="flex gap-2 mb-6 border-b border-gray-200">
//             <button
//               onClick={() => setActiveTab('essays')}
//               className={`px-6 py-3 transition-all ${
//                 activeTab === 'essays'
//                   ? 'border-b-2 border-[#c4151c] text-[#c4151c]'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//               style={{ fontSize: '0.95rem', fontWeight: 600 }}
//             >
//               Essays ({essaySubmissions.length})
//             </button>
//             <button
//               onClick={() => setActiveTab('all')}
//               className={`px-6 py-3 transition-all ${
//                 activeTab === 'all'
//                   ? 'border-b-2 border-[#c4151c] text-[#c4151c]'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//               style={{ fontSize: '0.95rem', fontWeight: 600 }}
//             >
//               All Submissions ({submissions.length})
//             </button>
//           </div>

//           {/* Submissions Grid */}
//           <div className="grid gap-4">
//             {displayedSubmissions.map((submission) => {
//               const statusBadge = getStatusBadge(submission.status);
//               const StatusIcon = statusBadge.icon;

//               return (
//                 <div 
//                   key={submission.id}
//                   className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                           {submission.title}
//                         </h3>
//                         <span className={`px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text} flex items-center gap-1`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                           <StatusIcon size={12} />
//                           {statusBadge.label}
//                         </span>
//                         {submission.score !== undefined && (
//                           <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                             {submission.score}/{submission.totalPoints} ({Math.round((submission.score / (submission.totalPoints || 100)) * 100)}%)
//                           </span>
//                         )}
//                       </div>
//                       <p className="text-gray-600 mb-2" style={{ fontSize: '0.9rem' }}>
//                         {submission.course}
//                       </p>
//                       <div className="flex items-center gap-4 text-gray-500" style={{ fontSize: '0.85rem' }}>
//                         <span className="flex items-center gap-1">
//                           <Calendar size={14} />
//                           Submitted: {submission.submittedDate}
//                         </span>
//                         {submission.wordCount && (
//                           <span className="flex items-center gap-1">
//                             <FileText size={14} />
//                             {submission.wordCount} words
//                           </span>
//                         )}
//                         {submission.pages && (
//                           <span className="flex items-center gap-1">
//                             <FileText size={14} />
//                             {submission.pages} pages
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="View">
//                         <Eye size={18} />
//                       </button>
//                       <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Download">
//                         <Download size={18} />
//                       </button>
//                       <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
//                         <Edit3 size={18} />
//                       </button>
//                       <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </div>

//                   {submission.feedback && (
//                     <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                       <p className="text-blue-900 mb-1" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                         Instructor Feedback:
//                       </p>
//                       <p className="text-blue-800" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                         {submission.feedback}
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
