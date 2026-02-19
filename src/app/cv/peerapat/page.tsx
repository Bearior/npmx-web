"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
export default function PeerapatCVPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Button
            href="/#team"
            startIcon={<ArrowBackIcon />}
            sx={{ color: "#64748b", "&:hover": { color: "#3b82f6" } }}
          >
            Back to Team
          </Button>
          <h1 className="text-lg font-bold text-primary">
            Peerapat Wattanakit - CV
          </h1>
          <Button
            href="/CV-Peerapat.pdf"
            download="CV-Peerapat-Wattanakit.pdf"
            startIcon={<DownloadIcon />}
            variant="contained"
            sx={{
              bgcolor: "#3b82f6",
              "&:hover": { bgcolor: "#2563eb" },
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Download
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto p-4">
        {isMobile ? (
          // Mobile fallback - show download button
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <p className="text-gray-600 mb-6">
              PDF preview is not supported on mobile devices.
            </p>
            <Button
              href="/CV-Peerapat.pdf"
              download="CV-Peerapat-Wattanakit.pdf"
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                bgcolor: "#3b82f6",
                "&:hover": { bgcolor: "#2563eb" },
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
              }}
            >
              Download CV
            </Button>
          </div>
        ) : (
          // Desktop - embed PDF
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="/CV-Peerapat.pdf"
              className="w-full"
              style={{ height: "calc(100vh - 120px)", minHeight: "600px" }}
              title="Peerapat Wattanakit CV"
            />
          </div>
        )}
      </div>
    </main>
  );
}
