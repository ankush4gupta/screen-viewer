import Options from "../options/page";
import "./nav.css";
export default function NavBar(){
return (
    <nav className="navbar">
        <Options name="Mobile"/>
        <Options name="Tab" />
        <Options name="Desktop" />
        <Options name="Ipad" />

    </nav>
);
}