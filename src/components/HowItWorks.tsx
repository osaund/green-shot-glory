import { QrCode, Camera, Trophy } from "lucide-react";
import qrScanImg from "@/assets/qr-scan.png";
import aiReviewImg from "@/assets/ai-review.png";
import prizeImg from "@/assets/prize.png";

const steps = [
  {
    icon: QrCode,
    image: qrScanImg,
    title: "Scan QR Code",
    description: "Scan the QR code at the tee box to pay per shot or activate your subscription for unlimited daily attempts."
  },
  {
    icon: Camera,
    image: aiReviewImg,
    title: "Take Your Shot",
    description: "Our dual-camera system captures your swing from tee and green. Just play your normal shot."
  },
  {
    icon: Trophy,
    image: prizeImg,
    title: "Get Verified & Compete",
    description: "Our system reviews your shot. Hole-in-one? You're today's competition champion!"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to take your shot
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon/Image */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
