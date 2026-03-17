"use client";

import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  type StatusType = {
    type: "success" | "error";
    message: string;
  } | null;

  const [status, setStatus] = useState<StatusType>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeelbwbv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        form.reset();
      } else {
        const data = await response.json();
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="h-full py-12 xl:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center xl:text-left mb-12 xl:mb-16">
          <h2 className="h2 text-accent">Let&apos;s Connect</h2>
          <p className="text-white/80 max-w-[600px] mx-auto xl:mx-0">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        {/* Column Layout */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* Left Column - Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-white/70">
                I&apos;m currently available for freelance work or full-time opportunities.
                The quickest way to reach me is via email or phone.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a
                    href="mailto:uzairriasat510@gmail.com"
                    className="text-white hover:text-accent transition-colors"
                  >
                    uzairriasat510@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <a
                    href="tel:+923018759589"
                    className="text-white hover:text-accent transition-colors"
                  >
                    +92 301 8759589
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="text-white">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6">
              <p className="text-sm text-white/60 mb-3">Follow me</p>
              <Socials
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
              />
            </div>
          </div>

          {/*Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/30 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              {/* Status Message */}
              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-500 border border-green-500"
                      : "bg-red-500/20 text-red-500 border border-red-500"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="outline"
                size="lg"
                disabled={isSending}
                className="w-full uppercase flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;