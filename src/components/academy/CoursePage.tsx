// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight, CheckCircle, Circle, Lock, BookOpen, FileText, Download, Star, Clock, Award, X, MessageSquare, ThumbsUp, Reply, Send, User, Pin, TrendingUp, BarChart } from 'lucide-react';

// interface QuizQuestion {
//   id: number;
//   timestamp: number;
//   question: string;
//   options: string[];
//   correctAnswer: number;
//   explanation: string;
// }

// interface Comment {
//   id: number;
//   userId: string;
//   userName: string;
//   userAvatar: string;
//   timestamp: string;
//   lessonId: number;
//   videoTimestamp?: string;
//   content: string;
//   likes: number;
//   replies: Reply[];
//   isPinned: boolean;
//   isInstructor: boolean;
// }

// interface Reply {
//   id: number;
//   userId: string;
//   userName: string;
//   userAvatar: string;
//   timestamp: string;
//   content: string;
//   isInstructor: boolean;
// }

// interface Lesson {
//   id: number;
//   title: string;
//   duration: string;
//   videoUrl: string;
//   isCompleted: boolean;
//   isLocked: boolean;
//   quizQuestions: QuizQuestion[];
//   description: string;
//   resources: Array<{ name: string; type: string; url: string }>;
// }

// export default function CoursePage() {
//   const navigate = useNavigate();
//   const { courseId } = useParams();
//   const videoRef = useRef<HTMLVideoElement>(null);
  
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion | null>(null);
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
//   const [notes, setNotes] = useState('');
//   const [showNotes, setShowNotes] = useState(false);
//   const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState<'overview' | 'resources' | 'discussion' | 'stats'>('overview');
//   const [newComment, setNewComment] = useState('');
//   const [replyingTo, setReplyingTo] = useState<number | null>(null);
//   const [replyContent, setReplyContent] = useState('');
//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       userId: 'instructor1',
//       userName: 'Dr. Michael Chen',
//       userAvatar: 'MC',
//       timestamp: '2 days ago',
//       lessonId: 1,
//       content: 'Welcome to the course! Feel free to ask any questions about the material. I\'ll be checking in regularly to provide guidance.',
//       likes: 24,
//       replies: [],
//       isPinned: true,
//       isInstructor: true,
//     },
//     {
//       id: 2,
//       userId: 'student1',
//       userName: 'Alex Thompson',
//       userAvatar: 'AT',
//       timestamp: '1 day ago',
//       lessonId: 1,
//       videoTimestamp: '5:42',
//       content: 'At 5:42, could you explain more about why we use the elimination method here instead of substitution?',
//       likes: 8,
//       replies: [
//         {
//           id: 21,
//           userId: 'instructor1',
//           userName: 'Dr. Michael Chen',
//           userAvatar: 'MC',
//           timestamp: '1 day ago',
//           content: 'Great question! The elimination method is more efficient here because both equations are already in standard form. It saves us from having to solve for a variable first.',
//           isInstructor: true,
//         },
//         {
//           id: 22,
//           userId: 'student2',
//           userName: 'Sarah Lee',
//           userAvatar: 'SL',
//           timestamp: '1 day ago',
//           content: 'This helped me too! Thanks for asking.',
//           isInstructor: false,
//         },
//       ],
//       isPinned: false,
//       isInstructor: false,
//     },
//     {
//       id: 3,
//       userId: 'student3',
//       userName: 'Michael Rodriguez',
//       userAvatar: 'MR',
//       timestamp: '12 hours ago',
//       lessonId: 2,
//       content: 'The practice problems at the end were really helpful! Would love to see more challenging ones.',
//       likes: 5,
//       replies: [],
//       isPinned: false,
//       isInstructor: false,
//     },
//   ]);

//   // Mock course data
//   const course = {
//     id: courseId,
//     title: 'SAT Math Mastery',
//     instructor: 'Dr. Michael Chen',
//     instructorBio: 'PhD in Mathematics Education, 15+ years teaching experience, Former SAT test prep specialist',
//     description: 'Master SAT Math with comprehensive video lessons covering algebra, geometry, and data analysis.',
//     rating: 4.8,
//     totalStudents: 1240,
//     totalLessons: 24,
//     completedLessons: 12,
//     avgCompletionTime: '6 weeks',
//     skillLevel: 'Intermediate to Advanced',
//   };

//   const lessons: Lesson[] = [
//     {
//       id: 1,
//       title: 'Introduction to SAT Math',
//       duration: '12:30',
//       videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       isCompleted: true,
//       isLocked: false,
//       description: 'Get an overview of the SAT Math section, including question types, time management strategies, and scoring methodology. Learn what to expect and how to approach each section effectively.',
//       resources: [
//         { name: 'SAT Math Formula Sheet', type: 'PDF', url: '#' },
//         { name: 'Practice Problem Set 1', type: 'PDF', url: '#' },
//         { name: 'Calculator Guidelines', type: 'PDF', url: '#' },
//       ],
//       quizQuestions: [
//         {
//           id: 1,
//           timestamp: 180,
//           question: 'What is the primary focus of the SAT Math section?',
//           options: [
//             'Advanced calculus and trigonometry',
//             'Algebra, problem solving, and data analysis',
//             'Pure geometry and proofs',
//             'Statistics only'
//           ],
//           correctAnswer: 1,
//           explanation: 'The SAT Math section focuses on algebra, problem solving, and data analysis - skills that are essential for college readiness.'
//         },
//         {
//           id: 2,
//           timestamp: 420,
//           question: 'How many questions are on the SAT Math section?',
//           options: [
//             '44 questions',
//             '52 questions',
//             '58 questions',
//             '60 questions'
//           ],
//           correctAnswer: 2,
//           explanation: 'The SAT Math section contains 58 questions total: 45 multiple choice and 13 grid-in questions.'
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Linear Equations Fundamentals',
//       duration: '15:45',
//       videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//       isCompleted: true,
//       isLocked: false,
//       description: 'Master the fundamentals of linear equations including slope-intercept form, point-slope form, and standard form. Practice solving real-world problems using linear equations.',
//       resources: [
//         { name: 'Linear Equations Worksheet', type: 'PDF', url: '#' },
//         { name: 'Graphing Calculator Tutorial', type: 'Video', url: '#' },
//       ],
//       quizQuestions: [
//         {
//           id: 3,
//           timestamp: 240,
//           question: 'What is the slope-intercept form of a linear equation?',
//           options: [
//             'ax + by = c',
//             'y = mx + b',
//             'y - y₁ = m(x - x₁)',
//             'x = my + b'
//           ],
//           correctAnswer: 1,
//           explanation: 'The slope-intercept form is y = mx + b, where m is the slope and b is the y-intercept.'
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Solving Systems of Equations',
//       duration: '18:20',
//       videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//       isCompleted: false,
//       isLocked: false,
//       description: 'Learn multiple methods for solving systems of equations: substitution, elimination, and graphing. Understand when to use each method and practice with complex problems.',
//       resources: [
//         { name: 'Systems Practice Problems', type: 'PDF', url: '#' },
//         { name: 'Step-by-Step Solutions Guide', type: 'PDF', url: '#' },
//       ],
//       quizQuestions: [
//         {
//           id: 4,
//           timestamp: 300,
//           question: 'Which method is most efficient for solving a system where one equation is already solved for a variable?',
//           options: [
//             'Elimination method',
//             'Substitution method',
//             'Graphing method',
//             'Matrix method'
//           ],
//           correctAnswer: 1,
//           explanation: 'The substitution method is most efficient when one equation is already solved for a variable, as you can directly substitute it into the other equation.'
//         }
//       ]
//     },
//     {
//       id: 4,
//       title: 'Quadratic Equations',
//       duration: '20:15',
//       videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
//       isCompleted: false,
//       isLocked: false,
//       description: 'Dive deep into quadratic equations, including factoring, completing the square, and using the quadratic formula. Learn to identify the most efficient solution method.',
//       resources: [
//         { name: 'Quadratics Cheat Sheet', type: 'PDF', url: '#' },
//       ],
//       quizQuestions: []
//     },
//     {
//       id: 5,
//       title: 'Advanced Quadratics',
//       duration: '16:50',
//       videoUrl: '',
//       isCompleted: false,
//       isLocked: true,
//       description: 'Complete previous lessons to unlock this content.',
//       resources: [],
//       quizQuestions: []
//     },
//   ];

//   const currentLesson = lessons[currentLessonIndex];
//   const lessonComments = comments.filter(c => c.lessonId === currentLesson.id);

//   // Check for quiz questions at current timestamp
//   useEffect(() => {
//     if (!currentLesson || showQuiz) return;

//     const questionAtTime = currentLesson.quizQuestions.find(
//       q => !answeredQuestions.has(q.id) && Math.abs(currentTime - q.timestamp) < 1
//     );

//     if (questionAtTime) {
//       setCurrentQuiz(questionAtTime);
//       setShowQuiz(true);
//       setIsPlaying(false);
//       if (videoRef.current) {
//         videoRef.current.pause();
//       }
//     }
//   }, [currentTime, currentLesson, showQuiz, answeredQuestions]);

//   const handlePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//     }
//   };

//   const handleLoadedMetadata = () => {
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration);
//     }
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const time = parseFloat(e.target.value);
//     if (videoRef.current) {
//       videoRef.current.currentTime = time;
//       setCurrentTime(time);
//     }
//   };

//   const handleMuteToggle = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleFullscreen = () => {
//     if (videoRef.current) {
//       if (videoRef.current.requestFullscreen) {
//         videoRef.current.requestFullscreen();
//       }
//     }
//   };

//   const handleQuizAnswer = () => {
//     if (selectedAnswer === null || !currentQuiz) return;
//     setShowExplanation(true);
//     setAnsweredQuestions(new Set([...answeredQuestions, currentQuiz.id]));
//   };

//   const handleQuizContinue = () => {
//     setShowQuiz(false);
//     setShowExplanation(false);
//     setSelectedAnswer(null);
//     setCurrentQuiz(null);
//     setIsPlaying(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const handleLessonSelect = (index: number) => {
//     if (lessons[index].isLocked) return;
//     setCurrentLessonIndex(index);
//     setCurrentTime(0);
//     setIsPlaying(false);
//     setShowQuiz(false);
//     setShowExplanation(false);
//     setSelectedAnswer(null);
//     setActiveTab('overview');
//   };

//   const handleNextLesson = () => {
//     if (currentLessonIndex < lessons.length - 1 && !lessons[currentLessonIndex + 1].isLocked) {
//       handleLessonSelect(currentLessonIndex + 1);
//     }
//   };

//   const handlePostComment = () => {
//     if (!newComment.trim()) return;

//     const comment: Comment = {
//       id: comments.length + 1,
//       userId: 'currentUser',
//       userName: 'Sarah Michelle',
//       userAvatar: 'SM',
//       timestamp: 'Just now',
//       lessonId: currentLesson.id,
//       videoTimestamp: formatTime(currentTime),
//       content: newComment,
//       likes: 0,
//       replies: [],
//       isPinned: false,
//       isInstructor: false,
//     };

//     setComments([...comments, comment]);
//     setNewComment('');
//   };

//   const handlePostReply = (commentId: number) => {
//     if (!replyContent.trim()) return;

//     const reply: Reply = {
//       id: Date.now(),
//       userId: 'currentUser',
//       userName: 'Sarah Michelle',
//       userAvatar: 'SM',
//       timestamp: 'Just now',
//       content: replyContent,
//       isInstructor: false,
//     };

//     setComments(comments.map(c => 
//       c.id === commentId 
//         ? { ...c, replies: [...c.replies, reply] }
//         : c
//     ));
//     setReplyContent('');
//     setReplyingTo(null);
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const progressPercentage = (currentTime / duration) * 100 || 0;

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       {/* Header */}
//       <section className="bg-gradient-to-br from-[#c4151c] to-[#a01117] py-8 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <button
//             onClick={() => navigate('/academy/courses')}
//             className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
//             style={{ fontSize: '0.9rem', fontWeight: 500 }}
//           >
//             <ChevronLeft size={20} />
//             Back to My Courses
//           </button>
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div>
//               <h1 className="serif text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 600 }}>
//                 {course.title}
//               </h1>
//               <p className="text-white/90 mb-1" style={{ fontSize: '0.95rem' }}>
//                 Instructor: {course.instructor}
//               </p>
//               <p className="text-white/80" style={{ fontSize: '0.85rem' }}>
//                 {course.instructorBio}
//               </p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-4 text-white">
//                 <div className="flex items-center gap-2">
//                   <Star size={18} fill="white" />
//                   <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{course.rating}</span>
//                 </div>
//                 <div className="text-white/90" style={{ fontSize: '0.85rem' }}>
//                   {course.totalStudents.toLocaleString()} students
//                 </div>
//               </div>
//               <div className="text-white/90" style={{ fontSize: '0.85rem' }}>
//                 {course.completedLessons}/{course.totalLessons} lessons • {course.avgCompletionTime}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-8 px-4 sm:px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Video Player & Content Area */}
//             <div className="lg:col-span-2">
//               {/* Video Player */}
//               <div className="bg-black rounded-xl overflow-hidden mb-6 relative shadow-2xl">
//                 <video
//                   ref={videoRef}
//                   className="w-full aspect-video"
//                   src={currentLesson.videoUrl}
//                   onTimeUpdate={handleTimeUpdate}
//                   onLoadedMetadata={handleLoadedMetadata}
//                   onEnded={handleNextLesson}
//                 />

//                 {/* Video Controls */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                   <div className="mb-3">
//                     <input
//                       type="range"
//                       min="0"
//                       max={duration || 0}
//                       value={currentTime}
//                       onChange={handleSeek}
//                       className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
//                       style={{
//                         background: `linear-gradient(to right, #c4151c 0%, #c4151c ${progressPercentage}%, #4b5563 ${progressPercentage}%, #4b5563 100%)`
//                       }}
//                     />
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={handlePlayPause}
//                         className="text-white hover:text-[#c4151c] transition-colors"
//                       >
//                         {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//                       </button>
//                       <button
//                         onClick={handleMuteToggle}
//                         className="text-white hover:text-[#c4151c] transition-colors"
//                       >
//                         {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
//                       </button>
//                       <span className="text-white text-sm">
//                         {formatTime(currentTime)} / {formatTime(duration)}
//                       </span>
//                     </div>
//                     <button
//                       onClick={handleFullscreen}
//                       className="text-white hover:text-[#c4151c] transition-colors"
//                     >
//                       <Maximize size={22} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Quiz Overlay */}
//                 {showQuiz && currentQuiz && (
//                   <div className="absolute inset-0 bg-black/95 flex items-center justify-center p-6">
//                     <div className="bg-white rounded-xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//                       <div className="flex items-start justify-between mb-6">
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 bg-[#c4151c]/10 rounded-lg flex items-center justify-center">
//                             <BookOpen className="text-[#c4151c]" size={24} />
//                           </div>
//                           <div>
//                             <h3 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                               Quick Quiz
//                             </h3>
//                             <p className="text-gray-600" style={{ fontSize: '0.85rem' }}>
//                               Answer to continue
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <p className="text-gray-900 mb-6" style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.6 }}>
//                         {currentQuiz.question}
//                       </p>

//                       <div className="space-y-3 mb-6">
//                         {currentQuiz.options.map((option, index) => (
//                           <button
//                             key={index}
//                             onClick={() => !showExplanation && setSelectedAnswer(index)}
//                             disabled={showExplanation}
//                             className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
//                               showExplanation
//                                 ? index === currentQuiz.correctAnswer
//                                   ? 'border-green-500 bg-green-50'
//                                   : index === selectedAnswer
//                                   ? 'border-red-500 bg-red-50'
//                                   : 'border-gray-200 bg-gray-50'
//                                 : selectedAnswer === index
//                                 ? 'border-[#c4151c] bg-[#c4151c]/5'
//                                 : 'border-gray-300 hover:border-[#c4151c] bg-white'
//                             }`}
//                             style={{ fontSize: '0.95rem' }}
//                           >
//                             <div className="flex items-center gap-3">
//                               <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                                 showExplanation
//                                   ? index === currentQuiz.correctAnswer
//                                     ? 'border-green-500 bg-green-500'
//                                     : index === selectedAnswer
//                                     ? 'border-red-500 bg-red-500'
//                                     : 'border-gray-300'
//                                   : selectedAnswer === index
//                                   ? 'border-[#c4151c] bg-[#c4151c]'
//                                   : 'border-gray-300'
//                               }`}>
//                                 {showExplanation && (
//                                   index === currentQuiz.correctAnswer ? (
//                                     <CheckCircle size={16} className="text-white" />
//                                   ) : index === selectedAnswer ? (
//                                     <X size={16} className="text-white" />
//                                   ) : null
//                                 )}
//                               </div>
//                               <span className={showExplanation && index === currentQuiz.correctAnswer ? 'font-semibold' : ''}>
//                                 {option}
//                               </span>
//                             </div>
//                           </button>
//                         ))}
//                       </div>

//                       {showExplanation && (
//                         <div className={`p-4 rounded-lg mb-6 ${
//                           selectedAnswer === currentQuiz.correctAnswer
//                             ? 'bg-green-50 border-2 border-green-200'
//                             : 'bg-blue-50 border-2 border-blue-200'
//                         }`}>
//                           <p className={`mb-2 ${
//                             selectedAnswer === currentQuiz.correctAnswer ? 'text-green-900' : 'text-blue-900'
//                           }`} style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                             {selectedAnswer === currentQuiz.correctAnswer ? '✓ Correct!' : 'Not quite right'}
//                           </p>
//                           <p className={
//                             selectedAnswer === currentQuiz.correctAnswer ? 'text-green-800' : 'text-blue-800'
//                           } style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                             {currentQuiz.explanation}
//                           </p>
//                         </div>
//                       )}

//                       <div className="flex gap-3">
//                         {!showExplanation ? (
//                           <button
//                             onClick={handleQuizAnswer}
//                             disabled={selectedAnswer === null}
//                             className="flex-1 py-3 bg-[#c4151c] text-white hover:bg-[#a01117] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors"
//                             style={{ fontSize: '0.95rem', fontWeight: 500 }}
//                           >
//                             Submit Answer
//                           </button>
//                         ) : (
//                           <button
//                             onClick={handleQuizContinue}
//                             className="flex-1 py-3 bg-[#c4151c] text-white hover:bg-[#a01117] rounded-lg transition-colors"
//                             style={{ fontSize: '0.95rem', fontWeight: 500 }}
//                           >
//                             Continue Video
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Tab Navigation */}
//               <div className="bg-white border border-gray-200 rounded-xl mb-6 overflow-hidden shadow-sm">
//                 <div className="flex border-b border-gray-200">
//                   <button
//                     onClick={() => setActiveTab('overview')}
//                     className={`flex-1 px-6 py-4 transition-all ${
//                       activeTab === 'overview'
//                         ? 'bg-[#c4151c] text-white'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                     style={{ fontSize: '0.9rem', fontWeight: 600 }}
//                   >
//                     Overview
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('resources')}
//                     className={`flex-1 px-6 py-4 transition-all ${
//                       activeTab === 'resources'
//                         ? 'bg-[#c4151c] text-white'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                     style={{ fontSize: '0.9rem', fontWeight: 600 }}
//                   >
//                     Resources
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('discussion')}
//                     className={`flex-1 px-6 py-4 transition-all ${
//                       activeTab === 'discussion'
//                         ? 'bg-[#c4151c] text-white'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                     style={{ fontSize: '0.9rem', fontWeight: 600 }}
//                   >
//                     Discussion ({lessonComments.length})
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('stats')}
//                     className={`flex-1 px-6 py-4 transition-all ${
//                       activeTab === 'stats'
//                         ? 'bg-[#c4151c] text-white'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                     style={{ fontSize: '0.9rem', fontWeight: 600 }}
//                   >
//                     My Progress
//                   </button>
//                 </div>

//                 <div className="p-6">
//                   {/* Overview Tab */}
//                   {activeTab === 'overview' && (
//                     <div>
//                       <h2 className="text-gray-900 mb-3" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                         {currentLesson.title}
//                       </h2>
//                       <p className="text-gray-700 mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                         {currentLesson.description}
//                       </p>
//                       <div className="flex items-center gap-4 text-gray-600 mb-6" style={{ fontSize: '0.85rem' }}>
//                         <span className="flex items-center gap-2">
//                           <Clock size={16} />
//                           {currentLesson.duration}
//                         </span>
//                         <span className="flex items-center gap-2">
//                           <BookOpen size={16} />
//                           {currentLesson.quizQuestions.length} quiz questions
//                         </span>
//                       </div>

//                       {/* Notes Section */}
//                       <div className="border-t border-gray-200 pt-6">
//                         <div className="flex items-center justify-between mb-4">
//                           <h3 className="text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                             My Notes
//                           </h3>
//                           <button
//                             onClick={() => setShowNotes(!showNotes)}
//                             className="text-[#c4151c] hover:text-[#a01117] transition-colors"
//                             style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                           >
//                             {showNotes ? 'Hide' : 'Show'}
//                           </button>
//                         </div>
//                         {showNotes && (
//                           <textarea
//                             value={notes}
//                             onChange={(e) => setNotes(e.target.value)}
//                             placeholder="Take notes while watching..."
//                             className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] resize-none"
//                             rows={6}
//                             style={{ fontSize: '0.9rem' }}
//                           />
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Resources Tab */}
//                   {activeTab === 'resources' && (
//                     <div>
//                       <h2 className="text-gray-900 mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                         Lesson Resources
//                       </h2>
//                       {currentLesson.resources.length > 0 ? (
//                         <div className="space-y-3">
//                           {currentLesson.resources.map((resource, index) => (
//                             <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-all">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 bg-[#c4151c]/10 rounded-lg flex items-center justify-center">
//                                   <FileText className="text-[#c4151c]" size={20} />
//                                 </div>
//                                 <div>
//                                   <p className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                                     {resource.name}
//                                   </p>
//                                   <p className="text-gray-600" style={{ fontSize: '0.8rem' }}>
//                                     {resource.type}
//                                   </p>
//                                 </div>
//                               </div>
//                               <button className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] transition-colors flex items-center gap-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                                 <Download size={16} />
//                                 Download
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         <p className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                           No resources available for this lesson.
//                         </p>
//                       )}
//                     </div>
//                   )}

//                   {/* Discussion Tab */}
//                   {activeTab === 'discussion' && (
//                     <div>
//                       <h2 className="text-gray-900 mb-4" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                         Discussion & Q&A
//                       </h2>

//                       {/* Post Comment */}
//                       <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
//                         <div className="flex items-start gap-3">
//                           <div className="w-10 h-10 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-full flex items-center justify-center text-white flex-shrink-0">
//                             <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>SM</span>
//                           </div>
//                           <div className="flex-1">
//                             <textarea
//                               value={newComment}
//                               onChange={(e) => setNewComment(e.target.value)}
//                               placeholder="Ask a question or share your thoughts..."
//                               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] resize-none mb-3"
//                               rows={3}
//                               style={{ fontSize: '0.9rem' }}
//                             />
//                             <div className="flex items-center justify-between">
//                               <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>
//                                 💡 Tip: Include timestamp for specific questions
//                               </p>
//                               <button
//                                 onClick={handlePostComment}
//                                 disabled={!newComment.trim()}
//                                 className="px-4 py-2 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
//                                 style={{ fontSize: '0.85rem', fontWeight: 500 }}
//                               >
//                                 <Send size={16} />
//                                 Post
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Comments List */}
//                       <div className="space-y-4">
//                         {lessonComments.map((comment) => (
//                           <div key={comment.id} className={`p-5 rounded-lg border ${comment.isPinned ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-200'}`}>
//                             {comment.isPinned && (
//                               <div className="flex items-center gap-2 mb-3 text-yellow-700">
//                                 <Pin size={14} />
//                                 <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Pinned by Instructor</span>
//                               </div>
//                             )}
//                             <div className="flex items-start gap-3">
//                               <div className={`w-10 h-10 ${comment.isInstructor ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-gray-600 to-gray-700'} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
//                                 <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{comment.userAvatar}</span>
//                               </div>
//                               <div className="flex-1">
//                                 <div className="flex items-center gap-2 mb-1">
//                                   <span className="text-gray-900" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                                     {comment.userName}
//                                   </span>
//                                   {comment.isInstructor && (
//                                     <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                                       Instructor
//                                     </span>
//                                   )}
//                                   {comment.videoTimestamp && (
//                                     <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                                       @ {comment.videoTimestamp}
//                                     </span>
//                                   )}
//                                   <span className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                                     • {comment.timestamp}
//                                   </span>
//                                 </div>
//                                 <p className="text-gray-800 mb-3" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                                   {comment.content}
//                                 </p>
//                                 <div className="flex items-center gap-4">
//                                   <button className="flex items-center gap-1 text-gray-600 hover:text-[#c4151c] transition-colors" style={{ fontSize: '0.8rem' }}>
//                                     <ThumbsUp size={14} />
//                                     <span>{comment.likes}</span>
//                                   </button>
//                                   <button
//                                     onClick={() => setReplyingTo(comment.id)}
//                                     className="flex items-center gap-1 text-gray-600 hover:text-[#c4151c] transition-colors"
//                                     style={{ fontSize: '0.8rem' }}
//                                   >
//                                     <Reply size={14} />
//                                     <span>Reply</span>
//                                   </button>
//                                 </div>

//                                 {/* Replies */}
//                                 {comment.replies.length > 0 && (
//                                   <div className="mt-4 space-y-3 pl-4 border-l-2 border-gray-200">
//                                     {comment.replies.map((reply) => (
//                                       <div key={reply.id} className="flex items-start gap-3">
//                                         <div className={`w-8 h-8 ${reply.isInstructor ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-gray-500 to-gray-600'} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
//                                           <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{reply.userAvatar}</span>
//                                         </div>
//                                         <div className="flex-1">
//                                           <div className="flex items-center gap-2 mb-1">
//                                             <span className="text-gray-900" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                                               {reply.userName}
//                                             </span>
//                                             {reply.isInstructor && (
//                                               <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full" style={{ fontSize: '0.65rem', fontWeight: 600 }}>
//                                                 Instructor
//                                               </span>
//                                             )}
//                                             <span className="text-gray-500" style={{ fontSize: '0.7rem' }}>
//                                               • {reply.timestamp}
//                                             </span>
//                                           </div>
//                                           <p className="text-gray-800" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                                             {reply.content}
//                                           </p>
//                                         </div>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 )}

//                                 {/* Reply Input */}
//                                 {replyingTo === comment.id && (
//                                   <div className="mt-4 flex items-start gap-3">
//                                     <div className="w-8 h-8 bg-gradient-to-br from-[#c4151c] to-[#a01117] rounded-full flex items-center justify-center text-white flex-shrink-0">
//                                       <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>SM</span>
//                                     </div>
//                                     <div className="flex-1">
//                                       <textarea
//                                         value={replyContent}
//                                         onChange={(e) => setReplyContent(e.target.value)}
//                                         placeholder="Write a reply..."
//                                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4151c] resize-none mb-2"
//                                         rows={2}
//                                         style={{ fontSize: '0.85rem' }}
//                                       />
//                                       <div className="flex gap-2">
//                                         <button
//                                           onClick={() => handlePostReply(comment.id)}
//                                           disabled={!replyContent.trim()}
//                                           className="px-3 py-1.5 bg-[#c4151c] text-white rounded-lg hover:bg-[#a01117] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
//                                           style={{ fontSize: '0.8rem', fontWeight: 500 }}
//                                         >
//                                           Reply
//                                         </button>
//                                         <button
//                                           onClick={() => {
//                                             setReplyingTo(null);
//                                             setReplyContent('');
//                                           }}
//                                           className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//                                           style={{ fontSize: '0.8rem', fontWeight: 500 }}
//                                         >
//                                           Cancel
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Stats Tab */}
//                   {activeTab === 'stats' && (
//                     <div>
//                       <h2 className="text-gray-900 mb-6" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
//                         Your Learning Progress
//                       </h2>
                      
//                       <div className="grid sm:grid-cols-2 gap-4 mb-6">
//                         <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
//                           <div className="flex items-center gap-3 mb-2">
//                             <BarChart className="text-blue-600" size={24} />
//                             <p className="text-blue-900" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                               Completion Rate
//                             </p>
//                           </div>
//                           <p className="text-blue-900" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
//                             {Math.round((course.completedLessons / course.totalLessons) * 100)}%
//                           </p>
//                         </div>

//                         <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
//                           <div className="flex items-center gap-3 mb-2">
//                             <TrendingUp className="text-green-600" size={24} />
//                             <p className="text-green-900" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                               Study Streak
//                             </p>
//                           </div>
//                           <p className="text-green-900" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
//                             7 days
//                           </p>
//                         </div>
//                       </div>

//                       <div className="p-5 bg-white border border-gray-200 rounded-xl mb-6">
//                         <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                           Quiz Performance
//                         </h3>
//                         <div className="space-y-3">
//                           <div>
//                             <div className="flex items-center justify-between mb-2">
//                               <span className="text-gray-700" style={{ fontSize: '0.9rem' }}>
//                                 Questions Answered
//                               </span>
//                               <span className="text-gray-900" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                                 {answeredQuestions.size} / {lessons.reduce((acc, l) => acc + l.quizQuestions.length, 0)}
//                               </span>
//                             </div>
//                             <div className="bg-gray-200 rounded-full h-2">
//                               <div
//                                 className="bg-gradient-to-r from-[#c4151c] to-orange-600 h-2 rounded-full"
//                                 style={{ width: `${(answeredQuestions.size / lessons.reduce((acc, l) => acc + l.quizQuestions.length, 0)) * 100}%` }}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
//                         <h3 className="text-purple-900 mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
//                           🎯 Keep Going!
//                         </h3>
//                         <p className="text-purple-800" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                           You're making excellent progress! Complete {course.totalLessons - course.completedLessons} more lessons to finish this course.
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Curriculum Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-8 shadow-sm">
//                 <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                   Course Curriculum
//                 </h3>
//                 <div className="space-y-2 max-h-[600px] overflow-y-auto">
//                   {lessons.map((lesson, index) => (
//                     <button
//                       key={lesson.id}
//                       onClick={() => handleLessonSelect(index)}
//                       disabled={lesson.isLocked}
//                       className={`w-full p-4 rounded-lg text-left transition-all ${
//                         currentLessonIndex === index
//                           ? 'bg-[#c4151c]/10 border-2 border-[#c4151c]'
//                           : lesson.isLocked
//                           ? 'bg-gray-50 border border-gray-200 cursor-not-allowed opacity-60'
//                           : 'border border-gray-200 hover:border-[#c4151c] bg-white hover:shadow-md'
//                       }`}
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
//                           lesson.isCompleted
//                             ? 'bg-green-100'
//                             : lesson.isLocked
//                             ? 'bg-gray-200'
//                             : currentLessonIndex === index
//                             ? 'bg-[#c4151c]/20'
//                             : 'bg-gray-100'
//                         }`}>
//                           {lesson.isLocked ? (
//                             <Lock size={14} className="text-gray-500" />
//                           ) : lesson.isCompleted ? (
//                             <CheckCircle size={14} className="text-green-600" />
//                           ) : (
//                             <Circle size={14} className="text-gray-400" />
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className={`truncate mb-1 ${
//                             currentLessonIndex === index ? 'text-[#c4151c]' : 'text-gray-900'
//                           }`} style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                             {lesson.title}
//                           </p>
//                           <div className="flex items-center gap-2 text-gray-600" style={{ fontSize: '0.75rem' }}>
//                             <Clock size={12} />
//                             <span>{lesson.duration}</span>
//                             {lesson.quizQuestions.length > 0 && (
//                               <>
//                                 <span>•</span>
//                                 <span>{lesson.quizQuestions.length} quiz{lesson.quizQuestions.length > 1 ? 'zes' : ''}</span>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </button>
//                   ))}
//                 </div>

//                 {/* Course Progress */}
//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-gray-700" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                       Overall Progress
//                     </span>
//                     <span className="text-[#c4151c]" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                       {Math.round((course.completedLessons / course.totalLessons) * 100)}%
//                     </span>
//                   </div>
//                   <div className="bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-gradient-to-r from-[#c4151c] to-orange-600 h-2.5 rounded-full transition-all"
//                       style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
//                     />
//                   </div>
//                   <p className="text-gray-600 mt-2" style={{ fontSize: '0.8rem' }}>
//                     {course.completedLessons} of {course.totalLessons} lessons completed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
