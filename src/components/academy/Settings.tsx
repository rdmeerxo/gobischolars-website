// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { User, Mail, Phone, MapPin, Calendar, Globe, Bell, Lock, CreditCard, Award, Save, Edit2, Camera, Shield, Settings as SettingsIcon } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function Settings() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'notifications' | 'privacy'>('profile');
//   const [isEditing, setIsEditing] = useState(false);

//   const [profileData, setProfileData] = useState({
//     fullName: 'Sarah Michelle',
//     email: 'sarah.michelle@email.com',
//     phone: '+976 9912 3456',
//     dateOfBirth: '2006-03-15',
//     grade: '12th Grade',
//     school: 'International School of Ulaanbaatar',
//     city: 'Ulaanbaatar',
//     country: 'Mongolia',
//     bio: 'Aspiring computer science student passionate about AI and machine learning. Preparing for admission to top US universities.',
//     interestedFields: ['Computer Science', 'Mathematics', 'Physics'],
//     targetUniversities: ['MIT', 'Stanford', 'UC Berkeley', 'Carnegie Mellon'],
//   });

//   const [notifications, setNotifications] = useState({
//     courseUpdates: true,
//     deadlineReminders: true,
//     weeklyProgress: true,
//     newCourses: false,
//     achievements: true,
//     emailDigest: true,
//     smsAlerts: false,
//   });

//   const enrolledProgram = {
//     name: 'Fall Scholars Program',
//     startDate: 'September 2024',
//     endDate: 'December 2024',
//     status: 'Active',
//     paymentStatus: 'Paid',
//   };

//   const tabs = [
//     { id: 'profile', label: 'Profile', icon: User },
//     { id: 'account', label: 'Account', icon: SettingsIcon },
//     { id: 'notifications', label: 'Notifications', icon: Bell },
//     { id: 'privacy', label: 'Privacy', icon: Shield },
//   ];

//   const handleSave = () => {
//     setIsEditing(false);
//     // Here you would normally save to a backend
//     alert('Profile updated successfully!');
//   };

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
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <div>
//               <h1 className="serif text-white mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600 }}>
//                 Settings
//               </h1>
//               <p className="text-white/90" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
//                 Manage your account and preferences
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
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-4 gap-8">
//             {/* Sidebar Tabs */}
//             <div className="lg:col-span-1">
//               <div className="bg-white border-2 border-gray-200 rounded-lg p-2 sticky top-8">
//                 {tabs.map((tab) => {
//                   const Icon = tab.icon;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => setActiveTab(tab.id as any)}
//                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 ${
//                         activeTab === tab.id
//                           ? 'bg-[#c4151c] text-white'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                       style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                     >
//                       <Icon size={20} />
//                       <span>{tab.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Content Area */}
//             <div className="lg:col-span-3">
//               {/* Profile Tab */}
//               {activeTab === 'profile' && (
//                 <div className="space-y-6">
//                   {/* Profile Picture */}
//                   <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                     <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                       Profile Picture
//                     </h2>
//                     <div className="flex flex-col sm:flex-row items-center gap-6">
//                       <div className="relative">
//                         <div className="w-24 h-24 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-full flex items-center justify-center">
//                           <User size={48} className="text-white" />
//                         </div>
//                         <button className="absolute bottom-0 right-0 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
//                           <Camera size={16} className="text-gray-600" />
//                         </button>
//                       </div>
//                       <div className="text-center sm:text-left">
//                         <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                           {profileData.fullName}
//                         </h3>
//                         <p className="text-gray-600 mb-3" style={{ fontSize: '0.9rem' }}>
//                           {enrolledProgram.name}
//                         </p>
//                         <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Change Photo
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Personal Information */}
//                   <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                     <div className="flex items-center justify-between mb-6">
//                       <h2 className="serif text-black" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                         Personal Information
//                       </h2>
//                       {!isEditing ? (
//                         <button
//                           onClick={() => setIsEditing(true)}
//                           className="flex items-center gap-2 px-4 py-2 bg-[#c4151c] text-white hover:bg-[#a01117] rounded-lg transition-colors"
//                           style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                         >
//                           <Edit2 size={16} />
//                           Edit
//                         </button>
//                       ) : (
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => setIsEditing(false)}
//                             className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
//                             style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                           >
//                             Cancel
//                           </button>
//                           <button
//                             onClick={handleSave}
//                             className="flex items-center gap-2 px-4 py-2 bg-[#c4151c] text-white hover:bg-[#a01117] rounded-lg transition-colors"
//                             style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                           >
//                             <Save size={16} />
//                             Save
//                           </button>
//                         </div>
//                       )}
//                     </div>

//                     <div className="grid sm:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Full Name
//                         </label>
//                         <div className="relative">
//                           <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input
//                             type="text"
//                             value={profileData.fullName}
//                             onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
//                             disabled={!isEditing}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Email Address
//                         </label>
//                         <div className="relative">
//                           <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input
//                             type="email"
//                             value={profileData.email}
//                             onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
//                             disabled={!isEditing}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Phone Number
//                         </label>
//                         <div className="relative">
//                           <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input
//                             type="tel"
//                             value={profileData.phone}
//                             onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
//                             disabled={!isEditing}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Date of Birth
//                         </label>
//                         <div className="relative">
//                           <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input
//                             type="date"
//                             value={profileData.dateOfBirth}
//                             onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
//                             disabled={!isEditing}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Current Grade
//                         </label>
//                         <input
//                           type="text"
//                           value={profileData.grade}
//                           onChange={(e) => setProfileData({ ...profileData, grade: e.target.value })}
//                           disabled={!isEditing}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                           style={{ fontSize: '0.9rem' }}
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           School
//                         </label>
//                         <input
//                           type="text"
//                           value={profileData.school}
//                           onChange={(e) => setProfileData({ ...profileData, school: e.target.value })}
//                           disabled={!isEditing}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                           style={{ fontSize: '0.9rem' }}
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           City
//                         </label>
//                         <div className="relative">
//                           <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input
//                             type="text"
//                             value={profileData.city}
//                             onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
//                             disabled={!isEditing}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Country
//                         </label>
//                         <div className="relative">
//                           <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input
//                             type="text"
//                             value={profileData.country}
//                             onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
//                             disabled={!isEditing}
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600"
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6">
//                       <label className="block text-gray-700 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         Bio
//                       </label>
//                       <textarea
//                         value={profileData.bio}
//                         onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
//                         disabled={!isEditing}
//                         rows={4}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] disabled:bg-gray-50 disabled:text-gray-600 resize-none"
//                         style={{ fontSize: '0.9rem' }}
//                       />
//                     </div>
//                   </div>

//                   {/* Academic Interests */}
//                   <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                     <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                       Academic Interests
//                     </h2>

//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-gray-700 mb-3" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Fields of Interest
//                         </label>
//                         <div className="flex flex-wrap gap-2">
//                           {profileData.interestedFields.map((field, index) => (
//                             <span
//                               key={index}
//                               className="px-4 py-2 bg-[#c4151c]/10 text-[#c4151c] border border-[#c4151c]/20 rounded-full"
//                               style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                             >
//                               {field}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-3" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Target Universities
//                         </label>
//                         <div className="flex flex-wrap gap-2">
//                           {profileData.targetUniversities.map((uni, index) => (
//                             <span
//                               key={index}
//                               className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full"
//                               style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                             >
//                               {uni}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Account Tab */}
//               {activeTab === 'account' && (
//                 <div className="space-y-6">
//                   {/* Enrolled Program */}
//                   <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                     <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                       Enrolled Program
//                     </h2>

//                     <div className="bg-gradient-to-br from-[#c4151c]/5 to-orange-50 border-2 border-[#c4151c]/20 p-6 rounded-lg">
//                       <div className="flex items-start justify-between mb-4">
//                         <div>
//                           <h3 className="text-black mb-2" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                             {enrolledProgram.name}
//                           </h3>
//                           <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                             {enrolledProgram.startDate} - {enrolledProgram.endDate}
//                           </p>
//                         </div>
//                         <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                           {enrolledProgram.status}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
//                         <Award className="text-[#c4151c]" size={20} />
//                         <span className="text-gray-700" style={{ fontSize: '0.9rem' }}>
//                           Payment Status: <span className="font-semibold text-green-600">{enrolledProgram.paymentStatus}</span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Security */}
//                   <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                     <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                       Security
//                     </h2>

//                     <div className="space-y-4">
//                       <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#c4151c] transition-all">
//                         <div className="flex items-center gap-3">
//                           <Lock className="text-gray-600" size={20} />
//                           <div className="text-left">
//                             <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                               Change Password
//                             </p>
//                             <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                               Last changed 3 months ago
//                             </p>
//                           </div>
//                         </div>
//                         <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Update →
//                         </span>
//                       </button>

//                       <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#c4151c] transition-all">
//                         <div className="flex items-center gap-3">
//                           <Shield className="text-gray-600" size={20} />
//                           <div className="text-left">
//                             <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                               Two-Factor Authentication
//                             </p>
//                             <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                               Not enabled
//                             </p>
//                           </div>
//                         </div>
//                         <span className="text-[#c4151c]" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                           Enable →
//                         </span>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Danger Zone */}
//                   <div className="bg-red-50 border-2 border-red-200 p-6 sm:p-8 rounded-lg">
//                     <h2 className="serif text-red-900 mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                       Danger Zone
//                     </h2>
//                     <p className="text-red-700 mb-4" style={{ fontSize: '0.9rem' }}>
//                       Once you delete your account, there is no going back. Please be certain.
//                     </p>
//                     <button className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                       Delete Account
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Notifications Tab */}
//               {activeTab === 'notifications' && (
//                 <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                   <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                     Notification Preferences
//                   </h2>

//                   <div className="space-y-4">
//                     {Object.entries(notifications).map(([key, value]) => (
//                       <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                           </p>
//                           <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                             {key === 'courseUpdates' && 'Get notified about new videos and course materials'}
//                             {key === 'deadlineReminders' && 'Receive reminders for upcoming deadlines'}
//                             {key === 'weeklyProgress' && 'Weekly summary of your learning progress'}
//                             {key === 'newCourses' && 'Notifications about new courses added'}
//                             {key === 'achievements' && 'Celebrate your achievements and milestones'}
//                             {key === 'emailDigest' && 'Daily email digest of activities'}
//                             {key === 'smsAlerts' && 'Important alerts via SMS'}
//                           </p>
//                         </div>
//                         <label className="relative inline-flex items-center cursor-pointer">
//                           <input
//                             type="checkbox"
//                             checked={value}
//                             onChange={() => setNotifications({ ...notifications, [key]: !value })}
//                             className="sr-only peer"
//                           />
//                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4151c]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c4151c]"></div>
//                         </label>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-6 flex justify-end">
//                     <button
//                       onClick={() => alert('Notification preferences saved!')}
//                       className="flex items-center gap-2 px-6 py-3 bg-[#c4151c] text-white hover:bg-[#a01117] rounded-lg transition-colors"
//                       style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                     >
//                       <Save size={18} />
//                       Save Preferences
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Privacy Tab */}
//               {activeTab === 'privacy' && (
//                 <div className="space-y-6">
//                   <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-lg">
//                     <h2 className="serif text-black mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 600 }}>
//                       Privacy Settings
//                     </h2>

//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                             Profile Visibility
//                           </p>
//                           <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                             Control who can see your profile information
//                           </p>
//                         </div>
//                         <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c]" style={{ fontSize: '0.85rem' }}>
//                           <option>Everyone</option>
//                           <option>Students Only</option>
//                           <option>Private</option>
//                         </select>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                             Show Learning Progress
//                           </p>
//                           <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                             Allow others to see your course progress
//                           </p>
//                         </div>
//                         <label className="relative inline-flex items-center cursor-pointer">
//                           <input type="checkbox" defaultChecked className="sr-only peer" />
//                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4151c]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c4151c]"></div>
//                         </label>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                             Show Achievements
//                           </p>
//                           <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
//                             Display earned certificates and achievements
//                           </p>
//                         </div>
//                         <label className="relative inline-flex items-center cursor-pointer">
//                           <input type="checkbox" defaultChecked className="sr-only peer" />
//                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4151c]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c4151c]"></div>
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
//                     <h3 className="text-blue-900 mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                       Data & Privacy
//                     </h3>
//                     <p className="text-blue-700 mb-4" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                       We take your privacy seriously. You can download or delete your data at any time.
//                     </p>
//                     <div className="flex flex-wrap gap-3">
//                       <button className="px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         Download My Data
//                       </button>
//                       <button className="px-5 py-2.5 bg-white text-blue-700 border-2 border-blue-300 hover:bg-blue-50 rounded-lg transition-colors" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                         View Privacy Policy
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//       </main>
//     </div>
//   );
// }
