// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Users, BookOpen, Globe, Check, ArrowRight, Gift, CreditCard, Building2, TrendingUp, Award } from 'lucide-react';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
// export default function FoundationDonate() {
//   const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
//   const [amount, setAmount] = useState<number | null>(null);
//   const [customAmount, setCustomAmount] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     country: '',
//     dedication: '',
//     newsletter: true,
//   });

//   const donationAmounts = donationType === 'one-time' 
//     ? [50, 100, 250, 500, 1000, 2500]
//     : [25, 50, 100, 250, 500, 1000];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleAmountSelect = (selectedAmount: number) => {
//     setAmount(selectedAmount);
//     setCustomAmount('');
//   };

//   const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCustomAmount(e.target.value);
//     setAmount(null);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
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
//                 <Heart className="text-white" size={40} />
//               </div>
//             </div>
//             <h1 className="serif text-black mb-6">Thank You for Your Generosity!</h1>
//             <p className="text-gray-600 mb-8" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//               Your donation of ${customAmount || amount} will directly support Mongolia's brightest students in their educational journey. You are making a lasting impact on the lives of young scholars.
//             </p>
//             <div className="bg-white border border-gray-200 p-8 mb-8 text-left">
//               <h3 className="serif text-black mb-4">What Happens Next?</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-3">
//                   <div className="text-[#c4151c] flex-shrink-0">1.</div>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     You'll receive a confirmation email with your tax receipt within 24 hours
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <div className="text-[#c4151c] flex-shrink-0">2.</div>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     Your donation will be allocated to our scholarship fund immediately
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <div className="text-[#c4151c] flex-shrink-0">3.</div>
//                   <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     We'll send you quarterly updates about the scholars your donation supports
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <Link 
//               to="/foundation"
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white px-10 py-4 hover:shadow-xl transition-all rounded-md"
//               style={{ fontSize: '1rem', fontWeight: 500 }}
//             >
//               Return to Home
//               <ArrowRight size={20} />
//             </Link>
//           </div>
//         </section>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-screen md:min-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
//         {/* SVG background image */}
//         <div className="absolute inset-0 opacity-70 pointer-events-none">
//           <ImageWithFallback
//             src="/gobischolars-website/assets/donate.svg"
//             alt="GobiScholars donate background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <h1 className="serif text-white mb-8">
//             Invest in Mongolia's Future Leaders
//           </h1>
//           <p className="text-white max-w-2xl mx-auto mb-12" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             Your contribution provides life-changing educational opportunities to Mongolia's brightest students. Every dollar directly supports scholarships, mentorship, and academic excellence.
//           </p>
//         </div>
//       </section>

//       {/* Donation Form */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <form onSubmit={handleSubmit}>
//             {/* Donation Type Toggle */}
//             <div className="mb-12">
//               <div className="text-center mb-8">
//                 <h2 className="serif text-black mb-2">Choose Your Impact</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c] mx-auto" />
//               </div>

//               <div className="flex gap-4 justify-center mb-8">
//                 <button
//                   type="button"
//                   onClick={() => setDonationType('one-time')}
//                   className={`px-8 py-4 border-2 transition-all rounded-md ${
//                     donationType === 'one-time'
//                       ? 'bg-[#c4151c] text-white border-[#c4151c]'
//                       : 'bg-white text-gray-600 border-gray-300 hover:border-[#c4151c]'
//                   }`}
//                   style={{ fontSize: '1rem', fontWeight: 500 }}
//                 >
//                   One-Time Gift
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setDonationType('monthly')}
//                   className={`px-8 py-4 border-2 transition-all rounded-md ${
//                     donationType === 'monthly'
//                       ? 'bg-[#c4151c] text-white border-[#c4151c]'
//                       : 'bg-white text-gray-600 border-gray-300 hover:border-[#c4151c]'
//                   }`}
//                   style={{ fontSize: '1rem', fontWeight: 500 }}
//                 >
//                   Monthly Giving
//                 </button>
//               </div>

//               {/* Donation Amounts */}
//               <div className="grid md:grid-cols-3 gap-4 mb-6">
//                 {donationAmounts.map((donationAmount) => (
//                   <button
//                     key={donationAmount}
//                     type="button"
//                     onClick={() => handleAmountSelect(donationAmount)}
//                     className={`p-6 border-2 transition-all rounded-md ${
//                       amount === donationAmount
//                         ? 'bg-[#c4151c] text-white border-[#c4151c]'
//                         : 'bg-white text-gray-700 border-gray-300 hover:border-[#c4151c]'
//                     }`}
//                   >
//                     <div style={{ fontSize: '1.8rem', fontWeight: 600 }}>${donationAmount}</div>
//                     <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
//                       {donationType === 'monthly' ? '/month' : ''}
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               {/* Custom Amount */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Or Enter Custom Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" style={{ fontSize: '1.2rem' }}>$</span>
//                   <input
//                     type="number"
//                     value={customAmount}
//                     onChange={handleCustomAmount}
//                     placeholder="0.00"
//                     min="1"
//                     step="0.01"
//                     className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                     style={{ fontSize: '1.1rem' }}
//                   />
//                 </div>
//               </div>

//               {/* Impact Description */}
//               {(amount || customAmount) && (
//                 <div className="bg-[#c4151c]/5 border-l-4 border-[#c4151c] p-6">
//                   <p className="text-gray-700" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                     {donationType === 'monthly' && (
//                       <>
//                         <strong>Your monthly gift of ${customAmount || amount}</strong> will provide sustained support, contributing <strong>${(Number(customAmount) || amount || 0) * 12}/year</strong> to scholarships and program costs.
//                       </>
//                     )}
//                     {donationType === 'one-time' && (
//                       <>
//                         <strong>Your gift of ${customAmount || amount}</strong> can cover {
//                           (Number(customAmount) || amount || 0) >= 2500 ? 'a full semester scholarship including books and materials' :
//                           (Number(customAmount) || amount || 0) >= 1000 ? 'tuition support for one student for a semester' :
//                           (Number(customAmount) || amount || 0) >= 500 ? 'essential textbooks and learning materials for 5 students' :
//                           (Number(customAmount) || amount || 0) >= 250 ? 'SAT/GRE test preparation for 3 students' :
//                           (Number(customAmount) || amount || 0) >= 100 ? 'mentorship program participation for 2 students' :
//                           'educational resources and support for scholars'
//                         }.
//                       </>
//                     )}
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Donor Information */}
//             <div className="mb-12">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Your Information</h2>
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
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
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
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
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
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                     style={{ fontSize: '0.95rem' }}
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                   Dedication or Message (Optional)
//                 </label>
//                 <textarea
//                   name="dedication"
//                   value={formData.dedication}
//                   onChange={handleInputChange}
//                   rows={3}
//                   placeholder="In honor of someone special or a message to our scholars..."
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[#c4151c] focus:outline-none transition-colors rounded-md"
//                   style={{ fontSize: '0.95rem' }}
//                 />
//               </div>

//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   name="newsletter"
//                   checked={formData.newsletter}
//                   onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
//                   className="mt-1"
//                 />
//                 <label className="text-gray-600" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
//                   Yes, I'd like to receive updates about GobiScholars programs and the impact of my donation
//                 </label>
//               </div>
//             </div>

//             {/* Payment Information Notice */}
//             <div className="mb-12">
//               <div className="mb-8">
//                 <h2 className="serif text-black mb-2">Payment Information</h2>
//                 <div className="w-16 h-[2px] bg-[#c4151c]" />
//               </div>

//               <div className="bg-gray-50 border border-gray-200 p-8 text-center">
//                 <CreditCard className="text-gray-400 mx-auto mb-4" size={48} />
//                 <p className="text-gray-600 mb-2" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
//                   Secure payment processing powered by Stripe
//                 </p>
//                 <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>
//                   Your payment information is encrypted and secure. We never store your credit card details.
//                 </p>
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="border-t border-gray-200 pt-8">
//               <div className="bg-[#c4151c]/5 border-l-4 border-[#c4151c] p-6 mb-8">
//                 <p className="text-gray-700" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
//                   <strong>Tax Deductible:</strong> GobiScholars Foundation is a 501(c)(3) non-profit organization. Your donation is tax-deductible to the extent allowed by law. Tax ID: 00-0000000
//                 </p>
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   disabled={!amount && !customAmount}
//                   className={`inline-flex items-center gap-3 px-16 py-5 transition-all rounded-md ${
//                     amount || customAmount
//                       ? 'bg-gradient-to-r from-[#c4151c] to-[#a01117] text-white hover:shadow-2xl hover:scale-105'
//                       : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                   }`}
//                   style={{ fontSize: '1.1rem', fontWeight: 500 }}
//                 >
//                   <Heart size={22} />
//                   Complete Donation
//                   <ArrowRight size={22} />
//                 </button>
//                 <p className="text-gray-500 mt-6" style={{ fontSize: '0.9rem' }}>
//                   Questions? Contact us at <span className="text-[#c4151c]">donate@gobischolars.com</span>
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Recognition Levels */}
//       <section className="py-32 bg-[#F8F8F8]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Donor Recognition</h2>
//             <p className="text-gray-600 mb-16" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
//               We honor our generous supporters at various giving levels
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="bg-white border border-gray-200 p-8 text-center">
//               <Gift className="text-[#c4151c] mx-auto mb-4" size={40} />
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>Friend</h4>
//               <div className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>$100 - $499</div>
//               <ul className="text-left space-y-2">
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Quarterly newsletter</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Donor recognition</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white border border-gray-200 p-8 text-center">
//               <Users className="text-[#c4151c] mx-auto mb-4" size={40} />
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>Supporter</h4>
//               <div className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>$500 - $2,499</div>
//               <ul className="text-left space-y-2">
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>All Friend benefits</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Annual report</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Scholar updates</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white border border-gray-200 p-8 text-center">
//               <Award className="text-[#c4151c] mx-auto mb-4" size={40} />
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>Patron</h4>
//               <div className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>$2,500 - $9,999</div>
//               <ul className="text-left space-y-2">
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>All Supporter benefits</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Website recognition</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Invitation to events</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white border-2 border-[#c4151c] p-8 text-center">
//               <TrendingUp className="text-[#c4151c] mx-auto mb-4" size={40} />
//               <h4 className="serif text-black mb-2" style={{ fontSize: '1.2rem' }}>Benefactor</h4>
//               <div className="text-gray-500 mb-4" style={{ fontSize: '0.9rem' }}>$10,000+</div>
//               <ul className="text-left space-y-2">
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>All Patron benefits</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Named scholarship</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Direct scholar contact</span>
//                 </li>
//                 <li className="flex gap-2 text-gray-600" style={{ fontSize: '0.85rem' }}>
//                   <Check className="text-[#c4151c] flex-shrink-0" size={16} />
//                   <span>Board engagement</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Ways to Give */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <div className="w-16 h-[2px] bg-[#c4151c] mx-auto mb-8" />
//             <h2 className="serif text-black mb-6">Other Ways to Give</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="text-center">
//               <Building2 className="text-[#c4151c] mx-auto mb-6" size={48} />
//               <h3 className="serif text-black mb-4">Corporate Matching</h3>
//               <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Many companies match employee donations. Check if your employer participates to double your impact.
//               </p>
//               <a href="mailto:corporate@gobischolars.com" className="text-[#c4151c] hover:underline" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Learn More →
//               </a>
//             </div>

//             <div className="text-center">
//               <Globe className="text-[#c4151c] mx-auto mb-6" size={48} />
//               <h3 className="serif text-black mb-4">Wire Transfer</h3>
//               <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 For large donations, wire transfers offer a direct and secure method. Contact us for banking details.
//               </p>
//               <a href="mailto:donate@gobischolars.com" className="text-[#c4151c] hover:underline" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Get Details →
//               </a>
//             </div>

//             <div className="text-center">
//               <BookOpen className="text-[#c4151c] mx-auto mb-6" size={48} />
//               <h3 className="serif text-black mb-4">Legacy Giving</h3>
//               <p className="text-gray-600 mb-6" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
//                 Include GobiScholars in your estate planning to create a lasting legacy for Mongolian education.
//               </p>
//               <a href="mailto:legacy@gobischolars.com" className="text-[#c4151c] hover:underline" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
//                 Explore Options →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }