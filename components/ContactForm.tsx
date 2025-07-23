"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Button from "./Button"; // ✅ Adjust path if needed

interface ContactFormProps {
  scriptUrl: string;
}

const ContactForm = ({ scriptUrl }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("date", new Date().toLocaleDateString());

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="section-padding">
        <div className="px-0 md:container-custom">
          <div className="max-w-4xl md:mx-auto text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 md:p-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-montserrat text-2xl font-bold text-primary mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-primary/80">
                Thank you for contacting us. We&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="px-0 md:container-custom">
        <div className="max-w-4xl md:mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Ready to start your real estate journey? Contact us today for a
              consultation.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-4 px-2 md:p-12 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B337E22] via-[#2B337E] to-[#2B337E22]" />
            <div className="absolute inset-0 rounded-3xl border border-gray-100 shadow-inner pointer-events-none z-0" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pt-8 md:pt-12 pb-2 border-b-2 border-gray-200 bg-transparent focus:border-primary focus:outline-none peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-1 text-sm md:text-base text-primary transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm md:peer-focus:text-base peer-focus:text-primary font-montserrat"
                  >
                    Full Name *
                  </label>
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pt-8 md:pt-12 pb-2 border-b-2 border-gray-200 bg-transparent focus:border-primary focus:outline-none peer font-montserrat"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-1 text-sm md:text-base text-primary transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm md:peer-focus:text-base peer-focus:text-primary font-montserrat"
                  >
                    Email Address *
                  </label>
                </div>
              </div>

              {/* Mobile Number */}
              <div className="relative">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full pt-8 md:pt-12 pb-2 border-b-2 border-gray-200 bg-transparent focus:border-primary focus:outline-none peer font-montserrat"
                />
                <label
                  htmlFor="mobile"
                  className="absolute left-0 top-1 text-sm md:text-base text-primary transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm md:peer-focus:text-base peer-focus:text-primary font-montserrat"
                >
                  Mobile Number *
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pt-8 md:pt-12 pb-2 border-b-2 border-gray-200 bg-transparent focus:border-primary focus:outline-none peer resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-1 text-sm md:text-base text-primary transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm md:peer-focus:text-base peer-focus:text-primary font-montserrat"
                >
                  Message *
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                {isSubmitting ? (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center space-x-2 text-lg px-6 py-3 md:px-8 md:py-4 opacity-50 cursor-not-allowed"
                  >
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#2b337e]"></div>
                    <span className="text-[#2b337e]">Sending...</span>
                  </button>
                ) : (
                  <Button
                    type="submit"
                    text={
                      (
                        <span className="inline-flex items-center space-x-2">
                          <span>Send Message</span>
                          <Send size={20} />
                        </span>
                      ) as unknown as string // trick to satisfy the type check
                    }
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
