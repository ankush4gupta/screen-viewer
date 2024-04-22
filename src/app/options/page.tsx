import "./button.css";
interface ButtonProps {
    name: string;
    onClick: () => void;
}

export default function Options({ name,onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="text-center text-base text-teal-400 bg-teal-200 p-1.5 m-1.5 rounded hover:bg-teal-400 hover:text-teal-200">{name}</button>
    );
}