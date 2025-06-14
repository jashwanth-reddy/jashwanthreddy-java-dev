
import React from "react";
import { Building, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "System Engineer",
    company: "Tata Consultancy Services",
    period: "Jan 2024 – Present",
    points: [
      "Sole developer of a microservices-based backend for an Australian telecom client.",
      "Built RESTful APIs with Java, Spring Boot, deployed on AWS EC2.",
      "CI/CD implementation with RIO.",
    ],
    icon: Briefcase,
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    period: "Dec 2021 – Dec 2023",
    points: [
      "Maintained backend modules, contributed to Agile teams.",
      "Optimized backend logic.",
    ],
    icon: Building,
  },
];

function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp, idx) => (
        <div
          key={exp.role}
          className="flex gap-4 items-start pb-4 border-l-2 border-muted relative group"
        >
          <div className="absolute -left-5 top-1.5 bg-background rounded-full p-1 border border-primary shadow">
            <exp.icon size={22} className="text-primary" />
          </div>
          <div className="ml-4">
            <div className="flex flex-wrap items-center gap-x-3">
              <h3 className="font-bold text-lg md:text-xl">{exp.role}</h3>
              <span className="text-primary/80 text-sm font-semibold">{exp.company}</span>
              <span className="text-xs md:text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside mt-2 text-foreground/90 text-sm md:text-base">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;

