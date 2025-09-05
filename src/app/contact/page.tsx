"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
type formStatus = "idle" | "loading" | "success" | "error";
const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<formStatus>("idle");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-20 text-center">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I&apos;m always open to dicussing new projects, creative ideas, or
            oppotunities to be part of your visions.{" "}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email:</h3>
                <Link
                  href="mailto:tdat96386@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  tdat96386@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone </h3>
                <Link
                  href="tel:+0942417773"
                  className="text-secondary hover:text-primary"
                >
                  0942417773
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Ho Chi Minh City</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2">
                Name:{" "}
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2">
                Email:{" "}
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                required
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2">
                Message:{" "}
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button type="submit" className="w-full btn btn-primary">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
