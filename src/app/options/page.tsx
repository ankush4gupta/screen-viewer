import { GoDeviceDesktop } from "react-icons/go";
import { MdTabletAndroid } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

import { TbDeviceIpad } from "react-icons/tb";

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
    };
    const IconComponent = iconComponent[name];
    return (
      
        <button onClick={onClick} className="p-2 flex items-center duration-100 ease-in-out hover:ring-blue-600 hover:ring-4 rounded-full transition  hover:bg-white/20 mx-3" > {<IconComponent size ="2.5rem" color="white"   />}</button > 
    );
}