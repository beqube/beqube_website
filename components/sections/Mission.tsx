"use client";

const Mission = () => {
  return (
    <section className="section-padding relative">
      {/* Background Overlay with Mission Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(43, 51, 126, 0.9), rgba(43, 51, 126, 0.7)), url('/images/mission-vision.jpeg')`,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 container-custom text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            {/* Mission */}
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                To provide exceptional real estate consultancy services with our
                seasoned leadership in delivering personalized, transparent and
                innovative real-estate solutions—empowering clients with
                confidence, clarity and superior investment outcomes
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                To be the trusted leader in the industry - where unwavering
                integrity, relentless commitment and tenacious grit drive us to
                exceed expectations, build lasting partnerships and deliver
                exceptional outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
