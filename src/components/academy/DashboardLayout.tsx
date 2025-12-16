// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Footer from '../Footer';

// interface DashboardLayoutProps {
//   children: React.ReactNode;
//   type: 'foundation' | 'academy';
// }

// export default function DashboardLayout({ children, type }: DashboardLayoutProps) {
//   const location = useLocation();
  
//   // Check if on dashboard pages
//   const isDashboardPage = type === 'academy' && (
//     location.pathname.startsWith('/academy/dashboard') ||
//     location.pathname.startsWith('/academy/courses') ||
//     location.pathname.startsWith('/academy/assignments') ||
//     location.pathname.startsWith('/academy/submissions') ||
//     location.pathname.startsWith('/academy/progress') ||
//     location.pathname.startsWith('/academy/ai-counseling') ||
//     location.pathname.startsWith('/academy/resources') ||
//     location.pathname.startsWith('/academy/school-selection') ||
//     location.pathname.startsWith('/academy/counseling') ||
//     location.pathname.startsWith('/academy/settings')
//   );
  
//   return (
//     <>
//       {children}
//       {!isDashboardPage && <Footer type={type} />}
//     </>
//   );
// }
