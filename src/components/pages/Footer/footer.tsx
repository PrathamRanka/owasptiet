"use client";

import StickyFooter from "@/components/ui/footer-ui/footer-ui";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Pencil,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter 10-digit phone";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (formData.message.trim().length < 10) newErrors.message = "Message too short";

    setErrors(newErrors);
    return Object.values(newErrors).every((v) => v === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/meozeqwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong");

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <main className="text-foreground cursor-none">
      {/* Quote */}
      <div className="flex items-center justify-center px-4 pt-10 md:pt-24 cursor-none">
        <div className="text-center cursor-none">
          <h2 className="text-white font-serif font-extrabold tracking-tight text-[9vw] md:text-[5vw] leading-tight mb-4 cursor-none">
            “Talk is cheap. Show me the code.”
          </h2>
          <p className="text-gray-400 italic text-base md:text-xl mb-2 cursor-none">
            — Linus Torvalds
          </p>
          <p className="text-white text-sm md:text-lg font-medium mt-2 cursor-none">
            At OWASP TIET, we live by this.
          </p>
          <p className="text-white text-sm md:text-lg font-medium cursor-none">
            Perfect for a society that builds, not just talks.
          </p>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 cursor-none" />
        </div>
      </div>

      {/* Query Form */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 mt-10 mb-24 rounded-2xl cursor-none">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-8 cursor-none">
          Got a Query? Let’s Talk
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5 cursor-none">
          <div className="grid md:grid-cols-2 gap-5 cursor-none">
            <FormField
              icon={<User className="text-gray-400 w-5 h-5 cursor-none" />}
              name="name"
              placeholder="Your Name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />
            <FormField
              icon={<Mail className="text-gray-400 w-5 h-5 cursor-none" />}
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              type="email"
              inputMode="email"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 cursor-none">
            <FormField
              icon={<Phone className="text-gray-400 w-5 h-5 cursor-none" />}
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
              type="tel"
              inputMode="numeric"
            />
            <FormField
              icon={<Pencil className="text-gray-400 w-5 h-5 cursor-none" />}
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              error={errors.subject}
              onChange={handleChange}
            />
          </div>

          <div className="relative cursor-none">
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message to make OWASP-TIET better"
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-white/10 text-white p-4 pl-12 rounded-lg border transition ${
                errors.message ? "border-red-500" : "border-white/10"
              } focus:outline-none focus:ring-2 focus:ring-primary resize-none cursor-none`}
            />
            <MessageSquare className="absolute top-4 left-4 text-gray-400 w-5 h-5 cursor-none" />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 cursor-none">{errors.message}</p>
            )}
          </div>

          <div className="text-center pt-4 cursor-none">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl border border-primary font-semibold bg-transparent text-white transition duration-200 cursor-none"
            >
              Send Message →
            </button>

            {submitted && (
              <p className="text-green-400 flex items-center justify-center mt-4 cursor-none">
                <CheckCircle className="mr-2 h-5 w-5 cursor-none" /> Message sent successfully!
              </p>
            )}
          </div>
        </form>
      </section>

      <StickyFooter />
    </main>
  );
}

type FormFieldProps = {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  type?: React.HTMLInputTypeAttribute;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function FormField({
  icon,
  name,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  inputMode,
}: FormFieldProps) {
  return (
    <div className="relative cursor-none">
      <input
        type={type}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-white/10 text-white p-4 pl-12 rounded-lg border transition ${
          error ? "border-red-500" : "border-white/10"
        } focus:outline-none focus:ring-2 focus:ring-primary cursor-none`}
      />
      <div className="absolute top-4 left-4 cursor-none">{icon}</div>
      {error && <p className="text-red-500 text-sm mt-1 cursor-none">{error}</p>}
    </div>
  );
}
