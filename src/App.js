import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Croissant } from "lucide-react";

function App() {
  const [clicked, setClicked] = useState(false);

  const showToast = () => {
    toast.success("Let’s work together!", {
      duration: 8000, // Toast stays longer
      description:
        "Why hire me? I love toast! But seriously — I'm looking to pivot into a dedicated security role and would love to do so with you. I've always worked closely with security teams and currently use CrowdStrike to detect and remediate vulnerabilities. I'm naturally security-minded, eager to grow, and ready to put my skills to work for your team.",
      icon: <Croissant className="text-[#FF6F00]" />,
    });
    setClicked(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1C1C1E", // ToastTab-like dark background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#F5F5F7", // Light cream text
        fontFamily: "'Segoe UI', sans-serif",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1.5rem",
          color: "#FF6F00", // ToastTab orange
        }}
      >
        Welcome!
      </h1>
      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          fontSize: "1.1rem",
          marginBottom: "2rem",
        }}
      >
        I'm passionate about security and ready for my next challenge.
        Curious? Hit the toast!
      </p>
      <button
        onClick={showToast}
        style={{
          backgroundColor: "#FF6F00",
          color: "#FFFFFF",
          fontSize: "1.2rem",
          padding: "0.75rem 2rem",
          borderRadius: "1rem",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
      >
        Click for Toast 🥐
      </button>

      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "w-[500px] max-w-[90%] text-left text-base px-6 py-4 rounded-xl bg-white text-black shadow-lg",
            description: "mt-2 leading-relaxed",
          },
        }}
      />
    </div>
  );
}

export default App;
