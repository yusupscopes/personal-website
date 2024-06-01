import React from "react";
import { DocumentDownloadIcon } from "@heroicons/react/solid";

export default function Resume() {
  const downloadResume = () => {
    // You can link this to your actual resume file
    const link = document.createElement("a");
    link.href = "/Yusup_Maulana_Resume_Mei_20_2024.pdf";
    link.download = "Yusup_Maulana_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <DocumentDownloadIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Resume
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Download my resume to learn more about my professional experience
              and skills.
            </p>
            <button
              onClick={downloadResume}
              className="mt-8 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
