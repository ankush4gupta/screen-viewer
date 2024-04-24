"use client"
import { useState } from "react";
import NavBar from "./navbar/nav";
export default function Home() {
  const [iframeHeight, setIframeHeight] = useState<string>('600');
  const [iframeWidth, setIframeWidth] = useState<string>('800');
  const [iframeError, setIframeError] = useState<boolean>(false);
  const [websiteUrl, setWebsiteUrl] = useState("https://getcssscan.com/css-box-shadow-examples");
  
  const handleIframeError = (e:any) => {
    console.log("element",e)
    console.log("error in loading")
    
  };
  const handleButtonClick = (height: string, width: string) => {
    console.log(height, width)
    setIframeHeight(height);
    setIframeWidth(width);
  };
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
              className="shadow-blue-400 shadow-2xl rounded"
              style={{ width: `${iframeWidth}px`, height: `${iframeHeight}px` }}
              title="Preview"
            />)
          }
        </div>

      </div>
    












    </main>
  );
}
