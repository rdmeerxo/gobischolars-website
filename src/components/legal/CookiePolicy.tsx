import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CookiePolicy() {
  return (
    <>

      <br/>
      <br/>
      <br/>
      <br/>
      <div className="bg-white py-28 text-center">
        <h1 className="serif text-black mb-2">
          Cookie Policy
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
          <Section title="What Are Cookies?">
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help websites function properly, remember user preferences, and improve
              user experience.
            </p>
            <p>
              This Cookie Policy explains how GobiScholars Foundation and GobiScholars Academy
              (collectively, “GobiScholars,” “we,” “us,” or “our”) use cookies and similar
              technologies on our website and learning management system.
            </p>
            <p>
              GobiScholars operates under the laws of Mongolia, and this policy is governed
              accordingly.
            </p>
          </Section>

          <Section title="Our Current Use of Cookies">
            <p>
              At present, GobiScholars uses limited essential cookies that are necessary for
              the operation and security of our platform.
            </p>
            <p>
              As our platform evolves, we may introduce additional cookies or tracking
              technologies for analytics, performance measurement, and outreach
              effectiveness. Any such changes will be reflected in updates to this Cookie
              Policy.
            </p>
          </Section>

          <Section title="Why We Use Cookies">
            <p>We use or may use cookies for the following purposes:</p>
            <List
              items={[
                'Authentication: Keeping users logged in securely',
                'Security: Preventing unauthorized access and misuse',
                'Functionality: Enabling core platform features such as navigation and session management',
                'Preferences: Remembering user settings where applicable',
                'Performance & Analytics: Understanding platform usage to improve services',
                'Outreach Measurement: Evaluating the effectiveness of educational programs and communications',
              ]}
            />
          </Section>

          <Section title="Types of Cookies We Use or May Use">
            <Sub title="1. Essential Cookies">
              <List
                items={[
                  'User authentication and session management',
                  'Secure access to student, teacher, and admin portals',
                  'Navigation within protected areas of the platform',
                ]}
              />
              <p>Without these cookies, core services would not function.</p>
            </Sub>

            <Sub title="2. Performance and Analytics Cookies">
              <List
                items={[
                  'Pages visited and time spent',
                  'Platform feature usage',
                  'Error detection and system performance',
                ]}
              />
              <p>
                These cookies help us improve educational delivery and user experience.
                Data collected is used in aggregated or anonymized form where possible.
              </p>
            </Sub>

            <Sub title="3. Functionality Cookies">
              <List
                items={[
                  'Language or region preferences',
                  'Interface or dashboard settings',
                  'Media playback preferences',
                ]}
              />
            </Sub>

            <Sub title="4. Analytics and Measurement Pixels (Future Use)">
              <p>
                In the future, GobiScholars may implement analytics or measurement pixels
                (such as Meta, Google, or similar tools) for non-student visitors to measure
                website traffic, understand interest in programs, and improve communications.
              </p>
              <p>
                We do not use pixels or cookies to conduct behavioral advertising targeted
                at students or to track student activity across unrelated websites.
              </p>
            </Sub>
          </Section>

          <Section title="Third-Party Cookies">
            <p>Certain third-party service providers may place cookies to support platform functionality, such as:</p>
            <List
              items={[
                'Video hosting services',
                'Payment processors',
                'Authentication and security services',
                'Analytics tools',
              ]}
            />
            <p>
              These providers operate under their own privacy policies and contractual
              data protection obligations.
            </p>
          </Section>

          <Section title="Session Cookies vs. Persistent Cookies">
            <List
              items={[
                'Session Cookies: Temporary and deleted when you close your browser',
                'Persistent Cookies: Stored for a defined period to remember preferences or settings',
              ]}
            />
          </Section>

          <Section title="Cookie Duration">
            <List
              items={[
                'Session cookies: Deleted when the browser is closed',
                'Authentication cookies: Active until logout or expiration',
                'Preference cookies: Retained for a limited period',
                'Analytics cookies: Retained for analysis purposes, where used',
              ]}
            />
          </Section>

          <Section title="Managing Cookies">
            <p>You can control cookies through your browser settings, including:</p>
            <List
              items={[
                'Viewing and deleting cookies',
                'Blocking certain types of cookies',
                'Blocking cookies from specific websites',
              ]}
            />
            <p>
              Disabling cookies may affect platform functionality, including login access
              and saved preferences.
            </p>
          </Section>

          <Section title="Do Not Track Signals">
            <p>
              Some browsers offer “Do Not Track” (DNT) signals. Currently, there is no
              universal standard for responding to DNT signals, and our platform does not
              respond to them at this time.
            </p>
          </Section>

          <Section title="Student Privacy and Cookies">
            <List
              items={[
                'Cookies used in student accounts are limited to educational and operational purposes',
                'We do not use cookies for targeted advertising to students',
                'Student data collected through cookies is protected and not sold',
              ]}
            />
          </Section>

          <Section title="Other Tracking Technologies">
            <p>We may also use similar technologies, such as:</p>
            <List
              items={[
                'Local or session storage',
                'Web beacons',
                'Analytics software development kits (SDKs)',
              ]}
            />
            <p>
              These technologies serve similar purposes to cookies and are subject to this
              policy.
            </p>
          </Section>

          <Section title="Updates to This Cookie Policy">
            <p>
              We may update this Cookie Policy as our technologies or practices change.
              Updates will be posted on our website with a revised “Last Updated” date.
            </p>
          </Section>

          <Section title="More Information">
            <p>
              For more information on how we handle personal data, please review our Privacy
              Policy and Terms of Service.
            </p>
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