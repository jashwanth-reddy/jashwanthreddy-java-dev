import React from "react";
import ProfilePhoto from "@/components/portfolio/ProfilePhoto";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SkillsGrid from "@/components/portfolio/SkillsGrid";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";
import ContactForm from "@/components/portfolio/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

// Profile and social info
const EMAIL = "mr.jashwanthreddy@gmail.com";
const PHONE = "8886093806";
const LINKEDIN = "https://www.linkedin.com/in/jashwanth-reddy-karumudi";
const GITHUB = "https://github.com/jashwanthreddy10";

const PROFILE_IMG_URL = "https://i.postimg.cc/2jHNzHyP/jashuuu.jpg";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NAV_LINKS = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="fixed z-20 top-0 left-0 w-full bg-background/80 shadow-sm backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
            <span className="text-primary">Jashwanth</span>
            <span className="hidden md:inline text-muted-foreground font-light">Portfolio</span>
          </div>
          <ul className="flex gap-2 md:gap-6 items-center text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <button
                  className="hover:text-primary transition-colors px-2 py-1 rounded focus:outline-none focus:text-primary"
                  onClick={() => scrollToSection(link.to)}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Body */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 py-16 max-w-6xl mx-auto"
          style={{ minHeight: "70vh" }}
        >
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-1">
              Jashwanth Reddy Karumudi
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-2">
              Java Backend Developer
            </h2>
            <p className="max-w-xl text-muted-foreground text-base md:text-lg mb-4">
              Expert in developing microservices, REST APIs, and high-performance backend systems.<br />
              Tech stack includes Java, Spring Boot, AWS, Docker, MySQL, and CI/CD for enterprise-scale solutions.
            </p>
            <Button
              size="lg"
              className="mt-2"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </Button>
          </div>
          <div className="mt-6 md:mt-0">
            <ProfilePhoto src={PROFILE_IMG_URL} className="w-40 h-40 md:w-48 md:h-48 mx-auto" />
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-16 px-4 max-w-3xl mx-auto relative"
        >
          <SectionHeading title="About Me" />
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <ProfilePhoto src={PROFILE_IMG_URL} className="w-28 h-28 border-2 border-primary/30" />
            <div>
              <p className="text-lg mb-4">
                Java Backend Developer with 3+ years of experience and proven ability to independently deliver scalable backend applications using Java, Spring Boot, and AWS. Currently working at TCS as the sole backend developer for a mission-critical microservices-based system for a leading Australian telecom client. Certified in Spring Boot and DevOps, and skilled in REST APIs, CI/CD, and cloud-native deployment.
              </p>
              <div className="mt-4">
                <h3 className="text-md font-semibold mb-1">Education</h3>
                <ul className="text-sm text-muted-foreground">
                  <li>
                    <b>B.Tech in Computer Science Engineering</b>
                  </li>
                  <li>Anubose Institute of Technology, New Paloncha</li>
                  <li>Graduated in 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
          <SectionHeading title="Experience" subtitle="Professional Journey" align="left" />
          <ExperienceTimeline />
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
          <SectionHeading title="Skills & Tech Stack" subtitle="A toolkit for scalable backend systems" align="left" />
          <SkillsGrid />
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-4 max-w-4xl mx-auto">
          <SectionHeading
            title="Services"
            subtitle="Backend expertise tailored for scalable solutions"
            align="left"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {/* Backend Development */}
            <div className="bg-muted rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2">Backend Development</h4>
              <ul className="list-disc list-inside text-base text-muted-foreground">
                <li>Scalable backend systems</li>
                <li>Java & Spring Boot microservices</li>
              </ul>
            </div>
            {/* API Integration */}
            <div className="bg-muted rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2">API Integration</h4>
              <ul className="list-disc list-inside text-base text-muted-foreground">
                <li>RESTful API design</li>
                <li>Robust integrations</li>
              </ul>
            </div>
            {/* Cloud Deployment */}
            <div className="bg-muted rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2">Cloud Deployment</h4>
              <ul className="list-disc list-inside text-base text-muted-foreground">
                <li>Deploy on AWS EC2</li>
                <li>CI/CD automation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-16 px-4 max-w-5xl mx-auto">
          <SectionHeading title="Portfolio" subtitle="Selected Projects" align="left" />
          <PortfolioProjects />
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
          <SectionHeading title="Contact" subtitle="Let's Connect" align="left" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <ContactForm />
            {/* Info */}
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <span>{PHONE}</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-primary" size={20} />
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-primary" size={20} />
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-background/80 text-center text-xs text-muted-foreground border-t">
          <div>
            &copy; {new Date().getFullYear()} Jashwanth Reddy Karumudi &mdash; Powered by Lovable
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
