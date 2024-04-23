import Options from "../options/page";
import "./nav.css";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
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
    // const handleHeightInput = (event: React.ChangeEvent<HTMLInputElement>)=>{
    //     event.preventDefault()
    //     setHeight(event.target.value);
    // }
    // const handleWidthInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault()
    //      setWidth(event.target.value);
    // }
    const handleSubmit = () => {
        onSubmit(url);
    };

    return (
        <nav className="flex px-8 py-3 justify-between blog-header z-50 w-full border-b relative transform-none md:sticky md:top-0 md:left-0 md:backdrop-blur-lg border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70">
            {/* <Image></Image> */}
            <div className="border-solid border-amber-50 border-2 flex">
                {/* default screen options */}
                <div className="flex border-solid border-yellow-500 border-2">
                    <Options name="Mobile" onClick={() => handleButtonClick('568', '320')} />
                    <Options name="Tab" onClick={() => handleButtonClick('1024', '768')} />
                    <Options name="Ipad" onClick={() => handleButtonClick('768', '1024')} />
                    <Options name="Desktop" onClick={() => handleButtonClick('900', '1440')} />
                </div>
                {/* Custom screen setter */}
                <div className="flex items-center border-solid border-red-500 border-2">
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
                    <button className="" onClick={() => handleButtonClick(inputHeight, inputWidth)}><TbHandClick size="2rem" color="white" /></button>
                </div>
                {/* website search bar */}
                <div className="flex items-center border-solid boder-teal border-2 flex">
                    <input
                        className="ml-4 p-0.5 rounded text-black-500 border-solid border-teal-500 border-2"
                        type="text"
                        placeholder="Enter website URL"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <div className="" onClick={handleSubmit}><IoIosSearch size="2rem" color="white" /></div>
                </div>
            </div>
            {/* profile section and code repo */}
            <div><IoIosArrowDown color="white" size="3rem"/></div>
        </nav>
    );
}