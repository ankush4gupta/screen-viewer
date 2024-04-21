import Options from "../options/page";
import "./nav.css";
export default function NavBar() {
    return (
        <nav className="bg-sky-950 flex justify-items-center items-center">
            <div>
                <Options name="Mobile" />
                <Options name="Tab" />
                <Options name="Desktop" />
                <Options name="Ipad" />
            </div>
            <div className="mx-7 border-solid border-black border-2">
                <input
                    className="w-14 mx-4 rounded text-black-500 p-0.5"
                    placeholder="height"
                    type="text" />
                <input 
                    className="w-14 mx-4 rounded text-black-500 p-0.5"
                    placeholder="width"
                type="text" />
                <Options name="set" />
            </div>
            
           <div>
                <input
                    className="ml-4 rounded text-black-500"
                    type="text"
                    placeholder="Enter website URL"
                // value={""}
                // onChange={(e) => setWebsiteUrl(e.target.value)}
                />
                <Options name="Search" />
           </div>
            

        </nav>
    );
}