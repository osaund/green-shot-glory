const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: 21/12/25</p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">1. Who we are</h2>
            <p className="text-foreground/80 leading-relaxed">
              Hole Out Golf Ltd ("we", "us", "our") operates golf competitions and video capture services via holeoutgolf.co.uk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">2. What data we collect</h2>
            <p className="text-foreground/80 mb-3">We may collect:</p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Name, email address, date of birth (for age verification)</li>
              <li>Competition entries and results</li>
              <li>Video and image footage of golf shots</li>
              <li>Device and technical data (IP address, browser, device type)</li>
              <li>Payment information processed by third-party providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">3. How we collect data</h2>
            <p className="text-foreground/80 leading-relaxed">
              Data is collected when you register, enter competitions, appear in footage, use our website or app, or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">4. Why we use your data (lawful basis)</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li><strong>Performance of a contract / service:</strong> to operate competitions and deliver services</li>
              <li><strong>Consent:</strong> for optional marketing or sharing footage</li>
              <li><strong>Legal obligation:</strong> to verify age and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">5. Video and image footage</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Footage is used for competition verification, service delivery, and internal analysis.</li>
              <li>Footage will not be shared publicly without your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">6. Sharing your data</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>We may share data with authorised clubs, event organisers, prize sponsors, insurers, or service providers only as necessary for operations.</li>
              <li>We do not sell personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">7. Data retention</h2>
            <p className="text-foreground/80 leading-relaxed">
              Personal data is retained only as long as necessary for operations and legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">8. Your rights under GDPR</h2>
            <p className="text-foreground/80 mb-3">You may:</p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request corrections or deletions</li>
              <li>Withdraw consent for optional uses (e.g., marketing, sharing footage)</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">9. Age restriction</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Services are for individuals aged 18 and over.</li>
              <li>We will verify age before awarding prizes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">10. Data security</h2>
            <p className="text-foreground/80 leading-relaxed">
              Reasonable technical and organisational measures are taken to protect your data from loss, misuse, or unauthorised access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">11. Changes to this policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              This policy may be updated from time to time. The latest version will always be available on holeoutgolf.co.uk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">12. Contact us</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions regarding this policy or your data, contact: <a href="mailto:info@holeoutgolf.co.uk" className="text-accent hover:underline">info@holeoutgolf.co.uk</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">13. Consent</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>By ticking the checkbox on our website/app, you confirm you have read this privacy policy and agree to the collection and use of your data as described.</li>
              <li>You may withdraw consent for optional processing at any time.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
