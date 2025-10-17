import promoVideo from "@/assets/promo-video.mp4";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <video 
            className="w-full rounded-2xl shadow-2xl"
            controls
            autoPlay
            muted
            loop
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
