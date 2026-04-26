import LegalPageLayout, { useLegalProse } from '../../components/LegalPageLayout'

const TermsAndConditions = () => {
  const c = useLegalProse()

  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="26 April 2026">
      <section>
        <h2 className={c.h2}>Agreement</h2>
        <p className={c.p}>
          By accessing or using the Compliance World website and services, you agree to these Terms &amp; Conditions. If you
          do not agree, please do not use our site or services.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Services</h2>
        <p className={c.p}>
          We provide information, facilitation, and professional support related to business compliance, registrations,
          and filings as described on our website or in a separate engagement letter or invoice. Specific scope, fees, and
          timelines are governed by the agreement for each engagement.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Your responsibilities</h2>
        <ul className={`${c.ul} ${c.li}`}>
          <li>You provide accurate, complete, and timely information and documents.</li>
          <li>You are responsible for reviewing filings and approvals and notifying us of any errors or authority requests.</li>
          <li>You use the site lawfully and do not attempt to disrupt or misuse our systems or content.</li>
        </ul>
      </section>
      <section>
        <h2 className={c.h2}>Intellectual property</h2>
        <p className={c.p}>
          Content on this website (text, graphics, logos, layout) is owned by Compliance World or its licensors and may not
          be copied or reused without permission, except for personal, non-commercial viewing.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Limitation of liability</h2>
        <p className={c.p}>
          To the fullest extent permitted by law, Compliance World and its team are not liable for indirect, incidental,
          special, or consequential losses arising from use of the site or services. Our total liability for any claim
          relating to a specific engagement is limited to the professional fees paid to us for that engagement in the six
          months preceding the claim, except where liability cannot be limited by law.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Indemnity</h2>
        <p className={c.p}>
          You agree to indemnify and hold harmless Compliance World from claims or losses arising from your breach of
          these terms, your misuse of the services, or inaccurate information you provide.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Governing law</h2>
        <p className={c.p}>
          These terms are governed by the laws of India. Courts at Delhi shall have exclusive jurisdiction, subject to
          mandatory provisions of law that cannot be waived.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Contact</h2>
        <p className={c.p}>
          Questions about these terms:{' '}
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

export default TermsAndConditions
