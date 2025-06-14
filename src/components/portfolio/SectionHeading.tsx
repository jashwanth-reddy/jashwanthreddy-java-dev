
import React from "react";

function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeading;

