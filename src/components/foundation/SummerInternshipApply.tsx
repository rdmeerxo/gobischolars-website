// import React, { useState } from 'react';
// import { ArrowRight, Upload, CheckCircle, Calendar, MapPin, AlertCircle } from 'lucide-react';

// export default function SummerInternshipApply() {
//   const [formData, setFormData] = useState({
//     // Personal Information
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     university: '',
//     graduationYear: '',
//     major: '',
//     gpa: '',
    
//     // Position
//     position: '',
    
//     // Reference
//     referenceName: '',
//     referenceTitle: '',
//     referenceOrganization: '',
//     referenceEmail: '',
    
//     // Essays
//     motivationLetter: '',
//     lessonPlan: '',
    
//     // Files (we'll just track file names in frontend)
//     resume: null,
//     transcript: null,
//     portfolio: null,
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({
//         ...formData,
//         [fieldName]: e.target.files[0]
//       });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real application, this would send to a backend
//     setSubmitted(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (submitted) {
//     return (
//       <div className="bg-white min-h-screen">
//         <section className="py-32 bg-gradient-to-br from-[#c4151c]/5 to-white">
//           <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
//             <div className="mb-8">
//               <div className="w-20 h-20 bg-gradient-to-r from-[#c4151c] to-[#a01117] rounded-full flex items-center justify-center mx-auto mb-8">
//                 <CheckCircle className="text-white" size={40} />
//               </div>
//             </div>
//             <h1 className="serif text-black mb-6">Application Submitted Successfully!</h1>
//             <p className="text-gray-600 mb-8" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//               Thank you for applying to the GobiScholars Summer Internship Program 2025. We have received your application and will review it carefully.
//             </p>
//             <div className="bg-white border border-gray-200 p-8 mb-8 text-left">
//               <h3 className="serif text-black mb-4">What Happens Next?</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-3">
//                   <div className="text-[#c4151c] flex-shrink-0">1.</div>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You'll receive a confirmation email within 24 hours
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <div className="text-[#c4151c] flex-shrink-0">2.</div>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Our team will review your application materials
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <div className="text-[#c4151c] flex-shrink-0">3.</div>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Qualified candidates will be invited for second-stage interviews on a rolling basis
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <a 
//               href="/foundation"
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               Return to Home
//               <ArrowRight size={20} />
//             </a>
//           </div>
//         </section>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       {/* Header */}
//       <section className="py-20 bg-gradient-to-br from-[#c4151c]/5 to-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-8">
//             <div className="inline-block mb-6">
//               <div className="px-6 py-2 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 600 }}>
//                 APPLICATION DEADLINE: JANUARY 20, 2025
//               </div>
//             </div>
//             <h1 className="serif text-black mb-6">Summer Internship Program Application</h1>
//             <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               Join us for a transformative two-month experience in Mongolia. Complete the application below to be considered.
//             </p>
//           </div>

//           {/* Key Info */}
//           <div className="grid md:grid-cols-2 gap-6 mb-12">
//             <div className="bg-white border-l-4 border-[#c4151c] p-6">
//               <Calendar className="text-[#c4151c] mb-3" size={24} />
//               <div className="text-gray-500 mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>PROGRAM DATES</div>
//               <div className="serif text-black" style={{ fontSize: '1.2rem' }}>June 10 - August 10, 2025</div>
//             </div>
//             <div className="bg-white border-l-4 border-gray-300 p-6">
//               <MapPin className="text-gray-500 mb-3" size={24} />
//               <div className="text-gray-500 mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>LOCATION</div>
//               <div className="serif text-black" style={{ fontSize: '1.2rem' }}>Ulaanbaatar, Mongolia</div>
//             </div>
//           </div>

//           <div className="bg-[#c4151c]/5 border-l-4 border-[#c4151c] p-6 mb-12">
//             <div className="flex gap-3">
//               <AlertCircle className="text-[#c4151c] flex-shrink-0 mt-1" size={20} />
//               <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 <strong>Rolling Admissions:</strong> We review applications and conduct interviews on a rolling basis. Apply early to secure your spot!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Application Form */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <form onSubmit={handleSubmit}>
//             {/* Personal Information */}
//             <div className="mb-16">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Personal Information</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     First Name <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Last Name <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Email Address <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Phone Number <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Academic Information */}
//             <div className="mb-16">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Academic Information</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   University <span className="text-[#c4151c]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="university"
//                   value={formData.university}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>

//               <div className="grid md:grid-cols-3 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Expected Graduation Year <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="graduationYear"
//                     value={formData.graduationYear}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="e.g., 2026"
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Major <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="major"
//                     value={formData.major}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     GPA (4.0 scale) <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="gpa"
//                     value={formData.gpa}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="e.g., 3.5"
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Position Selection */}
//             <div className="mb-16">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Position of Interest</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Select Position <span className="text-[#c4151c]">*</span>
//                 </label>
//                 <select
//                   name="position"
//                   value={formData.position}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                   style={{ fontSize: '0.95rem' }}
//                 >
//                   <option value="">-- Select a position --</option>
//                   <option value="marketing">Marketing & Business Development</option>
//                   <option value="writing">English Writing & Essay Classes</option>
//                   <option value="college-app">College Application Guidance</option>
//                   <option value="computer-science">Computer Science & Technology</option>
//                   <option value="engineering">Engineering</option>
//                   <option value="environmental">Environmental Studies</option>
//                   <option value="political-science">Political Science</option>
//                   <option value="other">Other (please specify in motivation letter)</option>
//                 </select>
//               </div>
//             </div>

//             {/* Reference Information */}
//             <div className="mb-16">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Reference Information</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//                 <p className="text-gray-600 mt-2" style={{ fontSize: '0.9rem' }}>
//                   Provide contact information for one reference (professor or previous employer)
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Reference Full Name <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="referenceName"
//                     value={formData.referenceName}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Title/Role <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="referenceTitle"
//                     value={formData.referenceTitle}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Organization/Institution <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="referenceOrganization"
//                     value={formData.referenceOrganization}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Reference Email <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="referenceEmail"
//                     value={formData.referenceEmail}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Written Materials */}
//             <div className="mb-16">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Written Materials</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//               </div>

//               <div className="mb-8">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Motivation Letter <span className="text-[#c4151c]">*</span>
//                 </label>
//                 <p className="text-gray-600 mb-3" style={{ fontSize: '0.85rem' }}>
//                   Indicate the subject you're interested in teaching and explain your reasons for choosing it, including how your background and interests align.
//                 </p>
//                 <textarea
//                   name="motivationLetter"
//                   value={formData.motivationLetter}
//                   onChange={handleInputChange}
//                   required
//                   rows={8}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Lesson Plan Draft <span className="text-[#c4151c]">*</span>
//                 </label>
//                 <p className="text-gray-600 mb-3" style={{ fontSize: '0.85rem' }}>
//                   Provide a concise lesson plan outlining your teaching subject, key objectives, and methods to engage 15-20 students from various backgrounds.
//                 </p>
//                 <textarea
//                   name="lessonPlan"
//                   value={formData.lessonPlan}
//                   onChange={handleInputChange}
//                   required
//                   rows={8}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>
//             </div>

//             {/* File Uploads */}
//             <div className="mb-16">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Supporting Documents</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//               </div>

//               <div className="space-y-6">
//                 <div className="border border-gray-300 p-6">
//                   <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Resume/CV <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border-2 border-[#c4151c] text-[#c4151c] hover:bg-[#c4151c] hover:text-white transition-all">
//                       <Upload size={18} />
//                       <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Choose File</span>
//                       <input
//                         type="file"
//                         onChange={(e) => handleFileChange(e, 'resume')}
//                         accept=".pdf,.doc,.docx"
//                         required
//                         className="hidden"
//                       />
//                     </label>
//                     {formData.resume && (
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         {(formData.resume as File).name}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-500 mt-2" style={{ fontSize: '0.8rem' }}>Accepted formats: PDF, DOC, DOCX</p>
//                 </div>

//                 <div className="border border-gray-300 p-6">
//                   <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Academic Transcript <span className="text-[#c4151c]">*</span>
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border-2 border-[#c4151c] text-[#c4151c] hover:bg-[#c4151c] hover:text-white transition-all">
//                       <Upload size={18} />
//                       <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Choose File</span>
//                       <input
//                         type="file"
//                         onChange={(e) => handleFileChange(e, 'transcript')}
//                         accept=".pdf"
//                         required
//                         className="hidden"
//                       />
//                     </label>
//                     {formData.transcript && (
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         {(formData.transcript as File).name}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-500 mt-2" style={{ fontSize: '0.8rem' }}>Unofficial transcript accepted (official required upon acceptance)</p>
//                 </div>

//                 <div className="border border-gray-300 p-6">
//                   <label className="block text-gray-700 mb-3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Portfolio or Additional Materials (Optional)
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-400 text-gray-600 hover:bg-gray-100 transition-all">
//                       <Upload size={18} />
//                       <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Choose File</span>
//                       <input
//                         type="file"
//                         onChange={(e) => handleFileChange(e, 'portfolio')}
//                         accept=".pdf,.doc,.docx,.zip"
//                         className="hidden"
//                       />
//                     </label>
//                     {formData.portfolio && (
//                       <span className="text-gray-600" style={{ fontSize: '0.9rem' }}>
//                         {(formData.portfolio as File).name}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-500 mt-2" style={{ fontSize: '0.8rem' }}>Work samples, certificates, or awards</p>
//                 </div>
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="border-t border-gray-200 pt-8">
//               <div className="bg-[#c4151c]/5 border-l-4 border-[#c4151c] p-6 mb-8">
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                   By submitting this application, you confirm that all information provided is accurate and complete. You also acknowledge that this is an unpaid internship and you are responsible for your own expenses.
//                 </p>
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-16 py-5 hover:shadow-2xl hover:scale-105 transition-all rounded-md"
//                   style={{ fontSize: '1.1rem', fontWeight: 500 }}
//                 >
//                   Submit Application
//                   <ArrowRight size={22} />
//                 </button>
//                 <p className="text-gray-500 mt-6" style={{ fontSize: '0.9rem' }}>
//                   Questions? Contact us at <span className="text-[#c4151c]">info@gobischolars.com</span>
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
