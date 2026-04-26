import LegalPageLayout, { useLegalProse } from '../../components/LegalPageLayout'

const PrivacyPolicy = () => {
  const c = useLegalProse()

  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="26 April 2026">
      <section>
        <h2 className={c.h2}>Introduction</h2>
        <p className={c.p}>
          Compliance World (“we”, “us”, “our”) respects your privacy. This policy describes how we collect, use, store, and
          protect personal information when you use our website and services.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Information we collect</h2>
        <p className={c.p}>We may collect:</p>
        <ul className={`${c.ul} ${c.li}`}>
          <li>Contact details you provide (name, email, phone, company name).</li>
          <li>Information you submit through forms, orders, or support requests.</li>
          <li>Technical data such as IP address, browser type, device information, and approximate location.</li>
          <li>Usage data such as pages visited and interactions with the site.</li>
        </ul>
      </section>
      <section>
        <h2 className={c.h2}>How we use your information</h2>
        <ul className={`${c.ul} ${c.li}`}>
          <li>To respond to inquiries and provide requested services.</li>
          <li>To process transactions and communicate about your account or orders.</li>
          <li>To improve our website, security, and user experience.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </section>
      <section>
        <h2 className={c.h2}>Cookies and similar technologies</h2>
        <p className={c.p}>
          We may use cookies and similar technologies to remember preferences, analyse traffic, and support authentication
          where applicable. You can control cookies through your browser settings; disabling some cookies may affect site
          functionality.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Sharing and disclosure</h2>
        <p className={c.p}>
          We do not sell your personal information. We may share data with service providers who assist our operations
          (e.g. hosting, email, analytics), when required by law, or to protect the safety and integrity of our services.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Data retention and security</h2>
        <p className={c.p}>
          We retain information only as long as needed for the purposes above or as required by law. We use reasonable
          technical and organisational measures to protect your data, though no method of transmission over the internet
          is completely secure.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Your rights</h2>
        <p className={c.p}>
          Depending on applicable law, you may have rights to access, correct, delete, or restrict processing of your
          personal data, or to object to certain processing. Contact us using the details below to make a request.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Third-party links</h2>
        <p className={c.p}>
          Our site may link to third-party websites. We are not responsible for their privacy practices; please review
          their policies separately.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Changes</h2>
        <p className={c.p}>
          We may update this policy from time to time. The “Last updated” date will reflect the latest version. Continued use
          of the site after changes constitutes acceptance of the revised policy.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Contact</h2>
        <p className={c.p}>
          For privacy-related questions:{' '}
          <a
            href="mailto:info@complianceworld.in"
            className="font-medium text-indigo-600 underline decoration-indigo-600/30 underline-offset-2 hover:text-indigo-500 dark:text-cyan-300 dark:decoration-cyan-300/30 dark:hover:text-cyan-200"
          >
            info@complianceworld.in
          </a>
        </p>
      </section>
    </LegalPageLayout>
  )
}

export default PrivacyPolicy
