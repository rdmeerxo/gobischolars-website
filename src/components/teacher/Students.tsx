// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Filter, Eye, Mail, Phone, MapPin, TrendingUp, Award, Clock, Download, MessageSquare, ChevronRight, BookOpen, FileText, CheckCircle, AlertCircle } from 'lucide-react';
// import TeacherSidebar from './TeacherSidebar';

// export default function Students() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterProgram, setFilterProgram] = useState<'all' | 'Fall Scholars' | 'Winter Scholars' | 'SAT Bootcamp' | '12 Scholars'>('all');
//   const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');

//   const students = [
//     {
//       id: 1,
//       name: 'Sarah Michelle',
//       email: 'sarah.m@email.com',
//       phone: '+976 9999 1234',
//       location: 'Ulaanbaatar, Mongolia',
//       program: 'Fall Scholars',
//       status: 'active',
//       progress: 85,
//       gpa: 3.8,
//       satScore: 1450,
//       coursesEnrolled: 6,
//       assignmentsCompleted: 24,
//       assignmentsPending: 3,
//       avgGrade: 92,
//       lastActive: '2 hours ago',
//       applicationStatus: 'In Progress',
//       targetSchools: ['Stanford', 'MIT', 'Harvard'],
//       essaysSubmitted: 8,
//       essaysPending: 2,
//       joinDate: 'Sep 15, 2024',
//       avatar: 'SM',
//     },
//     {
//       id: 2,
//       name: 'Alex Thompson',
//       email: 'alex.t@email.com',
//       phone: '+976 9999 5678',
//       location: 'Ulaanbaatar, Mongolia',
//       program: 'Winter Scholars',
//       status: 'active',
//       progress: 78,
//       gpa: 3.6,
//       satScore: 1380,
//       coursesEnrolled: 5,
//       assignmentsCompleted: 18,
//       assignmentsPending: 4,
//       avgGrade: 87,
//       lastActive: '1 day ago',
//       applicationStatus: 'Complete',
//       targetSchools: ['UC Berkeley', 'UCLA', 'USC'],
//       essaysSubmitted: 10,
//       essaysPending: 0,
//       joinDate: 'Oct 1, 2024',
//       avatar: 'AT',
//     },
//     {
//       id: 3,
//       name: 'Michael Rodriguez',
//       email: 'michael.r@email.com',
//       phone: '+976 9999 9012',
//       location: 'Darkhan, Mongolia',
//       program: 'SAT Bootcamp',
//       status: 'active',
//       progress: 92,
//       gpa: 3.9,
//       satScore: 1520,
//       coursesEnrolled: 4,
//       assignmentsCompleted: 32,
//       assignmentsPending: 2,
//       avgGrade: 95,
//       lastActive: '30 min ago',
//       applicationStatus: 'In Progress',
//       targetSchools: ['Yale', 'Princeton', 'Columbia'],
//       essaysSubmitted: 12,
//       essaysPending: 3,
//       joinDate: 'Aug 20, 2024',
//       avatar: 'MR',
//     },
//     {
//       id: 4,
//       name: 'Emily Chen',
//       email: 'emily.c@email.com',
//       phone: '+976 9999 3456',
//       location: 'Erdenet, Mongolia',
//       program: 'Fall Scholars',
//       status: 'active',
//       progress: 70,
//       gpa: 3.5,
//       satScore: 1320,
//       coursesEnrolled: 6,
//       assignmentsCompleted: 15,
//       assignmentsPending: 5,
//       avgGrade: 82,
//       lastActive: '3 days ago',
//       applicationStatus: 'Not Started',
//       targetSchools: ['NYU', 'Boston University', 'Northeastern'],
//       essaysSubmitted: 3,
//       essaysPending: 5,
//       joinDate: 'Sep 10, 2024',
//       avatar: 'EC',
//     },
//     {
//       id: 5,
//       name: 'James Wilson',
//       email: 'james.w@email.com',
//       phone: '+976 9999 7890',
//       location: 'Ulaanbaatar, Mongolia',
//       program: '12 Scholars Support',
//       status: 'inactive',
//       progress: 45,
//       gpa: 3.2,
//       satScore: 1250,
//       coursesEnrolled: 3,
//       assignmentsCompleted: 8,
//       assignmentsPending: 7,
//       avgGrade: 75,
//       lastActive: '1 week ago',
//       applicationStatus: 'Not Started',
//       targetSchools: ['University of Washington', 'Penn State', 'Purdue'],
//       essaysSubmitted: 1,
//       essaysPending: 4,
//       joinDate: 'Nov 1, 2024',
//       avatar: 'JW',
//     },
//   ];

//   const filteredStudents = students.filter(student => {
//     const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          student.email.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesProgram = filterProgram === 'all' || student.program === filterProgram;
//     const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
//     return matchesSearch && matchesProgram && matchesStatus;
//   });

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'active':
//         return { bg: 'bg-green-100', text: 'text-green-700', label: 'Active' };
//       case 'inactive':
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Inactive' };
//       case 'pending':
//         return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending' };
//       default:
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Unknown' };
//     }
//   };

//   const getApplicationStatusBadge = (status: string) => {
//     switch (status) {
//       case 'Complete':
//         return { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle };
//       case 'In Progress':
//         return { bg: 'bg-blue-100', text: 'text-blue-700', icon: Clock };
//       case 'Not Started':
//         return { bg: 'bg-gray-100', text: 'text-gray-700', icon: AlertCircle };
//       default:
//         return { bg: 'bg-gray-100', text: 'text-gray-700', icon: AlertCircle };
//     }
//   };

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
//               Students
//             </h1>
//             <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//               View and manage student profiles and applications
//             </p>
//           </div>

//           {/* Stats Overview */}
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Total Students</p>
//               <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{students.length}</p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Active</p>
//               <p className="text-green-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {students.filter(s => s.status === 'active').length}
//               </p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Avg Progress</p>
//               <p className="text-blue-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%
//               </p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Avg Grade</p>
//               <p className="text-purple-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {Math.round(students.reduce((acc, s) => acc + s.avgGrade, 0) / students.length)}%
//               </p>
//             </div>
//           </div>

//           {/* Search and Filters */}
//           <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
//             <div className="grid md:grid-cols-4 gap-4">
//               <div className="md:col-span-2 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search by name or email..."
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 />
//               </div>
//               <div>
//                 <select
//                   value={filterProgram}
//                   onChange={(e) => setFilterProgram(e.target.value as any)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="all">All Programs</option>
//                   <option value="Fall Scholars">Fall Scholars</option>
//                   <option value="Winter Scholars">Winter Scholars</option>
//                   <option value="SAT Bootcamp">SAT Bootcamp</option>
//                   <option value="12 Scholars">12 Scholars Support</option>
//                 </select>
//               </div>
//               <div>
//                 <select
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value as any)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="all">All Status</option>
//                   <option value="active">Active</option>
//                   <option value="inactive">Inactive</option>
//                   <option value="pending">Pending</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Students List */}
//           <div className="space-y-4">
//             {filteredStudents.map((student) => {
//               const statusBadge = getStatusBadge(student.status);
//               const appStatusBadge = getApplicationStatusBadge(student.applicationStatus);
//               const AppStatusIcon = appStatusBadge.icon;

//               return (
//                 <div 
//                   key={student.id}
//                   className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
//                   onClick={() => navigate(`/teacher/students/${student.id}`)}
//                 >
//                   <div className="flex items-start gap-4">
//                     {/* Avatar */}
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-full flex items-center justify-center text-white flex-shrink-0">
//                       <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{student.avatar}</span>
//                     </div>

//                     {/* Main Info */}
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <div className="flex items-center gap-3 mb-2">
//                             <h3 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                               {student.name}
//                             </h3>
//                             <span className={`px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text}`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                               {statusBadge.label}
//                             </span>
//                             <span className={`px-3 py-1 rounded-full ${appStatusBadge.bg} ${appStatusBadge.text} flex items-center gap-1`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                               <AppStatusIcon size={12} />
//                               Application: {student.applicationStatus}
//                             </span>
//                           </div>
//                           <div className="flex items-center gap-4 text-gray-600 mb-2" style={{ fontSize: '0.85rem' }}>
//                             <span className="flex items-center gap-1">
//                               <Mail size={14} />
//                               {student.email}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <Phone size={14} />
//                               {student.phone}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <MapPin size={14} />
//                               {student.location}
//                             </span>
//                           </div>
//                           <div className="flex items-center gap-4 text-gray-600" style={{ fontSize: '0.8rem' }}>
//                             <span className="flex items-center gap-1">
//                               <BookOpen size={12} />
//                               {student.program}
//                             </span>
//                             <span>Joined: {student.joinDate}</span>
//                             <span>Last active: {student.lastActive}</span>
//                           </div>
//                         </div>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/teacher/students/${student.id}`);
//                           }}
//                           className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors flex items-center gap-2"
//                           style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                         >
//                           View Profile
//                           <ChevronRight size={16} />
//                         </button>
//                       </div>

//                       {/* Stats Grid */}
//                       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-4">
//                         <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                           <p className="text-blue-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.progress}%</p>
//                           <p className="text-blue-700" style={{ fontSize: '0.7rem' }}>Progress</p>
//                         </div>
//                         <div className="text-center p-3 bg-purple-50 border border-purple-200 rounded-lg">
//                           <p className="text-purple-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.gpa}</p>
//                           <p className="text-purple-700" style={{ fontSize: '0.7rem' }}>GPA</p>
//                         </div>
//                         <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
//                           <p className="text-green-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.satScore}</p>
//                           <p className="text-green-700" style={{ fontSize: '0.7rem' }}>SAT Score</p>
//                         </div>
//                         <div className="text-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
//                           <p className="text-orange-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.avgGrade}%</p>
//                           <p className="text-orange-700" style={{ fontSize: '0.7rem' }}>Avg Grade</p>
//                         </div>
//                         <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
//                           <p className="text-gray-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.coursesEnrolled}</p>
//                           <p className="text-gray-700" style={{ fontSize: '0.7rem' }}>Courses</p>
//                         </div>
//                         <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
//                           <p className="text-green-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.assignmentsCompleted}</p>
//                           <p className="text-green-700" style={{ fontSize: '0.7rem' }}>Completed</p>
//                         </div>
//                         <div className="text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                           <p className="text-yellow-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.assignmentsPending}</p>
//                           <p className="text-yellow-700" style={{ fontSize: '0.7rem' }}>Pending</p>
//                         </div>
//                         <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                           <p className="text-blue-900 mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{student.essaysSubmitted}/{student.essaysSubmitted + student.essaysPending}</p>
//                           <p className="text-blue-700" style={{ fontSize: '0.7rem' }}>Essays</p>
//                         </div>
//                       </div>

//                       {/* Target Schools */}
//                       <div className="border-t border-gray-200 pt-3">
//                         <p className="text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                           Target Schools:
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                           {student.targetSchools.map((school, idx) => (
//                             <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
//                               {school}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
