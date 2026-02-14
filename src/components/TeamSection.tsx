"use client";

import { useRef, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { useLang } from "@/providers/LangProvider";

const TEAM = [
  {
    name: "Natasha Park",
    role: "CEO & Co-Founder",
    bio: "15+ years in enterprise software. Previously VP Engineering at a Fortune 500 fintech.",
    avatar: "N",
    color: "#3b82f6",
  },
  {
    name: "Patrick Morgan",
    role: "CTO & Co-Founder",
    bio: "Cloud architecture expert. AWS Hero & open-source contributor with 10k+ GitHub stars.",
    avatar: "P",
    color: "#8b5cf6",
  },
  {
    name: "Maya Chen",
    role: "Head of AI/ML",
    bio: "PhD in Machine Learning from MIT. Led AI research at two unicorn startups.",
    avatar: "M",
    color: "#10b981",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Full-stack veteran, scaling distributed systems to millions of daily active users.",
    avatar: "D",
    color: "#f59e0b",
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Chip
            label={t("team.chip")}
            size="small"
            sx={{
              bgcolor: "#eff6ff",
              color: "#3b82f6",
              fontWeight: 700,
              mb: 2,
            }}
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {t("team.title1")}{" "}
            <span className="text-accent">{t("team.titleAccent")}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("team.sub")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-accent/30 transition-all duration-500 hover:shadow-lg"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 120}ms`,
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  fontSize: "2rem",
                  fontWeight: 700,
                  bgcolor: `${member.color}18`,
                  color: member.color,
                  mx: "auto",
                  mb: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                {member.avatar}
              </Avatar>
              <h3 className="text-lg font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="flex justify-center gap-1">
                <IconButton size="small" sx={{ color: "#6b7280" }}>
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: "#6b7280" }}>
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
