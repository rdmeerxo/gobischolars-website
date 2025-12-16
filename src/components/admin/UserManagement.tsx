// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Filter, UserPlus, Edit, Trash2, Shield, Mail, Phone, Calendar, MoreVertical, Ban, CheckCircle, XCircle } from 'lucide-react';
// import AdminSidebar from './AdminSidebar';

// export default function UserManagement() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterRole, setFilterRole] = useState<'all' | 'student' | 'teacher' | 'admin'>('all');
//   const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'suspended'>('all');

//   const users = [
//     { id: 1, name: 'Sarah Michelle', email: 'sarah.m@email.com', phone: '+976 9999 1234', role: 'student', status: 'active', joinDate: 'Sep 15, 2024', lastActive: '2 hours ago', program: 'Fall Scholars', avatar: 'SM' },
//     { id: 2, name: 'Dr. Michael Chen', email: 'michael.c@gobischolars.com', phone: '+976 9999 5555', role: 'teacher', status: 'active', joinDate: 'Jan 10, 2024', lastActive: '30 min ago', courses: 8, avatar: 'MC' },
//     { id: 3, name: 'Alex Thompson', email: 'alex.t@email.com', phone: '+976 9999 5678', role: 'student', status: 'active', joinDate: 'Oct 1, 2024', lastActive: '1 day ago', program: 'Winter Scholars', avatar: 'AT' },
//     { id: 4, name: 'Admin User', email: 'admin@gobischolars.com', phone: '+976 9999 0000', role: 'admin', status: 'active', joinDate: 'Jan 1, 2024', lastActive: '5 min ago', permissions: 'Full Access', avatar: 'AD' },
//     { id: 5, name: 'James Wilson', email: 'james.w@email.com', phone: '+976 9999 7890', role: 'student', status: 'inactive', joinDate: 'Nov 1, 2024', lastActive: '1 week ago', program: '12 Scholars Support', avatar: 'JW' },
//   ];

//   const filteredUsers = users.filter(user => {
//     const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesRole = filterRole === 'all' || user.role === filterRole;
//     const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
//     return matchesSearch && matchesRole && matchesStatus;
//   });

//   const getRoleBadge = (role: string) => {
//     switch (role) {
//       case 'admin':
//         return { bg: 'bg-red-100', text: 'text-red-700', label: 'Admin', icon: Shield };
//       case 'teacher':
//         return { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Teacher', icon: CheckCircle };
//       case 'student':
//         return { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Student', icon: CheckCircle };
//       default:
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Unknown', icon: XCircle };
//     }
//   };

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'active':
//         return { bg: 'bg-green-100', text: 'text-green-700', label: 'Active' };
//       case 'inactive':
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Inactive' };
//       case 'suspended':
//         return { bg: 'bg-red-100', text: 'text-red-700', label: 'Suspended' };
//       default:
//         return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Unknown' };
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <AdminSidebar 
//         collapsed={sidebarCollapsed} 
//         onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />

//       <main className={`flex-1 transition-all ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
//         <div className="p-6 sm:p-8">
//           {/* Header */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <h1 className="serif text-gray-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//                   User Management
//                 </h1>
//                 <p className="text-gray-600" style={{ fontSize: '1rem' }}>
//                   Manage all users in the system
//                 </p>
//               </div>
//               <button
//                 className="px-5 py-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//                 style={{ fontSize: '0.9rem', fontWeight: 600 }}
//               >
//                 <UserPlus size={20} />
//                 Add New User
//               </button>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Total Users</p>
//               <p className="text-gray-900" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{users.length}</p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Students</p>
//               <p className="text-blue-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {users.filter(u => u.role === 'student').length}
//               </p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Teachers</p>
//               <p className="text-purple-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {users.filter(u => u.role === 'teacher').length}
//               </p>
//             </div>
//             <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
//               <p className="text-gray-500 mb-1" style={{ fontSize: '0.8rem' }}>Admins</p>
//               <p className="text-red-600" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
//                 {users.filter(u => u.role === 'admin').length}
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
//                   placeholder="Search users..."
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 />
//               </div>
//               <div>
//                 <select
//                   value={filterRole}
//                   onChange={(e) => setFilterRole(e.target.value as any)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]"
//                   style={{ fontSize: '0.9rem' }}
//                 >
//                   <option value="all">All Roles</option>
//                   <option value="student">Students</option>
//                   <option value="teacher">Teachers</option>
//                   <option value="admin">Admins</option>
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
//                   <option value="suspended">Suspended</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Users Table */}
//           <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-gray-700" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                       User
//                     </th>
//                     <th className="px-6 py-4 text-left text-gray-700" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                       Contact
//                     </th>
//                     <th className="px-6 py-4 text-left text-gray-700" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                       Role
//                     </th>
//                     <th className="px-6 py-4 text-left text-gray-700" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                       Status
//                     </th>
//                     <th className="px-6 py-4 text-left text-gray-700" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                       Details
//                     </th>
//                     <th className="px-6 py-4 text-left text-gray-700" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredUsers.map((user) => {
//                     const roleBadge = getRoleBadge(user.role);
//                     const statusBadge = getStatusBadge(user.status);
//                     const RoleIcon = roleBadge.icon;

//                     return (
//                       <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-3">
//                             <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
//                               user.role === 'admin' ? 'bg-gradient-to-br from-red-600 to-pink-600' :
//                               user.role === 'teacher' ? 'bg-gradient-to-br from-purple-600 to-blue-600' :
//                               'bg-gradient-to-br from-[#c4151c] to-[#a01117]'
//                             }`}>
//                               <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{user.avatar}</span>
//                             </div>
//                             <div>
//                               <p className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                                 {user.name}
//                               </p>
//                               <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                                 ID: #{user.id}
//                               </p>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="space-y-1">
//                             <p className="text-gray-700 flex items-center gap-1" style={{ fontSize: '0.8rem' }}>
//                               <Mail size={12} />
//                               {user.email}
//                             </p>
//                             <p className="text-gray-600 flex items-center gap-1" style={{ fontSize: '0.75rem' }}>
//                               <Phone size={12} />
//                               {user.phone}
//                             </p>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <span className={`px-3 py-1 rounded-full ${roleBadge.bg} ${roleBadge.text} flex items-center gap-1 w-fit`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                             <RoleIcon size={12} />
//                             {roleBadge.label}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4">
//                           <span className={`px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text}`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                             {statusBadge.label}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="space-y-1 text-gray-600" style={{ fontSize: '0.75rem' }}>
//                             <p className="flex items-center gap-1">
//                               <Calendar size={12} />
//                               Joined: {user.joinDate}
//                             </p>
//                             <p>Last active: {user.lastActive}</p>
//                             {user.program && <p className="text-blue-600">Program: {user.program}</p>}
//                             {user.courses && <p className="text-purple-600">Courses: {user.courses}</p>}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-2">
//                             <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
//                               <Edit size={16} />
//                             </button>
//                             <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors" title="Suspend">
//                               <Ban size={16} />
//                             </button>
//                             <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
//                               <Trash2 size={16} />
//                             </button>
//                             <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="More">
//                               <MoreVertical size={16} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
