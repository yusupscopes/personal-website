import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Yusup Maulana</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/yusup-maulana-878989172/"
            target="_blank"
            className="text-gray-400 hover:text-gray-300"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.25 10.29h-2.5v-4.5c0-1.19-.96-2.16-2.16-2.16s-2.16.96-2.16 2.16v4.5h-2.5v-9h2.5v1.48c.69-1.01 1.94-1.48 3.11-1.48 2.29 0 4.16 1.86 4.16 4.16v4.84z" />
            </svg>
          </a>
          <a
            href="mailto:yusupmaulana950@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-gray-300"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/yusupreads"
            target="_blank"
            className="text-gray-400 hover:text-gray-300"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.331 3.608 1.307.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.331 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.331-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.331-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.012-4.947.07-1.276.058-2.556.337-3.535 1.316-.979.979-1.258 2.259-1.316 3.535-.058 1.28-.07 1.69-.07 4.947s.012 3.667.07 4.947c.058 1.276.337 2.556 1.316 3.535.979.979 2.259 1.258 3.535 1.316 1.28.058 1.69.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.556-.337 3.535-1.316.979-.979 1.258-2.259 1.316-3.535.058-1.28.07-1.69.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.337-2.556-1.316-3.535-.979-.979-2.259-1.258-3.535-1.316-1.28-.058-1.69-.07-4.947-.07zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
