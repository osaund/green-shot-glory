const Terms = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-2">Player Terms & Conditions</h1>
          <p className="text-muted-foreground mb-12">Last Updated: 01/12/2025</p>

          <div className="space-y-10 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Eligibility</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Participation is limited to individuals aged 18 years or over who are physically present at a participating golf course.</li>
                <li>Players must hold a valid tee time at the participating golf course on the day of entry.</li>
                <li>PGA Professionals, golf professionals, and players competing on recognised professional golf tours are not eligible to participate.</li>
                <li>Only one qualifying attempt per Player per day is permitted.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Entry & Payment</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Players must pay for entry before taking a shot.</li>
                <li>Entry is made by completing payment through the Hole Out Golf app or website.</li>
                <li>Any shot taken before payment is completed is invalid.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Teeing Rules</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>The shot must be taken from the designated tee box.</li>
                <li>Male Players must not tee off from forward tees.</li>
                <li>Female Players may tee off from women's tees.</li>
                <li>No Player may take a shot from a distance shorter than 100 yards from the hole.</li>
                <li>Players must not take a shot from in front of the tee markers or move or adjust any tee markers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. The Shot</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Only one shot is permitted per entry.</li>
                <li>Substitute shots, practice shots, retries, or mulligans are not allowed.</li>
                <li>If a mulligan or additional shot is taken, the attempt is invalid.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Definition of a "Holed" Shot</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>A shot is deemed holed only when the golf ball comes to rest at the bottom of the cup, entirely below the surface of the putting green.</li>
                <li>Shots resting on the lip of the hole or above the surface do not qualify.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Recording & Verification</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>All qualifying attempts must be clearly recorded by Hole Out Golf's official camera system.</li>
                <li>Prize claims must be submitted through the Hole Out Golf app.</li>
                <li>Hole Out Golf will review all claims within 48 hours.</li>
                <li>Hole Out Golf retains final and binding authority over all verification decisions.</li>
                <li>Hole Out Golf makes every reasonable effort to ensure the recording system is operational at all times. However, if a technical issue such as a power outage or network interruption prevents footage from being captured or reviewed, verification of a claim may not be possible.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Prize Payment</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Verified prizes will be paid within 30 days of claim approval.</li>
                <li>Prize payments are administered solely by Hole Out Golf.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Subscriptions</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Subscribers are permitted one qualifying attempt per day.</li>
                <li>Subscribers may not purchase additional shots while an active subscription is in place.</li>
                <li>Subscriptions may be cancelled at any time via the app.</li>
                <li>Cancellation takes effect at the end of the current billing period.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Footage Purchase</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Players may purchase video footage of their shot through the Hole Out Golf website or app for an additional fee.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">10. General</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Participation is at the Player's own risk.</li>
                <li>Hole Out Golf may suspend or withdraw the Challenge due to technical issues, course closures, weather conditions, or operational requirements.</li>
                <li>These Terms & Conditions are governed by the laws of England and Wales.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">11. Amendments and Changes</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>We reserve the right to modify these Terms and Conditions at any time.</li>
                <li>When we make changes, we will update the "Last Updated" date at the top of this document.</li>
                <li>Continued use of our services after such changes constitutes your acceptance of the new Terms and Conditions.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
  );
};

export default Terms;
