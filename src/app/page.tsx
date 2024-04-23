"use client"
import { useState, useRef } from "react";
import NavBar from "./navbar/page";
import Image from "next/image";
export default function Home() {
  const [iframeHeight, setIframeHeight] = useState<string>('600');
  const [iframeWidth, setIframeWidth] = useState<string>('800');
  const [iframeError, setIframeError] = useState<boolean>(false);
  const [websiteUrl, setWebsiteUrl] = useState("https://getcssscan.com/css-box-shadow-examples");
  
  const handleIframeError = (e:any) => {
    console.log("element",e)
    console.log("error in loading")
    // setIframeError(true); // Set error state when iframe fails to load
  };
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
          {
            iframeError ? (<p>ERROR</p>) : (<iframe
              src={websiteUrl}
              onError={handleIframeError}
              // onLoad={handleIframeError}
              className="shadow-green-600 shadow-2xl rounded"
              style={{ width: `${iframeWidth}px`, height: `${iframeHeight}px` }}
              title="Preview"
            />)
          }
        </div>

      </div>
    












    </main>
  );
}
