"use client";

import { useRef, useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "next/image";
import { useLang } from "@/providers/LangProvider";

interface TeamMember {
  name: string;
  role: string;
  education: string;
  bio: string;
  avatar: string;
  image: string;
  imagePosition?: string;
  color: string;
  link: string;
  linkType: string;
  video: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Saktawat Pairachsaranon",
    role: "Chief Executive Officer",
    education: "Computer Engineering, Chulalongkorn University",
    bio: "Specialized in health tech business modeling, published healthtech startup founder, leading market strategy.",
    avatar: "S",
    image: "/images/n.png",
    color: "#3b82f6",
    link: "https://www.linkedin.com/in/saktawatpairachsaranon/",
    linkType: "linkedin",
    video: "/videos/nice.mp4",
  },
  {
    name: "Peerapat Wattanakit",
    role: "Chief Operating Officer",
    education: "Computer Engineering, Chulalongkorn University",
    bio: "Specialized in project management, hardware IoT, health knowledge, and AI/ML implementation.",
    avatar: "P",
    image: "/images/p.jpg",
    imagePosition: "center 30%",
    color: "#8b5cf6",
    link: "/cv/peerapat",
    linkType: "cv",
    video: "/videos/pee.mp4",
  },
  {
    name: "Khunasin Suksri",
    role: "Chief Technology Officer",
    education: "Computer Engineering, Chulalongkorn University",
    bio: "Specialized in full-stack development, building scalable healthcare platforms and systems.",
    avatar: "K",
    image: "/images/m.png",
    color: "#10b981",
    link: "https://www.linkedin.com/in/khunasin-suksri-bb8796293/",
    linkType: "linkedin",
    video: "/videos/mhee.mp4",
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");
  const { t } = useLang();

  const handleOpenVideo = (video: string, name: string) => {
    setSelectedVideo(video);
    setSelectedName(name);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setSelectedName("");
  };

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-accent/30 transition-all duration-500 hover:shadow-lg cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 120}ms`,
              }}
              onClick={() => handleOpenVideo(member.video, member.name)}
            >
              {/* Play icon - top left */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircleOutlineIcon 
                  sx={{ 
                    fontSize: 28, 
                    color: member.color,
                  }} 
                />
              </div>
              <div className="relative mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{
                    boxShadow: `0 4px 14px ${member.color}30`,
                    border: `3px solid ${member.color}20`,
                    objectPosition: member.imagePosition || "center",
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-semibold mb-1">
                {member.role}
              </p>
              <p className="text-gray-400 text-xs mb-3 whitespace-nowrap">
                {member.education}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="flex justify-center gap-1">
                <IconButton
                  size="small"
                  sx={{ 
                    color: member.linkType === "cv" ? "#dc2626" : "#0077b5", 
                    "&:hover": { color: member.linkType === "cv" ? "#b91c1c" : "#005885" } 
                  }}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {member.linkType === "cv" ? (
                    <DescriptionIcon fontSize="small" />
                  ) : (
                    <LinkedInIcon fontSize="small" />
                  )}
                </IconButton>
              </div>
            </div>
          ))}
        </div>

        {/* Team Image */}
        <div 
          className="mt-16 max-w-4xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
            transition: "all 0.8s ease 0.5s",
          }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <Image 
              src="/images/team.png" 
              alt="Our Team" 
              width={896}
              height={504}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div 
              className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p className="text-lg font-semibold text-center">{t("team.chip")}</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <Modal
          open={!!selectedVideo}
          onClose={handleCloseVideo}
          aria-labelledby="video-modal"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
              bgcolor: "black",
              borderRadius: 2,
              overflow: "hidden",
              outline: "none",
            }}
          >
            <IconButton
              onClick={handleCloseVideo}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={{ p: 2, color: "white", bgcolor: "rgba(0,0,0,0.8)" }}>
              <h3 className="text-lg font-semibold">{selectedName}</h3>
            </Box>
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                style={{ width: "100%", display: "block" }}
              />
            )}
          </Box>
        </Modal>
      </div>
    </section>
  );
}
