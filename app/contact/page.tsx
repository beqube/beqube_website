"use client";

import type React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm"; // adjust the path if needed

export default function Contact() {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwXGkCPMQ5AFyM9zqKZx7_3S9nRKhRZ_ZK7XDPm4vIrHZOH5vmZKJsdhWIiqhMdhD8r/exec";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Kalyan, Maharashtra, India"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["8369490500", "1234567890"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["Be.Beqube@gmail.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Sunday: 9:00 AM - 6:00 PM",
        // "Saturday: 9:00 AM - 7:00 PM",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Header with Background Image */}
      <section className="relative h-60 md:h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(43, 51, 126, 0.6), rgba(43, 51, 126, 0.6)), url('/images/contact-bg.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-roboto text-4xl md:text-6xl font-bold mb-4 text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm scriptUrl={GOOGLE_SCRIPT_URL} />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-poppins text-2xl font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We&apos;re here to help you with all your real estate needs.
                  Whether you&apos;re looking to buy, sell, or invest, our team
                  of experts is ready to provide you with personalized guidance
                  and support.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-primary mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with us and take the first step towards
            achieving your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8369490500"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: 8369490500
            </a>
            <a
              href="mailto:Be.Beqube@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
