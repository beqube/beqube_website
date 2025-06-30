"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    description:
      "With over 15 years of experience in real estate consultancy, Sarah founded Beqube Consultancy with a vision to transform how clients approach property investments. Her expertise spans residential, commercial, and retail real estate markets across multiple regions.",
    bio: "Sarah holds an MBA in Real Estate Finance and is a certified real estate consultant...",
    image: "/images/profile-1.jpg",
    skills: ["Real Estate Finance", "Investment Strategy", "Market Analysis"],
  },
  {
    name: "Michael Chen",
    role: "Senior Consultant",
    description:
      "Michael brings over a decade of hands-on experience in commercial and retail property investments. His analytical approach and deep market knowledge have been instrumental in structuring high-value deals.",
    bio: "He has led strategic consulting projects across major metro cities and holds certifications in commercial real estate and portfolio analysis.",
    image: "/images/profile-1.jpg",
    skills: ["Commercial Advisory", "Retail Leasing", "Portfolio Management"],
  },
  {
    name: "Emily Rodriguez",
    role: "Market Analyst",
    description:
      "Emily is a detail-oriented market analyst who brings clarity and data-backed insights into property trends and investment opportunities.",
    bio: "With a background in data science and finance, she crafts predictive models that guide client strategies.",
    image: "/images/profile-1.jpg",
    skills: [
      "Data Modeling",
      "Investment Forecasting",
      "Real Estate Analytics",
    ],
  },
];

export default function TeamSection() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleReadMore = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-700">
              Meet the experienced professionals leading our consultancy
            </p>
          </div>

          <div className="space-y-24">
            {teamMembers.map((member, index) => {
              const isExpanded = expandedIndexes.includes(index);
              const shortDesc =
                member.description.split(". ").slice(0, 2).join(". ") + ".";

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div className="order-1">
                    <div className="relative w-full h-[500px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-2xl shadow-xl object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="order-2 space-y-4">
                    <div>
                      <h3 className="font-poppins text-2xl font-bold text-primary">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {isExpanded ? member.description : shortDesc}
                    </p>

                    {!isExpanded && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-primary underline focus:outline-none"
                      >
                        Read more
                      </button>
                    )}

                    {isExpanded && (
                      <p className="text-gray-600 leading-relaxed transition-all duration-500 ease-in-out">
                        {member.bio}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
