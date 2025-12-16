import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function PrivacyPolicy() {
  return (
    <>

      <br/>
      <br/>
      <br/>
      <br/>
      <div className="bg-white py-28 text-center">
        <h1 className="serif text-black mb-2">
          Privacy Policy
        </h1>
        <p
          className="text-gray-500 mb-12 mx-auto"
          style={{ fontSize: '0.9rem' }}
        >
          Last Updated: [2025/12]
        </p>
      </div>
      {/* Content */}
      <section className="bg-white pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Section title="Introduction">
            <p>GobiScholars operates as two legally registered entities under the laws of Mongolia:</p>
            <ul>
              <li>GobiScholars Foundation, a non-profit organization (“NGO”)</li>
              <li>GobiScholars Academy, a limited liability company (“LLC”)</li>
            </ul>
            <p>
              This Privacy Policy applies to both entities and describes how we collect, use, disclose,
              retain, and protect personal information when you access our website, learning management
              system (LMS), or educational services.
            </p>
            <p>
              Both entities operate in accordance with the laws and regulations of Mongolia, including
              applicable data protection, education, and consumer protection requirements. Where we engage
              with international students, partners, or institutions, we follow internationally recognized
              privacy and student data protection principles as best practice.
            </p>
          </Section>

          <Section title="Data Controller">
            <p>
              For the purposes of applicable data protection laws in Mongolia, GobiScholars Foundation and
              GobiScholars Academy act as joint data controllers with respect to personal information
              collected through our website and services.
            </p>
            <p>
              Data may be shared between the NGO and the LLC only where necessary to deliver educational
              programs, administer scholarships, conduct research, or comply with legal obligations, and
              always in accordance with this Privacy Policy.
            </p>
          </Section>

          <Section title="Information We Collect">
            <Sub title="Personal Information">
              <List
                items={[
                  'Name, email address, phone number, and contact details',
                  'Academic background (school name, grade level, education history)',
                  'Applications, essays, written submissions, and related materials',
                  'Account credentials and user profile information',
                  'Payment-related information (processed through third-party providers)',
                  'Optional demographic information',
                ]}
              />
            </Sub>

            <Sub title="Educational Data">
              <List
                items={[
                  'Course progress, video viewing history, and attendance',
                  'Assignments, grades, feedback, and counselor notes',
                  'Test preparation results and learning analytics',
                  'Essay drafts, revisions, and school application materials',
                  'AI-assisted counseling session data and grammar check interactions',
                  'School preferences and academic planning data',
                ]}
              />
            </Sub>

            <Sub title="Technical Information">
              <List
                items={[
                  'IP address, browser type, device information',
                  'Cookies and similar tracking technologies',
                  'Usage data, pages visited, and system logs',
                  'Session identifiers and authentication tokens',
                ]}
              />
            </Sub>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use collected information for the following purposes:</p>
            <List
              items={[
                'Educational Services: Deliver courses, assignments, counseling, and academic programs',
                'Assessment & Feedback: Evaluate submissions, provide guidance, and track progress',
                'AI-Assisted Tools: Support learning while maintaining academic integrity',
                'Account Management: Create and manage user accounts and access permissions',
                'Communication: Send program updates, academic notices, and administrative messages',
                'Payment Processing: Process tuition payments and donations through secure providers',
                'Platform Improvement: Improve LMS performance, content quality, and user experience',
                'Research & Reporting (NGO): Produce anonymized insights to assess educational impact',
                'Legal & Compliance: Fulfill obligations under Mongolian law and enforce our policies',
              ]}
            />
          </Section>

          <Section title="AI and Educational Technology Use">
            <List
              items={[
                'AI tools are used solely to assist learning and academic development',
                'Student data and submissions are not used to train public or third-party AI models',
                'AI interactions remain private and accessible only to the student and authorized educators',
                'Individual AI session data is not shared with external parties',
              ]}
            />
          </Section>

          <Section title="How We Share Your Information">
            <p>We do not sell personal information.</p>
            <p>Information may be shared only in the following circumstances:</p>
            <List
              items={[
                'Educators: Assigned teachers and counselors',
                'Administrative Staff: Authorized personnel for operational purposes',
                'Service Providers: Trusted vendors (e.g., payment processors, hosting, email) bound by confidentiality',
                'Legal Authorities: When required under Mongolian law or lawful request',
                'Educational Partners: With explicit consent',
                'Aggregated Data: Anonymized data for research or reporting',
              ]}
            />
          </Section>

          <Section title="Student and Children’s Privacy">
            <List
              items={[
                'Many GobiScholars students are under the age of 18',
                'Student educational records are treated as confidential',
                'Parents or legal guardians may request access to or correction of a minor’s data',
                'Student data is not used for targeted advertising',
                'Academic submissions remain private between students and authorized educators',
                'We follow internationally recognized student data protection principles consistent with Mongolian law',
              ]}
            />
          </Section>

          <Section title="Data Security">
            <p>We implement appropriate technical and organizational safeguards, including:</p>
            <List
              items={[
                'Encrypted data transmission (SSL/TLS)',
                'Secure authentication and password protection',
                'Role-based access controls',
                'Secure cloud infrastructure with backups',
                'Staff training on data protection practices',
              ]}
            />
            <p>While we take reasonable measures, no system is entirely secure.</p>
          </Section>

          <Section title="Data Retention">
            <p>
              GobiScholars retains personal and educational information for as long as reasonably necessary
              to support its educational mission, institutional operations, research, and legal obligations,
              in accordance with Mongolian law.
            </p>
            <p>Data may be retained for the following purposes:</p>
            <List
              items={[
                'Educational continuity and alumni recordkeeping',
                'Long-term academic outcome tracking and impact measurement',
                'Institutional research, reporting, and evaluation',
                'Legal, accounting, audit, and regulatory requirements',
                'Platform, curriculum, and program improvement',
              ]}
            />
            <p>Where appropriate, personal identifiers may be removed or anonymized.</p>
            <p>Retention may include:</p>
            <List
              items={[
                'Student and alumni records retained indefinitely unless deletion is legally required',
                'Application materials retained for evaluation, reporting, and historical reference',
                'Financial records retained as required by Mongolian law',
                'Anonymized research data retained indefinitely',
              ]}
            />
          </Section>

          <Section title="Your Rights and Choices">
            <p>Subject to Mongolian law, you have the following rights:</p>
            <List
              items={[
                'Access',
                'Correction',
                'Deletion (subject to institutional, legal, and research requirements)',
                'Restriction of Processing',
                'Data Portability',
                'Withdrawal of Consent',
                'Objection',
              ]}
            />
          </Section>

          <Section title="Exercising Your Rights">
            <p>
              Requests may be submitted to: <strong>privacy@gobischolars.org</strong><br />
              Identity verification may be required. We aim to respond within 30 days.
            </p>
          </Section>

          <Section title="Consent, Marketing, and Use of Educational Outcomes">
            <p>
              By creating an account, submitting applications, or participating in GobiScholars programs,
              you acknowledge and consent to data collection, use, and retention as described in this policy.
              For students under 18, consent is provided by a parent or legal guardian where required.
            </p>
            <p>We may use academic outcomes for institutional and educational purposes, including:</p>
            <List
              items={[
                'Admissions and scholarship results',
                'Program completion statistics',
                'Alumni academic trajectories',
              ]}
            />
            <p>
              We prioritize anonymized or aggregated presentation. Identifiable use requires explicit consent.
            </p>
          </Section>

          <Section title="Case Studies, Testimonials, and Media">
            <p>With explicit consent, GobiScholars may feature students or alumni in:</p>
            <List
              items={[
                'Case studies and success stories',
                'Website and marketing materials',
                'Social media, presentations, and reports',
                'Grant and donor communications',
              ]}
            />
            <p>
              Consent may be withdrawn for future use but does not require removal of materials already
              published in good faith.
            </p>
          </Section>

          <Section title="Photography, Video, and Recordings">
            <List
              items={[
                'Photos, videos, or recordings may be taken during programs and events',
                'Participation constitutes awareness of potential recording',
                'Opt-out options provided where feasible',
                'Special care is taken with minors',
              ]}
            />
          </Section>

          <Section title="Marketing Communications">
            <p>
              You may opt out of non-essential marketing communications at any time. Academic and
              administrative communications are not subject to opt-out.
            </p>
          </Section>

          <Section title="International Users">
            <p>
              GobiScholars is based in Mongolia. Personal data accessed from outside Mongolia is processed
              under Mongolian law using reasonable safeguards.
            </p>
          </Section>

          <Section title="Third-Party Links">
            <p>
              We are not responsible for the privacy practices of external websites or services linked from
              our platform.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically. Updates will be posted with a revised “Last
              Updated” date. Continued use of our services constitutes acceptance.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>This Privacy Policy is governed by the laws of Mongolia.</p>
          </Section>

          <Section title="Contact Us">
            <p>
              GobiScholars Foundation & Academy<br />
              Email: privacy@gobischolars.org<br />
              General inquiries: info@gobischolars.org
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="serif text-black mb-4">{title}</h2>
      <div className="text-gray-600 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="serif text-black mb-2">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}