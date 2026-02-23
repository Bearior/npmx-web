"use client";

import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { useEffect } from "react";

export default function PeerapatCVPage() {
  useEffect(() => {
    window.location.replace("https://drive.google.com/file/d/1aJLGEax7msYZ5ZDJVOfNutWaQEx0Fatm/view?usp=sharing");
  }, []);
  return null;
}
