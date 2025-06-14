
import React from "react";
import { FolderOpen, Rocket } from "lucide-react";

const projects = [
  {
    name: "IMAGINE – CONSUMER (ONESQ)",
    company: "TCS Project",
    period: "Jan 2024 – Present",
    icon: Rocket,
    highlights: [
      "REST API development for service qualification in Australia.",
      "Built RIO CI/CD pipelines for AWS EC2 deployment.",
      "Integrated high-performance backend microservices.",
    ],
  },
  {
    name: "E-commerce Backend System",
    company: "Personal Project",
    icon: FolderOpen,
    highlights: [
      "Microservices-based ecommerce backend using Spring Boot.",
      "Focused on scalability, modularity, and API design.",
    ],
  },
];

function PortfolioProjects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mx-auto">
      {projects.map((proj) => (
        <div
          key={proj.name}
          className="bg-card rounded-lg shadow-md p-6 flex flex-col gap-2 border border-border hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-1">
            <proj.icon size={22} className="text-primary" />
            <h4 className="text-lg font-semibold">{proj.name}</h4>
          </div>
          <div className="text-muted-foreground text-xs mb-1">{proj.company}{proj.period ? ` • ${proj.period}` : ""}</div>
          <ul className="list-disc list-inside text-foreground text-sm pl-2">
            {proj.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PortfolioProjects;

