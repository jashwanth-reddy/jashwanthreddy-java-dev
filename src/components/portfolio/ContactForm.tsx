
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_jyav1pg";
const EMAILJS_TEMPLATE_ID = "template_e2zs88b";
const EMAILJS_PUBLIC_KEY = "h-w7zOw4QZ4zMY7K7";

// Mapping form fields to EmailJS template variables: you must ensure your template
// expects 'from_name', 'from_email', and 'message' (these are commonly used variable names).
function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Map form fields to template variables
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! Jashwanth will get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
      // Optional: You can console log the error for debugging
      // console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 max-w-xl mx-auto w-full flex flex-col gap-4 shadow">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="name">Name</label>
        <Input
          required
          id="name"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="email">Email</label>
        <Input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          name="message"
          className="resize-none bg-background border rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="How can I help you?"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <Button disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
    </form>
  );
}

export default ContactForm;
