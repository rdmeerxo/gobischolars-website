// import React, { useState } from 'react';
// import { Bot, Send, Sparkles, BookOpen, School, FileText, Target, TrendingUp, MessageSquare, History, Star, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
// import DashboardSidebar from './DashboardSidebar';

// export default function AICounseling() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
//   const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string; grammarCheck?: { errors: number; suggestions: string[] } }>>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [showGrammarPanel, setShowGrammarPanel] = useState(false);

//   const counselingTopics = [
//     {
//       id: 'essay-review',
//       title: 'Essay Review & Grammar Check',
//       icon: FileText,
//       color: 'bg-blue-500',
//       description: 'Get AI-powered feedback on structure, grammar, and style. Note: We provide guidance to improve YOUR essay, not write it for you.',
//       prompts: [
//         'Check my essay for grammar errors',
//         'Help me brainstorm essay topics',
//         'Improve my essay structure',
//       ],
//     },
//     {
//       id: 'college-selection',
//       title: 'College Selection Guide',
//       icon: School,
//       color: 'bg-purple-500',
//       description: 'Find the best college fit based on your profile, interests, and career goals.',
//       prompts: [
//         'Which colleges match my profile?',
//         'Compare reach vs safety schools',
//         'Tell me about liberal arts colleges',
//       ],
//     },
//     {
//       id: 'test-prep',
//       title: 'Test Preparation Strategy',
//       icon: Target,
//       color: 'bg-green-500',
//       description: 'Create personalized study plans for SAT, ACT, TOEFL, and other standardized tests.',
//       prompts: [
//         'Create an SAT study schedule',
//         'How to improve my math score',
//         'TOEFL speaking tips',
//       ],
//     },
//     {
//       id: 'application-strategy',
//       title: 'Application Strategy',
//       icon: TrendingUp,
//       color: 'bg-orange-500',
//       description: 'Plan your application timeline, manage deadlines, and optimize your college list.',
//       prompts: [
//         'When should I start applications?',
//         'Early Decision vs Regular Decision',
//         'How many colleges should I apply to?',
//       ],
//     },
//     {
//       id: 'extracurriculars',
//       title: 'Extracurricular Planning',
//       icon: Star,
//       color: 'bg-pink-500',
//       description: 'Build a compelling extracurricular profile that showcases your passions and leadership.',
//       prompts: [
//         'What activities should I pursue?',
//         'How to show leadership',
//         'Summer program recommendations',
//       ],
//     },
//     {
//       id: 'interview-prep',
//       title: 'Interview Preparation',
//       icon: MessageSquare,
//       color: 'bg-cyan-500',
//       description: 'Practice common interview questions and learn techniques for successful college interviews.',
//       prompts: [
//         'Common interview questions',
//         'Tell me about yourself - practice',
//         'How to handle difficult questions',
//       ],
//     },
//   ];

//   const recentConversations = [
//     { id: 1, topic: 'Essay Review', preview: 'Reviewed my Common App personal statement...', date: 'Today' },
//     { id: 2, topic: 'College Selection', preview: 'Discussed reach schools in California...', date: 'Yesterday' },
//     { id: 3, topic: 'Test Prep', preview: 'Created SAT study schedule for December...', date: '2 days ago' },
//   ];

//   const handleTopicSelect = (topicId: string) => {
//     setSelectedTopic(topicId);
//     const topic = counselingTopics.find(t => t.id === topicId);
//     const welcomeMessage = topicId === 'essay-review'
//       ? `Hi! I'm your AI counseling assistant for essay guidance. I can help you improve your writing through grammar checks, structural feedback, and style suggestions. 

// ⚠️ Important: I'm here to help YOU become a better writer, not to write your essays for you. You'll need to apply for college with YOUR own voice and work. I'll provide guidance, corrections, and suggestions, but the final essay must be yours.

// Paste your essay text below, and I'll provide detailed feedback!`
//       : `Hi! I'm your AI counseling assistant. I'm here to help you with ${topic?.title.toLowerCase()}. ${topic?.description} How can I assist you today?`;
    
//     setMessages([
//       {
//         role: 'ai',
//         content: welcomeMessage,
//       },
//     ]);
//   };

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;

//     const newUserMessage = { role: 'user' as const, content: inputMessage };
//     setMessages([...messages, newUserMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     // Simulate AI response
//     setTimeout(() => {
//       const response = generateAIResponse(inputMessage, selectedTopic);
//       const aiResponse = {
//         role: 'ai' as const,
//         content: response.content,
//         grammarCheck: response.grammarCheck,
//       };
//       setMessages(prev => [...prev, aiResponse]);
//       setIsTyping(false);
//       if (response.grammarCheck) {
//         setShowGrammarPanel(true);
//       }
//     }, 1500);
//   };

//   const generateAIResponse = (message: string, topic: string | null): { content: string; grammarCheck?: { errors: number; suggestions: string[] } } => {
//     // This would be replaced with actual AI API call
//     const lowerMessage = message.toLowerCase();
    
//     // Check if this is an essay-review request with text to analyze
//     if (topic === 'essay-review' && message.length > 100) {
//       // Simulate grammar check
//       const grammarErrors = [
//         'Line 1: "it\'s" should be "its" (possessive, not contraction)',
//         'Line 3: Consider varying sentence structure - three sentences in a row start with "I"',
//         'Line 5: "alot" should be "a lot" (two words)',
//         'Suggestion: Your opening hook is strong, but consider making it more specific',
//         'Suggestion: Transition between paragraphs 2 and 3 could be smoother',
//       ];

//       return {
//         content: `I've analyzed your essay for grammar, style, and structure. Here's my feedback:

// **Grammar & Mechanics:** Found ${grammarErrors.length} items that need attention (see panel on the right).

// **Structure:** Your essay has good flow overall. The introduction effectively hooks the reader, but consider strengthening the conclusion.

// **Voice & Authenticity:** This sounds like YOUR authentic voice, which is excellent. Make sure this remains true throughout your revisions.

// **Content:** The core message is clear, but could benefit from more specific examples and details.

// **Next Steps:**
// 1. Review the grammar suggestions in the panel
// 2. Add 2-3 more specific examples in the body
// 3. Strengthen your conclusion with a forward-looking statement
// 4. Read it aloud to catch any awkward phrasing

// Remember: These are suggestions to help YOU improve YOUR essay. The final decisions and writing must be yours!`,
//         grammarCheck: {
//           errors: grammarErrors.length,
//           suggestions: grammarErrors,
//         },
//       };
//     }

//     const responses: { [key: string]: string } = {
//       'essay-review': 'I\'d be happy to provide guidance on your essay! Please paste your essay text (at least a paragraph), and I\'ll provide detailed feedback on grammar, structure, and style. Remember: I\'m here to help you improve YOUR writing, not to write it for you.',
//       'college-selection': 'To recommend the best colleges for you, I need to know more about your profile. Could you share: 1) Your intended major or academic interests, 2) Your current GPA and test scores, 3) Your location preferences, 4) What you\'re looking for in a college (size, campus culture, etc.)?',
//       'test-prep': 'Let\'s create a personalized study plan! First, tell me: 1) Which test are you preparing for (SAT, ACT, TOEFL)? 2) When is your test date? 3) What\'s your current score or practice test baseline? 4) How many hours per week can you dedicate to studying?',
//       'application-strategy': 'Great question! Your application strategy should be tailored to your profile. The typical timeline is: Junior Spring - take standardized tests, Summer - visit colleges and draft essays, Senior Fall - submit applications. I can help you create a detailed timeline based on your specific situation.',
//       'extracurriculars': 'Building a strong extracurricular profile is about depth over breadth. Rather than joining many clubs, focus on 3-5 activities where you can demonstrate: 1) Sustained commitment (2+ years), 2) Leadership roles, 3) Meaningful impact. What are your current interests and activities?',
//       'interview-prep': 'Let\'s practice! A great way to start is with the "Tell me about yourself" question. Here\'s a framework: 1) Brief background (where you\'re from, family), 2) Academic interests and why, 3) Key extracurriculars or passions, 4) Why this college. Would you like to practice this now?',
//     };

//     return {
//       content: responses[topic || ''] || 'I understand your question. Could you provide more details so I can give you the most helpful guidance?',
//     };
//   };

//   const handleQuickPrompt = (prompt: string) => {
//     setInputMessage(prompt);
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
//         <div className="h-screen flex flex-col">
//           {/* Header */}
//           <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                 <Bot size={28} />
//               </div>
//               <div>
//                 <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600 }}>
//                   AI Counseling
//                 </h1>
//                 <p style={{ fontSize: '1rem', opacity: 0.9 }}>
//                   Get instant guidance powered by artificial intelligence
//                 </p>
//               </div>
//             </div>
//           </div>

//           {!selectedTopic ? (
//             // Topic Selection View
//             <div className="flex-1 overflow-y-auto p-6 sm:p-8">
//               {/* Recent Conversations */}
//               <div className="mb-8">
//                 <div className="flex items-center gap-2 mb-4">
//                   <History size={20} className="text-gray-600" />
//                   <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                     Recent Conversations
//                   </h2>
//                 </div>
//                 <div className="grid sm:grid-cols-3 gap-4">
//                   {recentConversations.map((conv) => (
//                     <div key={conv.id} className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-lg transition-all cursor-pointer">
//                       <p className="text-gray-900 mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                         {conv.topic}
//                       </p>
//                       <p className="text-gray-600 mb-2 line-clamp-2" style={{ fontSize: '0.8rem' }}>
//                         {conv.preview}
//                       </p>
//                       <p className="text-gray-500" style={{ fontSize: '0.75rem' }}>
//                         {conv.date}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Topic Selection */}
//               <div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <Sparkles size={20} className="text-gray-600" />
//                   <h2 className="text-gray-900" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
//                     Choose a Topic
//                   </h2>
//                 </div>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {counselingTopics.map((topic) => {
//                     const Icon = topic.icon;
//                     return (
//                       <div
//                         key={topic.id}
//                         onClick={() => handleTopicSelect(topic.id)}
//                         className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group"
//                       >
//                         <div className={`w-14 h-14 ${topic.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
//                           <Icon size={28} className="text-white" />
//                         </div>
//                         <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                           {topic.title}
//                         </h3>
//                         <p className="text-gray-600 mb-4" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
//                           {topic.description}
//                         </p>
//                         <div className="space-y-2">
//                           {topic.prompts.slice(0, 2).map((prompt, idx) => (
//                             <div key={idx} className="text-gray-500 flex items-center gap-2" style={{ fontSize: '0.75rem' }}>
//                               <div className="w-1 h-1 bg-gray-400 rounded-full" />
//                               {prompt}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // Chat View
//             <div className="flex-1 flex overflow-hidden">
//               {/* Main Chat Area */}
//               <div className="flex-1 flex flex-col overflow-hidden">
//               {/* Back Button */}
//               <div className="px-6 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
//                 <button
//                   onClick={() => setSelectedTopic(null)}
//                   className="text-gray-600 hover:text-gray-900 transition-colors"
//                   style={{ fontSize: '0.9rem', fontWeight: 500 }}
//                 >
//                   ← Back to Topics
//                 </button>
//                 <div className="flex items-center gap-2">
//                   <div className={`w-3 h-3 ${counselingTopics.find(t => t.id === selectedTopic)?.color} rounded-full`} />
//                   <span className="text-gray-700" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                     {counselingTopics.find(t => t.id === selectedTopic)?.title}
//                   </span>
//                 </div>
//               </div>

//               {/* Messages Area */}
//               <div className="flex-1 overflow-y-auto p-6 space-y-4">
//                 {messages.map((message, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                   >
//                     <div
//                       className={`max-w-2xl px-5 py-4 rounded-2xl ${
//                         message.role === 'user'
//                           ? 'bg-[#c4151c] text-white'
//                           : 'bg-white border border-gray-200 text-gray-900'
//                       }`}
//                       style={{ fontSize: '0.95rem', lineHeight: 1.6 }}
//                     >
//                       {message.role === 'ai' && (
//                         <div className="flex items-center gap-2 mb-2">
//                           <Bot size={18} className="text-purple-600" />
//                           <span className="text-purple-600" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
//                             AI Counselor
//                           </span>
//                           {message.grammarCheck && (
//                             <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
//                               <CheckCircle2 size={12} />
//                               Grammar Check Complete
//                             </span>
//                           )}
//                         </div>
//                       )}
//                       <div dangerouslySetInnerHTML={{ __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }} />
//                     </div>
//                   </div>
//                 ))}

//                 {isTyping && (
//                   <div className="flex justify-start">
//                     <div className="bg-white border border-gray-200 px-5 py-4 rounded-2xl">
//                       <div className="flex items-center gap-2">
//                         <div className="flex gap-1">
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
//                         </div>
//                         <span className="text-gray-500" style={{ fontSize: '0.85rem' }}>AI is typing...</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Quick Prompts */}
//               {messages.length <= 1 && (
//                 <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
//                   <p className="text-gray-600 mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
//                     Quick prompts:
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {counselingTopics.find(t => t.id === selectedTopic)?.prompts.map((prompt, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => handleQuickPrompt(prompt)}
//                         className="px-4 py-2 bg-white border border-gray-300 hover:border-[#c4151c] rounded-lg transition-colors"
//                         style={{ fontSize: '0.85rem' }}
//                       >
//                         {prompt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Input Area */}
//               <div className="p-6 bg-white border-t border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <input
//                     type="text"
//                     value={inputMessage}
//                     onChange={(e) => setInputMessage(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                     placeholder="Type your message..."
//                     className="flex-1 px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#c4151c] transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                   <button
//                     onClick={handleSendMessage}
//                     disabled={!inputMessage.trim()}
//                     className="px-6 py-4 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                     style={{ fontSize: '0.9rem', fontWeight: 600 }}
//                   >
//                     <Send size={18} />
//                     Send
//                   </button>
//                 </div>
//               </div>
//               </div>

//               {/* Grammar Check Side Panel */}
//               {showGrammarPanel && messages.some(m => m.grammarCheck) && (
//                 <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <CheckCircle2 className="text-green-600" size={20} />
//                         <h3 className="text-gray-900" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
//                           Grammar & Style Check
//                         </h3>
//                       </div>
//                       <button
//                         onClick={() => setShowGrammarPanel(false)}
//                         className="text-gray-500 hover:text-gray-700"
//                       >
//                         ✕
//                       </button>
//                     </div>

//                     {/* Important Notice */}
//                     <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
//                       <div className="flex items-start gap-2">
//                         <Lightbulb className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
//                         <div>
//                           <p className="text-amber-900 mb-1" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                             Remember
//                           </p>
//                           <p className="text-amber-800" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
//                             These are suggestions to help improve YOUR writing. You must apply with your own work.
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {messages.filter(m => m.grammarCheck).map((message, idx) => (
//                       <div key={idx} className="space-y-3">
//                         <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
//                           <p className="text-green-900 mb-1" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
//                             ✓ Analysis Complete
//                           </p>
//                           <p className="text-green-800" style={{ fontSize: '0.85rem' }}>
//                             Found {message.grammarCheck!.errors} items for review
//                           </p>
//                         </div>

//                         <div>
//                           <h4 className="text-gray-900 mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
//                             Suggestions
//                           </h4>
//                           <div className="space-y-2">
//                             {message.grammarCheck!.suggestions.map((suggestion, sIdx) => (
//                               <div
//                                 key={sIdx}
//                                 className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-all"
//                               >
//                                 <div className="flex items-start gap-2">
//                                   {suggestion.toLowerCase().includes('suggestion') ? (
//                                     <Lightbulb className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
//                                   ) : (
//                                     <AlertTriangle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
//                                   )}
//                                   <p className="text-gray-800" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
//                                     {suggestion}
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                           <p className="text-blue-900 mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
//                             💡 Pro Tip
//                           </p>
//                           <p className="text-blue-800" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
//                             Review each suggestion carefully and decide which changes fit YOUR voice and message. Not all suggestions need to be applied.
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }
