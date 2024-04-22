import "./button.css";
interface ButtonProps {
    name: string;
    onClick: () => void;
}

export default function Options({ name,onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="text-base text-red-50 bg-cyan-300 p-1.5 m-1.5 rounded">{name}</button>
    );
}