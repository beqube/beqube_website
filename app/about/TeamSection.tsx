"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Shreyas Bhopatkar",
    role: "Founder & CEO",
    bio: "Shreyas holds an MBA in Marketing and Finance",
    description:
      "With over 10 years of experience in real estate consultancy, Shreyas founded Beqube Consultancy with a vision to transform how clients approach property investments. He specializes in residential, commercial, and retail real estate markets across multiple regions.",
    image: "/images/shreyas-img3.png",
    skills: ["Real Estate Finance", "Investment Strategy", "Market Analysis"],
  },
  {
    name: "Yash Kunder",
    role: "Senior Consultant",
    bio: "He has led strategic consulting projects across major metro cities and holds certifications in commercial real estate and portfolio analysis.",
    description:
      "Yash brings over a 8 years of hands-on experience in commercial and retail property investments. His analytical approach and deep market knowledge have been instrumental in structuring high-value deals.",
    image: "/images/profile-1.jpg",
    skills: ["Commercial Advisory", "Retail Leasing", "Portfolio Management"],
  },
];

export default function TeamSection() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleReadMore = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getShortDescription = (description: string) => {
    const words = description.split(" ");
    const firstFiveLines = words.slice(0, Math.min(words.length, 25)).join(" "); // Approximately 5 lines worth of words
    return firstFiveLines + (words.length > 25 ? "..." : "");
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-700 font-open-sans">
              Meet the experienced professionals leading our consultancy
            </p>
          </div>

          <div className="space-y-24">
            {teamMembers.map((member, index) => {
              const isExpanded = expandedIndexes.includes(index);
              const shortDesc = getShortDescription(member.description);

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div className="order-1 flex justify-center">
                    <div className="relative w-full max-w-[320px] h-[350px] md:h-[400px] p-4 bg-white rounded-3xl shadow-lg">
                      <div className="relative w-full h-full border-4 border-primary/20 rounded-2xl overflow-hidden">
                        {index === 0 ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-primary text-center px-4">
                              {member.name}
                            </h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="order-2 space-y-4">
                    <div>
                      <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-primary">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg md:font-bold font-montserrat">
                        {member.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-2 font-bold md:font-bold">
                        {member.bio}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed font-open-sans">
                      {isExpanded ? member.description : shortDesc}
                    </p>

                    {!isExpanded && shortDesc.endsWith("...") && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-primary underline focus:outline-none"
                      >
                        Read more
                      </button>
                    )}

                    {isExpanded && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-primary underline focus:outline-none"
                      >
                        Read less
                      </button>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm md:text-base font-bold"
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
