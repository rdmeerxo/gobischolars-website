import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function TermsOfService() {
  return (
    <>

      <br/>
      <br/>
      <br/>
      <br/>
      <div className="bg-white py-28 text-center">
        <h1 className="serif text-black mb-2">
          Terms of Service
        </h1>
        <p
          className="text-gray-500 mb-12 mx-auto"
          style={{ fontSize: '0.9rem' }}
        >
          Last Updated: [DATE]
        </p>
      </div>
      {/* Content */}
      <section className="bg-white pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Section title="Agreement to Terms">
            <p>
              These Terms of Service (“Terms”) constitute a legally binding agreement between you and
              GobiScholars, which operates as two legally registered entities under the laws of Mongolia:
            </p>
            <ul>
              <li>GobiScholars Foundation, a non-profit organization (“NGO”)</li>
              <li>GobiScholars Academy, a limited liability company (“LLC”)</li>
            </ul>
            <p>
              These Terms govern your access to and use of our website, learning management system (LMS),
              and educational services operated by either entity.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              If you do not agree, you may not access or use our services.
            </p>
          </Section>

          <Section title="Eligibility">
            <p>Our services are intended for students aged 13 and older.</p>
            <p>
              If you are under the age of 18, you may use the services only with the consent and supervision
              of a parent or legal guardian, who agrees to these Terms on your behalf.
            </p>
            <p>
              By using our services, you represent and warrant that you have the legal capacity, authority,
              and right to enter into these Terms and to comply with them.
            </p>
          </Section>

          <Section title="Account Registration and Security">
            <p>To access certain features, you must create an account. You agree to:</p>
            <List
              items={[
                'Provide accurate, current, and complete information',
                'Promptly update account information as necessary',
                'Maintain the confidentiality of your login credentials',
                'Notify us immediately of unauthorized access or use',
                'Accept responsibility for all activities under your account',
              ]}
            />
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms, academic
              integrity policies, or applicable laws.
            </p>
          </Section>

          <Section title="Description of Services">
            <Sub title="GobiScholars Academy (LLC)">
              <List
                items={[
                  'Video-based educational courses and test preparation',
                  'Learning management system (LMS) with progress tracking',
                  'Assignment submission, grading, and feedback',
                  'AI-assisted counseling and grammar checking tools',
                  'College application guidance and school selection support',
                  'One-on-one counseling sessions (subject to availability)',
                  'Access to proprietary educational resources',
                ]}
              />
            </Sub>

            <Sub title="GobiScholars Foundation (NGO)">
              <List
                items={[
                  'Scholarship and financial assistance programs',
                  'Educational research and publications',
                  'Institutional partnerships and collaborations',
                  'Volunteer and internship programs',
                  'Community outreach and educational events',
                ]}
              />
            </Sub>
          </Section>

          <Section title="Payment Terms and Refund Policy">
            <Sub title="Academy Services">
              <p>Certain services require payment. By enrolling, you agree to:</p>
              <List
                items={[
                  'Pay all applicable fees as disclosed',
                  'Provide valid payment information',
                  'Authorize charges through our payment processors',
                  'Pay any applicable taxes or fees',
                ]}
              />
            </Sub>

            <Sub title="Refund Policy">
              <p>
                Refunds are reviewed case-by-case. Generally, refund requests must be submitted within
                14 days of enrollment and before substantial course materials are accessed.
              </p>
              <p>
                All refund decisions are made at the sole discretion of GobiScholars Academy.
                For inquiries, contact billing@gobischolars.org.
              </p>
            </Sub>

            <Sub title="Foundation Donations">
              <p>
                Donations to GobiScholars Foundation may be eligible for tax benefits under Mongolian law,
                where applicable. Donors are responsible for consulting their own tax advisors.
                All donations are final and non-refundable.
              </p>
            </Sub>
          </Section>

          <Section title="User Conduct and Prohibited Activities">
            <p>You agree not to:</p>
            <List
              items={[
                'Violate any applicable laws or third-party rights',
                'Share accounts or create unauthorized multiple accounts',
                'Upload unlawful, abusive, defamatory, obscene, or harmful content',
                'Engage in plagiarism or submit non-original work',
                'Misuse AI tools to circumvent academic integrity',
                'Disrupt or interfere with platform operations',
                'Attempt unauthorized system access',
                'Reproduce, distribute, or exploit services without permission',
                'Use services for unauthorized commercial purposes',
                'Harass, threaten, or harm others',
              ]}
            />
          </Section>

          <Section title="Academic Integrity">
            <p>GobiScholars maintains strict academic standards. Students must:</p>
            <List
              items={[
                'Submit original work and properly cite sources',
                'Use AI tools responsibly as learning aids',
                'Follow all instructor and counselor guidelines',
              ]}
            />
            <p>
              Violations may result in failing grades, suspension, or termination without refund.
            </p>
          </Section>

          <Section title="Intellectual Property Rights">
            <Sub title="Our Content">
              <p>
                All platform content (videos, materials, software, branding) is owned by GobiScholars
                or its licensors and protected by intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license for personal,
                non-commercial educational use only.
              </p>
            </Sub>

            <Sub title="Your Content">
              <p>
                You retain ownership of content you submit. By submitting content, you grant
                GobiScholars a limited, non-exclusive, royalty-free license to use, store,
                reproduce, and display such content for:
              </p>
              <List
                items={[
                  'Educational delivery',
                  'Academic evaluation and feedback',
                  'Institutional research and reporting',
                  'Platform and curriculum improvement',
                ]}
              />
              <p>
                We may use anonymized student work for research and evaluation.
              </p>
            </Sub>
          </Section>

          <Section title="Video Content and Usage">
            <p>Pre-recorded video classes are exclusively for enrolled students. You may not:</p>
            <List
              items={[
                'Download, record, or screen-capture videos',
                'Share content with non-enrolled individuals',
                'Upload videos to third-party platforms',
                'Use content for commercial purposes',
              ]}
            />
            <p>
              Unauthorized use may result in immediate termination and legal action.
              Access may expire upon program completion or termination.
            </p>
          </Section>

          <Section title="AI-Powered Tools and Services">
            <p>AI tools are provided for educational support only. You acknowledge that:</p>
            <List
              items={[
                'AI tools do not replace independent thinking',
                'You are responsible for final submissions',
                'AI outputs may be inaccurate or incomplete',
                'Overreliance may violate academic integrity',
              ]}
            />
            <p>
              GobiScholars makes no warranties regarding AI outputs. Users assume full responsibility
              for reliance on AI-assisted suggestions.
            </p>
          </Section>

          <Section title="Privacy and Data Protection">
            <p>
              Your use of our services is governed by our Privacy Policy, which forms part of these Terms.
              By using our services, you consent to our data practices.
            </p>
          </Section>

          <Section title="Disclaimers and Limitations of Liability">
            <Sub title="Educational Outcomes">
              <p>
                We do not guarantee specific test scores, admissions results, or outcomes.
                Results depend on individual effort and circumstances.
              </p>
            </Sub>

            <Sub title="Service Availability">
              <p>
                We do not guarantee uninterrupted access or availability of specific instructors,
                counselors, or features.
              </p>
            </Sub>

            <Sub title="Limitation of Liability">
              <p>
                To the fullest extent permitted by law, GobiScholars shall not be liable for indirect,
                incidental, consequential, or punitive damages.
              </p>
              <p>
                Our total liability shall not exceed the greater of:
              </p>
              <List
                items={[
                  'The amount paid to GobiScholars Academy in the prior 12 months',
                  'USD $100',
                ]}
              />
            </Sub>
          </Section>

          <Section title="Indemnification">
            <p>
              You agree to indemnify and hold harmless GobiScholars and its representatives from
              claims arising from your use of services, violation of these Terms, or infringement
              of third-party rights.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We may suspend or terminate access for violations of these Terms, academic misconduct,
              unlawful behavior, or actions harmful to the platform or community.
            </p>
            <p>
              You may terminate your account at any time. Upon termination, access ceases immediately.
            </p>
            <p>
              Surviving provisions include intellectual property, academic integrity, limitation of
              liability, indemnification, governing law, and dispute resolution.
            </p>
          </Section>

          <Section title="No Partnership">
            <p>
              Nothing in these Terms creates a partnership, joint venture, or agency relationship
              between you and GobiScholars.
            </p>
          </Section>

          <Section title="Dispute Resolution and Governing Law">
            <p>
              These Terms are governed by the laws of Mongolia.
              Disputes shall first be resolved through good-faith negotiation.
              If unresolved, disputes shall fall under the exclusive jurisdiction of the courts of Mongolia.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              We may update these Terms periodically. Continued use of services after changes
              constitutes acceptance.
            </p>
          </Section>

          <Section title="Severability and Waiver">
            <p>
              If any provision is unenforceable, the remaining provisions remain in effect.
              Failure to enforce a provision is not a waiver.
            </p>
          </Section>

          <Section title="Contact Information">
            <p>
              GobiScholars Foundation & Academy<br />
              Email: legal@gobischolars.org<br />
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