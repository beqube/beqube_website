"use client";
import ContactForm from "../ContactForm";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby72smOlfUkRDl7dBjdVpI3-U6FKtPNaWo1x_XwA0bbVJCb_mfyfH2nB0dxVEZuYCpxkQ/exec";

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
