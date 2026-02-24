"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
export default function PeerapatCVPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.location.replace("https://drive.google.com/file/d/1aJLGEax7msYZ5ZDJVOfNutWaQEx0Fatm/view?usp=sharing");
  }, []);
  return null;
}
