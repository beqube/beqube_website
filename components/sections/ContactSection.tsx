"use client";
import ContactForm from "../ContactForm";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwXGkCPMQ5AFyM9zqKZx7_3S9nRKhRZ_ZK7XDPm4vIrHZOH5vmZKJsdhWIiqhMdhD8r/exec";

const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ContactForm scriptUrl={GOOGLE_SCRIPT_URL} />
      </div>
    </section>
  );
};

export default ContactSection;
