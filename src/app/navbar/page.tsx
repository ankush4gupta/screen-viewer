import Options from "../options/page";
import "./nav.css";
import { useState } from "react";
interface NavbarProps {
    onButtonClick: (height: string, width: string) => void;
    onSubmit:any
}
export default function NavBar({ onButtonClick,onSubmit }: NavbarProps ) {
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
        <nav className="bg-sky-950 flex justify-items-center items-center">
         {/* default screen options */}
            <div>
                <Options name="Mobile" onClick={()=> handleButtonClick('568','320')} />
                <Options name="Tab" onClick={() => handleButtonClick('1024','768')} />
                <Options name="Ipad" onClick={() => handleButtonClick('768','1024')} />
                <Options name="Desktop" onClick={() => handleButtonClick('900','1440')} />
            </div>
        {/* Custom screen setter */}
            <div className="mx-7 border-solid border-black border-2">    
                <input 
                    className="w-14 mx-4 rounded text-black-500 p-0.5"
                    placeholder="width"
                    type="text"
                    onChange={(e) => setWidth(e.target.value)} />
                <input
                    className="w-14 mx-4 rounded text-black-500 p-0.5"
                    placeholder="height"
                    type="text"
                    onChange={(e) => setHeight(e.target.value)} />
                <button onClick={() => handleButtonClick(inputHeight, inputWidth)}>Set</button>   
            </div>
            {/* website search bar */}
           <div>
                <input
                    className="ml-4 rounded text-black-500"
                    type="text"
                    placeholder="Enter website URL"
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
           </div>
        </nav>
    );
}