import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InitialChoice from './components/InitialChoice';
import ScrollToTop from './components/ScrollToToop';
// import HomePage from './components/HomePage';
import FoundationHome from './components/foundation/FoundationHome';
import FoundationAbout from './components/foundation/FoundationAbout';
import FoundationPrograms from './components/foundation/FoundationPrograms';
import FoundationScholars from './components/foundation/FoundationScholars';
import FoundationResearch from './components/foundation/FoundationResearch';
import FoundationTeam from './components/foundation/FoundationTeam';
// import SummerInternshipApply from './components/foundation/SummerInternshipApply';
// import FoundationDonate from './components/foundation/FoundationDonate';
// import FoundationCareers from './components/foundation/FoundationCareers';
// import FoundationInternships from './components/foundation/FoundationInternships';
// import FoundationVolunteer from './components/foundation/FoundationVolunteer';
// import FoundationPublications from './components/foundation/FoundationPublications';
// import FoundationPartnerships from './components/foundation/FoundationPartnerships';
// import FoundationPartnershipOpportunities from './components/foundation/FoundationPartnershipOpportunities';
// import JointResearchProjects from './components/foundation/partnerships/JointResearchProjects';
// import KnowledgeExchange from './components/foundation/partnerships/KnowledgeExchange';
// import CapacityBuilding from './components/foundation/partnerships/CapacityBuilding';
// import PolicyDevelopment from './components/foundation/partnerships/PolicyDevelopment';
// import ResearchPaper from './components/foundation/ResearchPaper';
import AcademyHome from './components/academy/AcademyHome';
import AcademyAbout from './components/academy/AcademyAbout';
import AcademyPrograms from './components/academy/AcademyPrograms';
// import AcademyLogin from './components/academy/AcademyLogin';
// import StudentDashboard from './components/academy/StudentDashboard';
// import MyCourses from './components/academy/MyCourses';
// import CoursePage from './components/academy/CoursePage';
// import Progress from './components/academy/Progress';
// import Settings from './components/academy/Settings';
// import Resources from './components/academy/Resources';
// import SchoolSelection from './components/academy/SchoolSelection';
// import Counseling from './components/academy/Counseling';
// import Assignments from './components/academy/Assignments';
// import Submissions from './components/academy/Submissions';
// import AICounseling from './components/academy/AICounseling';
// import DashboardLayout from './components/academy/DashboardLayout';
// import TeacherDashboard from './components/teacher/TeacherDashboard';
// import TeacherStudents from './components/teacher/Students';
// import TeacherAssignments from './components/teacher/Assignments';
// import TeacherAnalytics from './components/teacher/Analytics';
// import AdminDashboard from './components/admin/AdminDashboard';
// import AdminUserManagement from './components/admin/UserManagement';
// import FallScholars from './components/academy/programs/FallScholars';
// import WinterScholars from './components/academy/programs/WinterScholars';
// import Bootcamp from './components/academy/programs/Bootcamp';
// import TwelveScholarsSupport from './components/academy/programs/TwelveScholarsSupport';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import CookiePolicy from './components/legal/CookiePolicy';

export default function App() {
  return (
    <Router>
    <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Routes>
          {/* Initial Choice Page - No Navbar/Footer */}
          <Route path="/" element={<InitialChoice />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={
            <>
              <Navbar type="foundation" />
              <main className="flex-grow">
                <PrivacyPolicy />
              </main>
              <Footer type="foundation" />
            </>
          } />

          <Route path="/terms-of-service" element={
            <>
              <Navbar type="foundation" />
              <main className="flex-grow">
                <TermsOfService />
              </main>
              <Footer type="foundation" />
            </>
          } />

          <Route path="/cookie-policy" element={
            <>
              <Navbar type="foundation" />
              <main className="flex-grow">
                <CookiePolicy />
              </main>
              <Footer type="foundation" />
            </>
          } />

          {/* Foundation Routes */}
          <Route path="/foundation/*" element={
            <>
              <Navbar type="foundation" />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<FoundationHome />} />
                  <Route path="/about" element={<FoundationAbout />} />
                  <Route path="/programs" element={<FoundationPrograms />} />
                  <Route path="/scholars" element={<FoundationScholars />} />
                  <Route path="/research" element={<FoundationResearch />} />
                  {/* <Route path="/publications" element={<FoundationPublications />} /> */}
                  <Route path="/team" element={<FoundationTeam />} />
                  {/* <Route path="/summer-internship-apply" element={<SummerInternshipApply />} /> */}
                  {/* <Route path="/donate" element={<FoundationDonate />} /> */}
                  {/* <Route path="/careers" element={<FoundationCareers />} /> */}
                  {/* <Route path="/internships" element={<FoundationInternships />} />
                  <Route path="/volunteer" element={<FoundationVolunteer />} />
                  <Route path="/partnerships" element={<FoundationPartnerships />} />
                  <Route path="/partnership-opportunities" element={<FoundationPartnershipOpportunities />} /> */}
                  {/* <Route path="/partnerships/joint-research" element={<JointResearchProjects />} />
                  <Route path="/partnerships/knowledge-exchange" element={<KnowledgeExchange />} />
                  <Route path="/partnerships/capacity-building" element={<CapacityBuilding />} />
                  <Route path="/partnerships/policy-development" element={<PolicyDevelopment />} /> */}
                  <Route path="*" element={<Navigate to="/foundation" />} />
                </Routes>
              </main>
              <Footer type="foundation" />
            </>
          } />
          
          {/* Publications Routes - Separate to avoid nesting issues */}
          {/* <Route path="/publications/:slug" element={
            <>
              <Navbar type="foundation" />
              <main className="flex-grow">
                <ResearchPaper />
              </main>
              <Footer type="foundation" />
            </>
          } /> */}
          
          {/* Academy Routes */}
          <Route path="/academy/*" element={
            <>
              <Navbar type="academy" />
              <main className="flex-grow">
                {/* <DashboardLayout type="academy"> */}
                  <Routes>
                    <Route path="/" element={<AcademyHome />} />
                    <Route path="/about" element={<AcademyAbout />} />
                    <Route path="/programs" element={<AcademyPrograms />} />
                    {/* <Route path="/login" element={<AcademyLogin />} /> */}
                    {/* <Route path="/dashboard" element={<StudentDashboard />} /> */}
                    {/* <Route path="/courses" element={<MyCourses />} />
                    <Route path="/courses/:courseId" element={<CoursePage />} />
                    <Route path="/assignments" element={<Assignments />} />
                    <Route path="/submissions" element={<Submissions />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/ai-counseling" element={<AICounseling />} />
                    <Route path="/counseling" element={<Counseling />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/school-selection" element={<SchoolSelection />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/programs/fall-scholars" element={<FallScholars />} />
                    <Route path="/programs/winter-scholars" element={<WinterScholars />} />
                    <Route path="/programs/bootcamp" element={<Bootcamp />} />
                    <Route path="/programs/twelve-scholars-support" element={<TwelveScholarsSupport />} /> */}
                    <Route path="*" element={<Navigate to="/academy" />} />
                  </Routes>
                  <Footer type="academy" />
                {/* </DashboardLayout> */}
              </main>
            </>
          } />

          {/* Teacher Portal Routes - No Navbar/Footer */}
          {/* <Route path="/teacher/*" element={
            <>
              <Routes>
                <Route path="/dashboard" element={<TeacherDashboard />} />
                <Route path="/students" element={<TeacherStudents />} />
                <Route path="/assignments" element={<TeacherAssignments />} />
                <Route path="/analytics" element={<TeacherAnalytics />} />
                <Route path="*" element={<Navigate to="/teacher/dashboard" />} />
              </Routes>
            </>
          } /> */}

          {/* Admin Portal Routes - No Navbar/Footer */}
          {/* <Route path="/admin/*" element={
            <>
              <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/users" element={<AdminUserManagement />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" />} />
              </Routes>
            </>
          } /> */}
          
          {/* Catch All */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}