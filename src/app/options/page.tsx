import "./button.css";
interface ButtonProps {
    name: string;
}

export default function Options({ name }: ButtonProps) {
    return (
        <button className="Button">{name}</button>
    );
}