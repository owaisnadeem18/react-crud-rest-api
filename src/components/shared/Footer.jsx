import React from "react";
import { CodeIcon, CopyrightIcon, Github, Linkedin, Paintbrush2Icon, PaintBucket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      {/* Upper Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 border-b border-gray-700">
        
        {/* Text */}
        <p className="text-sm text-gray-300">
          Developed with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-semibold text-white">Owais</span>
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="https://github.com/owaisnadeem18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGbMFknhHH_lQAAAZjhilSgsPIcbXRGmGxxufOhue0ocIBYAngCoMGgfuQo2XWiJlLSXsHcDZI59Q7n795OGEMDhpuS-Exig1VceftbTbNm-4VXXgiHwnb1en0cnFYeOqBGOOE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fowais-nadeem%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Lower Section */}
      <div className="text-center py-3 text-gray-400 text-xs flex items-center gap-1 w-full justify-center">
        <CopyrightIcon className="inline-block w-4" /> {new Date().getFullYear()} Owais Nadeem. All rights reserved | Built with React & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
