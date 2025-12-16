// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Filter, BookOpen, Clock, Play, CheckCircle, Lock, Star, TrendingUp, Award, Calendar, Users, Tag, Plus } from 'lucide-react';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
// import DashboardSidebar from './DashboardSidebar';

// export default function MyCourses() {
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState<'my-courses' | 'catalog'>('my-courses');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterStatus, setFilterStatus] = useState<'all' | 'in-progress' | 'completed' | 'not-started'>('all');
//   const [catalogCategory, setCatalogCategory] = useState<'all' | 'Test Prep' | 'Application' | 'Academic' | 'Skills'>('all');
//   const [sortBy, setSortBy] = useState<'recent' | 'progress' | 'name' | 'popular' | 'rating'>('recent');

//   const courses = [
//     {
//       id: 1,
//       title: 'SAT Math Preparation',
//       category: 'Test Prep',
//       instructor: 'Dr. Sarah Johnson',
//       thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800',
//       progress: 65,
//       totalVideos: 24,
//       completedVideos: 16,
//       duration: '8 hours',
//       lastWatched: '2 days ago',
//       rating: 4.8,
//       studentsEnrolled: 1240,
//       nextLesson: 'Quadratic Equations Advanced',
//       isLocked: false,
//     },
//     {
//       id: 2,
//       title: 'College Essay Writing Masterclass',
//       category: 'Application',
//       instructor: 'Prof. Michael Chen',
//       thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
//       progress: 100,
//       totalVideos: 15,
//       completedVideos: 15,
//       duration: '5 hours',
//       lastWatched: '1 week ago',
//       rating: 4.9,
//       studentsEnrolled: 856,
//       isLocked: false,
//     },
//     {
//       id: 3,
//       title: 'Interview Skills & Presentation',
//       category: 'Skills',
//       instructor: 'Emma Williams',
//       thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
//       progress: 40,
//       totalVideos: 12,
//       completedVideos: 5,
//       duration: '4 hours',
//       lastWatched: '3 days ago',
//       rating: 4.7,
//       studentsEnrolled: 645,
//       nextLesson: 'Body Language Fundamentals',
//       isLocked: false,
//     },
//     {
//       id: 4,
//       title: 'Advanced Physics for Olympiad',
//       category: 'Academic',
//       instructor: 'Dr. James Martinez',
//       thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800',
//       progress: 15,
//       totalVideos: 32,
//       completedVideos: 5,
//       duration: '12 hours',
//       lastWatched: '5 days ago',
//       rating: 4.9,
//       studentsEnrolled: 423,
//       nextLesson: 'Thermodynamics Part 2',
//       isLocked: false,
//     },
//     {
//       id: 5,
//       title: 'Financial Aid & Scholarship Guide',
//       category: 'Application',
//       instructor: 'Lisa Anderson',
//       thumbnail: 'https://images.unsplash.com/photo-1554224311-beee460c201f?w=800',
//       progress: 0,
//       totalVideos: 10,
//       completedVideos: 0,
//       duration: '3 hours',
//       lastWatched: 'Not started',
//       rating: 4.6,
//       studentsEnrolled: 934,
//       nextLesson: 'Understanding FAFSA',
//       isLocked: false,
//     },
//     {
//       id: 6,
//       title: 'TOEFL Speaking Excellence',
//       category: 'Test Prep',
//       instructor: 'Robert Taylor',
//       thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
//       progress: 80,
//       totalVideos: 18,
//       completedVideos: 14,
//       duration: '6 hours',
//       lastWatched: '1 day ago',
//       rating: 4.8,
//       studentsEnrolled: 1120,
//       nextLesson: 'Task 3: Campus Situations',
//       isLocked: false,
//     },
//     {
//       id: 7,
//       title: 'Advanced Chemistry Lab Prep',
//       category: 'Academic',
//       instructor: 'Dr. Maria Garcia',
//       thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
//       progress: 0,
//       totalVideos: 20,
//       completedVideos: 0,
//       duration: '7 hours',
//       lastWatched: 'Not started',
//       rating: 4.7,
//       studentsEnrolled: 567,
//       isLocked: true,
//       unlockMessage: 'Complete SAT Math Preparation to unlock',
//     },
//     {
//       id: 8,
//       title: 'Extracurricular Activities Planning',
//       category: 'Skills',
//       instructor: 'David Lee',
//       thumbnail: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
//       progress: 30,
//       totalVideos: 8,
//       completedVideos: 2,
//       duration: '2.5 hours',
//       lastWatched: '4 days ago',
//       rating: 4.5,
//       studentsEnrolled: 789,
//       nextLesson: 'Leadership Opportunities',
//       isLocked: false,
//     },
//   ];

//   // Catalog courses - available to browse and enroll
//   const catalogCourses = [
//     {
//       id: 9,
//       title: 'ACT Complete Preparation',
//       category: 'Test Prep',
//       instructor: 'Dr. Jennifer Brown',
//       thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
//       totalVideos: 28,
//       duration: '10 hours',
//       rating: 4.9,
//       studentsEnrolled: 2145,
//       description: 'Comprehensive ACT prep covering all sections with proven strategies',
//       price: 'Included in Premium',
//       level: 'Intermediate',
//       isEnrolled: false,
//     },
//     {
//       id: 10,
//       title: 'IELTS Academic Masterclass',
//       category: 'Test Prep',
//       instructor: 'Prof. David Wilson',
//       thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
//       totalVideos: 22,
//       duration: '9 hours',
//       rating: 4.8,
//       studentsEnrolled: 1876,
//       description: 'Master all four IELTS sections with expert techniques',
//       price: 'Included in Premium',
//       level: 'Intermediate',
//       isEnrolled: false,
//     },
//     {
//       id: 11,
//       title: 'AP Calculus BC Complete Course',
//       category: 'Academic',
//       instructor: 'Dr. Thomas Anderson',
//       thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
//       totalVideos: 45,
//       duration: '18 hours',
//       rating: 4.9,
//       studentsEnrolled: 1543,
//       description: 'Advanced calculus covering all BC topics with practice problems',
//       price: 'Included in Premium',
//       level: 'Advanced',
//       isEnrolled: false,
//     },
//     {
//       id: 12,
//       title: 'Personal Statement Writing Workshop',
//       category: 'Application',
//       instructor: 'Rachel Thompson',
//       thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
//       totalVideos: 12,
//       duration: '4 hours',
//       rating: 4.7,
//       studentsEnrolled: 2341,
//       description: 'Craft compelling personal statements that stand out',
//       price: 'Included in Premium',
//       level: 'Beginner',
//       isEnrolled: false,
//     },
//     {
//       id: 13,
//       title: 'SAT Reading & Writing Strategies',
//       category: 'Test Prep',
//       instructor: 'Prof. Amanda Lee',
//       thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
//       totalVideos: 20,
//       duration: '7 hours',
//       rating: 4.8,
//       studentsEnrolled: 1923,
//       description: 'Master SAT verbal sections with proven techniques',
//       price: 'Included in Premium',
//       level: 'Intermediate',
//       isEnrolled: false,
//     },
//     {
//       id: 14,
//       title: 'AP Biology Comprehensive Review',
//       category: 'Academic',
//       instructor: 'Dr. Kevin Martinez',
//       thumbnail: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800',
//       totalVideos: 38,
//       duration: '15 hours',
//       rating: 4.9,
//       studentsEnrolled: 1234,
//       description: 'Complete AP Biology curriculum with lab techniques',
//       price: 'Included in Premium',
//       level: 'Advanced',
//       isEnrolled: false,
//     },
//     {
//       id: 15,
//       title: 'Time Management for Students',
//       category: 'Skills',
//       instructor: 'Sarah Johnson',
//       thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
//       totalVideos: 10,
//       duration: '3 hours',
//       rating: 4.6,
//       studentsEnrolled: 3421,
//       description: 'Optimize your study schedule and boost productivity',
//       price: 'Included in Premium',
//       level: 'Beginner',
//       isEnrolled: false,
//     },
//     {
//       id: 16,
//       title: 'Common App Guide & Strategies',
//       category: 'Application',
//       instructor: 'Mark Stevens',
//       thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
//       totalVideos: 14,
//       duration: '5 hours',
//       rating: 4.8,
//       studentsEnrolled: 2876,
//       description: 'Navigate Common App successfully with expert guidance',
//       price: 'Included in Premium',
//       level: 'Beginner',
//       isEnrolled: false,
//     },
//     {
//       id: 17,
//       title: 'GRE Quantitative Reasoning',
//       category: 'Test Prep',
//       instructor: 'Dr. Patricia Wong',
//       thumbnail: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800',
//       totalVideos: 25,
//       duration: '11 hours',
//       rating: 4.7,
//       studentsEnrolled: 1567,
//       description: 'Master GRE math with advanced problem-solving techniques',
//       price: 'Included in Premium',
//       level: 'Advanced',
//       isEnrolled: false,
//     },
//     {
//       id: 18,
//       title: 'Public Speaking & Debate',
//       category: 'Skills',
//       instructor: 'James Rodriguez',
//       thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
//       totalVideos: 16,
//       duration: '6 hours',
//       rating: 4.8,
//       studentsEnrolled: 1892,
//       description: 'Develop confidence and eloquence in public speaking',
//       price: 'Included in Premium',
//       level: 'Intermediate',
//       isEnrolled: false,
//     },
//     {
//       id: 19,
//       title: 'AP US History Complete Course',
//       category: 'Academic',
//       instructor: 'Prof. Laura Mitchell',
//       thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800',
//       totalVideos: 42,
//       duration: '17 hours',
//       rating: 4.9,
//       studentsEnrolled: 1678,
//       description: 'Comprehensive APUSH preparation with essay techniques',
//       price: 'Included in Premium',
//       level: 'Intermediate',
//       isEnrolled: false,
//     },
//     {
//       id: 20,
//       title: 'College Interview Preparation',
//       category: 'Application',
//       instructor: 'Emily Carter',
//       thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
//       totalVideos: 11,
//       duration: '4 hours',
//       rating: 4.7,
//       studentsEnrolled: 2543,
//       description: 'Ace your college interviews with confidence',
//       price: 'Included in Premium',
//       level: 'Beginner',
//       isEnrolled: false,
//     },
//   ];

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesFilter = filterStatus === 'all' ? true :
//                          filterStatus === 'completed' ? course.progress === 100 :
//                          filterStatus === 'in-progress' ? course.progress > 0 && course.progress < 100 :
//                          course.progress === 0;
    
//     return matchesSearch && matchesFilter;
//   }).sort((a, b) => {
//     if (sortBy === 'progress') return b.progress - a.progress;
//     if (sortBy === 'name') return a.title.localeCompare(b.title);
//     if (sortBy === 'rating') return b.rating - a.rating;
//     if (sortBy === 'popular') return b.studentsEnrolled - a.studentsEnrolled;
//     return 0; // 'recent' - keep original order
//   });

//   const filteredCatalogCourses = catalogCourses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesCategory = catalogCategory === 'all' || course.category === catalogCategory;
    
//     return matchesSearch && matchesCategory;
//   }).sort((a, b) => {
//     if (sortBy === 'name') return a.title.localeCompare(b.title);
//     if (sortBy === 'rating') return b.rating - a.rating;
//     if (sortBy === 'popular') return b.studentsEnrolled - a.studentsEnrolled;
//     return 0;
//   });

//   const stats = {
//     total: courses.filter(c => !c.isLocked).length,
//     inProgress: courses.filter(c => c.progress > 0 && c.progress < 100).length,
//     completed: courses.filter(c => c.progress === 100).length,
//     notStarted: courses.filter(c => c.progress === 0 && !c.isLocked).length,
//   };

//   const catalogStats = {
//     total: catalogCourses.length,
//     testPrep: catalogCourses.filter(c => c.category === 'Test Prep').length,
//     application: catalogCourses.filter(c => c.category === 'Application').length,
//     academic: catalogCourses.filter(c => c.category === 'Academic').length,
//     skills: catalogCourses.filter(c => c.category === 'Skills').length,
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
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
//             <div>
//               <h1 className="serif text-white mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600 }}>
//                 {activeTab === 'my-courses' ? 'My Courses' : 'Course Catalog'}
//               </h1>
//               <p className="text-white/90" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
//                 {activeTab === 'my-courses' 
//                   ? 'Manage and track all your enrolled courses'
//                   : 'Explore and discover new courses to enhance your learning'
//                 }
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

//           {/* Tab Navigation */}
//           <div className="flex gap-3 mb-8">
//             <button
//               onClick={() => {
//                 setActiveTab('my-courses');
//                 setSearchQuery('');
//               }}
//               className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
//                 activeTab === 'my-courses'
//                   ? 'bg-white text-[#c4151c] shadow-lg'
//                   : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
//               }`}
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <BookOpen size={18} />
//               My Courses ({stats.total})
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab('catalog');
//                 setSearchQuery('');
//                 setSortBy('popular');
//               }}
//               className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
//                 activeTab === 'catalog'
//                   ? 'bg-white text-[#c4151c] shadow-lg'
//                   : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
//               }`}
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               <Tag size={18} />
//               Course Catalog ({catalogStats.total})
//             </button>
//           </div>

//           {/* Stats Cards */}
//           {activeTab === 'my-courses' ? (
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <BookOpen className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Total Courses</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {stats.total}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <TrendingUp className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>In Progress</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {stats.inProgress}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <CheckCircle className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Completed</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {stats.completed}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Award className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Not Started</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {stats.notStarted}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <BookOpen className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>All Courses</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {catalogStats.total}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Award className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Test Prep</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {catalogStats.testPrep}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Tag className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Application</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {catalogStats.application}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <BookOpen className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Academic</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {catalogStats.academic}
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <TrendingUp className="text-white" size={20} />
//                   <span className="text-white/80" style={{ fontSize: '0.8rem' }}>Skills</span>
//                 </div>
//                 <p className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
//                   {catalogStats.skills}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Search and Filters */}
//           <div className="mb-8 sm:mb-12">
//             {/* Search Bar */}
//             <div className="relative mb-6">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder={activeTab === 'my-courses' 
//                   ? "Search courses, instructors, or categories..."
//                   : "Search catalog courses, instructors, or descriptions..."
//                 }
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-6 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c4151c] transition-colors"
//                 style={{ fontSize: '0.95rem' }}
//               />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
//               {activeTab === 'my-courses' ? (
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => setFilterStatus('all')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       filterStatus === 'all' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     All ({stats.total})
//                   </button>
//                   <button
//                     onClick={() => setFilterStatus('in-progress')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       filterStatus === 'in-progress' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     In Progress ({stats.inProgress})
//                   </button>
//                   <button
//                     onClick={() => setFilterStatus('completed')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       filterStatus === 'completed' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     Completed ({stats.completed})
//                   </button>
//                   <button
//                     onClick={() => setFilterStatus('not-started')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       filterStatus === 'not-started' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     Not Started ({stats.notStarted})
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => setCatalogCategory('all')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       catalogCategory === 'all' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     All Courses
//                   </button>
//                   <button
//                     onClick={() => setCatalogCategory('Test Prep')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       catalogCategory === 'Test Prep' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     Test Prep
//                   </button>
//                   <button
//                     onClick={() => setCatalogCategory('Application')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       catalogCategory === 'Application' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     Application
//                   </button>
//                   <button
//                     onClick={() => setCatalogCategory('Academic')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       catalogCategory === 'Academic' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     Academic
//                   </button>
//                   <button
//                     onClick={() => setCatalogCategory('Skills')}
//                     className={`px-4 sm:px-5 py-2 rounded-lg transition-all ${
//                       catalogCategory === 'Skills' ? 'bg-[#c4151c] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                   >
//                     Skills
//                   </button>
//                 </div>
//               )}

//               <div className="flex items-center gap-3">
//                 <Filter size={18} className="text-gray-500" />
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value as any)}
//                   className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c4151c] bg-white"
//                   style={{ fontSize: '0.85rem' }}
//                 >
//                   {activeTab === 'my-courses' && <option value="recent">Recently Accessed</option>}
//                   {activeTab === 'my-courses' && <option value="progress">Progress</option>}
//                   <option value="name">Name (A-Z)</option>
//                   {activeTab === 'catalog' && <option value="popular">Most Popular</option>}
//                   <option value="rating">Highest Rated</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Courses Grid - My Courses Tab */}
//           {activeTab === 'my-courses' && (
//             <>
//               {filteredCourses.length === 0 ? (
//                 <div className="text-center py-16">
//                   <BookOpen className="mx-auto mb-4 text-gray-300" size={64} />
//                   <p className="text-gray-500" style={{ fontSize: '1rem' }}>
//                     No courses found matching your criteria.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredCourses.map((course) => (
//                     <div
//                       key={course.id}
//                       className={`group bg-white border-2 border-gray-200 hover:border-[#c4151c] transition-all rounded-lg overflow-hidden ${
//                         course.isLocked ? 'opacity-75' : 'cursor-pointer hover:shadow-xl'
//                       }`}
//                     >
//                       {/* Thumbnail */}
//                       <div className="relative h-44 overflow-hidden">
//                         <ImageWithFallback
//                           src={course.thumbnail}
//                           alt={course.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         {course.isLocked && (
//                           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                             <div className="text-center text-white">
//                               <Lock className="mx-auto mb-2" size={32} />
//                               <p className="px-4" style={{ fontSize: '0.85rem' }}>Locked</p>
//                             </div>
//                           </div>
//                         )}
//                         {course.progress === 100 && !course.isLocked && (
//                           <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                             <CheckCircle size={14} />
//                             Completed
//                           </div>
//                         )}
//                         {course.progress > 0 && course.progress < 100 && !course.isLocked && (
//                           <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-3 py-2">
//                             <div className="flex items-center justify-between mb-1">
//                               <span className="text-gray-700" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
//                                 {course.progress}% Complete
//                               </span>
//                             </div>
//                             <div className="bg-gray-200 rounded-full h-2">
//                               <div
//                                 className="bg-[#c4151c] h-2 rounded-full transition-all"
//                                 style={{ width: `${course.progress}%` }}
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       {/* Content */}
//                       <div className="p-5">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="text-[#c4151c] bg-[#c4151c]/10 px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                             {course.category}
//                           </span>
//                           <div className="flex items-center gap-1">
//                             <Star className="text-yellow-500 fill-yellow-500" size={14} />
//                             <span className="text-gray-700" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                               {course.rating}
//                             </span>
//                           </div>
//                         </div>

//                         <h3 className="serif text-black mb-2" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', fontWeight: 600 }}>
//                           {course.title}
//                         </h3>

//                         <p className="text-gray-600 mb-3" style={{ fontSize: '0.85rem' }}>
//                           By {course.instructor}
//                         </p>

//                         {course.isLocked ? (
//                           <p className="text-gray-500 italic mb-4" style={{ fontSize: '0.8rem' }}>
//                             {course.unlockMessage}
//                           </p>
//                         ) : (
//                           <>
//                             <div className="flex items-center justify-between text-gray-600 mb-3 pb-3 border-b border-gray-100" style={{ fontSize: '0.8rem' }}>
//                               <span className="flex items-center gap-1">
//                                 <BookOpen size={14} />
//                                 {course.completedVideos}/{course.totalVideos} videos
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <Clock size={14} />
//                                 {course.duration}
//                               </span>
//                             </div>

//                             {course.nextLesson && course.progress > 0 && course.progress < 100 && (
//                               <div className="mb-3 p-2 bg-gray-50 rounded border-l-2 border-[#c4151c]">
//                                 <p className="text-gray-500 mb-1" style={{ fontSize: '0.7rem' }}>Next Lesson:</p>
//                                 <p className="text-gray-800" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                                   {course.nextLesson}
//                                 </p>
//                               </div>
//                             )}

//                             <div className="flex items-center gap-2 text-gray-500 mb-4" style={{ fontSize: '0.75rem' }}>
//                               <Calendar size={12} />
//                               <span>Last accessed: {course.lastWatched}</span>
//                             </div>
//                           </>
//                         )}

//                         <button
//                           onClick={() => !course.isLocked && navigate(`/academy/courses/${course.id}`)}
//                           disabled={course.isLocked}
//                           className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
//                             course.isLocked
//                               ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                               : course.progress > 0 && course.progress < 100
//                               ? 'bg-[#c4151c] text-white hover:bg-[#a01117]'
//                               : course.progress === 100
//                               ? 'border-2 border-[#c4151c] text-[#c4151c] hover:bg-[#c4151c] hover:text-white'
//                               : 'border-2 border-gray-300 text-gray-700 hover:border-[#c4151c] hover:text-[#c4151c]'
//                           }`}
//                           style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                         >
//                           {course.isLocked ? (
//                             <>
//                               <Lock size={16} />
//                               Locked
//                             </>
//                           ) : course.progress > 0 && course.progress < 100 ? (
//                             <>
//                               <Play size={16} />
//                               Continue Learning
//                             </>
//                           ) : course.progress === 100 ? (
//                             <>
//                               <CheckCircle size={16} />
//                               Review Course
//                             </>
//                           ) : (
//                             <>
//                               <Play size={16} />
//                               Start Course
//                             </>
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}

//           {/* Courses Grid - Catalog Tab */}
//           {activeTab === 'catalog' && (
//             <>
//               {filteredCatalogCourses.length === 0 ? (
//                 <div className="text-center py-16">
//                   <BookOpen className="mx-auto mb-4 text-gray-300" size={64} />
//                   <p className="text-gray-500" style={{ fontSize: '1rem' }}>
//                     No courses found matching your criteria.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredCatalogCourses.map((course) => (
//                     <div
//                       key={course.id}
//                       className="group bg-white border-2 border-gray-200 hover:border-[#c4151c] transition-all rounded-lg overflow-hidden cursor-pointer hover:shadow-xl"
//                     >
//                       {/* Thumbnail */}
//                       <div className="relative h-44 overflow-hidden">
//                         <ImageWithFallback
//                           src={course.thumbnail}
//                           alt={course.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute top-3 left-3 bg-[#c4151c] text-white px-3 py-1.5 rounded-full" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                           {course.level}
//                         </div>
//                         <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-full" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                           {course.price}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="p-5">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="text-[#c4151c] bg-[#c4151c]/10 px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//                             {course.category}
//                           </span>
//                           <div className="flex items-center gap-1">
//                             <Star className="text-yellow-500 fill-yellow-500" size={14} />
//                             <span className="text-gray-700" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
//                               {course.rating}
//                             </span>
//                           </div>
//                         </div>

//                         <h3 className="serif text-black mb-2" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', fontWeight: 600 }}>
//                           {course.title}
//                         </h3>

//                         <p className="text-gray-600 mb-3" style={{ fontSize: '0.85rem' }}>
//                           By {course.instructor}
//                         </p>

//                         <p className="text-gray-600 mb-4" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
//                           {course.description}
//                         </p>

//                         <div className="flex items-center justify-between text-gray-600 mb-4 pb-4 border-b border-gray-100" style={{ fontSize: '0.8rem' }}>
//                           <span className="flex items-center gap-1">
//                             <BookOpen size={14} />
//                             {course.totalVideos} videos
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Clock size={14} />
//                             {course.duration}
//                           </span>
//                         </div>

//                         <div className="flex items-center gap-2 text-gray-500 mb-4" style={{ fontSize: '0.75rem' }}>
//                           <Users size={12} />
//                           <span>{course.studentsEnrolled.toLocaleString()} students enrolled</span>
//                         </div>

//                         <button
//                           onClick={() => {
//                             // Enrollment logic would go here
//                             alert(`Enrolling in: ${course.title}`);
//                           }}
//                           className="w-full py-3 bg-[#c4151c] text-white hover:bg-[#a01117] rounded-lg transition-all flex items-center justify-center gap-2"
//                           style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                         >
//                           <Plus size={16} />
//                           Enroll Now
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </section>
//       </main>
//     </div>
//   );
// }
