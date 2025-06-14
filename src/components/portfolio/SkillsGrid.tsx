
import React from "react";
import {
  Server,
  Database,
  Cloud,
  GitBranch,
  Network,
  Settings2,
  Hammer,
  Dock,
  Box,
  LayoutGrid,
  Repeat2,
  Zap,
  ChevronRight,
  Code2,
} from "lucide-react"; // correct imports for available icons

const skills = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "Microservices", icon: LayoutGrid },
  { name: "REST APIs", icon: Network },
  { name: "AWS EC2", icon: Cloud },
  { name: "JPA/Hibernate", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Gradle", icon: Hammer },
  { name: "Docker", icon: Dock },
  { name: "Git", icon: GitBranch },
  { name: "CI/CD", icon: Repeat2 },
  { name: "Agile", icon: Zap },
];

function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6 w-full mx-auto max-w-3xl">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center group hover:scale-105 transition-transform duration-150"
        >
          <div className="bg-muted rounded-full p-3 mb-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <skill.icon size={28} />
          </div>
          <div className="text-xs md:text-sm font-medium text-foreground">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SkillsGrid;
