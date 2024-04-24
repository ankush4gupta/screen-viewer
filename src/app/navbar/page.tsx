import Options from "../options/page";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image'
interface NavbarProps {
    onButtonClick: (height: string, width: string) => void;
    onSubmit: any
}
export default function NavBar({ onButtonClick, onSubmit }: NavbarProps) {
    const [inputHeight, setHeight] = useState<string>('');
    const [inputWidth, setWidth] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const handleButtonClick = (height: string, width: string) => {
        onButtonClick(height, width);
    };
    const handleRedirect = () => {
        window.open('https://github.com/ankush4gupta/screen-viewer','_blank'); // Replace 'your-github-username' with your actual GitHub username
    };
    const handleSubmit = () => {
        onSubmit(url);
    };

    return (
        <nav className="flex px-8 py-3 justify-between items-center blog-header z-50 w-full border-b relative transform-none md:sticky md:top-0 md:left-0 md:backdrop-blur-lg border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70">
            <Image className="hover:sepia"
                src="/assets/logo-removebg-preview.png"
                width={80}
                height={80}
                alt="Picture of the author"
            />
            <div className="flex items-center ">
                {/* default screen options */}
                <div className="flex items-center  h-2/3">
                    <Options name="Mobile" onClick={() => handleButtonClick('568', '320')} />
                    <Options name="Tab" onClick={() => handleButtonClick('1024', '768')} />
                    <Options name="Ipad" onClick={() => handleButtonClick('768', '1024')} />
                    <Options name="Desktop" onClick={() => handleButtonClick('900', '1440')} />
                </div>
                {/* Custom screen setter */}
                <div className="flex items-center">
                    <input
                        className="w-14 mx-4 rounded text-black-500 p-0.5 border-solid border-teal-500 border-2"
                        placeholder="width"
                        type="text"
                        onChange={(e) => setWidth(e.target.value)} />
                    <input
                        className="w-14 mr-4 rounded text-black-500 p-0.5 border-solid border-teal-500 border-2"
                        placeholder="height"
                        type="text"
                        onChange={(e) => setHeight(e.target.value)} />
                    <button className="p-2 flex items-center duration-100 ease-in-out hover:ring-blue-600 hover:ring-4 rounded-full transition  hover:bg-white/20 mx-3" onClick={() => handleButtonClick(inputHeight, inputWidth)}><TbHandClick size="2rem" color="white" /></button>
                </div>
                {/* website search bar */}
                <div className="flex items-center">
                    <input
                        className="mx-4  p-0.5 rounded text-black-500 border-solid border-teal-500 border-2"
                        type="text"
                        placeholder="Enter website URL"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <div className="cursor-progress p-2 flex items-center duration-100 ease-in-out hover:ring-blue-600 hover:ring-4 rounded-full transition  hover:bg-white/20 mx-3" onClick={handleSubmit}><IoIosSearch size="2rem" color="white" /></div>
                </div>
            </div>
            {/* Git-profile section and code repo */}
            <div className=" cursor-pointer p-2 h-1/2 flex items-center duration-100 ease-in-out hover:ring-blue-600 hover:ring-4 rounded-full transition  hover:bg-white/20 mx-3" onClick={handleRedirect}><FaGithub color="white" size="2.5rem"/></div>
        </nav>
    );
}