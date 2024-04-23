import Options from "../options/page";
import "./nav.css";
import { useState } from "react";
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
        <nav className="z-10 sticky top-0 bg-teal-100 flex justify-items-center items-center">
            {/* default screen options */}
            <div>
                <Options name="Mobile" onClick={() => handleButtonClick('568', '320')} />
                <Options name="Tab" onClick={() => handleButtonClick('1024', '768')} />
                <Options name="Ipad" onClick={() => handleButtonClick('768', '1024')} />
                <Options name="Desktop" onClick={() => handleButtonClick('900', '1440')} />
            </div>
            {/* Custom screen setter */}
            <div className="">
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
                <button className="text-center text-base text-teal-400 bg-teal-200 p-1.5 m-1.5 rounded hover:bg-teal-400 hover:text-teal-200 " onClick={() => handleButtonClick(inputHeight, inputWidth)}>Set</button>
            </div>
            {/* website search bar */}
            <div>
                <input
                    className="ml-4 p-0.5 rounded text-black-500 border-solid border-teal-500 border-2"
                    type="text"
                    placeholder="Enter website URL"
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className="text-center text-base text-teal-400 bg-teal-200 p-1.5 m-1.5 rounded hover:bg-teal-400 hover:text-teal-200" onClick={handleSubmit}>Search</button>
            </div>
        </nav>
    );
}