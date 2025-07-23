import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "../Button";

const Team = () => {
  const teamMembers = [
    {
      name: "Shreyas Bhopatkar",
      position: "Founder & CEO",
      image: "/images/shreyas-img3.png",
      description: "Leading real estate expert with 15+ years of experience",
    },
    {
      name: "Yash Kunder",
      position: "Senior Consultant",
      image: "/images/profile-1.jpg",
      description: "Specializes in commercial and retail property advisory",
    },
  ];

  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-16 bg-gray-50">
      <div className="container-custom py-0 px-8 md:py-0 md:px-0 ">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            People built with Purpose and Unlocking Possibilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative h-80 p-4">
                <div className="relative w-full h-full border-4 border-primary/20 rounded-2xl overflow-hidden">
                  {index === 0 ? (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <h3 className="font-bold text-xl md:text-2xl text-primary text-center px-4">
                        {member.name}
                      </h3>
                    </div>
                  )}
                </div>
              </div>

              {/* Name and Position below the image */}
              <div className="p-6 text-center">
                <h3 className="font-montserrat text-xl font-semibold mb-1 text-primary">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Moved About Us Link below team grid */}

        <div className="text-center mt-4 md:mt-20">
          <Link href="/about">
            <Button text="About Us" />
          </Link>
        </div>
        {/* <div className="text-center">
          <Link
            href="/about"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>About Us</span>
            <ArrowRight size={20} />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
