import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "What is Hole Out Golf & How It Works",
    faqs: [
      {
        question: "What exactly is Hole Out Golf and how does it work?",
        answer: "Hole Out Golf runs a live, club-hosted hole-in-one challenge. Players register and play the hole as part of their normal round; every verified hole-in-one during the promotion wins a prize. Verification is done using time-synced camera footage, timestamps and an audit trail."
      },
      {
        question: "Is this a game of skill or classed as gambling?",
        answer: "The challenge is presented as a skill-based hole-in-one competition rather than a chance lottery. That said, classification can vary by jurisdiction—clubs should confirm with their legal/insurance advisor if they need an official ruling for their area."
      },
      {
        question: "What's the benefit for our course if we take part?",
        answer: "Benefits typically include additional member & visitor engagement, incremental revenue share (from challenge entries or sponsorship), free marketing exposure, extra footfall on quieter days and positive PR opportunities for the club."
      },
      {
        question: "Do golfers play as part of their normal round, or is it a separate event?",
        answer: "Players take part during their normal round; the challenge is designed to be low-impact on tee scheduling. Special events or dedicated prize days are optional and can be scheduled separately if the club prefers."
      },
      {
        question: "How do we verify a legitimate hole-in-one?",
        answer: "Verification uses: (1) high-definition camera footage with timestamp, (2) system logs showing player registration, (3) club official confirmation where required, and (4) replay/forensic review by the provider. A verification checklist and adjudication workflow are provided to the club."
      }
    ]
  },
  {
    title: "Prize & Insurance Questions",
    faqs: [
      {
        question: "Who funds or covers the prize pot (e.g. £1,000)?",
        answer: "Prizes are typically funded by Hole Out Golf (the operator) and/or sponsored by a partner. The model can also be run with an insurance-backed prize (operator purchases a prize policy to cover payouts)."
      },
      {
        question: "What happens if multiple players win in one day?",
        answer: "If multiple verified winners occur the prize distribution follows the agreed T&Cs: either full prize per verified winner (insured model) or a split arrangement. The club receives the T&Cs before launch and can choose the model that suits them."
      },
      {
        question: "How quickly are prizes paid out once verified?",
        answer: "Once a win is verified, payouts are processed promptly. Typical timelines are: verification completed within 48–72 hours, payment to the winner within 3–7 business days depending on the payout route (bank transfer or cheque)."
      }
    ]
  },
  {
    title: "Camera & Equipment",
    faqs: [
      {
        question: "Who owns and installs the cameras?",
        answer: "Cameras and associated hardware are supplied and owned by the operator. Installation is carried out by certified technicians in coordination with the club to minimise disruption."
      },
      {
        question: "How are the cameras powered (mains / battery / solar)?",
        answer: "Standard installs use mains power with battery backup. Where mains is unavailable, battery packs or solar + battery hybrids are used. The installer will survey the hole and recommend the optimal solution."
      },
      {
        question: "What happens if a camera is damaged (weather, vandalism, ball)?",
        answer: "The operator provides weather-rated equipment and protective housings. Accidental damage (ball strikes, vandalism) is handled via the operator's maintenance plan—repair or replacement is arranged promptly. Exceptional cases may fall under the club's insurance if specified in the agreement."
      },
      {
        question: "Who is responsible for maintenance or replacements?",
        answer: "Routine maintenance and incident response are handled by the operator. The contract details SLAs for response and repair times. Clubs are only responsible for damage caused by willful negligence if that clause is included."
      },
      {
        question: "Is there any cost to the club for installation or upkeep?",
        answer: "Most partnership offers present a no-upfront-cost option to the club (operator covers install and running costs in return for a revenue share or marketing rights). Alternative contract options with a contribution from the club are available—these are agreed during commercial negotiation."
      },
      {
        question: "Where is the footage stored and for how long?",
        answer: "Footage is stored on secure servers (encrypted at rest) for a standard retention period (commonly 30–90 days). Retention can be adjusted for compliance or club preference and longer archival can be arranged on request."
      },
      {
        question: "Can we (the club) access the footage too?",
        answer: "Yes — clubs are given secure access to view/download footage through a portal for verification, coaching, or member enquiries. Access permissions and audit logs are part of the admin console."
      }
    ]
  },
  {
    title: "Operations & Logistics",
    faqs: [
      {
        question: "How much involvement would our staff need?",
        answer: "Minimal day-to-day involvement. Typical tasks for staff: occasional confirmation of a verified win, simple coordination during install, and basic signposting/communication to members. The operator handles the bulk of customer-facing work."
      },
      {
        question: "How are players registered or tracked for participation?",
        answer: "Player registration is digital: QR codes, a simple web form, or an app. Entries are time-stamped and linked to the camera logs so every attempt is tracked and auditable."
      },
      {
        question: "How will the setup affect tee times or pace of play?",
        answer: "Designed to be non-disruptive — players take their normal shot in their regular tee time. The system does not require stopping play; it passively records. Special events can be planned if the club wants dedicated marketing days."
      },
      {
        question: "Do you handle customer support and disputes, or do we?",
        answer: "The operator handles player support, dispute triage and the initial adjudication. The club is looped in for final confirmation if required. A clear escalation and dispute policy is included in the partner agreement."
      }
    ]
  },
  {
    title: "Commercial & Partnership Questions",
    faqs: [
      {
        question: "Is there a cost or commission model for the club?",
        answer: "Common models: (a) No upfront cost + revenue share, (b) Small fixed monthly fee, or (c) Club contribution for enhanced commercial terms. Exact splits and fees are negotiable and provided in the commercial proposal."
      },
      {
        question: "How does the course benefit financially?",
        answer: "Clubs typically receive a share of entry revenues, local sponsorship income, and increased green fees from extra visitors. Additional benefits include marketing exposure and member engagement metrics provided by the operator."
      },
      {
        question: "Can we promote the Hole Out Golf challenge to our members?",
        answer: "Absolutely — club promotion is encouraged. The operator supplies templated emails, posters, digital signage assets, and social media copy for member communications."
      },
      {
        question: "Do you provide marketing materials or signage?",
        answer: "Yes — full marketing packs (print & digital), on-course signage, and point-of-sale artwork are supplied. Co-branded materials can be produced for larger campaigns."
      },
      {
        question: "How long would the trial or partnership run?",
        answer: "Typical trial periods are 3 months to 6 months. Long-term partnerships are usually annual with renewal options. Trial length and KPIs are agreed ahead of launch."
      },
      {
        question: "Can we withdraw if it doesn't suit our course?",
        answer: "Yes — agreements include an exit clause. For trials there is usually minimal notice (e.g. 30 days). Specific notice periods and de-installation terms are defined in the contract."
      }
    ]
  }
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to know about partnering with Hole Out Golf
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-card rounded-lg border shadow-sm px-4"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Next Steps */}
          <div className="mt-16 p-8 bg-secondary/30 rounded-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Next Steps</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Site survey & tech assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Commercial proposal and T&Cs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Pilot install</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Go live & marketing launch</span>
              </li>
            </ol>
            <p className="mt-6 text-sm text-muted-foreground">
              For questions, verification policy or to request a proposal, contact your Hole Out Golf representative.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
