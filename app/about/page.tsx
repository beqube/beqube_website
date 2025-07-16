import {
  CheckCircle,
  Target,
  Eye,
  Users,
  TrendingUp,
  Building2,
  BarChart3,
  Database,
} from "lucide-react";
import Image from "next/image";
import TeamSection from "./TeamSection"; // Import client component

export const metadata = {
  title: "About Us - Beqube Consultancy",
  description:
    "Learn about Beqube Consultancy's mission, vision, and expert team dedicated to providing exceptional real estate consultancy services.",
};

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: "INTEGRITY",
      description:
        "We conduct business with the highest ethical standards and transparency.",
    },
    {
      icon: Target,
      title: "LEADERSHIP",
      description:
        "We lead by example, guiding clients and our team with vision, expertise, and confidence.",
    },
    {
      icon: Eye,
      title: "INNOVATION",
      description:
        "We embrace innovative solutions to meet evolving market demands.",
    },
    {
      icon: Users,
      title: "COLLABORATION",
      description:
        "We foster strong partnerships through open communication and shared goals.",
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Marketing",
      description:
        "Comprehensive marketing solutions including digital, traditional, and innovative strategies to boost your real estate brand.",
    },
    {
      icon: Users,
      title: "Residential Consultancy",
      description:
        "Expert guidance for buying, selling, and investing in residential properties with personalized solutions.",
    },
    {
      icon: Building2,
      title: "Commercial Advisory",
      description:
        "Strategic retail and commercial real estate solutions to maximize your property investments and returns.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description:
        "In-depth market research and strategic advisory services to make data-driven real estate decisions.",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description:
        "Advanced market analysis and trend forecasting to identify profitable investment opportunities.",
    },
    {
      icon: Database,
      title: "CRM Solutions",
      description:
        "Integrated customer relationship management systems to streamline your real estate business operations.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative h-60 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(43, 51, 126, 0.7), rgba(43, 51, 126, 0.7)), url('/images/about-bg.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-montserrat text-4xl md:text-7xl font-bold mb-4 text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* Who We Are - FIXED SECTION */}
      <section className="section-padding relative bg-gray-50 overflow-hidden">
        {/* Background Logo with proper visibility */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-15"
          style={{
            backgroundImage: `url('/images/Logo-03.png')`,
            backgroundSize: "50%",
          }}
        />

        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-gray-50/80 to-white/60" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-primary mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed md:text-2xl">
              <p>
                Beqube Consultancy is a full-service real estate consultancy
                firm specializing in retail, residential, and strategic advisory
                services.
              </p>
              <p>
                Our team of experienced professionals brings together decades of
                combined experience in real estate markets, investment
                strategies, and property management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-primary mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our comprehensive services cover every aspect of real estate
              consultancy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-open-sans text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-primary mb-8">
                Our Mission & Vision
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-montserrat text-2xl font-semibold text-primary mb-4">
                    Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-open-sans text-sm md:text-lg">
                    To provide exceptional real estate consultancy services with
                    our seasoned leadership in delivering personalized,
                    transparent and innovative real-estate solutions—empowering
                    clients with confidence, clarity and superior
                    investment outcomes
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-2xl font-semibold text-primary mb-4">
                    Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-open-sans text-sm md:text-lg">
                    To be the trusted leader in the industry - where unwavering
                    integrity, relentless commitment and tenacious grit drive us
                    to exceed expectations, build lasting partnerships and
                    deliver exceptional outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-montserrat font-bold text-primary mb-2 text-sm md:text-lg">
                    {value.title}
                  </h4>
                  <p className="text-sm font-open-sans text-gray-700 text:sm md:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 👇 Team Section is now imported as a Client Component */}
      <TeamSection />
    </div>
  );
}
