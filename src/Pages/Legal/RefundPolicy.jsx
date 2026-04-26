import LegalPageLayout, { useLegalProse } from '../../components/LegalPageLayout'

const RefundPolicy = () => {
  const c = useLegalProse()

  return (
    <LegalPageLayout title="Refund Policy" lastUpdated="26 April 2026">
      <section>
        <h2 className={c.h2}>Overview</h2>
        <p className={c.p}>
          This Refund Policy explains when fees paid to Compliance World may be refunded or adjusted. Service fees often
          cover professional time, government or registry charges, and third-party disbursements; eligibility for refund
          depends on the stage of work and the nature of the payment.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Government and registry fees</h2>
        <p className={c.p}>
          Amounts paid directly to government departments, registries, or statutory bodies on your behalf are generally
          non-refundable once submitted, in line with the rules of those authorities. We pass through such charges as
          disclosed in your quotation or invoice.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Professional and service fees</h2>
        <ul className={`${c.ul} ${c.li}`}>
          <li>
            <strong className="font-semibold text-inherit">Before work begins:</strong> If you cancel before we have
            started substantive preparation or filing, you may be eligible for a full or partial refund of professional
            fees, minus any non-recoverable costs already incurred.
          </li>
          <li>
            <strong className="font-semibold text-inherit">After work has started:</strong> Fees for work already
            performed are typically non-refundable. Any unused portion of prepaid packages may be credited or refunded at
            our discretion, based on milestones completed.
          </li>
          <li>
            <strong className="font-semibold text-inherit">Rejected or incomplete filings:</strong> Where a filing is
            rejected solely due to our error, we will work with you to correct and refile at no additional professional
            fee where reasonable. This does not guarantee refund of government fees.
          </li>
        </ul>
      </section>
      <section>
        <h2 className={c.h2}>How to request a refund</h2>
        <p className={c.p}>
          Email{' '}
          <a
            href="mailto:info@complianceworld.in"
            className="font-medium text-indigo-600 underline decoration-indigo-600/30 underline-offset-2 hover:text-indigo-500 dark:text-cyan-300 dark:decoration-cyan-300/30 dark:hover:text-cyan-200"
          >
            info@complianceworld.in
          </a>{' '}
          with your invoice or reference number, service name, and reason for the request. We aim to respond within 5–7
          business days.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Processing time</h2>
        <p className={c.p}>
          Approved refunds are typically processed within 10–15 business days to the original payment method, subject to
          banking and payment partner timelines.
        </p>
      </section>
      <section>
        <h2 className={c.h2}>Changes</h2>
        <p className={c.p}>
          We may update this policy from time to time. The latest version will be indicated by the “Last updated” date on
          this page.
        </p>
      </section>
    </LegalPageLayout>
  )
}

export default RefundPolicy
