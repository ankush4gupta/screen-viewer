"use client"
import { useState, useRef } from "react";
import NavBar from "./navbar/page";
export default function Home() {
  const [iframeHeight, setIframeHeight] = useState<string>('600');
  const [iframeWidth, setIframeWidth] = useState<string>('800');
  const iframeRef = useRef(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const handleButtonClick = (height: string, width: string) => {
    console.log(height, width)
    setIframeHeight(height);
    setIframeWidth(width);
  };
  // const handleSearch = () => {
  //   if (iframeRef.current && websiteUrl) {
  //     iframeRef.current.src = websiteUrl;
  //   }
  // };
  const handleNavbarUrlSubmit = (url: string) => {
    setWebsiteUrl(url);
  };
  return (
    <main className="">
      <div>
        <NavBar onSubmit={handleNavbarUrlSubmit} onButtonClick={handleButtonClick} />

        <div className="flex justify-center">
          <iframe
            src={websiteUrl}
            className="bg-teal-200"
            style={{ width: `${iframeWidth}px`, height: `${iframeHeight}px` }}
            title="Preview"
          />
        </div>

      </div>












    </main>
  );
}
