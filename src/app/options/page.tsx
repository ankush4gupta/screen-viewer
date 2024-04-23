import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";
import { MdTabletAndroid } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

import { TbDeviceIpad } from "react-icons/tb";
import "./button.css";
interface ButtonProps {
    name: string;
    onClick: () => void;
}

export default function Options({ name,onClick }: ButtonProps) {
    const iconComponent: { [name: string]: any } = {
        Desktop: GoDeviceDesktop,
        Mobile: IoIosPhonePortrait,
        Tab: MdTabletAndroid,
        Ipad: TbDeviceIpad

        // Add more mappings as needed
    };
    const IconComponent = iconComponent[name];
    return (
       
        <button onClick={onClick} className="border-solid border-2 border-teal mx-5" > {<IconComponent size ="2.5rem" color="white"/>}</button > 
    );
}