// import React, { useState } from 'react';
// import { ArrowRight, Lock, Mail, Eye, EyeOff } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function AcademyLogin() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Login attempt:', formData);
//     // TODO: Implement actual authentication
//     alert('Login functionality will be available soon for subscription-based online programs.');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 sm:px-6 pt-28 pb-12">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-12">
//           <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#c4151c]/10 border border-[#c4151c]/20 mb-4 sm:mb-6 rounded-lg">
//             <span style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', letterSpacing: '0.2em', fontWeight: 500, color: '#c4151c' }}>
//               GOBISCHOLARS ACADEMY
//             </span>
//           </div>
//           <h1 className="serif text-black mb-3 sm:mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
//             Welcome Back
//           </h1>
//           <p className="text-gray-600 px-4" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.7 }}>
//             Sign in to access your premium programs and resources
//           </p>
//         </div>

//         {/* Login Form */}
//         <div className="bg-white border-2 border-gray-200 p-6 sm:p-10 shadow-lg rounded-lg">
//           <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//             {/* Email Field */}
//             <div>
//               <label className="block text-gray-700 mb-2 sm:mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                   <Mail size={20} />
//                 </div>
//                 <input
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full pl-12 pr-5 py-3 sm:py-4 border-2 border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
//                   placeholder="your@email.com"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-gray-700 mb-2 sm:mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                   <Lock size={20} />
//                 </div>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   className="w-full pl-12 pr-14 py-3 sm:py-4 border-2 border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-lg"
//                   style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 rounded border-gray-300 text-[#c4151c] focus:ring-[#c4151c]"
//                 />
//                 <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                   Remember me
//                 </span>
//               </label>
//               <button
//                 type="button"
//                 className="text-[#c4151c] hover:underline"
//                 style={{ fontSize: '0.9rem', fontWeight: 500 }}
//               >
//                 Forgot password?
//               </button>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate('/academy/dashboard');
//               }}
//               className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-6 sm:px-8 py-4 sm:py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-lg"
//               style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: 500 }}
//             >
//               Sign In
//               <ArrowRight size={20} />
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center gap-4 my-6 sm:my-8">
//             <div className="flex-1 h-[1px] bg-gray-200" />
//             <span className="text-gray-400" style={{ fontSize: '0.85rem' }}>
//               OR
//             </span>
//             <div className="flex-1 h-[1px] bg-gray-200" />
//           </div>

//           {/* Sign Up Link */}
//           <div className="text-center">
//             <p className="text-gray-600 mb-3 sm:mb-4" style={{ fontSize: '0.95rem' }}>
//               Don't have an account?
//             </p>
//             <button
//               onClick={() => navigate('/academy/programs')}
//               className="text-[#c4151c] hover:underline"
//               style={{ fontSize: '0.95rem', fontWeight: 500 }}
//             >
//               View our programs and apply
//             </button>
//           </div>
//         </div>

//         {/* Coming Soon Notice */}
//         <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-lg">
//           <div className="flex items-start gap-3">
//             <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
//               i
//             </div>
//             <div>
//               <h4 className="text-blue-900 mb-2" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
//                 Subscription Programs Coming Soon
//               </h4>
//               <p className="text-blue-700" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', lineHeight: 1.6 }}>
//                 We're developing subscription-based online programs to make premium educational content accessible to students anywhere. Stay tuned for updates!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Back to Home */}
//         <div className="text-center mt-6 sm:mt-8">
//           <button
//             onClick={() => navigate('/academy')}
//             className="text-gray-600 hover:text-[#c4151c] transition-colors"
//             style={{ fontSize: '0.9rem' }}
//           >
//             ← Back to Academy Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }